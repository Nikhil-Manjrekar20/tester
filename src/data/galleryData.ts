export interface GalleryItem {
  photos: {
    thumbnail: string;
    fullSize: string;
    alt: string;
    caption: string;
  }[];
  videos: {
    thumbnail: string;
    title: string;
    duration: string;
    embedUrl: string;
  }[];
}

export const galleryData: GalleryItem = {
  photos: [
    {
      thumbnail:
        'https://i.pinimg.com/736x/e0/8b/00/e08b0068686919b6395113b3420c7914.jpg',
      fullSize:
        'https://i.pinimg.com/736x/e0/8b/00/e08b0068686919b6395113b3420c7914.jpg',
      alt: 'Concert crowd with hands in the air',
      caption: '',
    },
    {
      thumbnail:
        'https://i.pinimg.com/736x/ba/fe/a6/bafea6fe15f1123db97b86f482343bcf.jpg',
      fullSize:
        'https://i.pinimg.com/736x/ba/fe/a6/bafea6fe15f1123db97b86f482343bcf.jpg',
      alt: 'DJ performing at night with colorful lights',
      caption: '',
    },
    {
      thumbnail:
        'https://i.pinimg.com/736x/22/82/fa/2282fac701eacabb025d5708c20b5330.jpg',
      fullSize:
        'https://i.pinimg.com/736x/22/82/fa/2282fac701eacabb025d5708c20b5330.jpg',
      alt: 'Festival crowd enjoying concert',
      caption: '',
    },
    {
      thumbnail:
        'https://i.pinimg.com/736x/67/e2/f9/67e2f9798e2a18b986aca93df7e18509.jpg',
      fullSize:
        'https://i.pinimg.com/736x/67/e2/f9/67e2f9798e2a18b986aca93df7e18509.jpg',
      alt: 'Aerial view of festival grounds',
      caption: '',
    },
    {
      thumbnail:
        'https://i.pinimg.com/736x/0a/b9/9d/0ab99d7b026e4b95eb6cd06c5755e854.jpg',
      fullSize:
        'https://i.pinimg.com/736x/0a/b9/9d/0ab99d7b026e4b95eb6cd06c5755e854.jpg',
      alt: 'Band performing on stage',
      caption: '',
    },
    {
      thumbnail:
        'https://i.pinimg.com/736x/bb/60/64/bb60646248d97e8c9b30f639c120a573.jpg',
      fullSize:
        'https://i.pinimg.com/736x/bb/60/64/bb60646248d97e8c9b30f639c120a573.jpg',
      alt: 'Festival attendees dancing',
      caption: '',
    },
    {
      thumbnail:
        'https://i.pinimg.com/736x/e7/24/db/e724dbb74c29d1d7f0edb60bba7676cd.jpg',
      fullSize:
        'https://i.pinimg.com/736x/e7/24/db/e724dbb74c29d1d7f0edb60bba7676cd.jpg',
      alt: 'Light show at night concert',
      caption: '',
    },
    {
      thumbnail:
        'https://i.pinimg.com/736x/7d/eb/19/7deb19fd8d6b110cc4e52cfafb391b64.jpg',
      fullSize:
        'https://i.pinimg.com/736x/7d/eb/19/7deb19fd8d6b110cc4e52cfafb391b64.jpg',
      alt: 'Festival food vendors',
      caption: '',
    },
  ],
  videos: [
    {
      thumbnail:
        'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'RHYTHM FEST 2024 Highlights',
      duration: '3:45',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      thumbnail:
        'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Electric Pulse Full Performance',
      duration: '8:12',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      thumbnail:
        'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Behind the Scenes: Festival Setup',
      duration: '5:30',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      thumbnail:
        'https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Rhythm Collective Interview',
      duration: '4:15',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      thumbnail:
        'https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Sunset Sessions at River Stage',
      duration: '6:20',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      thumbnail:
        'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'RHYTHM FEST 2025 Announcement',
      duration: '2:45',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
  ],
};
