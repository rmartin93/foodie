import useFetch from '../hooks/useFetch';
import AutoComplete from '../components/AutoComplete';

const Home = () => {
    const {data: recipes, spinner, error} = useFetch(
        'https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=6'+process.env.REACT_APP_API_KEY
    )
    const options = recipes.results
    const newArrayOfObj = options.map(({title: name}) => ({
        name
    }));


    return (
        <div className="page-content">
            <div className="home">
                <img src="../hot-pot.png" alt="Foodie Logo" />
                <h1>Foodie</h1>
                {spinner && <div>Loading search...</div> }
                {error && <div>Error loading search...</div> }
                {newArrayOfObj && <AutoComplete suggestions={newArrayOfObj} /> }
                {/* <p>{selectedItem}</p> */}
                {/* <div className="recipes">
                    {spinner && <p>Fetching recipes...</p> }
                    {error && <p>Error fetching recipes</p>}
                    {recipes && recipes.results.map((recipe) => (
                        <div className="recipeCard" key={recipe.id}>
                            <h3>{recipe.title}</h3>
                            <img src={recipe.image} alt={recipe.title} />
                        </div>
                    ))}
                </div> */}
            </div>           
        </div>
    );
}
 
export default Home;