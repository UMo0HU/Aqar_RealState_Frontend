const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[a-zA-Z]+$/
const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/

export const validateName = (name: string) => {
    return nameRegex.test(name) && (name.length >= 2 && name.length <= 30);
} 

export const validateEmail = (email: string) => {
    return emailRegex.test(email);
} 

export const validatePassword = (password: string) => {
    return passwordRegex.test(password);
} 