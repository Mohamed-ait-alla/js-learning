/*
 * Workshop: Build a RegEx Sandbox
 */

const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");

function getFlags() {
    let flags = "";
 
    if (caseInsensitiveFlag.checked)
        flags += "i";
    if (globalFlag.checked)
        flags += "g";

    return flags;
}

testButton.addEventListener("click", () => {
    const regex = new RegExp(regexPattern.value, getFlags());

    const matches = stringToTest.textContent.match(regex);
    const replaced = stringToTest.textContent.replace(regex, (match) => {
            return `<span class='highlight'>${match}</span>`;
        });

    stringToTest.innerHTML = replaced;
    testResult.innerText = (replaced === stringToTest.textContent) ? "no match" : matches.join(", ");
});


