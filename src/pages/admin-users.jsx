import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Adminuser = () => {
  const [users, setUsers] = useState([]);
  const { autheader } = useAuth();
  const getuserdata = async () => {
    try {
      const response = await fetch(
        "https://d-mernserver.onrender.com/api/admin/user",
        {
          method: "GET",
          headers: {
            Authorization: autheader,
          },
        }
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {}
  };
  const deleteuser = async (id) => {
    try {
      const response = await fetch(
        `https://d-mernserver.onrender.com/api/admin/user/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: autheader,
          },
        }
      );
      console.log(id);
      const data = await response.json();
      if (response.ok) {
        getuserdata();
      }
    } catch (error) {}
  };
  useEffect(() => {
    getuserdata();
  }, []);
  return (
    <div className="text-white dark:bg-gray-900 min-h-screen">
      <div className=" text-5xl text-center font-bold py-10 bg-black min-w-full  border-gray-600 rounded-xl">
        Admin user panel
      </div>
      <div className=" ">
        <table className="table-auto min-w-full">
          <thead>
            <tr className="border-b-8 border-gray-600 bg-gray-950">
              <td className=" px-4 py-6 font-bold text-2xl">Name</td>
              <td className=" px-4 py-6 font-bold text-2xl">Email</td>
              <td className=" px-4 py-6 font-bold text-2xl">Phone</td>
              <td className=" px-4 py-6 font-bold text-2xl">Update</td>
              <td className=" px-4 py-6 font-bold text-2xl">Delete</td>
            </tr>
          </thead>
          <tbody>
            {users.map((curr, index) => {
              return (
                <tr key={index} className="border-b-8 border-gray-600">
                  <td className=" px-4 py-4">{curr.username}</td>
                  <td className=" px-4 py-4">{curr.email}</td>
                  <td className="px-4 py-4">{curr.phone || "N/A"}</td>
                  <td className=" px-4 py-4">
                    <button>
                      <NavLink to={`/admin/user/${curr._id}/edit`}>
                        <FaEdit />
                      </NavLink>
                    </button>
                  </td>
                  <td className=" px-4 py-4">
                    <button onClick={() => deleteuser(curr._id)}>
                      <MdDeleteOutline />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Adminuser;
