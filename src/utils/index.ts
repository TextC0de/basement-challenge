export const formatPrice = (cost: number): string => {
    const formated = cost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");

    return formated.substring(0, formated.length);
};
