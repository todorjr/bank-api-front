import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import Profile from '../pages/Profile'


function AppRouter ()  {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    )
}

export default AppRouter
