import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { search } from '../actions/searchAction';
import { currentDate } from '../utils';

const Home = () => {
  const userResult = useSelector(state => state.user);
  const [user, setLogin] = useState('admin/admin');

  const dispatch = useDispatch();

  useEffect(() => {
    const runSearch = () => {
      dispatch(search(user));
    };
    runSearch();
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <ul>
        {userResult.search &&
          userResult.search.map(res => {
            return (
              <li key={res.id}>
                {res.name}
                <br />
                {res.email}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Home;
