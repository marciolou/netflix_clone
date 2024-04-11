import categories from './api'
import './App.css'
import Row from './components/Row'

function App() {
  return (
    <>
      {categories.map((category) => {
        return <Row key={category.nome} title={category.title} path={category.path} />
      })}
    </>
  )
}

export default App
