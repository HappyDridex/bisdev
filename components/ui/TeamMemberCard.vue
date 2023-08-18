<template>
    <li class="team-member-wrapper">

        <article class="team-member-card">
            <div class="team-member-card__photo">
                <img src="/person.jpg"
                    alt="Фото члены команды">
            </div>

            <div class="team-member-card__description">
                <h5 class="team-member-card__name">Бойчук Владимир Владимирович</h5>
                <p class="team-member-card__position">Генеральный юрист</p>
                <ul class="team-member-card__duties">
                    <li class="team-member-card__duty-item">Отдыхает</li>
                    <li class="team-member-card__duty-item">Считает бабки</li>
                    <li class="team-member-card__duty-item">Играет в игры на работе</li>
                </ul>
            </div>

        </article>

    </li>
</template>

<style scoped lang="scss">
.team-member-wrapper {
    .team-member-card {
        display: flex;
        flex-shrink: 0;
        gap: 40px;

        .team-member-card__photo {
            border-radius: 50%;
            aspect-ratio: 1 / 1;
            overflow: hidden;
            min-width: 298px;
            height: fit-content;
            flex-shrink: 0;
            padding: 11px;
            border: 4px solid #E2E4F2;

            img {
                max-width: 298px;
                padding: 10px;
                border-radius: 50%;
                border: 4px solid $light-blue;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .team-member-card__description {
            padding: 36px 0;

            .team-member-card__name {
                color: $light-blue;
                font-size: 32px;
                font-weight: 500;
            }

            .team-member-card__position {
                color: $black;
                margin-top: 4px;
                font-size: 24px;
                font-weight: 600;
            }

            .team-member-card__duties {
                margin-top: 16px;

                .team-member-card__duty-item {
                    color: $black-muted;
                    font-size: 27px;
                    font-weight: 400;
                }

            }

        }
    }
}
</style>