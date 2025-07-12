<script lang="ts">
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
    <a href="#top">Back to top</a>
    <p>
        <a href={args.href} target="_blank">{args.hrefTitle}</a>
    </p>
    <table>
        <tbody>
            <tr>
                <th style="width: 0;">Portrait</th>
                <th>ID</th>
                <!-- <th>Description</th> -->
            </tr>
            {#each { length: args.length }, i}
                <tr>
                    <td><img alt={args.id} src={`./images/expressions/${args.id}/${i + 1}.png`} /></td>
                    <td>{i + 1}</td>
                    <!-- <td>{i + 1}</td> -->
                </tr>
            {/each}
        </tbody>
    </table>
{/snippet}

<div id="main">
    <h1>Freckle <code>/textbox</code> character table</h1>
    <p>
        skip to:
        <a href="#noelle">Noelle</a>,
        <a href="#ralsei">Ralsei</a>,
        <a href="#susie">Susie</a>,
        <a href="#kris">Kris</a>,
        <a href="#sans">Sans</a>,
        <a href="#sansboss">Sans (boss)</a>,
        <a href="#papyrus">Papyrus</a>
    </p>

    {#each chars as char}
        {@render thingy(char)}
    {/each}
</div>

<style>
    #main {
        padding: 2rem 6rem 2rem 6rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        @media screen and (width <= 800px) {
            padding: 2rem;
        }
    }
    a:link {
        color: aqua;
    }
    a:visited {
        color: pink;
    }
    table {
        border-collapse: collapse;
        /* width: 30rem; */
        max-width: 30rem;
    }
    td,
    th {
        border: 1px solid white;
        padding: 0.65rem;
    }
    td:first-child {
        background-color: black;
    }
    th {
        background-color: rgba(0, 0, 0, 0.25);
    }
</style>
