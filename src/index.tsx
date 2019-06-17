import React from 'react'
import ReactDOM from 'react-dom'

import { AppRouter } from './componets/AppRouter'

import { Home } from './componets/Home'
import { Delete } from './componets/Delete'
import { Login } from './componets/Login'

ReactDOM.render(
    <AppRouter />,
    document.querySelector("#root")

)