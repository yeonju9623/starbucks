const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// window -> 우리에게 보이는 하나의 윈도우 창을 의미
// 300: 0.3s
// 함수를 0.3s 부하를 줘서 함수가 엄청나게 실행되는 것을 조금 줄여줌
// _.throttle(함수, 시간(ms))
window.addEventListener("scroll", _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소 지속시간(s), 옵션);
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      // 실제로 요소가 제거되기 하기 위함
      display: 'none'
    });

    // to-top 버튼 보이게 하기
    gsap.to(toTopEl, 0.2, {
      x: 0
    });

  } else {
    // 배지 보여주기
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });

    // to-top 버튼 사라지게 하기
    gsap.to(toTopEl, 0.2, {
      x: 100
    });
  }
}, 300));



// 버튼 선택 시 최상단으로 이동
toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.7, {
    // scrollTo: 스크롤 화면의 위치를 opx 지점으로 이동
    scrollTo: 0
  })
})



// visual - img 서서히 순차적으로 나타나게 하기
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    // 1을 더하는 이유: 인덱스 0은 0*0.7하면 0이니까 delay 기능이 없기 때문
    delay: (index + 1) * 0.7,
    opacity: 1
  });
});



// 공지사항 -> swiper 기능 사용
// new: 자바스크립트 swiper생성자를 의미
// new swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  // 반복재생 여부
  loop: true
});


new Swiper('.promotion .swiper', {
  // default: 'horizontal'
  // direction: 'horizontal',
  slidesPerView: 3,  // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10,  // 슬라이드 사이 여백(px)
  centeredSlides: true,  // 1번 슬라이트가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',  // 페이지 번호 요소 선택자
    clickable: true  // 사용자의 페이지 번호 요소 제어 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});


// awards section swiper
new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


// promotion toggle btn
const promotionEl = document.querySelector('.notice .promotion');
const promotionToggleBtn = document.querySelector('.notice .toggle-promotion');
let isHidePromotion = false;  // 현재 보임
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김처리
    // hide 클래스 추가
    promotionEl.classList.add('hide');
  } else {
    // false => 보임처리
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

// icon 떠다니는 효과
function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,  // repeat: -1 => 무한반복
    yoyo: true,  // 위에서 아래로 내려오면 다시 올라가는 것
    // ease-in-out
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);


// scroll 애니메이션
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      // 감시하고 있는 섹션 옵션 지정
      // 보여짐 여부를 감시할 요소를 지정
      triggerElement: spyEl,
      triggerHook: 0.8  // 뷰포트 기준(0~1) 0.8에 훅이 걸려져 있어 보여짐 여부가 걸려 있는 것임
    })
    // 지정한 클래스('section.scroll-spy')가 화면 0.8이 지나는 순간 show 추가
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});
