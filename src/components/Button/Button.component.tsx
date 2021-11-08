import styles from './button.module.scss';

export function Button({ label, ...props }: ButtonProps) {
  return (
    <button className={styles.button} {...props}>
      {label}
    </button>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}
