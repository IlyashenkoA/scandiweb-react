import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';

import { IFormValues } from '../lib/react-hook-form';

type TextFieldProps<T extends keyof IFormValues> = {
  type: 'text' | 'number';
  id: string;
  name: T;
  label: string;
  registerOptions: RegisterOptions<FieldValues, string>;
  errors?: FieldErrors<IFormValues>;
  render?: (errors: FieldErrors<IFormValues>) => JSX.Element | null;
};

export const Input = <T extends keyof IFormValues>({
  type,
  id,
  name,
  registerOptions,
  errors,
  render,
  label,
}: TextFieldProps<T>) => {
  const { register } = useFormContext();

  if (type === 'number') {
    return (
      <div className='form__control'>
        <label className='form__label'>
          {label}
          <input
            type={type}
            id={id}
            {...register(
              name === 'parameters' ? `parameters.${id}` : name,
              registerOptions
            )}
            min='0'
            step='0.01'
          />
        </label>
        {errors && render ? render(errors) : null}
      </div>
    );
  }

  return (
    <div className='form__control'>
      <label className='form__label'>
        {label}
        <input type={type} id={id} {...register(name, registerOptions)} />
      </label>
      {errors && render ? render(errors) : null}
    </div>
  );
};
