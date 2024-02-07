import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './store';

function CounterFunc() {
  const dispatch = useDispatch();
  const users = useSelector((i) => i.user);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    if (showData) {
      dispatch(fetchData());
    }
  }, [dispatch, showData]);

  const show = () => {
    setShowData(true);
  };

  return (
    <div>
      {showData && (
        <div>
          {users.map((item) => (
            <div key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <h4>{item.email}</h4>
              </div>
              <hr></hr>
            </div>
          ))}
        </div>
      )}
      <button onClick={show}>Fetch Data</button>
    </div>
  );
}

export default CounterFunc;