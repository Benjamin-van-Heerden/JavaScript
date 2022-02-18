// validation logic
export const validate = (validateableInput) => {
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
//# sourceMappingURL=validation.js.map