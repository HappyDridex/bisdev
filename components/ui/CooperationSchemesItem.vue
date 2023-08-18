<template>
    <article class="shemes-item-wrapper">
        <header class="shemes-item-header">
            <slot />
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

    .shemes-item-header {
        display: flex;
        flex-direction: column;
        gap: 36px;
        aspect-ratio: 3 / 1;

        .shemes-item-header__title {
            color: $light-blue;
            font-size: 27px;
            font-weight: 600;
        }
    }

    .shemes-item-description {
        margin-top: 20px;
        font-size: 24px;
    }
}
</style>
