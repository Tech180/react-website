import React from 'react';
import { FileText } from 'lucide-react';
import styles from './resume-viewer.component.module.scss';
import { ButtonComponent } from '@/shared/ui/button/button.component';
import { ResumeViewerViewProps } from '@/features/resume/types/resume-viewer.interface';

export function ResumeViewerView({
  imageSrc,
  pdfSrc,
  expanded,
  onToggleExpand
}: ResumeViewerViewProps) {
  return (
    <div className={styles.container}>
      <div className={styles['resume-card']}>
        <div
          className={`${styles['resume-item']} ${expanded ? styles.expanded : ''}`}
          onClick={onToggleExpand}
        >
          <div className={styles['image-wrap']}>
            <img
              src={imageSrc}
              alt="Resume View"
              className={`${styles['resume-img']} ${expanded ? styles.expanded : ''}`}
            />
          </div>
          <div className={styles.info}>
            <p className={styles.text}>
              {expanded ? 'Click again to go back to reduced view!' : 'Click to expand to full view of my resume!'}
            </p>
          </div>
        </div>
      </div>

      <div className={styles['download-container']}>
        <a href={pdfSrc} download="Resume.pdf">
          <ButtonComponent variant="secondary">
            <FileText className={styles['pdf-icon']} size={20} />
            Download PDF
          </ButtonComponent>
        </a>
      </div>
    </div>
  );
}
