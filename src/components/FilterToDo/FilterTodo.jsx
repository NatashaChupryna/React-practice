import React from 'react';

export const Filter = function ({ filter, onChange }) {
  return (
    <label>
      Find task :
      <input type="text" name={filter} onChange={onChange} />
    </label>
  );
};
