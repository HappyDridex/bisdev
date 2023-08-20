<template>
    <article class="product-card-wrapper">
        <div class="product-card-icon">
            <slot />
        </div>
        <div class="product-card">
            <h3 class="product-card__title">
                {{ card.title }}
            </h3>
            <p class="product-card__description">
                {{ card.description }}
            </p>
        </div>
    </article>
</template>

<script setup>
defineProps({
    card: {
        type: Object,
        required: true,
    },
});
</script>

<style scoped lang="scss">
.product-card-wrapper {
    padding: 30px 40px 30px 30px;
    display: flex;
    gap: 16px;
    border-radius: 32px;
    border: 1px solid $grey;

    @media(max-width: $breakpoint4) {
        border-radius: 20px;
        padding: 20px;
    }

    @media(max-width: $breakpoint5) {
        padding: 14px;
        gap: 8px;
    }

    .product-card-icon {

        @media(max-width: $breakpoint4) {
            :slotted(svg) {
                width: 30px;
            }
        }

    }

    .product-card {
        .product-card__title {
            margin-bottom: 16px;
            color: $dark-blue;
            font-size: 26px;
            font-weight: 600;

            @media(max-width: $breakpoint4) {
                font-size: 22px;
            }

            @media(max-width: $breakpoint5) {
                font-size: 18px;
            }
        }

        .product-card__description {
            font-size: 22px;
            color: $black-muted;
            font-weight: 400;

            @media(max-width: $breakpoint4) {
                font-size: 18px;
            }

            @media(max-width: $breakpoint5) {
                font-size: 16px;
            }
        }
    }
}
</style>
