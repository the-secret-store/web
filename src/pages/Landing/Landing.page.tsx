import { TextButton } from '@components';
import { Icon } from '@iconify/react';
import styles from './landing.module.scss';

export function Landing() {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>Sign in</li>
          <li>Report a bug</li>
          <li>About</li>
        </ul>
      </nav>
      <main className={styles.main}>
        <Icon icon='bi:shield-lock' />
        <h1>The Secret Store</h1>
        <p>
          <TextButton link='/signup'>
            Create an account{' '}
            <Icon icon='akar-icons:arrow-right' className={styles.arrow} />
          </TextButton>
        </p>
      </main>
    </>
  );
}
