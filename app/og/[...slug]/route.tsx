import { generateOGImage } from 'fumadocs-ui/og';
import { metadataImage } from '@/lib/metadata-image';

export const GET = metadataImage.createAPI((page) => {
  return generateOGImage({
    title: page.data.title,
    description: page.data.description,
    site: 'Replit Connections',
    primaryColor: '#F26206',
    primaryTextColor: '#F26206'
  });
});

export function generateStaticParams() {
  return metadataImage.generateParams();
}