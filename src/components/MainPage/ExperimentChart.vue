<template>
  <section class="max-w-6xl mx-auto px-4 py-8" v-if="formattedCsv.length">
    <div
      v-for="(pointsByExperiment, metricName) in groupedByMetric"
      :key="metricName"
      class="mb-8 p-6 rounded-2xl border border-surface-100"
    >
      <h3 class="text-xl font-bold mb-4">
        {{ formatMetric(metricName) }}
      </h3>
      <Chart
        type="line"
        :data="getChartData(pointsByExperiment)"
        :options="chartOptions"
        class="h-80"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useChart } from "@/composables/useChart";
import { useCsvStore } from "@/stores/useCsvStore";
import Chart from "primevue/chart";

const csvStore = useCsvStore();
const { filteredCsvBasedOnSelection, formattedCsv } = storeToRefs(csvStore);

const { chartOptions, setChartOptions, groupedByMetric, getChartData } =
  useChart(filteredCsvBasedOnSelection);

const formatMetric = (metric: string) => {
  return metric[0].toUpperCase() + metric.slice(1);
};

onMounted(() => {
  setChartOptions();
});
</script>
