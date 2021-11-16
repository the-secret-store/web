import { Button, Input } from '@components';
import { useAuthApi } from '@root/AuthEngine';
import { SessionManager } from '@root/AuthEngine/SessionManager';
import { AuthService } from '@services';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { initialValues, validationSchema } from './login.config';
import styles from './login.module.scss';

export function LoginForm() {
  const navigate = useNavigate();
  const { setSession } = useAuthApi();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async values => {
      const { email, password } = values;
      const authService = new AuthService();
      const { hasSucceeded, message } = await authService.login(email, password);
      if (hasSucceeded) {
        console.log(message);
        // update the session instance in context
        setSession(new SessionManager());

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
