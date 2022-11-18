import './app-filter.scss'


const AppFilter = () => {
    return(
        <div className="btn-group">
            <button type="button" 
                    className="btn btn-outline-light">Все сотрудники</button>

            <button type="button" 
                    className="btn btn-outline-light">З/П больше 1000$</button>
                    
            <button type="button" 
                    className="btn btn-outline-light">Получат премию</button>
        </div>
    )
}
export default AppFilter;