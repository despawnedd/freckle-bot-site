import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

import slug from "rehype-slug";
import autolink_headings from "rehype-autolink-headings";

import { APP_REDIRECTS } from './src/redirects.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://svelte.dev/docs/kit/integrations
    // for more information about preprocessors
    preprocess: [
        vitePreprocess(),
        mdsvex({
            rehypePlugins: [
                [slug],
                [
                    autolink_headings,
                    // don't look at this
                    {
                        content: {
                            type: "element",
                            tagName: "span",
                            properties: {
                                className: ["material-symbols-outlined", "header-link"]
                            },
                            children: [{ type: "text", value: "link" }]
                        }
                    }
                ]
            ]
        })
    ],
    kit: {
        adapter: adapter({ fallback: "404.html" }),
        paths: {
            base: process.argv.includes("dev") ? "" : "/freckle-bot-site"
        },
        alias: { $components: "src/components" },
        // https://supun.io/sveltekit-static-redirects
        prerender: {
			entries: [
				'*',
				...Object.keys(APP_REDIRECTS)
			]
        }
    },
    extensions: [".svelte", ".svx"]
};

export default config;
