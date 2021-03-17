import React from "react";
import Navbar from './Navbar';

const Doctor = ({ doctor }) => {
    const { id, first_name, last_name } = doctor;
    return (
      <>
      <Navbar />
        <div>
          <h1>{first_name}, {last_name} </h1>
          <hr />
          <a href={`/doctors/${id}`}></a>
          <hr />
          <a href={`/doctors/${id}/appointments`}>Appointments</a>
          <hr />
          <a href={`/doctors/${id}`} data-method="delete">
            delete this doctor
          </a>
        </div>
      </>
    );
}

export default Doctor;