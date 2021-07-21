import React, { useCallback, useState } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/DemoOutput';

import './App.css';

function App() {
  const [showParagrph, setShowParagraph] = useState(false);
  const [allow, setAllow] = useState(false);

  const paragraphToggler = useCallback(() => {
    if (allow) {
      //closure: lexical-env-variable(allow) heap e save hoise
      setShowParagraph((showParagrph) => !showParagrph);
    }
  }, [allow]);
  const allowToggle = () => {
    setAllow(true);
  };

  console.log('App running');
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagrph} />
      <Button onClick={allowToggle}>Allow Toggle</Button>
      <Button onClick={paragraphToggler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
