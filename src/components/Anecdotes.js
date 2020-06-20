import React from 'react';
import { useSelector } from 'react-redux';
import Anecdote from './Anecdote';

const Anecdotes = () => {
  const anecdotes = useSelector(state => state.anecdotes);
  const filter = useSelector(state => state.filter);

  if (filter !== '') {
    return anecdotes
      .filter(el => el.content.toLowerCase().includes(filter.toLowerCase()))
      .map(anecdote => <Anecdote key={anecdote.id} anecdote={anecdote} />);
  } else {
    return anecdotes.map(anecdote => (
      <Anecdote key={anecdote.id} anecdote={anecdote} />
    ));
  }
};

export default Anecdotes;
