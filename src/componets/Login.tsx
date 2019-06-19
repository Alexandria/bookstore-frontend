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
        { setSubmitting, props, resetForm }
    ) {

        axios.post("http://localhost:5006/auth/login", {
            email: email,
            password: password
        }).then(res => {
            const token = res.data.token
            localStorage.setItem('jwtToken', token)
            //here would be your function that checked for the token
            setAuthorization(token)
            alert(JSON.stringify(`You are now logged under ${email}`, null, 2))
            props.history.push('/home')
            setSubmitting(false)
        }).catch(err => {
            alert(JSON.stringify(err.response.data.message))
            setSubmitting(false)
            resetForm()
        })



    }


})(UserInfoForm)

export const Login = withRouter(LoginComponent)

