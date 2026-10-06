(function ($) {
    "use strict";
    var windowOn = $(window); 

    
    gsap.registerPlugin(ScrollTrigger);
    
  
    let mc = gsap.matchMedia();
                
    mc.add("(min-width: 1024px)", () => {
    
        if (document.querySelector(".about2-tab")) {
            // ScrollTrigger Animation
            let e = ".about2-tab__wrap";
            if (!window.its_desktop) e = ".about2-tab__left";
        
            const pinTarget = ".about2-tab"; // Updated to match your HTML
            window.aboutPinTime = 1500;
        
            let t = gsap.timeline({
                scrollTrigger: {
                    trigger: e,
                    start: "center center",
                    end: "+=" + window.aboutPinTime + "px",
                    pin: pinTarget,
                    pinSpacing: true,
                    scrub: 1,
                },
            });
        
            // General animations for the circles and line
            t.fromTo(".about2-tab__circle", { opacity: 0 }, { opacity: 1, duration: 0.01 }, 0)
                .fromTo(".about2-tab__circles", { rotate: -120 }, { rotate: 0, duration: 3 }, 0)
                .fromTo(".about2-tab__circle--circle1", { yPercent: 0 }, { yPercent: 0, duration: 3 }, 0)
                .fromTo(".about2-tab__circle--circle2", { yPercent: 0, xPercent: 0 }, { yPercent: 0, xPercent: 0, duration: 3 }, 0)
                .fromTo(".about2-tab__circle--circle3", { yPercent: 0, xPercent: 0 }, { yPercent: 0, xPercent: 0, duration: 3 }, 0)  
        
            // Rotation of the circles based on the scroll position
            gsap.to(".about2-tab__circles", {
                rotation: 360, // Full rotation
                scrollTrigger: {
                    trigger: ".about2-tab__wrap", // The container where the scroll effect is happening
                    start: "top bottom",  // Start the rotation when the top of the section hits the bottom of the viewport
                    end: "bottom top",    // End when the bottom of the section hits the top of the viewport
                    scrub: 1,             // Synchronize with scroll
                }
            });
        
            // Optional animation for desktop
            if (window.its_desktop) {
                t.fromTo(
                    ".about2-tab__left",
                    { x: "50%", background: "red" },
                    { x: "0%", duration: 1, delay: 1.25, background: "green" },
                    1
                );
            }
        
            // Magnet Hover Effect (unchanged)
            const initMagnetHover = () => {
                const magnets = document.querySelectorAll(".magnet-wrap");
        
                if (window.innerWidth > 1024) {
                    magnets.forEach((wrap) => {
                        const area = wrap.querySelector(".magnet-area");
                        const element = wrap.querySelector(".magnet-element");
                        const cov = parseFloat(wrap.getAttribute("data-cov")) || 4;
        
                        if (area && element) {
                            area.addEventListener("mousemove", (e) => {
                                const bounds = area.getBoundingClientRect();
                                const x = e.clientX - bounds.left - bounds.width / 2;
                                const y = e.clientY - bounds.top - bounds.height / 2;
        
                                gsap.to(element, {
                                    x: x / cov,
                                    y: y / cov,
                                    duration: 0.4,
                                    ease: "power2.out",
                                });
                            });
        
                            area.addEventListener("mouseleave", () => {
                                gsap.to(element, {
                                    x: 0,
                                    y: 0,
                                    duration: 0.7,
                                    ease: "power3.out",
                                });
                            });
                        }
                    });
                }
            };
        
            initMagnetHover(); // Run after everything is set up
        }
    
    });


})(jQuery);