import React from 'react'
import { Formik, Field } from 'formik'
import axios from 'axios'
import { Data } from './Home'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface MyProps extends RouteComponentProps {
    bookPromise?: Promise<Data>

}

// reinit prop on formik component

export interface FormFields {
    title: string
    author: string
}

export class ModifyClass extends React.Component<MyProps, Data>{

    state: Data = {
        book_id: 0,
        title: '',
        author: ''
    }

    componentDidMount() {
        const { bookPromise } = this.props
        if (bookPromise) {
            bookPromise.then(res => {
                this.setState({ book_id: res.book_id, title: res.title, author: res.author },
                    () => console.log('Modify', this.state)
                )
            }).catch(err => console.log(err))
        }
    }


    renderForm() {


        return (
            <Formik
                initialValues={{ title: this.state.title, author: this.state.author }}
                onSubmit={(values, actions) => {
                    axios.put(`http://localhost:5006/edit/${this.state.book_id}`, {
                        title: values.title,
                        author: values.author
                    }).then(() => {
                        alert(JSON.stringify(`This book was modifed! Title:  ${values.title} Author : ${values.author}`, null, 2));
                        this.props.history.push('/home')
                        setTimeout(() => {
                            actions.setSubmitting(false);
                        }, 1000);
                    }).catch(err => console.log(err))

                }}
                render={props => (

                    <form onSubmit={props.handleSubmit} >
                        <label htmlFor="title">Edit Title </label>
                        <Field
                            id="title"
                            name="title"
                            type="text"
                            onBlur={props.handleBlur}
                            onChange={props.handleChange}
                        />
                        <label htmlFor="author">Edit Author </label>
                        <Field
                            id="author"
                            name="author"
                            type="text"
                            onChange={props.handleChange}
                        />
                        <button
                            type="submit"
                            disabled={props.isSubmitting}
                        >Submit</button>
                    </form>
                )}
            />
        )
    }


    render() {
        return <div>
            Current Title : {this.state.title}
            <br></br>
            Current Author : {this.state.author}
            {this.renderForm()}
        </div>
    }

}

export const Modify = withRouter(ModifyClass)