import React from 'react';

export interface ExpandableProps {
  isExpanded: boolean;
  children: React.ReactNode;
  className?: string;
}
