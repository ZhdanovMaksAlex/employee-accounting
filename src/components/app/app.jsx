import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
import AllEmployees from "../all-employees/all-employees"
import AddForm from "../add-form/add-form"
import './app.scss'
  

const App = () => {
    const dataEmployee = [
        {id: 1, name: "Maks M.", salary: 1000, increase: true, like: true},
        {id: 2, name: "Dima R.", salary: 2000, increase: false, like: false},
        {id: 3, name: "Olga T.", salary: 4000, increase: true, like: false},
    ];


    const [users, setUsers] = useState(dataEmployee);
    const removeItem = id => {
        setUsers(prevState => prevState.filter(el => el.id !== id))
    }

    
    const [employeeData, setEmployeData] = useState()
    const addUser = () => {
        const newUsers = {
            id: uuidv4(),
            name: '',
            salary: '',
            increase: true,
            like: false
        };
        setEmployeData(prevState => [...prevState, newUsers])
    }

  
    return(
        <div className="app">
            <AppInfo/>
                <div className="app-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
            <AllEmployees removeItem={removeItem} users={users}/>
            <AddForm addUser={addUser} employeeData={employeeData}/>
        </div>
    )
}
export default App