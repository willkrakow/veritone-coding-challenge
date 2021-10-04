export function removeQuotes(str: string) {
    return str.replace(/['"]+/g, '');
}

export function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}