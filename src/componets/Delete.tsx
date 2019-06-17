import React from 'react'
import axios from 'axios'

interface Props {
    id: string
}

export const Delete = (props: Props) => {
    axios.delete(`http://localhost:5006/delete/${props.id}`)
    return <div>Your Book as deleted!</div>
}