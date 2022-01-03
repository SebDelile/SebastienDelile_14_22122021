import { Control, Controller } from 'react-hook-form';
import { FieldError, RegisterOptions } from 'react-hook-form';
import { addMessageToRegisterOptions } from '../utils/addMessageToRegisterOptions';
import { FormScheme } from './Form';
import { InputWrapper } from './InputWrapper';
import Select from 'react-select';

type props<formScheme> = {
  name: keyof formScheme;
  label: string;
  error: FieldError | undefined;
  control: Control<FormScheme, object>;
  registerOptions?: RegisterOptions;
  options: { label: string; value: string }[];
};

export const InputSelect = ({
  name,
  label,
  error,
  control,
  registerOptions,
  options,
}: props<FormScheme>): React.ReactElement => (
  <InputWrapper name={name} label={label} error={error}>
    <Controller
      control={control}
      name={name}
      rules={addMessageToRegisterOptions(registerOptions, label)}
      render={({ field: { onChange, value } }) => (
        <Select
          inputId={name}
          onChange={(option) => onChange(option?.value)}
          value={{
            value: value,
            label: options.find((option) => value === option.value)?.label,
          }}
          options={options}
          instanceId={`select-${name}`}
        />
      )}
    />
  </InputWrapper>
);
