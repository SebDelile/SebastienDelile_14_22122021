import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { InputWrapper } from './InputWrapper';

type FormScheme = {
  firstName: string;
  lastName: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormScheme>();

  const onSubmit: SubmitHandler<FormScheme> = (data) => console.log(data);

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
      <button type="submit">Save</button>
    </form>
  );
};
