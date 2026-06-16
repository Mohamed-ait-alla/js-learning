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

function convertMarkdownBold(content) {
	const regex = /(\*\*|__)(.*?)\1/gm; 
	const result = content
					.split("\n")
					.filter(line => line.trim() !== "")
					.map(line => {
						const withStrong = line.replace(regex, "<strong>$2</strong>");
						return (withStrong !== "<strong></strong>") ? `<p>${withStrong}</p>` : withStrong;
					})
					.join("\n");

	return result;
}

function convertMarkdownItalic(content) {
	const regex = /(\*|_)(.*?)\1/gm;
	const result = content
					.split("\n")
					.filter(line => line.trim() !== "")
					.map(line => {
						const withItalic = line.replace(regex, "<em>$2</em>");
						return (withItalic !== "<em></em>") ? `<p>${withItalic}</p>` : withItalic;
					})
					.join("\n");

	return result;
}

function convertMarkdownImage(content) {
	const regex = /!\[(.*?)\]\((.*?)\)/gm;
	const result = content
					.split("\n")
					.filter(line => line.trim() !== "")
					.map(line => {
						const withImageTag = line.replace(regex, '<img alt="$1" src="$2">');
						return withImageTag;
					})
					.join("\n");

	return result;
}

function convertMarkdownLink(content) {
	const regex = /\[(.*?)\]\((.*?)\)/gm;
	const result = content
					.split("\n")
					.filter(line => line.trim() !== "")
					.map(line => {
						const withImageTag = line.replace(regex, '<a href="$2">$1</a>');
						return withImageTag;
					})
					.join("\n");

	return result;	
}

function convertMarkdownQuote(content) {
	const regex = /^[ \t]*> (.+)/;
	const quotePatternRegex = /^[ \t]*> /;
	const lines = content.split("\n").filter(line => line.trim() !== "");
	const result = [];
	let i = 0;

	while (i < lines.length) {
		if (regex.test(lines[i])) {
		const quoteText = lines[i].replace(quotePatternRegex, "");
		const buffer = [quoteText];

		while (i + 1 < lines.length && !quotePatternRegex.test(lines[i + 1])) {
			i++;
			buffer.push(lines[i]);
		}

		result.push(`<blockquote>${buffer.join(" ")}</blockquote>`);
		} else {
		result.push(lines[i]);
		}
		i++;
	}

	return result.join("\n");
}

function convertMarkdown() {
	const headingRegex = /^[ \t]*(#+) (.+)/;
	const boldRegex = /(\*\*|__)(.*?)\1/;
	const italicRegex = /(\*|_)(.*?)\1/;
	const imgRegex = /!\[(.*?)\]\((.*?)\)/;
	const linkRegex = /\[(.*?)\]\((.*?)\)/;
	const quoteRegex = /^[ \t]*> (.+)/;
	markdownInput.addEventListener('input', (e) => {
		if (headingRegex.test(e.target.value))
		{
			console.log("------ Heading -------");
			const result = convertMarkdownHeading(e.target.value);
			htmlOutput.textContent = result;
			preview.innerHTML = result;
		}
		else if (boldRegex.test(e.target.value))
		{
			console.log("------ Strong -------");
			const result = convertMarkdownBold(e.target.value);
			htmlOutput.textContent = result;
			preview.innerHTML = result;
		}
		else if (italicRegex.test(e.target.value))
		{
			console.log("------ Italic -------");
			const result = convertMarkdownItalic(e.target.value);
			htmlOutput.textContent = result;
			preview.innerHTML = result;
		}
		else if (imgRegex.test(e.target.value))
		{
			console.log("------ Image -------");
			const result = convertMarkdownImage(e.target.value);
			htmlOutput.textContent = result;
			preview.innerHTML = result;
		}
		else if (linkRegex.test(e.target.value))
		{
			console.log("------ Link -------");
			const result = convertMarkdownLink(e.target.value);
			htmlOutput.textContent = result;
			preview.innerHTML = result;
		}
		else if (quoteRegex.test(e.target.value))
		{
			console.log("------ Quote -------");
			const result = convertMarkdownQuote(e.target.value);
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