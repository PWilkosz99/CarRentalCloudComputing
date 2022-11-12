import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Home(props) {
  const { currentUser } = useAuth();

  // try {
  //   currentUser.getIdTokenResult()
  //     .then(function ({
  //       claims
  //     }) {
  //       console.log(claims)
  //     }
  //     )
  // } catch {

  // }

  console.log(currentUser)

  console.log(process.env.REACT_APP_BUCKET_ADDRESS)

  return (
    <>
      <h2>Home page</h2>
      {currentUser ? 'Zalogowano jako ' + currentUser.email : 'Nie zalogowano'}
    </>
  );
}