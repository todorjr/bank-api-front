import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import Profile from '../pages/Profile'

// eslint-disable-next-line react/prop-types
function ProtectedRoute({ children }) {
    const user = useSelector((state) => state.user)
    return user && user.isLoggedIn ? children : <Navigate to="/signin" />
}

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/profile" element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                }/>
            </Routes>
        </Router>
    )
}

export default AppRouter
