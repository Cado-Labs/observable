import { useSyncExternalStore } from "react"

const useStore = (store, { map } = {}) => {
  const state = useSyncExternalStore(store.subscribe, store.getState)
  return map ? map(state) : state
}

export default useStore
