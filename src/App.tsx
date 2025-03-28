import './App.css'
import TextComponent from './components/textComponent'
import TextSection from './components/textSection'
import { firstComponentFixture } from './fixture/firstComponent'

function App() {

  return (
    <>
      
      <TextSection title="Перший компонент" text="Lorem ipsum dolor sit amet, consectetur">
        <ul>
          <li>Itme 1</li>
          <li>Itme 2</li>
          <li>Itme 3</li>
          <li>Itme 4</li>
        </ul>
      </TextSection>

      <TextSection title="Другий компонент" text="Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur">
        <img src='https://placehold.co/600x400' alt='alt' />
      </TextSection>
      
      <TextSection title="Третій компонент" text="">
        {firstComponentFixture.map((component) => <TextComponent {...component} />)}
      </TextSection>
    </>
  )
}

export default App
