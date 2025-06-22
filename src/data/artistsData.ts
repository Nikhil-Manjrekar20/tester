export interface Venue {
  id: string;
  name: string;
  image: string;
  price: number;
  baseMembers: number;
  extraPersonCharge: number;
  decorationFee: number;
  screenSize: string;
  refundPolicy: string;
  slots: string[];
  features: string[];
}

export const venuesData: Venue[] = [
  {
    id: '399e2ade-5d6d-4535-81a6-93ae43a637a5',
    name: 'Aura',
    image:
      'https://i.pinimg.com/736x/78/ff/cc/78ffccdd2071737b2cfc15bc1ab5bae4.jpg',
    price: 1999,
    baseMembers: 12,
    extraPersonCharge: 249,
    decorationFee: 499,
    screenSize: '120" screen with Dolby sound',
    refundPolicy: 'Refund if canceled 72 hours in advance',
    slots: [
      '9:30am - 12:30pm',
      '1:00pm - 4:00pm',
      '4:30pm - 7:30pm',
      '8:00pm - 9:30pm',
      '10:00pm - 1:00am',
    ],
    features: [
      'Premium sound system',
      'Comfortable seating',
      'Climate control',
      'Ambient lighting',
      'Refreshment service',
    ],
  },
  {
    id: '771c4da3-851e-431c-a490-8bb6bf93aa77',
    name: 'Couple',
    image:
      'https://i.pinimg.com/736x/7e/65/e3/7e65e33ee26c2f125fbf50f68f80a957.jpg',
    price: 999,
    baseMembers: 2,
    extraPersonCharge: 249,
    decorationFee: 499,
    screenSize: '120" screen with Dolby sound',
    refundPolicy: 'Refund if canceled 72 hours in advance',
    slots: [
      '9:00am - 12:00pm',
      '12:30pm - 3:30pm',
      '4:00pm - 5:30pm',
      '6:00pm - 9:00pm',
      '9:30pm - 12:30am',
    ],
    features: [
      'Intimate setting',
      'Premium acoustics',
      'Mood lighting',
      'Private atmosphere',
      'Refreshment service',
    ],
  },
  {
    id: '18c00f9e-21d0-4d77-ad5a-d831aa4ede07',
    name: 'Lunar',
    image:
      'https://i.pinimg.com/736x/97/d4/31/97d431eb8c5fdeba1df8a5c0804a1c3c.jpg',
    price: 1499,
    baseMembers: 8,
    extraPersonCharge: 249,
    decorationFee: 499,
    screenSize: '133" screen with Dolby sound',
    refundPolicy: 'Refund if canceled 72 hours in advance',
    slots: [
      '9:30am - 12:30pm',
      '1:00pm - 4:00pm',
      '4:30pm - 6:00pm',
      '6:30pm - 9:30pm',
      '10:00pm - 1:00am',
    ],
    features: [
      'Spacious layout',
      'Premium sound',
      'Ambient lighting',
      'Lounge area',
      'Refreshment service',
    ],
  },
  {
    id: 'fdb9e954-7810-4ab5-9b7d-1483ec53669a',
    name: 'Minimax',
    image:
      'https://i.pinimg.com/736x/53/d9/03/53d903ffd2790f347dd04f2badca5339.jpg',
    price: 2499,
    baseMembers: 20,
    extraPersonCharge: 249,
    decorationFee: 499,
    screenSize: '165" screen with Dolby sound',
    refundPolicy: 'Refund if canceled 72 hours in advance',
    slots: [
      '10:00am - 1:00pm',
      '1:30pm - 4:30pm',
      '5:00pm - 6:30pm',
      '7:00pm - 10:00pm',
      '10:30pm - 1:00am',
    ],
    features: [
      'Largest screen size',
      'Premium sound system',
      'Party lighting',
      'Extended seating',
      'Full service options',
    ],
  },
];