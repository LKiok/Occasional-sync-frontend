import React, { useState } from "react";
import { useFormik } from "formik";
import "../Css/EventCreation.css";
import * as Yup from "yup"; 
import SweetAlert2 from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function EventCreation() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Custom date validation function
  function isValidDateFormat(value) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(value);
  }

  // Define the validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Event Name is required"),
    date: Yup.string()
      .required("Event Date is required")
      .test(
        "isValidDateFormat",
        "Invalid date format (YYYY-MM-DD)",
        isValidDateFormat
      ),
    location: Yup.string().required("Event Location is required"),
    description: Yup.string().required("Event Description is required"),
    capacity: Yup.number()
      .required("Event Capacity is required (minimum 1)")
      .min(1, "Capacity must be at least 1")
      .integer("Capacity must be an integer"),
    poster: Yup.string().url("Invalid URL format for Event Poster"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      date: "",
      location: "",
      description: "",
      capacity: "",
      poster: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        // Convert the date to a string if it's a Date object
        if (values.date instanceof Date) {
          values.date = values.date.toISOString().split("T")[0];
        }

        // Retrieve the access token from localStorage
        const accessToken = localStorage.getItem("accessToken");

        const response = await fetch(
          "https://event-hub-huwl.onrender.com/events",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // Include the access token in the Authorization header
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(values),
          }
        );

        if (response.ok) {
          const eventData = await response.json();
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
            SweetAlert2.fire({
              title: "Success!",
              text: "Event created successfully",
              icon: "success",
              confirmButtonText: "OK",
              confirmButtonColor: "#f1cc17",
            });
            navigate("/events");
          }, 2000);
        } else {
          const errorData = await response.json();
          // Handle error responses and setErrors accordingly
          setErrors(errorData.message);
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    },
  });

  return (
    <>
      <div className="createEventDiv">
        <h1>Create Event</h1>
        <form onSubmit={formik.handleSubmit}>
          {/* Event Name */}
          <label htmlFor="name">Event Name</label>
          <input
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error-message">{formik.errors.name}</div>
          ) : null}

          {/* Event Date */}
          <label htmlFor="date">Event Date</label>
          <input
            id="date"
            name="date"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.date}
          />
          {formik.touched.date && formik.errors.date ? (
            <div className="error-message">{formik.errors.date}</div>
          ) : null}

          {/* Event Location */}
          <label htmlFor="location">Event Location</label>
          <input
            id="location"
            name="location"
            onChange={formik.handleChange}
            value={formik.values.location}
          />
          {formik.touched.location && formik.errors.location ? (
            <div className="error-message">{formik.errors.location}</div>
          ) : null}

          {/* Event Description */}
          <label htmlFor="description">Event Description</label>
          <textarea
            id="description"
            name="description"
            className="description-textarea" 
            onChange={formik.handleChange}
            value={formik.values.description}
          />

          {/* Event Capacity */}
          <label htmlFor="capacity">Event Capacity</label>
          <input
            id="capacity"
            name="capacity"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.capacity}
          />
          {formik.touched.capacity && formik.errors.capacity ? (
            <div className="error-message">{formik.errors.capacity}</div>
          ) : null}

          {/* Event Poster URL */}
          <label htmlFor="poster">Event Poster URL</label>
          <input
            id="poster"
            name="poster"
            onChange={formik.handleChange}
            value={formik.values.poster}
          />

          {isLoading ? (
            <Spinner />
          ) : (
            <button type="submit">Create Event</button>
          )}
        </form>
        {Object.keys(errors).length > 0 && (
          <p className="error-message">{errors}</p>
        )}
      </div>
    </>
  );
}
