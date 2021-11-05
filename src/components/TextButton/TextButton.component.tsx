import { ReactNode } from 'react';
import styles from './textbutton.module.scss';

export function TextButton({ link, children }: TextButtonProps) {
  return (
    <a href={link} className={styles.text_button}>
      {children}
    </a>
  );
}

interface TextButtonProps {
  children: ReactNode;
  link: string;
}
