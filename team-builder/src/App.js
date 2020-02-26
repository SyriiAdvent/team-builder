import React, { useState } from 'react';
import './App.css';

import RegisterForm from './Components/RegisterForm'
import TeamList from './Components/TeamList'

function App() {
  // const [form, setForm] = useState({
  //   fName: '',
  //   lName: '',
  //   email: '',
  //   jobTitle: ''
  // })
  const [team, setTeam] = useState([
  {
    id: 1,
    fName: 'Timothy',
    lName: 'Bennidiction',
    email: 'codegonewild2@gmail.com',
    jobTitle: 'Front-End Engineer'
  }
])

const addTeamMember = obj => {
  const member = {
    id: Date.now(),
    fName: obj.fName,
    lName: obj.lName,
    email: obj.email,
    jobTitle: obj.jobTitle,
  }
  setTeam([...team, member])
}
  
  return (
    <div className="App"
    style={{
      // border: `${ 'solid black 1px' }`, 
      // width: '100%',
      // display: 'flex',
      // flexDirection: 'row',
      // justifyContent: 'center',
      // alignContent: 'center'
    }}>
      <RegisterForm addTeamMember={addTeamMember} />
      {team.map( ele => <TeamList team={ele} /> )}
      {/* <TeamList team={team} /> */}
    </div>
  );
}

export default App;
