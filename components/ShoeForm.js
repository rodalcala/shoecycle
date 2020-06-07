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
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      brand: Yup.string()
        .required('Required'),
      model: Yup.string()
        .required('Required'),
      country: Yup.string()
        .required('Required'),
      size: Yup.number()
        .min(6, 'Size must be 6 or bigger')
        .max(13, 'Size must be 13 or smaller')
        .required('Required'),
      kilometers: Yup.number()
        .min(0, 'Your shoes cannot have less than 0kms, can they?')
        .max(200, 'We only accept shoes with less than 200kms')
        .required('Required'),
    }),
    onSubmit: (values, options) => {
      addShoe({
        variables: {
          shoe: values
        }
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">e-mail address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="brand">brand</label>
      <input
        id="brand"
        name="brand"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.brand}
      />
      <label htmlFor="model">model</label>
      <input
        id="model"
        name="model"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.model}
      />
      <label htmlFor="size">size</label>
      <select
        id="size"
        name="size"
        onChange={formik.handleChange}
        value={formik.values.size}
      >
        {sizeOptions.map(size => <option key={size} value={size}>{size}</option>)}
      </select>
      <label htmlFor="isFemaleShoe">female</label>
      <input
        id="isFemaleShoe"
        name="isFemaleShoe"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.isFemaleShoe}
      />
      <label htmlFor="isTrailShoe">trail shoe</label>
      <input
        id="isTrailShoe"
        name="isTrailShoe"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.isTrailShoe}
      />
      <label htmlFor="kilometers">kilometers</label>
      <select
        id="kilometers"
        name="kilometers"
        onChange={formik.handleChange}
        value={formik.values.kilometers}
      >
        {kilometersOptions.map(kilometers => {
          if (kilometers === 0) return <option key={kilometers} value={kilometers}>new</option>
          if (kilometers === 200) return <option key={kilometers} value={kilometers}>>{kilometers}</option>
          return <option key={kilometers} value={kilometers}>{`<${kilometers}`}</option>;
        })}
      </select>
      <label htmlFor="country">country</label>
      <input
        id="country"
        name="country"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.country}
      />
      <label htmlFor="city">city</label>
      <input
        id="city"
        name="city"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.city}
      />
      <label htmlFor="ships">ships?</label>
      <input
        id="ships"
        name="ships"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.ships}
      />
      <label htmlFor="intShipping">ships internationally?</label>
      <input
        id="intShipping"
        name="intShipping"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.intShipping}
      />
      <label htmlFor="paidShipping">paid shipping?</label>
      <input
        id="paidShipping"
        name="paidShipping"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.paidShipping}
      />
      <button type="submit">Submit</button>
    </form>
  );

  // return (
  //   <button onClick={() => {
  //     addShoe({
  //       variables: {
  //         shoe: {
  //           email: 'tuvieja@entanga.com',
  //           verifiedEmail: true,
  //           brand: 'Nike',
  //           model: 'Pegasus 35',
  //           isFemaleShoe: true,
  //           isTrailShoe: false,
  //           size: 8.5,
  //           kilometers: 230,
  //           country: 'Spain',
  //           city: 'Barcelona',
  //           ships: true,
  //           intShipping: true,
  //           paidShipping: false,
  //         }
  //       }
  //     })
  //   }}>Giving</button>
  // );
};

export default ShoeForm;
