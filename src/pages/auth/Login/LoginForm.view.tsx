import { Button, Input } from '../../../components';
import styles from './login.module.scss';

export function LoginForm() {
  return (
    <form className={styles.form}>
      <Input label='Name' />
      <Input label='Email' type='email' />
      <Input type='password' label='Password' />
      <Input type='password' label='Confirm Password' />
      <Button onClick={() => {}} label='Submit' />
    </form>
  );
}
