import { ChildrenType } from '../../types/componentTypes'
import './style.css'



const TextSection = (props: ChildrenType) =>{
  return (
    <div className="section-wrapper">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        { props.children } 
    </div>
  )
}


export default TextSection
