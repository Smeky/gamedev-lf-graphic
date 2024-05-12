<template>
    <div class="page">
        <svg preserveAspectRatio="xMidYMid slice" viewBox="10 10 80 80">
            <path fill="#152744" class="out-top" d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z"/>
            <path fill="#1f365c" class="in-top" d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z"/>
            <path fill="#152744" class="out-bottom" d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z"/>
            <path fill="#1f365c" class="in-bottom" d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z"/>
        </svg>

        <div class="page-content">
            <h1>Hledáme kreativního ducha,<br /> který dá tvář našemu snu!</h1>
            <p class="page-separator">~</p>
            <h2>Právě teď máš jedinečnou možnost stát u zrodu nové<br/>Rogue-lite hry</h2>

            <h3>Hledáme tvořivého 2D/3D grafika/grafičku, který/á s námi sdílí vášeň pro hry. Máš-li chuť a zápal, i kdyby bez zkušeností v herním vývoji, tak jsi právě ten, koho hledáme.</h3>

            <p><i>Jsme trio nadšenců z Plzně, které spojuje jedno – vášeň pro vývoj her. Každý z nás přináší do projektu něco svého, ale všichni sdílíme společný sen: vytvořit hru, která osloví hráče, jako jsme my, po celém světě.</i></p>

            <div class="page-contact">
                <p>Napiš nám!</p>
                <a href="mailto:tomas.sobota.pers@gmail.com">
                    tomas.sobota.pers@gmail.com
                </a>
                <span>+420 736 263 948</span>
            </div>
        </div>
    </div>
</template>


<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import lottieAnim from '~/assets/background.json'
</script>

<style lang="scss">
@import url('https://fonts.cdnfonts.com/css/roboto');

@mixin lg {
    @media (min-width: 1024px) {
        @content;
    }
}

html, body {
    font-size: 13px;
    margin: 0;
    padding: 0;

    @include lg() {
        font-size: 16px;
    }
}

p {
    margin: 0;
}

svg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    opacity: 0.2;

    @include lg() {
        opacity: 0.3;
    }

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .out-top {
        animation: rotate 20s linear infinite;
        transform-origin: 13px 25px;
    }
    .in-top {
        animation: rotate 10s linear infinite;
        transform-origin: 13px 25px;
    }
    .out-bottom {
        animation: rotate 25s linear infinite;
        transform-origin: 84px 93px;
    }
    .in-bottom {
        animation: rotate 15s linear infinite;
        transform-origin: 84px 93px;
    }
}

.page {
    font-family: 'Roboto';
    background-color: #1f365c;
    background-color: #152744;
    background-color: #0c1729;
    color: #fff;
    padding: 60px 20px;
    min-height: 100vh;
    height: 100%;
    box-sizing: border-box;

    @include lg() {
        display: grid;
        place-items: center;
    }

    .page-background {
        display: none;

        @include lg() {
            display: block;
        }

        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        min-height: 100%;

        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #000;
            opacity: 0.3;
            z-index: 1;
        }

        &:after {
            // Add gradient to hide bottom cutoff
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 20%;
            background: linear-gradient(180deg, rgba(#0c1729, 0) 0%, #0c1729 100%);
            z-index: 1;
            opacity: 0;
        }
    }

    .page-separator {
        margin-top: -2.5rem;
        margin-bottom: -2.5rem;
    }

    .page-content {
        position: relative;
        z-index: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        font-size: 1.2rem;
        text-align: center;

        > h1 {
            line-height: 1.2;
            font-size: 2.5rem;

            @include lg() {
                font-size: 3rem;
            }

            br {
                display: none;

                @include lg() {
                    display: block;
                }
            }
        }

        > h2 {
            font-size: 2rem;
            line-height: 1.2;
            max-width: max(50%, 865px);
        }

        > h3 {
            font-size: 1.2rem;
            max-width: max(50%, 865px);
            margin: 0.5rem 0;

            @include lg() {
                font-size: 1.5rem;
            }
        }

        > p {
            max-width: max(50%, 865px);
            text-align: justify;

            @include lg() {
                text-align-last: center;
            }
        }

    }

    .page-contact {
        display: flex;

        flex-direction: column;
        gap: 0.5rem;
        text-align: center;
        margin-top: 2rem;

        @include lg() {
            font-size: 1.8rem;
        }

        > p {
            font-size: 1.8rem;

            @include lg() {
                font-size: 2rem;
            }
        }

        > a {
            font-style: italic;
            text-decoration: underline;

            @include lg() {
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>
