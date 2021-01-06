export const isParNumber = (element : number) => {
    return element % 2 == 0;
}

export const getLocalStorageItemValue = (field: string) => {
    return JSON.parse(localStorage.getItem(field));
}