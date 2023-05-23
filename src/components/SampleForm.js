import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup';

function SampleForm() {
    const initialValues = {
        name:"",
        email:""
    }
    // const validate = (values) =>{
    //     let errors = {};
    //     if(!values.email){
    //         errors.email = "Required";
    //     }
    //     if(!values.name){
    //         errors.name = "Required";
    //     }
        
    //     return errors;
    // }
    const validationSchema = Yup.object({
        email:Yup.string().email("Invalid Email").required("Required"),
        name:Yup.string().required("Required")
    })
    const onSubmit = (values) => {
             console.log("form submitted",values);
    }
    const formik = useFormik({
        initialValues,
        // validate,
        validationSchema,
        onSubmit
    })
    console.log(formik);
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <h1>Form FeedBack</h1>
            <label htmlFor='email' >email</label>
            <input type='email' name='email' id = 'email'  {...formik.getFieldProps("email")}/>
           {(formik.errors.email && formik.touched.email) &&<p className='error'>{formik.errors.email}</p>}
            <label htmlFor='name' >name</label>
            <input type='text' name='name' id = 'name' value={formik.values.name} onChange = {formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.errors.name && <p className='error'>{formik.errors.name}</p>}
            <button type = 'submit'>Submit</button>
        </form>
    </div>
  )
}

export default SampleForm