import { RegisterOptions } from 'react-hook-form';
import { isBeginingWithVowel } from './isBeginingWithVowel';
import { labelWithAdaptedCase } from './labelWithadaptedCase';

export const addMessageToRegisterOptions = (
  registerOptions: RegisterOptions | undefined,
  label: string
) => {
  const EnhancedRegisterOptions = {} as RegisterOptions;
  if (registerOptions && registerOptions.required)
    EnhancedRegisterOptions.required = `Please provide a${
      isBeginingWithVowel(label) ? 'n' : ''
    } ${labelWithAdaptedCase(label)}`;
  if (registerOptions && registerOptions.minLength)
    EnhancedRegisterOptions.minLength = {
      value: registerOptions.minLength as number,
      message: `Min length is ${registerOptions.minLength} chars`,
    };
  if (registerOptions && registerOptions.maxLength)
    EnhancedRegisterOptions.maxLength = {
      value: registerOptions.maxLength as number,
      message: `Max length is ${registerOptions.maxLength} chars`,
    };
  if (registerOptions && registerOptions.min)
    EnhancedRegisterOptions.min = {
      value: registerOptions.min as number,
      message: `Please provide a valid ${labelWithAdaptedCase(label)}`,
    };
  if (registerOptions && registerOptions.max)
    EnhancedRegisterOptions.max = {
      value: registerOptions.max as number,
      message: `Please provide a valid ${labelWithAdaptedCase(label)}`,
    };
  if (registerOptions && registerOptions.validate)
    EnhancedRegisterOptions.validate = registerOptions.validate;

  return EnhancedRegisterOptions;
};
