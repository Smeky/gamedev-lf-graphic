<template>
    <div class="page">
        <Vue3Lottie
            :animation-data="lottieAnim"
            loop
            auto-play
            width="100%"
            height="100%"
            class="page-background"/>

        <div class="page-content">
            <h1>Hledáme kreativního ducha,<br /> který dá tvář našemu snu!</h1>
            <p class="page-separator">~</p>
            <h2>Právě teď máš jedinečnou možnost stát u zrodu nové Rogue-lite hry</h2>

            <p>Hledáme tvořivého grafika/grafičku, který/á s námi sdílí vášeň pro hry a má chuť přispět svým stylem a kreativitou k vývoji naší hry. Pokud máš zkušenosti nebo zájem o 2D/3D grafiku, miluješ herní design a chceš být u samého začátku něčeho nového a unikatního, jsi přesně ten, koho hledáme.</p>

            <p>Jsme trio nadšenců z Plzně, které spojuje jedno – vášeň pro vývoj her. Každý z nás přináší do projektu něco svého, ale všichni sdílíme společný sen: vytvořit hru, která osloví hráče, jako jsme my, po celém světě a zanechá v nich trvalý dojem. Snažíme se překonávat tradiční přístupy a přinášet nové, svěží myšlenky do světa indie her.</p>

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

.page {
    font-family: 'Roboto';
    background-color: #0c1729;
    color: #fff;
    padding: 60px 20px;
    min-height: 100vh;
    height: 100%;

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
            opacity: 0.5;
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
        }
    }

    .page-separator {
        margin-top: -2rem;
        margin-bottom: -2rem;
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
