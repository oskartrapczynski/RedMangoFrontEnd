import React, { useState } from 'react';
import { inputHelper } from '../Helper';
import { SD_Roles } from '../Utility/SD';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    userName: '',
    password: '',
    role: '',
    name: '',
  });

  const handleUserInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const tempData = inputHelper(e, userInput);
    setUserInput(tempData);
  };

  return (
    <div className="container text-center">
      <form method="post">
        <h1 className="mt-5">Register</h1>
        <div className="mt-5">
          <div className="col-sm-6 offset-sm-3 col-xs-12 mt-4">
            <input
              onChange={handleUserInput}
              value={userInput.userName}
              name="userName"
              type="text"
              className="form-control"
              placeholder="Enter Username"
              required
            />
          </div>
          <div className="col-sm-6 offset-sm-3 col-xs-12 mt-4">
            <input
              onChange={handleUserInput}
              value={userInput.name}
              name="name"
              type="text"
              className="form-control"
              placeholder="Enter Name"
              required
            />
          </div>
          <div className="col-sm-6 offset-sm-3 col-xs-12 mt-4">
            <input
              onChange={handleUserInput}
              value={userInput.password}
              name="password"
              type="password"
              className="form-control"
              placeholder="Enter Password"
              required
            />
          </div>
          <div className="col-sm-6 offset-sm-3 col-xs-12 mt-4">
            <select
              className="form-control form-select"
              required
              onChange={handleUserInput}
              value={userInput.role}
              name="role"
            >
              <option value="">--Select Role--</option>
              <option value={SD_Roles.CUSTOMER}>Customer</option>
              <option value={SD_Roles.ADMIN}>Admin</option>
            </select>
          </div>
        </div>
        <div className="mt-5">
          <button type="submit" className="btn btn-success">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
