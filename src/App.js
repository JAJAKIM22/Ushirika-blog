import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './components/Signup';
import LoginForm from './components/Login';
import Post from './components/Post';
import UserProfile from './components/UserAvatar';
// import Blog from './components/BlogPage';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/HomePage';
import Blog from './components/Blog';

function App() {
  return (
    <div>
    <Router>
        <div>
            <Routes> 
                <Route path="/login" element={ <LoginForm/> } />
                <Route path="/signup" element={ <SignupForm/> } />
                <Route path="/post" element={ <Post/> } /> 
                {/* <Route path="/blog" element={ <Blog/> } /> */}
                <Route path="/user" element={ <UserProfile/> } />
                <Route path='/forgotpassword' element={ <ForgotPassword/> } />
                <Route path='/home' element={ <Home/> } />
                <Route path='/blogg' element={ <Blog/> } />
                
            </Routes>
        </div>
    </Router>
  </div>
  );
}

export default App;
