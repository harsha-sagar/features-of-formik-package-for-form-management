import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function YoutubeForm6() {
  const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
  }

  const onSubmit = (values) => {
    console.log('submitted data: ', values)
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('invalid email format').required('Required'),
    channel: Yup.string().required('Required'),
    address: Yup.string().required('Required')
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
            <ErrorMessage name="name" component="div"/>
        </div>

        <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <Field type='email' id='email' name='email' />
            <ErrorMessage name="email">
              {
                (errorMessage) => {
                  return <div>{errorMessage}</div>
                }
              }
            </ErrorMessage>
        </div>

        <div className='form-control'>
            <label htmlFor='channel'>Channel</label>
            <Field type='text' id='channel' name='channel' />
            <ErrorMessage name="channel" />
        </div>

        <div className='form-control'>
            <label htmlFor='comments'>Comments</label>
            <Field as="textarea" id='comments' name='comments' />
            {/* <Field component="textarea" id='comments' name='comments' /> */}
            <ErrorMessage name="comments" />
        </div>

        <div className='form-control'>
            <label htmlFor='comments'>Adress</label>
            <Field name="address">
                {
                    ({field, form, meta}) => {
                        return (
                        <div>
                            <input id="address" {...field} />
                            {
                                (meta.touched && meta.error) ? <div>{meta.error}</div> : null
                            }
                        </div>)
                    }
                }
            </Field>
        </div>

        <button>Submit</button>
      </Form>
    </Formik>);
}

export default YoutubeForm6;
