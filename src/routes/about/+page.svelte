<!-- Page title -->
<svelte:head>
    <title>About &ndash; Freckle</title>
</svelte:head>

<script lang="ts">
    import logo_text from "$lib/images/logo_text.svg";
</script>

<div id="logoDiv">
    <img style="width: 20rem;" src={logo_text} alt="Freckle logo" id="logoText">
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

    p {
        display: block;
        padding: 2rem;
        width: 100%;
        text-align: center;
    }
</style>
