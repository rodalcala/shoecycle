import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled, { css } from 'styled-components';

import usePortal from '../lib/usePortal';
import Button from './styled/Button';

const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  background-color: ${(props) => props.theme.colours.disabled};
  height: 85%;
  max-height: 700px;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.1em;
`;

const Title = styled.h1`
  width: 90%;
  color: ${(props) => props.theme.colours.secondary};
  font-size: 2rem;
  font-weight: 400;
  margin: 1rem 0;
`;

const RequestModal = () => {
  const ModalPortal = usePortal();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      city: '',
      country: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      country: Yup.string().required('Required'),
      message: Yup.string().required('Required'),
    }),
    // onSubmit: (values) => {
    //   sendRequestMessage({
    //     variables: {
    //       shoe: {
    //         ...values,
    //         size: parseFloat(values.size),
    //         kilometers: parseFloat(values.kilometers),
    //       },
    //     },
    //   });
    // },
  });

  return (
    <ModalPortal>
      <ModalBackground>
        <ModalContainer>
          <Title>request form</Title>
          <Form onSubmit={formik.handleSubmit}>
            <Field>
              <input
                placeholder="name"
                name="name"
                {...formik.getFieldProps('name')}
                type="text"
              />
              {/* {_renderError('name')} */}
            </Field>

            <Field>
              <input
                placeholder="email"
                name="email"
                {...formik.getFieldProps('email')}
                type="text"
              />
              {/* {_renderError('email')} */}
            </Field>

            <Field>
              <input
                placeholder="city"
                name="city"
                {...formik.getFieldProps('city')}
                type="text"
              />
              {/* {_renderError('city')} */}
            </Field>

            <Field>
              <input
                placeholder="country"
                name="country"
                {...formik.getFieldProps('country')}
                type="text"
              />
              {/* {_renderError('country')} */}
            </Field>

            <Field>
              <textarea
                placeholder="let xx know why would you like their shoes"
                name="message"
                {...formik.getFieldProps('message')}
                type="text"
              />
              {/* {_renderError('message')} */}
            </Field>

            <Field>
              <Button type="submit" margin="1em 0">
                submit
              </Button>
            </Field>
          </Form>
        </ModalContainer>
      </ModalBackground>
    </ModalPortal>
  );
};

const Form = styled.form`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Field = styled.div`
  margin-bottom: 0.6em;
  width: 100%;

  > input,
  textarea {
    padding: 0.3em;
    vertical-align: middle;
    border: none;
    border-radius: 0.1em;
    background-color: ${(props) => props.theme.colours.white};
    width: 18em;
    max-width: 65vw;
  }

  > input:focus,
  textarea:focus {
    outline: none;
    outline-offset: none;
    box-shadow: inset 0 0 0.3em ${(props) => props.theme.colours.primary};
  }

  > textarea {
    height: 10em;
  }
`;

export default RequestModal;
