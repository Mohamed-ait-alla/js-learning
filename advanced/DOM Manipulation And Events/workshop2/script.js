/*
 * Workshop: Build an Emoji Reactor
 */


function updateCount(btn) {
  const countEl = btn.querySelector(".count");
  let currCount = +countEl.textContent.split("/")[0];
  
  if (currCount === 10) return;
  
  currCount++;
  
  countEl.textContent = `${currCount}/10`;
}

function setUpEvent(btn) {
  btn.addEventListener("click", () => updateCount(btn));
}

const btns = document.querySelectorAll(".emoji-btn");
btns.forEach(btn => setUpEvent(btn));