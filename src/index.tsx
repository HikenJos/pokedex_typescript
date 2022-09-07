import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
const Index = () => {
  return (
    <App/>
  )
}
root.render(<Index/>)
