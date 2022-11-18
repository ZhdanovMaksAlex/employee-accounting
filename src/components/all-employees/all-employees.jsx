import { useState } from 'react'
import EveryEmployee from '../every-employee/every-employee'

import './all-employees.scss'


const AllEmployees = ({data}) => {
    const [users, setUsers] = useState(data);

    const removeItem = id => {
        setUsers(prevState => prevState.filter(el => el.id !== id))
     }

    let elem = users.map(item => {
        const {id} = item
        return(
            <EveryEmployee {...item} key={id} deleteItem={() => removeItem(id)}/> 
        )
    })

    return(
        <ul className="list-group">
             {elem}
        </ul>
    )
}
export default AllEmployees;