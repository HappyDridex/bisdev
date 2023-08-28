<template>
    <section class="process-wrapper">
        <div class="container process-container">
            <header class="process-header">
                <div class="process-header-top">
                    <h2 class="process-header-top__title">Процесс</h2>
                    <p class="page-numeration-title"
                        style="position: relative; color: rgba(179, 189, 240, 0.08); z-index: 1;">05</p>
                </div>
                <p class="process-header__comment">Процесс производства IT-продукта от начальных требований до релиза.</p>
            </header>
            <div class="process-steps">

                <IconsDashedLineHorizontal class="process-steps__dashed-line-icon-horizontal" />
                <IconsDashedLineVertical class="process-steps__dashed-line-icon-vertical" />

                <ul class="process-steps__list">
                    <UiProcessStepItem v-for="(step, idx) in processSteps"
                        :key="step.title"
                        :step-item="step"
                        :icon-bg-color="idx >= processSteps.length - 2
                            ? 'green'
                            : 'white'
                            "
                        :icon-name="idx === processSteps.length - 1
                            ? 'tick'
                            : 'arrow'
                            " />
                </ul>
            </div>
        </div>

        <div class="process-gradient-box"></div>
        <div class="process-ellipse-gradient-icon"></div>

    </section>
</template>

<script setup>

const processSteps = [
    {
        title: "Концептуальное проектирование",
        list: ["Бизнес-требования",
            "Функциональные требования",
            "Модель данных - Прототип",
            "(UI) - Бизнес-правила",
            "Нефункциональные требования"]
    },
    {
        title: "Техническое проектирование",
        list: ["Программные юниты",
            "Спецификация API",
            "Протоколы взаимодействия между компонентами",
            "Протоколы интеграции с внешними системами",
            "Инфраструктура"]
    },
    {
        title: "Разработка первой версии",
        list: ["Разработка макетов UI",
            "Разработка кода",
            "Разработка тестовой документации",
            "Тестирование промежуточных результатов"]
    },
    {
        title: "Ввод в эксплуатацию",
        list: ["Стабилизация ПО",
            "Подготовка инфраструктуры",
            "Ввод в эксплуатацию",
            "Обучение пользователей"]
    },
    {
        title: "Развитие",
        list: ["Аналитика изменений",
            "Актуализация требований",
            "Актуализация технического проекта",
            "Планирование релизов",
            "Разработка и тестирование",
            "Выпуск релиза"]
    },

];
</script>


<style scoped lang="scss">
.process-wrapper {
    background: $light-blue;
    position: relative;
    overflow: hidden;

    .process-container {
        position: relative;
        z-index: 1;
    }

    .process-header-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .process-header-top__title {
        font-size: 70px;
        font-weight: 700;
        color: $white;
        @include list-circle($light-green);

        @media(max-width: $breakpoint3) {
            font-size: 60px;
        }

        @media(max-width: $breakpoint4) {
            font-size: 40px;
        }

        @media(max-width: $breakpoint5) {
            font-size: 24px;
        }
    }

    .process-header__comment {
        width: 45%;
        font-size: 27px;
        margin-top: 40px;
        color: $white;
        opacity: 0.8;

        @media(max-width: $breakpoint2) {
            width: 60%;
        }

        @media(max-width: $breakpoint3) {
            font-size: 20px;
            width: 80%;
        }

        @media(max-width: $breakpoint5) {
            width: 100%;
            margin-top: 20px;
            font-size: 16px;
        }

    }

    .process-steps {
        margin-top: 120px;
        position: relative;

        @media(max-width: $breakpoint3) {
            margin-top: 38px;
        }

        @media(max-width: $breakpoint5) {
            margin-top: 24px;
        }

        .process-steps__list {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            position: relative;
            z-index: 1;
            gap: 16px;

            @media(max-width: $breakpoint2) {
                grid-template-columns: 1fr;
                gap: 24px;
            }
        }

        .process-steps__dashed-line-icon-horizontal {
            position: absolute;
            z-index: 0;
            width: 85%;
            top: 50px;

            @media(max-width: $breakpoint2) {
                display: none;
            }
        }

        .process-steps__dashed-line-icon-vertical {
            display: none;

            @media(max-width: $breakpoint2) {
                position: absolute;
                top: 0;
                left: 50px;
                z-index: 0;
                display: inline-block;
                height: 83%;
            }

            @media(max-width: $breakpoint4) {
                left: 28px;
            }

            @media(max-width: $breakpoint5) {
                left: 18px;
            }
        }


    }

    .process-ellipse-gradient-icon {
        position: absolute;
        top: -12%;
        left: 3%;
        z-index: 0;
        transform: rotate(116deg);
        @include gradient-ellipse(2119px, 904px);
    }

    .process-gradient-box {
        @include gradient-border(calc(77% + 162px), calc(61% + 162px), 162px, 281px, $light-blue, top center, transparent, rgba(255, 255, 255, 0.08));
        position: absolute;
        right: 0;
        top: 0;
        z-index: 0;
        transform: translate(40%, -40%);

        @media(max-width: $breakpoint4) {
            @include gradient-border(calc(77% + 162px), calc(61% + 162px), 102px, 261px, $light-blue, top center, transparent, rgba(255, 255, 255, 0.08));
        }

        @media(max-width: $breakpoint5) {
            @include gradient-border(77%, 51%, 72px, 221px, $light-blue, top center, transparent, rgba(255, 255, 255, 0.08));
        }
    }

}
</style>