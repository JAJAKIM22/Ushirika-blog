import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './components/Signup';
import LoginForm from './components/Login';
import Post from './components/Post';
import BlogList from './components/BlogPage';
import UserAvatar from './components/UserAvatar';

function App() {
  return (
    <div>
    <Router>
        <div>
            <Routes> 
                <Route path="/login" element={ <LoginForm/> } />
                <Route path="/signup" element={ <SignupForm/> } />
                <Route path="/post" element={ <Post/> } /> 
                <Route path="/blog" element={ <BlogList/> } />
                <Route path="/user" element={ <UserAvatar/> } />
            </Routes>
        </div>
    </Router>
  </div>
  );
}

export default App;
