import Home from './pages/Home';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../src/styles/css/main.css';

function App() {
    return (
        <Router>
            <main className="App">
                <Switch>
                    <Route exact path="/">
                        <Home title="Foodie - Home"/>
                    </Route> 
                    <Route path="*">
                        <NotFound />    
                    </Route>  
                </Switch>
                <Footer /> 
            </main>
        </Router>
    );
}

export default App;
