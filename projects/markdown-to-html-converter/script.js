const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");


function convertMarkdownHeading(content) {
	let result = "";
	const regex = /^[ \t]*(#+) (.+)/gm; 
	const matches = [...content.matchAll(regex)];

	if (!matches || matches.length === 0)
		return content;

	matches.forEach(match => {
		const headingLevel = match[1];
		const headingText = match[2];

		if (headingLevel === "#")
			result += `<h1>${headingText}</h1>`;
		else if (headingLevel === "##")
			result += `<h2>${headingText}</h2>`;
		else
			result += `<h3>${headingText}</h3>`;
		
		result += "\n";
	})

	return result;
}

function convertMarkdown() {
	const headingRegex = /^[ \t]*(#+) (.+)/; 
	markdownInput.addEventListener('input', (e) => {
		if (headingRegex.test(e.target.value))
		{
			console.log("------ Heading -------");
			const result = convertMarkdownHeading(e.target.value);
			htmlOutput.textContent = result;
			preview.innerHTML = result;
		}
		else
		{
			htmlOutput.textContent = e.target.value;
			preview.textContent = e.target.value;
		}
	});
}

convertMarkdown();