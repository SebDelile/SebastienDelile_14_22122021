import { useForm, SubmitHandler } from 'react-hook-form';
import { dateBasicMath } from '../utils/dateBasicMath';
import { US_STATES } from '../utils/US_STATES';
import { DEPARTMENTS } from '../utils/DEPARTMENTS';
import { InputText } from './InputText';
import { InputDate } from './InputDate';
import { InputSelect } from './InputSelect';
import { InputNumber } from './InputNumber';
import { useGlobalContext } from '../utils/GlobalContext';

export type FormScheme = {
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
      <InputText
        name="firstName"
        label="First Name"
        error={errors.firstName}
        register={register}
        registerOptions={{ required: true, minLength: 2 }}
      />

      <InputText
        name="lastName"
        label="Last Name"
        error={errors.lastName}
        register={register}
        registerOptions={{ required: true, minLength: 2 }}
      />

      <InputDate
        name="dateOfBirth"
        label="Date of Birth"
        error={errors.dateOfBirth}
        control={control}
        registerOptions={{
          required: true,
          validate: (date) =>
            new Date(date) <= dateBasicMath(new Date(), { y: -14 }) ||
            'Employee must be more than 14',
        }}
        datePickerRules={{
          maxDate: new Date(),
          yearDropdownItemNumber: 100,
          showYearDropdown: true,
          scrollableYearDropdown: true,
        }}
      />

      <InputDate
        name="startDate"
        label="Start Date"
        error={errors.startDate}
        control={control}
        registerOptions={{ required: true }}
      />

      <fieldset>
        <legend>Address</legend>
        <InputText
          name="street"
          label="Street"
          error={errors.street}
          register={register}
          registerOptions={{ required: true }}
        />

        <InputText
          name="city"
          label="City"
          error={errors.city}
          register={register}
          registerOptions={{ required: true }}
        />

        <InputSelect
          name="state"
          label="State"
          error={errors.state}
          control={control}
          registerOptions={{ required: true }}
          options={US_STATES}
        />

        <InputNumber
          name="zipCode"
          label="ZIP Code"
          error={errors.zipCode}
          register={register}
          registerOptions={{ required: true, min: 1, max: 99999 }}
        />
      </fieldset>

      <InputSelect
        name="department"
        label="Department"
        error={errors.department}
        control={control}
        registerOptions={{ required: true }}
        options={DEPARTMENTS}
      />

      <button type="submit">Save</button>
    </form>
  );
};
