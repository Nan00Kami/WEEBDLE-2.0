// animeData2.js - Master Character Catalog for Anidle Character Mode
const MASTER_CHARACTER_DATA = [
  // Neon Genesis Evangelion
  { id: 1, name: "Shinji Ikari", anime: "Neon Genesis Evangelion", genres: ["Action", "Drama", "Sci-Fi", "Suspense"], gender: "Male", beatsGoku: false, image: "https://img.anili.st/character/89" },
  { id: 2, name: "Asuka Langley Soryu", anime: "Neon Genesis Evangelion", genres: ["Action", "Drama", "Sci-Fi", "Suspense"], gender: "Female", beatsGoku: false, image: "https://img.anili.st/character/90" },
  { id: 3, name: "Rei Ayanami", anime: "Neon Genesis Evangelion", genres: ["Action", "Drama", "Sci-Fi", "Suspense"], gender: "Female", beatsGoku: false, image: "https://img.anili.st/character/88" },

  // Cowboy Bebop
  { id: 4, name: "Spike Spiegel", anime: "Cowboy Bebop", genres: ["Action", "Award Winning", "Sci-Fi"], gender: "Male", beatsGoku: false, image: "https://img.anili.st/character/1" },
  { id: 5, name: "Faye Valentine", anime: "Cowboy Bebop", genres: ["Action", "Award Winning", "Sci-Fi"], gender: "Female", beatsGoku: false, image: "https://img.anili.st/character/2" },
  { id: 6, name: "Jet Black", anime: "Cowboy Bebop", genres: ["Action", "Award Winning", "Sci-Fi"], gender: "Male", beatsGoku: false, image: "https://img.anili.st/character/3" },

  // Berserk
  { id: 7, name: "Guts", anime: "Berserk (1997)", genres: ["Action", "Adventure", "Drama", "Fantasy", "Supernatural"], gender: "Male", beatsGoku: false, image: "https://img.anili.st/character/422" },
  { id: 8, name: "Griffith", anime: "Berserk (1997)", genres: ["Action", "Adventure", "Drama", "Fantasy", "Supernatural"], gender: "Male", beatsGoku: false, image: "https://img.anili.st/character/423" },
  { id: 9, name: "Casca", anime: "Berserk (1997)", genres: ["Action", "Adventure", "Drama", "Fantasy", "Supernatural"], gender: "Female", beatsGoku: false, image: "https://img.anili.st/character/424" },

  // One Piece
  { id: 10, name: "Monkey D. Luffy", anime: "One Piece", genres: ["Action", "Adventure", "Fantasy"], gender: "Male", beatsGoku: false, image: "https://img.anili.st/character/40" },
  { id: 11, name: "Roronoa Zoro", anime: "One Piece", genres: ["Action", "Adventure", "Fantasy"], gender: "Male", beatsGoku: false, image: "https://img.anili.st/character/62" },
  { id: 12, name: "Nami", anime: "One Piece", genres: ["Action", "Adventure", "Fantasy"], gender: "Female", beatsGoku: false, image: "https://img.anili.st/character/724" },

  // Naruto
  { id: 13, name: "Naruto Uzumaki", anime: "Naruto", genres: ["Action", "Adventure", "Fantasy"], gender: "Male", beatsGoku: false, image: "https://img.anili.st/character/17" },
  { id: 14, name: "Sasuke Uchiha", anime: "Naruto", genres: ["Action", "Adventure", "Fantasy"], gender: "Male", beatsGoku: false, image: "https://img.anili.st/character/18" },
  { id: 15, name: "Kakashi Hatake", anime: "Naruto", genres: ["Action", "Adventure", "Fantasy"], gender: "Male", beatsGoku: false, image: "https://img.anili.st/character/85" },

  // Monster
  { id: 16, name: "Johan Liebert", anime: "Monster", genres: ["Drama", "Mystery", "Suspense"], gender: "Male", beatsGoku: false, image: "https://img.anili.st/character/719" },
  { id: 17, name: "Kenzo Tenma", anime: "Monster", genres: ["Drama", "Mystery", "Suspense"], gender: "Male", beatsGoku: false, image: "https://img.anili.st/character/718" },
  { id: 18, name: "Nina Fortner", anime: "Monster", genres: ["Drama", "Mystery", "Suspense"], gender: "Female", beatsGoku: false, image: "https://img.anili.st/character/720" },

  // Death Note
  { id: 19, name: "Light Yagami", anime: "Death Note", genres: ["Mystery", "Supernatural", "Suspense"], gender: "Male", beatsGoku: false, image: "https://img.anili.st/character/80" },
  { id: 20, name: "L Lawliet", anime: "Death Note", genres: ["Mystery", "Supernatural", "Suspense"], gender: "Male", beatsGoku: false, image: "https://img.anili.st/character/71" },
  { id: 21, name: "Ryuk", anime: "Death Note", genres: ["Mystery", "Supernatural", "Suspense"], gender: "Male", beatsGoku: false, image: "https://img.anili.st/character/2290" },

  // Fullmetal Alchemist: Brotherhood
  { id: 22, name: "Edward Elric", anime: "Fullmetal Alchemist: Brotherhood", genres: ["Action", "Adventure", "Drama", "Fantasy"], gender: "Male", beatsGoku: false, image: "https://img.anili.st/character/11" },
  { id: 23, name: "Roy Mustang", anime: "Fullmetal Alchemist: Brotherhood", genres: ["Action", "Adventure", "Drama", "Fantasy"], gender: "Male", beatsGoku: false, image: "https://img.anili.st/character/68" },
  { id: 24, name: "Winry Rockbell", anime: "Fullmetal Alchemist: Brotherhood", genres: ["Action", "Adventure", "Drama", "Fantasy"], gender: "Female", beatsGoku: false, image: "https://img.anili.st/character/70" },

  // Steins;Gate
  { id: 25, name: "Rintaro Okabe", anime: "Steins;Gate", genres: ["Drama", "Sci-Fi", "Suspense"], gender: "Male", beatsGoku: false, image: "https://img.anili.st/character/35252" },
  { id: 26, name: "Kurisu Makise", anime: "Steins;Gate", genres: ["Drama", "Sci-Fi", "Suspense"], gender: "Female", beatsGoku: false, image: "https://img.anili.st/character/35253" },
  { id: 27, name: "Mayuri Shiina", anime: "Steins;Gate", genres: ["Drama", "Sci-Fi", "Suspense"], gender: "Female", beatsGoku: false, image: "https://img.anili.st/character/35258" },

  // Attack on Titan
  { id: 28, name: "Eren Yeager", anime: "Attack on Titan", genres: ["Action", "Suspense"], gender: "Male", beatsGoku: false, image: "https://img.anili.st/character/40882" },
  { id: 29, name: "Levi Ackerman", anime: "Attack on Titan", genres: ["Action", "Suspense"], gender: "Male", beatsGoku: false, image: "https://img.anili.st/character/45627" },
  { id: 30, name: "Mikasa Ackerman", anime: "Attack on Titan", genres: ["Action", "Suspense"], gender: "Female", beatsGoku: false, image: "https://img.anili.st/character/40881" },

  // Jujutsu Kaisen
  { id: 31, name: "Satoru Gojo", anime: "Jujutsu Kaisen", genres: ["Action", "Fantasy"], gender: "Male", beatsGoku: false, image: "https://img.anili.st/character/127993" },
  { id: 32, name: "Yuji Itadori", anime: "Jujutsu Kaisen", genres: ["Action", "Fantasy"], gender: "Male", beatsGoku: false, image: "https://img.anili.st/character/133700" },
  { id: 33, name: "Ryomen Sukuna", anime: "Jujutsu Kaisen", genres: ["Action", "Fantasy"], gender: "Male", beatsGoku: false, image: "https://img.anili.st/character/163273" },

  // Frieren: Beyond Journey's End
  { id: 34, name: "Frieren", anime: "Frieren: Beyond Journey's End", genres: ["Adventure", "Drama", "Fantasy"], gender: "Female", beatsGoku: false, image: "https://img.anili.st/character/183204" },
  { id: 35, name: "Fern", anime: "Frieren: Beyond Journey's End", genres: ["Adventure", "Drama", "Fantasy"], gender: "Female", beatsGoku: false, image: "https://img.anili.st/character/183205" },
  { id: 36, name: "Stark", anime: "Frieren: Beyond Journey's End", genres: ["Adventure", "Drama", "Fantasy"], gender: "Male", beatsGoku: false, image: "https://img.anili.st/character/183206" },

  // The Melancholy of Haruhi Suzumiya
  { id: 37, name: "Haruhi Suzumiya", anime: "The Melancholy of Haruhi Suzumiya", genres: ["Comedy", "Mystery", "Sci-Fi"], gender: "Female", beatsGoku: true, image: "https://img.anili.st/character/251" },
  { id: 38, name: "Kyon", anime: "The Melancholy of Haruhi Suzumiya", genres: ["Comedy", "Mystery", "Sci-Fi"], gender: "Male", beatsGoku: false, image: "https://img.anili.st/character/252" },
  { id: 39, name: "Yuki Nagato", anime: "The Melancholy of Haruhi Suzumiya", genres: ["Comedy", "Mystery", "Sci-Fi"], gender: "Female", beatsGoku: true, image: "https://img.anili.st/character/249" },

  // Spy x Family
  { id: 40, name: "Anya Forger", anime: "Spy x Family", genres: ["Action", "Comedy"], gender: "Female", beatsGoku: false, image: "https://img.anili.st/character/139266" },
  { id: 41, name: "Loid Forger", anime: "Spy x Family", genres: ["Action", "Comedy"], gender: "Male", beatsGoku: false, image: "https://img.anili.st/character/139265" },
  { id: 42, name: "Yor Forger", anime: "Spy x Family", genres: ["Action", "Comedy"], gender: "Female", beatsGoku: false, image: "https://img.anili.st/character/139267" }
];
