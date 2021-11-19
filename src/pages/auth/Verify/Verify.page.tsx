import { CenterContainer } from '@components';
import { useEffect } from 'react';
import { VerificationForm } from './VerificationForm.view';
import styles from './verify.module.scss';

export function Verify() {
  useEffect(() => {}, []);

  return (
    <CenterContainer>
      <h1 className={styles.title}>Verification</h1>
      <p className={styles.body}>
        We have sent a verification code to your email, check and enter the code
      </p>
      <VerificationForm />
    </CenterContainer>
  );
}
