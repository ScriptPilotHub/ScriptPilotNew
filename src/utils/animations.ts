export const animationConfig = {
  timing: {
    micro: 0.2,
    reveal: 0.4,
    complex: 0.6,
  },
  easing: {
    entrance: [0.25, 0.1, 0.25, 1],
    exit: [0.4, 0, 1, 1],
    movement: [0.4, 0, 0.2, 1],
  },
  distance: {
    slide: 50,
    lift: 10,
  },
  stagger: 0.08,
};

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: animationConfig.timing.reveal, ease: animationConfig.easing.entrance },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: animationConfig.timing.reveal },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: animationConfig.timing.reveal, ease: animationConfig.easing.entrance },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: animationConfig.timing.reveal, ease: animationConfig.easing.entrance },
};
