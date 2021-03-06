import { FieldError, UseFormRegister, RegisterOptions } from 'react-hook-form';
import { addMessageToRegisterOptions } from '../utils/addMessageToRegisterOptions';
import { FormScheme } from './Form';
import { InputWrapper } from './InputWrapper';

/**
 * The prop types of InputText component
 */
type props<formScheme> = {
  name: keyof formScheme;
  label: string;
  error: FieldError | undefined;
  register: UseFormRegister<formScheme>;
  registerOptions?: RegisterOptions;
};

/**
 * The InputText component, contains a html tag input type text, is wrapped in InputWrapper component
 */
export const InputText = ({
  name,
  label,
  error,
  register,
  registerOptions,
}: props<FormScheme>): React.ReactElement => (
  <InputWrapper name={name} label={label} error={error}>
    <input
      type="text"
      id={name}
      {...register(name, addMessageToRegisterOptions(registerOptions, label))}
    />
  </InputWrapper>
);

export default InputText;
