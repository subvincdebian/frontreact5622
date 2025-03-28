import { ChildrenType } from '../../types/componentTypes'
import './style.css'



const PageLayout = (props: ChildrenType) =>{
  return (
    <>
      <Header />
        {props.children}
      <Footer />
    </>
  )
}


export default PageLayout
