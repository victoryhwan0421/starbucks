// document 객체 = html
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input'); // html에서 찾아놓은 객체 중에서 요소 찾기
// .search .input보다 document를 searchEl로 바꾸어 쓰면 input만 써도 됨

// searchEl 클래스를 가지는 div 요소를 클릭하면 어떤 함수가 실행된다.
// 함수 내용: input내용에 focus하기
searchEl.addEventListener('click', function () {
    //Logic...
    searchInputEl.focus();
});

//
searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

//
searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

// Futter 년도 표시
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 현재 년도 