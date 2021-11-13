import { Button, Input } from '@components';
import { AuthService } from '@services';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './login.config';
import styles from './login.module.scss';
import { useNavigate } from 'react-router-dom';

export function LoginForm() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async values => {
      const { email, password } = values;
      const authService = new AuthService();
      const { hasSucceeded, message } = await authService.login(email, password);
      if (hasSucceeded) {
        console.log(message);
        navigate('/home');
      } else {
        // TODO: handle errors
        console.log(message);
      }
    }
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
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
      <Button type='submit' label='Login' />
    </form>
  );
}
