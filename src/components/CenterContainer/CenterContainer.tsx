import { ReactNode } from 'react';
import styles from './centercontainer.module.scss';

export function CenterContainer({ children, ...props }: { children: ReactNode }) {
  return (
    <div className={styles.container} {...props}>
      {children}
    </div>
  );
}
