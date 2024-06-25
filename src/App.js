import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
function App() {
    return (
        <Router>
            //Route를 찾음
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}
export default App;
