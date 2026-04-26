import { HeaderComponent } from '@/app/layout/header/header.component';
import { ResumeViewerComponent } from './resume-viewer/resume-viewer.component';
import styles from './resume.module.scss';

export function ResumeComponent() {
  return (
    <main className={styles.resume}>
      <HeaderComponent description="<span>resume</span>" image="/images/resume.jpg" />
      <ResumeViewerComponent
        imageSrc="/resume/resume.png"
        pdfSrc="/resume/resume.pdf"
      />
    </main>
  );
}
