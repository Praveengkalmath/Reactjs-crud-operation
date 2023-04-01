import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [designation, setDesignation] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setMobile(localStorage.getItem("mobile"));
    setDesignation(localStorage.getItem("designation"));
    setGender(localStorage.getItem("gender"));
    setCourse(localStorage.getItem("course"));
    setImage(localStorage.getItem("image"));
  }, []);
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", id);
    axios
      .put(`https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube/${id}`, {
        name: name,
        email: email,
        mobile:mobile,
        designation:designation,
        gender:gender,
        course:course,
        image:image,
      })
      .then(() => {
        navigate("/read");
      });
  };
  return (
    <>
      <h2>Update</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mobile no</label>
          <input type="number" className="form-control" value={mobile} onChange={(e) => setMobile(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <input type="text" className="form-control" value={gender} onChange={(e) => setGender(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Course</label>
          <input type="text" className="form-control" value={course} onChange={(e) => setCourse(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input type="img" className="form-control" value={image} onChange={(e) => setImage(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Designation</label>
          <input type="text" className="form-control" value={designation} onChange={(e) => setDesignation(e.target.value)}/>
        </div>
        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleUpdate}
        >
          Update
        </button>
        <Link to="/read">
          <button className="btn btn-secondary mx-2"> Back </button>
        </Link>
      </form>
    </>
  );
};
export default Update;