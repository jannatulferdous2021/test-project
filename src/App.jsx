import React from 'react';
import MyCompo from './MyCompo';
import LoadUser from './LoadUser';
import User from './User';

const App = () => {
  return (
    <div>
      <User/>
      <LoadUser/>
      <MyCompo brand="Apple" price="111000"/>
      <MyCompo brand="Microsoft" price="55000"/>
      <MyCompo brand="Google" price="000"/>
      <MyCompo/>
    </div>
  );
};

export default App;