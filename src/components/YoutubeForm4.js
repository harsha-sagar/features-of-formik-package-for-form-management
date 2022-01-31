import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function YoutubeForm4() {
  const initialValues = {
    name: '',
    email: '',
    channel: ''
  }

  const onSubmit = (values) => {
    console.log('submitted data: ', values)
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('invalid email format').required('Required'),
    channel: Yup.string().required('Required')
  })

  return (
    <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit} 
        validationSchema={validationSchema}
    >
      <Form>
        <div className='form-control'>
            <label htmlFor='name'>Name</label>
            <Field type='text' id='name' name='name' />
            <ErrorMessage name="name" />
        </div>

        <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <Field type='email' id='email' name='email' />
            <ErrorMessage name="email" />
        </div>

        <div className='form-control'>
            <label htmlFor='channel'>Channel</label>
            <Field type='text' id='channel' name='channel' />
            <ErrorMessage name="channel" />
        </div>

        <button>Submit</button>
      </Form>
    </Formik>);
}

export default YoutubeForm4;
