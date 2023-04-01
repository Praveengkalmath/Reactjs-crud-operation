import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [designation, setDesignation] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [image, setImage] = useState("");
  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clciekd");
    axios
      .post("https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube", {
        name: name,
        email: email,
        mobile:mobile,
        designation:designation,
        gender:gender,
        course:course,
        image:image
      })
      .then(() => {
        history("/read");
      });
  };
  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <h2>Create</h2>
        <Link to="/read">
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        
        <div className="mb-3">
          <label className="form-label">Mobile no</label>
          <input type="number" className="form-control" onChange={(e) => setMobile(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <input type="text" className="form-control" onChange={(e) => setGender(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Course</label>
          <input type="text" className="form-control" onChange={(e) => setCourse(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input type="img" className="form-control" onChange={(e) => setImage(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Designation</label>
          <input type="text" className="form-control" onChange={(e) => setDesignation(e.target.value)}/>
          

    <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      Designation
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">HR</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Sales</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Manager</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
        
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};
export default Create