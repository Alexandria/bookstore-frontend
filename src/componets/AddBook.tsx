import axios from 'axios';
import { BookForm, FormFields } from './BookForm'
import { withFormik } from 'formik'
import { withRouter, RouteComponentProps } from 'react-router-dom'


interface MyFormProps extends RouteComponentProps {
    id?: string
}

const AddBookComponent = withFormik<MyFormProps, FormFields>({
    mapPropsToValues: props => ({
        title: "",
        author: "",

    }),
    handleSubmit(
        { title, author }: FormFields,
        { props, setSubmitting, setErrors }
    ) {

        axios.post("http://localhost:5006/checkin", {
            title: title,
            author: author

        }).then(() => {
            alert(JSON.stringify(`Book ${title} was added!`, null, 2))
            props.history.push('/home')
            setSubmitting(false)
        }).catch(err => {
            console.log(err)
        })



    }

})(BookForm)

export const AddBook = withRouter(AddBookComponent)

