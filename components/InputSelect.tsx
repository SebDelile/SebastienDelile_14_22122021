import { Control, Controller } from 'react-hook-form';
import { FieldError, RegisterOptions } from 'react-hook-form';
import { addMessageToRegisterOptions } from '../utils/addMessageToRegisterOptions';
import { FormScheme } from './Form';
import { InputWrapper } from './InputWrapper';
import Select, { GroupBase, StylesConfig } from 'react-select';

type Option = { label: string | undefined; value: string | number };

type props<formScheme> = {
  name: keyof formScheme;
  label: string;
  error: FieldError | undefined;
  control: Control<FormScheme, object>;
  registerOptions?: RegisterOptions;
  options: Option[];
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
          className="w-full"
          styles={selectCustomStyle}
        />
      )}
    />
  </InputWrapper>
);

const gray = 'rgb(75 85 99)';
const blue = 'rgb(59 130 246)';
const primary = '#596E07';

const selectCustomStyle: StylesConfig<Option, false, GroupBase<Option>> = {
  control: (provided: { [Key: string]: any }, state) => ({
    ...provided,
    color: state.isFocused ? blue : gray,
    borderColor: state.isFocused ? blue : gray,
    outline: state.isFocused ? `${blue} solid 1px` : 'none',
    '&:hover': {
      borderColor: blue,
    },
    padding: '0.5rem',
    minHeight: 'none',
  }),
  indicatorsContainer: (provided: { [Key: string]: any }, state) => ({
    ...provided,
    color: 'inherit',
    padding: '0 0 0 8px',
  }),
  indicatorSeparator: (provided: { [Key: string]: any }, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? blue : gray,
    margin: '0',
  }),
  dropdownIndicator: (provided: { [Key: string]: any }, state) => ({
    ...provided,
    color: 'inherit',
    '&:hover': {},
    padding: '0 0 0 0.5rem',
  }),
  valueContainer: (provided: { [Key: string]: any }, state) => ({
    ...provided,
    padding: '0',
  }),
  input: (provided: { [Key: string]: any }, state) => ({
    ...provided,
    padding: '0',
    margin: '0',
  }),
  option: (provided: { [Key: string]: any }, state) => ({
    ...provided,
    backgroundColor:
      state.isFocused && state.isSelected
        ? '#7dd3fc'
        : state.isSelected
        ? '#596E07'
        : state.isFocused
        ? '#e0f2fe'
        : 'none',
    color: state.isSelected && !state.isFocused ? 'white' : 'black',
  }),
};
