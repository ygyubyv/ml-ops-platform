import { computed, ref, watch } from "vue";
import { defineStore, storeToRefs } from "pinia";
import { FilterMatchMode, FilterOperator } from "@primevue/core/api";
import { useFileStore } from "./useFileStore";
import { parseCsvToObjects } from "@/utils/csvParser";
import type { Experiment } from "@/types/Experiment";

export const useCsvStore = defineStore("csv", () => {
  const { currentFileContent } = storeToRefs(useFileStore());

  const filters = ref();
  const selectedExperiments = ref<Experiment[]>([]);

  const formattedCsv = computed(() => {
    return parseCsvToObjects(currentFileContent.value) as Experiment[];
  });

  const filteredCsvBasedOnSelection = computed(() => {
    const selectedIds = selectedExperiments.value.map(
      (exp) => exp.experiment_id
    );

    return formattedCsv.value.filter((row) =>
      selectedIds.includes(row.experiment_id)
    );
  });

  const uniqueExperiments = computed(() => {
    const uniqueExperimentsSet = new Set();
    return formattedCsv.value.filter((experiment: Experiment) => {
      if (uniqueExperimentsSet.has(experiment.experiment_id)) {
        return false;
      }

      uniqueExperimentsSet.add(experiment.experiment_id);
      return true;
    });
  });

  const initFilters = () => {
    filters.value = {
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      experiment_id: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
    };
  };

  const clearFilter = () => {
    initFilters();
  };

  return {
    filters,
    formattedCsv,
    filteredCsvBasedOnSelection,
    uniqueExperiments,
    selectedExperiments,
    initFilters,
    clearFilter,
  };
});
