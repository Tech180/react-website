"use client";

import { useState } from 'react';
import { TextBoxProps } from '../../../interfaces/contact/text-box.interface';
import { TextBoxView } from './text-box.view';
import { validateEmail } from '../../../utils/validation.util';

export function TextBoxComponent(props: TextBoxProps) {
  const { text, value } = props;
  const [focused, setFocused] = useState(false);

  const isEmailMode = text === "Email Address";
  const isValid = isEmailMode && validateEmail(value);
  const isError = isEmailMode && !isValid && value.length > 0 && !focused;

  return (
    <TextBoxView
      {...props}
      focused={focused}
      isError={isError}
      isValid={isValid}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}
