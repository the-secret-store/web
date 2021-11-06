import styles from './button.module.scss';

export function Button({ label, onClick, disabled }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}
