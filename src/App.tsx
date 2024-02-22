import * as React from 'react';
import Counter from "./Counter";
import TrafficLight from './TrafficLight';

const App = () => {
  const [counterOne, setCounterOne] = React.useState(0);
  const [totalClicks, setTotalClicks] = React.useState(0);

  const countersBox: React.CSSProperties = {
    display: 'flex', 
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '32px',
  }

  const increaseClick = (control: boolean) => {
    setTotalClicks(totalClicks + 1);
    if (control) {
      setCounterOne(counterOne + 1);
    }
  }

  const decreaseClick = (control: boolean) => {
    setTotalClicks(totalClicks + 1);
    if (control && counterOne > 0) {
      setCounterOne(counterOne - 1);
    }
  }

  return (
    <div className="App">
      <div>
        <p>Total Clicks: {totalClicks.toString() }</p>
      </div>
      <div style={countersBox}>
        <Counter increaseClick={increaseClick} decreaseClick={decreaseClick} controlCounter={true} />
        <Counter increaseClick={increaseClick} decreaseClick={decreaseClick} controlCounter={false} />
      </div>
      <div>
        <TrafficLight state={{ value: counterOne, label: 'Traffic light'}}/>
      </div>
    </div>
  )
};

export default App;
