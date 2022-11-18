import EveryEmployee from '../every-employee/every-employee'
import './all-employees.scss'


const AllEmployees = () => {
    return(
        <ul className="list-group">
            <EveryEmployee/>
            <EveryEmployee/>
            <EveryEmployee/>
        </ul>
    )
}
export default AllEmployees;