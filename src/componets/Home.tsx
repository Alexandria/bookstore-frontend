import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';


export type Data = { book_id: number, title: string, author: string }

interface Props {


}
interface State {
    home: Data[]
}



export class Home extends React.Component<Props, State>{
    state: State = {
        home: [
            {
                book_id: 0,
                title: "",
                author: ''
            }
        ]

    }



    componentDidMount() {
        axios.get<Data[]>(`http://localhost:5006/`)
            .then(res => {
                this.setState({ home: res.data })
            }).catch(error => {
                console.log(error)
            })
    }


    renderBooks() {
        console.log('State', this.state.home)
        return (

            this.state.home.map((row) => {
                return <tr key={row.book_id}>
                    <td>{row.title} </td>
                    <td>{row.author}</td>
                    <td>
                        <NavLink to={`/edit/${row.book_id}`} exact >
                            edit

                        </NavLink>
                        {'\u00A0'}
                        {'\u00A0'}
                    </td>
                    <td>
                        <NavLink to={`/delete/${row.book_id}`} >
                            delete
                                </NavLink>
                    </td>
                </tr>


            })

        )
    }

    render() {
        return <tbody>
            <tr>
                <td>Title</td>
                <td>Author</td>
            </tr>
            {this.renderBooks()}
        </tbody>



    }


}






