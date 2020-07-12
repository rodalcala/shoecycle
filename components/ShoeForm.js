import { useMutation } from '@apollo/react-hooks';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import gql from 'graphql-tag';

const ADD_SHOE = gql`
  mutation addShoe($shoe: ShoeInput) {
    addShoe(shoe: $shoe) {
      success
      message
      shoe {
        _id
      }
    }
  }
`;

const sizeOptions = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13];
const kilometersOptions = [0, 5, 10, 15, 20, 30, 40, 50, 70, 90, 120, 150, 199, 200];

const ShoeForm = () => {
  const [addShoe] = useMutation(ADD_SHOE);

  const formik = useFormik({
    initialValues: {
      email: '',
      brand: '',
      model: '',
      size: 8,
      isFemaleShoe: false,
      isTrailShoe: false,
      kilometers: 0,
      country: '',
      city: '',
      ships: true,
      intShipping: true,
      paidShipping: true,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      brand: Yup.string().required('Required'),
      model: Yup.string().required('Required'),
      country: Yup.string().required('Required'),
      size: Yup.number().required('Required'),
      kilometers: Yup.number().required('Required'),
    }),
    onSubmit: (values) => {
      addShoe({
        variables: {
          shoe: {
            ...values,
            size: parseFloat(values.size),
            kilometers: parseFloat(values.kilometers),
          }
        }
      });
    },
  });

  const _renderError = (id) => formik.touched[id] && formik.errors[id]
    ? <div>{formik.errors[id]}</div>
    : null;

  return (
    <form onSubmit={formik.handleSubmit}>

      <label htmlFor='email'>e-mail address</label>
      <input name='email' {...formik.getFieldProps('email')} />
      {_renderError('email')}

      <label htmlFor='brand'>brand</label>
      <input name='brand' {...formik.getFieldProps('brand')} />
      {_renderError('brand')}

      <label htmlFor='model'>model</label>
      <input name='model' {...formik.getFieldProps('model')} />
      {_renderError('model')}

      <label htmlFor='size'>size</label>
      <select id='size' {...formik.getFieldProps('size')}>
        {sizeOptions.map(size => <option key={size} value={size}>{size}</option>)}
      </select>
      {_renderError('size')}

      <label htmlFor='isFemaleShoe'>female</label>
      <input name='isFemaleShoe' {...formik.getFieldProps('isFemaleShoe')} type='checkbox' />

      <label htmlFor='isTrailShoe'>trail shoe</label>
      <input name='isTrailShoe' {...formik.getFieldProps('isTrailShoe')} type='checkbox' />

      <label htmlFor='kilometers'>kilometers</label>
      <select name='kilometers' {...formik.getFieldProps('kilometers')}>
        {kilometersOptions.map(kilometers => {
          if (kilometers === 0) return <option key={kilometers} value={kilometers}>new</option>
          if (kilometers === 200) return <option key={kilometers} value={kilometers}>{`>${kilometers}`}</option>
          return <option key={kilometers} value={kilometers}>{`<${kilometers}`}</option>;
        })}
      </select>
      {_renderError('kilometers')}

      <label htmlFor='country'>country</label>
      <input name='country' {...formik.getFieldProps('country')} />
      {_renderError('country')}

      <label htmlFor='city'>city</label>
      <input name='city' {...formik.getFieldProps('city')} />

      <label htmlFor='ships'>ships?</label>
      <input name='ships' {...formik.getFieldProps('ships')} type='checkbox' />

      <label htmlFor='intShipping'>ships internationally?</label>
      <input name='intShipping' {...formik.getFieldProps('intShipping')} type='checkbox' />

      <label htmlFor='paidShipping'>paid shipping?</label>
      <input name='paidShipping' {...formik.getFieldProps('paidShipping')} type='checkbox' />

      <button type='submit'>Submit</button>

    </form>
  );
};

export default ShoeForm;
