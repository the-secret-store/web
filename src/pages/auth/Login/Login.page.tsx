import { CenterContainer } from '@components';
import { Icon } from '@iconify/react';
import styles from './login.module.scss';
import { LoginForm } from './LoginForm.view';

export function Login() {
  return (
    <CenterContainer>
      <div className={styles.branding}>
        <Icon icon='bi:shield-lock' />
        <h1>The Secret Store</h1>
      </div>
      <h2 className={styles.title}>Login</h2>
      <LoginForm />
    </CenterContainer>
  );
}
