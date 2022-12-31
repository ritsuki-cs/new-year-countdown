import React from 'react';
import './App.scss';
import { CountdownTime } from './countdownTime';
import { NextYear } from './nextYear';
import { Title } from './title';

function App() {
  return (
    <div className="App">
      <main>
        <Title />
        <CountdownTime />
        <NextYear />
      </main>
    </div>
  );
}

export default App;
