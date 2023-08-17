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

    .product-card {
        .product-card__title {
            margin-bottom: 16px;
            color: $dark-blue;
            font-size: 26px;
            font-weight: 600;
        }
        .product-card__description {
            font-size: 22px;
            color: $black-muted;
            font-weight: 400;
        }
    }
}
</style>
