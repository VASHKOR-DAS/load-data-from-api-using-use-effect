import { useEffect, useState } from 'react';
import './App.css';

function App() {

  // Jehe2 ami array k call krbo, tobe useState() er vitor array default value ""faka array []""
   // const [ user, setUser ] = useState([])
   const [user, setUser] = useState([])

  /* useEffect + =>function use kore kono data k call kora hoy
  last er [] holo, 1bar oi data k use korbe
  [] na dile, loop akare (data run) choltei thakbe 
  */
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  }, [])
 

  return (
    <div className="App">
      <header className="App-header">

      {
        user.map(value => 
        <Person
          key={value.id} // jkhn  k6u change kora hoy tkhn jno react sohojei bujhte pare j kon line a change hoise er jnno (key) keyword ta use kora hoy, ate tar sobgulo line check kortr hoyna, ate performance valo thake, loading kom lage
          name={value.name}
          phone={value.phone}
          email={value.email} 
        >
        </Person>)
      }

      </header>
    </div>
  );
}


function Person (props) {
  const personStyle={
    width : "600px",
    border: '2px solid red',
    margin : '20px',
    padding : '20px',
  }
  return(
    <div style={personStyle}>
      <h2>Name : {props.name} </h2>
      <h3>Phone : {props.phone} </h3>
      <p> Him/His email: {props.email || 'Email'} </p>
    </div>
  )
}


export default App;
