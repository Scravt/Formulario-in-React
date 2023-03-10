
import { useForm } from 'react-hook-form'

function App() {
  const {register, handleSubmit} = useForm()

  const onSubmit =(data)=>{
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text"  />
      <button></button>
    </form>
  )
}

//agregar mas campos


export default App
