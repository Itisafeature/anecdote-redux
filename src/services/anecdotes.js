import axios from 'axios';

const baseURL = 'http://localhost:3001/anecdotes';

const createAnecdoteBackend = async content => {
  const anecdote = { content, votes: 0 };
  const response = await axios.post(baseURL, anecdote);
  return response.data;
};

const getAnecdotes = async () => {
  const response = await axios.get(baseURL);
  return response.data;
};

const voteAnecdote = async anecdote => {
  anecdote.votes += 1;
  const response = await axios.patch(`${baseURL}/${anecdote.id}`, anecdote);
  return response.data;
};

export default { createAnecdoteBackend, getAnecdotes, voteAnecdote };
