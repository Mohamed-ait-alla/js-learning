/*
 * Workshop: Build a Bookmark Manager App
 */


// ---------- Variables ----------

const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkListSection = document.getElementById("bookmark-list-section");
const addBookMarkBtn = document.getElementById("add-bookmark-button");
const addBookMarkFormBtn = document.getElementById("add-bookmark-button-form");
const closeFormBtn = document.getElementById("close-form-button");
const viewCategoryBtn = document.getElementById("view-category-button");
const closeListBtn = document.getElementById("close-list-button");
const deleteBookMarkBtn = document.getElementById("delete-bookmark-button");
const categoryName = document.querySelector(".category-name");
const categoryDropdown = document.getElementById("category-dropdown");
const categoryList = document.getElementById("category-list");
const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");
let bookMarks = getBookmarks();

// ---------- Functions ----------

function getBookmarks() {
	try {
		const rawData = localStorage.getItem("bookmarks");
		if (!rawData)
			return [];
	
		const parsedData = JSON.parse(rawData);
		if (Array.isArray(parsedData) && parsedData.every(item => 
		  item && 
		  typeof item === 'object' &&
		  'name' in item && item.name &&
		  'category' in item && item.category &&
		  'url' in item && item.url
		)) {
		  return parsedData;
		}
		return [];
	} catch (error) {
		return [];
	}
}

function displayOrCloseForm() {
	mainSection.classList.toggle("hidden");
	formSection.classList.toggle("hidden");
}

function displayOrHideCategory() {
	mainSection.classList.toggle("hidden");
	bookmarkListSection.classList.toggle("hidden");
}

function renderCategoryList() {
  categoryList.innerHTML = "";
  bookMarks = getBookmarks();
  const selectedCategory = bookMarks.filter((item) => item.category === categoryDropdown.value);
  if (selectedCategory.length) {
    selectedCategory.forEach((bookmark) => {
      categoryList.innerHTML += `
        <div>
          <input type="radio" id="${bookmark.name}" name="bookmark" value="${bookmark.name}" />
          <label for="${bookmark.name}">
            <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
          </label>
        </div>
      `;

    });
  } else {
    categoryList.innerHTML = `<p>No Bookmarks Found</p>`;
  }
}

function addBookmark() {
	const currentBook = {
		name: `${nameInput.value}`,
		category: `${categoryDropdown.value}`,
		url: `${urlInput.value}`
	}
 	bookMarks = getBookmarks();
	bookMarks.push(currentBook);
	localStorage.setItem("bookmarks", JSON.stringify(bookMarks));
	nameInput.value = "";
	urlInput.value = "";
}

function removeBookmark() {
	const selectedRadio = categoryList.querySelector('input[name="bookmark"]:checked');

	if (!selectedRadio)
		return;

	bookMarks = getBookmarks();
	const dataArrIndex = bookMarks.findIndex((item) => item.name === selectedRadio.id && item.category === categoryDropdown.value)
	bookMarks.splice(dataArrIndex, 1);
	localStorage.setItem("bookmarks", JSON.stringify(bookMarks));
}

// ---------- Events ----------

addBookMarkBtn.addEventListener("click", () => {
	categoryName.innerText = categoryDropdown.value;
	displayOrCloseForm();
})

closeFormBtn.addEventListener("click", () => {
	displayOrCloseForm();
})

addBookMarkFormBtn.addEventListener("click", () => {
	if (nameInput.value === "" || urlInput.value === "") {
		alert("Please, Provide valid name and url");
		return ;
	}

	addBookmark();
	displayOrCloseForm();
})

closeListBtn.addEventListener("click", () => {
	displayOrHideCategory();
	categoryList.innerHTML = "";
})

viewCategoryBtn.addEventListener("click", () => {
	categoryName.innerText = categoryDropdown.value;

	renderCategoryList();
	displayOrHideCategory();
})

deleteBookMarkBtn.addEventListener("click", () => {
	removeBookmark();
	renderCategoryList();
})

