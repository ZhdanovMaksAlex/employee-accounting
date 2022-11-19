import { useState } from "react"

import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
import AllEmployees from "../all-employees/all-employees"
import AddForm from "../add-form/add-form"

import './app.scss'


const App = () => {
    const data = [
        {id: 1, name: "Maks M.", salary: 1000, increase: true, like: true},
        {id: 2, name: "Dima R.", salary: 2000, increase: false, like: false},
        {id: 3, name: "Olga T.", salary: 4000, increase: true, like: false}
    ];


    const [users, setUsers] = useState(data);
    const removeItem = id => {
        setUsers(prevState => prevState.filter(el => el.id !== id))
     }

    return(
        <div className="app">
            <AppInfo/>
                <div className="app-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
            <AllEmployees removeItem={removeItem} users={users}/>
            <AddForm />
        </div>
    )
}
export default App