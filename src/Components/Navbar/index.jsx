import React from 'react'
import { ArrowRight, Search } from 'react-feather'
import './nav.css'
import ButtonDefault from '../ButtonDefault'
import { NavLink, Outlet } from 'react-router-dom'
import ButtonBlackToOrange from '../ButtonBlackToOrange'
import ButtonHover from '../ButtonHover'
import ButtonColorChange from '../ButtonColorChange'

const Navbar = () => {

   
  return (
    <>
            <div className='w-full fixed top-0 z-20 bg-white flex justify-center shadow-xl'>
                <div className='w-11/12 '>
                    <nav className='w-full flex justify-start sm:justify-start md:justify-start lg:justify-between items-center p-4'>
                        <div>
                            <NavLink to=''>

                            <img className='h-20' src="./images/logo.svg" alt="dfas" />
                            </NavLink>
                            
                        </div>
                        <div className='hidden sm:hidden md:hidden lg:block'>
                            <div className='dropdown'>

                                <NavLink onmouseover='mouseOverToggle()' onmouseout='mouseOutToggle()' id='new' to='solutions' className='dropbtn hover:text-orange-500 hover:transition-all duration-1000 hover:ease-in-out text-sm mr-6
                                relative hover:cursor-pointer before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-orange-500 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-orange-500 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]
                                '>Solutions
                                </NavLink>
                                <div class="dropdown-content">
                                    <NavLink to='/solutions/urban' className='solutionsLink' >Urban</NavLink>
                                    <NavLink to='/solutions/rural' className='solutionsLink' >Rural</NavLink>
                                    <NavLink to='/solutions/privateLTE' className='solutionsLink' >Private LTE</NavLink>
                                </div>
                            </div>
                            


{/* 
                            <NavLink to='products-technologies' className='hover:text-orange-500 hover:transition-all duration-1000 hover:ease-in-out text-sm mr-6
                            relative hover:cursor-pointer before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-orange-500 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-orange-500 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]
                            '>
                            </NavLink> */}
                            <NavLink to='products-technologies' className=' cart pr-4 py-8'>
                                <div className=' hover:text-orange-500 contents border-2 border-black text-sm'>Products and Technologies</div>
                                <div id="sidebar" className='absolute bg-gray-100 mt-[16px] left-0  w-full hover:cursor-default'>
                                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 px-16 py-16'>
                                        <div className='grid-items hover:cursor-pointer'>
                                            <div className='text-sm'>
                                                <ButtonBlackToOrange heading='Teachnologies'/>
                                                <div className='ml-4 mt-2'><ButtonColorChange heading='5G'/></div>
                                                <div className='ml-4 mt-2'><ButtonColorChange heading='4G'/></div>
                                                <div className='ml-4 mt-2'><ButtonColorChange heading='3G'/></div>
                                                <div className='ml-4 mt-2'><ButtonColorChange heading='2G'/></div>

                                            </div>
                                        </div>
                                        <div className='grid-items hover:cursor-pointer'>
                                            <div className='text-sm'>
                                                <ButtonBlackToOrange heading='Products'/>
                                                <div><button className='text-lg hover:underline transition duration-500 ease-in-out text-gray-800  font-semibold hover:underline  hover:text-orange-600'>Access: OpenRAN</button></div>
                                                <div className='mt-2 text-lg hover:underline transition duration-500 ease-in-out text-gray-800  font-semibold hover:underline  hover:text-orange-600'><ButtonColorChange heading='Software Defined Open'/>
                                                        <ButtonColorChange heading=' vRAN'/>
                                                </div>
                                                <div className=' mt-2'><ButtonColorChange heading='5G OpenRAN'/></div>

                                            </div>
                                        </div>
                                        <div className='grid-items hover:cursor-pointer'>
                                            <div className='text-sm'>
                                                <ButtonBlackToOrange heading=''/>
                                                <div><button className='text-lg hover:underline transition duration-500 ease-in-out text-gray-800  font-semibold hover:underline  hover:text-orange-600'>Network Software</button></div>
                                                <div><button className='my-2 text-sm  transition duration-500 ease-in-out text-gray-800   hover:text-orange-600'>Interoperable</button></div>
                                                <div><button className='my-2 text-sm  transition duration-500 ease-in-out text-gray-800   hover:text-orange-600'>Unified</button></div>
                                                <div><button className='my-2 text-sm  transition duration-500 ease-in-out text-gray-800   hover:text-orange-600'>Cloud-native</button></div>
                                                <div><button className='my-2 text-sm  transition duration-500 ease-in-out text-gray-800   hover:text-orange-600'>Ent-to-end</button></div>
                                                <div><button className='my-2 text-sm  transition duration-500 ease-in-out text-gray-800   hover:text-orange-600'>Performance</button></div>
                                                <div><button className='my-2 text-sm  transition duration-500 ease-in-out text-gray-800   hover:text-orange-600'>Multi-tenant and Sharing</button></div>
                                                <div><button className='my-2 text-sm  transition duration-500 ease-in-out text-gray-800   hover:text-orange-600'>Secure</button></div>
                                                

                                            </div>
                                        </div>
                                        <div className='grid-items hover:cursor-pointer'>
                                            <div className='text-sm'>
                                                <ButtonBlackToOrange heading=''/>
                                                <div><button className='text-lg hover:underline transition duration-500 ease-in-out text-gray-800  font-semibold hover:underline  hover:text-orange-600'>Network Intelligence</button></div>
                                                <div><button className='my-2 text-sm  transition duration-500 ease-in-out text-gray-800   hover:text-orange-600'>Analytics</button></div>
                                                <div><button className='my-2 text-sm  transition duration-500 ease-in-out text-gray-800   hover:text-orange-600'>Real-Time ALL G SON</button></div>
                                                <div><button className='my-2 text-sm  transition duration-500 ease-in-out text-gray-800   hover:text-orange-600'>Network Orchestrator</button></div>
                                                

                                            </div>
                                        </div>
                                        
                                        <div className='grid-items col-span-2 flex justify-center items-center'>
                                            <div className=' productBackground p-8 text-white'>
                                                <div className='text-4xl'>
                                                    Visit our resources page to download collateral, watch customer testimonial, or get a spec sheet.
                                                </div>
                                                <div className='flex' >
                                                    <button className='text-2xl my-2 hover:underline flex items-center'>
                                                        <div>
                                                        Resources
                                                        </div>
                                                <ArrowRight size={24}/>
                                                </button></div>
                                            </div>
                                        </div>
                                        

                                    </div>
                                </div>
                                </NavLink>
                            <NavLink to='customers' className='hover:text-orange-500 hover:transition-all duration-1000 hover:ease-in-out text-sm mr-6
                            relative hover:cursor-pointer before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-orange-500 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-orange-500 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]
                            '>Customers</NavLink>
                            <div className='dropdown2'>

                                <NavLink to='company' className='dropbtn2 hover:text-orange-500 hover:transition-all duration-1000 hover:ease-in-out text-sm mr-6
                                relative hover:cursor-pointer before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-orange-500 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-orange-500 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]
                                '>Company</NavLink>
                                <div class="dropdown-content2">
                                        <NavLink to='/company/who-we-are' className=' group solutionsLink2 relative flex' >Who We Are
                                        <div className='absolute -right-40 top-0  invisible group-hover:visible'>
                                            <NavLink to='/company/who-we-are/mission-and-vision' className='bg-gray-100 px-8 py-4 text-black hover:text-orange-500'>Mission and Vision</NavLink>
                                        </div>
                                        </NavLink>
                                        <NavLink to='/company/news' className=' group solutionsLink2 relative flex' >News
                                        <div className='absolute -right-36 top-0  invisible group-hover:visible'>
                                            <NavLink to='/company/news/press-releases' className='bg-gray-100 px-8 py-4 text-black hover:text-orange-500'>Press Releases</NavLink>
                                            <NavLink to='/company/news/news-coverage' className='bg-gray-100 px-8 py-4 text-black hover:text-orange-500'>News Coverage</NavLink>
                                        </div>
                                        </NavLink>
                                        <NavLink to='/company/Leadership' className='solutionsLink2' >Leadership</NavLink>
                                        <NavLink to='/company/Awards' className='solutionsLink2' >Awards</NavLink>
                                        <NavLink to='/company/contacts' className=' group solutionsLink2 relative flex' >Contacts
                                        <div className='absolute -right-20 top-0  invisible group-hover:visible'>
                                            <NavLink to='/company/contacts/support' className='bg-gray-100 px-16 py-4 text-black hover:text-orange-500'>Support</NavLink>
                                        </div>
                                        </NavLink>
                                        <NavLink to='/company/Contacts' className='solutionsLink2' >Contacts</NavLink>
                                        <NavLink to='/company/Partners' className='solutionsLink2' >Partners</NavLink>
                                        <NavLink to='/company/Legal' className='solutionsLink2' >Legal</NavLink>
                                </div>
                            </div>



                            <NavLink to='careers' className='hover:text-orange-500 hover:transition-all duration-1000 hover:ease-in-out text-sm mr-6
                            relative hover:cursor-pointer before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-orange-500 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-orange-500 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]
                            '>Careers</NavLink><div className='dropdown2'>

                            <NavLink to='resources' className='dropbtn2 hover:text-orange-500 hover:transition-all duration-1000 hover:ease-in-out text-sm mr-6
                            relative hover:cursor-pointer before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-orange-500 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-orange-500 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]
                            '>resources</NavLink>
                            <div class="dropdown-content2">
                                    
                                    <NavLink to='/resources/white-papers' className='solutionsLink2' >White Papers</NavLink>
                                    <NavLink to='/resources/solution-overviews' className='solutionsLink2' >Solution Overvies</NavLink>
                                    <NavLink to='https://www.youtube.com/user/ParallelWireless/about' className='solutionsLink2' >Videos</NavLink>
                                    <NavLink to='/resources/blogs' className='solutionsLink2' >Blogs</NavLink>
                                    <NavLink to='/resources/case-studies' className='solutionsLink2' >Case Studies</NavLink>
                                    <NavLink to='/resources/webinars' className='solutionsLink2' >Webinars</NavLink>
                                    <NavLink to='/resources/open-ran' className='solutionsLink2' >Open RAN</NavLink>
                            </div>
                        </div>
                            <button className=' hover:text-orange-500 hover:transition-all duration-1000 hover:ease-in-out text-sm mr-6
                            '>
                                <Search size={20}></Search>
                            </button>
                            <NavLink to='contact-us-form'>

                            <ButtonDefault heading='CONTACT US'/>
                            </NavLink>
                            

                        </div>

                    </nav>
                </div>

            </div>
                    <div className='pt-28'>
                        <Outlet/>
                    </div>
    </>
  )
}

export default Navbar