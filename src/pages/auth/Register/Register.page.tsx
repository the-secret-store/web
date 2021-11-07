import { Icon } from '@iconify/react';
import { CenterContainer } from '../../../components';
import { RegistrationForm } from './RegistrationForm.view';
import styles from './register.module.scss';

export function Register() {
  return (
    <CenterContainer>
      <div className={styles.branding}>
        <Icon icon='bi:shield-lock' />
        <h1>The Secret Store</h1>
      </div>
      <h2>Create a new account</h2>
      <RegistrationForm />
    </CenterContainer>
  );
}
