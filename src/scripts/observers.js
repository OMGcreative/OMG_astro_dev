/**
 * Intersection Observer for generic section visibility
 */
export const observeSections = () => {
    const sections = document.querySelectorAll("section, .section");

    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-in-view");
                } else {
                    entry.target.classList.remove("is-in-view");
                }
            });
        },
        {
            threshold: 0.15,
        }
    );

    sections.forEach((section) => sectionObserver.observe(section));
};

/**
 * Intersection Observer for scroll animations
 */
export const animateOnScroll = () => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        }
    );

    elements.forEach((el) => observer.observe(el));
};

/**
 * Video play/pause on scroll
 */
export const setupVideoObserver = () => {
    const videos = document.querySelectorAll(
        "video[data-autoplay], video[autoplay]"
    );

    const videoObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const video = entry.target;

                try {
                    if (entry.isIntersecting) {
                        const playPromise = video.play();
                        if (playPromise !== undefined) {
                            playPromise.catch((error) => {
                                // console.log("Auto-play was prevented:", error);
                            });
                        }
                        video.classList.add("is-playing");
                    } else {
                        video.pause();
                        video.classList.remove("is-playing");
                    }
                } catch (err) {
                    console.error("Video observer error:", err);
                }
            });
        },
        {
            threshold: 0.2,
        }
    );

    videos.forEach((video) => {
        if (video instanceof HTMLVideoElement) {
            video.muted = true;
            video.playsInline = true;
        }
        videoObserver.observe(video);
    });
};

/**
 * Initialize all observers
 */
export const initObservers = () => {
    observeSections();
    animateOnScroll();
    setupVideoObserver();
};

// Auto-initialize if script is loaded directly
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initObservers);
    } else {
        initObservers();
    }
}
