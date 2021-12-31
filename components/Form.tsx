import { useForm, SubmitHandler } from 'react-hook-form';
import { dateBasicMath } from '../utils/dateBasicMath';
import { US_STATES } from '../utils/US_STATES';
import { DEPARTMENTS } from '../utils/DEPARTMENTS';
import { InputText } from './InputText';
import { InputDate } from './InputDate';
import { InputSelect } from './InputSelect';
import { InputNumber } from './InputNumber';
import { useGlobalContext } from '../utils/GlobalContext';
import { useState } from 'react';
import { Modal } from './Modal';

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
  const { employeeList, addEmployee } = useGlobalContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const openModal = (message: string): void => {
    setModalMessage(message);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setModalMessage('');
    setIsModalOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormScheme>();

  const onSubmit: SubmitHandler<FormScheme> = (data) => {
    const isEmployeeExists = employeeList.some((employee) =>
      Object.keys(data).every(
        (key) => employee[key] === data[key as keyof FormScheme]
      )
    );
    if (isEmployeeExists) openModal('Error : employee already exists !');
    else {
      addEmployee(data);
      openModal('Employee created !');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Create employee</h2>
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

      <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
        <p>{modalMessage}</p>
      </Modal>
    </form>
  );
};
