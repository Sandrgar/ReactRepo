import FiltredList from "./components/FiltredList"

function App() {
  const list = [{
    name: "Bulbasaur",
    id: 47,
    age: 28
  },
  {
    name: "Growlithe",
    id: 55,
    age: 30
  },
  {
    name: "Charmender",
    id: 68,
    age: 10
  }
  ]

  return (
    <>
      <FiltredList arg={list}/>
    </>
  )
}

export default App
