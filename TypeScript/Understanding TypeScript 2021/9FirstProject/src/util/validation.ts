// validation logic

export interface Validatable {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
}

export const validate = (validateableInput: Validatable): boolean => {
    let isValid = true;
    if (validateableInput.required) {
        isValid = isValid && validateableInput.value.toString().trim().length != 0;
    }
    if (validateableInput.minLength) {
        isValid = isValid && validateableInput.value.toString().trim().length >= validateableInput.minLength;
    }
    if (validateableInput.maxLength) {
        isValid = isValid && validateableInput.value.toString().trim().length <= validateableInput.maxLength;
    }
    return isValid;
};
