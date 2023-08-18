<template>
    <section class="team-members-wrapper">
        <div class="container">
            <header class="team-members__header">
                <h2 class="team-members__title">Команда</h2>
                <p class="page-numeration-title">07</p>
            </header>
            <div class="team-members-list-wrapper">
                <ul class="team-members-list">
                    <UiTeamMemberCard v-for="(item, idx) in 4"
                        :key="idx" />
                </ul>
                <IconsDashedSnakeLine class="team-members-dashed-line-icon" />
            </div>
        </div>
    </section>
</template>

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
        }
    }

    .team-members-list-wrapper {
        position: relative;
        margin-top: 59px;

        .team-members-list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 116px;
            position: relative;
            z-index: 1;
        }

        .team-members-dashed-line-icon {
            position: absolute;
            z-index: 0;
            left: -40px;
            top: 150px;
            width: 65%;
        }
    }
}
</style>