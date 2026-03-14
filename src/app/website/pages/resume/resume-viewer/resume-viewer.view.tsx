import React from 'react';
import styles from './resume-viewer.component.module.scss';
import { ButtonComponent } from '@/app/website/components/button/button.component';

import { ResumeViewerViewProps } from '@/app/website/interfaces/resume/resume-viewer.interface';

export function ResumeViewerView({ 
  imageSrc, 
  pdfSrc, 
  expanded, 
  onToggleExpand 
}: ResumeViewerViewProps) {
  return (
    <div className={styles.container}>
      <div className={styles.resumeCard}>
        <div 
           className={`${styles.resumeItem} ${expanded ? styles.expanded : ''}`}
           onClick={onToggleExpand}
        >
          <div className={styles.imageWrap}>
            <img 
              src={imageSrc} 
              alt="Resume View" 
              className={`${styles.resumeImg} ${expanded ? styles.expanded : ''}`} 
            />
          </div>
          <div className={styles.info}>
            <p className={styles.text}>
              {expanded ? 'Click again to go back to reduced view!' : 'Click to expand to full view of my resume!'}
            </p>
          </div>
        </div>
      </div>
      
      <div className={styles.downloadContainer}>
        <a href={pdfSrc} download="Resume.pdf">
          <ButtonComponent variant="secondary">
            <i className="far fa-file-pdf" style={{ marginRight: '8px' }}></i>
            Download PDF
          </ButtonComponent>
        </a>
      </div>
    </div>
  );
}
