import { CenterContainer } from '@components';
import { Icon } from '@iconify/react';
import styles from './register.module.scss';
import { RegistrationForm } from './RegistrationForm.view';

export function Register() {
  return (
    <CenterContainer>
      <div className={styles.branding}>
        <Icon icon='bi:shield-lock' />
        <h1>The Secret Store</h1>
      </div>
      <h2 className={styles.title}>Create a new account</h2>
      <RegistrationForm />
    </CenterContainer>
  );
}
