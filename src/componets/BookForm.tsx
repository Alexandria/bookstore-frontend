import React from 'react'
import { FormikProps, Field } from 'formik'


interface MyProps {
    id?: string

}

export interface FormFields {
    title: string
    author: string
}


export const BookForm = (props: MyProps & FormikProps<FormFields>) => {
    const { handleSubmit, handleChange, isSubmitting, values } = props


    return (
        <div>Add Book Form!
        <form onSubmit={handleSubmit} >
                <label htmlFor="title">Title </label>
                <Field
                    id="title"
                    name="title"
                    type="text"
                    onChange={handleChange}
                    value={values.title}

                />
                <label htmlFor="author">Author </label>
                <Field
                    id="author"
                    type="text"
                    onChange={handleChange}
                    value={values.author}
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                >Submit</button>


            </form>

        </div>)

}