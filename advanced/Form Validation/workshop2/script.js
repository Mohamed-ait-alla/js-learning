/*
 * Workshop: Build a Customer Complaint Form
 */


// ---------- Variables ----------

const form = document.getElementById("form");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const complaintsGroup = document.querySelectorAll("#complaints-group input[type='checkbox']");
const complaintDescription = document.getElementById("complaint-description");
const solutionsGroup = document.querySelectorAll("#solutions-group input[type='radio']");
const solutionDescription = document.getElementById("solution-description");
const otherComplaint = document.getElementById("other-complaint");
const otherSolution = document.getElementById("other-solution");
const submitButton = document.getElementById("submit-btn");


// ---------- individual field validators ----------

function checkName(fullName) {
	return (fullName !== "");
}

function checkEmail(email) {
	const regex = /^(.+)@(.+)\.(.+)/;
	return regex.test(email);
}

function checkOrderNo(orderNo) {
	const regex = /^2024\d{6}$/;
	return regex.test(orderNo);
}

function checkProductCode(productCode) {
	const regex = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]{1}\d{3}-[a-zA-Z]{2}\d{1}/;
	return regex.test(productCode);
}

function checkQuantity(quantity) {
	return Number(quantity) > 0;
}

function checkComplaintsGroup(complaintsGroupList) {
	for (const complaint of complaintsGroupList) {
		if (complaint.checked)
			return true;
	}
	return false;
}

function checkComplaintDescription(complaintDescription) {
	const isChecked = otherComplaint.checked;

	if (isChecked) {
		if (complaintDescription.length >= 20)
			return true;
		else
			return false;
	}
	return true;
}

function checkSolutionsGroup(solutionsGroupList) {
	for (const solution of solutionsGroupList) {
		if (solution.checked)
			return true;
	}
	return false;
}

function checkSolutionDescription(solutionDescription) {
	const isChecked = otherSolution.checked;
	
	if (isChecked) {
		if (solutionDescription.length >= 20)
			return true;
		else
			return false;
	}
	return true;
}



// ---------- main validation functions ----------

function validateForm() {
	const formObj = {
		"full-name": checkName(fullName.value),
		"email": checkEmail(email.value),
		"order-no": checkOrderNo(orderNo.value),
		"product-code": checkProductCode(productCode.value),
		"quantity": checkQuantity(quantity.value),
		"complaints-group": checkComplaintsGroup(complaintsGroup),
		"complaint-description": checkComplaintDescription(complaintDescription.value),
		"solutions-group": checkSolutionsGroup(solutionsGroup),
		"solution-description": checkSolutionDescription(solutionDescription.value)
	}
	
	return formObj;
}

function isValid(formObj) {
	for (const key in formObj){
		if (!formObj[key])
			return false;
	}
	return true;
}


// ---------- helpers ----------

function checkOtherComplaintVisibility() {
	const complaintDescriptionContainer = document.getElementById("complaint-description-container");
	
	otherComplaint.checked ? complaintDescriptionContainer.classList.remove("hide") : complaintDescriptionContainer.classList.add("hide");
}

function checkOtherSolutionVisibility() {
	const otherSolutionContainer = document.getElementById("solution-description-container");
	
	otherSolution.checked ? otherSolutionContainer.classList.remove("hide") : otherSolutionContainer.classList.add("hide");
}

function changeColor(field, isCorrectlyFilled) {
	field.style.borderColor = isCorrectlyFilled ? "green" : "red";
}

function highlightInvalidFields(formObj) {
  const fieldMap = {
    "full-name": fullName,
    "email": email,
    "order-no": orderNo,
    "product-code": productCode,
    "quantity": quantity,
    "complaints-group": document.getElementById("complaints-group"),
    "complaint-description": complaintDescription,
    "solutions-group": document.getElementById("solutions-group"),
    "solution-description": solutionDescription
  };

  for (const key in formObj) {
    changeColor(fieldMap[key], formObj[key]);
  }
}


// ---------- Events ----------

form.addEventListener("change", (e) => {
	const field = e.target.id;
	const complaintGroupIdsList = ["damaged-product", "nonconforming-product", "layed-dispatch", "other-complaint"];
	const solutionsGroupIdsList = ["refund", "exchange", "other-solution"];

	if (field === "full-name") {
		changeColor(fullName, checkName(fullName.value));
	} else if (field === "email") {
		changeColor(email, checkEmail(email.value));
	} else if (field === "order-no") {
		changeColor(orderNo, checkOrderNo(orderNo.value));
	} else if (field === "product-code") {
		changeColor(productCode, checkProductCode(productCode.value));
	} else if (field === "quantity") {
		changeColor(quantity, checkQuantity(quantity.value));
	} else if (complaintGroupIdsList.includes(field)) {
		const complaintsGroupElm = document.getElementById("complaints-group");
		
		checkOtherComplaintVisibility();
		changeColor(complaintsGroupElm, checkComplaintsGroup(complaintsGroup));
	} else if (field === "complaint-description") {
		changeColor(complaintDescription, checkComplaintDescription(complaintDescription.value));
	} else if (solutionsGroupIdsList.includes(field)) {
		const solutionsGroupElm = document.getElementById("solutions-group");
		
		checkOtherSolutionVisibility();
		changeColor(solutionsGroupElm, checkSolutionsGroup(solutionsGroup));
	} else if (field === "solution-description") {
		changeColor(solutionDescription, checkSolutionDescription(solutionDescription.value));
	}
})

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const formObj = validateForm();
	console.log("hi: ", formObj["complaints-group"]);
	const invalidMsg = document.getElementById("invalid-message");
	if (isValid(formObj)) {
		invalidMsg.innerText = "";
		alert("form submitted successfully");
	} else {
		highlightInvalidFields(formObj);
		invalidMsg.innerText = `Please, fill out the required fields correctly before submitting.`;
	}
})
