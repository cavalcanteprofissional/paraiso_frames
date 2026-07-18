import type { Variants } from 'framer-motion';

export const videoSpringVariants: Variants = {
  enter: {
    opacity: 0,
    scale: 1.15,
    filter: 'blur(10px)',
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      mass: 1,
      velocity: 2
    }
  },
  center: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 20,
      mass: 1,
      velocity: 2
    }
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    filter: 'blur(10px)',
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
      mass: 1,
      velocity: -2
    }
  }
};

export const sidebarSpringVariants: Variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
      mass: 0.8,
      restDelta: 0.001
    }
  },
  closed: {
    x: '100%',
    opacity: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
      mass: 0.8
    }
  }
};

export const containerVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      mass: 1
    }
  }
};

export const titleVariants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.9
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
      mass: 1,
      delay: 0.2
    }
  }
};

export const cardVariants: Variants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.9
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      mass: 1
    }
  },
  hover: {
    y: -5,
    scale: 1.02,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 25
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      type: 'spring',
      stiffness: 600,
      damping: 30
    }
  }
};

export const buttonVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 25
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      type: 'spring',
      stiffness: 600,
      damping: 30
    }
  }
};