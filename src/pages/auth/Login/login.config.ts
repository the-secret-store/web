import { strongPasswordRegex } from '@constants/strongPassword.regex';
import * as yup from 'yup';

export const initialValues = {
  email: '',
  password: ''
};

export const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required(),
  password: yup
    .string()
    .min(6)
    .max(18)
    .matches(strongPasswordRegex, 'Password is weak')
    .required('Required')
});
