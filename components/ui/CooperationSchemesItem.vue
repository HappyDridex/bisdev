<template>
    <article class="shemes-item-wrapper">
        <header class="shemes-item-header">
            <div>
                <slot />
            </div>
            <h3 class="shemes-item-header__title"
                v-text="scheme.title"></h3>
        </header>
        <p class="shemes-item-description"
            v-text="scheme.description">
        </p>
    </article>
</template>

<script setup>
defineProps({
    scheme: {
        type: Object,
        required: true
    }
})

</script>

<style scoped lang="scss">
.shemes-item-wrapper {
    border-radius: 32px;
    background: $white;
    padding: 40px;
    display: flex;
    flex-direction: column;

    @media(max-width: $breakpoint4) {
        border-radius: 20px;
    }

    @media(max-width: $breakpoint5) {
        padding: 16px;
    }

    .shemes-item-header {
        display: flex;
        flex-direction: column;
        gap: 36px;
        aspect-ratio: 3 / 1;

        @media(max-width: $breakpoint2) {
            aspect-ratio: initial;
        }

        @media(max-width: $breakpoint5) {
            gap: 16px;
        }

        .shemes-item-header__title {
            color: $light-blue;
            font-size: 27px;
            font-weight: 600;

            @media(max-width: $breakpoint3) {
                font-size: 26px;
            }

            @media(max-width: $breakpoint5) {
                font-size: 20px;
            }
        }

        :slotted(svg) {
            width: 40px;

            @media(max-width: $breakpoint5) {
                width: 30px;
            }
        }

    }

    .shemes-item-description {
        margin-top: 20px;
        font-size: 24px;

        @media(max-width: $breakpoint3) {
            font-size: 18px;
        }

        @media(max-width: $breakpoint5) {
            font-size: 16px;
        }
    }
}
</style>
