import { Icon } from '@iconify/react';
import { useTheme } from '@root';
import styles from './input.module.scss';

export function Input({ icon, label, tip, ...props }: InputProps) {
  const { colors } = useTheme();

  return (
    <div className={styles.input}>
      <label>{label}</label>
      {icon && <Icon icon={icon} />}
      <input {...props} />
      <p
        className={styles.tip}
        style={
          typeof tip !== 'string'
            ? { color: colors[tip?.kind || 'error'] }
            : { color: colors.error }
        }
      >
        {tip && (typeof tip === 'string' ? tip : tip?.message)}
      </p>
    </div>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  label: string;
  type?: string;
  tip?: Tip | string;
}

interface Tip {
  kind?: 'error' | 'success' | 'warning';
  message: string;
}
