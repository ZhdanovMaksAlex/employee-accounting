import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
import AllEmployees from "../all-employees/all-employees"
import AddFrom from "../add-form/add-form"

import './app.scss'


const App = () => {
    return(
        <div className="app">
            <AppInfo/>
                <div className="app-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
            <AllEmployees />
            <AddFrom />
        </div>
    )
}
export default App