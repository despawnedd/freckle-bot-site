<script lang="ts">
    import noelle from "$lib/images/noelle.svg";
    import ThickJuicyButton from "$lib/components/ThickJuicyButton.svelte";

    const letters = "Freckle".split("");

    let bgContCont: HTMLDivElement;
    let height = $state(0);

    // I hate Chrome
    const colors = ["#f3c580", "#e3ab8d", "#d69797", "#c882a3", "#bf81b1", "#b581c1", "#ae82cc"];

    $effect(() => {
        bgContCont.style.height = `${height + 100}px`;
    });
</script>

<!-- TODO: make noelle's thingy glow + fix button icon sizes -->

<div bind:this={bgContCont} id="bgContCont">
    <div id="bgCont">
        <div id="bg"></div>
    </div>
</div>

<div bind:clientHeight={height} id="main">
    <div id="noelleContainer">
        <img src={noelle} alt="Noelle!" id="noelle" />
    </div>
    <div id="glowyContainer">
        <div id="glowy">
            {#each letters as letter, i}
                <span
                    style="
                    color: {colors[i]};
                    filter: drop-shadow(0 0 6px {colors[i]});
                    animation-delay: -{i}s;">{letter}</span>
            {/each}
        </div>
    </div>
    <div id="thingBelowGoofy">
        <span id="subtitle"
            >a Discord app to make your day just a tiny bit more interesting</span>
        <span id="disclaimer">in very early private access</span>
    </div>
    <div id="mainButtons">
        <ThickJuicyButton
            color1="#c9839b"
            color2="#a8627a"
            color3="#965068"
            icon="chat"
            text="Add or invite"
            href="/add" />
        <ThickJuicyButton
            color1="#ae96d1"
            color2="#8c73b4"
            color3="#745b9c"
            icon="book_2"
            text="Read the docs"
            href="/docs" />
        <ThickJuicyButton
            color1="#d0bb97"
            color2="#b79f76"
            color3="#9c845b"
            icon="build"
            text="Command builder"
            href="/builder" />
    </div>
    <span id="copy">&copy; despawnedd 2025</span>
</div>

<svelte:head>
    <title>Freckle - Home</title>
</svelte:head>

<style>
    :root {
        --float-amt: -5px;
        --float-rot-start: -3deg;
        --float-rot-end: 3deg;
    }

    /* https://codepen.io/MarioDesigns/pen/woJgeo */
    @keyframes float {
        50% {
            transform: rotateZ(var(--float-rot-start)) translateY(var(--float-amt));
        }
        0%,
        100% {
            transform: rotateZ(var(--float-rot-end)) translateY(0px);
        }
    }
    @keyframes float-i {
        0%,
        100% {
            transform: rotateZ(var(--float-rot-start)) translateY(var(--float-amt));
        }
        50% {
            transform: rotateZ(var(--float-rot-end)) translateY(0px);
        }
    }

    #bgContCont {
        display: flex;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 100dvh;
        z-index: -1;
    }
    #bgCont {
        margin: auto;
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

    #main {
        padding: 4rem 4rem 0 4rem;
        @media screen and (width >= 1280px) {
            padding: 4rem 12rem 0 12rem;
        }
        @media screen and (width <= 480px) {
            padding: 4rem 2rem 0 2rem;
        }
    }

    #noelleContainer {
        pointer-events: none;
        user-select: none;
        display: flex;
        justify-content: right;
        min-width: 100%;
        max-width: 50rem;
        @media screen and (width >= 800px) {
            top: 0;
            left: 0;
            padding: 4rem;
            position: absolute;
        }
        @media screen and (width >= 1280px) {
            padding-right: 12rem;
        }
    }

    #noelle {
        margin: -2rem 0 -8rem 0;
        @media screen and (width >= 800px) {
            margin: 0;
            padding-top: 1rem;
            max-width: 60rem;
            width: 50%;
        }
    }

    #glowyContainer {
        display: flex;
        justify-content: center;
        @media screen and (width >= 800px) {
            justify-content: left;
        }
    }
    /* https://www.reddit.com/r/webdev/comments/18wql80/how_to_create_a_gradient_text_with_each_letter/ */
    #glowy {
        letter-spacing: 0.4rem;
        width: 21rem;
        font-family: "Fira Sans";
        font-weight: 500;
        font-size: 5rem;
        position: absolute;
        @media screen and (width >= 800px) {
            padding-top: 0;
        }
        @media screen and (width <= 480px) {
            scale: 0.85;
        }
    }
    #glowy span {
        display: inline-block;
        /* transition: 0.25s; */
    }
    /* #glowy span:hover {
        scale: 1.2;
    } */
    #glowy span:first-child {
        font-weight: 400;
        font-size: 7rem;
    }
    #glowy span:nth-child(2n-1) {
        animation: float 6s ease-in-out infinite;
    }
    #glowy span:nth-child(2n) {
        animation: float-i 6s ease-in-out infinite;
    }

    #thingBelowGoofy {
        padding-top: 9rem;
        @media screen and (width >= 800px) {
            max-width: 42rem;
        }
    }
    #subtitle {
        font-weight: bold;
        font-size: xx-large;
        line-height: 2.8rem;
        display: block;
    }
    #disclaimer {
        font-weight: bold;
        font-size: large;
        font-style: italic;
        color: rgb(255, 66, 66);
        padding-top: 1rem;
        display: block;
    }

    #mainButtons {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        padding-top: 2rem;
    }

    #copy {
        font-size: large;
        padding-top: 5rem;
        display: block;
        width: 100%;
        text-align: center;
    }
</style>
