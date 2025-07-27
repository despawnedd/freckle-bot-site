import { randomBytes } from "node:crypto";

// adds a little link icon next to headers
// ? to self: consider adding automatic clipboard-copying
export const autolinkHeadingsOptions = {
    content: {
        type: "element",
        tagName: "span",
        properties: {
            className: ["material-symbols-outlined", "header-link"]
        },
        children: [{ type: "text", value: "link" }]
    }
};

// from https://github.com/pngwn/MDsveX/blob/5784c451fa9892ff44b7398a8add2140b3c0cec3/packages/mdsvex/src/transformers/index.ts#L626
export const escape_svelty = (str) =>
    str
        .replace(/[{}`]/g, (c) => ({ "{": "&#123;", "}": "&#125;", "`": "&#96;" })[c])
        .replace(/\\([trn])/g, "&#92;$1");

// custom highlighter + button inject
// * PLEASE DO NOT QUESTION THIS CODE
export function highlighter(code, lang) {
    lang = lang.toLowerCase();

    const tooltip = `<span class="code-block-copy-btn-tooltip">Copy</span>`;

    const copybuttonOnClick = `(el) => {
        navigator.clipboard.writeText("${code}");
        el.target.children[1].innerText = "Copied!";
        setTimeout(() => el.target.children[1].innerText = "Copy", 2000);
    }`;
    const copybutton = `<button class="code-block-copy-btn" onclick={${copybuttonOnClick}}><span class="material-symbols-outlined">content_copy</span>${tooltip}</button>`;

    return `<pre class="language-${lang} code-block"><code class="language-${lang}">${escape_svelty(code)}</code>${copybutton}</pre>`;
}
