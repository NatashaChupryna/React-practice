
import React from 'react';
import {Input, Label} from './FilterToDo.styled'

export const Filter = function ({ filter, onChange }) {
  return (
    <Label>
      Find task : 
      <Input type="text" name={filter} onChange={onChange} />
    </Label>
  );
};
