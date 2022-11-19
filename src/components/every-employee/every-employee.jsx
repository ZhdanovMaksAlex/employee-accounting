import { useState } from 'react'
import './every-employee.scss'


const EveryEmployee  = ({deleteItem,salary,name,like,increase}) => {

const [increas, setIncreas] = useState(increase);
const [rise, setRise] = useState(like);


    const onIncrease = () => {
        setIncreas(increas => !increas)  
    }

    const onRise = () => {
        setRise(rise => !rise)                  
    }


let classNames = "list-group-item d-flex justify-content-between";
        if (!increas) {
            classNames += ' increase';
        }
        if (rise) {
            classNames += ' like';
        }

    return (
        <li className={classNames}>
            <span className="list-group-item-label"onClick={onIncrease}>{name}</span>
             <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>

            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm"
                    onClick={onRise}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm"
                        onClick={() => deleteItem()}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EveryEmployee;