import * as React from 'react';


interface TrafficLightProps {
  state: {
    value: number;
    label: string;
  };
}


const TrafficLight: React.FC<TrafficLightProps> = ({ state }) => {
  const { value, label } = state;
  const getColor = (num: number): string => {
    // divide num by 3 to get remainder this will line up
    const remainder = num % 3;
    const colors = ['red', 'yellow', 'green'];
    return colors[remainder];
  }

  const [lightColor, setLightColor] = React.useState<string>(getColor(value))

  React.useEffect(() => {
    setLightColor(getColor(value));
  }, [value]);
  
  const trafficLightStyle: React.CSSProperties = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: lightColor,
  }

  const containerStyle: React.CSSProperties = {
    width: '40%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
  return (
    <div className="traffic-light" style={containerStyle}>
      <p>{ label }</p>
      <div style={trafficLightStyle}></div>
    </div>
  )
};

export default TrafficLight;
