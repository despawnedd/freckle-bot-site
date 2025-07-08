<script>
    import noelle from "$lib/images/freckle thingy.svg";
</script>

<nav>

</nav>

<div id="bgCont">
    <div id="bg"></div>
</div>

<div id="main">
    <div id="bannerLike">
        <img src={noelle} alt="Noelle!" id="noelle">
        <div id="glowy">
            <span>F</span>
            <span>r</span>
            <span>e</span>
            <span>c</span>
            <span>k</span>
            <span>l</span>
            <span>e</span>
        </div>
    </div>
</div>

<svelte:head>
    <title>Freckle - Home</title>
</svelte:head>

<style>
    * {
        --bgSize: 200rem;
    }
    #bgCont {
        position: absolute;
        top: 0;
        left: 0;
        margin: auto;
        width: 100%;
        min-height: var(--bgSize);
        overflow: hidden;
        display: flex;
        justify-content: center;
        pointer-events: none;
        user-select: none;
    }
    #bg {
        min-width: var(--bgSize);
        min-height: inherit;
        background-repeat: no-repeat;
        background: radial-gradient(50% 50% at 50% -20%, #363142, transparent);
        z-index: -1;
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

    #bannerLike {
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

    #glowy {
        letter-spacing: -0.4rem;
        font-family: "Fira Sans";
        font-weight: 500;
        font-size: 5rem;
    }
    #glowy span {
        display: inline-block;
    }
    #glowy span:first-child {
        font-weight: 400;
        font-size: 7rem;
    }
    #glowy span:nth-child(2n-1) {
        transform: rotate(-5deg) translateY(0.25rem);
    }
    #glowy span:nth-child(2n) {
        transform: rotate(5deg) translateY(-0.25rem);
    }
</style>
