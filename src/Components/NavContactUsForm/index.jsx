import React, { useState } from 'react'
import InputField from './InputField';
import ButtonDefault from '../ButtonDefault';
import Footer from '../Footer';

const NavContactUsForm = () => {

    const [formValues, setFormValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        website: "",
        comment: "",
      });
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
      };
  return (
    <>
        
        <div className=' w-full'>
            <div className='bg-slate-200/70 p-8 text-center text-5xl'>Contact Us</div>
        </div>
        <div className='w-full flex justify-center'>
            <div className='w-11/12'>
                <div className='text-xl my-8'>"<span className='text-red-400'>*</span>" indicates required fields</div>
                <div className='text-4xl'>Please complete the form below and the appropriate associate will be in touch.</div>
                <form action="">
                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                        <div>

                            <InputField
                                label='Name'
                                star='*'
                                className='w-full'
                                inputProps={{
                                    type: "text",
                                    placeholder: "",
                                    value: formValues.firstname,
                                    name: "firstname",
                                    
                                    onChange: handleChange,
                                }}
                            />
                            <div className='text-gray-600 text-sm'>First</div>
                        </div>
                        <div>

                            <InputField
                                
                                className='w-full mt-9'
                                label=""
                                inputProps={{
                                    type: "text",
                                    placeholder: "",
                                    value: formValues.name,
                                    name: "lastname",
                                    
                                    onChange: handleChange,
                                }}
                            />
                            <div className='text-gray-600 text-sm'>Last</div>
                        </div>

                    </div>
                    <InputField
                                
                        className='w-full'
                        star='*'
                        label="Title"
                        inputProps={{
                            type: "text",
                            placeholder: "",
                            value: formValues.name,
                            name: "title",
                            
                            onChange: handleChange,
                        }}
                    />
                    <InputField
                                
                        className='w-full'
                        star='*'
                        label="Company"
                        inputProps={{
                            type: "text",
                            placeholder: "",
                            value: formValues.name,
                            name: "Company",
                            
                            onChange: handleChange,
                        }}
                    />
                    <InputField
                                
                        className='w-full'
                        star='*'
                        label="Business Email"
                        inputProps={{
                            type: "email",
                            placeholder: "",
                            value: formValues.name,
                            name: "Company",
                            
                            onChange: handleChange,
                        }}
                    />
                    <div className='text-xl mt-8'>Inquiry Details</div>
                    <div className='italic text-xl'>(please add any additional information to assist us with your inquiry)</div>
                    <textarea className='w-full border border-gray-400 h-40 outline-none focus:border-orange-400 text-xl p-6' name="" id="" cols="30" rows="10"></textarea>
                    <div className='text-xl mt-8'>Keep me updated with the latest news. <span className='text-red-400'>*</span></div>
                    <div className='flex flex-col'>
                        <div className='flex items-center my-4'>

                            <input className='h-6 w-6' type="checkbox" name="" id="" />
                            <label className='ml-4 text-xl' htmlFor="">Yes</label>
                        </div>
                        <div className='flex items-center'>

                            <input className='h-6 w-6' type="checkbox" name="" id="" />
                            <label className='ml-4 text-xl' htmlFor="">No</label>
                        </div>
                    </div>
                    <div className='mt-8 mb-20'>
                    <ButtonDefault heading='SUBMIT' />
                        
                    </div>
                    
                </form>





            </div>

        </div>
        <Footer/>
    </>
  )
}

export default NavContactUsForm