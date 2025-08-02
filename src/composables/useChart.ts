import type { Experiment } from "@/types/Experiment";
import { getRandomColor } from "@/utils/getRandomColor";
import { computed, ref, type Ref } from "vue";

export const useChart = (chartData: Ref<Experiment[]>) => {
  const chartOptions = ref();

  const groupedByMetric = computed(() => {
    const groups: Record<
      string,
      Record<string, { x: number; y: number }[]>
    > = {};

    for (const row of chartData.value) {
      if (!groups[row.metric_name]) {
        groups[row.metric_name] = {};
      }

      const experimentKey = String(row.experiment_id);

      if (!groups[row.metric_name][experimentKey]) {
        groups[row.metric_name][experimentKey] = [];
      }

      groups[row.metric_name][experimentKey].push({
        x: row.step,
        y: row.value,
      });
    }

    for (const metric in groups) {
      for (const expId in groups[metric]) {
        groups[metric][expId].sort((a, b) => a.x - b.x);
      }
    }

    return groups;
  });

  const getChartData = (
    pointsByExperiment: Record<string, { x: number; y: number }[]>
  ) => {
    const datasets = [];
    const allX = new Set<number>();

    for (const [experimentId, points] of Object.entries(pointsByExperiment)) {
      const color = getRandomColor();

      datasets.push({
        label: `Experiment ${experimentId}`,
        data: points.map((p) => ({ x: p.x, y: p.y })),
        fill: false,
        tension: 0.3,
        borderColor: color,
        backgroundColor: color,
        pointBackgroundColor: color,
        pointBorderColor: color,
      });

      points.forEach((p) => allX.add(p.x));
    }

    const labels = [...allX].sort((a, b) => a - b);

    return {
      labels,
      datasets,
    };
  };

  const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    const textColor = documentStyle.getPropertyValue("--p-chart-text").trim();

    const textColorSecondary = documentStyle
      .getPropertyValue("--p-chart-muted")
      .trim();

    const gridColor = documentStyle.getPropertyValue("--p-chart-grid").trim();

    const tooltipBg = documentStyle
      .getPropertyValue("--p-chart-tooltip-bg")
      .trim();

    chartOptions.value = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColorSecondary,
          },
        },
        tooltip: {
          titleColor: textColor,
          bodyColor: textColor,
          backgroundColor: tooltipBg,
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: gridColor,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: gridColor,
          },
        },
      },
    };
  };

  return { chartOptions, setChartOptions, groupedByMetric, getChartData };
};
