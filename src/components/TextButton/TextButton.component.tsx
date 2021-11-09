import { Link, LinkProps } from 'react-router-dom';
import styles from './textbutton.module.scss';

export function TextButton({ link, children }: TextButtonProps) {
  return (
    <Link to={link} className={styles.text_button}>
      {children}
    </Link>
  );
}

interface TextButtonProps
  extends React.ForwardRefExoticComponent<
    LinkProps & React.RefAttributes<HTMLAnchorElement>
  > {
  children: React.ReactNode;
  link: string;
}
