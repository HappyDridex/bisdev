<template>
    <section class="major-developments-wrapper">
        <div class="developments-container">
            <p class="page-numeration-title developments-page-title">06</p>
            <div class="developments-articles">
                <h2 class="developments-articles__title">Особые разработки</h2>
                <div class="developments-articles-list">
                    <article class="developments-article"
                        v-for="article in developmentsList"
                        :key="article.title">
                        <h3 class="developments-article__title"
                            v-text="article.title"></h3>
                        <p class="developments-article__description"
                            v-text="article.description"></p>
                    </article>
                </div>
            </div>
            <div class="developments-illustration">
                <IllustrationsBlueBrainWithPersonCards />
            </div>
        </div>
    </section>
</template>

<script setup>

const developmentsList = [
    {
        title: "Искусственный интеллект\nв бизнес-технологиях",
        description: "Одно из ключевых направлений работы нашей компании — создание моделей искусственного интеллекта, которые предназначены для более эффективного решения задач широкого спектра за счет непрерывности работы, исключения человеческого фактора и постоянного дообучения в режиме реального времени."
    },
    {
        title: "Другая сфера наших интересов —\nФинТех и Блокчейн.",
        description: "Финансовые технологии (ФинТех) — универсальный термин, относящийся к программному обеспечению, мобильным приложениям и иным технологиям, созданным для улучшения и автоматизации традиционных форм финансирования как для бизнеса, так и для потребителей.\nФинтех может включать в себя все, от простых приложений для мобильных платежей до сложных сетей блокчейнов, в которых хранятся зашифрованные транзакции. Финтех упрощает финансовые транзакции для потребителей или предприятий, делая их более доступными и в целом более доступными."
    }
]

</script>

<style scoped lang="scss">
.major-developments-wrapper {
    padding: 33px 0;

    .developments-container {
        display: grid;
        grid-template-columns: 1.15fr 1fr;
        gap: 94px;
        max-width: 1830px;
        margin: 0 auto;
        position: relative;

        .developments-page-title {
            position: absolute;
            top: 22px;
            right: 40px;
        }
    }

    .developments-articles {
        border-radius: 32px;
        background: $white;
        box-shadow: 8px 16px 32px 0px rgba(148, 152, 173, 0.12);
        padding: 27px 48px;

        .developments-articles__title {
            @include list-circle($light-blue);
            font-size: 60px;
            font-weight: 700;
            margin-bottom: 54px;
        }
    }

    .developments-articles-list {
        display: flex;
        flex-direction: column;
        gap: 80px;
    }

    .developments-article {
        .developments-article__title {
            @include list-vertical-line($light-blue);
            padding: 18px 0;
            font-size: 36px;
            font-weight: 700;
            white-space: pre;
        }

        .developments-article__description {
            margin-top: 20px;
            font-size: 22px;
            color: $black-muted;
        }
    }

    .developments-illustration {
        padding: 5px 20px;

        svg {
            height: 100%;
            width: 100%;
        }
    }

}
</style>