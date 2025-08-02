import { ref } from "vue";
import { defineStore } from "pinia";
import { showNotification } from "@/utils/showNotification";

export const useFileStore = defineStore("file", () => {
  const currentFileContent = ref("");

  const setFileContent = (file: File) => {
    const reader = new FileReader();

    reader.readAsText(file);

    reader.onload = (e) => {
      const content = e.target?.result as string;

      if (!content.trim().length) {
        showNotification("error", "No data found!");
        return;
      }

      currentFileContent.value = content;
    };
  };

  return {
    currentFileContent,
    setFileContent,
  };
});
