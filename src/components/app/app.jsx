import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
import AllEmployees from "../all-employees/all-employees"
import AddFrom from "../add-form/add-form"

import './app.scss'


const App = () => {
    const data = [
        {id: 1, name: "Maks M.", salary: 1000, status: true},
        {id: 2, name: "Dima R.", salary: 2000, status: false},
        {id: 3, name: "Olga T.", salary: 4000, status: true}
    ]

    return(
        <div className="app">
            <AppInfo/>
                <div className="app-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
            <AllEmployees data={data}/>
            <AddFrom />
        </div>
    )
}
export default App