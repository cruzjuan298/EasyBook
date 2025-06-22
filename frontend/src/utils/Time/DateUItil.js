export const getTime = () => {
    return new Date();
}


export function getSpecificDay(year, month, day, hour=0, minute=0, second=0) {
    return new Date(year, month, day, hour, minute, second)
}