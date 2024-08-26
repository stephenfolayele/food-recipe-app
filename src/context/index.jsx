import { createContext, useState } from "react";

export const GlobalContext = createContext(null)


export default function GlobalState({children}){
    const [searchParam, setSearchParam] = useState('')
    const [loading, setLoading] = useState(false)
    const [recipeList, setRecipeList] = useState([])
    const [recipeDetailsData, setRecipeDetailsData] = useState(null)
    const [favoriteList, setFavoriteList] = useState([])

    async function handleSubmit(event){
        event.preventDefault()
        setLoading(true)
        try{
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)
            const data = await res.json()
            console.log(data.data);
            if (data?.data?.recipes) {
                setRecipeList(data?.data?.recipes)
                setLoading(false)
                setSearchParam('')
            }
        } catch(e) {
            console.log(e);
            setLoading(false)
            setSearchParam('')
        }
    }

    function handleAddToFavorite(getCurrentItem){
        console.log(getCurrentItem);
        let cpyFavorites = [...favoriteList]

        const index = cpyFavorites.findIndex(item=> item.id === getCurrentItem.id)

        if (index === -1){
            cpyFavorites.push(getCurrentItem)
        } else {
            cpyFavorites.splice(index, 1)
        }
        setFavoriteList(cpyFavorites)
    }


    return <GlobalContext.Provider value={
        {searchParam, 
        loading, 
        recipeList, 
        setSearchParam, 
        handleSubmit, 
        recipeDetailsData, 
        setRecipeDetailsData,
        favoriteList,
        handleAddToFavorite
    }
    }>{children}</GlobalContext.Provider>
}