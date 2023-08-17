<template>
    <section class="key-directions-wrapper">
        <div class="container b">
            <header class="directions-header">
                <h2 class="directions-header__title">Ключевые направления работы</h2>
                <p class="page-numeration-title">03</p>
            </header>
            <div class="directions-list">
                <p class="directions-list__item"
                    v-for="direction in keyDirections">
                    <span class="directions-list__item_highlight">#</span>{{ direction }}
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
const keyDirections = [
    "Разработка ПО", "#Техническая поддержка и модернизация",
    "Проектирование IT-решений",
    "IT-дизайн",
    "Обеспечение бесперебойной работы ПО, удобства эксплуатации и внедрение нового функционала",
    "Разработка дизайн-макетов UX/UI пользовательского графического интерфейса",
    "Непосредственное написание программного кода проекта",
    "Сбор и анализ всех требований заказчика, создание прототипа, подготовка требований к программному обеспечению"
];
</script>

<style scoped lang="scss">
.key-directions-wrapper {
    .directions-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .directions-header__title {
        color: $black;
        font-size: 40px;
        font-weight: 700;
    }

    .directions-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        ;
        grid-template-rows: repeat(3, 1fr);
        gap: 8px;

        .directions-list__item {
            display: inline-block;
            width: 100%;
            font-size: 26px;
            font-weight: 600;
            padding: 20px 40px;
            border-radius: 32px;
            background: $white;

            .directions-list__item_highlight {
                color: $light-blue;
                font-weight: 600;
            }
        }
    }
}
</style>