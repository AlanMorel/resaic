<template>
    <div class="strength-indicator">
        <ul class="strength-indicator__sections">
            <li
                v-for="index in total"
                :key="index"
                :class="'strength-indicator__section--' + getStrengthColor(index)"
                class="strength-indicator__section"
            ></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "StrengthIndicator",
        props: {
            strength: {
                type: Number,
                required: true
            }
        },
        data: () => ({
            total: 4
        }),
        computed: {
            calculatedStrength() {
                return this.strength > -1 ? this.total - this.strength : 0;
            }
        },
        methods: {
            getStrengthColor(index) {
                if (index > this.calculatedStrength) {
                    return "none";
                }
                switch (this.calculatedStrength) {
                    case 1:
                        return "red";
                    case 2:
                        return "orange";
                    case 3:
                        return "yellow";
                    case 4:
                        return "green";
                }
                return "none";
            }
        }
    };
</script>

<style lang="scss">
    .strength-indicator {
        user-select: none;
        margin-top: -1rem;
        margin-bottom: 1rem;
    }

    .strength-indicator__sections {
        display: flex;
        border-radius: 0.25rem;
        overflow: hidden;
        margin-top: 1rem;
    }

    .strength-indicator__section {
        height: 0.5rem;
        width: 100%;
        border-right: solid 1px rgba(0, 0, 0, 0.25);
        transition: background-color 0.25s ease;

        &:last-of-type {
            border-right: none;
        }

        &--none {
            background-color: var(--light-gray);
        }

        &--red {
            background-color: var(--danger-red);
        }

        &--orange {
            background-color: var(--alert-orange);
        }

        &--yellow {
            background-color: var(--caution-yellow);
        }

        &--green {
            background-color: var(--success-green);
        }
    }
</style>
