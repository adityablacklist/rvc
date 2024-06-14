import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/header";
import Hero from "./components/hero"

const App = () => {
  return(
    <>
      <div className="overflow-auto"/*"pt-[4.75rem] lg:pt-[5.25rem]"*/ >
        <Header/>
        <div className="pt-96"><Hero /></div>
        
      </div>
      <ButtonGradient/>
    </>
  )
}

export default App;
