import axios from 'axios'


export async function getBook(id: string) {
    const res = await axios.get(`http://localhost:5006/edit/${id}`).catch(err => { console.log(err) })
    const result = (res) ? res.data : null

    return result
} 