
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SmoothScroll.css";

gsap.registerPlugin(ScrollTrigger);

function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.09,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    const updateScroll = (time) => {
      lenis.raf(time * 1000);
    };

    const handleScroll = () => {
      ScrollTrigger.update();
    };

    lenis.on("scroll", handleScroll);

    gsap.ticker.add(updateScroll);

    // Global reveal animations
    const revealElements = gsap.utils.toArray("[data-reveal]");

    revealElements.forEach((element) => {
      const direction = element.dataset.reveal;

      const positions = {
        up: { y: 45, x: 0 },
        down: { y: -45, x: 0 },
        left: { x: 45, y: 0 },
        right: { x: -45, y: 0 },
      };

      const initial = positions[direction] || positions.up;

      gsap.fromTo(
        element,
        {
          autoAlpha: 0,
          ...initial,
        },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        }
      );
    });

    // Refresh after the page has loaded
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(updateScroll);
      lenis.off("scroll", handleScroll);
      lenis.destroy();

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf(revealElements);
    };
  }, []);

  return null;
}

export default SmoothScroll;
