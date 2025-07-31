<template>
  <section
    class="max-w-6xl mx-auto px-4 py-8"
    v-if="formattedCsv && formattedCsv.length"
  >
    <DataTable :value="formattedCsv" paginator :rows="10" dataKey="id">
      <Column
        field="experiment_id"
        header="Experiment ID"
        sortable
        filter
      ></Column>
      <Column field="metric_name" header="Metric Name" sortable filter></Column>
      <Column field="step" header="Step" sortable filter></Column>
      <Column field="value" header="Value" sortable filter></Column>
    </DataTable>
  </section>
</template>

<script setup lang="ts">
import { useFileStore } from "@/stores/useFileStore";
import { DataTable, Column } from "primevue";
import { storeToRefs } from "pinia";

const { formattedCsv } = storeToRefs(useFileStore());
</script>
