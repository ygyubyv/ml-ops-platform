export const parseCsvToObjects = (csvText: string) => {
  const lines = csvText
    .trim()
    .split(/\r?\n/)
    .filter((line) => line.trim() !== "" && !/^;+$/g.test(line.trim()));

  if (lines.length < 2) {
    return [];
  }

  const headers = lines[0].split(";").map((h) => h.trim());

  const rows = lines.slice(1).map((line) => {
    const values = line.split(";").map((v) => v.trim());

    const obj: Record<string, any> = {};

    headers.forEach((header, idx) => {
      let val: any = values[idx] ?? "";

      if (/^\d+,\d+$/.test(val)) {
        val = parseFloat(val.replace(",", "."));
      } else if (!isNaN(Number(val))) {
        val = Number(val);
      }

      obj[header] = val;
    });

    return obj;
  });

  return rows;
};
