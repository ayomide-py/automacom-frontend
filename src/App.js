import logo from './logo.svg';
import './App.css';
import { Layout } from './components';
import Home from './pages/Home';
import Chapter from './pages/Chapters';
import Gallery from './pages/gallery';
import Project from './pages/project';
import ProjectPage from './pages/projectpage';
import Register from './pages/register';
import Blog from './pages/Blog'
import BlogPost from './pages/blog-post';
import Login from './pages/Login';
import About from './pages/about-us';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/chapter/">
        <Route path=':chapterName' element={<Layout children={<Chapter />}/>}/>
      </Route>
      <Route path="/photo-gallery" element={<Layout children={<Gallery/>}/>}>
      </Route>
      <Route path="/project-gallery/" element={<Layout />}>
        <Route path="" element={<Project />} />
        <Route path=":project_title" element={<ProjectPage />} />
      </Route>
      <Route path="/auth/" element={<Layout />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="/blogs/" element={<Layout />}>
        <Route path="" element={<Blog />} />
        <Route path=":blog_title" element={<BlogPost />} />
      </Route>
      <Route path="/about-us" element={<Layout children={<About/>}/>}>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
