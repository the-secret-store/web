import { Button, Input } from '@components';
import styles from './login.module.scss';

export function LoginForm() {
  return (
    <form className={styles.form}>
      <Input label='Email' type='email' />
      <Input type='password' label='Password' />
      <Button onClick={() => {}} label='Login' />
    </form>
  );
}
