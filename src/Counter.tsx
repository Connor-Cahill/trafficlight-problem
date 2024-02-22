import * as React from 'react';


interface CounterProps {
  increaseClick: (control: boolean) => void;
  decreaseClick: (control: boolean) => void;
  controlCounter: boolean;
}

const Counter: React.FC<CounterProps> = ({ increaseClick, decreaseClick, controlCounter }) => {
  const  [count, setCount] = React.useState(0);

  const onIncrease = () => {
    setCount(count + 1);
    increaseClick(controlCounter);
  }

  const onDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    decreaseClick(controlCounter)
  }


  const counterContainer: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '40%',
  }

  const buttonRowStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '60%',
  }

  return (
    <div className="counter" style={counterContainer}>
        <p>{count}</p> 
        <div style={buttonRowStyles}>
          <button onClick={onDecrease}>decrease</button>
          <button onClick={onIncrease}>increase</button>
        </div>
    </div>
  )
};

export default Counter;
