import React, { useState } from 'react';
import './index.css';

const AddTimeZone = ({ onAdd }) => {
  const [newTimeZone, setNewTimeZone] = useState('');

  const handleAddClick = () => {
    if (newTimeZone) {
      onAdd(newTimeZone);
      setNewTimeZone('');
    }
  };

  return (
    <div className="add-timezone">
      <input
        type="text"
        value={newTimeZone}
        onChange={(e) => setNewTimeZone(e.target.value)}
        placeholder="Add a time zone"
      />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
};

export default AddTimeZone;
