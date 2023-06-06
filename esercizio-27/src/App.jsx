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
      ]}
        render={(arr, eventDelete) => {
          return (
            arr.map((element, index) => {
              return <li key={index}>{element}
                <button onClick={() => eventDelete(index)}>Delete</button></li>
            })
          )
        }}


      >
      </Todolist >
    </>
  )
}

export default App
