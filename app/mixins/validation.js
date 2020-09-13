export default {
    methods: {
        hasNumber(text) {
            return /\d/.test(text);
        },
        hasLowercase(text) {
            return /[a-z]/.test(text);
        },
        hasUppercase(text) {
            return /[A-Z]/.test(text);
        },
        hasIllegalCharacters(text) {
            return !/^[a-z0-9]+$/i.test(text);
        },
        validateUsername(username) {
            const errors = [];
            if (username.length < 4) {
                errors.push("Longer than 3 characters");
            }
            if (this.hasIllegalCharacters(username)) {
                errors.push("Only numbers and letters");
            }
            return errors;
        },
        validateEmail(email) {
            const errors = [];
            if (email.length < 5) {
                errors.push("Longer than 4 characters");
            }
            const regex = /\S+@\S+\.\S+/;
            if (!regex.test(email)) {
                errors.push("Email address is not valid");
            }
            return errors;
        },
        validatePassword(password) {
            const errors = [];
            if (password.length < 8) {
                errors.push("Longer than 7 characters");
            }
            if (!this.hasNumber(password)) {
                errors.push("Has a number");
            }
            if (!this.hasLowercase(password)) {
                errors.push("Has a lowercase character");
            }
            if (!this.hasUppercase(password)) {
                errors.push("Has an uppercase character");
            }
            return errors;
        }
    }
}
