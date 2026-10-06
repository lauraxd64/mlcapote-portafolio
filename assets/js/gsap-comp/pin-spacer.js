(function ($) {
    "use strict";
    var windowOn = $(window);

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);
    
    let mm = gsap.matchMedia();
                
    mm.add("(min-width: 1024px)", () => {
    
        var pin_list = document.querySelectorAll(".section-item")
        pin_list.forEach((item) => {
            console.log(item)
            gsap.to(item, {
                scrollTrigger: {
                    trigger: item,
                    markers: false,
                    pin: true,
                    pinSpacing: false,
                    start: "bottom bottom",
                    end: "bottom -=500"
                },
            });
        })
    
    });
    
    
    
})(jQuery);