export const customTheme = {
  navbar: {
    button: 'px-3 py-2 text-white font-bold rounded',
    menu: 'absolute left-0 right-0 z-50 flex flex-col items-center gap-5 p-4  border borderaccent shadow-xl',
    links: 'text-sm rounded-lg px-4 py-3 w-full text-center font-semibold',
    cardBg: 'bg-rose-700',
    cardPadding: 'p-2',
  },

  primary: {
    bg: 'bgprimary',
    text: 'textprimary',
    border: 'borderprimary',
    padding: 'px-5 py-2 sm:px-7 sm:py-5',
    hover: {
      bg: 'bgbrandmid',
      text: 'textprimary',
    },
    card: {
      bg: 'bgprimary',
      padding: 'px-5 py-2 sm:px-7 sm:py-5',
      shadowColor: 'shadow-primary',
    },
    textBlock: {
      color: 'textprimary',
    },
    button: {
      bg: 'bgprimary',
      color: 'textprimary',
      padding: 'px-5 py-2 sm:px-7 sm:py-5',
      hover: 'bgbrandmid',
      shadowColor: 'shadow-primary',
    },
  },

  secondary: {
    bg: 'bglight',
    text: 'textlight',
    border: 'borderlight',
    padding: 'px-4 py-2 sm:px-6 sm:py-3',
    hover: {
      bg: 'bgprimary',
    },
    card: {
      bg: 'bglight',
      padding: 'px-4 py-2 sm:px-6 sm:py-3',
      shadowColor: 'shadow-primary',
    },
    textBlock: {
      color: 'textlight',
    },
    button: {
      bg: 'bglight',
      color: 'textlight',
      padding: 'px-4 py-2 sm:px-6 sm:py-3',
      hover: 'hover:bgprimary hover:textprimary',
      shadowColor: 'shadow-white',
    },
  },

  accent: {
    bg: 'bgaccent',
    text: 'textaccent',
    border: 'borderaccent',
    padding: 'px-4 py-2',
    card: {
      bg: 'bgaccent',
      padding: 'px-4 py-2',
      shadowColor: 'shadow-white',
    },
    textBlock: {
      color: 'textaccent',
    },
    hover: {
      bg: 'bgaccent',
    },
    button: {
      bg: 'bgaccent',
      color: 'textaccent',
      padding: 'px-4 py-2',
      hover: 'bgaccent',
      shadowColor: 'shadow-white',
    },
  },

  neutral: {
    bg: 'bglight',
    text: 'textlight',
    border: 'borderlight',
    padding: 'px-4 py-2',
    hover: {
      bg: 'bglight',
    },
    card: {
      bg: 'bglight',
      padding: 'px-4 py-2',
      shadowColor: 'shadow-white',
    },
    textBlock: {
      color: 'textlight',
    },
    button: {
      bg: 'bglight',
      color: 'textlight',
      padding: 'px-4 py-2',
      hover: 'bg-white',
      shadowColor: 'shadow-white',
    },
  },

  success: {
    bg: 'bg-emerald-300',
    text: 'text-white',
    border: 'border-emerald-500',
    padding: 'px-4 py-2',
    hover: 'hover:bg-emerald-500',
    card: {
      bg: 'bg-emerald-300',
      padding: 'px-4 py-2',
      shadowColor: 'shadow-white',
    },
    textBlock: {
      color: 'text-white',
    },
    button: {
      bg: 'bg-emerald-300',
      color: 'text-white',
      padding: 'px-4 py-2',
      hover: 'bg-emerald-500',
      shadowColor: 'shadow-white',
    },
  },

  warning: {
    bg: 'bgwarm',
    text: 'textwarm',
    border: 'borderwarm',
    padding: 'px-4 py-2',
    hover: {
      bg: 'bgwarm',
    },
    card: {
      bg: 'bgwarm',
      padding: 'px-4 py-2',
      shadowColor: 'shadow-white',
    },
    textBlock: {
      color: 'textwarm',
    },
    button: {
      bg: 'bgwarm',
      color: 'textwarm',
      padding: 'px-4 py-2',
      hover: 'bgwarm',
      shadowColor: 'shadow-white',
    },
  },

  danger: {
    bg: 'bgcta',
    text: 'textcta',
    border: 'bordercta',
    padding: 'px-4 py-2',
    hover: {
      bg: 'bgcta',
    },
    card: {
      bg: 'bgcta',
      padding: 'px-4 py-2',
      shadowColor: 'shadow-white',
    },
    textBlock: {
      color: 'textcta',
    },
    button: {
      bg: 'bgcta',
      color: 'textcta',
      padding: 'px-4 py-2',
      hover: 'bgcta',
      shadowColor: 'shadow-white',
    },
  },

  outline: {
    bg: 'bg-transparent',
    text: 'textprimary',
    border: 'borderprimary',
    padding: 'px-4 py-2',
    hover: {
      bg: 'bglight',
      text: 'textbrandmid',
    },
    card: {
      bg: 'bg-transparent',
      padding: 'px-4 py-2',
      shadowColor: 'shadow-white',
    },
    textBlock: {
      color: 'textprimary',
    },
    button: {
      bg: 'bg-transparent',
      color: 'textwarm',
      padding: 'px-4 py-2',
      hover: 'bglight',
      shadowColor: 'shadow-white',
    },
  },

  ghost: {
    bg: 'bg-transparent',
    text: 'textaccent',
    border: 'border-transparent',
    padding: 'px-2 py-1',
    hover: {
      bg: 'bgaccent',
    },
    card: {
      bg: 'bg-transparent',
      padding: 'px-2 py-1',
      shadowColor: 'shadow-white',
    },
    textBlock: {
      color: 'textaccent',
    },
    button: {
      bg: 'bg-transparent',
      color: 'textwarm',
      padding: 'px-2 py-1',
      hover: 'bgaccent',
      shadowColor: 'shadow-white',
    },
  },
};
