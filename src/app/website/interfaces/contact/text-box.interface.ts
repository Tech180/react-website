import React from 'react';

export interface TextBoxProps {
  text: string;
  value: string;
  name: string;
  textType: string;
  rows: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface TextBoxViewProps extends TextBoxProps {
  focused: boolean;
  isError: boolean;
  isValid: boolean;
  onFocus: () => void;
  onBlur: () => void;
}
