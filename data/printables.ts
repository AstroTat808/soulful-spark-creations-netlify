export type Printable = {
  slug: string;
  title: string;
  price: number;
  category: 'planning' | 'rituals' | 'mantras';
  style: 'boho' | 'classic' | 'modern';
  description: string;
  image: string;
};

export const printables: Printable[] = [
  {
    slug: 'wedding-vision-board',
    title: 'Wedding Vision Board',
    price: 12,
    category: 'planning',
    style: 'classic',
    description: 'Create with intention and stay true to your dream day. Includes guided prompts and cutouts.',
    image: '/images/printables/vision-board.jpg',
  },
  {
    slug: 'vendor-intuition-cards',
    title: 'Vendor Intuition Cards',
    price: 9,
    category: 'mantras',
    style: 'boho',
    description: 'Choose your team with alignment, not anxiety. Pocket-size mantras for vendor meetings.',
    image: '/images/printables/vendor-cards.jpg',
  },
  {
    slug: 'ritual-planning-journal',
    title: 'Ritual Planning Journal',
    price: 14,
    category: 'rituals',
    style: 'modern',
    description: 'Keep calm with moon rituals, crystal spreads, and loving prompts. 40 printable pages.',
    image: '/images/printables/ritual-journal.jpg',
  },
];
