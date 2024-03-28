import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';



// Layouts
import RootLayout from './layouts/RootLayout';



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='Projects' element={<Projects />} />
        <Route path='About' element={<About />} />
        <Route path='Resume' element={<Resume />} />
        <Route path='Contact' element={<Contact />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}


export default App
