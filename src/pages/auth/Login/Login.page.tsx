import { Icon } from '@iconify/react';
import { CenterContainer } from '../../../components';
import { LoginForm } from './LoginForm.view';
import styles from './login.module.scss';

export function Login() {
  return (
    <CenterContainer>
      <div className={styles.branding}>
        <Icon icon='bi:shield-lock' />
        <h1>The Secret Store</h1>
      </div>
      <LoginForm />
    </CenterContainer>
  );
}
