import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// my components
import Home from "./components/Home";
import Error from "./components/Error";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="*" element={<Error />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
