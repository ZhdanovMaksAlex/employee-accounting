import { useState } from 'react';
import './add-form.scss'

const AddForm = (addUsers, employeeData) => {
    const [inputValueUser, setInputValueUser] = useState('');
    const [inputValueSalary, setInputValueSalary] = useState('');
 
    const onSubmitValue = (e) => {
        e.preventDefault();
    }

    return (
        <div className="add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form onSubmit={onSubmitValue} className="app-add-form d-flex" >
                <input type="text"
                       className="form-control"
                       placeholder="Как его зовут?"
                       value={inputValueUser}
                       onChange={(e) => setInputValueUser(e.target.value)}/>

                <input type="number"
                       className="form-control"
                       placeholder="З/П в $?"
                       value={inputValueSalary}
                       onChange={(e) => setInputValueSalary(e.target.value) }/>

                <button 
                        className="btn btn-outline-light"
                        type='submit'>Добавить</button>
            </form>
        </div>
    )
}
export default AddForm;