<script lang="ts">
    import logo_text from "$lib/images/logo_text.svg";
    import { onNavigate } from '$app/navigation';

	let { children } = $props();
    import { page } from '$app/state';

    onNavigate((navigation) => {
        // console.log(page.url.pathname);

        if (!document.startViewTransition) return;

        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });

    function linkIsCurrent(name: string) {
        return page.url.pathname === `/${name}` || page.url.pathname === `/freckle-bot-site/${name}`;
    }
</script>

{#snippet navLink(name: string)}
    <a class="{linkIsCurrent(name) ? "active" : ""}" href={`./${name}`}>{name}</a>
{/snippet}

<nav>
    <div id="navLeft">
        <a href="./" id="logoTextContainer">
            <img src={logo_text} alt="Freckle logo" id="logoText">
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
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4rem;
        background-color: #1e1c25aa;
        justify-items: center;
        padding: 0 1rem 0 1rem;
        z-index: 1000;
    }
    #navLeft, #navRight {
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
    }
    #logoText {
        padding: auto;
        display: block;
        height: 100%;
        padding-top: 0.5rem;
    }
    nav a {
        color: rgb(180, 180, 180);
        text-decoration: none;
        font-size: 16pt;
        font-weight: 600;
        display: block;
    }
    nav a.active {
        color: white;
    }

    #thingamajig {
        padding-top: 4rem;
    }
</style>
