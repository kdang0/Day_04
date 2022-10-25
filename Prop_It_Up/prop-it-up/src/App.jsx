import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css'
import Header from './components/header';
import Details from './components/details';
function App() {
  return (
    <div className="App">
      <Header firstName={"Doe"} lastName={"Jane"}/>
      <Details age={45} hairColor={"Black"} />
      <Header firstName={"Smith"} lastName={"Johnson"}/>
      <Details age={88} hairColor={"Brown"} />
      <Header firstName={"Fillmore"} lastName={"Millard"}/>
      <Details age={50} hairColor={"Brown"} />
      <Header firstName={"Smith"} lastName={"Maria"}/>
      <Details age={62} hairColor={"Brown"} />
    </div>
  )
}

export default App
