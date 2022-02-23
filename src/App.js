import './App.css';
import Header from './components/header/Header.js'
import Slider from './components/slider/Slider'
import WhiteSmall2x1 from './components/layouts/WhiteSmall2x1'
import BlueOne from './components/layouts/BlueOne'

import Card from './components/card/Card';

import Images from './resources/Images'
import Cards from './resources/Cards'


function App() {
  return (
    <div className="App">
      <Header/>
      <Slider images={Images}  />
      <WhiteSmall2x1>
        <Card cardDetails={Cards}/>
        <Card cardDetails={Cards}/>
      </WhiteSmall2x1>
      <BlueOne>
      <Card cardDetails={{title: "Believe in us",paragraph: "This is a good test for Everyone", }}/>
      </BlueOne>
      <WhiteSmall2x1>
        <Card cardDetails={{title: "Invest in change",paragraph: "This is a good test for Everyone", }}/>
        <Card cardDetails={{title: "Believe in us",paragraph: "This is a good test for Everyone", }}/>
      </WhiteSmall2x1>

    </div>
  );
}

export default App;
