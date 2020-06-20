import React from 'react';
import { connect } from 'react-redux';
import Anecdote from './Anecdote';

const Anecdotes = props => {
  if (props.filter !== '') {
    return props.anecdotes
      .filter(el =>
        el.content.toLowerCase().includes(props.filter.toLowerCase())
      )
      .map(anecdote => <Anecdote key={anecdote.id} anecdote={anecdote} />);
  } else {
    return props.anecdotes.map(anecdote => (
      <Anecdote key={anecdote.id} anecdote={anecdote} />
    ));
  }
};

const mapStateToProps = state => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
  };
};

export default connect(mapStateToProps)(Anecdotes);
