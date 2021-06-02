export const toCapitalizeFirstLetter = (str: string | undefined) => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};
