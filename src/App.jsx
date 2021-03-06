import './App.css';
import {Fragment} from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import Planning from './pages/planning/Planning';
import Blogs from './pages/blogs/Blogs';
import Instructors from './pages/instructors/Instructors';
import SingleBlog from './pages/singleBlog/SingleBlog';
import Courses from './pages/courses/Courses';
import CustomCursor from './components/UI/customCursor/CustomCursor';


function App() {
  return (
    <div className="App">
        <CustomCursor />
       <Router  >
            <Fragment>
           
              <Routes>
                <Route exact path='/' element={<Home /> } />
                <Route exact path='/planning' element={<Planning />} />
                <Route exact path='/blogs' element={<Blogs />} />
                <Route exact path='/blogs/:id' element={<SingleBlog />} />
                <Route exact path='/instructors' element={<Instructors />} />
                <Route exact path='/courses' element={<Courses />} />

              </Routes>
          
            </Fragment>
        </Router>
      
    </div>
  );
}

export default App;
