import axios from 'axios';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Input } from '../components/Input';
import { OptionsSelect } from '../components/Options/OptionsSelect';
import { OptionsForm } from '../components/Options/OptionsForm';

import { IFormValues } from '../lib/react-hook-form';

export const ProductsAdd = () => {
  const methods = useForm<IFormValues>({
    defaultValues: {
      sku: '',
      name: '',
      price: 0,
      type: '',
      parameters: {
        size: 0,
        height: 0,
        width: 0,
        length: 0,
        weight: 0,
      },
    },
  });

  const navigate = useNavigate();

  const {
    formState: { errors },
    handleSubmit,
  } = methods;

  const onSubmit = (data: IFormValues) => {
    axios.post(`${process.env.REACT_APP_PUBLIC_URL}`, data).then(() => {
      navigate('/');
    });
  };

  return (
    <FormProvider {...methods}>
      <form
        className='form'
        id='product_form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          id='sku'
          type='text'
          name='sku'
          label='SKU'
          registerOptions={{
            required: 'Please, submit required data',
          }}
          errors={errors}
          render={errors =>
            errors.sku ? (
              <span className='form__error-message'>{errors.sku.message}</span>
            ) : null
          }
        />
        <Input
          id='name'
          type='text'
          name='name'
          label='Name'
          registerOptions={{
            required: 'Please, submit required data',
          }}
          errors={errors}
          render={errors =>
            errors.name ? (
              <span className='form__error-message'>{errors.name.message}</span>
            ) : null
          }
        />
        <Input
          id='price'
          type='number'
          name='price'
          label='Price ($)'
          registerOptions={{
            required: 'Please, submit required data',
            pattern: {
              value: /^\d*\.?\d+$/,
              message: 'Please, provide the data of indicated type',
            },
          }}
          errors={errors}
          render={errors =>
            errors.price ? (
              <span className='form__error-message'>
                {errors.price.message}
              </span>
            ) : null
          }
        />
        <OptionsSelect errors={errors} />
        <OptionsForm />
      </form>
    </FormProvider>
  );
};
