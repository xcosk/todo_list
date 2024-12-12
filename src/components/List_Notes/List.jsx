import { ListItem } from '../ListItem_Notes/ListItem'
import sp from './List.module.css'

export let List = ({notes, setIndex, refa}) => {
    return (
        <ul className={sp.ul}>
            {notes.map((el, i) => <ListItem refa={refa} i={i} setIndex={setIndex} key={i} text={el}/>)}
        </ul>
    )    
}