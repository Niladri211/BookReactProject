import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/styles/user.css';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useLocation } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);
  let location = useLocation();
  let bool = location.pathname.startsWith(`/adminportal/users`);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('http://localhost:4000/users');
      setUsers(res.data);
    };

    fetchUsers(); // we don't use try-catch, any error will be unhandled
  }, []);

  const deleteDetails = (index) => {
    const confirmDelete = window.confirm('Do you want to delete this user?');
    if (confirmDelete) {
      const updatedUsers = users.filter((e, i) => i !== index);
      setUsers(updatedUsers);
    }
  };

  return (
    <div className="users">
      <div className="header">
        <h2>Users</h2>
      </div>
      <div className="container">
        {bool ? (
          <table>
            <thead>
              <tr>
                <th>Sl no.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Password</th>
                <th>Date of Birth</th>
                <th>Age</th>
                <th>Place</th>
                <th>View</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((elem, index) => {
                const { firstName, lastName, contact, email, password, dob, place } = elem;
                const age = new Date().getFullYear() - dob.slice(0, 4);

                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{contact}</td>
                    <td>{email}</td>
                    <td>user123</td>
                    <td>{dob}</td>
                    <td>{age}</td>
                    <td>{place}</td>
                    <td>
                      <button>
                        <VisibilityIcon />
                      </button>
                    </td>
                    <td>
                      <button onClick={() => deleteDetails(index)}>
                        <DeleteIcon />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Sl no.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Contact</th>
                <th>Place</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {users.map((elem, index) => {
                const { firstName, lastName, contact, place } = elem;

                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{contact}</td>
                    <td>{place}</td>
                    <td>
                      <button>
                        <VisibilityIcon />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Users;
