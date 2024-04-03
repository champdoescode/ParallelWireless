import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import App from './App'
import Solutions from './Components/Solutions'
import HomePage from './Components/HomePage'
import Customers from './Components/Customers'
import Urban from './Components/Solutions/Urban'
import Rural from './Components/Solutions/Rural'
import PrivateLTE from './Components/Solutions/Private'
import CareersNav from './Components/CareersNav'
import ProductTechnologies from './Components/ProductTechnologies'
import Company from './Components/Company'
import Resources from './Components/Resources'
import WhoWeAre from './Components/Company/WhoWeAre'
import News from './Components/Company/News'
import Leadership from './Components/Company/Leadership'
import CompanyAwards from './Components/Company/CompanyAwards'
import Contact from './Components/Company/Contact'
import Partners from './Components/Company/Partners'
import Legal from './Components/Company/Legal'
import NavContactUsForm from './Components/NavContactUsForm'
import WhitePapers from './Components/Resources/WhitePapers'
import SolutionOverviews from './Components/Resources/SolutionOverviews'
import Videos from './Components/Resources/Videos'
import Blogs from './Components/Resources/Blogs'
import CaseStudies from './Components/Resources/CaseStudies'
import Webinars from './Components/Resources/Webinars'
import OpenRan from './Components/Resources/OpenRan'
import SupportUs from './Components/Company/Contact/SupportUs'
import PressReleases from './Components/Company/News/PressReleases'
import NewsCoverage from './Components/Company/News/NewsCoverage'
import MissionAndVision from './Components/Company/WhoWeAre/MissionAndVision'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<App/>}>
            <Route path='' element={<HomePage/>}/>
            <Route path="/solutions" element={<Outlet />}>
                <Route index element={<Solutions/>} />
                <Route path="urban" element={<Urban/>} />
                <Route path="rural" element={<Rural/>} />
                <Route path="privateLTE" element={<PrivateLTE/>} />
            </Route>

            <Route path='/products-technologies' element={<ProductTechnologies/>}/>
            <Route path='/customers' element={<Customers/>}/>



            <Route path='/company' element={<Outlet/>}>
              <Route index element={<Company/>} />
              <Route path='who-we-are' element={<Outlet/>} >
                <Route index element={<WhoWeAre/>}  />
                <Route path='mission-and-vision' element={<MissionAndVision/>} />
              </Route>
              <Route path='news' element={<Outlet/>} >
                <Route index element={<News/>}  />
                <Route path='press-releases' element={<PressReleases/>} />
                <Route path='news-coverage' element={<NewsCoverage/>} />
              </Route>

              <Route path='leadership' element={<Leadership/>} />
              <Route path='awards' element={<CompanyAwards/>} />
              <Route path='contacts' element={<Outlet/>} >
                <Route index element={<Contact/>}  />
                <Route path='support' element={<SupportUs/>} />
              </Route>

              <Route path='partners' element={<Partners/>} />
              <Route path='legal' element={<Legal/>} />

            </Route>
            <Route path='/careers' element={<CareersNav/>}/>
            <Route path='/resources' element={<Outlet/>}>
              <Route index element={<Resources/>} />
              <Route path='white-papers' element={<WhitePapers/>} />
              <Route path='solution-overviews' element={<SolutionOverviews/>} />
              <Route path='videos'  />
              <Route path='blogs' element={<Blogs/>} />
              <Route path='case-studies' element={<CaseStudies/>} />
              <Route path='webinars' element={<Webinars/>} />
              <Route path='open-ran' element={<OpenRan/>} />

            </Route>
            <Route path='/contact-us-form' element={<NavContactUsForm/>}/>

        </Route>
    </Routes>
  )
}

export default Router