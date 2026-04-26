export const UIService = {
  /**
   * Toggles body scroll based on navigation menu state.
   */
  setBodyScroll(isLocked: boolean): void {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isLocked ? 'hidden' : '';
    }
  }
};
