

(function ($) {
  "use strict";

  $(document).ready(function () {


    /*---------- Mobile Menu  ----------*/
    $.fn.globalmobilemenu = function (options) {
      var opt = $.extend(
        {
          menuToggleBtn: ".global-menu-toggle",
          bodyToggleClass: "global-body-visible",
          subMenuClass: "global-submenu",
          subMenuParent: "menu-item-has-children",
          globalSubMenuParent: "menu-item-has-children",
          subMenuParentToggle: "global-active",
          meanExpandClass: "global-mean-expand",
          appendElement: '<span class="global-mean-expand"></span>',
          subMenuToggleClass: "global-open",
          toggleSpeed: 400,
        },
        options
      );

      return this.each(function () {
        var menu = $(this); // Select menu

        // Menu Show & Hide
        function menuToggle() {
          menu.toggleClass(opt.bodyToggleClass);

          // collapse submenu on menu hide or show
          var subMenu = "." + opt.subMenuClass;
          $(subMenu).each(function () {
            if ($(this).hasClass(opt.subMenuToggleClass)) {
              $(this).removeClass(opt.subMenuToggleClass);
              $(this).css("display", "none");
              $(this).parent().removeClass(opt.subMenuParentToggle);
            }
          });
        }

        // Class Set Up for every submenu
        menu.find("." + opt.subMenuParent).each(function () {
          var submenu = $(this).find("ul");
          submenu.addClass(opt.subMenuClass);
          submenu.css("display", "none");
          $(this).addClass(opt.subMenuParent);
          $(this).addClass(opt.globalSubMenuParent); // Add menu-item-has-children class
          $(this).children("a").append(opt.appendElement);
        });

        // Toggle Submenu
        function toggleDropDown($element) {
          var submenu = $element.children("ul");
          if (submenu.length > 0) {
            $element.toggleClass(opt.subMenuParentToggle);
            submenu.slideToggle(opt.toggleSpeed);
            submenu.toggleClass(opt.subMenuToggleClass);
          }
        }

        // Submenu toggle Button
        var itemHasChildren = "." + opt.globalSubMenuParent + " > a";
        $(itemHasChildren).each(function () {
          $(this).on("click", function (e) {
            e.preventDefault();
            toggleDropDown($(this).parent());
          });
        });

        // Menu Show & Hide On Toggle Btn click
        $(opt.menuToggleBtn).each(function () {
          $(this).on("click", function () {
            menuToggle();
          });
        });

        // Hide Menu On outside click
        menu.on("click", function (e) {
          e.stopPropagation();
          menuToggle();
        });


        // Stop Hide full menu on menu click
        menu.on("click", function (e) {
          e.stopPropagation();
        });

        // Prevent submenu from hiding when clicking inside the menu
        menu.find("div").on("click", function (e) {
          e.stopPropagation();
        });
      });
    };

    $(".global-menu-wrapper").globalmobilemenu();



    /*---------- Sticky fix ----------*/
    $(window).scroll(function () {
      var topPos = $(this).scrollTop();
      if (topPos > 10) {
        $('.sticky-wrapper').addClass('sticky');
        $('.category-menu').addClass('close-category');
      } else {
        $('.sticky-wrapper').removeClass('sticky')
        $('.category-menu').removeClass('close-category');
      }
    })

    $(window).scroll(function () {
      var topPos = $(this).scrollTop();
      if (topPos > 10) {
        $('.sticky-wrapper2').addClass('sticky');
        $('.category-menu').addClass('close-category');
      } else {
        $('.sticky-wrapper2').removeClass('sticky')
        $('.category-menu').removeClass('close-category');
      }
    })

    // After
    $('.menu-expand').on('click', function (e) {
      e.preventDefault();
      $('.category-menu').toggleClass('open-category');
    });



    /*---------- Popup Sidemenu ----------*/
    function popupSideMenu($sideMenu, $sideMunuOpen, $sideMenuCls, $toggleCls) {

      $($sideMunuOpen).on('click', function (e) {
        e.preventDefault();
        $($sideMenu).addClass($toggleCls);
      });
      $($sideMenu).on('click', function (e) {
        e.stopPropagation();
        $($sideMenu).removeClass($toggleCls)
      });
      var sideMenuChild = $sideMenu + ' > div';
      $(sideMenuChild).on('click', function (e) {
        e.stopPropagation();
        $($sideMenu).addClass($toggleCls)
      });

      $($sideMenuCls).on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $($sideMenu).removeClass($toggleCls);
      });
    };


    popupSideMenu('.sidemenu-cart', '.sideMenuToggler', '.sideMenuCls', 'show');
    popupSideMenu('.sidemenu-info', '.sideMenuInfo', '.sideMenuCls', 'show');


    /*-----------------------------------
           Wow Animation 
        -----------------------------------*/
    new WOW().init();


    /*-----------------------------------
           Set Background Image & Mask   
        -----------------------------------*/
    if ($("[data-bg-src]").length > 0) {
      $("[data-bg-src]").each(function () {
        var src = $(this).attr("data-bg-src");
        $(this).css("background-image", "url(" + src + ")");
        $(this).removeAttr("data-bg-src").addClass("background-image");
      });
    }

    if ($("[data-mask-src]").length > 0) {
      $("[data-mask-src]").each(function () {
        var mask = $(this).attr("data-mask-src");
        $(this).css({
          "mask-image": "url(" + mask + ")",
          "-webkit-mask-image": "url(" + mask + ")",
        });
        $(this).addClass("bg-mask");
        $(this).removeAttr("data-mask-src");
      });
    }


    /*-----------------------------------
           Back to top    
        -----------------------------------*/
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 20) {
        $("#back-top").addClass("show");
      } else {
        $("#back-top").removeClass("show");
      }
    });

    $(document).on("click", "#back-top", function () {
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });



    /*-----------------------------------
            MagnificPopup  view    
    -----------------------------------*/
    $(".popup-video").magnificPopup({
      type: "iframe",
      removalDelay: 260,
      mainClass: "mfp-zoom-in",
    });

    $(".img-popup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });



    /*-----------------------------------
             NiceSelect     
    -----------------------------------*/
    if ($(".single-select").length) {
      $(".single-select").niceSelect();
    }


    /*---------- Popup Sidemenu ----------*/
    function popupSideMenu($sideMenu, $sideMunuOpen, $sideMenuCls, $toggleCls) {
      // Sidebar Popup
      $($sideMunuOpen).on('click', function (e) {
        e.preventDefault();
        $($sideMenu).addClass($toggleCls);
      });
      $($sideMenu).on('click', function (e) {
        e.stopPropagation();
        $($sideMenu).removeClass($toggleCls)
      });
      var sideMenuChild = $sideMenu + ' > div';
      $(sideMenuChild).on('click', function (e) {
        e.stopPropagation();
        $($sideMenu).addClass($toggleCls)
      });
      $($sideMenuCls).on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $($sideMenu).removeClass($toggleCls);
      });
    };
    popupSideMenu('.sidemenu-cart', '.sideMenuToggler', '.sideMenuCls', 'show');
    popupSideMenu('.sidemenu-info', '.sideMenuInfo', '.sideMenuCls', 'show');


    /*-----------------------------------
           Mouse Cursor    
    -----------------------------------*/
    function mousecursor() {
      if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
          t = document.querySelector(".cursor-outer");
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          $("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover");
            t.classList.add("cursor-hover");
          }),
          $("body").on("mouseleave", "a, .cursor-pointer", function () {
            ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
              (e.classList.remove("cursor-hover"),
                t.classList.remove("cursor-hover"));
          }),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }
    $(function () {
      mousecursor();
    });



    /*-----------------------------------
          Text Splitting
    -----------------------------------*/
    Splitting();



    // Service Slider
    var swiper = new Swiper('.service1-slider', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 60,
      autoplay: true,
      loop: false,
    });



    // Brand Slider
    var swiper = new Swiper('.brand1-slider', {
      loop: true,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      on: {
        init: function () {
          updateSlideClasses();
        },
        slideChangeTransitionStart: function () {
          updateSlideClasses();
        }
      },
      breakpoints: {
        // Small devices (up to 576px)
        0: {
          slidesPerView: 1,
        },
        // Medium devices (576px and up)
        576: {
          slidesPerView: 2,
        },
        // Large devices (768px and up)
        768: {
          slidesPerView: 3,
        },
        // Extra large devices (992px and up)
        992: {
          slidesPerView: 4,
        },
        // XXL devices (1200px and up)
        1200: {
          slidesPerView: 5,
        },
        // Ultra large screens (1400px and up)
        1400: {
          slidesPerView: 6,
        }
      }
    });

    // Function to add 'odd' and 'even' classes based on slide index
    function updateSlideClasses() {
      document.querySelectorAll('.swiper-slide').forEach((slide, index) => {
        slide.classList.remove('odd', 'even');
        if (index % 2 === 0) {
          slide.classList.add('even');
        } else {
          slide.classList.add('odd');
        }
      });
    }

    // Brand Slider
    var swiper = new Swiper('.brand2-slider', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: true,

      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 40,
        },
      },
    });

    // Testimonial Slider
    var swiper = new Swiper('.testimonial1-slider', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.testimonial1-card-controls__arrowRight',
        prevEl: '.testimonial1-card-controls__arrowLeft',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
    });


    // Blog Slider
    var swiper = new Swiper('.blog1-slider', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.element-controls__arrowRight',
        prevEl: '.element-controls__arrowLeft',
      },
    });


    // wprocess-slider
    var swiper = new Swiper('.wprocess-slider', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
      },

      navigation: {
        nextEl: '.element-controls__arrowRight',
        prevEl: '.element-controls__arrowLeft',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },

    });



    /*-----------------------------------
    Img TO Svg Convert
-----------------------------------*/

    // Convert All Image to SVG
    $("img.svg").each(function () {
      var $img = $(this),
        imgID = $img.attr("id"),
        imgClass = $img.attr("class"),
        imgURL = $img.attr("src");

      $.get(
        imgURL,
        function (data) {
          var $svg = $(data).find("svg");
          if (typeof imgID !== "undefined") {
            $svg = $svg.attr("id", imgID);
          }
          if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass);
          }
          $svg = $svg.removeAttr("xmlns:a");
          $img.replaceWith($svg);
        },
        "xml"
      );
    });



    // Testimonial Hover Js 
    const getSlide =
      $(".testimonial2-cards, .testimonial2-card").length - 1;
    const slideCal = 100 / getSlide + "%";

    $(".testimonial2-card").css({
      width: slideCal,
    });

    $(".testimonial2-card").on("mouseenter mouseleave", function (event) {
      if (event.type === "mouseenter") {
        $(".testimonial2-card").removeClass("active");
        $(this).addClass("active");
      }
    });




    // Gsap
    swiper = new Swiper(".heading-slide__active", {
      slidesPerView: 'auto',
      spaceBetween: 30,
      centeredSlides: true,
      speed: 8000,
      loop: true,
      freeMode: true,
      autoplay: {
        delay: 0.9,
        reverseDirection: false,
        disableOnInteraction: false
      }
    });

    //GSAP smooth animation
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

    if ($('#smooth-wrapper').length && $('#smooth-content').length) {

      gsap.config({
        nullTargetWarn: false,
      });

      let smoother = ScrollSmoother.create({
        smooth: 2,
        effects: true,
        smoothTouch: false,
        normalizeScroll: false,
        ignoreMobileResize: true,
      });
    }
 


}); // End Document Ready Function




document.addEventListener('DOMContentLoaded', function () {
  const preloader = document.getElementById('preloader');
  const progress = document.getElementById('progress');
  const loadingText = document.querySelector('.loading-text');

  // Simulate loading progress
  let width = 0;
  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
      loadingText.textContent = "READY";

      setTimeout(() => {
        // Hide preloader with transform
        preloader.classList.add('preloader-done'); 

        // Remove preloader after animation
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 800);
      }, 600);
    } else {
      width += Math.floor(Math.random() * 5) + 1;
      width = Math.min(width, 100);
      progress.style.width = width + '%';

      if (width > 80) {
        loadingText.textContent = "ALMOST THERE";
      } else if (width > 50) {
        loadingText.textContent = "LOADING ASSETS";
      }
    }
  }, 100);
});

// Alternative: use load event for real loading progress
window.addEventListener('load', function () { 
});



}) (jQuery); // End jQuery


