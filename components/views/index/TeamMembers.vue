<template>
    <section class="team-members-wrapper">
        <div class="container">
            <header class="team-members__header">
                <h2 class="team-members__title">Команда</h2>
                <p class="page-numeration-title">07</p>
            </header>
            <div class="team-members-list-wrapper">
                <ul class="team-members-list">
                    <UiTeamMemberCard v-for="(member, idx) in teamMembers"
                        :member="member"
                        :key="idx" />
                </ul>
                <IconsDashedSnakeLine class="team-members-dashed-line-icon" />
            </div>
        </div>
    </section>
</template>

<script setup>

const teamMembers = [{
    name: "Бойчук Владимир Владимирович",
    position: "Генеральный юрист",
    duties: [
        "Отдыхает",
        "Считает бабки",
        "Играет в игры на работе"
    ]
},
{
    name: "Бойчук Владимир Владимирович",
    position: "Генеральный юрист",
    duties: [
        "Отдыхает",
        "Считает бабки",
        "Играет в игры на работе"
    ]
},
{
    name: "Бойчук Владимир Владимирович",
    position: "Генеральный юрист",
    duties: [
        "Отдыхает",
        "Считает бабки",
        "Играет в игры на работе"
    ]
},
{
    name: "Бойчук Владимир Владимирович",
    position: "Генеральный юрист",
    duties: [
        "Отдыхает",
        "Считает бабки",
        "Играет в игры на работе"
    ]
}
];
</script>

<style scoped lang="scss">
.team-members-wrapper {


    .team-members__header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .team-members__title {
            @include list-circle($light-blue);
            font-size: 70px;
            font-weight: 700;

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
    }

    .team-members-list-wrapper {
        position: relative;
        margin-top: 59px;

        @media(max-width: $breakpoint3) {
            margin-top: 40px;
        }

        @media(max-width: $breakpoint4) {
            margin-top: 20px;
        }


        .team-members-list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 116px;
            position: relative;
            z-index: 1;

            @media(max-width: $breakpoint1) {
                gap: 40px;
            }

            @media(max-width: $breakpoint2) {
                grid-template-columns: 1fr;
            }

            @media(max-width: $breakpoint3) {
                gap: 12px;
            }
        }

        .team-members-dashed-line-icon {
            position: absolute;
            z-index: 0;
            left: -40px;
            top: 150px;
            width: 65%;

            @media(max-width: $breakpoint1) {
                display: none;
            }
        }
    }
}
</style>