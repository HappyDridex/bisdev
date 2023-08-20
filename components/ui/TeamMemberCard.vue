<template>
    <li class="team-member-wrapper">

        <article class="team-member-card">
            <div class="team-member-card__photo">
                <img src="/person.jpg"
                    alt="Фото члены команды">
            </div>

            <div class="team-member-card__description">
                <h5 class="team-member-card__name">{{ member.name }}</h5>
                <p class="team-member-card__position">{{ member.position }}</p>
                <ul class="team-member-card__duties">
                    <li class="team-member-card__duty-item"
                        v-for="duty in member.duties"
                        :key="duty">{{ duty }}</li>
                </ul>
            </div>

        </article>

    </li>
</template>

<script setup>
defineProps({
    member: {
        type: Object,
        required: true
    }
})

</script>

<style scoped lang="scss">
.team-member-wrapper {

    .team-member-card {
        display: flex;
        align-items: center;
        flex-shrink: 0;
        gap: 40px;


        @media(max-width: $breakpoint2) {
            background: $white;
            padding: 30px;
            border-radius: 32px;
        }

        @media(max-width: $breakpoint4) {
            padding: 15px 25px;
            gap: 15px;
            flex-direction: column;
        }

        @media(max-width: $breakpoint5) {
            padding: 10px 15px;
        }

        .team-member-card__photo {
            border-radius: 50%;
            overflow: hidden;
            min-width: fit-content;
            height: fit-content;
            flex-shrink: 0;
            padding: 11px;
            border: 4px solid #E2E4F2;

            @media(max-width: $breakpoint5) {
                border-width: 2px;
                padding: 6px;
            }

            img {
                width: 298px;
                aspect-ratio: 1/1;
                padding: 10px;
                border-radius: 50%;
                border: 4px solid $light-blue;
                width: 100%;
                height: 100%;
                object-fit: cover;

                @media(max-width: $breakpoint1) {
                    width: 270px;
                }

                @media(max-width: $breakpoint2) {
                    width: 250px;
                }

                @media(max-width: $breakpoint3) {
                    width: 219px;
                }

                @media(max-width: $breakpoint4) {
                    width: 180px;
                }

                @media(max-width: $breakpoint5) {
                    width: 120px;
                    border-width: 2px;
                }
            }
        }

        .team-member-card__description {
            padding: 36px 0;

            @media(max-width: $breakpoint4) {
                padding: 15px 0;
            }

            @media(max-width: $breakpoint5) {
                padding: 5px 0;
                text-align: center;
            }

            .team-member-card__name {
                color: $light-blue;
                font-size: 32px;
                font-weight: 500;

                @media(max-width: $breakpoint3) {
                    font-size: 26px;
                }

                @media(max-width: $breakpoint4) {
                    font-size: 22px;
                }

                @media(max-width: $breakpoint5) {
                    font-size: 18px;
                }
            }

            .team-member-card__position {
                color: $black;
                margin-top: 4px;
                font-size: 24px;
                font-weight: 600;

                @media(max-width: $breakpoint3) {
                    font-size: 22px;
                }

                @media(max-width: $breakpoint4) {
                    font-size: 18px;
                }

                @media(max-width: $breakpoint5) {
                    font-size: 16px;
                }
            }

            .team-member-card__duties {
                margin-top: 16px;

                .team-member-card__duty-item {
                    color: $black-muted;
                    font-size: 27px;
                    font-weight: 400;

                    @media(max-width: $breakpoint3) {
                        font-size: 22px;
                    }

                    @media(max-width: $breakpoint5) {
                        font-size: 18px;
                    }

                }

            }

        }
    }
}
</style>