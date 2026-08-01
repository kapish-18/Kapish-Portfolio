/* ─────────────────────────────────────────
   ANIME.JS EFFECTS — Reusable Utilities
   ───────────────────────────────────────── */
import anime from 'animejs/lib/anime.es.js';
import { useEffect, useRef, useCallback } from 'react';

/**
 * Scroll-triggered fade-up reveal.
 * Attach the returned ref to any element.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'none';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          anime({
            targets: el,
            translateY: [30, 0],
            opacity: [0, 1],
            duration: options.duration || 800,
            easing: options.easing || 'easeOutCubic',
            delay: options.delay || 0,
          });
          observer.unobserve(el);
        }
      },
      { threshold: options.threshold || 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * Stagger-reveal children of a container on scroll.
 * Returns a ref to attach to the parent container.
 */
export function useStaggerReveal(options = {}) {
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.children;
    if (!children.length) return;

    Array.from(children).forEach((child) => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(25px)';
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          anime({
            targets: Array.from(children),
            translateY: [25, 0],
            opacity: [0, 1],
            duration: options.duration || 600,
            easing: options.easing || 'easeOutCubic',
            delay: anime.stagger(options.stagger || 80, { start: options.startDelay || 0 }),
          });
          observer.unobserve(el);
        }
      },
      { threshold: options.threshold || 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * Animate a numeric counter from 0 to target value.
 */
export function animateCounter(element, targetValue, duration = 2000) {
  if (!element) return;
  const numericTarget = parseInt(targetValue.replace(/[^0-9]/g, ''), 10);
  if (isNaN(numericTarget)) {
    element.textContent = targetValue;
    return;
  }

  const obj = { value: 0 };
  anime({
    targets: obj,
    value: numericTarget,
    duration,
    easing: 'easeOutExpo',
    round: 1,
    update: () => {
      const suffix = targetValue.replace(/[0-9,]/g, '');
      element.textContent = obj.value.toLocaleString() + suffix;
    },
  });
}

/**
 * Hero text reveal animation.
 */
export function heroTextReveal(element, delay = 0) {
  if (!element) return;
  return anime({
    targets: element,
    translateY: [40, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutExpo',
    delay,
  });
}

/**
 * Pulse glow animation on an element.
 */
export function glowPulse(element) {
  if (!element) return;
  return anime({
    targets: element,
    boxShadow: [
      '0 0 0px rgba(99, 102, 241, 0)',
      '0 0 25px rgba(99, 102, 241, 0.3)',
      '0 0 0px rgba(99, 102, 241, 0)',
    ],
    duration: 2500,
    easing: 'easeInOutSine',
    loop: true,
  });
}

/**
 * Terminal typing effect — returns a Promise.
 */
export function typeText(element, text, speed = 40) {
  return new Promise((resolve) => {
    if (!element) { resolve(); return; }
    let i = 0;
    element.textContent = '';
    const interval = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
}
