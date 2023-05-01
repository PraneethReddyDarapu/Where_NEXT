import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function AddHangout(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const HandleSave = (data) => {
    console.log(data);
    axios
      .post(`${process.env.REACT_APP_API_URL}/hangout`, {
        user_id: localStorage.getItem("user_id"),
        title: data.title,
        description: data.description,
      })
      .then((res) => {
        reset();
        props.getData();
        handleClose();
      });
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        New Hangout
      </Button>

      <form onSubmit={handleSubmit(HandleSave)}>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Hangout</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* title */}
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter title"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <small className="form-text text-danger">
                  Title is required
                </small>
              )}
            </div>

            {/* description */}
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                placeholder="Enter description"
                {...register("description", { required: true })}
              />
              {errors.description && (
                <small className="form-text text-danger">
                  Description is required
                </small>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} type="button">
              Close
            </Button>
            <button
              className="btn btn-dark"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                HandleSave(watch());
              }}
            >
              Save Changes
            </button>
          </Modal.Footer>
        </Modal>
      </form>
    </>
  );
}
