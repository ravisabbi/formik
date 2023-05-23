import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup';
import ShowError from './ShowError';

function FeedBackForm() {
    const initialValues = {
        name:"",
        email:"",
        phone:""
    }
    
    const validationSchema = Yup.object({
        email:Yup.string().email("Invalid Email").required("Required"),
        // name:Yup.string().required("Required"),
        phone:Yup.number().required("Required")
    })

    const validateName = (value) => {
        let error;
        if(!value){
           error = 'Required'
        }
        return error;
    }
    const onSubmit = (values) => {
             console.log("form submitted",values);
    }
    
  return (
    <div>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit = {onSubmit}>

       
        <Form  >
            <h1>Form FeedBack</h1>
            <label htmlFor='email' >email</label>
            {/* <input type='email' name='email' id = 'email'  {...formik.getFieldProps("email")}/> */}
            <Field type='email' name='email' id = 'email' />
            <ErrorMessage name='email' component={ShowError}/>
            <label htmlFor='name' >name</label>
            <Field type='text' name='name' id = 'name' validate = {validateName}/>
            <ErrorMessage name='name' component={ShowError}/>
            <label htmlFor='phone' >Phone Number</label>
            <Field type='text' name='phone' id = 'phone'/>
            <ErrorMessage name='phone' component={ShowError}/>
            <button type = 'submit'>Submit</button>
        </Form>
        </Formik>
    </div>
  )
}

export default FeedBackForm