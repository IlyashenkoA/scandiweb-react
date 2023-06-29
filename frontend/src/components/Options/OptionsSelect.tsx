import { FieldErrors, useFormContext } from 'react-hook-form';
import { IFormValues } from '../../lib/react-hook-form';

type SelectProps = {
  errors?: FieldErrors<IFormValues>;
};

export const OptionsSelect = ({ errors }: SelectProps) => {
  const { register } = useFormContext();

  return (
    <div className='form__control'>
      <label>
        Type Switcher
        <select
          id='productType'
          {...register('type', {
            required: 'Please, submit required data',
          })}
        >
          <option id='DVD' value='DVD'>
            DVD
          </option>
          <option id='Furniture' value='Furniture'>
            Furniture
          </option>
          <option id='Book' value='Book'>
            Book
          </option>
        </select>
      </label>
      {errors?.type && (
        <span className='form__error-message'>{errors.type.message}</span>
      )}
    </div>
  );
};
