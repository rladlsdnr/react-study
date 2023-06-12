import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom"
import Home from "./movie routes/Home"
import Detail from "./movie routes/Detail"

function App() {
    return <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Detail />} />
        </Routes>
    </Router>
}

export default App;