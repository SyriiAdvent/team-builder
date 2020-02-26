import React from 'react'

const TeamList = props => {
  const { fName, lName, email, jobTitle } = props.team

  return (
    <div style={{
      marginTop: '1rem', 
      border: `${ 'solid black 1px' }`, 
      // width: '50%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center'
    }}>
      <h2 style={{ margin: '3px' }}>{fName}</h2>
      <h2 style={{ margin: '3px' }}>{lName}</h2>
      <h4 style={{ margin: 0 }}>{email}</h4>
      <h2 style={{ margin: 0 }}>{jobTitle}</h2>

    </div>
  )
}

export default TeamList