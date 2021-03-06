import { useForm, SubmitHandler } from 'react-hook-form';
import { dateBasicMath } from '../utils/dateBasicMath';
import { useGlobalContext } from '../utils/GlobalContext';
import { useState } from 'react';
import { US_STATES } from '../data/US_STATES';
import { DEPARTMENTS } from '../data/DEPARTMENTS';
import dynamic from 'next/dynamic';

const InputDate = dynamic(() => import('./InputDate'));
const InputSelect = dynamic(() => import('./InputSelect'));
const InputNumber = dynamic(() => import('./InputNumber'));
const InputText = dynamic(() => import('./InputText'));
const Modal = dynamic(() => import('./Modal'));

/**
 * the shape of the submitted form, useful to type the form elements
 */
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

/**
 * the Form component, contains all form fields, the submission button (and method) and the modal (from react-modal libary)
 */
export const Form = () => {
  const { employeeList, addEmployee } = useGlobalContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  /**
   * the method to open the modal and set a message into it (success or failure)
   */
  const openModal = (message: string): void => {
    setModalMessage(message);
    setIsModalOpen(true);
  };

  /**
   * the method to close the modal and reset the message
   */
  const closeModal = (): void => {
    setModalMessage('');
    setIsModalOpen(false);
  };

  /**
   * react-hook-form initialisation
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormScheme>();

  /**
   * the method to submit the form data. Check first if employee already exist in contect, and if not add it.In both cse it opens the modal
   */
  const onSubmit: SubmitHandler<FormScheme> = (data) => {
    const isEmployeeExists = employeeList.some((employee) =>
      Object.keys(data).every(
        (key) => employee[key] === data[key as keyof FormScheme]
      )
    );
    if (isEmployeeExists) openModal('Employee already exists !');
    else {
      addEmployee(data);
      openModal('Employee created !');
    }
  };

  return (
    <form
      className="flex flex-col justify-start items-center w-4/5 mx-auto sm:w-full sm:mx-0 max-w-lg my-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-3xl font-bold text-center mb-3">Create employee</h2>
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

      <fieldset className="w-full px-3 pb-3 mt-3 border border-gray-600 rounded-lg flex flex-col justify-start items-center">
        <legend className="ml-4 px-1 text-lg">Address</legend>
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

      <button type="submit" className="button my-4 text-xl">
        Save
      </button>

      <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
        <p>{modalMessage}</p>
      </Modal>
    </form>
  );
};
