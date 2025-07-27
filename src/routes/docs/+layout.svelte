<script lang="ts">
    import "material-symbols";
    import { base } from "$app/paths";
    import { page } from '$app/state';
    let { children } = $props();

    function linkIsCurrentDocs(id: string) {
        // don't ask
        return page.url.pathname === `${base}/docs${id ? "/" + id : ""}`;
    }

    const articleNameMap = {
        "what-is-freckle": "What is Freckle?",
        "intro-to-textboxes": "Intoduction to Textboxes",
        "textbox-commands": "Textbox commands",
        "expressions-table": "Expressions table"
    };

    // don't ask, again
    type ArticleId = keyof typeof articleNameMap;
</script>

{#snippet docsNavLink(articleId: ArticleId)}
    <li class="{linkIsCurrentDocs(articleId) ? "active" : ""}"><a href={`${base}/docs/${articleId}`}>{articleNameMap[articleId]}</a></li>
{/snippet}

<div id="main">
    <aside>
        <ul>
            <h3>Introduction</h3>
            {@render docsNavLink("what-is-freckle")}
            <h3>Textbox</h3>
            {@render docsNavLink("intro-to-textboxes")}
            {@render docsNavLink("textbox-commands")}
            {@render docsNavLink("expressions-table")}
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
    :root {
        --sidebar-width: 20rem;
    }
    #main {
        display: flex;
        min-height: calc(100dvh - 4rem);
        @media screen and (width <= 1200px) {
            flex-direction: column;
        }
    }
    aside {
        background-color: #1f1d27;
        min-width: var(--sidebar-width);
        @media screen and (width <= 1200px) {
            min-width: none;
            width: 100%;
        }
    }
    #docArticle {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem 4rem 4rem 3rem;
        @media screen and (width <= 1200px) {
            padding: 2rem 2rem 0 3rem;
        }
    }
    ul {
        overflow-y: auto;
        list-style: none;
        margin: 0;
        top: 4rem;
        left: 0;
        padding: 2rem 2rem 2rem 2rem;
        @media screen and (width > 1200px) {
            min-width: var(--sidebar-width);
            height: calc(100dvh - 4rem);
            position: fixed;
            padding-right: 4rem;
        }
    }
    a {
        text-decoration: none;
    }
    ul a {
        border-radius: 0.5rem;
        color: #b2a7b8;
    }
    ul h3:not(:first-child) {
        padding-top: 1rem;
    }
    li.active > a {
        color: white;
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
