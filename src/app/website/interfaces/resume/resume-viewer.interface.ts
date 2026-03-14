export interface ResumeViewerProps {
  imageSrc: string;
  pdfSrc: string;
}

export interface ResumeViewerViewProps extends ResumeViewerProps {
  expanded: boolean;
  onToggleExpand: () => void;
}
