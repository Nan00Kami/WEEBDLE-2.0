// animeData2.js - Master Character Catalog for Anidle Character Mode
const MASTER_CHARACTER_DATA = [
  // Neon Genesis Evangelion
  { id: 1, name: "Shinji Ikari", anime: "Neon Genesis Evangelion", genres: ["Action", "Drama", "Sci-Fi", "Suspense"], gender: "Male", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/5/74403.jpg" },
  { id: 2, name: "Asuka Langley Soryu", anime: "Neon Genesis Evangelion", genres: ["Action", "Drama", "Sci-Fi", "Suspense"], gender: "Female", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/11/48493.jpg" },
  { id: 3, name: "Rei Ayanami", anime: "Neon Genesis Evangelion", genres: ["Action", "Drama", "Sci-Fi", "Suspense"], gender: "Female", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/16/32338.jpg" },

  // Cowboy Bebop
  { id: 4, name: "Spike Spiegel", anime: "Cowboy Bebop", genres: ["Action", "Award Winning", "Sci-Fi"], gender: "Male", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/4/267761.jpg" },
  { id: 5, name: "Faye Valentine", anime: "Cowboy Bebop", genres: ["Action", "Award Winning", "Sci-Fi"], gender: "Female", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/13/30523.jpg" },
  { id: 6, name: "Jet Black", anime: "Cowboy Bebop", genres: ["Action", "Award Winning", "Sci-Fi"], gender: "Male", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/11/253723.jpg" },

  // Berserk
  { id: 7, name: "Guts", anime: "Berserk (1997)", genres: ["Action", "Adventure", "Drama", "Fantasy", "Supernatural"], gender: "Male", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/15/88548.jpg" },
  { id: 8, name: "Griffith", anime: "Berserk (1997)", genres: ["Action", "Adventure", "Drama", "Fantasy", "Supernatural"], gender: "Male", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/11/88549.jpg" },
  { id: 9, name: "Casca", anime: "Berserk (1997)", genres: ["Action", "Adventure", "Drama", "Fantasy", "Supernatural"], gender: "Female", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/10/88550.jpg" },

  // One Piece
  { id: 10, name: "Monkey D. Luffy", anime: "One Piece", genres: ["Action", "Adventure", "Fantasy"], gender: "Male", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/9/310307.jpg" },
  { id: 11, name: "Roronoa Zoro", anime: "One Piece", genres: ["Action", "Adventure", "Fantasy"], gender: "Male", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/3/100534.jpg" },
  { id: 12, name: "Nami", anime: "One Piece", genres: ["Action", "Adventure", "Fantasy"], gender: "Female", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/2/263249.jpg" },

  // Naruto
  { id: 13, name: "Naruto Uzumaki", anime: "Naruto", genres: ["Action", "Adventure", "Fantasy"], gender: "Male", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/2/284121.jpg" },
  { id: 14, name: "Sasuke Uchiha", anime: "Naruto", genres: ["Action", "Adventure", "Fantasy"], gender: "Male", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/9/131317.jpg" },
  { id: 15, name: "Kakashi Hatake", anime: "Naruto", genres: ["Action", "Adventure", "Fantasy"], gender: "Male", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/7/284129.jpg" },

  // Monster
  { id: 16, name: "Johan Liebert", anime: "Monster", genres: ["Drama", "Mystery", "Suspense"], gender: "Male", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/5/284131.jpg" },
  { id: 17, name: "Kenzo Tenma", anime: "Monster", genres: ["Drama", "Mystery", "Suspense"], gender: "Male", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/14/284133.jpg" },
  { id: 18, name: "Nina Fortner", anime: "Monster", genres: ["Drama", "Mystery", "Suspense"], gender: "Female", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/12/284135.jpg" },

  // Death Note
  { id: 19, name: "Light Yagami", anime: "Death Note", genres: ["Mystery", "Supernatural", "Suspense"], gender: "Male", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/6/63870.jpg" },
  { id: 20, name: "L Lawliet", anime: "Death Note", genres: ["Mystery", "Supernatural", "Suspense"], gender: "Male", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/10/249697.jpg" },
  { id: 21, name: "Ryuk", anime: "Death Note", genres: ["Mystery", "Supernatural", "Suspense"], gender: "Male", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/16/30677.jpg" },

  // Fullmetal Alchemist: Brotherhood
  { id: 22, name: "Edward Elric", anime: "Fullmetal Alchemist: Brotherhood", genres: ["Action", "Adventure", "Drama", "Fantasy"], gender: "Male", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/9/72533.jpg" },
  { id: 23, name: "Roy Mustang", anime: "Fullmetal Alchemist: Brotherhood", genres: ["Action", "Adventure", "Drama", "Fantasy"], gender: "Male", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/14/78887.jpg" },
  { id: 24, name: "Winry Rockbell", anime: "Fullmetal Alchemist: Brotherhood", genres: ["Action", "Adventure", "Drama", "Fantasy"], gender: "Female", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/7/72534.jpg" },

  // Steins;Gate
  { id: 25, name: "Rintaro Okabe", anime: "Steins;Gate", genres: ["Drama", "Sci-Fi", "Suspense"], gender: "Male", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/6/123066.jpg" },
  { id: 26, name: "Kurisu Makise", anime: "Steins;Gate", genres: ["Drama", "Sci-Fi", "Suspense"], gender: "Female", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/9/131331.jpg" },
  { id: 27, name: "Mayuri Shiina", anime: "Steins;Gate", genres: ["Drama", "Sci-Fi", "Suspense"], gender: "Female", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/15/131333.jpg" },

  // Attack on Titan
  { id: 28, name: "Eren Yeager", anime: "Attack on Titan", genres: ["Action", "Suspense"], gender: "Male", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/10/216895.jpg" },
  { id: 29, name: "Levi Ackerman", anime: "Attack on Titan", genres: ["Action", "Suspense"], gender: "Male", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/2/241413.jpg" },
  { id: 30, name: "Mikasa Ackerman", anime: "Attack on Titan", genres: ["Action", "Suspense"], gender: "Female", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/9/208595.jpg" },

  // Jujutsu Kaisen
  { id: 31, name: "Satoru Gojo", anime: "Jujutsu Kaisen", genres: ["Action", "Fantasy"], gender: "Male", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/14/428317.jpg" },
  { id: 32, name: "Yuji Itadori", anime: "Jujutsu Kaisen", genres: ["Action", "Fantasy"], gender: "Male", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/16/428315.jpg" },
  { id: 33, name: "Ryomen Sukuna", anime: "Jujutsu Kaisen", genres: ["Action", "Fantasy"], gender: "Male", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/13/428318.jpg" },

  // Frieren: Beyond Journey's End
  { id: 34, name: "Frieren", anime: "Frieren: Beyond Journey's End", genres: ["Adventure", "Drama", "Fantasy"], gender: "Female", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/15/524103.jpg" },
  { id: 35, name: "Fern", anime: "Frieren: Beyond Journey's End", genres: ["Adventure", "Drama", "Fantasy"], gender: "Female", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/8/524104.jpg" },
  { id: 36, name: "Stark", anime: "Frieren: Beyond Journey's End", genres: ["Adventure", "Drama", "Fantasy"], gender: "Male", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/4/524105.jpg" },

  // The Melancholy of Haruhi Suzumiya (Reality Warper example)
  { id: 37, name: "Haruhi Suzumiya", anime: "The Melancholy of Haruhi Suzumiya", genres: ["Comedy", "Mystery", "Sci-Fi"], gender: "Female", beatsGoku: true, image: "https://cdn.myanimelist.net/images/characters/9/72535.jpg" },
  { id: 38, name: "Kyon", anime: "The Melancholy of Haruhi Suzumiya", genres: ["Comedy", "Mystery", "Sci-Fi"], gender: "Male", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/11/72536.jpg" },
  { id: 39, name: "Yuki Nagato", anime: "The Melancholy of Haruhi Suzumiya", genres: ["Comedy", "Mystery", "Sci-Fi"], gender: "Female", beatsGoku: true, image: "https://cdn.myanimelist.net/images/characters/13/72537.jpg" },

  // Spy x Family
  { id: 40, name: "Anya Forger", anime: "Spy x Family", genres: ["Action", "Comedy"], gender: "Female", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/6/474136.jpg" },
  { id: 41, name: "Loid Forger", anime: "Spy x Family", genres: ["Action", "Comedy"], gender: "Male", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/12/474134.jpg" },
  { id: 42, name: "Yor Forger", anime: "Spy x Family", genres: ["Action", "Comedy"], gender: "Female", beatsGoku: false, image: "https://cdn.myanimelist.net/images/characters/10/474135.jpg" }
];
