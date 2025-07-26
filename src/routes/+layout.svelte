<script lang="ts">
    import LogoWithText from "$components/svg/LogoWithText.svelte";
    import { page } from "$app/state";
    import { base } from "$app/paths";
    let { children } = $props();

    function linkIsCurrent(name: string) {
        return page.url.pathname.startsWith(`${base}/${name}`);
    }
</script>

{#snippet navLink(name: string)}
    <a class={linkIsCurrent(name) ? "active" : ""} href={`${base}/${name}`}>{name}</a>
{/snippet}

<nav>
    <div id="navLeft">
        <a href={base ? base : "/"} id="logoTextContainer">
            <LogoWithText />
        </a>
        <div id="navLeftLinks">
            {#each ["add", "docs", "builder"] as name}
                {@render navLink(name)}
            {/each}
        </div>
    </div>
    <div id="navRight">
        {@render navLink("about")}
    </div>
</nav>

<div id="thingamajig">
    {@render children()}
</div>

<style>
    nav {
        display: flex;
        flex-direction: row;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 4rem;
        background-color: #1e1c25cc;
        backdrop-filter: blur(16px);
        justify-items: center;
        padding: 0 1rem 0 1rem;
        z-index: 1000;
    }
    #navLeft,
    #navRight {
        display: flex;
        gap: 2rem;
    }
    #navLeftLinks {
        gap: 2rem;
        display: none;
        @media screen and (width >= 800px) {
            display: flex;
            align-items: center;
        }
    }
    #navRight {
        padding-right: 1rem;
        margin-left: auto;
        align-items: center;
    }
    #logoTextContainer {
        display: flex;
        align-items: end;
        width: 10rem;
        height: 100%;
    }
    nav a {
        color: rgb(180, 180, 180);
        text-decoration: none;
        font-size: 16pt;
        display: block;
    }
    nav a.active {
        color: white;
    }

    #thingamajig {
        padding-top: 4rem;
    }
</style>
