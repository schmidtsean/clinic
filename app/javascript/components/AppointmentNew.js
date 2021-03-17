import React from 'react';

const AppointmentNew = ({ doctor, appointment, users }) => {
  const { role, errors, user_id, time, date} = appointment;
  const defaultRole = role ? role : "";
  const defaultUser = user_id ? user_id : "";
  const defaultTime = time ? time : "";
  const defaultDate = date ? date : "";
  return(
    <>
    <h1>Add Appointment</h1>
      { errors && errors }
      <form action={`/doctors/${doctor.id}/appointments`} method="post">
        <label for="role">Choose a role:</label>
        <select 
          name="appointment[role]" 
          id="role" 
          defaultValue={defaultRole}
        >
          <option value="date">Date</option>
          <option value="time">Time</option>
          
        </select>
        <br />
        <label for="user_id">Choose a user:</label>
        <select 
          name="appointment[user_id]" 
          id="user_id" 
          defaultValue={defaultUser}
        >
         { users.map((u) => (
           <option value={u.id}>
             {`${u.first_name} ${u.last_name}`}
           </option>
         ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default AppointmentNew;