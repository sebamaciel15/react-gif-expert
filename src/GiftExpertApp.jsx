import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {

      if(categories.includes(newCategory)) return
      // categories.push('Valorant')
      setCategories([newCategory, ...categories ] )
      
    }

  return (
    <>
        <h1>GiftExpertApp</h1>

        <AddCategory 
        // setCategories={setCategories}
        onNewCategory={onAddCategory} 
        currentCategories={ categories }       
        />


          {
          categories.map(category =>(  
              <GifGrid key={category} category={category} />
            ))
          }
    </>
  )
}
