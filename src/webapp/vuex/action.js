import request from 'axios';

request.defaults.baseURL = "http://localhost:8081";
export const getTopics = ({commit, state}) => {
  return request.get('users/1').then((response) => {
    if (response.statusText === 'ok') {
      commit('TOPICS_LIST', response.data);
    }
  }).catch((error) => {
    console.log(error);
  })
};

export const increment = ({commit}) => commit('Increment');
export const decrement = ({commit}) => commit('Decrement');



