import Feature from "./components/Feature";
import { features } from "./fixture/firstComponent";

function App() {
  return (
    <div style={{background: "#212529", minHeight: "500vh", minWidth: "200vh", padding: "50px"}}>
      {features.map((item, index) => (
        <Feature key={index} icon={item.icon} title={item.title} text={item.text}>
          {item.children}
        </Feature>
      ))}
    </div>
  );
}

export default App;