import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './components/Signup';
import LoginForm from './components/Login';
import Post from './components/Post';
import UserAvatar from './components/UserAvatar';
import Blog from './components/BlogPage';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <div>
    <Router>
        <div>
            <Routes> 
                <Route path="/login" element={ <LoginForm/> } />
                <Route path="/signup" element={ <SignupForm/> } />
                <Route path="/post" element={ <Post/> } /> 
                <Route path="/blog" element={ <Blog/> } />
                <Route path="/user" element={ <UserAvatar/> } />
                <Route path='/forgotpassword' element={ <ForgotPassword/> } />
            </Routes>
        </div>
    </Router>
  </div>
  );
}

export default App;
