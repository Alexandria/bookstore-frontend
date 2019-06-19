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
        { setSubmitting, props, resetForm }
    ) {
        axios.post("http://localhost:5006/auth/signup", {
            email: email,
            password: password
        }).then((res) => {
            console.log(`Email: ${email} Password: ${password}`)
            alert(JSON.stringify(res.data.message))
            props.history.push('/home')
            setSubmitting(false)
        }).catch(err => {
            alert(JSON.stringify(err.response.data.message))
            setSubmitting(false)
            resetForm()
        })

    }
})(UserInfoForm)

export const SignUp = withRouter(SignUpComponent) 