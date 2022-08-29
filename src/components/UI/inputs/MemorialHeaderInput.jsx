import React from 'react'
import classes from './MemorialHeaderInput.module.css'

const MemorialHeaderInput = ({...props}) => {
    return (
        <div className={classes.MemorialHeaderInput}>
            <input type="radio" id={props.id} name={props.name} value={props.value}/>
            <label htmlFor={props.id} onClick={() => props.selectMemorialHeader(props.path)}>
                <img src={props.path} alt={props.name}/>
            </label>
        </div>
    )
}

export default MemorialHeaderInput