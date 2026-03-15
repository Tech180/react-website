export interface SidebarProps {
  open: boolean;
  side?: 'left' | 'right';
  children: React.ReactNode;
  className?: string;
  'aria-hidden'?: boolean;
  'aria-label'?: string;
}

export interface DrawerOverlayProps {
  open: boolean;
  onClick?: () => void;
}
