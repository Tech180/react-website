/**
 * Formats a kebab-case or hyphenated string into Title Case.
 * Example: 'focus-sash' -> 'Focus Sash'
 */
export function formatName(name: string): string {
  if (!name) return '';
  return name
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}
