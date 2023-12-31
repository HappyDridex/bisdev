<template>
    <section class="key-directions-wrapper">
        <div class="container">
            <div class="directions">
                <header class="directions-header">
                    <h2 class="directions-header__title">
                        Ключевые направления работы
                    </h2>
                    <p class="page-numeration-title">03</p>
                </header>
                <div class="directions-list">
                    <p class="directions-list__item"
                        v-for="direction in keyDirections"
                        :key="direction">
                        <span class="directions-list__item_highlight">#</span>{{ direction }}
                    </p>
                </div>
            </div>
            <div class="product-types">
                <h2 class="product-types__title">
                    Виды проектируемых продуктов
                </h2>
                <div class="product-types__cards">
                    <UiProductTypeCard v-for="(card, idx) in productTypeCards"
                        :key="card.title"
                        :card="card"
                        :class="`card-${idx + 1}`">
                        <component :is="card.icon"></component>
                    </UiProductTypeCard>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import AppSquares from "@/components/icons/AppSquares.vue";
import MobilePhone from "@/components/icons/MobilePhone.vue";
import LockShield from "@/components/icons/LockShield.vue";
import PlanetWeb from "@/components/icons/PlanetWeb.vue";
import MessageTip from "@/components/icons/MessageTip.vue";

const keyDirections = [
    "Разработка ПО",
    "Техническая поддержка и модернизация",
    "Проектирование IT-решений",
    "IT-дизайн",
    "Обеспечение бесперебойной работы ПО, удобства\nэксплуатации и внедрение нового функционала",
    "Разработка дизайн-макетов UX/UI пользовательского\nграфического интерфейса",
    "Непосредственное написание программного\nкода проекта",
    "Сбор и анализ всех требований заказчика, создание прототипа,\nподготовка требований к программному обеспечению",
];

const productTypeCards = [
    {
        title: "Бизнес-системы",
        description:
            "ПО для автоматизации и упрощения рабочих процессов: CRM, WMS, ERP системы любого формата, функционала и сложности.",
        icon: AppSquares,
    },
    {
        title: "Мобильные приложения",
        description: "Мобильное ПО для любой операционной системы.",
        icon: MobilePhone,
    },
    {
        title: "ПО информационной безопасности",
        description:
            "Системы фильтрации траффика и защиты от DDoS-атак, отслеживания локальных и внешних угроз и соблюдения корпоративных требований к безопасности сотрудниками.",
        icon: LockShield,
    },
    {
        title: "Интернет-системы",
        description:
            "Интернет-проекты, сайты, площадки, маркетплейсы и интернет-магазины, сервисы, SaaS-продукты.",
        icon: PlanetWeb,
    },
    {
        title: "Средства интернет-связи",
        description:
            "Высокозащищенные корпоративные мессенджеры, социальные сети, системы ЭДО.",
        icon: MessageTip,
    },
];
</script>

<style scoped lang="scss">
.key-directions-wrapper {
    .directions {
        .directions-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0 20px 0;
        }

        .directions-header__title {
            color: $black;
            font-size: 40px;
            font-weight: 700;

            @media(max-width: $breakpoint3) {
                font-size: 36px;
            }

            @media(max-width: $breakpoint4) {
                font-size: 30px;
            }

            @media(max-width: $breakpoint5) {
                font-size: 24px;
            }
        }

        .directions-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 8px;

            .directions-list__item {
                font-size: 26px;
                white-space: pre;
                flex-grow: 1;
                font-weight: 600;
                padding: 20px 40px;
                border-radius: 32px;
                background: $white;

                @media(max-width: $breakpoint2) {
                    white-space: break-spaces;
                    word-wrap: break-word;
                }

                @media(max-width: $breakpoint3) {
                    font-size: 20px;
                }

                @media(max-width: $breakpoint4) {
                    padding: 15px 20px;
                    border-radius: 20px;
                }

                @media(max-width: $breakpoint5) {
                    font-size: 16px;
                    padding: 10px 15px;
                    border-radius: 14px;
                }

                .directions-list__item_highlight {
                    color: $light-blue;
                    font-weight: 600;
                }
            }
        }
    }

    .product-types {
        margin-top: 52px;

        @media(max-width: $breakpoint5) {
            margin-top: 30px;
        }

        .product-types__title {
            color: $black;
            font-size: 36px;
            font-weight: 700;
            margin-bottom: 40px;

            @media(max-width: $breakpoint3) {
                font-size: 30px;
            }

            @media(max-width: $breakpoint5) {
                margin-bottom: 20px;
                font-size: 24px;
            }
        }


        .product-types__cards {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
            gap: 16px;
            grid-template-areas:
                "card1 card2 card3"
                "card4 card5 card3";

            @media(max-width: $breakpoint2) {
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: repeat(3, 1fr);
                gap: 16px;

                grid-template-areas:
                    "card1 card5"
                    "card2 card4"
                    "card3 card3";
            }

            @media(max-width: $breakpoint4) {
                grid-template-areas:
                    "card1 card1"
                    "card5 card5"
                    "card2 card2"
                    "card4 card4"
                    "card3 card3";
            }

            @media(max-width: $breakpoint5) {
                display: flex;
                flex-direction: column;
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
        }
    }
}
</style>
