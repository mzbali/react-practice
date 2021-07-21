import React from 'react';

import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
  console.log('DemoOutput running');

  return <MyParagraph>{props.show && 'I am new!'}</MyParagraph>;
};

export default React.memo(DemoOutput);
