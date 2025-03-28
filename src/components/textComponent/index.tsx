import './style.css'
import { TextComponentType } from '../../types/componentTypes'
import CustomLi from './customLi'

const TextComponent = (props:TextComponentType) => {

  return (
    <>
      <div className='text-component-wrapper'>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <ul>
            {
                props.list.map((item) => <CustomLi {...item}/>)
            }
        </ul>
      </div>
    </>
  )
}

export default TextComponent
