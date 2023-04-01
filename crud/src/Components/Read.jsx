import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");
  function getData() {
    axios
      .get("https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube")
      .then((res) => {
        setData(res.data);
      });
  }
  function handleDelete(id) {
    axios
      .delete(`https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube/${id}`)
      .then(() => {
        getData();
      });
  }
  const setToLocalStorage = (id, name, email,mobile,gender,course,image,designation) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("mobile",mobile );
    localStorage.setItem("gender",gender );
    localStorage.setItem("course",course );
    localStorage.setItem("image",image );
    localStorage.setItem("designation",designation );
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            if (tabledark === "table-dark") setTableDark("");
            else setTableDark("table-dark");
          }}
        />
      </div>
      <div className="d-flex justify-content-between m-2">
        <h2>Read Operation</h2>
        <Link to="/">
          <button className="btn btn-secondary">Create</button>
        </Link>
      </div>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
          <th scope="col">Image</th>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Gender</th>
            <th scope="col">Course</th>
            
            <th scope="col">Designation</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                <td>{eachData.image}</td>
                  <th scope="row">{eachData.id}</th>
                 
                  <td>{eachData.name}</td>
                  <td><a href="">{eachData.email}</a></td>
                  <td>{eachData.mobile}</td>
                  <td>{eachData.gender}</td>
                  <td>{eachData.course}</td>
                  
                  <td>{eachData.designation}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn-success"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email,
                            eachData.mobile,
                            eachData.gender,
                            eachData.course,
                            eachData.image,
                            eachData.designation


                          )
                        }
                      >
                        Edit{" "}
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};
export default Read;