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

        <div class="introduction-ellipse-gradient-icon"></div>

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
        padding: 0 20px;

        @media(max-width: $breakpoint3) {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .introduction-gradient-box-outer,
        .introduction-gradient-box-inner {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
        }

        .introduction-gradient-box-outer {
            @include gradient-border(1948px, 1174px, 112px, 351px, $light-blue, bottom left, transparent, rgba(255, 255, 255, 0.03));
            transform: translate(-29%, -36%);

            @media(max-width: $breakpoint2) {
                @include gradient-border(1648px, 1174px, 82px, 321px, $light-blue, bottom left, transparent, rgba(255, 255, 255, 0.05));
            }

            @media(max-width: $breakpoint3) {
                transform: translate(-54%, -20%);
            }

            @media(max-width: $breakpoint4) {
                transform: translate(-58%, -20%);
            }

            @media(max-width: $breakpoint5) {
                transform: translate(-77%, -44%);
                @include gradient-border(1648px, 1174px, 52px, 261px, $light-blue, bottom left, transparent, rgba(255, 255, 255, 0.05));
            }
        }

        .introduction-gradient-box-inner {
            @include gradient-border(1460px, 895px, 112px, 221px, $light-blue, center left, transparent, rgba(255, 255, 255, 0.09));
            transform: translate(-18%, -35%);

            @media(max-width: $breakpoint2) {
                @include gradient-border(1260px, 955px, 82px, 221px, $light-blue, center left, transparent, rgba(255, 255, 255, 0.09));
            }

            @media(max-width: $breakpoint3) {
                transform: translate(-50%, -14%);
            }

            @media(max-width: $breakpoint4) {
                transform: translate(-54%, -14%);
            }

            @media(max-width: $breakpoint5) {
                transform: translate(-76%, -39%);
                @include gradient-border(1260px, 955px, 52px, 181px, $light-blue, center left, transparent, rgba(255, 255, 255, 0.09));
            }
        }

    }

    .company-info {
        position: relative;
        z-index: 2;
        padding-top: 100px;

        @media(max-width: $breakpoint3) {
            padding-top: 0;
        }
    }


    .company-info__title,
    & span {
        color: $white;
        font-family: $main-title-font;
        font-size: 138px;

        @media(max-width: $breakpoint3) {
            width: fit-content;
            margin: 0 auto;
        }

        @media(max-width: $breakpoint4) {
            font-size: 90px;
        }

        @media(max-width: $breakpoint5) {
            font-size: 60px;
        }
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

        @media(max-width: $breakpoint2) {
            max-width: fit-content;
        }

        @media(max-width: $breakpoint3) {
            font-size: 41px;
            margin: 0 auto;
            text-align: center;

            @media(max-width: $breakpoint4) {
                font-size: 28px;
            }

            @media(max-width: $breakpoint5) {
                font-size: 18px;
            }
        }
    }

    .company-address {
        position: absolute;
        z-index: 2;
        right: 6%;
        bottom: 10%;
        font-size: 27px;

        @media(max-width: $breakpoint3) {
            width: 100%;
            height: 100%;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            display: flex;
            flex-direction: column-reverse;
            justify-content: space-between;
            align-items: center;
            padding: 56px 0 67px 0;
        }

        @media(max-width: $breakpoint4) {
            padding: 36px 0 37px 0;
            font-size: 20px;
        }

        @media(max-width: $breakpoint5) {
            padding: 26px 0 27px 0;
            font-size: 14px;
        }

        .company-address__comment {
            width: max-content;
            color: $white;
            opacity: 0.8;

            @media(max-width: $breakpoint3) {
                text-align: center;
            }
        }

        .company-address__contacts {
            margin-top: 32px;
            display: flex;
            align-items: center;
            opacity: 0.65;
            gap: 50px;

            @media(max-width: $breakpoint3) {
                display: flex;
                justify-content: space-between;
                padding: 0 45px;
                width: 100%;
                gap: 40px;
            }

            @media(max-width: $breakpoint4) {
                padding: 0 30px;
            }

            @media(max-width: $breakpoint5) {
                padding: 0 12px;
                gap: 20px;
            }

            a {
                color: $white;
            }
        }
    }

    .introduction-ellipse-gradient-icon {
        position: absolute;
        top: -12%;
        left: 36%;
        z-index: 1;
        transform: rotate(37deg);
        @include gradient-ellipse(2119px, 1155px);
    }

}
</style>