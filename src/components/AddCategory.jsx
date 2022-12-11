import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if(inputValue.trim().length <= 1) return//trim() elimina espacios delante y detras. length mide cantidad de caracteres escritos
        //setCategories( categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim())
        setInputValue('')
    }


  return (
    <form onSubmit={ onSubmit}>
    <input 
        type='text'
        placeholder="buscar..."
        value={inputValue}
        onChange={onInputChange}
    />
    </form>
  )
}
