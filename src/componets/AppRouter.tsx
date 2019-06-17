import React from 'react'
import { Home } from './Home'
import { BrowserRouter as Router, Route, RouteComponentProps } from 'react-router-dom'
import { Navigaiton } from './Navigation'
import { Delete } from './Delete'
import { AddBook } from './AddBook';
import { Login } from './Login';
import { SignUp } from './SignUp';
import { Modify } from './Modify';
import { getBook } from '../utils/getBook'

interface OtherProps {
    id: string

}

const deleteBook = ({ match }: RouteComponentProps<OtherProps>) => {
    return <Delete id={match.params.id} />
}

const modifyBook = ({ match }: RouteComponentProps<OtherProps>) => {
    const bookPromise = getBook(match.params.id)

    return <Modify bookPromise={bookPromise} />
}

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <Navigaiton />
                <br />
                <Route exact path="/home" component={Home} />
                <Route exact path="/checkin" component={AddBook} />
                <Route exact path="/delete/:id" render={deleteBook} />
                <Route exact path="/edit/:id" render={modifyBook} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
            </Router>

        </div>)
}



