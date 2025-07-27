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

    // ! BIG ISSUE HERE IS THAT WRONG ARGUMENTS CAN GET HIGHLIGHTED
    // TODO: REWRITE EVERYTHING
    if (takesArgs) {
        const replaceArg = (arg) => {
            processedCode = replaceLastOccurrenceInString(
                processedCode,
                arg,
                `<span class="token ${isDemo ? "keyword" : isNumeric(arg) ? "number" : "string"}">${arg}</span>`
            );
        };

        const hasMultipleArgs = code.includes(",");

        // get arguments substring
        start = ":";
        end = "}";
        const argsStr = code.substring(code.indexOf(start) + 1, code.indexOf(end));

        // highlight first argument
        const firstArg = hasMultipleArgs ? argsStr.substring(0, argsStr.indexOf(",")) : argsStr;
        replaceArg(firstArg);

        if (hasMultipleArgs) {
            // ! TEMPORARY
            start = end = ",";
            const middleArg = argsStr.substring(
                argsStr.indexOf(start) + 1,
                argsStr.lastIndexOf(end)
            );
            replaceArg(middleArg);

            // not temporary
            const lastArg = argsStr.substring(argsStr.lastIndexOf(",") + 1);
            replaceArg(lastArg);
        }
    }

    return processedCode;
}

// custom highlighter + button inject
// * PLEASE DO NOT QUESTION THIS CODE
export function highlighter(code, lang) {
    lang = lang.toLowerCase();
    let processedCode = code;

    // TODO: change this "demo" crap
    const codeIsDemo = code[0] === ":";
    if (lang === "freckle")
        processedCode = actualFreckleHighlighter(codeIsDemo ? code.substring(1) : code, codeIsDemo);

    const tooltip = `<span class="code-block-copy-btn-tooltip">Copy</span>`;

    const copybuttonOnClick = `(el) => {
        navigator.clipboard.writeText("${code}");
        el.target.children[1].innerText = "Copied!";
        setTimeout(() => el.target.children[1].innerText = "Copy", 2000);
    }`;
    const copybutton = `<button class="code-block-copy-btn" onclick={${copybuttonOnClick}}><span class="material-symbols-outlined">content_copy</span>${tooltip}</button>`;

    return `<pre class="language-${lang} code-block"><code class="language-${lang}">${escapeSvelty(processedCode)}</code>${copybutton}</pre>`;
}
