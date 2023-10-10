import { useState } from 'react'


const App = () => {
 
  let anecdotesData = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];
  
  const [anecdotes, setAnecdotes] = useState(anecdotesData);
  const [votes,setVotes] = useState([0,0,0,0,0,0,0,0]);
  const [selected, setSelected] = useState(0)
  const [maxVoted,setMaxVoted] = useState(0);
  let max = Math.max(votes);

  const handleClick = () => {
      let randomNo = Math.floor(Math.random() * 7);
      setSelected(randomNo);
  }
  const handleVoteClick = () => {
    let addVote = [...votes];
    addVote[selected] += 1;
    setVotes(addVote);
    let maxVote = (Math.max(...addVote));
    setMaxVoted(addVote.indexOf(maxVote))
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has <em>{votes[selected]}</em> Votes</p>
      <button onClick={handleVoteClick}>Vote</button>
      <button onClick={handleClick}>Next anecdotes</button>
      <h2>Anecdote with most votes</h2> 
      {anecdotes[maxVoted]}
    </div>
  )
}

export default App
