// import { useEffect, useState } from 'react';

// let myTimer;

// const Timer = (props) => {
//   const [timerIsActive, setTimerIsActive] = useState(false);

//   const { timerDuration } = props; // using destructuring to pull out specific props values

//   useEffect(() => {
//     if (!timerIsActive) {
//       setTimerIsActive(true); //eventual change.
//       console.log('timer');
//       myTimer = setTimeout(() => {
//         setTimerIsActive(false); // after every 3 second it becomes false.
//       }, timerDuration);
//     }
//   }, [timerIsActive, timerDuration]);

//   return <h1>{timerDuration}</h1>;
// };
// export default Timer;
