// import { parseCsvToObjects } from "@/utils/csvParser";
// import { showNotification } from "@/utils/showNotification";
// import { defineStore } from "pinia";
// import { computed, ref } from "vue";

// export const useFileStore = defineStore("file", () => {
//   const currentFileContent = ref("");
//   const selectedExperiment = ref();

//   const uniqueExperiments = computed(() => {
//     const seen = new Set();
//     return formattedCsv.value.filter((row) => {
//       if (seen.has(row.experiment_id)) return false;
//       seen.add(row.experiment_id);
//       return true;
//     });
//   });

//   const metricsByExperiment = computed(() => {
//     if (!selectedExperiment.value) return {};

//     const filtered = formattedCsv.value.filter(
//       (row) => row.experiment_id === selectedExperiment.value.experiment_id
//     );

//     return filtered.reduce((acc, row) => {
//       if (!acc[row.metric_name]) acc[row.metric_name] = [];
//       acc[row.metric_name].push({ x: row.step, y: row.value });
//       return acc;
//     }, {} as Record<string, { x: number; y: number }[]>);
//   });

//   const formattedCsv = computed(() => {
//     console.log(currentFileContent.value);
//     return parseCsvToObjects(currentFileContent.value);
//   });

//   const setFileContent = (file: File) => {
//     const reader = new FileReader();

//     reader.readAsText(file);

//     reader.onload = (e) => {
//       const content = e.target?.result as string;

//       if (!content.trim().length) {
//         showNotification("error", "No data found!");
//         return;
//       }

//       currentFileContent.value = content;
//     };
//   };

//   return {
//     currentFileContent,
//     selectedExperiment,
//     formattedCsv,
//     uniqueExperiments,
//     metricsByExperiment,
//     setFileContent,
//   };
// });


<!-- <template>
  <section
    v-if="selectedExperimentData.length"
    class="max-w-6xl mx-auto px-4 py-8 space-y-8"
  >
    <div v-for="(points, metricName) in groupedByMetric" :key="metricName">
      <h2 class="text-xl font-semibold mb-2">{{ metricName }}</h2>
      <Chart
        type="line"
        :data="getChartData(points, metricName)"
        :options="chartOptions"
        class="w-full"
      />
    </div>
  </section>
  <div v-else class="text-center text-gray-500 py-8">
    Select an experiment to see charts.
  </div>
</template>

<script setup lang="ts">
import Chart from "primevue/chart";
import { computed, onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useFileStore } from "@/stores/useFileStore";

const { selectedExperiment, formattedCsv } = storeToRefs(useFileStore());

const chartOptions = ref();

const selectedExperimentData = computed(() =>
  formattedCsv.value.filter(
    (row) => row.experiment_id === selectedExperiment.value?.experiment_id
  )
);

const groupedByMetric = computed(() => {
  const groups: Record<string, { x: number; y: number }[]> = {};

  for (const row of selectedExperimentData.value) {
    if (!groups[row.metric_name]) groups[row.metric_name] = [];
    groups[row.metric_name].push({ x: row.step, y: row.value });
  }

  for (const metric in groups) {
    groups[metric].sort((a, b) => a.x - b.x);
  }

  return groups;
});

const getChartData = (points: { x: number; y: number }[], label: string) => {
  const documentStyle = getComputedStyle(document.documentElement);

  const borderColor =
    documentStyle.getPropertyValue("--p-primary-color")?.trim() || "#4F46E5";
  const backgroundColor =
    documentStyle.getPropertyValue("--p-highlight-bg")?.trim() || "#C7D2FE";

  return {
    labels: points.map((p) => p.x),
    datasets: [
      {
        label,
        data: points.map((p) => p.y),
        fill: false,
        tension: 0.3,
        borderColor,
        backgroundColor,
        pointBackgroundColor: backgroundColor,
        pointBorderColor: borderColor,
      },
    ],
  };
};

const setChartOption = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--p-text-color");
  const textColorSecondary = documentStyle.getPropertyValue(
    "--p-text-muted-color"
  );
  const surfaceBorder = documentStyle.getPropertyValue(
    "--p-content-border-color"
  );

  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
    },
  };
};

onMounted(() => {
  chartOptions.value = setChartOption();
});
</script>

<style scoped>
.p-chart {
  height: 400px;
}
</style> -->

