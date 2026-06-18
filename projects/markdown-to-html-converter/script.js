const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

// function responsible for heading conversion
function convertMarkdownHeading(content) {
	let		result = "";
	const	headingRegex = /^[ \t]*(#+) (.+)/gm; 
	const	matches = [...content.matchAll(headingRegex)];

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

// function responsible for Bold and/or Italic conversion
function convertMarkdownInline(content) {
    const InlineRegex = /(\*\*|__)([^*_]*?)(\*|_)(.*?)\3([^*_]*?)\1/g;
	const boldRegex = /(\*\*|__)(.*?)\1/g;
	const italicRegex = /(\*|_)(.*?)\1/g;

    let result = content
					.split("\n")
					.filter(line => line.trim() !== "")
					.map(line => {

						const result = line.replace(InlineRegex, (match, boldOpen, before, italicDelim, italicContent, after) => {
						return `<strong>${before}<em>${italicContent}</em>${after}</strong>`;
					});
					return result;
					})
					.join("\n");

    result = result.replace(boldRegex, (match, delim, inner) => {
        return `<strong>${inner}</strong>`;
    });

    result = result.replace(italicRegex, (match, delim, inner) => {
        return `<em>${inner}</em>`;
    });
    
    return result;
}

// function responsible for images conversion
function convertMarkdownImage(content) {
	const imageRegex = /!\[(.*?)\]\((.*?)\)/gm;
	const result = content
					.split("\n")
					.filter(line => line.trim() !== "")
					.map(line => {
						const withImageTag = line.replace(imageRegex, '<img alt="$1" src="$2">');
						return withImageTag;
					})
					.join("\n");

	return result;
}

// function responsible for links conversion
function convertMarkdownLink(content) {
	const linkRegex = /\[(.*?)\]\((.*?)\)/gm;
	const result = content
					.split("\n")
					.filter(line => line.trim() !== "")
					.map(line => {
						const withImageTag = line.replace(linkRegex, '<a href="$2">$1</a>');
						return withImageTag;
					})
					.join("\n");

	return result;	
}

// function responsible for quotes conversion
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

// function responsible for running the workflow and return the result
function convertMarkdown() {
	let result = markdownInput.value;

	result = convertMarkdownHeading(result);
	result = convertMarkdownInline(result);
	result = convertMarkdownImage(result);
	result = convertMarkdownLink(result);
	result = convertMarkdownQuote(result);

	return result;
}

// function responsible for rendering results
function displayResults() {
	const result = convertMarkdown();

	htmlOutput.textContent = result;
	preview.innerHTML = result;
}


markdownInput.addEventListener('input', () => {
	displayResults();
})