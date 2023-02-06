import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './components/Signup';
import LoginForm from './components/Login';
import Post from './components/Post';
import UserProfile from './components/UserAvatar';
import BlogPost from './components/BlogPage';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/HomePage';
import Blog from './components/Blog';
import LandingPage from './components/LandingPage';
import AccountSettings from './components/AccountSettings';
import DashboardBlogPostListItem from './components/DashboardBlogPostListItem';
import UserProfileCard from './components/UserProfileCard';
function App() {
  return (
    <div>
    <Router>
        <div>
            <Routes> 
                <Route exact path="/" element={ <LandingPage/> } 
                   />
                <Route path="/login" element={ <LoginForm/> } />
                <Route path="/signup" element={ <SignupForm/> } />
                <Route path="/post" element={ <Post/> } /> 
                <Route path="/blog" element={ <BlogPost/> } />
                <Route path="/user" element={ <UserProfile/> } />
                <Route path='/forgotpassword' element={ <ForgotPassword/> } />
                <Route path='/home' element={ <Home/> } />
                <Route path='/blogg' element={ <Blog/> } />
                <Route path='/home/me/settings' element={ <AccountSettings/> } />
                <Route path='/home/me/articles/published' element={ <DashboardBlogPostListItem/> } />
                <Route path='/home/me/profile' element={ <UserProfileCard/> } />
            </Routes>
        </div>
    </Router>
  </div>
  );
}

export default App;
