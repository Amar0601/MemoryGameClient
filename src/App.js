import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import HomePage from './components/HomePage';
import PlayGame from './components/PlayGame';


function App() {
    return (

        <BrowserRouter>
            <div>
                <AppNavbar />
                <div>
                    <Switch>
                        <Route path="/" component={HomePage} exact />
                        <Route path="/play/:difficultyLevel" component={PlayGame} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
