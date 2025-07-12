<!-- Page title -->
<svelte:head>
    <title>Docs &gt; Textbox &gt; Expressions table &ndash; Freckle</title>
</svelte:head>

<script lang="ts">
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

{#snippet thingy(args: Whatever)}
    <h2 id={args.id}>{args.name}</h2>
    <p>
        <a href={args.href} target="_blank">{args.hrefTitle}</a>
    </p>
    <table>
        <tbody>
            <tr>
                <th>ID</th>
                <th>Portrait</th>
                <th>Description</th>
            </tr>
            {#each { length: args.length }, i}
                <tr>
                    <td>{i + 1}</td>
                    <td>
                        <div>
                            <img alt={args.id} src={`${base}/images/expressions/${args.id}/${i + 1}.png`} />
                        </div>
                    </td>
                    {#if i === 0}
                        <td><ul><li>default</li></ul></td>
                    {:else}
                       <td>(to be added)</td>
                    {/if}
                </tr>
            {/each}
        </tbody>
    </table>
{/snippet}

<h1>Textbox character expressions table</h1>
<p>Most sprites are from The Sprites Resource (check the links below).</p>
<p>
    skip to:
    {#each chars as char, i}
        {#if i > 0}
            <span>,</span>
        {/if}
        <a href={`#${char.id}`}>{char.name}</a>
    {/each}
</p>

{#each chars as char}
    {@render thingy(char)}
{/each}

<style>
    table {
        max-width: 25rem;
    }
    th:nth-child(1) {
        width: 2rem;
    }
    th:nth-child(2) {
        width: 0;
    }
    td:nth-child(1) {
        font-size: 20pt;
        text-align: center;
    }
    td:nth-child(2) {
        background-color: black;
        width: 8.5rem;
        height: 9.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        image-rendering: pixelated;
    }
</style>
