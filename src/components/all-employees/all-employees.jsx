import EveryEmployee from '../every-employee/every-employee'

import './all-employees.scss'


const AllEmployees = ({removeItem, users}) => {
    let elem = users.map((item) => {
        const {id} = item
        return(
            <EveryEmployee {...item} 
                           key={id} 
                           deleteItem={() => removeItem(id)}/> 
        )
    })

    return(
        <ul className="list-group">
             {elem}
        </ul>
    )
}
export default AllEmployees;