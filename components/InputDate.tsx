import { Control, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FieldError, RegisterOptions } from 'react-hook-form';
import { addMessageToRegisterOptions } from '../utils/addMessageToRegisterOptions';
import { FormScheme } from './Form';
import { InputWrapper } from './InputWrapper';
import { formatDateToString } from '../utils/formatDateToString';

/**
 * the props type of InputDate component
 */
type props<formScheme> = {
  name: keyof formScheme;
  label: string;
  error: FieldError | undefined;
  control: Control<FormScheme, object>;
  registerOptions?: RegisterOptions;
  datePickerRules?: { [Key: string]: any };
};

/**
 * the Inputdate component, give an input type text with a customised datepicker, is wrapped in InputWrapper component
 */
export const InputDate = ({
  name,
  label,
  error,
  control,
  registerOptions,
  datePickerRules,
}: props<FormScheme>): React.ReactElement => (
  <InputWrapper name={name} label={label} error={error}>
    <Controller
      control={control}
      name={name}
      rules={addMessageToRegisterOptions(registerOptions, label)}
      render={({ field: { onChange, value } }) => (
        <DatePicker
          id={name}
          dateFormat="MM/dd/yyyy"
          onChange={(e) => onChange(formatDateToString(e as Date | null))}
          selected={value ? new Date(value) : null}
          placeholderText="mm/dd/yyyy"
          {...datePickerRules}
        />
      )}
    />
  </InputWrapper>
);
