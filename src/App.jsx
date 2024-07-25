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
import DrNotii, { dr_notii_loader } from './pages/DrNotii';
import StellasGarage, { stellas_garage_loader } from './pages/StellasGarage';
import VeeCinemas, { vee_cinemas_loader } from './pages/VeeCinemas';
import Singleton, { singleton_loader } from './pages/Singleton';
import MyPortfolio, { my_portfolio_loader } from './pages/MyPortfolio';
import LittleLemon from './pages/LittleLemon';


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
import LogoDesignProjects, { logo_project_page_loader } from './layouts/LogoDesignProjects';
import BrandDesignProjects, { brand_design_page_loader } from './layouts/BrandDesignProjects';







const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path='Projects' element={<ProjectsLayout />}>
        <Route path='Front_End_Projects' element={<ProjectPreview />} loader={front_end_projects_loader}>
          <Route path='singleton_project' element={<Singleton />} loader={singleton_loader} />
          <Route path='my_portfolio' element={<MyPortfolio />} loader={my_portfolio_loader} />
          <Route path='little_lemon' element={<LittleLemon />} />
        </Route>

        <Route path='UX_Case_Studies' element={<ProjectPreview />} loader={ux_case_studies_loader}>
          <Route path='dr_notii' element={<DrNotii />} loader={dr_notii_loader} />
          <Route path='stellas_garage' element={<StellasGarage />} loader={stellas_garage_loader} />
          <Route path='vee_cinemas' element={<VeeCinemas />} loader={vee_cinemas_loader} />
        </Route>

        <Route path='UI_Designs' element={<ProjectPreview />} loader={ui_designs_loader} />

        <Route path='Logo_Designs' element={<ProjectPreview />} loader={logo_designs_loader}>
          <Route path=':id' element={<LogoDesignProjects />} loader={logo_project_page_loader} />
        </Route>

        <Route path='Brand_Designs' element={<ProjectPreview />} loader={brand_designs_loader}>
          <Route path=':id' element={<BrandDesignProjects />} loader={brand_design_page_loader} />
        </Route>
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
