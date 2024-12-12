import { useState } from 'react'
import sl from './Input.module.css'
import { randomId } from '../../utils'

export function Input({ setItems }) {
    let [title, setTitle] = useState('')

    let func2 = () => {
        let a = {
            id: randomId(24),
            title: title,
            isEdit: false,
            isChecked: false,
        }
        setItems(a)
    }

    return (
        <div className={sl.inpContainer}>
            <input placeholder='СОЗДАТЬ ЗАМЕТКУ!!!' className={sl.input} type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            <button className={sl.btn} onClick={() => func2()}>СОЗДАТЬ!</button>
        </div>
    )
}