export const progressUtil = (current: number, max: number, fixed?: boolean) => {
    const percentage = ((current / max) * 100).toFixed(0);
    if (fixed) {
        if (Number(percentage) <= 100) {
            return percentage;
        } else {
            return 100;
        }
    } else {
        return percentage;
    }
};
