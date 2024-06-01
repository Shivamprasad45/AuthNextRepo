export const getCurrentDateTime = () => {
  const now = new Date();
  const options: any = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };
  return now.toLocaleDateString("en-US", options);
};
