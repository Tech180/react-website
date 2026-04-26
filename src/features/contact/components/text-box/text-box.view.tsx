import React from 'react';
import styles from './text-box.component.module.scss';
import { TextBoxViewProps } from '@/features/contact/types/text-box.interface';

export function TextBoxView({
  text,
  value,
  name,
  onChange,
  rows,
  focused,
  isError,
  isValid,
  onFocus,
  onBlur
}: TextBoxViewProps) {
  return (
    <div className={styles.container}>
      <div className={`${styles.field} ${isError ? styles.error : ''} ${isValid ? styles.correct : ''}`}>
        <textarea
          value={value}
          onChange={onChange}
          className={styles.textarea}
          name={name}
          onFocus={onFocus}
          onBlur={onBlur}
          rows={rows}
          required
        />
        <label className={`${styles.label} ${value || focused ? styles.active : ''}`}>
          {text}
        </label>
      </div>
    </div>
  );
}
