import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submittedData, setSubmittedData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({ firstName: "", lastName: "", email: "" });
    alert("Form submitted!");
  };

  const handleCheckboxChange = (index) => {
    const selectedIndex = selectedData.indexOf(index);
    if (selectedIndex === -1) {
      setSelectedData([...selectedData, index]);
    } else {
      const updatedSelectedData = [...selectedData];
      updatedSelectedData.splice(selectedIndex, 1);
      setSelectedData(updatedSelectedData);
    }
  };

  const handleDeleteSelected = () => {
    const updatedData = submittedData.filter(
      (_, index) => !selectedData.includes(index)
    );
    setSubmittedData(updatedData);
    setSelectedData([]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
        </label>
        <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        required
        />
        <br />
        <label>
          Last Name:
        </label>
        <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        required
        />
        <br />
        <label>
          Email:
        </label>
        <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      <h3>Submitted Data</h3>
      <ul>
        {submittedData.map((data, index) => (
          <li key={index}>
            {data.firstName} {data.lastName} - {data.email}
            <input
              type="checkbox"
              checked={selectedData.includes(index)}
              onChange={() => handleCheckboxChange(index)}
            />
            <label htmlFor="">Delete</label>
          </li>
        ))}
      </ul>

      <button
        onClick={handleDeleteSelected}
        disabled={selectedData.length === 0}
      >
        Delete Selected
      </button>
    </div>
  );
};

export default ContactForm;
