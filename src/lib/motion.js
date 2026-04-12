export const viewportOnce = { once: true, amount: 0.2 }

export const easing = [0.22, 1, 0.36, 1]

export function getRevealProps(reduceMotion, options = {}) {
  const {
    delay = 0,
    duration = 0.9,
    y = 12,
    amount = 0.2,
    animateY = true,
  } = options

  if (reduceMotion) {
    return {
      initial: false,
      whileInView: undefined,
      animate: undefined,
      transition: { duration: 0 },
      viewport: undefined,
    }
  }

  return {
    initial: { opacity: 0, y: animateY ? y : 0 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration, delay, ease: easing },
    viewport: { once: true, amount },
  }
}

export function getHeroProps(reduceMotion, options = {}) {
  const { delay = 0, duration = 0.95, y = 14, animateY = true } = options

  if (reduceMotion) {
    return {
      initial: false,
      animate: undefined,
      transition: { duration: 0 },
    }
  }

  return {
    initial: { opacity: 0, y: animateY ? y : 0 },
    animate: { opacity: 1, y: 0 },
    transition: { duration, delay, ease: easing },
  }
}

export function getFadeBlurProps(reduceMotion, options = {}) {
  const { delay = 0, duration = 0.75 } = options

  if (reduceMotion) {
    return {
      initial: false,
      animate: undefined,
      transition: { duration: 0 },
    }
  }

  return {
    initial: { opacity: 0, filter: 'blur(8px)' },
    animate: { opacity: 1, filter: 'blur(0px)' },
    transition: { duration, delay, ease: easing },
  }
}
