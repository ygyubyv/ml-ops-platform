import { ref } from "vue";
import { FilterMatchMode, FilterOperator } from "@primevue/core/api";

export const useCsvTable = () => {
  const filters = ref();

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

  return { filters, initFilters, clearFilter };
};
