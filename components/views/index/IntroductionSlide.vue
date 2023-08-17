<template>
    <section class="introduction-slide-wrapper">
        <div class="container">
            <div class="company-info b">
                <div class="company-info__inner">
                    <h1 class="company-info__title">BIS<span class="d-letter">D</span>e<span class="v-letter">V</span></h1>
                    <p class="company-info__slogan">От простого к сложному
                        <br>
                        Делаем Ваш бизнес эффективнее
                    </p>
                </div>
            </div>
            <address class="company-address">
                <p class="company-address__comment">Проектирование, разработка<br>и обслуживание любых IT-решений и ПО.</p>
                <div class="company-address__contacts">
                    <a href="tel:+79000000000">
                        +7 (900) 000 00-00
                    </a>
                    <a href="mailto:bisdev@gmail.com">
                        bisdev@gmail.com
                    </a>
                </div>
            </address>
        </div>

    </section>
</template>

<style lang="scss" scoped>
.introduction-slide-wrapper {
    background: $light-blue;
    overflow: hidden;
    padding: 0;

    .company-info {
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translate(-28%, -36%);
        border-radius: 385px;
        padding: 0 84px 75px 178px;
        background-image: linear-gradient($light-blue, $light-blue), radial-gradient(circle at top left, transparent, rgba(255, 255, 255, 0.03));
    }

    .company-info__inner {
        color: $white;
        width: 100%;
        border-radius: 201px;
        padding: 395px 92px 90px 270px;
        background-image: linear-gradient($light-blue, $light-blue), radial-gradient(circle at bottom left, transparent, rgba(255, 255, 255, 0.05));
    }

    .company-info,
    .company-info__inner {
        border: double 112px transparent;
        background-origin: border-box;
        background-clip: padding-box, border-box;
    }


    .company-info__title,
    & span {
        color: $white;
        font-family: $main-title-font;
        font-size: 138px;
    }

    .d-letter,
    .v-letter {
        position: relative;

        &::after {
            content: "";
            position: absolute;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: $light-green;
        }
    }

    .d-letter {
        &::after {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -60%);
        }
    }

    .v-letter {
        &::after {
            top: 0;
            left: 50%;
            transform: translate(-50%, 100%);
        }
    }

    .company-info__slogan {
        color: $white;
        font-family: $secondary-title-font;
        font-size: 59px;
        font-weight: 500;
        width: max-content;
        line-height: 1.1;
    }

    .company-address {
        position: absolute;
        right: 6%;
        bottom: 10%;
        font-size: 27px;

        .company-address__comment {
            width: max-content;
            color: $white;
        }

        .company-address__contacts {
            margin-top: 32px;
            display: flex;
            align-items: center;
            opacity: 0.65;
            gap: 50px;

            a {
                color: $white;
            }
        }

    }
}
</style>