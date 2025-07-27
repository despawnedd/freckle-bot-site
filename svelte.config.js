import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import slug from "rehype-slug";
import autolinkHeadings from "rehype-autolink-headings";
import { autolinkHeadingsOptions, highlighter } from "./mdsvexAssist.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://svelte.dev/docs/kit/integrations
    // for more information about preprocessors
    preprocess: [
        vitePreprocess(),
        mdsvex({
            rehypePlugins: [[slug], [autolinkHeadings, autolinkHeadingsOptions]],
            highlight: { highlighter }
        })
    ],
    kit: {
        adapter: adapter({ fallback: "404.html" }),
        paths: {
            base: process.argv.includes("dev") ? "" : "/freckle-bot-site"
        },
        alias: { $components: "src/components" }
    },
    extensions: [".svelte", ".svx"]
};

export default config;
