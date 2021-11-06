import { Icon } from '@iconify/react';
import styles from './input.module.scss';

export function Input({ icon, label, ...props }: InputProps) {
  return (
    <div className={styles.input}>
      <label>{label}</label>
      {icon && <Icon icon={icon} />}
      <input {...props} />
    </div>
  );
}

interface InputProps {
  icon?: string;
  label: string;
  type?: string;
}
