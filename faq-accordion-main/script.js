const faqContainer = document.getElementsByClassName("faq-dropdown");
console.log(faqContainer);

for (let i = 0; i < faqContainer.length; i++) {
  const element = faqContainer[i];
  element.addEventListener("click", (e) => {
    const elem = element;
    const body = elem.querySelector(".faq-dropdown-body");
    const icon = elem.querySelector(".faq-icon");
    body.classList.toggle("open");
    icon.classList.toggle("open");
  });
}