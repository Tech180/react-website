import { ResumeViewerComponent } from './resume-viewer/resume-viewer.component';

export function ResumeComponent() {
  return (
    <main style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <ResumeViewerComponent
        imageSrc="/resume/resume.png"
        pdfSrc="/resume/resume.pdf"
      />
    </main>
  );
}
