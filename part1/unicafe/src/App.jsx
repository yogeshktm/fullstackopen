import { useState,useEffect } from 'react'
import  { Button } from './components/Button';
import { Statistics } from './components/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive,setPositive] = useState(0);



  // useEffect(() => {

  // }, [all])

  const handleGoodClick = () => {
    let updateGood = parseInt(good + 1);
    setGood(updateGood);
    let updateAll = parseInt(all + 1);
    setAll(updateAll);
    let updateAvg = parseInt(all / 3);
    setAverage(updateAvg);
    let updatePositive = parseInt(good * (100/all));
    setPositive(updatePositive);

  }
  const handleNeutralClick = () => {
    let updateNeutral = neutral + 1;
    setNeutral(updateNeutral);
    let updateAll = all + 1;
    setAll(updateAll);
    let updateAvg = all / 3;
    setAverage(updateAvg);
    let updatePositive = parseInt(good * (100/all));
    setPositive(updatePositive);
  }
  const handleBad = () => {
    let updateBad = bad - 1;
    setBad(updateBad);
    let updateAll = all + 1;
    setAll(updateAll);
    let updateAvg = all / 3;
    setAverage(updateAvg);
    let updatePositive = parseInt(good * (100/all));
    setPositive(updatePositive);
  }


  return (
    <>
      <div>
      <h1>Give feedback</h1>
          <Button btnText="good" handleClick={handleGoodClick}></Button>
          <Button btnText="neutral" handleClick={handleNeutralClick}></Button>
          <Button btnText="bad" handleClick={handleBad}></Button>
        {
          all > 0 ? 
          <Statistics title="Statistics" good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}></Statistics>
          : <p>No feedback given</p>
        }
      </div>
    </>
  )
}

export default App
