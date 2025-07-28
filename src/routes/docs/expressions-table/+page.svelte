<!-- Since this isn't a .svx file, I either have to manually add header links + toc or set up jank -->
<!-- I chose the former -->

<script lang="ts">
    export const title = "Textbox character expressions table";

    import { base } from "$app/paths";

    interface Whatever {
        id: string;
        name: string;
        href: string;
        hrefTitle: string;
        length: number;
    }

    const chars: Whatever[] = [
        {
            id: "noelle",
            name: "Noelle",
            href: "https://www.spriters-resource.com/pc_computer/deltarune/sheet/110612/",
            hrefTitle: "PC / Computer - Deltarune - Noelle - The Spriters Resource",
            length: 51
        },
        {
            id: "ralsei",
            name: "Ralsei",
            href: "https://www.spriters-resource.com/pc_computer/deltarune/sheet/110469/",
            hrefTitle: "PC / Computer - Deltarune - Ralsei - The Spriters Resource",
            length: 51
        },
        {
            id: "susie",
            name: "Susie",
            href: "https://www.spriters-resource.com/pc_computer/deltarune/sheet/110471/",
            hrefTitle: "PC / Computer - Deltarune - Susie (Chapter 1&2) - The Spriters Resource",
            length: 51
        },
        {
            id: "kris",
            name: "Kris",
            href: "https://x.com/EllisBros/status/1938375472850812938",
            hrefTitle: '🩸EllisBros🩸 on X: "kris portrait resprite or something https://t.co/WOw4ggnb7q" / X',
            length: 10
        },
        {
            id: "sans",
            name: "Sans",
            href: "https://www.spriters-resource.com/pc_computer/undertale/sheet/76011/",
            hrefTitle: "PC / Computer - Undertale - Sans - The Spriters Resource" ,
            length: 7
        },
        {
            id: "sansboss",
            name: "Sans (boss)",
            href: "https://www.spriters-resource.com/pc_computer/undertale/sheet/76011/",
            hrefTitle: "PC / Computer - Undertale - Sans - The Spriters Resource" ,
            length: 22
        },
        {
            id: "papyrus",
            name: "Papyrus",
            href: "https://www.spriters-resource.com/pc_computer/undertale/sheet/76014/",
            hrefTitle: "PC / Computer - Undertale - Papyrus - The Spriters Resource" ,
            length: 19
        }
    ];
</script>

<svelte:head>
    <title>{title} &ndash; Freckle</title>
</svelte:head>

<div class="toc">
    <h3>Table of Contents</h3>
    <ol>
        <li>
            <a href="#title">{title}</a>
        </li>
        {#each chars as char}
            <li>
                <a href={`#${char.id}`}>{char.name}</a>
            </li>
        {/each}
    </ol>
</div>

{#snippet thingy(args: Whatever)}
    <h2 id={args.id}>
        <a aria-hidden="true" tabindex="-1" href={`#${args.id}`}>
            <span class="material-symbols-outlined header-link">tag</span>
        </a>
        {args.name}
    </h2>
    <p>
        <a href={args.href} target="_blank">{args.hrefTitle}</a>
    </p>
    <div style="display: flex; flex-wrap: wrap;">
        {#each { length: args.length }, i}
            <div class="exp-cont">
                <div>
                    <img alt={args.id} src={`${base}/images/expressions/${args.id}/${i + 1}.png`} />
                </div>
                <span>{i + 1}</span>
            </div>
        {/each}
    </div>
{/snippet}

<h1 id="title">
    <a aria-hidden="true" tabindex="-1" href="#title">
        <span class="material-symbols-outlined header-link">tag</span>
    </a>
    {title}
</h1>
<p>Most sprites are from The Sprites Resource (check the links below).</p>

{#each chars as char}
    {@render thingy(char)}
{/each}

<style>
    img {
        image-rendering: pixelated;
    }
    .exp-cont {
        width: 8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #b2a7b8;
        background-color: rgba(255, 255, 255, 0.1);
        padding: 0.5rem;
    }
</style>
