const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// window 객체는 우리가 보는 화면 자체
// 300: 단위: 밀리초, 1000 = 1초, 300 = 0.3초
// 함수를 0.3초
// _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500)
    {
        // 배지 숨기기
        // badgeEl.style.display = 'none';

        // gsap.to(요소, 지속시간(초), 옵션);
        gsap.to(badgeEl, 0.6, {
            opacity: 0,
            display: 'none'
        });
        // 버튼 보이기
        gsap.to(toTopEl, .2, {
            x: 0 // 원래 위치로
        });
    }
    else
    {
        // 배지 보이기
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl, 0.6, {
            opacity: 1,
            display: 'block'
        });
        // 버튼 숨기기
        gsap.to(toTopEl, .2, {
            x: 100 // 오른쪽으로 100px 이동
        });
    }
}, 300));


toTopEl.addEventListener('click', function () {
    gsap.to(window, .7, {
        scrollTo: 0, // 0.7초 동안 화면의 위치를 0px로 이동
    });
});


// index는 0부터
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEls, index) {
    //gsap.to(요소, 지속시간(초), 옵션);
    gsap.to(fadeEls, 1, {
        delay: (index+1)*.7, // 0.7, 1.4, 2.1, 2.7
        opacity: 1
    });
});

// new Swiper(css선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true, // 자동으로 슬라이드 재생
    loop: true // 반복 여부
});

new Swiper('.promotion .swiper-container', {
    direction: 'horizontal', // horizontal이 기본 값이므로 생략 가능
    slidesPerView: 3, // 한번에 보여줄 슬라이드 갯수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드 가운데 보이기
    loop: true,
    autoplay: {
        delay: 5000 // 5초
    },

    pagination: {
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true    // 사용자의 페이지 번호 요소 제어 가능 여부
    },

    navigation: {
        prevEl: '.promotion .swiper-prev',  // 이전 슬라이드 보는 버튼
        nextEl: '.promotion, .swiper-next'  // 다음 슬라이드 보는 버튼
    }
});

new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion // 클릭 시 반대값으로 전환하여 반환
    if (isHidePromotion) {
        // 숨김 처리!
        promotionEl.classList.add('hide');
    } else {
        // 보임 처리!
        promotionEl.classList.remove('hide');
    }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject(selector, delay, size) {
    gsap.to(
        selector, // 선택자
        random(1.5, 2.5), // 애니메이션 동작 시간
        {   // 옵션
        y: size, //y축으로 얼마만큼 움직이면서 애니메이션 재생할 것인지
        repeat: -1, // 무한 반복
        yoyo: true, // 움직인 만큼 돌아감
        ease: Power1.easeInOut,
        delay: random(0, delay)
        }
    );
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
            triggerHook: .8        // 뷰포트 0~1사이에서 0.8에 걸릴 때 setClassToggle 실행
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller()); //
});