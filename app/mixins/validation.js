export default function useValidation() {
    const hasNumber = text => {
        return /\d/.test(text);
    };
    const hasLowercase = text => {
        return /[a-z]/.test(text);
    };
    const hasUppercase = text => {
        return /[A-Z]/.test(text);
    };
    const hasIllegalCharacters = text => {
        return !/^[a-z0-9]+$/i.test(text);
    };
    const validateUsername = username => {
        const errors = [];
        if (username.length < 4) {
            errors.push("Longer than 3 characters");
        }
        if (hasIllegalCharacters(username)) {
            errors.push("Only numbers and letters");
        }
        return errors;
    };
    const validateEmail = email => {
        const errors = [];
        if (email.length < 5) {
            errors.push("Longer than 4 characters");
        }
        const regex = /\S+@\S+\.\S+/;
        if (!regex.test(email)) {
            errors.push("Email address is not valid");
        }
        return errors;
    };
    const validatePassword = password => {
        const errors = [];
        if (password.length < 8) {
            errors.push("Longer than 7 characters");
        }
        if (!hasNumber(password)) {
            errors.push("Has a number");
        }
        if (!hasLowercase(password)) {
            errors.push("Has a lowercase character");
        }
        if (!hasUppercase(password)) {
            errors.push("Has an uppercase character");
        }
        return errors;
    };

    return {
        hasNumber,
        hasLowercase,
        hasUppercase,
        hasIllegalCharacters,
        validateUsername,
        validateEmail,
        validatePassword
    };
}
