<script lang="ts">
    import noelle from "$lib/images/freckle thingy2.svg";

    const letters = "Freckle".split("");
</script>

<nav></nav>

<div id="bgCont">
    <div id="bg"></div>
</div>

{#snippet letterss()}
    {#each letters as letter, i}
        <span style="animation-delay: {i * 300}ms;">{letter}</span>
    {/each}
{/snippet}

<div id="main">
    <div id="goofyElementsContainer">
        <img src={noelle} alt="Noelle!" id="noelle" />
        <div id="glowyTop" class="glowy">
            {@render letterss()}
        </div>
        <div id="glowyBottom" class="glowy">
            {@render letterss()}
        </div>
    </div>
    <div id="thingBelowGoofy">
        <span id="subtitle">a Discord app to make your day just a tiny bit more interesting</span>
    </div>
</div>

<svelte:head>
    <title>Freckle - Home</title>
</svelte:head>

<style>
    :root {
        --float-amt: -5px;
    }

    /* https://codepen.io/MarioDesigns/pen/woJgeo */
    @keyframes float {
        0% {
            transform: translatey(0px);
        }
        50% {
            transform: translatey(var(--float-amt));
        }
        100% {
            transform: translatey(0px);
        }
    }
    @keyframes float-i {
        0% {
            transform: translatey(var(--float-amt));
        }
        50% {
            transform: translatey(0px);
        }
        100% {
            transform: translatey(var(--float-amt));
        }
    }

    #bgCont {
        position: absolute;
        top: 0;
        left: 0;
        margin: auto;
        width: 100%;
        min-height: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        pointer-events: none;
        user-select: none;
        background-repeat: no-repeat;
    }
    #bg {
        min-width: 200rem;
        min-height: 200rem;
        background: radial-gradient(
            50% 33% at 50% 0%,
            #474257 0%,
            #363242 34%,
            #292632 71%,
            #25222d 100%
        );
        background-repeat: no-repeat;
        z-index: -1;
        opacity: 75%;
    }

    nav {
        display: flex;
        flex-direction: row;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4rem;
        background-color: #1e1c25aa;
    }

    #main {
        padding-top: 4rem;
        @media screen and (width >= 1280px) {
            padding-left: 12rem;
            padding-right: 12rem;
        }
    }

    #goofyElementsContainer {
        @media screen and (width >= 1280px) {
            padding-top: 2rem;
        }
        position: relative;
    }

    #noelle {
        position: absolute;
        pointer-events: none;
        user-select: none;
        @media screen and (width >= 640px) {
            width: 50%;
            left: 50%;
        }
    }

    /* https://www.reddit.com/r/webdev/comments/18wql80/how_to_create_a_gradient_text_with_each_letter/ */
    .glowy {
        letter-spacing: 0.4rem;
        width: 21rem;
        font-family: "Fira Sans";
        font-weight: 500;
        font-size: 5rem;
        color: transparent;
        background: linear-gradient(90deg, #facf7b, #c982a1 50%, #a380dc);
        -webkit-background-clip: text;
        background-clip: text;
        position: absolute;
        -webkit-text-fill-color: transparent;
    }
    .glowy span {
        display: inline-block;
    }
    .glowy span:first-child {
        font-weight: 400;
        font-size: 7rem;
    }
    .glowy span:nth-child(2n-1) {
        animation: float 6s ease-in-out infinite;
    }
    .glowy span:nth-child(2n) {
        animation: float-i 6s ease-in-out infinite;
    }
    #glowyBottom {
        filter: blur(6px);
    }

    #thingBelowGoofy {
        padding-top: 9rem;
    }
</style>
