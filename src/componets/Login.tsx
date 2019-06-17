import { withFormik } from 'formik'
import axios from 'axios'
import { UserInfoForm, FormFields } from './UserInfoForm'
import { setAuthorization } from '../utils/setAuthorization'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface MyOtherProps extends RouteComponentProps {

}

export const LoginComponent = withFormik<MyOtherProps, FormFields>({
    mapPropsToValues: props => ({
        email: "",
        password: ""
    }),

    handleSubmit(
        { email, password }: FormFields,
        { setSubmitting, props, setErrors }
    ) {

        axios.post("http://localhost:5006/auth/login", {
            email: email,
            password: password
        }).then(res => {
            console.log('Response data ', res.data.token)
            const token = res.data.token
            localStorage.setItem('jwtToken', token)
            //here would be your function that checked for the token
            setAuthorization(token)
        })
        console.log(`Email: ${email} Password: ${password}`)
        alert(JSON.stringify(`You are now logged under ${email}`, null, 2))
        props.history.push('/home')
        setSubmitting(false)
    }


})(UserInfoForm)

export const Login = withRouter(LoginComponent)

