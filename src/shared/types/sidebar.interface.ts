export interface SidebarProps {
  open: boolean;
  scrolled?: boolean | undefined;
  variant?: 'default' | 'theme';
  id?: string;
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
