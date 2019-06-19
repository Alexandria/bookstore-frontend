import React from 'react'
import { FormikProps, Field } from 'formik'

//interface MyProps { }
export interface FormFields {
    email: string,
    password: string
}

export const UserInfoForm = (props: FormikProps<FormFields>) => {
    const { handleSubmit, values } = props

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email" >Email:</label>
            <Field
                id='email'
                name='email'
                type='email'
                values={values.email}
            />
            <label htmlFor="password" >Password:</label>
            <Field
                id='password'
                name='password'
                type='text'
                values={values.password}

            />
            <Field
                type='submit'
                value='Submit'
                name='submit'
            />

        </form>
    )
}