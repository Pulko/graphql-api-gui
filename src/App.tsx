import React from 'react';

import LaunchList from 'components/LaunchList';
import LaunchProfile from 'components/LaunchProfile';

import './App.css';

const App: React.FC = () => {
  const [flightNumber, setFlightNumber] = React.useState<string>("")
  const onFlightNumberSelect = (flightNumber: number | null | undefined) => {
    if (!flightNumber) { return }

    setFlightNumber(String(flightNumber))
  }

  return (
    <div className="App">
      <LaunchList onFlightNumberSelect={onFlightNumberSelect} />
      <LaunchProfile flightNumber={flightNumber} />
    </div>
  )
}

export default App;
