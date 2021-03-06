import React from "react";
import Navbar from './Navbar';
const Doctors = ({ doctors }) => {
  return (
    <>
      <Navbar />
      <h1 id="docHead">Doctors</h1>
      {/* <a href="/doctors/new">Add Doctor</a> */}
      {/* <br /> */}
      <h2>{ doctors.length <= 0 ? "No Doctors" : "" }</h2> 
      { doctors.map((doctor) => (
        <div>
          <a href={`/doctors/${doctor.id}`}>{doctor.first_name},{doctor.last_name}</a>
        </div>

        
      ))}
        
      
    </>
  )
}

export default Doctors;