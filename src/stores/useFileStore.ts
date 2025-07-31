import { parseCsvToObjects } from "@/utils/csvParser";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useFileStore = defineStore("file", () => {
  const currentFileContent = ref("");

  const formattedCsv = computed(() => {
    return parseCsvToObjects(currentFileContent.value);
  });

  const setFileContent = (file: File) => {
    const reader = new FileReader();

    reader.readAsText(file);

    reader.onload = (e) => {
      const content = e.target?.result as string;

      currentFileContent.value = content;
    };
  };

  return { currentFileContent, formattedCsv, setFileContent };
});
