import { Button, Input } from '@components';
import { initialValues, validationSchema } from './login.config';
import { useFormik } from 'formik';
import styles from './login.module.scss';

export function LoginForm() {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      console.log(values);
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
