import { createContext, useReducer } from 'react';
import githubReducer from './GithupReducer';

const GithupContext = createContext();

const GITHUP_API = 'https://api.github.com/users';

export const GithupProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async (text) => {
    setLoading();
    const params=new URLSearchParams({
      q: text
    })
    const res = await fetch(`https://api.github.com/search/users?${params}`);
    const {items} = await res.json();

    dispatch({ type: 'GET_USERS', payload: items });
  };

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <GithupContext.Provider
      value={{ users: state.users, loading: state.loading, searchUsers }}
    >
      {children}
    </GithupContext.Provider>
  );
};

export default GithupContext;
