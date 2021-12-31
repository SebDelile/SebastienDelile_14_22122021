import { FieldError } from 'react-hook-form';

type props = {
  children: React.ReactElement | React.ReactElement[];
  name: string;
  label: string;
  error: FieldError | undefined;
};

export const InputWrapper = ({ children, name, label, error }: props) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {children}
      {error && <span>{error.message || 'Invalid field'}</span>}
    </div>
  );
};
