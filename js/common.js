const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  // search라는 div 태그를 click하면 input 요소에 focus하라는 의미
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색")
})

// focus <=> blur
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
})


// 올해 연도 추가하기
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();  // 2024 출력