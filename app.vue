<template>
    <div class="page">
        <Vue3Lottie
            class="page-background hidden lg:block absolute top-0 left-0 w-full h-full min-h-full"
            :animation-data="lottieAnim"
            loop
            auto-play
            width="100%" />

        <div class="page-content">
            <h1>Hledáme kreativního ducha,<br class="hidden lg:block" /> který dá tvář našemu snu!</h1>
            <p class="-my-8 text-3xl">~</p>
            <h2>Právě teď máš jedinečnou možnost stát u zrodu nové Rogue-lite hry</h2>

            <p class="text-justify">Hledáme tvořivého grafika/grafičku, který/á s námi sdílí vášeň pro hry a má chuť přispět svým stylem a kreativitou k vývoji naší hry. Pokud máš zkušenosti nebo zájem o 2D/3D grafiku, miluješ herní design a chceš být u samého začátku něčeho nového a unikatního, jsi přesně ten, koho hledáme.</p>

            <p class="text-justify">Jsme trio nadšenců z Plzně, které spojuje jedno – vášeň pro vývoj her. Každý z nás přináší do projektu něco svého, ale všichni sdílíme společný sen: vytvořit hru, která osloví hráče, jako jsme my, po celém světě a zanechá v nich trvalý dojem. Snažíme se překonávat tradiční přístupy a přinášet nové, svěží myšlenky do světa indie her.</p>

            <div class="mt-8">
                <p class="text-3xl text-center">Napiš nám!</p>
                <a class="italic text-2xl underline lg:no-underline lg:hover:underline" href="mailto:tomas.sobota.pers@gmail.com">
                    tomas.sobota.pers@gmail.com
                </a>
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

html {
    font-size: 13px;

    @include lg() {
        font-size: 16px;
    }
}

.page {
    font-family: 'roboto';

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
    }

    .page-content {
        position: relative;
        z-index: 1;

        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3rem;

        font-size: 1.2rem;
        text-align: center;
    }

    h1 {
        line-height: 1.2;
        font-size: 2.5rem;

        @include lg() {
            font-size: 3rem;
        }
    }

    h2 {
        font-size: 2rem;
        line-height: 1.2;
        max-width: max(50%, 865px);
    }

    p {
        max-width: max(50%, 865px);
        
        @include lg() {
            text-align-last: center;
        }
    }
}
</style>
