import React, { useState } from "react";
import Modal from "./Modal";

function UserCard({ user }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFetchDetails = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="user-card">
      <img src="https://via.placeholder.com/150" alt="User" />
      <h3>{`${user.first_name} ${user.last_name}`}</h3>
      <p>{user.city}</p>
      <p>{user.contact_number}</p>
      <button onClick={handleFetchDetails}>Fetch Details</button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>Fetch Details</h2>
          <p>
            Name: {user.first_name} {user.last_name}
          </p>
          <p>Location: {user.city}</p>
          <p>Contact Number: {user.contact_number}</p>
          <img src="https://via.placeholder.com/150" alt="User" />
        </Modal>
      )}
    </div>
  );
}

export default UserCard;
