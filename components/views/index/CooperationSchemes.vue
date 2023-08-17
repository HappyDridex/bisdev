<template>
    <section class="cooperation_schemes-wrapper">
        <header class="cooperation-header">
            <h2 class="cooperation-header__title">Схемы сотрудничества</h2>
            <span class="cooperation-header__slash">/&nbsp;</span>
            <span class="cooperation-header__title-comment"
                >Ключевые форматы</span
            >
        </header>
        <p class="cooperation-comment">
            Мы предлагаем различные условия сотрудничества для того, чтобы
            каждый клиент мог подобрать для себя максимально выгодное решение.
        </p>
        <div class="cooperation__shemes">
            <UiCooperationSchemesItem v-for="item in 3" />
        </div>
        <footer class="cooperation_footer">
            <p class="cooperation_footer__comment">
                В нашей команде работают лучшие юристы в IT-сфере — именно
                поэтому процесс заключения договора на разработку с нами будет
                максимально быстрым и простым, а договор — всесторонне
                обеспечивать Вашу и нашу безопасность.
            </p>
        </footer>
    </section>
</template>

<style scoped lang="scss">
.cooperation_schemes-wrapper {
    .cooperation-header {
        display: flex;
        align-items: center;
        .cooperation-header__title {
            font-size: 70px;
            font-weight: 700;
            color: $black;
            margin-right: 15px;
        }
        .cooperation-header__slash,
        .cooperation-header__title-comment {
            font-size: 40px;
        }
        .cooperation-header__slash {
            color: $light-blue;
        }
    }
    .cooperation-comment {
        width: 46%;
        color: $black-muted;
        margin-top: 40px;
        font-size: 24px;
    }
    .cooperation__shemes {
        margin-top: 60px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
    }
}
</style>
