import { Button, Input } from '@components';
import styles from './register.module.scss';

export function RegistrationForm() {
  return (
    <form className={styles.form}>
      <Input label='Name' type='name' />
      <Input label='Email' type='email' />
      <Input type='password' label='Password' />
      <Input type='password' label='Confirm Password' />
      <Button onClick={() => {}} label='Submit' />
    </form>
  );
}
