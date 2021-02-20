<template>
    <div
        class="form-input"
        :class="[theme ? 'form-input--' + theme : '', dynamic ? 'form-input--dynamic' : 'form-input--static']"
    >
        <slot />
        <label :for="forText">
            {{ placeholder }}
        </label>
    </div>
</template>

<script>
    export default {
        name: "FormInput",
        props: {
            forText: {
                type: String,
                required: true
            },
            placeholder: {
                type: String,
                required: true
            },
            theme: {
                type: String,
                required: false
            },
            dynamic: {
                type: Boolean,
                default: true
            }
        }
    };
</script>

<style lang="scss">
    .form-input {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .form-input--dynamic {
        label {
            position: absolute;
            left: 0.75rem;
            top: 0.25rem;
            font-size: 75%;
            opacity: 1;
            transition: all 0.2s;
            pointer-events: none;
            color: rgba(0, 0, 0, 0.75);
        }

        &.form-input--light {
            label {
                color: rgba(255, 255, 255, 0.5);
            }

            input:focus,
            textarea:focus {
                box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.25);
                border-color: rgba(255, 255, 255, 0.25);
            }
        }

        input,
        select,
        textarea {
            padding: 1.25rem 0.75rem 0.25rem;

            &:placeholder {
                opacity: 1;
                transition: all 0.2s;
            }

            &:placeholder-shown:not(:focus)::placeholder {
                opacity: 0;
            }

            &:placeholder-shown:not(:focus) + * {
                font-size: 120%;
                top: 0.65rem;
                left: 0.75rem;
                opacity: 1;
                font-weight: normal;
                color: rgba(0, 0, 0, 0.5);
            }
        }

        input[type="number"] {
            padding: 1.25rem 0.75rem 0.25rem;
        }

        select {
            padding: 1.25rem 1rem 0.25rem 0.5rem;
            appearance: none;
            background: white;
        }
    }
</style>
