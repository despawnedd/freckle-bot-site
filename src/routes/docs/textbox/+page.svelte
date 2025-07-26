<!-- Page title -->
<svelte:head>
    <title>Docs &gt; Textbox &ndash; Freckle</title>
</svelte:head>

<script lang="ts">
    import { base } from "$app/paths";
</script>

<h1>UT/DR textbox generator</h1>
<p>Generates UNDERTALE/DELTARUNE textboxes, akin to "<a href="https://www.demirramon.com/generators/undertale_text_box_generator" target="_blank">Undertale text box generator - Demirramon's hideout</a>".</p>

<p>Has an animated (<code>/textboxa</code>) and static (<code>/textbox</code>) version.</p>
<p>An example of such command:</p>
<div class="img-div">
    <img alt="Screenshot of the /textboxa command output in the Discord client" src={`${base}/images/docs/textbox-1.png`}>
</div>

<p>Both take the same arguments.</p>
<div class="img-div">
    <img alt="Screenshot of the arguments popup in the Discord client" src={`${base}/images/docs/textbox-2.png`}>
</div>
<ul style="line-height: 2rem;">
    <li>
        <code>text</code>: A string. See <a href={`${base}/docs/textbox/commands`}>Textbox commands</a> for available commands that you can insert.
    </li>
    <li>
        <code>charexp</code>: An integer. See <a href={`${base}/docs/textbox/table`}>the expressions table</a>. Default is <code>1</code>.
    </li>
    <li>
        <code>character</code>: A string. Must be one of the characters from <a href={`${base}/docs/textbox/table`}>the expressions table</a>. Case-insensitive. Default is <code>noelle</code>.
    </li>
    <li>
        <code>size</code>: An integer (whole number). Multiplies the image's size by the amount specified (eg. <code>2</code> for two times the size). Default is <code>2</code>.
    </li>
</ul>

<style>
    .img-div {
        display: flex;
    }
    .img-div > img {
        max-width: 100%;
    }
</style>
