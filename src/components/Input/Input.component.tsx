import { Icon } from '@iconify/react';
import { useTheme } from '@root';
import styles from './input.module.scss';

export function Input({ icon, label, tip, ...props }: InputProps) {
  const { colors } = useTheme();

  const inputId =
    props.id || props.name || (Math.random() + 1).toString(36).substring(7);

  return (
    <div className={styles.input}>
      <label htmlFor={inputId}>{label}</label>
      {icon && <Icon icon={icon} />}
      <input {...props} id={inputId} />
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
