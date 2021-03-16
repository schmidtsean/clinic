import React from "react";

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <a href="/doctors"></a>
      </li>
      <li>
       <a href="/doctors/new">Add A New Doctor</a>
      </li>
      <li>
       <a href="/users/sign_out" data-method="delete">Logout</a>
      </li>

      

      {/* <li>
        <a href="/users/new">New User</a>
      </li> */}
    </ul>
  </nav>
)

export default Navbar