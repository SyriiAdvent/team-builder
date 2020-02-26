import React, { useState } from "react";

const RegisterForm = props => {
  const [form, setForm] = useState({
    fName: '',
    lName: '',
    email: '',
    jobTitle: ''
  })

  const submitForm = e => {
    e.preventDefault()
    props.addTeamMember(form)
    setForm({
      fName: '',
      lName: '',
      email: '',
      jobTitle: ''
    })
  }

  const handleChanges = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="fName">First Name</label> <br />
      <input
        name="fName"
        id="fName"
        type="text"
        placeholder="First Name"
        value={form.fName}
        onChange={handleChanges}
      /><br />
      <label htmlFor="fName">Last Name</label> <br />
      <input
        name="lName"
        id="lName"
        type="text"
        placeholder="First Name"
        value={form.lName}
        onChange={handleChanges}
      /><br />
      <label htmlFor="fName">Email</label> <br />
      <input
        name="email"
        id="email"
        type="text"
        placeholder=" email@gmail.com"
        value={form.email}
        onChange={handleChanges}
      /><br />
      <label htmlFor="fName">Job Title</label> <br />
      <input
        name="jobTitle"
        id="jobTitle"
        type="text"
        placeholder="Job Title"
        value={form.jobTitle}
        onChange={handleChanges}
      /> <br />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default RegisterForm;

// fName: '',
// lName: '',
// email: '',
// jobTitle: ''
