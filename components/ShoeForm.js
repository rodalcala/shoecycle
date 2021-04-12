import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import Button from './styled/Button';
import Loader from './styled/Loader';

const sizeOptions = [
  6,
  6.5,
  7,
  7.5,
  8,
  8.5,
  9,
  9.5,
  10,
  10.5,
  11,
  11.5,
  12,
  12.5,
  13,
];
const kilometersOptions = [
  0,
  5,
  10,
  15,
  20,
  30,
  40,
  50,
  70,
  90,
  120,
  150,
  199,
  200,
];

const Form = styled.form`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Field = styled.div`
  margin-bottom: 0.6em;

  > input {
    padding: 0.3em;
    vertical-align: middle;
    border: none;
    border-radius: 0.1em;
    background-color: ${(props) => props.theme.colours.white};
  }

  > input:focus {
    outline: none;
    outline-offset: none;
    box-shadow: inset 0 0 0.3em ${(props) => props.theme.colours.primary};
    -moz-box-shadow: inset 0 0 0.3em ${(props) => props.theme.colours.primary};
    -webkit-box-shadow: inset 0 0 0.3em
      ${(props) => props.theme.colours.primary};
  }

  > input[type='text'] {
    width: 18em;
    max-width: 65vw;
  }

  > input[type='checkbox'] {
    -webkit-appearance: none;
    width: 0.9em;
    height: 0.9em;
    background-color: ${(props) => props.theme.colours.white};
    border-radius: 0.2em;
    margin-right: 0.1em;
  }

  > input[type='checkbox']:checked {
    background: ${(props) => props.theme.colours.secondary};
  }

  > input[type='checkbox']:disabled {
    background-color: ${(props) =>
      props.disabled ? props.theme.colours.disabled : null};
  }

  > select {
    padding: 0.15em;
    border: none;
    border-radius: 0.1em;
    background-color: ${(props) => props.theme.colours.white};
    margin-right: 0.2em;
  }

  > select:focus {
    outline: none;
    outline-offset: none;
    box-shadow: inset 0 0 0.3em ${(props) => props.theme.colours.primary};
  }

  > label {
    vertical-align: middle;
    margin-left: 0.2em;
    color: ${(props) => (props.disabled ? props.theme.colours.disabled : null)};
  }
`;

const ShoeForm = ({ handleSubmit, mutationData }) => {
  const formik = useFormik({
    initialValues: {
      ownerName: '',
      email: '',
      brand: '',
      model: '',
      size: 8,
      isFemaleShoe: false,
      isTrailShoe: false,
      kilometers: 0,
      country: '',
      city: '',
      ships: false,
      intShipping: false,
      paidShipping: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      brand: Yup.string().required('Required'),
      model: Yup.string().required('Required'),
      country: Yup.string().required('Required'),
      size: Yup.number().required('Required'),
      kilometers: Yup.number().required('Required'),
    }),
    onSubmit: handleSubmit
  });

  const _renderError = (id) =>
    formik.touched[id] && formik.errors[id] ? (
      <div>{formik.errors[id]}</div>
    ) : null;

  /* NOTE: Render a loader when the submittion is being processed */
  const _renderButtonContent = (isLoading) => (
    <>
      {isLoading && <Loader />}
      <p
        style={{
          /* NOTE: Switch visibility to maintain the button's dimensions */
          visibility: isLoading ? 'hidden' : 'visible',
        }}>
        submit
      </p>
    </>
  );

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Field>
        <input
          placeholder="how would you like to be called?"
          name="ownerName"
          {...formik.getFieldProps('ownerName')}
          type="text"
        />
        {_renderError('ownerName')}
      </Field>

      <Field>
        <input
          placeholder="email"
          name="email"
          {...formik.getFieldProps('email')}
          type="text"
        />
        {_renderError('email')}
      </Field>

      <Field>
        <input
          placeholder="brand"
          name="brand"
          {...formik.getFieldProps('brand')}
          type="text"
        />
        {_renderError('brand')}
      </Field>

      <Field>
        <input
          placeholder="model"
          name="model"
          {...formik.getFieldProps('model')}
          type="text"
        />
        {_renderError('model')}
      </Field>

      <Field>
        <select id="size" {...formik.getFieldProps('size')}>
          {sizeOptions.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        <label htmlFor="size">size</label>
        {_renderError('size')}
      </Field>

      <Field>
        <input
          name="isFemaleShoe"
          {...formik.getFieldProps('isFemaleShoe')}
          type="checkbox"
        />
        <label htmlFor="isFemaleShoe">female</label>
      </Field>

      <Field>
        <input
          name="isTrailShoe"
          {...formik.getFieldProps('isTrailShoe')}
          type="checkbox"
        />
        <label htmlFor="isTrailShoe">trail shoe</label>
      </Field>

      <Field>
        <select name="kilometers" {...formik.getFieldProps('kilometers')}>
          {kilometersOptions.map((kilometers) => {
            if (kilometers === 0)
              return (
                <option key={kilometers} value={kilometers}>
                  new
                </option>
              );
            if (kilometers === 200)
              return (
                <option
                  key={kilometers}
                  value={kilometers}>{`>${kilometers}`}</option>
              );
            return (
              <option
                key={kilometers}
                value={kilometers}>{`<${kilometers}`}</option>
            );
          })}
        </select>
        <label htmlFor="kilometers">kilometers</label>
        {_renderError('kilometers')}
      </Field>

      <Field>
        <input
          placeholder="country"
          name="country"
          {...formik.getFieldProps('country')}
          type="text"
        />
        {_renderError('country')}
      </Field>

      <Field>
        <input
          placeholder="city"
          name="city"
          {...formik.getFieldProps('city')}
          type="text"
        />
      </Field>

      <Field>
        <input
          name="ships"
          {...formik.getFieldProps('ships')}
          type="checkbox"
        />
        <label htmlFor="ships">ships?</label>
      </Field>

      <Field disabled={!formik.values.ships}>
        <input
          name="intShipping"
          {...formik.getFieldProps('intShipping')}
          type="checkbox"
          disabled={!formik.values.ships}
        />
        <label htmlFor="intShipping">ships internationally?</label>
      </Field>

      <Field disabled={!formik.values.ships}>
        <input
          name="paidShipping"
          {...formik.getFieldProps('paidShipping')}
          type="checkbox"
          disabled={!formik.values.ships}
        />
        <label htmlFor="paidShipping">paid shipping?</label>
      </Field>

      <Field>
        <Button type="submit" margin="1em 0" primary>
          {_renderButtonContent(mutationData.loading)}
        </Button>
      </Field>
    </Form>
  );
};

export default ShoeForm;
