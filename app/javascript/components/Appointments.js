import React from "react";

const Appointments = ({ doctor, date, time, users}) => {

  const displayUser = (id) => {
    let fullName
    users.map((u) => {
      if (u.id === id) {
        fullName = u.first_name + " " + u.last_name
      }
    })
    return fullName
  }

  return(
    <>
      <h1>{doctor.name} Appointments</h1>
      <a href={`/doctors/${doctor.id}/appointments/new`}>Add Appointment</a>
      <br />
     
      <h2>Date</h2>
      { Date.map( (e) => (
        <div>
          <p>{displayUser(e.user_id)}</p>
          <a href={`/doctors/${doctor.id}/appointments/${e.id}`} data-method="delete">
            delete
          </a>
        </div>
      ))}
       <h2>Time</h2>
      { time.map( (t) => (
        <div>
          <p>{displayUser(t.user_id)}</p>
          <a href={`/doctors/${doctor.id}/appointments/${t.id}`} data-method="delete">
            delete
          </a>
        </div>
      ))}
       </>
  )
}

export default Appointments;