import { Todolist } from "./Component/Todolist"

function App() {


  return (
    <>
      <Todolist fruits={[
        "apple",
        "banana",
        "orange",
        "mango",
        "grape",
        "kiwi",
        "pineapple",
        "strawberry",
        "watermelon"
      ]} />
    </>
  )
}

export default App
