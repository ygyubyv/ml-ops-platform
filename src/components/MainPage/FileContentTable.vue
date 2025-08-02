<template>
  <section class="max-w-6xl mx-auto px-4 py-8" v-if="currentFileContent">
    <DataTable
      v-model:selection="selectedExperiments"
      :value="uniqueExperiments"
      :rows="10"
      v-model:filters="filters"
      paginator
      showGridlines
      dataKey="unique_id"
      selectionMode="multiple"
      filterDisplay="menu"
      :globalFilterFields="['experiment_id']"
    >
      <template #header>
        <div class="flex justify-between">
          <Button
            type="button"
            icon="pi pi-filter-slash"
            label="Clear"
            variant="outlined"
            @click="clearFilter()"
          />
          <IconField>
            <InputIcon>
              <i class="pi pi-search" />
            </InputIcon>
            <InputText
              v-model="filters['global'].value"
              placeholder="Keyword Search"
            />
          </IconField>
        </div>
      </template>

      <template #empty> No experiments found. </template>
      <template #loading> Loading experiments data. Please wait. </template>

      <Column
        selectionMode="multiple"
        style="width: 3rem"
        :exportable="false"
      ></Column>

      <Column field="experiment_id" header="Experiment ID" sortable>
        <template #body="{ data }">
          {{ data.experiment_id }}
        </template>
        <template #filter="{ filterModel }">
          <InputText
            v-model="filterModel.value"
            type="text"
            placeholder="Search by experiment_id"
          />
        </template>
      </Column>
    </DataTable>
  </section>
</template>

<script setup lang="ts">
import { useFileStore } from "@/stores/useFileStore";
import {
  DataTable,
  Column,
  Button,
  InputIcon,
  InputText,
  IconField,
} from "primevue";
import { storeToRefs } from "pinia";
import { useCsvStore } from "@/stores/useCsvStore";
import { onMounted } from "vue";

const fileStore = useFileStore();
const csvStore = useCsvStore();

const { currentFileContent } = storeToRefs(fileStore);
const { filters, selectedExperiments, uniqueExperiments } =
  storeToRefs(csvStore);
const { initFilters, clearFilter } = csvStore;

onMounted(initFilters);
</script>
