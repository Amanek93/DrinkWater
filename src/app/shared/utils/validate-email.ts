export const validateEmail = (email: string | undefined) => {
    if (!email || email === '') return false;

    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};
