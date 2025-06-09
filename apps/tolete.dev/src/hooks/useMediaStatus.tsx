import { useSyncExternalStore } from 'react'

//create the same above but for window.matchMedia
export const mediaStore = {
  getSnapshot: () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  },
  subscribe: (callback: () => void) => {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')

    const checkStatus = (event: MediaQueryListEvent) => {
      if (event.matches !== mediaStore.getSnapshot()) {
        callback()
      }
    }

    mediaQueryList.addEventListener('change', checkStatus)

    return () => {
      mediaQueryList.removeEventListener('change', checkStatus)
    }
  },
  getServerSnapshot: () => {
    return false
  }
}
export function useMediaStatus(): boolean {
  return useSyncExternalStore(
    mediaStore.subscribe,
    mediaStore.getSnapshot,
    mediaStore.getServerSnapshot
  )
}
