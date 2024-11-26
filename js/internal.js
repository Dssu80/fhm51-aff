
$(document).ready(function () {


  $(".rule_btn").click(function () {
    $(".rule").addClass("active");
  });
  
  $(".rule2_btn").click(function () {
    $(".rule2").addClass("active");
  });

  $(".send_btn").click(function () {
    $(".send-box").addClass("active");
  });

  $(".md-close,.md .md-overlay").click(function () {
    $(".md").removeClass("active");
  });


  //gotop
  $('.gotop').click(function () {
    $('html,body').animate({ scrollTop: '0px' }, 800);
  });


  $(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
      $(".gotop").fadeIn();
      $("#main-header").addClass("scrolled")
    } else {
      $(".gotop").fadeOut();
      $("#main-header").removeClass("scrolled")
    }
  });




  $(".menu_button,header .md-overlay,.menu_mob a").click(function () {
    $("header").toggleClass("active");
    $(".menu_mob").slideToggle();
  });


  $(".m_a").click(function () {
    $("html,body").animate({ scrollTop: $(".about-us").offset().top - 100 }, 800);
  });

  $(".m_b").click(function () {
    $("html,body").animate({ scrollTop: $(".commissions").offset().top - 100}, 800);
  });

  $(".m_c").click(function () {
    $("html,body").animate({ scrollTop: $(".com-container").offset().top - 100 }, 800);
  });

  $(".m_d").click(function () {
    $("html,body").animate({ scrollTop: $(".contact").offset().top - 100 }, 800);
  });
  $(".m_e").click(function () {
    $("html,body").animate({ scrollTop: $(".faq").offset().top - 100 }, 800);
  });


  // $('.ranking_tab li').click(function (e) {
  //   var $tabIndex = $(this).index();
  //   $(this).addClass('active').siblings(".ranking_tab li").removeClass('active');
  //   $('.ranking_table').eq($tabIndex).fadeIn().siblings(".ranking_table").hide();
  // });


  var swiper = new Swiper('.swiper-container', {
    //Pagination
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    //Arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
    },
    loop: 30,
  });




  $(window).on('scroll', function () {
    scrollTop = $(window).scrollTop();
    if (scrollTop > 300) {
      $('.cm').stop().animate({ 'top': scrollTop + 300 + 'px' }, 400);
    } else {
      $('.cm').stop().animate({ 'top': '300px' }, 400);
    }
  });


// faq
  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;

      // Close any other open items
      document.querySelectorAll('.accordion-content').forEach(item => {
        if (item !== content) {
          item.style.display = 'none';
          item.previousElementSibling.classList.remove('active');
        }
      });

      // Toggle the current item's content
      if (content.style.display === 'block') {
        content.style.display = 'none';
        header.classList.remove('active');
      } else {
        content.style.display = 'block';
        header.classList.add('active');
      }
    });
  });


  var $li = $('.menu li a');

  $li.click(function () {	
  

    event.preventDefault();
    $(this).addClass('active').parents().siblings().find('.active').removeClass('active');
  });




});

