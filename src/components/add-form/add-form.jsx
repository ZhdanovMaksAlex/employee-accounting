import './add-form.scss'

const AddForm = () => {
  
    return (
        <div className="add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form className="app-add-form d-flex">
                <input type="text"
                       className="form-control"
                       placeholder="Как его зовут?"/>

                <input type="number"
                       className="form-control"
                       placeholder="З/П в $?"/>

                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}
export default AddForm;