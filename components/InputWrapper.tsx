import { FieldError } from 'react-hook-form';

/**
 * The prop types of InputWrapper component
 */
type props = {
  children: React.ReactElement | React.ReactElement[];
  name: string;
  label: string;
  error: FieldError | undefined;
};

/**
 * The InputWrapper component, contains a label, the children (ie. input) and a span wih absolute position for error message
 */
export const InputWrapper = ({ children, name, label, error }: props) => {
  return (
    <div className="m-2 mb-5 w-full flex flex-col justify-start items-start relative">
      <label htmlFor={name}>{label}</label>
      {children}
      {error && (
        <span className="text-red-600 ml-4 text-sm absolute top-full">
          {error.message || 'Invalid field'}
        </span>
      )}
    </div>
  );
};
