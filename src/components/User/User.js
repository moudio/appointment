import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
function User({ user }) {
  return (
    <div>
      <h1>Welcome {user.username}</h1>
    </div>
  );
}

export default User;
