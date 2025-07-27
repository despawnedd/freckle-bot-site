import { escapeSvelty, isNumeric, replaceLastOccurrenceInString } from "./miniUtils.js";

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

function actualFreckleHighlighter(code, isDemo) {
    let start, end;

    let processedCode = code;

    const takesArgs = code.includes(":");

    // highlight $
    processedCode = processedCode.replace("$", `<span class="token keyword">$</span>`);

    // highlight function
    // https://stackoverflow.com/questions/14867835/get-substring-between-two-characters-using-javascript
    start = "{";
    end = takesArgs ? ":" : "}";
    const funcName = code.substring(code.indexOf(start) + 1, code.indexOf(end));
    processedCode = processedCode.replace(
        funcName,
        `<span class="token function">${funcName}</span>`
    );

    if (takesArgs) {
        // get arguments substring
        start = ":";
        end = "}";
        const argsStr = code.substring(code.indexOf(start) + 1, code.indexOf(end));

        let args = argsStr.split(",");
        for (let i = 0; i < args.length; i++)
            args[i] =
                `<span class="token ${isDemo ? "keyword" : isNumeric(args[i]) ? "number" : "string"}">${args[i]}</span>`;

        processedCode = replaceLastOccurrenceInString(processedCode, argsStr, args.toString(","));
    }

    return processedCode;
}

// custom highlighter + button inject
// * PLEASE DO NOT QUESTION THIS CODE
export function highlighter(code, lang) {
    lang = lang.toLowerCase();

    const codeIsDemo = code[0] === ":";
    const realCode = codeIsDemo ? code.substring(1) : code;
    let processedCode = realCode;

    // TODO: PLEASE change this "demo" crap
    if (lang === "freckle") processedCode = actualFreckleHighlighter(realCode, codeIsDemo);

    const tooltip = `<span class="code-block-copy-btn-tooltip">Copy</span>`;

    const copybuttonOnClick = `(event) => {
        navigator.clipboard.writeText("${realCode}");
        event.target.children[1].innerText = "Copied!";

        if (event.target.dataset.timeoutid !== "-1") clearTimeout(event.target.dataset.timeoutid);
        event.target.dataset.timeoutid = setTimeout(() => {
            event.target.children[1].innerText = "Copy";
            event.target.dataset.timeoutid = "-1";
        }, 2000);
    }`;
    const copybuttonOnMouseOut = `(event) => {
        if (event.target.dataset.timeoutid !== "-1") clearTimeout(event.target.dataset.timeoutid);
        event.target.dataset.timeoutid = setTimeout(() => {
            event.target.children[1].innerText = "Copy";
            event.target.dataset.timeoutid = "-1";
        }, 210);
    }`;
    const copybutton = `<button class="code-block-copy-btn" data-timeoutid="-1" on:click={${copybuttonOnClick}} on:mouseout={${copybuttonOnMouseOut}}><span class="material-symbols-outlined">content_copy</span>${tooltip}</button>`;

    return `<pre class="language-${lang} code-block"><code class="language-${lang}">${escapeSvelty(processedCode)}</code>${copybutton}</pre>`;
}
