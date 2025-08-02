export const getRandomColor = (): string => {
  const randomByte = () => Math.floor(Math.random() * 256);
  const toHex = (byte: number) => byte.toString(16).padStart(2, "0");
  return `#${toHex(randomByte())}${toHex(randomByte())}${toHex(randomByte())}`;
};
