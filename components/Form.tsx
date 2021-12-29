import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { InputWrapper } from './InputWrapper';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import { formatDateToString } from '../utils/formatDateToString';
import { dateBasicMath } from '../utils/dateBasicMath';
import { US_STATES } from '../utils/US_STATES';
import { DEPARTMENTS } from '../utils/DEPARTMENTS';

type FormScheme = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  street: string;
  city: string;
  zipCode: number;
  state: string;
  department: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormScheme>();

  const onSubmit: SubmitHandler<FormScheme> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper
        name="firstName"
        label="First Name"
        error={errors.firstName}
      >
        <input
          type="text"
          {...register('firstName', {
            required: 'Please provide a first name',
            minLength: {
              value: 2,
              message: 'Min length is 2 char',
            },
          })}
        />
      </InputWrapper>

      <InputWrapper name="lastName" label="Last Name" error={errors.lastName}>
        <input
          type="text"
          {...register('lastName', {
            required: 'Please provide a last name',
            minLength: {
              value: 2,
              message: 'Min length is 2 char',
            },
          })}
        />
      </InputWrapper>

      <InputWrapper
        name="dateOfBirth"
        label="Date of Birth"
        error={errors.dateOfBirth}
      >
        <Controller
          control={control}
          name="dateOfBirth"
          rules={{
            required: 'Please provide a date of birth',
            validate: (date) =>
              new Date(date) <= dateBasicMath(new Date(), { y: -14 }) ||
              'Employee must be more than 14',
          }}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              onChange={(e) => onChange(formatDateToString(e as Date | null))}
              selected={value ? new Date(value) : null}
              placeholderText="mm/dd/yyyy"
              maxDate={new Date()}
              yearDropdownItemNumber={100}
              showYearDropdown
              scrollableYearDropdown
            />
          )}
        />
      </InputWrapper>

      <InputWrapper
        name="startDate"
        label="Start Date"
        error={errors.startDate}
      >
        <Controller
          control={control}
          name="startDate"
          rules={{
            required: 'Please provide a start date',
          }}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              onChange={(e) => onChange(formatDateToString(e as Date | null))}
              selected={value ? new Date(value) : null}
              placeholderText="mm/dd/yyyy"
            />
          )}
        />
      </InputWrapper>

      <fieldset>
        <legend>Address</legend>
        <InputWrapper name="street" label="Street" error={errors.street}>
          <input
            type="text"
            {...register('street', {
              required: 'Please provide a street',
            })}
          />
        </InputWrapper>

        <InputWrapper name="city" label="City" error={errors.city}>
          <input
            type="text"
            {...register('city', {
              required: 'Please provide a city',
            })}
          />
        </InputWrapper>

        <InputWrapper name="state" label="State" error={errors.state}>
          <Controller
            control={control}
            name="state"
            rules={{
              required: 'Please select a state',
            }}
            render={({ field: { onChange, value } }) => (
              <Select
                onChange={(e) => onChange(e?.value)}
                value={{
                  value: value,
                  label: US_STATES.find((state) => value === state.value)
                    ?.label,
                }}
                options={US_STATES}
                instanceId="select-state"
              />
            )}
          />
        </InputWrapper>

        <InputWrapper name="zipCode" label="ZIP Code" error={errors.zipCode}>
          <input
            type="number"
            {...register('zipCode', {
              required: 'Please provide a ZIP code',
              min: {
                value: 1,
                message: 'Please provide a valid ZIP code',
              },
              max: {
                value: 99999,
                message: 'Please provide a valid ZIP code',
              },
            })}
          />
        </InputWrapper>
      </fieldset>

      <InputWrapper
        name="department"
        label="Department"
        error={errors.department}
      >
        <Controller
          control={control}
          name="department"
          rules={{
            required: 'Please select a department',
          }}
          render={({ field: { onChange, value } }) => (
            <Select
              onChange={(e) => onChange(e?.value)}
              value={{
                value: value,
                label: value,
              }}
              options={DEPARTMENTS}
              instanceId="select-department"
            />
          )}
        />
      </InputWrapper>

      <button type="submit">Save</button>
    </form>
  );
};
