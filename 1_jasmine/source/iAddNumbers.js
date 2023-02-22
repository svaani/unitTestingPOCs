export const iAddNumbers = (a, b) => {
    if(isNaN(a) || isNaN(b)) throw "Error: I add only numbers"
    return Number(a)+Number(b);
};
