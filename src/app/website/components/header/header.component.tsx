import { HeaderView } from './header.view';

export function HeaderComponent({ 
  description = "<span>software</span><hr /><span>engineer</span>",
  image = "/images/fashion.jpg"
}: { 
  description?: string;
  image?: string;
}) {
  return <HeaderView description={description} image={image} />;
}
