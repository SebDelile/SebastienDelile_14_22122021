import { FieldError } from 'react-hook-form';

type props = {
  children: React.ReactElement | React.ReactElement[];
  name: string;
  label: string;
  error: FieldError | undefined;
};

export const InputWrapper = ({ children, name, label, error }: props) => {
  return (
    <div className="m-2 mb-5 w-full flex flex-col justify-start items-start relative">
      <label htmlFor={name}>{label}</label>
      {children}
      {error && (
        <span className="text-red-600 text-sm absolute top-full">
          {error.message || 'Invalid field'}
        </span>
      )}
    </div>
  );
};
