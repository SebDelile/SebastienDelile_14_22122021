import { useState } from 'react';

type props = { name: string; label: string; required?: boolean };

export const InputText = ({
  name,
  label,
  required,
}: props): React.ReactElement => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor={`formId-${name}`}>{label}</label>
      <input
        type="text"
        name={name}
        id={`formId-${name}`}
        value={value}
        onChange={handleChange}
        required={required ? true : undefined}
      />
    </div>
  );
};
