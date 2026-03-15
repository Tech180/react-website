"use client";

import { useState } from 'react';
import { ResumeViewerProps } from '../../../interfaces/resume/resume-viewer.interface';
import { ResumeViewerView } from './resume-viewer.view';

export function ResumeViewerComponent({ imageSrc, pdfSrc }: ResumeViewerProps) {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => setExpanded(!expanded);

  return (
    <ResumeViewerView
      imageSrc={imageSrc}
      pdfSrc={pdfSrc}
      expanded={expanded}
      onToggleExpand={handleToggleExpand}
    />
  );
}
