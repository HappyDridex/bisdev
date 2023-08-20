<template>
    <article class="about-card-wrapper">
        <h3 class="about-card__title">{{ title }}</h3>
        <p class="about-card__description">
            {{ description }}
        </p>
        <ul v-if="listMode"
            class="about-card__list">
            <li class="about-card__list-item"
                v-for="item in listItems"
                :key="item">
                {{ item }}
            </li>
        </ul>

        <div class="about-card__icon">
            <slot />
        </div>
    </article>
</template>

<script setup>

defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    listMode: {
        type: Boolean,
        required: false
    },
    listItems: {
        type: Array,
        required: false
    }
});
</script>

<style scoped lang="scss">
.about-card-wrapper {
    background: $white;
    border-radius: 32px;
    padding: 40px;
    width: 100%;
    position: relative;

    @media(max-width: $breakpoint5) {
        border-radius: 20px;
        padding: 15px;
    }

    .about-card__title {
        color: $light-blue;
        font-size: 27px;
        font-weight: 600;
        margin-bottom: 16px;

        @media(max-width: $breakpoint3) {
            font-size: 24px;
        }

        @media(max-width: $breakpoint5) {
            font-size: 16px;
        }
    }

    .about-card__description,
    .about-card__list-item {
        color: $black-muted;
        font-size: 24px;
        position: relative;
        z-index: 1;

        @media(max-width: $breakpoint3) {
            font-size: 18px;
        }

        @media(max-width: $breakpoint5) {
            font-size: 14px;
        }
    }

    .about-card__icon {
        position: absolute;
        right: 25px;
        bottom: 8px;
        z-index: 0;

        :slotted(svg) {
            width: 80px;

            @media(max-width: $breakpoint5) {
                width: 60px;
            }
        }
    }

    .about-card__list {
        .about-card__list-item {
            list-style: initial;
            list-style-position: outside;
            margin-left: 36px;

            @media(max-width: $breakpoint5) {
                margin-left: 18px;
            }
        }
    }

}
</style>