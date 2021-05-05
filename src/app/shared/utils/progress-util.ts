export const progressUtil = (current: number, max: number, percentage?: boolean) => {
    let value = (current / max);
    if (!percentage) {
        if (Number(value) <= 1) {
            return value;
        } else {
            return 1;
        }
    } else {
        return Math.round(value*100);
    }
};
