declare global {
  /**
   * Global injected by the iframe-resizer script
   * https://github.com/davidjbradshaw/iframe-resizer
   */
  function iFrameResize(
    options?: {
      checkOrigin?: boolean
      log?: boolean
      autoResize?: boolean
      heightCalculationMethod?: string
      widthCalculationMethod?: string
    },
    target?: string | HTMLElement | HTMLElement[]
  ): void
}

export {}
