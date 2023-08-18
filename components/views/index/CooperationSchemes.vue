<template>
    <section class="cooperation_schemes-wrapper">
        <div class="container">
            <header class="cooperation-header">
                <div class="cooperation-header-left">
                    <h2 class="cooperation-header-left__title">Схемы сотрудничества</h2>
                    <span class="cooperation-header-left__slash">/&nbsp;</span>
                    <span class="cooperation-header-left__title-comment">Ключевые форматы</span>
                </div>
                <p class="page-numeration-title">04</p>
            </header>
            <p class="cooperation-comment">
                Мы предлагаем различные условия сотрудничества для того, чтобы
                каждый клиент мог подобрать для себя максимально выгодное решение.
            </p>
            <div class="cooperation__shemes">
                <UiCooperationSchemesItem v-for="scheme in cooperationSchemes"
                    :key="scheme.title"
                    :scheme="scheme">
                    <component :is="scheme.icon"></component>
                </UiCooperationSchemesItem>
            </div>
            <footer class="cooperation_footer">
                <p class="cooperation_footer__comment">
                    В нашей команде работают лучшие юристы в IT-сфере — именно
                    поэтому процесс заключения договора на разработку с нами будет
                    максимально быстрым и простым, а договор — всесторонне
                    обеспечивать Вашу и нашу безопасность.
                </p>
                <IconsLetterE class="cooperation_footer__icon" />
            </footer>
        </div>
    </section>
</template>

<script setup>
import LockKey from '@/components/icons/LockKey.vue';
import ThreePersons from '@/components/icons/ThreePersons.vue';
import CalendarWithPoints from '@/components/icons/CalendarWithPoints.vue';

const cooperationSchemes = [
    {
        title: "Проект под ключ",
        description: "Мы заранее оцениваем стоимость выполнения проекта от проектирования до полной реализации, предлагаем к заключению единый договор проекта, предусматривающий возможности для заказчика вносить правки в ТЗ в процессе исполнения. Обращаем внимание, что стоимость не каждого проекта возможно заранее оценить — все зависит от качества и полноты технического задания и сложности проекта.",
        icon: LockKey
    },
    {
        title: "Аренда разработчиков",
        description: "Предоставляем высококвалифицированных разработчиков (одного специалиста или целую команду) под Ваше руководство и Ваши задачи. Стоимость определяется исходя из сложности проекта и предполагаемой занятости специалиста в Ваших проектах.",
        icon: ThreePersons
    },
    {
        title: "Абонемент на разработку и поддержку (T&M)",
        description: "Согласовываем стоимость часа разработки исходя из сложности и объема задач, при необходимости устанавливаем минимальный и/или максимальный ежемесячный объем «работочасов», ежемесячно отчитываемся о проделанной работы и в режиме online сообщаем о текущем статусе проекта.",
        icon: CalendarWithPoints
    },
]

</script>

<style scoped lang="scss">
.cooperation_schemes-wrapper {
    .cooperation-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .cooperation-header-left {
            display: flex;
            align-items: center;

            .cooperation-header-left__title {
                font-size: 70px;
                font-weight: 700;
                color: $black;
                margin-right: 16px;
                @include list-circle($light-blue);
            }

            .cooperation-header-left__slash,
            .cooperation-header-left__title-comment {
                position: relative;
                top: 6px;
                font-size: 40px;
            }

            .cooperation-header-left__slash {
                color: $light-blue;
            }
        }

    }

    .cooperation-comment {
        width: 50%;
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

    .cooperation_footer {
        box-shadow: 20px 25px 58px 0px rgba(53, 86, 238, 0.37);
        padding: 40px;
        margin-top: 16px;
        border-radius: 32px;
        background: $light-blue;
        position: relative;
        overflow: hidden;

        .cooperation_footer__comment {
            font-size: 27px;
            color: $white;
            position: relative;
            z-index: 1;
        }

        .cooperation_footer__icon {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 0;
        }

    }
}
</style>
