import ReactDOM from 'react-dom/client'
import './index.css'
import Pokedex from './components/Pokedex'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
const Index = () => {
  return (
    <Pokedex />
  )
}
root.render(<Index/>)
