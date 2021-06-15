
gsap.to(".box_a",{ // 動かす要素
    scrollTrigger: {
        trigger: ".main_nav", // この要素まできたらアニメーション開始
        start: "top center", // ビューポートの設定
        stagger: 10000,
        delay:15000,
     //   markers: true // 検証用のマーカーを表示
    },
    left: "0px",
    top: "-70px",
    rotation: 0,
    width:"3000px",
    duration: 3,
    easing:"ease-in-out"
  });
$(function(){
  $('.about_top_yajirusi_ue').click(function(){
    $('.about_top').addClass('about_top_click')
    $('.about_top_click_naiyo').animate({opacity : 1}, 300);
    $('.about_top').css('z-index', '100');
    $('.about_top_yajirusi_ue').animate({opacity : 0}, 10);
    $('.about_top_yajirusi_sita').animate({opacity : 1}, 300);
    $('body').css('background-color', '#c2b9a6');
  })
  $('.about_top_yajirusi_sita').click(function(){
    $('.about_top').removeClass('about_top_click')   
    $('.about_top_click_naiyo').animate({opacity : 0}, 10);
    $('.about_top_yajirusi_ue').animate({opacity : 1}, 300);
    $('.about_top_yajirusi_sita').animate({opacity : 0}, 10);
    $('.about_top').delay(300).css('z-index', '0');
    $('body').css('background-color', '#f0e8d8');
  })
})

