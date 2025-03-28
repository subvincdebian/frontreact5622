import './style.css'
import { TextComponentItemType } from '../../../types/componentTypes'


const CustomLi = (props:TextComponentItemType) =>{
  return (
    <>
        <li><a href={props.link}>{props.firstWord}</a>{props.text}</li>
    </>
  )
}


export default CustomLi
