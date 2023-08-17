<template>
    <article class="shemes-item-wrapper">
        <header class="shemes-item-header">
            <IconsLockKey />
            <h3 class="shemes-item-header__title">Проект под ключ</h3>
        </header>
        <p class="shemes-item-description">
            Мы заранее оцениваем стоимость выполнения проекта от проектирования
            до полной реализации, предлагаем к заключению единый договор
            проекта, предусматривающий возможности для заказчика вносить правки
            в ТЗ в процессе исполнения. Обращаем внимание, что стоимость
            не каждого проекта возможно заранее оценить — все зависит от
            качества и полноты технического задания и сложности проекта.
        </p>
    </article>
</template>

<style scoped lang="scss">
.shemes-item-wrapper {
    border-radius: 32px;
    background: $white;
    padding: 40px;
    .shemes-item-header {
        display: flex;
        flex-direction: column;
        gap: 36px;
        .shemes-item-header__title {
            color: $light-blue;
            font-size: 27px;
            font-weight: 600;
        }
    }
    .shemes-item-description {
        margin-top: 30px;
        font-size: 24px;
    }
}
</style>
