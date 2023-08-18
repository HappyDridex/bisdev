<template>
    <section class="process-wrapper">
        <div class="container">
            <header class="process-header">
                <div class="process-header-top">
                    <h2 class="process-header-top__title">Процесс</h2>
                    <p class="page-numeration-title"
                        style="position: relative; color: rgba(179, 189, 240, 0.08); z-index: 1;">05</p>
                </div>
                <p class="process-header__comment">Процесс производства IT-продукта от начальных требований до релиза.</p>
            </header>
            <div class="process-steps">
                <IconsDashedLine class="process-steps__dashed-line-icon" />
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
        <!-- <IconsEllipseGradient class="b process__ellipse-gradient-icon" /> -->
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

]


</script>


<style scoped lang="scss">
.process-wrapper {
    background: $light-blue;
    position: relative;
    overflow: hidden;

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
    }

    .process-header__comment {
        width: 45%;
        font-size: 27px;
        margin-top: 40px;
        color: $white;
        opacity: 0.8;
    }

    .process-steps {
        margin-top: 120px;
        position: relative;

        .process-steps__list {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            position: relative;
            z-index: 1;
            gap: 16px;
        }

        .process-steps__dashed-line-icon {
            width: 85%;
            position: absolute;
            top: 50px;
            z-index: 0;
        }

    }

    .process__ellipse-gradient-icon {
        position: absolute;
        // TODO
    }

    .process-gradient-box {
        @include gradient-border(calc(77% + 162px), calc(61% + 162px), 162px, 281px, $light-blue, top center, transparent, rgba(255, 255, 255, 0.08));
        position: absolute;
        right: 0;
        top: 0;
        z-index: 0;
        transform: translate(40%, -40%);
    }

}
</style>