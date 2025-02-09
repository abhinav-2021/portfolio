
  document.addEventListener("DOMContentLoaded", function () {
    // Fade-in animation for hero section
    gsap.from(".hero-content h1", { opacity: 0, y: 50, duration: 1, ease: "power2.out" });
    gsap.from(".hero-content h2", { opacity: 0, y: 30, duration: 1.2, delay: 0.5, ease: "power2.out" });
    gsap.from(".hero-content p", { opacity: 0, y: 20, duration: 1.4, delay: 0.8, ease: "power2.out" });

    // Profile image scaling effect
    gsap.from(".profile-image img", { scale: 0, duration: 1.5, ease: "elastic.out(1, 0.5)" });

    // Staggered fade-in effect for social links
    gsap.from(".social-links", {
      opacity: 0,
      y: 10,
      stagger: 0.2,
      duration: 1,
      delay: 1,
      ease: "power2.out"
    });

    // Button animations
    gsap.from(".cta-buttons", {
      opacity: 0,
      y: -10,
      stagger: 0.2,
      duration: 1.2,
      delay: 1.2,
      ease: "power2.out"
    });

    // Navbar animation when scrolling
    gsap.from("nav", { y: -80, opacity: 0, duration: 1, ease: "power2.out" });

    // Navigation links slide-in
    gsap.from(".nav-links a", {
      opacity: 0,
      y: -10,
      stagger: 0.2,
      duration: 1.5,
      delay: 0.5,
      ease: "power2.out"
    });

    // Scroll-triggered animations
    gsap.utils.toArray("section").forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    });

    
    });

 