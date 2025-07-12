<script lang="ts">
    import { base } from "$app/paths";
    import { page } from '$app/state';
    let { children } = $props();

    function linkIsCurrentDocs(id: string) {
        // don't ask
        return page.url.pathname === `${base}/docs${id ? "/" + id : ""}`;
    }

    interface Article {
        name: string;
        id: string;
    }
    const articles: Article[] = [
        {
            name: "Home",
            id: ""
        },
        {
            name: "Textbox",
            id: "textbox"
        },
        {
            name: "Textbox > Commands",
            id: "textbox/commands"
        },
        {
            name: "Textbox > Expressions table",
            id: "textbox/table"
        }
    ];
</script>

{#snippet docsNavLink(art: Article)}
    <li class="{linkIsCurrentDocs(art.id) ? "active" : ""}"><a href={`${base}/docs/${art.id}`}>{art.name}</a></li>
{/snippet}

<div id="main">
    <aside style="float: left;">
        <ul>
            {#each articles as article}
                {@render docsNavLink(article)}
            {/each}
        </ul>
    </aside>
    <div id="docArticle">
        {@render children()}
    </div>
</div>

<style>
    #main {
        display: flex;
        gap: 4rem;
        padding-top: 2rem;
    }
    #docArticle {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    ul a {
        color: white;
        text-decoration: none;
        font-size: large;
        background-color: rgb(56, 52, 68);
        padding: 0.5rem;
        border-radius: 0.5rem;
        /* transition: 0.25s; */
    }
    li.active > a {
        color: #495057;
        background-color: #fff;
        border-color: #dee2e6 #dee2e6 #fff;
    }
</style>
