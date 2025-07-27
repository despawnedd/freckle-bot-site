// from https://github.com/pngwn/MDsveX/blob/5784c451fa9892ff44b7398a8add2140b3c0cec3/packages/mdsvex/src/transformers/index.ts#L626
export const escapeSvelty = (str) =>
    str
        .replace(/[{}`]/g, (c) => ({ "{": "&#123;", "}": "&#125;", "`": "&#96;" })[c])
        .replace(/\\([trn])/g, "&#92;$1");

// from https://stackoverflow.com/a/175787
export function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

// from https://stackoverflow.com/a/56901704
function isString(variable) {
    return typeof (variable) === 'string';
}
export function replaceLastOccurrenceInString(input, find, replaceWith) {
    if (!isString(input) || !isString(find) || !isString(replaceWith)) {
        // returns input on invalid arguments
        return input;
    }

    const lastIndex = input.lastIndexOf(find);
    if (lastIndex < 0) {
        return input;
    }

    return input.substring(0, lastIndex) + replaceWith + input.substring(lastIndex + find.length);
}
