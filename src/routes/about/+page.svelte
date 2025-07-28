<!-- Page title -->
<svelte:head>
    <title>About &ndash; Freckle</title>
</svelte:head>

<script lang="ts">
    import LogoWithText from "$components/svg/LogoWithText.svelte";
</script>

<div id="main">
    <div id="logoDiv">
        <div id="logoContainer"><LogoWithText /></div>
    </div>
    <div>
        <p>a Discord app to make your day just a tiny bit more interesting</p>
        <p>&copy; despawnedd 2025</p>
    </div>
    <div>
        <p>Home page character: <a href="https://deltarune.wiki/w/Noelle_Holiday" target="_blank">Noelle Holiday</a> from DELTARUNE</p>
        <p>GitHub repo (bot): freckle-bot (not yet public)</p>
        <p>GitHub repo (page): <a href="https://github.com/despawnedd/freckle-bot-site" target="_blank">freckle-bot-site</a></p>
    </div>
</div>

<style>
    #main {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        padding-left: 2rem;
        padding-right: 2rem;
    }
    #main div:not(:first-child) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    #main div:last-child p {
        opacity: 0.5;
    }

    #logoDiv {
        display: flex;
        width: 100%;
        justify-content: center;
        padding-top: 2rem;
    }

    #logoContainer {
        width: 20rem;
    }

    p {
        display: block;
        width: 100%;
        text-align: center;
    }
</style>
