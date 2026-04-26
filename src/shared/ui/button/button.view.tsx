import styles from "./button.component.module.scss";
import { ButtonProps } from '@/shared/types/button.interface';

export function ButtonView({
  children,
  variant = "primary",
  icon,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[`button--${variant}`]} ${className}`}
      {...props}
    >
      {icon && <span className={styles['button-icon']}>{icon}</span>}
      <span className={styles['button-text']}>{children}</span>
    </button>
  );
}
