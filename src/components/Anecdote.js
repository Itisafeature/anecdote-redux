import React from 'react';
import { useDispatch } from 'react-redux';
import { addVote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch();

  const vote = anecdote => {
    dispatch(addVote(anecdote));
    dispatch(setNotification(`You voted for ${anecdote.content}`, 5));
  };

  return (
    <>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote)}>vote</button>
      </div>
    </>
  );
};

export default Anecdote;
