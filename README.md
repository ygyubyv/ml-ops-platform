# ML OPS PLATFORM

> A simple frontend application for uploading, inspecting, and visualizing machine learning experiment logs from CSV files.

---

> [Live Demo](https://proud-pond-023937010.1.azurestaticapps.net/)

## Overview

**ML OPS PLATFORM** allows users to upload CSV files containing logged metrics from ML training experiments, view a list of experiments, select one or multiple for comparison, and visualize tracked metrics (e.g., loss, accuracy) over training steps using interactive line charts.

### Key Features:

- Upload CSV files directly from user’s machine;
- Display unique experiments extracted from the file;
- Multi-select experiments for side-by-side visualization;
- Render line charts for each tracked metric;
- Light and dark theme support with toggle;
- Responsive UI built with Tailwind CSS and PrimeVue.

---

## Technologies Used

### Frontend

- **Vue 3 (Composition API)**
- **TypeScript**
- **Tailwind CSS**
- **PrimeVue**

---

## Infrastructure

- Hosted on Azure Static Web Apps
- CI/CD via GitHub Actions
