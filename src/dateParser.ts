export const dateFromTimestamp = (timestamp: number): string => {
    const newDate: Date = new Date(timestamp * 1000);

    const month: string = newDate.getMonth().toString().length === 1 
        ? `0${newDate.getMonth() + 1}` 
        : `${newDate.getMonth() + 1}`;

    return `${newDate.getDate()}-${month}-${newDate.getFullYear()}`;
};
