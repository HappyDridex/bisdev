<template>
    <section class="contacts-info-wrapper">
        <div class="container contacts-info__container">
            <header class="contacts-info__header">
                <h2 class="contacts-info__title">Контактная информация</h2>
                <p class="page-numeration-title"
                    style="position: relative; color: rgba(179, 189, 240, 0.08); z-index: 1;">08</p>
            </header>
            <address class="contacts-info__list">
                <p class="contacts-info__list-item">
                    <span class="contacts-info__list-item-label">Адрес</span>
                    Москва, улица, дом, офис
                </p>
                <p class="contacts-info__list-item">
                    <span class="contacts-info__list-item-label">Телефон</span>
                    <a href="tel:+79000000000">
                        +7 (900) 000 00-00
                    </a>
                </p>
                <p class="contacts-info__list-item">
                    <span class="contacts-info__list-item-label">Почта</span>
                    <a href="mailto:bisdev@gmail.com">
                        bisdev@gmail.com
                    </a>
                </p>
            </address>
            <h4 class="contacts-info__company-name">BIS<span class="d-letter">D</span>e<span class="v-letter">V</span></h4>

        </div>

        <div class="contacts-gradient-box-inner"></div>
        <div class="contacts-gradient-box-outer"></div>
    </section>
</template>

<style scoped lang="scss">
.contacts-info-wrapper {
    background: $light-blue;
    display: flex;
    position: relative;
    overflow: hidden;

    .contacts-info__container {
        width: 100%;
        position: relative;
    }

    .contacts-info__header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .contacts-info__title {
            @include list-circle($light-green);
            font-size: 70px;
            color: $white;
            font-weight: 700;
        }
    }

    .contacts-info__list {
        margin-top: 95px;
        display: flex;
        flex-direction: column;
        gap: 60px;

        .contacts-info__list-item,
        & a {
            width: fit-content;
            font-size: 32px;
            color: $white;
            display: flex;
            flex-direction: column;
            gap: 16px;

            .contacts-info__list-item-label {
                color: $white;
                font-size: 27px;
                opacity: 0.4;
            }
        }
    }

    .contacts-info__company-name {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 1;
    }

    .contacts-info__company-name,
    & span {
        color: $white;
        font-family: $main-title-font;
        font-size: 88px;
        line-height: 1;

        .d-letter {
            @include ball-in-letter(50%, 50%, translate(-50%, -60%), 20px);
        }

        .v-letter {
            @include ball-in-letter(50%, 0, translate(-50%, 100%), 20px);
        }
    }

    .contacts-gradient-box-outer,
    .contacts-gradient-box-inner {
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 0;
    }

    .contacts-gradient-box-outer {
        @include gradient-border(1462px, 896px, 112px, 221px, $light-blue, center right, transparent, rgba(255, 255, 255, 0.06));
        transform: translate(45%, 52%);
    }

    .contacts-gradient-box-inner {
        @include gradient-border(1948px, 1174px, 112px, 361px, $light-blue, top right, transparent, rgba(255, 255, 255, 0.03));
        transform: translate(50%, 48%);
    }

}
</style>