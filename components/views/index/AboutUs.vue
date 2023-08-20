<template>
    <section class="about-us-wrapper">
        <div class="container">
            <header class="about__header">
                <h2 class="about__main-title">О нас</h2>
                <p class="page-numeration-title">02</p>
            </header>
            <div class="about__cards">
                <UiAboutCard v-for="(card, idx) in cards"
                    :key="card.title"
                    :title="card.title"
                    :description="card.description"
                    :list-mode="!!card?.listItems?.length"
                    :list-items="card?.listItems"
                    :class="`card-${idx + 1}`">
                    <component :is="card.icon" />
                </UiAboutCard>
                <div class="about__illustration-card">
                    <IllustrationsPersonOnLaptop />
                </div>
            </div>
        </div>

    </section>
</template>


<script setup>

import SevenPlus from '@/components/icons/SevenPlus.vue';
import AnalyticsGraph from '@/components/icons/AnalyticsGraph.vue';
import SlashInBrackets from '@/components/icons/SlashInBrackets.vue';
import RussianCrest from '@/components/icons/RussianCrest.vue';
import SuitCase from '@/components/icons/SuitCase.vue';
import TwoPersons from '@/components/icons/TwoPersons.vue';


const cards = [
    {
        title: "Опыт разработки",
        description: "Наша команда более 7 лет успешно проектирует, разрабатывает и внедряет IT-решения, реализует проекты как для бизнес-структур, так и для государственных заказчиков.",
        icon: SevenPlus
    },
    {
        title: "Научный и аналитический подход",
        description: "Видим своей задачей не просто сделать, а сделать эффективно, в связи с чем большое внимание уделяем аналитике и правильному проектированию систем.",
        icon: AnalyticsGraph
    },
    {
        title: "Специализация",
        description: "Основа нашей деятельности — проектирование и управление разработкой it-решений и интернет-проектов разной сложности, это то что мы любим и умеем.",
        icon: SlashInBrackets
    },
    {
        title: "Аккредитация",
        description: "Мы - аккредитованная Минкомсвязи РФ IT-компания. Отечественный разработчик — это про нас.",
        icon: RussianCrest
    },
    {
        title: "Гибкость",
        description: "Наш подход к работе позволяет удовлетворить желания и идеи любого клиента:",
        listItems: ["готовы решать задачу как комплексно так и точечно", "делаем индивидуальные проекты под ключ или предлагаем более стандартизированные решения", "работаем как с самыми простыми, так и со сложными высоконагруженными системами"],
        icon: SuitCase
    },
    {
        title: "Команда профессионалов",
        description: "Штат из более чем 20 разработчиков высочайшего уровня + партнеры узкоспециализированной разработки.",
        icon: TwoPersons
    },
]

</script>

<style scoped lang="scss">
.about-us-wrapper {
    .about__header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .about__main-title {
            font-size: 70px;
            font-weight: 700;
            @include list-circle($light-blue);

            @media(max-width: $breakpoint3) {
                font-size: 60px;
            }

            @media (max-width: $breakpoint4) {
                font-size: 40px;
            }

            @media (max-width: $breakpoint4) {
                font-size: 30px;
            }

            @media(max-width: $breakpoint5) {
                font-size: 24px;
            }
        }
    }

    .about__cards {
        margin-top: 40px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-areas:
            "card1 card2 card3"
            "card4 card5 illustration-card"
            "card6 card5 illustration-card";
        gap: 16px;

        @media(max-width: $breakpoint2) {
            grid-template-columns: 1fr 1.15fr;
            grid-template-areas:
                "card1 card5"
                "card4 card5"
                "card4 illustration-card"
                "card6 illustration-card"
                "card6 illustration-card"
                "card3 card2";
        }

        @media(max-width: $breakpoint4) {
            margin-top: 24px;
            font-size: 24px;
            grid-template-columns: 1fr;
            grid-template-areas:
                "card1"
                "card2"
                "card3"
                "card4"
                "card5"
                "card6"
        }

        @media (max-width: $breakpoint5) {
            margin-top: 20px;
            font-size: 20px;
        }
    }

    .card-1 {
        grid-area: card1;
    }

    .card-2 {
        grid-area: card2;
    }

    .card-3 {
        grid-area: card3;
    }

    .card-4 {
        grid-area: card4;
    }

    .card-5 {
        grid-area: card5;
    }

    .card-6 {
        grid-area: card6;
    }

    .about__illustration-card {
        background: $white;
        border-radius: 32px;
        overflow: hidden;
        grid-area: illustration-card;

        @media(max-width: $breakpoint4) {
            display: none;
        }
    }

    .about__illustration-card svg {
        height: 100%;
        width: 100%;
    }
}
</style>