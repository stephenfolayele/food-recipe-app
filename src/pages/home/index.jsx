import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItems from "../../components/recipe-list";


export default function Home(){

    const {loading, recipeList} =  useContext(GlobalContext)


    if (loading) return <div className="lg:text-4xl text-xl text-center text-black font-extrabold">Loading... Please wait!</div>

    return <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {
            recipeList && recipeList.length > 0 ? 
            recipeList.map(items=> <RecipeItems item={items}/>) 
            : (
            <div>
                <p className="lg:text-4xl text-xl text-center text-black font-extrabold">Nothing to show. Please search something</p>
            </div>
            )
        }
    </div>
    
}