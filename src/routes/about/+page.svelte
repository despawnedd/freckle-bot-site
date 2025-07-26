<!-- Page title -->
<svelte:head>
    <title>About &ndash; Freckle</title>
</svelte:head>

<script lang="ts">
    import LogoWithText from "$components/svg/LogoWithText.svelte";
</script>

<div id="logoDiv">
    <div id="logoContainer"><LogoWithText /></div>
</div>
<p>a Discord app to make your day just a tiny bit more interesting</p>
<p>&copy; despawnedd 2025</p>
<p style="opacity: 0.5;">Yes. That's <a href="https://deltarune.wiki/w/Noelle_Holiday" target="_blank">Noelle</a> on the Home page.</p>

<style>
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
        padding: 2rem;
        width: 100%;
        text-align: center;
    }
</style>
