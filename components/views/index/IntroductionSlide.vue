<template>
    <section class="introduction-slide-wrapper">
        <div class="container introduction-container">

            <div class="company-info">
                <h1 class="company-info__title">BIS<span class="d-letter">D</span>e<span class="v-letter">V</span></h1>
                <p class="company-info__slogan">От простого к сложному
                    <br>
                    Делаем Ваш бизнес эффективнее
                </p>
            </div>

            <div class="introduction-gradient-box-outer"></div>
            <div class="introduction-gradient-box-inner"></div>

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

        <IconsEllipseGradient class="introduction-ellipse-gradient-icon" />
    </section>
</template>

<style lang="scss" scoped>
.introduction-slide-wrapper {
    background: $light-blue;
    overflow: hidden;
    padding: 0;
    position: relative;
    display: flex;

    .introduction-container {
        max-height: 100vh;
        position: relative;
        width: 100%;

        .introduction-gradient-box-outer,
        .introduction-gradient-box-inner {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
        }

        .introduction-gradient-box-outer {
            @include gradient-border(1948px, 1174px, 112px, 351px, $light-blue, bottom center, transparent, rgba(255, 255, 255, 0.04));
            transform: translate(-29%, -36%)
        }

        .introduction-gradient-box-inner {
            @include gradient-border(1460px, 895px, 112px, 221px, $light-blue, top left, transparent, rgba(255, 255, 255, 0.05));
            transform: translate(-18%, -35%)
        }
    }

    .company-info {
        position: relative;
        z-index: 2;
        padding-top: 100px;
    }


    .company-info__title,
    & span {
        color: $white;
        font-family: $main-title-font;
        font-size: 138px;
    }

    .d-letter {
        @include ball-in-letter(50%, 50%, translate(-50%, -60%), 32px);
    }

    .v-letter {
        @include ball-in-letter(50%, 0, translate(-50%, 100%), 32px);
    }

    .company-info__slogan {
        color: $white;
        font-family: $secondary-title-font;
        font-size: 59px;
        font-weight: 500;
        width: max-content;
        line-height: 1.1;
        opacity: 0.85;
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

    .introduction-ellipse-gradient-icon {
        position: absolute;
        top: 0;
        left: 50%;
        z-index: 100;
        width: 50%;
    }

}
</style>