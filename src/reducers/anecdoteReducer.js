import anecdotesService from '../services/anecdotes';

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAnecdotes();
    dispatch({
      type: 'INITIALIAZE_ANECDOTES',
      data: anecdotes,
    });
  };
};

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.createAnecdoteBackend(content);
    dispatch({
      type: 'CREATE_ANECDOTE',
      anecdote: newAnecdote,
    });
  };
};

export const addVote = anecdote => {
  return async dispatch => {
    const updatedAnecdote = await anecdotesService.voteAnecdote(anecdote);
    dispatch({
      type: 'ADD_VOTE',
      updatedAnecdote,
    });
  };
};

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'INITIALIAZE_ANECDOTES':
      return state.concat(action.data).sort((a, b) => b.votes - a.votes);
    case 'CREATE_ANECDOTE':
      return state.concat(action.anecdote);
    case 'ADD_VOTE':
      return state
        .map(anecdote =>
          anecdote.id === action.updatedAnecdote.id
            ? action.updatedAnecdote
            : anecdote
        )
        .sort((a, b) => b.votes - a.votes);
    default:
      return state;
  }
};

export default anecdoteReducer;
