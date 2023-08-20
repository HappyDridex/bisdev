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

        <div>
            <h4 class="process-item__title">
                {{ stepItem.title }}
            </h4>

            <ul class="process-item-list">
                <li class="process-item-list__item"
                    v-for="item in stepItem.list">
                    {{ item }}
                </li>
            </ul>
        </div>

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
    display: flex;
    flex-direction: column;

    &:not(:last-child) .process-item-arrow {
        @media(max-width: $breakpoint2) {
            transform: rotate(90deg);
        }
    }

    @media(max-width: $breakpoint2) {
        flex-direction: row;
        gap: 36px;
    }

    @media(max-width: $breakpoint4) {
        gap: 20px;
    }

    @media(max-width: $breakpoint5) {
        gap: 14px;
    }

    .process-item-arrow {
        width: 106px;
        height: 106px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;

        @media(max-width: $breakpoint4) {
            width: 60px;
            height: 60px;
        }

        @media(max-width: $breakpoint5) {
            width: 40px;
            height: 40px;
        }

        svg {
            @media(max-width: $breakpoint4) {
                width: 30px;
            }

            @media(max-width: $breakpoint5) {
                width: 20px;
            }
        }

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


        @media(max-width: $breakpoint2) {
            margin-top: 22px;
        }

        @media(max-width: $breakpoint3) {
            font-size: 27px;
            margin-top: 16px;
        }

        @media(max-width: $breakpoint5) {
            margin-top: 2px;
            font-size: 18px;
        }
    }

    .process-item-list {
        margin-top: 20px;
        padding-right: 20px;

        @media(max-width: $breakpoint5) {
            margin-top: 12px;
        }

        .process-item-list__item {
            color: $white;
            font-size: 24px;
            opacity: 0.8;
            line-height: 1.5;
            list-style: disc;
            margin-left: 28px;

            @media(max-width: $breakpoint3) {
                font-size: 22px;
            }

            @media(max-width: $breakpoint5) {
                margin-left: 16px;
                font-size: 16px;
            }
        }
    }
}
</style>