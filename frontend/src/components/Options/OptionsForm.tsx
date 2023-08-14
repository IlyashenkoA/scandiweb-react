import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { Input } from '../Input';

export const OptionsForm = () => {
  const { watch, setValue } = useFormContext();
  const productType = watch('type');

  useEffect(() => {
    setValue('parameters', {});
  }, [productType]);

  return (
    <>
      {productType === 'Furniture' ? (
        <div className='form__parameters' id='FurnitureForm'>
          <Input
            label='Height (CM)'
            type='number'
            id='height'
            name='parameters'
            registerOptions={{
              required: 'Please, submit required data',
            }}
            render={errors =>
              errors?.parameters?.height ? (
                <span className='form__error-message'>
                  {errors.parameters.height.message}
                </span>
              ) : null
            }
          />
          <Input
            label='Width (CM)'
            type='number'
            id='width'
            name='parameters'
            registerOptions={{
              required: 'Please, submit required data',
            }}
            render={errors =>
              errors?.parameters?.width ? (
                <span className='form__error-message'>
                  {errors.parameters.width.message}
                </span>
              ) : null
            }
          />
          <Input
            label='Length (CM)'
            type='number'
            id='length'
            name='parameters'
            registerOptions={{
              required: 'Please, submit required data',
            }}
            render={errors =>
              errors?.parameters?.length ? (
                <span className='form__error-message'>
                  {errors.parameters.length.message}
                </span>
              ) : null
            }
          />
        </div>
      ) : productType === 'Book' ? (
        <Input
          label='Weight (KG)'
          type='number'
          id='weight'
          name='parameters'
          registerOptions={{
            required: 'Please, submit required data',
          }}
          render={errors =>
            errors?.parameters?.weight ? (
              <span className='form__error-message'>
                {errors.parameters.weight.message}
              </span>
            ) : null
          }
        />
      ) : productType === 'DVD' ? (
        <Input
          label='Size (MB)'
          type='number'
          id='size'
          name='parameters'
          registerOptions={{
            required: 'Please, submit required data',
          }}
          render={errors =>
            errors?.parameters?.size ? (
              <span className='form__error-message'>
                {errors.parameters.size.message}
              </span>
            ) : null
          }
        />
      ) : null}
    </>
  );
};
