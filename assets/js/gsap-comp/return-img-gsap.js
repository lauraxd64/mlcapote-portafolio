(function ($) {
    "use strict";
    var windowOn = $(window);


    //return img gsap 
    gsap.registerPlugin(ScrollTrigger);

    // Animate elements with class .return
    document.querySelectorAll(".return").forEach((container) => {
      let content = container.firstElementChild;
      if (!content) return;
  
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "restart none none reset",
        },
      });
  
      tl.set(container, { autoAlpha: 1 });
      tl.from(container, 1.5, {
        xPercent: -100,
        ease: Power2.out,
      });
      tl.from(content, 1.5, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: Power2.out,
      });
    });
  
    // Animate elements with class .return-2
    document.querySelectorAll(".return-2").forEach((container) => {
      let content = container.firstElementChild;
      if (!content) return;
  
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "restart none none reset",
        },
      });
  
      tl.set(container, { autoAlpha: 1 });
      tl.from(container, 1.5, {
        xPercent: 100,
        ease: Power2.out,
      });
      tl.from(content, 1.5, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: Power2.out,
      });
    });


    document.querySelectorAll(".img_anim_reveal").forEach(e => {
        let t = e.querySelector("img"),
            o = gsap.timeline({
                scrollTrigger: {
                    trigger: e,
                    start: "top 70%"
                }
            });
        o.set(e, {
            autoAlpha: 1
        }), o.from(e, 1.5, {
            xPercent: -200,
            ease: Power2.out
        }), o.from(t, 1.5, {
            xPercent: 100,
            scale: 1.3,
            delay: -1.5,
            ease: Power2.out
        })
    });

    document.querySelectorAll(".img_anim_reveal-2").forEach(e => {
        let t = e.querySelector("img"),
            o = gsap.timeline({
                scrollTrigger: {
                    trigger: e,
                    start: "top 70%"
                }
            });
        o.set(e, {
            autoAlpha: 1
        }), o.from(e, 1.5, {
            xPercent: 220,
            ease: Power2.out
        }), o.from(t, 1.5, {
            xPercent: 100,
            scale: 1.2,
            delay: -1.5,
            ease: Power2.out
        })
    });

 
 
    

})(jQuery);