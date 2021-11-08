import { strongPasswordRegex } from '@constants/strongPassword.regex';
import * as yup from 'yup';

export const initialValues = {
  display_name: '',
  email: '',
  password: '',
  password_confirmation: ''
};

export const validationSchema = yup.object().shape({
  display_name: yup.string().required('Required'),
  email: yup.string().email('Invalid email').required(),
  password: yup
    .string()
    .min(6)
    .max(18)
    .matches(strongPasswordRegex, 'Password is weak')
    .required('Required'),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
});
