"use strict";
// 84. Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".
Object.defineProperty(exports, "__esModule", { value: true });
function replaceJavaScriptWithTypeScript(sentence) {
    return sentence.replace(/JavaScript/g, "TypeScript");
}
console.log(replaceJavaScriptWithTypeScript("I love JavaScript and JavaScript is awesome!"));
