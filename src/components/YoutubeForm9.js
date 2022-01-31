import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';

function YoutubeForm9() {
  const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
      facebook: '',
      twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: ['']
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

        <div className='form-control'>
            <label htmlFor='facebook'>Facebook</label>
            <Field type='text' id='facebook' name='social.facebook' />
            <ErrorMessage name="social.facebook"/>
        </div>

        <div className='form-control'>
            <label htmlFor='twitter'>Twitter</label>
            <Field type='text' id='twitter' name='social.twitter' />
            <ErrorMessage name="social.twitter"/>
        </div>

        <div className='form-control'>
            <label htmlFor='primary-ph'>Primary contact number</label>
            <Field type='text' id='primary-ph' name='phoneNumbers[0]' />
            <ErrorMessage name="phoneNumbers[0]"/>
        </div>

        <div className='form-control'>
            <label htmlFor='secondary-ph'>Secondary contact number</label>
            <Field type='text' id='secondary-ph' name='phoneNumbers[1]' />
            <ErrorMessage name="phoneNumbers[1]"/>
        </div>

        <div className='form-control'>
            <label>List of phone numbers</label>
            <FieldArray name='phNumbers'>
                {
                  ({push, remove, form}) => {
                    return (
                      <div>
                      {
                        form.values.phNumbers.map((phNumber, index) => {
                          return (
                            <div key={index}>
                              <Field name={`phNumbers[${index}]`} />
                              {index > 0 && (<button type="button" onClick={() => remove(index)}>-</button>)}
                              <button type="button" onClick={() => push('')}>+</button>
                            </div>
                          )
                        })
                      }
                      </div>
                    )
                  }
                }
            </FieldArray>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>);
}

export default YoutubeForm9;
