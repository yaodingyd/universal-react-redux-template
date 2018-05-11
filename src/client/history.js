import { createBrowserHistory, createMemoryHistory } from 'history'
let history
if (typeof window !== 'undefined') {
  history = createBrowserHistory()
} else {
  history = createMemoryHistory()
}
export default history