import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { InputWrapper } from './InputWrapper';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { formatDateToString } from '../utils/formatDateToString';
import { dateBasicMath } from '../utils/dateBasicMath';

type FormScheme = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  street: string;
  city: string;
  zipCode: number;
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

      <button type="submit">Save</button>
    </form>
  );
};
