<template>
    <li class="process-item-wrapper">
        <div class="process-item-arrow"
            :class="{
                'white-bg': iconBgColor === 'white',
                'green-bg': iconBgColor === 'green'
            }">
            <IconsArrowRight v-if="iconName === 'arrow'" />
            <IconsTickFilled v-if="iconName === 'tick'" />
        </div>
        <h4 class="process-item__title">
            {{ stepItem.title }}
        </h4>
        <ul class="process-item-list">
            <li class="process-item-list__item"
                v-for="item in stepItem.list">
                {{ item }}
            </li>
        </ul>
    </li>
</template>

<script setup>
defineProps({
    stepItem: {
        type: Object,
        required: true
    },
    iconName: {
        // "arrow" | "tick"
        type: String,
        required: true
    },
    iconBgColor: {
        // "white" | "green"
        type: String,
        required: true
    }
})

</script>

<style scoped lang="scss">
.process-item-wrapper {

    .process-item-arrow {
        width: 106px;
        height: 106px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        &.white-bg {
            background: $white;
        }

        &.green-bg {
            background: $light-green;
        }
    }

    .process-item__title {
        margin-top: 57px;
        font-size: 27px;
        font-weight: 600;
        color: $white;
    }

    .process-item-list {
        margin-top: 20px;
        padding-right: 20px;

        .process-item-list__item {
            color: $white;
            font-size: 24px;
            opacity: 0.8;
            line-height: 1.5;
            list-style: disc;
            margin-left: 28px;
        }
    }
}
</style>