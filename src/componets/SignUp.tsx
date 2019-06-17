import React from 'react'
import { withFormik } from 'formik'
import { UserInfoForm, FormFields } from './UserInfoForm'
import axios from 'axios'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface MyOtherProps extends RouteComponentProps { }

const SignUpComponent = withFormik<MyOtherProps, FormFields>({
    mapPropsToValues: props => ({
        email: "",
        password: ""
    }),

    handleSubmit(
        { email, password }: FormFields,
        { setSubmitting, props, setErrors }
    ) {

        axios.post("http://localhost:5006/auth/signup", {
            email: email,
            password: password
        })
        console.log(`Email: ${email} Password: ${password}`)
        alert(JSON.stringify(`Welcome! You now have an account under ${email}`))
        props.history.push('/home')
        setSubmitting(false)
    }


})(UserInfoForm)

export const SignUp = withRouter(SignUpComponent) 