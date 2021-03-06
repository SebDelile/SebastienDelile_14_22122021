import { FieldError, UseFormRegister, RegisterOptions } from 'react-hook-form';
import { addMessageToRegisterOptions } from '../utils/addMessageToRegisterOptions';
import { FormScheme } from './Form';
import { InputWrapper } from './InputWrapper';

/**
 * The prop types of InputNumber component
 */
type props<formScheme> = {
  name: keyof formScheme;
  label: string;
  error: FieldError | undefined;
  register: UseFormRegister<formScheme>;
  registerOptions?: RegisterOptions;
};

/**
 * The InputNumber component, contains a html tag input type number, is wrapped in InputWrapper component
 */
export const InputNumber = ({
  name,
  label,
  error,
  register,
  registerOptions,
}: props<FormScheme>): React.ReactElement => (
  <InputWrapper name={name} label={label} error={error}>
    <input
      type="number"
      id={name}
      {...register(name, addMessageToRegisterOptions(registerOptions, label))}
    />
  </InputWrapper>
);

export default InputNumber;
