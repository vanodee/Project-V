import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';


// Pages
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';


// Layouts
import RootLayout from './layouts/RootLayout';
import ProjectsLayout from './layouts/ProjectsLayout'

import ProjectPreview, {
  brand_designs_loader,
  front_end_projects_loader,
  logo_designs_loader,
  ui_designs_loader,
  ux_case_studies_loader
} from './components/ProjectPreview';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path='Projects' element={<ProjectsLayout />}
      >
        <Route path='Front_End_Projects' element={<ProjectPreview />} loader={front_end_projects_loader} />
        <Route path='UX_Case_Studies' element={<ProjectPreview />} loader={ux_case_studies_loader} />
        <Route path='UI_Designs' element={<ProjectPreview />} loader={ui_designs_loader} />
        <Route path='Logo_Designs' element={<ProjectPreview />} loader={logo_designs_loader} />
        <Route path='Brand_Designs' element={<ProjectPreview />} loader={brand_designs_loader} />
      </Route>

      <Route path='About' element={<About />} />
      <Route path='Resume' element={<Resume />} />
      <Route path='Contact' element={<Contact />} />
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  )
}


export default App
