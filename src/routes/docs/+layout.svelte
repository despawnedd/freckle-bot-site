<script lang="ts">
    import "material-symbols";
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

<div id="toTopBtnDiv">
    <a href="#top" id="toTopBtn"><span class="material-symbols-outlined" aria-hidden="true">keyboard_arrow_up</span></a>
</div>

<style>
    #main {
        display: flex;
        @media screen and (width <= 1200px) {
            flex-direction: column;
        }
        padding-top: 2rem;
    }
    #docArticle {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0 4rem 4rem 22rem;
        @media screen and (width <= 1200px) {
            padding: 2rem 2rem 0 2rem;
        }
    }
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        @media screen and (width > 1200px) {
            position: fixed;
        }
    }
    a {
        text-decoration: none;
    }
    ul a {
        color: white;
        font-size: large;
        background-color: rgb(56, 52, 68);
        padding: 0.5rem;
        border-radius: 0.5rem;
    }
    li.active > a {
        color: #495057;
        background-color: #fff;
        border-color: #dee2e6 #dee2e6 #fff;
    }

    #toTopBtnDiv {
        position: fixed;
        top: 0;
        left: 0;
        margin-left: calc(100dvw - 6rem);
        margin-top: calc(100dvh - 6rem);
        z-index: 1000;
    }
    #toTopBtn {
        height: 5rem;
    }
    #toTopBtn > span {
        font-size: 40pt;
        color: white;
        background-color: #495057;
        border-radius: 2rem;
    }
</style>
