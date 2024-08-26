import { useContext } from "react"
import { GlobalContext } from "../../context"
import RecipeItems from "../../components/recipe-list"


export default function Favorites(){

    const {favoriteList} = useContext(GlobalContext)

    return <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {
            favoriteList && favoriteList.length > 0 ? 
            favoriteList.map(items=> <RecipeItems item={items}/>) 
            : (
            <div>
                <p className="lg:text-4xl text-xl text-center text-black font-extrabold">Nothing is added to favorites.</p>
            </div>
            )
        }
    </div>
}