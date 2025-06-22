export interface ScheduleItem {
  day: string;
  stage: string;
  time: string;
  artist: string;
  description: string;
  special?: string;
}

export const scheduleData: ScheduleItem[] = [
  // Friday
  {
    day: 'Friday',
    stage: 'Main Stage',
    time: '3:00 PM',
    artist: 'Opening Ceremony',
    description: 'Welcome to RHYTHM FEST 2025! Official opening with special guests and festival organizers.',
    special: 'Special Event'
  },
  {
    day: 'Friday',
    stage: 'Main Stage',
    time: '5:00 PM',
    artist: 'Pulse Collective',
    description: 'Emerging electronic music collective bringing fresh beats and energy to the main stage.',
  },
  {
    day: 'Friday',
    stage: 'Main Stage',
    time: '7:15 PM',
    artist: 'Rhythm Collective',
    description: 'Boundary-pushing hip hop collective blending classic beats with innovative production.',
  },
  {
    day: 'Friday',
    stage: 'Main Stage',
    time: '9:30 PM',
    artist: 'Electric Pulse',
    description: 'Headlining act! Chart-topping electronic duo known for their energetic performances and infectious melodies.',
    special: 'Headliner'
  },
  {
    day: 'Friday',
    stage: 'Tent Stage',
    time: '4:00 PM',
    artist: 'Azure Waves',
    description: 'Ambient electronic artist creating immersive soundscapes perfect for the early festival atmosphere.',
  },
  {
    day: 'Friday',
    stage: 'Tent Stage',
    time: '6:00 PM',
    artist: 'Quantum Break',
    description: 'Genre-bending producer showcasing an experimental fusion of electronic and orchestral elements.',
  },
  {
    day: 'Friday',
    stage: 'Tent Stage',
    time: '8:00 PM',
    artist: 'Midnight Fusion',
    description: 'Late-night set featuring soulful house and techno beats to keep the energy high.',
  },
  {
    day: 'Friday',
    stage: 'River Stage',
    time: '3:30 PM',
    artist: 'Rising Stars Showcase',
    description: 'Featuring three emerging local talents selected from our community music program.',
    special: 'Community Event'
  },
  {
    day: 'Friday',
    stage: 'River Stage',
    time: '5:45 PM',
    artist: 'Echo Valley',
    description: 'Soul-stirring harmonies and authentic storytelling from this emerging folk ensemble.',
  },
  {
    day: 'Friday',
    stage: 'Forest Stage',
    time: '4:30 PM',
    artist: 'Meditation Session',
    description: 'Take a break from the excitement with a guided meditation and ambient sound experience.',
    special: 'Wellness Activity'
  },
  
  // Saturday
  {
    day: 'Saturday',
    stage: 'Main Stage',
    time: '2:00 PM',
    artist: 'DJ Workshop',
    description: 'Interactive demonstration and workshop with professional DJs sharing their techniques.',
    special: 'Interactive Event'
  },
  {
    day: 'Saturday',
    stage: 'Main Stage',
    time: '5:00 PM',
    artist: 'Crimson Tide',
    description: 'High-energy rock band known for their powerful vocals and anthemic choruses.',
  },
  {
    day: 'Saturday',
    stage: 'Main Stage',
    time: '8:00 PM',
    artist: 'Violet Dreams',
    description: 'Headlining act! Critically acclaimed quartet known for their dreamy soundscapes and poetic lyrics.',
    special: 'Headliner'
  },
  {
    day: 'Saturday',
    stage: 'Tent Stage',
    time: '3:00 PM',
    artist: 'Digital Horizon',
    description: 'Progressive electronic artist pushing the boundaries of the genre with innovative production techniques.',
  },
  {
    day: 'Saturday',
    stage: 'Tent Stage',
    time: '6:30 PM',
    artist: 'Neon Pulse',
    description: 'Retro-futuristic synthwave artist bringing nostalgic 80s vibes with a modern twist.',
  },
  {
    day: 'Saturday',
    stage: 'Tent Stage',
    time: '9:00 PM',
    artist: 'After Dark Sessions',
    description: 'Curated set of deep house and techno featuring rotating guest DJs throughout the night.',
    special: 'Late Night Special'
  },
  {
    day: 'Saturday',
    stage: 'River Stage',
    time: '4:30 PM',
    artist: 'Harmony Brigade',
    description: 'Acoustic folk ensemble creating intimate musical moments by the riverside.',
  },
  {
    day: 'Saturday',
    stage: 'River Stage',
    time: '6:30 PM',
    artist: 'Sonic Architects',
    description: 'Masters of electronic production pushing the boundaries of sound design and live performance.',
  },
  {
    day: 'Saturday',
    stage: 'Forest Stage',
    time: '5:00 PM',
    artist: 'Sound Bath Experience',
    description: 'Immersive healing sound experience utilizing crystal bowls and ambient textures.',
    special: 'Wellness Activity'
  },
  
  // Sunday
  {
    day: 'Sunday',
    stage: 'Main Stage',
    time: '2:30 PM',
    artist: 'Community Choir',
    description: 'Special performance featuring local choir groups in a celebration of voice and harmony.',
    special: 'Community Event'
  },
  {
    day: 'Sunday',
    stage: 'Main Stage',
    time: '5:30 PM',
    artist: 'Prism Effect',
    description: 'Visual and audio spectacle combining live music with stunning projection mapping and light design.',
  },
  {
    day: 'Sunday',
    stage: 'Main Stage',
    time: '9:00 PM',
    artist: 'Luna Wave',
    description: 'Closing headliner! Genre-defying trio creating atmospheric soundscapes and unforgettable live shows.',
    special: 'Closing Headliner'
  },
  {
    day: 'Sunday',
    stage: 'Tent Stage',
    time: '3:30 PM',
    artist: 'Rhythm Workshop',
    description: 'Interactive percussion workshop where audience members can join in and create beats together.',
    special: 'Interactive Event'
  },
  {
    day: 'Sunday',
    stage: 'Tent Stage',
    time: '7:30 PM',
    artist: 'Neon Synthesis',
    description: 'Retro-futuristic electronic artist creating nostalgic yet innovative dance music.',
  },
  {
    day: 'Sunday',
    stage: 'River Stage',
    time: '4:00 PM',
    artist: 'Sunset Sessions',
    description: 'Relaxed DJ set perfectly timed to accompany the beautiful riverfront sunset.',
    special: 'Sunset Special'
  },
  {
    day: 'Sunday',
    stage: 'River Stage',
    time: '6:00 PM',
    artist: 'Electric Horizon',
    description: 'Ambient electronic artist creating soundscapes inspired by nature and urban environments.',
  },
  {
    day: 'Sunday',
    stage: 'Forest Stage',
    time: '3:00 PM',
    artist: 'Acoustic Gems',
    description: 'Intimate performances from solo artists and duos in the peaceful forest setting.',
  },
  {
    day: 'Sunday',
    stage: 'All Stages',
    time: '11:00 PM',
    artist: 'Closing Ceremony',
    description: 'Festival finale featuring a synchronized light show across all stages with special collaborative performance.',
    special: 'Final Event'
  }
];