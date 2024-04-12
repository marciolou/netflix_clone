import categories from './api'
import './App.css'
import Banner from './components/Banner/Banner'
import Row from './components/Row/Row'

function App() {
  return (
    <>
      <Banner />
      {categories.map((category) => {
        return <Row
          key={category.nome}
          title={category.title}
          path={category.path}
          isLarge={category.isLarge} />
      })}
    </>
  )
}

export default App
