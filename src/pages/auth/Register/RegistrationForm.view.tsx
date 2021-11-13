import { Button, Input } from '@components';
import { AuthService } from '@services';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { initialValues, validationSchema } from './register.config';
import styles from './register.module.scss';

export function RegistrationForm() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async values => {
      const { display_name, email, password } = values;
      const authService = new AuthService();
      const { hasSucceeded, message } = await authService.register(
        display_name,
        email,
        password
      );

      if (hasSucceeded) {
        console.log(message);
        navigate('/auth/login');
      } else {
        //todo: handle error
        console.log(message);
      }
    }
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <Input
        label='Name'
        type='name'
        name='display_name'
        onChange={formik.handleChange}
        value={formik.values.display_name}
        tip={formik.touched.display_name ? formik.errors.display_name : ''}
      />
      <Input
        label='Email'
        type='email'
        name='email'
        onChange={formik.handleChange}
        value={formik.values.email}
        tip={formik.touched.email ? formik.errors.email : ''}
      />
      <Input
        type='password'
        label='Password'
        name='password'
        onChange={formik.handleChange}
        value={formik.values.password}
        tip={formik.touched.password ? formik.errors.password : ''}
      />
      <Input
        type='password'
        label='Confirm Password'
        name='password_confirmation'
        onChange={formik.handleChange}
        value={formik.values.password_confirmation}
        tip={
          formik.touched.password_confirmation
            ? formik.errors.password_confirmation
            : ''
        }
      />
      <Button type='submit' label='Submit' />
    </form>
  );
}
