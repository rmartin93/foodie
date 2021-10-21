import useFetch from '../hooks/useFetch';
import AutoComplete from '../components/AutoComplete';

const Home = () => {
    const {data: recipes, spinner, error} = useFetch(
        'https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=6'+process.env.REACT_APP_API_KEY
    )

    return (
        <div className="page-content">
            <div className="home">
                <img src="../hot-pot.png" alt="Foodie Logo" />
                <h1>Foodie</h1>
                {spinner && <div>Loading search...</div> }
                {error && <div>Error loading search...</div> }
                {recipes && <AutoComplete suggestions={recipes} /> }
            </div>           
        </div>
    );
}
 
export default Home;