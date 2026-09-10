// animeData2.js - Master Character Catalog
const MASTER_CHARACTER_DATA = [
  {
    "id": 1,
    "name": "Agumon",
    "anime": "Digimon Adventure",
    "genres": ["Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Agumon.jpg"
  },
  {
    "id": 2,
    "name": "Ai Hoshino",
    "anime": "Oshi no Ko",
    "genres": ["Drama", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Ai Hoshino.jpg"
  },
  {
    "id": 3,
    "name": "Aina Ardebit",
    "anime": "Promare",
    "genres": ["Action", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Aina Ardebit.jpg"
  },
  {
    "id": 4,
    "name": "Ainz Ooal Gown",
    "anime": "Overlord",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": true,
    "image": "images/characters/Ainz Ooal Gown.jpg"
  },
  {
    "id": 5,
    "name": "Airi Katagiri",
    "anime": "Erased",
    "genres": ["Mystery", "Supernatural", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Airi Katagiri.jpg"
  },
  {
    "id": 6,
    "name": "Akame",
    "anime": "Akame ga Kill!",
    "genres": ["Action", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Akame.jpg"
  },
  {
    "id": 7,
    "name": "Akane Mizuno",
    "anime": "Tsuki ga Kirei",
    "genres": ["Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Akane Mizuno.jpg"
  },
  {
    "id": 8,
    "name": "Akane Tsunemori",
    "anime": "Psycho-Pass",
    "genres": ["Action", "Sci-Fi", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Akane Tsunemori.jpg"
  },
  {
    "id": 9,
    "name": "Akashi",
    "anime": "The Tatami Galaxy",
    "genres": ["Comedy", "Mystery", "Psychological", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Akashi.jpg"
  },
  {
    "id": 10,
    "name": "Akatsuki",
    "anime": "Log Horizon",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Akatsuki.jpg"
  },
  {
    "id": 11,
    "name": "Akeno Himejima",
    "anime": "High School DxD",
    "genres": ["Action", "Comedy", "Ecchi", "Fantasy", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Akeno Himejima.jpg"
  },
  {
    "id": 12,
    "name": "Akira Fudo",
    "anime": "Devilman Crybaby",
    "genres": ["Action", "Horror", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Akira Fudo.jpg"
  },
  {
    "id": 13,
    "name": "Akito Tenkawa",
    "anime": "Martian Successor Nadesico",
    "genres": ["Action", "Comedy", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Akito Tenkawa.jpg"
  },
  {
    "id": 14,
    "name": "Aladdin",
    "anime": "Magi: The Labyrinth of Magic",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": true,
    "image": "images/characters/Aladdin.jpg"
  },
  {
    "id": 15,
    "name": "Albedo",
    "anime": "Overlord",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Albedo.jpg"
  },
  {
    "id": 16,
    "name": "Albert de Morcerf",
    "anime": "Gankutsuou: The Count of Monte Cristo",
    "genres": ["Drama", "Mystery", "Sci-Fi", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Albert de Morcerf.jpg"
  },
  {
    "id": 17,
    "name": "Alibaba Saluja",
    "anime": "Magi: The Labyrinth of Magic",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Alibaba Saluja.jpg"
  },
  {
    "id": 18,
    "name": "Alice Mizuki",
    "anime": "Serial Experiments Lain",
    "genres": ["Drama", "Mystery", "Sci-Fi", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Alice Mizuki.jpg"
  },
  {
    "id": 19,
    "name": "Allen Schezar",
    "anime": "The Vision of Escaflowne",
    "genres": ["Adventure", "Fantasy", "Romance", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Allen Schezar.jpg"
  },
  {
    "id": 20,
    "name": "Alpha",
    "anime": "The Eminence in Shadow",
    "genres": ["Action", "Comedy", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Alpha.jpg"
  },
  {
    "id": 21,
    "name": "Amane Fujimiya",
    "anime": "The Angel Next Door Spoils Me Rotten",
    "genres": ["Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Amane Fujimiya.jpg"
  },
  {
    "id": 22,
    "name": "Amber",
    "anime": "Darker than Black",
    "genres": ["Action", "Mystery", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": true,
    "image": "images/characters/Amber.jpg"
  },
  {
    "id": 23,
    "name": "Ame",
    "anime": "Wolf Children",
    "genres": ["Award Winning", "Drama", "Fantasy", "Slice of Life"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Ame.jpg"
  },
  {
    "id": 24,
    "name": "Ami Kawashima",
    "anime": "Toradora!",
    "genres": ["Drama", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Ami Kawashima.jpg"
  },
  {
    "id": 25,
    "name": "Andy",
    "anime": "Undead Unluck",
    "genres": ["Action", "Comedy", "Supernatural"],
    "gender": "Male",
    "beatsGoku": true,
    "image": "images/characters/Andy.jpg"
  },
  {
    "id": 26,
    "name": "Angelo Lagusa Avilio Bruno",
    "anime": "91 Days",
    "genres": ["Action", "Drama", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Angelo Lagusa Avilio Bruno.jpg"
  },
  {
    "id": 27,
    "name": "Anna Yamada",
    "anime": "The Dangers in My Heart",
    "genres": ["Comedy", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Anna Yamada.jpg"
  },
  {
    "id": 28,
    "name": "Anthy Himemiya",
    "anime": "Revolutionary Girl Utena",
    "genres": ["Drama", "Fantasy", "Mystery"],
    "gender": "Female",
    "beatsGoku": true,
    "image": "images/characters/Anthy Himemiya.jpg"
  },
  {
    "id": 29,
    "name": "Anya Forger",
    "anime": "Spy x Family",
    "genres": ["Action", "Comedy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Anya Forger.jpg"
  },
  {
    "id": 30,
    "name": "Anzu",
    "anime": "Hinamatsuri",
    "genres": ["Comedy", "Sci-Fi", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Anzu.jpg"
  },
  {
    "id": 31,
    "name": "Aqua Hoshino",
    "anime": "Oshi no Ko",
    "genres": ["Drama", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Aqua Hoshino.jpg"
  },
  {
    "id": 32,
    "name": "Aqua",
    "anime": "Konosuba: God's Blessing on this Wonderful World!",
    "genres": ["Adventure", "Comedy", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Aqua.jpg"
  },
  {
    "id": 33,
    "name": "Arata Kaizaki",
    "anime": "ReLIFE",
    "genres": ["Drama", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Arata Kaizaki.jpg"
  },
  {
    "id": 34,
    "name": "Arata Wataya",
    "anime": "Chihayafuru",
    "genres": ["Drama", "Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Arata Wataya.jpg"
  },
  {
    "id": 35,
    "name": "Arataka Reigen",
    "anime": "Mob Psycho 100",
    "genres": ["Action", "Comedy", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Arataka Reigen.jpg"
  },
  {
    "id": 36,
    "name": "Archer",
    "anime": "Fate/stay night: Unlimited Blade Works",
    "genres": ["Action", "Fantasy", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Archer.jpg"
  },
  {
    "id": 37,
    "name": "Arthur Boyle",
    "anime": "Fire Force",
    "genres": ["Action", "Sci-Fi", "Supernatural"],
    "gender": "Male",
    "beatsGoku": true,
    "image": "images/characters/Arthur Boyle.jpg"
  },
  {
    "id": 38,
    "name": "Arthur Pencilgon",
    "anime": "Shangri-La Frontier",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Arthur Pencilgon.jpg"
  },
  {
    "id": 39,
    "name": "Ash Lynx",
    "anime": "Banana Fish",
    "genres": ["Action", "Adventure", "Drama", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Ash Lynx.jpg"
  },
  {
    "id": 40,
    "name": "Ashitaka",
    "anime": "Princess Mononoke",
    "genres": ["Action", "Adventure", "Award Winning", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Ashitaka.jpg"
  },
  {
    "id": 41,
    "name": "Ashito Aoi",
    "anime": "Aoashi",
    "genres": ["Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Ashito Aoi.jpg"
  },
  {
    "id": 42,
    "name": "Asirpa",
    "anime": "Golden Kamuy",
    "genres": ["Action", "Adventure"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Asirpa.jpg"
  },
  {
    "id": 43,
    "name": "Askeladd",
    "anime": "Vinland Saga",
    "genres": ["Action", "Adventure", "Drama"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Askeladd.jpg"
  },
  {
    "id": 44,
    "name": "Asta",
    "anime": "Black Clover",
    "genres": ["Action", "Comedy", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Asta.jpg"
  },
  {
    "id": 45,
    "name": "Asuka Langley Soryu",
    "anime": "Neon Genesis Evangelion",
    "genres": ["Action", "Drama", "Sci-Fi", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Asuka Langley Soryu.jpg"
  },
  {
    "id": 46,
    "name": "Asuna Yuuki",
    "anime": "Sword Art Online",
    "genres": ["Action", "Adventure", "Fantasy", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Asuna Yuuki.jpg"
  },
  {
    "id": 47,
    "name": "Atom",
    "anime": "Pluto",
    "genres": ["Action", "Mystery", "Sci-Fi", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Atom.jpg"
  },
  {
    "id": 48,
    "name": "Atsushi Maeda Acchan",
    "anime": "Haven't You Heard? I'm Sakamoto",
    "genres": ["Comedy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Atsushi Maeda Acchan.jpg"
  },
  {
    "id": 49,
    "name": "Atsushi Nakajima",
    "anime": "Bungo Stray Dogs",
    "genres": ["Action", "Mystery", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Atsushi Nakajima.jpg"
  },
  {
    "id": 50,
    "name": "Ayane Yano",
    "anime": "Kimi ni Todoke",
    "genres": ["Drama", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Ayane Yano.jpg"
  },
  {
    "id": 51,
    "name": "Ayumi Otosaka",
    "anime": "Charlotte",
    "genres": ["Drama", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Ayumi Otosaka.jpg"
  },
  {
    "id": 52,
    "name": "Ayumu Fujino",
    "anime": "Look Back",
    "genres": ["Award Winning", "Drama"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Ayumu Fujino.jpg"
  },
  {
    "id": 53,
    "name": "Azusa Fuyutsuki",
    "anime": "Great Teacher Onizuka (GTO)",
    "genres": ["Comedy", "Drama"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Azusa Fuyutsuki.jpg"
  },
  {
    "id": 54,
    "name": "Azusa Nakano",
    "anime": "K-On!",
    "genres": ["Comedy", "Slice of Life"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Azusa Nakano.jpg"
  },
  {
    "id": 55,
    "name": "Ban",
    "anime": "The Seven Deadly Sins",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Ban.jpg"
  },
  {
    "id": 56,
    "name": "Banri Tada",
    "anime": "Golden Time",
    "genres": ["Comedy", "Drama", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Banri Tada.jpg"
  },
  {
    "id": 57,
    "name": "Batou",
    "anime": "Ghost in the Shell: Stand Alone Complex",
    "genres": ["Action", "Mystery", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Batou.jpg"
  },
  {
    "id": 58,
    "name": "Benimaru",
    "anime": "That Time I Got Reincarnated as a Slime",
    "genres": ["Action", "Adventure", "Comedy", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Benimaru.jpg"
  },
  {
    "id": 59,
    "name": "Bojji",
    "anime": "Ranking of Kings",
    "genres": ["Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Bojji.jpg"
  },
  {
    "id": 60,
    "name": "Caiman",
    "anime": "Dorohedoro",
    "genres": ["Action", "Comedy", "Fantasy", "Horror"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Caiman.jpg"
  },
  {
    "id": 61,
    "name": "Calcifer",
    "anime": "Howl's Moving Castle",
    "genres": ["Adventure", "Award Winning", "Drama", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Calcifer.jpg"
  },
  {
    "id": 62,
    "name": "Canute",
    "anime": "Vinland Saga",
    "genres": ["Action", "Adventure", "Drama"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Canute.jpg"
  },
  {
    "id": 63,
    "name": "Casca",
    "anime": "Berserk (1997)",
    "genres": ["Action", "Adventure", "Drama", "Fantasy", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Casca.jpg"
  },
  {
    "id": 64,
    "name": "Celty Sturluson",
    "anime": "Durarara!!",
    "genres": ["Action", "Mystery", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Celty Sturluson.jpg"
  },
  {
    "id": 65,
    "name": "Cha Hae in",
    "anime": "Solo Leveling",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Cha Hae-in.jpg"
  },
  {
    "id": 66,
    "name": "Cheza",
    "anime": "Wolf's Rain",
    "genres": ["Action", "Adventure", "Drama", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Cheza.jpg"
  },
  {
    "id": 67,
    "name": "Chiaki Mamiya",
    "anime": "The Girl Who Leapt Through Time",
    "genres": ["Award Winning", "Drama", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Chiaki Mamiya.jpg"
  },
  {
    "id": 68,
    "name": "Chihaya Ayase",
    "anime": "Chihayafuru",
    "genres": ["Drama", "Sports"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Chihaya Ayase.jpg"
  },
  {
    "id": 69,
    "name": "Chihiro Kobayashi",
    "anime": "The Dangers in My Heart",
    "genres": ["Comedy", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Chihiro Kobayashi.jpg"
  },
  {
    "id": 70,
    "name": "Chihiro Ogino",
    "anime": "Spirited Away",
    "genres": ["Adventure", "Award Winning", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Chihiro Ogino.jpg"
  },
  {
    "id": 71,
    "name": "Chika Amatori",
    "anime": "World Trigger",
    "genres": ["Action", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Chika Amatori.jpg"
  },
  {
    "id": 72,
    "name": "Chika Fujiwara",
    "anime": "Kaguya-sama: Love Is War",
    "genres": ["Comedy", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Chika Fujiwara.jpg"
  },
  {
    "id": 73,
    "name": "Chinatsu Kano",
    "anime": "Blue Box",
    "genres": ["Romance", "Sports"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Chinatsu Kano.jpg"
  },
  {
    "id": 74,
    "name": "Chisa Kotegawa",
    "anime": "Grand Blue Dreaming",
    "genres": ["Comedy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Chisa Kotegawa.jpg"
  },
  {
    "id": 75,
    "name": "Chisato Nishikigi",
    "anime": "Lycoris Recoil",
    "genres": ["Action"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Chisato Nishikigi.jpg"
  },
  {
    "id": 76,
    "name": "Chise Hatori",
    "anime": "The Ancient Magus' Bride",
    "genres": ["Drama", "Fantasy", "Mythology"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Chise Hatori.jpg"
  },
  {
    "id": 77,
    "name": "Chiyo Sakura",
    "anime": "Monthly Girls' Nozaki-kun",
    "genres": ["Comedy", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Chiyo Sakura.jpg"
  },
  {
    "id": 78,
    "name": "Chiyuki",
    "anime": "Death Parade",
    "genres": ["Drama", "Supernatural", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Chiyuki.jpg"
  },
  {
    "id": 79,
    "name": "Chizuru Hishiro",
    "anime": "ReLIFE",
    "genres": ["Drama", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Chizuru Hishiro.jpg"
  },
  {
    "id": 80,
    "name": "Chizuru Mizuhara",
    "anime": "Rent-a-Girlfriend",
    "genres": ["Comedy", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Chizuru Mizuhara.jpg"
  },
  {
    "id": 81,
    "name": "Chrollo Lucilfer",
    "anime": "Hunter x Hunter (2011)",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Chrollo Lucilfer.jpg"
  },
  {
    "id": 82,
    "name": "Chrome",
    "anime": "Dr. Stone",
    "genres": ["Adventure", "Comedy", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Chrome.jpg"
  },
  {
    "id": 83,
    "name": "Cid Kagenou Shadow",
    "anime": "The Eminence in Shadow",
    "genres": ["Action", "Comedy", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Cid Kagenou Shadow.jpg"
  },
  {
    "id": 84,
    "name": "Cinnabar",
    "anime": "Land of the Lustrous",
    "genres": ["Action", "Drama", "Fantasy"],
    "gender": "Non-Binary",
    "beatsGoku": false,
    "image": "images/characters/Cinnabar.jpg"
  },
  {
    "id": 85,
    "name": "Claire Stanfield",
    "anime": "Baccano!",
    "genres": ["Action", "Adventure", "Mystery", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Claire Stanfield.jpg"
  },
  {
    "id": 86,
    "name": "Clare",
    "anime": "Claymore",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Clare.jpg"
  },
  {
    "id": 87,
    "name": "Claudia Hodgins",
    "anime": "Violet Evergarden",
    "genres": ["Drama", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Claudia Hodgins.jpg"
  },
  {
    "id": 88,
    "name": "Corteo",
    "anime": "91 Days",
    "genres": ["Action", "Drama", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Corteo.jpg"
  },
  {
    "id": 89,
    "name": "Count of Monte Cristo",
    "anime": "Gankutsuou: The Count of Monte Cristo",
    "genres": ["Drama", "Mystery", "Sci-Fi", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Count of Monte Cristo.jpg"
  },
  {
    "id": 90,
    "name": "D",
    "anime": "Vampire Hunter D: Bloodlust",
    "genres": ["Action", "Fantasy", "Horror", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": true,
    "image": "images/characters/D.jpg"
  },
  {
    "id": 91,
    "name": "Daida",
    "anime": "Ranking of Kings",
    "genres": ["Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Daida.jpg"
  },
  {
    "id": 92,
    "name": "Daijin",
    "anime": "Suzume",
    "genres": ["Adventure", "Fantasy"],
    "gender": "Unknown",
    "beatsGoku": false,
    "image": "images/characters/Daijin.jpg"
  },
  {
    "id": 93,
    "name": "Darjeeling",
    "anime": "Girls und Panzer",
    "genres": ["Action", "Sports"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Darjeeling.jpg"
  },
  {
    "id": 94,
    "name": "David Martinez",
    "anime": "Cyberpunk: Edgerunners",
    "genres": ["Action", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/David Martinez.jpg"
  },
  {
    "id": 95,
    "name": "Death the Kid",
    "anime": "Soul Eater",
    "genres": ["Action", "Comedy", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Death the Kid.jpg"
  },
  {
    "id": 96,
    "name": "Decim",
    "anime": "Death Parade",
    "genres": ["Drama", "Supernatural", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Decim.jpg"
  },
  {
    "id": 97,
    "name": "Delta",
    "anime": "The Eminence in Shadow",
    "genres": ["Action", "Comedy", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Delta.jpg"
  },
  {
    "id": 98,
    "name": "Denji",
    "anime": "Chainsaw Man",
    "genres": ["Action", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Denji.jpg"
  },
  {
    "id": 99,
    "name": "Diamond",
    "anime": "Land of the Lustrous",
    "genres": ["Action", "Drama", "Fantasy"],
    "gender": "Non-Binary",
    "beatsGoku": false,
    "image": "images/characters/Diamond.jpg"
  },
  {
    "id": 100,
    "name": "Dimple",
    "anime": "Mob Psycho 100",
    "genres": ["Action", "Comedy", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Dimple.jpg"
  },
  {
    "id": 101,
    "name": "Dio Brando",
    "anime": "JoJo's Bizarre Adventure (2012)",
    "genres": ["Action", "Adventure", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Dio Brando.jpg"
  },
  {
    "id": 102,
    "name": "Dororo",
    "anime": "Dororo",
    "genres": ["Action", "Adventure", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Dororo.jpg"
  },
  {
    "id": 103,
    "name": "Dot Barrett",
    "anime": "Mashle: Magic and Muscles",
    "genres": ["Action", "Comedy", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Dot Barrett.jpg"
  },
  {
    "id": 104,
    "name": "Duo Maxwell",
    "anime": "Mobile Suit Gundam Wing",
    "genres": ["Action", "Drama", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Duo Maxwell.jpg"
  },
  {
    "id": 105,
    "name": "Edward Elric",
    "anime": "Fullmetal Alchemist: Brotherhood",
    "genres": ["Action", "Adventure", "Drama", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Edward Elric.jpg"
  },
  {
    "id": 106,
    "name": "Ei Sei",
    "anime": "Kingdom",
    "genres": ["Action"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Ei Sei.jpg"
  },
  {
    "id": 107,
    "name": "Eiji Okumura",
    "anime": "Banana Fish",
    "genres": ["Action", "Adventure", "Drama", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Eiji Okumura.jpg"
  },
  {
    "id": 108,
    "name": "Eijun Sawamura",
    "anime": "Diamond no Ace",
    "genres": ["Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Eijun Sawamura.jpg"
  },
  {
    "id": 109,
    "name": "Eikichi Onizuka",
    "anime": "Great Teacher Onizuka (GTO)",
    "genres": ["Comedy", "Drama"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Eikichi Onizuka.jpg"
  },
  {
    "id": 110,
    "name": "Eisaku Otomo",
    "anime": "Ping Pong the Animation",
    "genres": ["Award Winning", "Drama", "Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Eisaku Otomo.jpg"
  },
  {
    "id": 111,
    "name": "Elias Ainsworth",
    "anime": "The Ancient Magus' Bride",
    "genres": ["Drama", "Fantasy", "Mythology"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Elias Ainsworth.jpg"
  },
  {
    "id": 112,
    "name": "Elizabeth Liones",
    "anime": "The Seven Deadly Sins",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Elizabeth Liones.jpg"
  },
  {
    "id": 113,
    "name": "Emilia",
    "anime": "Re:Zero - Starting Life in Another World",
    "genres": ["Drama", "Fantasy", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Emilia.jpg"
  },
  {
    "id": 114,
    "name": "Emma",
    "anime": "The Promised Neverland",
    "genres": ["Mystery", "Sci-Fi", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Emma.jpg"
  },
  {
    "id": 115,
    "name": "Eren Yeager",
    "anime": "Attack on Titan",
    "genres": ["Action", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Eren Yeager.jpg"
  },
  {
    "id": 116,
    "name": "Erich von Rerugen",
    "anime": "The Saga of Tanya the Evil",
    "genres": ["Action", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Erich von Rerugen.jpg"
  },
  {
    "id": 117,
    "name": "Erina Nakiri",
    "anime": "Food Wars!: Shokugeki no Soma",
    "genres": ["Comedy", "Ecchi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Erina Nakiri.jpg"
  },
  {
    "id": 118,
    "name": "Eris Boreas Greyrat",
    "anime": "Mushoku Tensei: Jobless Reincarnation",
    "genres": ["Adventure", "Drama", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Eris Boreas Greyrat.jpg"
  },
  {
    "id": 119,
    "name": "Eru Chitanda",
    "anime": "Hyouka",
    "genres": ["Mystery", "Slice of Life"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Eru Chitanda.jpg"
  },
  {
    "id": 120,
    "name": "Erza Scarlet",
    "anime": "Fairy Tail",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Erza Scarlet.jpg"
  },
  {
    "id": 121,
    "name": "Esdeath",
    "anime": "Akame ga Kill!",
    "genres": ["Action", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Esdeath.jpg"
  },
  {
    "id": 122,
    "name": "Faye Valentine",
    "anime": "Cowboy Bebop",
    "genres": ["Action", "Award Winning", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Faye Valentine.jpg"
  },
  {
    "id": 123,
    "name": "Ferdinand",
    "anime": "Ascendance of a Bookworm",
    "genres": ["Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Ferdinand.jpg"
  },
  {
    "id": 124,
    "name": "Fern",
    "anime": "Frieren: Beyond Journey's End",
    "genres": ["Adventure", "Drama", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Fern.jpg"
  },
  {
    "id": 125,
    "name": "Filo",
    "anime": "The Rising of the Shield Hero",
    "genres": ["Action", "Adventure", "Drama", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Filo.jpg"
  },
  {
    "id": 126,
    "name": "Frederica Rosenfort",
    "anime": "86 -Eighty Six-",
    "genres": ["Action", "Drama", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Frederica Rosenfort.jpg"
  },
  {
    "id": 127,
    "name": "Frieren",
    "anime": "Frieren: Beyond Journey's End",
    "genres": ["Adventure", "Drama", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Frieren.jpg"
  },
  {
    "id": 128,
    "name": "Frisbee",
    "anime": "Redline",
    "genres": ["Action", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Frisbee.jpg"
  },
  {
    "id": 129,
    "name": "Fujino Adult",
    "anime": "Look Back",
    "genres": ["Award Winning", "Drama"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Fujino Adult.jpg"
  },
  {
    "id": 130,
    "name": "Fushi",
    "anime": "To Your Eternity",
    "genres": ["Adventure", "Drama", "Supernatural"],
    "gender": "Non-Binary",
    "beatsGoku": true,
    "image": "images/characters/Fushi.jpg"
  },
  {
    "id": 131,
    "name": "Fuuko Izumo",
    "anime": "Undead Unluck",
    "genres": ["Action", "Comedy", "Supernatural"],
    "gender": "Female",
    "beatsGoku": true,
    "image": "images/characters/Fuuko Izumo.jpg"
  },
  {
    "id": 132,
    "name": "Gabimaru",
    "anime": "Hell's Paradise",
    "genres": ["Action", "Fantasy", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Gabimaru.jpg"
  },
  {
    "id": 133,
    "name": "Gai Tsutsugami",
    "anime": "Guilty Crown",
    "genres": ["Action", "Drama", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Gai Tsutsugami.jpg"
  },
  {
    "id": 134,
    "name": "Galo Thymos",
    "anime": "Promare",
    "genres": ["Action", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Galo Thymos.jpg"
  },
  {
    "id": 135,
    "name": "Gansaku Nanbu",
    "anime": "Megalo Box",
    "genres": ["Action", "Drama", "Sci-Fi", "Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Gansaku Nanbu.jpg"
  },
  {
    "id": 136,
    "name": "Ganta Igarashi Woodpecker",
    "anime": "Deadman Wonderland",
    "genres": ["Action", "Horror", "Sci-Fi", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Ganta Igarashi Woodpecker.jpg"
  },
  {
    "id": 137,
    "name": "Ganta Nakami",
    "anime": "Insomniacs After School",
    "genres": ["Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Ganta Nakami.jpg"
  },
  {
    "id": 138,
    "name": "Gaoshun",
    "anime": "The Apothecary Diaries",
    "genres": ["Drama", "Mystery"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Gaoshun.jpg"
  },
  {
    "id": 139,
    "name": "Gene Starwind",
    "anime": "Outlaw Star",
    "genres": ["Action", "Adventure", "Comedy", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Gene Starwind.jpg"
  },
  {
    "id": 140,
    "name": "Genos",
    "anime": "One-Punch Man",
    "genres": ["Action", "Comedy", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Genos.jpg"
  },
  {
    "id": 141,
    "name": "Gesicht",
    "anime": "Pluto",
    "genres": ["Action", "Mystery", "Sci-Fi", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Gesicht.jpg"
  },
  {
    "id": 142,
    "name": "Gilbert Bougainvillea",
    "anime": "Violet Evergarden",
    "genres": ["Drama", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Gilbert Bougainvillea.jpg"
  },
  {
    "id": 143,
    "name": "Gilgamesh",
    "anime": "Fate/Zero",
    "genres": ["Action", "Fantasy", "Supernatural"],
    "gender": "Male",
    "beatsGoku": true,
    "image": "images/characters/Gilgamesh.jpg"
  },
  {
    "id": 144,
    "name": "Go Gunhee",
    "anime": "Solo Leveling",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Go Gunhee.jpg"
  },
  {
    "id": 145,
    "name": "Goblin Slayer",
    "anime": "Goblin Slayer",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Goblin Slayer.jpg"
  },
  {
    "id": 146,
    "name": "Gon Freecss",
    "anime": "Hunter x Hunter (2011)",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Gon Freecss.jpg"
  },
  {
    "id": 147,
    "name": "Gourry Gabriev",
    "anime": "Slayers",
    "genres": ["Adventure", "Comedy", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Gourry Gabriev.jpg"
  },
  {
    "id": 148,
    "name": "Griffith",
    "anime": "Berserk (1997)",
    "genres": ["Action", "Adventure", "Drama", "Fantasy", "Supernatural"],
    "gender": "Male",
    "beatsGoku": true,
    "image": "images/characters/Griffith.jpg"
  },
  {
    "id": 149,
    "name": "Guel Jeturk",
    "anime": "Mobile Suit Gundam: The Witch from Mercury",
    "genres": ["Action", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Guel Jeturk.jpg"
  },
  {
    "id": 150,
    "name": "Gugu",
    "anime": "To Your Eternity",
    "genres": ["Adventure", "Drama", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Gugu.jpg"
  },
  {
    "id": 151,
    "name": "Guts",
    "anime": "Berserk (1997)",
    "genres": ["Action", "Adventure", "Drama", "Fantasy", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Guts.jpg"
  },
  {
    "id": 152,
    "name": "Hachiman Hikigaya",
    "anime": "My Teen Romantic Comedy SNAFU (Oregairu)",
    "genres": ["Comedy", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Hachiman Hikigaya.jpg"
  },
  {
    "id": 153,
    "name": "Haiji Kiyose",
    "anime": "Run with the Wind",
    "genres": ["Drama", "Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Haiji Kiyose.jpg"
  },
  {
    "id": 154,
    "name": "Hajime Saito",
    "anime": "Rurouni Kenshin",
    "genres": ["Action", "Adventure", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Hajime Saito.jpg"
  },
  {
    "id": 155,
    "name": "Hajime Umemiya",
    "anime": "Wind Breaker",
    "genres": ["Action"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Hajime Umemiya.jpg"
  },
  {
    "id": 156,
    "name": "Han Daewi",
    "anime": "The God of High School",
    "genres": ["Action", "Supernatural"],
    "gender": "Male",
    "beatsGoku": true,
    "image": "images/characters/Han Daewi.jpg"
  },
  {
    "id": 157,
    "name": "Hana Midorikawa",
    "anime": "Prison School",
    "genres": ["Comedy", "Ecchi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Hana Midorikawa.jpg"
  },
  {
    "id": 158,
    "name": "Hana",
    "anime": "Wolf Children",
    "genres": ["Award Winning", "Drama", "Fantasy", "Slice of Life"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Hana.jpg"
  },
  {
    "id": 159,
    "name": "Hanako Honda",
    "anime": "Asobi Asobase",
    "genres": ["Comedy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Hanako Honda.jpg"
  },
  {
    "id": 160,
    "name": "Hanamichi Sakuragi",
    "anime": "Slam Dunk",
    "genres": ["Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Hanamichi Sakuragi.jpg"
  },
  {
    "id": 161,
    "name": "Haru",
    "anime": "Beastars",
    "genres": ["Drama", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Haru.jpg"
  },
  {
    "id": 162,
    "name": "Haruka Sakura",
    "anime": "Wind Breaker",
    "genres": ["Action"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Haruka Sakura.jpg"
  },
  {
    "id": 163,
    "name": "Haruki Shiga",
    "anime": "I Want to Eat Your Pancreas",
    "genres": ["Drama", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Haruki Shiga.jpg"
  },
  {
    "id": 164,
    "name": "Haruko Haruhara",
    "anime": "FLCL",
    "genres": ["Action", "Avant Garde", "Comedy", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Haruko Haruhara.jpg"
  },
  {
    "id": 165,
    "name": "Hayato Suo",
    "anime": "Wind Breaker",
    "genres": ["Action"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Hayato Suo.jpg"
  },
  {
    "id": 166,
    "name": "Haydée",
    "anime": "Gankutsuou: The Count of Monte Cristo",
    "genres": ["Drama", "Mystery", "Sci-Fi", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Haydée.jpg"
  },
  {
    "id": 167,
    "name": "Heero Yuy",
    "anime": "Mobile Suit Gundam Wing",
    "genres": ["Action", "Drama", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Heero Yuy.jpg"
  },
  {
    "id": 168,
    "name": "Hei",
    "anime": "Darker than Black",
    "genres": ["Action", "Mystery", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Hei.jpg"
  },
  {
    "id": 169,
    "name": "Hidenori Tabata",
    "anime": "Daily Lives of High School Boys",
    "genres": ["Comedy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Hidenori Tabata.jpg"
  },
  {
    "id": 170,
    "name": "High Elf Archer",
    "anime": "Goblin Slayer",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/High Elf Archer.jpg"
  },
  {
    "id": 171,
    "name": "Himeko Inaba",
    "anime": "Kokoro Connect",
    "genres": ["Drama", "Romance", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Himeko Inaba.jpg"
  },
  {
    "id": 172,
    "name": "Hina Amano",
    "anime": "Weathering with You",
    "genres": ["Award Winning", "Drama", "Fantasy", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Hina Amano.jpg"
  },
  {
    "id": 173,
    "name": "Hina Chono",
    "anime": "Blue Box",
    "genres": ["Romance", "Sports"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Hina Chono.jpg"
  },
  {
    "id": 174,
    "name": "Hina",
    "anime": "Hinamatsuri",
    "genres": ["Comedy", "Sci-Fi", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Hina.jpg"
  },
  {
    "id": 175,
    "name": "Hinata Miyake",
    "anime": "A Place Further Than the Universe",
    "genres": ["Adventure", "Comedy", "Drama"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Hinata Miyake.jpg"
  },
  {
    "id": 176,
    "name": "Hinata Shintani",
    "anime": "Maid Sama!",
    "genres": ["Comedy", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Hinata Shintani.jpg"
  },
  {
    "id": 177,
    "name": "Hiro",
    "anime": "Darling in the Franxx",
    "genres": ["Action", "Drama", "Romance", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Hiro.jpg"
  },
  {
    "id": 178,
    "name": "Hiromichi Kojima",
    "anime": "One Outs",
    "genres": ["Sports", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Hiromichi Kojima.jpg"
  },
  {
    "id": 179,
    "name": "Hiroto Suwa",
    "anime": "Orange",
    "genres": ["Drama", "Romance", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Hiroto Suwa.jpg"
  },
  {
    "id": 180,
    "name": "Hisoka Morow",
    "anime": "Hunter x Hunter (2011)",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Hisoka Morow.jpg"
  },
  {
    "id": 181,
    "name": "Hitagi Senjougahara",
    "anime": "Bakemonogatari",
    "genres": ["Mystery", "Romance", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Hitagi Senjougahara.jpg"
  },
  {
    "id": 182,
    "name": "Hitohito Tadano",
    "anime": "Komi Can't Communicate",
    "genres": ["Comedy", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Hitohito Tadano.jpg"
  },
  {
    "id": 183,
    "name": "Hitomi Kanzaki",
    "anime": "The Vision of Escaflowne",
    "genres": ["Adventure", "Fantasy", "Romance", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Hitomi Kanzaki.jpg"
  },
  {
    "id": 184,
    "name": "Hitori Gotoh Bocchi",
    "anime": "Bocchi the Rock!",
    "genres": ["Comedy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Hitori Gotoh Bocchi.jpg"
  },
  {
    "id": 185,
    "name": "Hiyori Iki",
    "anime": "Noragami",
    "genres": ["Action", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Hiyori Iki.jpg"
  },
  {
    "id": 186,
    "name": "Hizuru Minakata",
    "anime": "Summer Time Rendering",
    "genres": ["Mystery", "Supernatural", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Hizuru Minakata.jpg"
  },
  {
    "id": 187,
    "name": "Hodaka Morishima",
    "anime": "Weathering with You",
    "genres": ["Award Winning", "Drama", "Fantasy", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Hodaka Morishima.jpg"
  },
  {
    "id": 188,
    "name": "Holo",
    "anime": "Spice and Wolf",
    "genres": ["Adventure", "Drama", "Fantasy", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Holo.jpg"
  },
  {
    "id": 189,
    "name": "Homura Akemi",
    "anime": "Puella Magi Madoka Magica",
    "genres": ["Drama", "Fantasy", "Suspense"],
    "gender": "Female",
    "beatsGoku": true,
    "image": "images/characters/Homura Akemi.jpg"
  },
  {
    "id": 190,
    "name": "Houtarou Oreki",
    "anime": "Hyouka",
    "genres": ["Mystery", "Slice of Life"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Houtarou Oreki.jpg"
  },
  {
    "id": 191,
    "name": "Howl Jenkins Pendragon",
    "anime": "Howl's Moving Castle",
    "genres": ["Adventure", "Award Winning", "Drama", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Howl Jenkins Pendragon.jpg"
  },
  {
    "id": 192,
    "name": "Hyakkimaru",
    "anime": "Dororo",
    "genres": ["Action", "Adventure", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Hyakkimaru.jpg"
  },
  {
    "id": 193,
    "name": "Hyper Medicine Seller",
    "anime": "Mononoke",
    "genres": ["Fantasy", "Horror", "Mystery", "Supernatural"],
    "gender": "Male",
    "beatsGoku": true,
    "image": "images/characters/Hyper Medicine Seller.jpg"
  },
  {
    "id": 194,
    "name": "Ichigo",
    "anime": "Darling in the Franxx",
    "genres": ["Action", "Drama", "Romance", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Ichigo.jpg"
  },
  {
    "id": 195,
    "name": "Ichiro Miyata",
    "anime": "Hajime no Ippo",
    "genres": ["Action", "Comedy", "Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Ichiro Miyata.jpg"
  },
  {
    "id": 196,
    "name": "Ikki Kurogane",
    "anime": "Chivalry of a Failed Knight",
    "genres": ["Action", "Fantasy", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Ikki Kurogane.jpg"
  },
  {
    "id": 197,
    "name": "Inori Yuzuriha",
    "anime": "Guilty Crown",
    "genres": ["Action", "Drama", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Inori Yuzuriha.jpg"
  },
  {
    "id": 198,
    "name": "Iori Kitahara",
    "anime": "Grand Blue Dreaming",
    "genres": ["Comedy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Iori Kitahara.jpg"
  },
  {
    "id": 199,
    "name": "Iori Nagase",
    "anime": "Kokoro Connect",
    "genres": ["Drama", "Romance", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Iori Nagase.jpg"
  },
  {
    "id": 200,
    "name": "Ippo Makunouchi",
    "anime": "Hajime no Ippo",
    "genres": ["Action", "Comedy", "Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Ippo Makunouchi.jpg"
  },
  {
    "id": 201,
    "name": "Isaac Dian",
    "anime": "Baccano!",
    "genres": ["Action", "Adventure", "Mystery", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Isaac Dian.jpg"
  },
  {
    "id": 202,
    "name": "Isaki Magari",
    "anime": "Insomniacs After School",
    "genres": ["Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Isaki Magari.jpg"
  },
  {
    "id": 203,
    "name": "Isla",
    "anime": "Plastic Memories",
    "genres": ["Drama", "Romance", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Isla.jpg"
  },
  {
    "id": 204,
    "name": "Issei Hyoudou",
    "anime": "High School DxD",
    "genres": ["Action", "Comedy", "Ecchi", "Fantasy", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Issei Hyoudou.jpg"
  },
  {
    "id": 205,
    "name": "Itsuki Akasawa",
    "anime": "Initial D",
    "genres": ["Action", "Drama"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Itsuki Akasawa.jpg"
  },
  {
    "id": 206,
    "name": "Izaya Orihara",
    "anime": "Durarara!!",
    "genres": ["Action", "Mystery", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Izaya Orihara.jpg"
  },
  {
    "id": 207,
    "name": "Izuku Midoriya",
    "anime": "My Hero Academia",
    "genres": ["Action"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Izuku Midoriya.jpg"
  },
  {
    "id": 208,
    "name": "Izumi Akazawa",
    "anime": "Another",
    "genres": ["Horror", "Mystery", "Supernatural", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Izumi Akazawa.jpg"
  },
  {
    "id": 209,
    "name": "Izumi Miyamura",
    "anime": "Horimiya",
    "genres": ["Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Izumi Miyamura.jpg"
  },
  {
    "id": 210,
    "name": "Jet Black",
    "anime": "Cowboy Bebop",
    "genres": ["Action", "Award Winning", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Jet Black.jpg"
  },
  {
    "id": 211,
    "name": "Jim Hawking",
    "anime": "Outlaw Star",
    "genres": ["Action", "Adventure", "Comedy", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Jim Hawking.jpg"
  },
  {
    "id": 212,
    "name": "Jin Mori",
    "anime": "The God of High School",
    "genres": ["Action", "Supernatural"],
    "gender": "Male",
    "beatsGoku": true,
    "image": "images/characters/Jin Mori.jpg"
  },
  {
    "id": 213,
    "name": "Jinshi",
    "anime": "The Apothecary Diaries",
    "genres": ["Drama", "Mystery"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Jinshi.jpg"
  },
  {
    "id": 214,
    "name": "Jinta Yadomi",
    "anime": "Anohana: The Flower We Saw That Day",
    "genres": ["Drama", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Jinta Yadomi.jpg"
  },
  {
    "id": 215,
    "name": "Joe Junk Dog",
    "anime": "Megalo Box",
    "genres": ["Action", "Drama", "Sci-Fi", "Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Joe Junk Dog.jpg"
  },
  {
    "id": 216,
    "name": "Joey Wheeler",
    "anime": "Yu-Gi-Oh! Duel Monsters",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Joey Wheeler.jpg"
  },
  {
    "id": 217,
    "name": "Jonathan Joestar",
    "anime": "JoJo's Bizarre Adventure (2012)",
    "genres": ["Action", "Adventure", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Jonathan Joestar.jpg"
  },
  {
    "id": 218,
    "name": "Josee Kumiko Yamamura",
    "anime": "Josee, the Tiger and the Fish",
    "genres": ["Drama", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Josee Kumiko Yamamura.jpg"
  },
  {
    "id": 219,
    "name": "Joseph Joestar",
    "anime": "JoJo's Bizarre Adventure (2012)",
    "genres": ["Action", "Adventure", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Joseph Joestar.jpg"
  },
  {
    "id": 220,
    "name": "Juri Arisugawa",
    "anime": "Revolutionary Girl Utena",
    "genres": ["Drama", "Fantasy", "Mystery"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Juri Arisugawa.jpg"
  },
  {
    "id": 221,
    "name": "Kaede Rukawa",
    "anime": "Slam Dunk",
    "genres": ["Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kaede Rukawa.jpg"
  },
  {
    "id": 222,
    "name": "Kafka Hibino Kaiju No 8",
    "anime": "Kaiju No. 8",
    "genres": ["Action", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kafka Hibino Kaiju No 8.jpg"
  },
  {
    "id": 223,
    "name": "Kagami Hiiragi",
    "anime": "Lucky Star",
    "genres": ["Comedy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Kagami Hiiragi.jpg"
  },
  {
    "id": 224,
    "name": "Kage",
    "anime": "Ranking of Kings",
    "genres": ["Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kage.jpg"
  },
  {
    "id": 225,
    "name": "Kaguya Shinomiya",
    "anime": "Kaguya-sama: Love Is War",
    "genres": ["Comedy", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Kaguya Shinomiya.jpg"
  },
  {
    "id": 226,
    "name": "Kaiji Itou",
    "anime": "Kaiji: Ultimate Survivor",
    "genres": ["Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kaiji Itou.jpg"
  },
  {
    "id": 227,
    "name": "Kakeru Kurahara",
    "anime": "Run with the Wind",
    "genres": ["Drama", "Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kakeru Kurahara.jpg"
  },
  {
    "id": 228,
    "name": "Kakeru Naruse",
    "anime": "Orange",
    "genres": ["Drama", "Romance", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kakeru Naruse.jpg"
  },
  {
    "id": 229,
    "name": "Kanade Tachibana",
    "anime": "Angel Beats!",
    "genres": ["Action", "Comedy", "Drama", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Kanade Tachibana.jpg"
  },
  {
    "id": 230,
    "name": "Kaori Miyazono",
    "anime": "Your Lie in April",
    "genres": ["Drama", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Kaori Miyazono.jpg"
  },
  {
    "id": 231,
    "name": "Kaoru Kamiya",
    "anime": "Rurouni Kenshin",
    "genres": ["Action", "Adventure", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Kaoru Kamiya.jpg"
  },
  {
    "id": 232,
    "name": "Kaoru Sakurayashiki Cherry Blossom",
    "anime": "Sk8 the Infinity",
    "genres": ["Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kaoru Sakurayashiki Cherry Blossom.jpg"
  },
  {
    "id": 233,
    "name": "Karma Akabane",
    "anime": "Assassination Classroom",
    "genres": ["Action", "Comedy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Karma Akabane.jpg"
  },
  {
    "id": 234,
    "name": "Kasumi Nomura",
    "anime": "Asobi Asobase",
    "genres": ["Comedy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Kasumi Nomura.jpg"
  },
  {
    "id": 235,
    "name": "Katsuki Bakugo",
    "anime": "My Hero Academia",
    "genres": ["Action"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Katsuki Bakugo.jpg"
  },
  {
    "id": 236,
    "name": "Kaya Saimori",
    "anime": "My Happy Marriage",
    "genres": ["Drama", "Fantasy", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Kaya Saimori.jpg"
  },
  {
    "id": 237,
    "name": "Kayo Hinazuki",
    "anime": "Erased",
    "genres": ["Mystery", "Supernatural", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Kayo Hinazuki.jpg"
  },
  {
    "id": 238,
    "name": "Kayo",
    "anime": "Mononoke",
    "genres": ["Fantasy", "Horror", "Mystery", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Kayo.jpg"
  },
  {
    "id": 239,
    "name": "Kazuma Sato",
    "anime": "Konosuba: God's Blessing on this Wonderful World!",
    "genres": ["Adventure", "Comedy", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kazuma Sato.jpg"
  },
  {
    "id": 240,
    "name": "Kazutaka Hyoudou",
    "anime": "Kaiji: Ultimate Survivor",
    "genres": ["Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kazutaka Hyoudou.jpg"
  },
  {
    "id": 241,
    "name": "Kazuya Miyuki",
    "anime": "Diamond no Ace",
    "genres": ["Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kazuya Miyuki.jpg"
  },
  {
    "id": 242,
    "name": "Kei",
    "anime": "Akira",
    "genres": ["Action", "Award Winning", "Sci-Fi", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Kei.jpg"
  },
  {
    "id": 243,
    "name": "Keiichi Ikari",
    "anime": "Paranoia Agent",
    "genres": ["Avant Garde", "Drama", "Mystery", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Keiichi Ikari.jpg"
  },
  {
    "id": 244,
    "name": "Keisuke Suga",
    "anime": "Weathering with You",
    "genres": ["Award Winning", "Drama", "Fantasy", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Keisuke Suga.jpg"
  },
  {
    "id": 245,
    "name": "Keisuke Takahashi",
    "anime": "Initial D",
    "genres": ["Action", "Drama"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Keisuke Takahashi.jpg"
  },
  {
    "id": 246,
    "name": "Ken Kaneki",
    "anime": "Tokyo Ghoul",
    "genres": ["Action", "Horror", "Supernatural", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Ken Kaneki.jpg"
  },
  {
    "id": 247,
    "name": "Ken Ryuguji Draken",
    "anime": "Tokyo Revengers",
    "genres": ["Action", "Drama", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Ken Ryuguji Draken.jpg"
  },
  {
    "id": 248,
    "name": "Ken Takakura Okarun",
    "anime": "Dandadan",
    "genres": ["Action", "Comedy", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Ken Takakura Okarun.jpg"
  },
  {
    "id": 249,
    "name": "Kenji Koiso",
    "anime": "Summer Wars",
    "genres": ["Award Winning", "Comedy", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kenji Koiso.jpg"
  },
  {
    "id": 250,
    "name": "Kenshin Himura",
    "anime": "Rurouni Kenshin",
    "genres": ["Action", "Adventure", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kenshin Himura.jpg"
  },
  {
    "id": 251,
    "name": "Khun Aguero Agnes",
    "anime": "Tower of God",
    "genres": ["Action", "Adventure", "Drama", "Fantasy", "Mystery"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Khun Aguero Agnes.jpg"
  },
  {
    "id": 252,
    "name": "Kiba",
    "anime": "Wolf's Rain",
    "genres": ["Action", "Adventure", "Drama", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kiba.jpg"
  },
  {
    "id": 253,
    "name": "Kija White Dragon",
    "anime": "Yona of the Dawn",
    "genres": ["Action", "Adventure", "Fantasy", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kija White Dragon.jpg"
  },
  {
    "id": 254,
    "name": "Kikyo Kushida",
    "anime": "Classroom of the Elite",
    "genres": ["Drama", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Kikyo Kushida.jpg"
  },
  {
    "id": 255,
    "name": "Killua Zoldyck",
    "anime": "Hunter x Hunter (2011)",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Killua Zoldyck.jpg"
  },
  {
    "id": 256,
    "name": "King Kazma",
    "anime": "Summer Wars",
    "genres": ["Award Winning", "Comedy", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/King Kazma.jpg"
  },
  {
    "id": 257,
    "name": "Kintaro Oe",
    "anime": "Golden Boy",
    "genres": ["Adventure", "Comedy", "Ecchi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kintaro Oe.jpg"
  },
  {
    "id": 258,
    "name": "Kirari Momobami",
    "anime": "Kakegurui",
    "genres": ["Drama", "Mystery", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Kirari Momobami.jpg"
  },
  {
    "id": 259,
    "name": "Kirito",
    "anime": "Sword Art Online",
    "genres": ["Action", "Adventure", "Fantasy", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kirito.jpg"
  },
  {
    "id": 260,
    "name": "Kiritsugu Emiya",
    "anime": "Fate/Zero",
    "genres": ["Action", "Fantasy", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kiritsugu Emiya.jpg"
  },
  {
    "id": 261,
    "name": "Kiruko",
    "anime": "Heavenly Delusion",
    "genres": ["Adventure", "Mystery", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Kiruko.jpg"
  },
  {
    "id": 262,
    "name": "Kiyoka Kudo",
    "anime": "My Happy Marriage",
    "genres": ["Drama", "Fantasy", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kiyoka Kudo.jpg"
  },
  {
    "id": 263,
    "name": "Kiyoshi Fujino",
    "anime": "Prison School",
    "genres": ["Comedy", "Ecchi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kiyoshi Fujino.jpg"
  },
  {
    "id": 264,
    "name": "Kiyotaka Ayanokoji",
    "anime": "Classroom of the Elite",
    "genres": ["Drama", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kiyotaka Ayanokoji.jpg"
  },
  {
    "id": 265,
    "name": "Klaus von Reinherz",
    "anime": "Blood Blockade Battlefront",
    "genres": ["Action", "Comedy", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Klaus von Reinherz.jpg"
  },
  {
    "id": 266,
    "name": "Kohaku",
    "anime": "Dr. Stone",
    "genres": ["Adventure", "Comedy", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Kohaku.jpg"
  },
  {
    "id": 267,
    "name": "Kohei Imamura",
    "anime": "Grand Blue Dreaming",
    "genres": ["Comedy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kohei Imamura.jpg"
  },
  {
    "id": 268,
    "name": "Koichi Sakakibara",
    "anime": "Another",
    "genres": ["Horror", "Mystery", "Supernatural", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Koichi Sakakibara.jpg"
  },
  {
    "id": 269,
    "name": "Konata Izumi",
    "anime": "Lucky Star",
    "genres": ["Comedy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Konata Izumi.jpg"
  },
  {
    "id": 270,
    "name": "Kong Wenge China",
    "anime": "Ping Pong the Animation",
    "genres": ["Award Winning", "Drama", "Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kong Wenge China.jpg"
  },
  {
    "id": 271,
    "name": "Koro sensei",
    "anime": "Assassination Classroom",
    "genres": ["Action", "Comedy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Koro-sensei.jpg"
  },
  {
    "id": 272,
    "name": "Kosaku Tokita",
    "anime": "Paprika",
    "genres": ["Avant Garde", "Fantasy", "Mystery", "Sci-Fi", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kosaku Tokita.jpg"
  },
  {
    "id": 273,
    "name": "Kotaro Azumi",
    "anime": "Tsuki ga Kirei",
    "genres": ["Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kotaro Azumi.jpg"
  },
  {
    "id": 274,
    "name": "Kouko Kaga",
    "anime": "Golden Time",
    "genres": ["Comedy", "Drama", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Kouko Kaga.jpg"
  },
  {
    "id": 275,
    "name": "Kousei Arima",
    "anime": "Your Lie in April",
    "genres": ["Drama", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kousei Arima.jpg"
  },
  {
    "id": 276,
    "name": "Kousuke Tsuda",
    "anime": "The Girl Who Leapt Through Time",
    "genres": ["Award Winning", "Drama", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kousuke Tsuda.jpg"
  },
  {
    "id": 277,
    "name": "Koyomi Araragi",
    "anime": "Bakemonogatari",
    "genres": ["Mystery", "Romance", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Koyomi Araragi.jpg"
  },
  {
    "id": 278,
    "name": "Kraft Lawrence",
    "anime": "Spice and Wolf",
    "genres": ["Adventure", "Drama", "Fantasy", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kraft Lawrence.jpg"
  },
  {
    "id": 279,
    "name": "Kudelia Aina Bernstein",
    "anime": "Mobile Suit Gundam: Iron-Blooded Orphans",
    "genres": ["Action", "Drama", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Kudelia Aina Bernstein.jpg"
  },
  {
    "id": 280,
    "name": "Kurapika",
    "anime": "Hunter x Hunter (2011)",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kurapika.jpg"
  },
  {
    "id": 281,
    "name": "Kurisu Makise",
    "anime": "Steins;Gate",
    "genres": ["Drama", "Sci-Fi", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Kurisu Makise.jpg"
  },
  {
    "id": 282,
    "name": "Kusuo Saiki",
    "anime": "The Disastrous Life of Saiki K.",
    "genres": ["Comedy", "Supernatural"],
    "gender": "Male",
    "beatsGoku": true,
    "image": "images/characters/Kusuo Saiki.jpg"
  },
  {
    "id": 283,
    "name": "Kyoko Hori",
    "anime": "Horimiya",
    "genres": ["Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Kyoko Hori.jpg"
  },
  {
    "id": 284,
    "name": "Kyoko",
    "anime": "Clannad: After Story",
    "genres": ["Drama", "Romance", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Kyoko.jpg"
  },
  {
    "id": 285,
    "name": "Kyomoto",
    "anime": "Look Back",
    "genres": ["Award Winning", "Drama"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Kyomoto.jpg"
  },
  {
    "id": 286,
    "name": "Kyotaro Ichikawa",
    "anime": "The Dangers in My Heart",
    "genres": ["Comedy", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kyotaro Ichikawa.jpg"
  },
  {
    "id": 287,
    "name": "Kyou Kai",
    "anime": "Kingdom",
    "genres": ["Action"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Kyou Kai.jpg"
  },
  {
    "id": 288,
    "name": "Kyoya Hibari",
    "anime": "Katekyo Hitman Reborn!",
    "genres": ["Action", "Comedy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Kyoya Hibari.jpg"
  },
  {
    "id": 289,
    "name": "Lady Eboshi",
    "anime": "Princess Mononoke",
    "genres": ["Action", "Adventure", "Award Winning", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Lady Eboshi.jpg"
  },
  {
    "id": 290,
    "name": "Lady Himi",
    "anime": "The Boy and the Heron",
    "genres": ["Adventure", "Award Winning", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Lady Himi.jpg"
  },
  {
    "id": 291,
    "name": "Lain Iwakura",
    "anime": "Serial Experiments Lain",
    "genres": ["Drama", "Mystery", "Sci-Fi", "Supernatural"],
    "gender": "Female",
    "beatsGoku": true,
    "image": "images/characters/Lain Iwakura.jpg"
  },
  {
    "id": 292,
    "name": "Laios Touden",
    "anime": "Delicious in Dungeon",
    "genres": ["Adventure", "Comedy", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Laios Touden.jpg"
  },
  {
    "id": 293,
    "name": "Lance Crown",
    "anime": "Mashle: Magic and Muscles",
    "genres": ["Action", "Comedy", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Lance Crown.jpg"
  },
  {
    "id": 294,
    "name": "Langa Hasegawa Snow",
    "anime": "Sk8 the Infinity",
    "genres": ["Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Langa Hasegawa Snow.jpg"
  },
  {
    "id": 295,
    "name": "Left Hand",
    "anime": "Vampire Hunter D: Bloodlust",
    "genres": ["Action", "Fantasy", "Horror", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": true,
    "image": "images/characters/Left Hand.jpg"
  },
  {
    "id": 296,
    "name": "Legoshi",
    "anime": "Beastars",
    "genres": ["Drama", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Legoshi.jpg"
  },
  {
    "id": 297,
    "name": "Leonardo Watch",
    "anime": "Blood Blockade Battlefront",
    "genres": ["Action", "Comedy", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Leonardo Watch.jpg"
  },
  {
    "id": 298,
    "name": "Levi Ackerman",
    "anime": "Attack on Titan",
    "genres": ["Action", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Levi Ackerman.jpg"
  },
  {
    "id": 299,
    "name": "Lina Inverse",
    "anime": "Slayers",
    "genres": ["Adventure", "Comedy", "Fantasy"],
    "gender": "Female",
    "beatsGoku": true,
    "image": "images/characters/Lina Inverse.jpg"
  },
  {
    "id": 300,
    "name": "Linda Nana Hayashida",
    "anime": "Golden Time",
    "genres": ["Comedy", "Drama", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Linda Nana Hayashida.jpg"
  },
  {
    "id": 301,
    "name": "Lio Fotia",
    "anime": "Promare",
    "genres": ["Action", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Lio Fotia.jpg"
  },
  {
    "id": 302,
    "name": "Lisa Mishima",
    "anime": "Terror in Resonance",
    "genres": ["Mystery", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Lisa Mishima.jpg"
  },
  {
    "id": 303,
    "name": "Lockon Stratos Neil Dylandy",
    "anime": "Mobile Suit Gundam 00",
    "genres": ["Action", "Drama", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Lockon Stratos Neil Dylandy.jpg"
  },
  {
    "id": 304,
    "name": "Loid Forger",
    "anime": "Spy x Family",
    "genres": ["Action", "Comedy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Loid Forger.jpg"
  },
  {
    "id": 305,
    "name": "Louis James Moriarty",
    "anime": "Moriarty the Patriot",
    "genres": ["Mystery", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Louis James Moriarty.jpg"
  },
  {
    "id": 306,
    "name": "Louis",
    "anime": "Beastars",
    "genres": ["Drama", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Louis.jpg"
  },
  {
    "id": 307,
    "name": "Lu Shaotang",
    "anime": "Sakamoto Days",
    "genres": ["Action", "Comedy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Lu Shaotang.jpg"
  },
  {
    "id": 308,
    "name": "Lucy Heartfilia",
    "anime": "Fairy Tail",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Lucy Heartfilia.jpg"
  },
  {
    "id": 309,
    "name": "Lucy",
    "anime": "Cyberpunk: Edgerunners",
    "genres": ["Action", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Lucy.jpg"
  },
  {
    "id": 310,
    "name": "Lutz",
    "anime": "Ascendance of a Bookworm",
    "genres": ["Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Lutz.jpg"
  },
  {
    "id": 311,
    "name": "Madame President",
    "anime": "Golden Boy",
    "genres": ["Adventure", "Comedy", "Ecchi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Madame President.jpg"
  },
  {
    "id": 312,
    "name": "Madoka Kaname",
    "anime": "Puella Magi Madoka Magica",
    "genres": ["Drama", "Fantasy", "Suspense"],
    "gender": "Female",
    "beatsGoku": true,
    "image": "images/characters/Madoka Kaname.jpg"
  },
  {
    "id": 313,
    "name": "Mahiru Shiina",
    "anime": "The Angel Next Door Spoils Me Rotten",
    "genres": ["Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Mahiru Shiina.jpg"
  },
  {
    "id": 314,
    "name": "Mahito Maki",
    "anime": "The Boy and the Heron",
    "genres": ["Adventure", "Award Winning", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Mahito Maki.jpg"
  },
  {
    "id": 315,
    "name": "Mai Ninomiya",
    "anime": "Josee, the Tiger and the Fish",
    "genres": ["Drama", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Mai Ninomiya.jpg"
  },
  {
    "id": 316,
    "name": "Mai Sakurajima",
    "anime": "Rascal Does Not Dream of Bunny Girl Senpai",
    "genres": ["Drama", "Romance", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Mai Sakurajima.jpg"
  },
  {
    "id": 317,
    "name": "Majima",
    "anime": "Lycoris Recoil",
    "genres": ["Action"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Majima.jpg"
  },
  {
    "id": 318,
    "name": "Maka Albarn",
    "anime": "Soul Eater",
    "genres": ["Action", "Comedy", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Maka Albarn.jpg"
  },
  {
    "id": 319,
    "name": "Makima",
    "anime": "Chainsaw Man",
    "genres": ["Action", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Makima.jpg"
  },
  {
    "id": 320,
    "name": "Mako Mankanshoku",
    "anime": "Kill la Kill",
    "genres": ["Action", "Comedy", "Ecchi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Mako Mankanshoku.jpg"
  },
  {
    "id": 321,
    "name": "Makoto Konno",
    "anime": "The Girl Who Leapt Through Time",
    "genres": ["Award Winning", "Drama", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Makoto Konno.jpg"
  },
  {
    "id": 322,
    "name": "Makoto Tsukimoto Smile",
    "anime": "Ping Pong the Animation",
    "genres": ["Award Winning", "Drama", "Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Makoto Tsukimoto Smile.jpg"
  },
  {
    "id": 323,
    "name": "Mamimi Samejima",
    "anime": "FLCL",
    "genres": ["Action", "Avant Garde", "Comedy", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Mamimi Samejima.jpg"
  },
  {
    "id": 324,
    "name": "Mamoru Takamura",
    "anime": "Hajime no Ippo",
    "genres": ["Action", "Comedy", "Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Mamoru Takamura.jpg"
  },
  {
    "id": 325,
    "name": "Manjiro Sano Mikey",
    "anime": "Tokyo Revengers",
    "genres": ["Action", "Drama", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Manjiro Sano Mikey.jpg"
  },
  {
    "id": 326,
    "name": "Maomao",
    "anime": "The Apothecary Diaries",
    "genres": ["Drama", "Mystery"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Maomao.jpg"
  },
  {
    "id": 327,
    "name": "March",
    "anime": "To Your Eternity",
    "genres": ["Adventure", "Drama", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/March.jpg"
  },
  {
    "id": 328,
    "name": "Marcille Donato",
    "anime": "Delicious in Dungeon",
    "genres": ["Adventure", "Comedy", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Marcille Donato.jpg"
  },
  {
    "id": 329,
    "name": "Mari Tamaki",
    "anime": "A Place Further Than the Universe",
    "genres": ["Adventure", "Comedy", "Drama"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Mari Tamaki.jpg"
  },
  {
    "id": 330,
    "name": "Marin Kitagawa",
    "anime": "My Dress-Up Darling",
    "genres": ["Comedy", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Marin Kitagawa.jpg"
  },
  {
    "id": 331,
    "name": "Maru",
    "anime": "Heavenly Delusion",
    "genres": ["Adventure", "Mystery", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Maru.jpg"
  },
  {
    "id": 332,
    "name": "Mary Saotome",
    "anime": "Kakegurui",
    "genres": ["Drama", "Mystery", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Mary Saotome.jpg"
  },
  {
    "id": 333,
    "name": "Mash Burnedead",
    "anime": "Mashle: Magic and Muscles",
    "genres": ["Action", "Comedy", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Mash Burnedead.jpg"
  },
  {
    "id": 334,
    "name": "Mashiro Shiina",
    "anime": "The Pet Girl of Sakurasou",
    "genres": ["Comedy", "Drama", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Mashiro Shiina.jpg"
  },
  {
    "id": 335,
    "name": "Matt Ishida Yamato",
    "anime": "Digimon Adventure",
    "genres": ["Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Matt Ishida Yamato.jpg"
  },
  {
    "id": 336,
    "name": "Mayuri Shiina",
    "anime": "Steins;Gate",
    "genres": ["Drama", "Sci-Fi", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Mayuri Shiina.jpg"
  },
  {
    "id": 337,
    "name": "Me Mania Uchida",
    "anime": "Perfect Blue",
    "genres": ["Avant Garde", "Drama", "Horror", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Me-Mania Uchida.jpg"
  },
  {
    "id": 338,
    "name": "Medicine Seller Kusuriuri",
    "anime": "Mononoke",
    "genres": ["Fantasy", "Horror", "Mystery", "Supernatural"],
    "gender": "Male",
    "beatsGoku": true,
    "image": "images/characters/Medicine Seller Kusuriuri.jpg"
  },
  {
    "id": 339,
    "name": "Megumi Fushiguro",
    "anime": "Jujutsu Kaisen",
    "genres": ["Action", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Megumi Fushiguro.jpg"
  },
  {
    "id": 340,
    "name": "Megumi Shimizu",
    "anime": "Shiki",
    "genres": ["Horror", "Mystery", "Supernatural", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Megumi Shimizu.jpg"
  },
  {
    "id": 341,
    "name": "Megumi Tadokoro",
    "anime": "Food Wars!: Shokugeki no Soma",
    "genres": ["Comedy", "Ecchi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Megumi Tadokoro.jpg"
  },
  {
    "id": 342,
    "name": "Megumin",
    "anime": "Konosuba: God's Blessing on this Wonderful World!",
    "genres": ["Adventure", "Comedy", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Megumin.jpg"
  },
  {
    "id": 343,
    "name": "Meguru Bachira",
    "anime": "Blue Lock",
    "genres": ["Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Meguru Bachira.jpg"
  },
  {
    "id": 344,
    "name": "Mei Misaki",
    "anime": "Another",
    "genres": ["Horror", "Mystery", "Supernatural", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Mei Misaki.jpg"
  },
  {
    "id": 345,
    "name": "Meier Link",
    "anime": "Vampire Hunter D: Bloodlust",
    "genres": ["Action", "Fantasy", "Horror", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Meier Link.jpg"
  },
  {
    "id": 346,
    "name": "Meiko Honma",
    "anime": "Anohana: The Flower We Saw That Day",
    "genres": ["Drama", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Meiko Honma.jpg"
  },
  {
    "id": 347,
    "name": "Meiko Shiraki",
    "anime": "Prison School",
    "genres": ["Comedy", "Ecchi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Meiko Shiraki.jpg"
  },
  {
    "id": 348,
    "name": "Melfina",
    "anime": "Outlaw Star",
    "genres": ["Action", "Adventure", "Comedy", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Melfina.jpg"
  },
  {
    "id": 349,
    "name": "Meliodas",
    "anime": "The Seven Deadly Sins",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Meliodas.jpg"
  },
  {
    "id": 350,
    "name": "Meruem",
    "anime": "Hunter x Hunter (2011)",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Meruem.jpg"
  },
  {
    "id": 351,
    "name": "Meryl Stryfe",
    "anime": "Trigun",
    "genres": ["Action", "Adventure", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Meryl Stryfe.jpg"
  },
  {
    "id": 352,
    "name": "Michiru Kinushima",
    "anime": "Plastic Memories",
    "genres": ["Drama", "Romance", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Michiru Kinushima.jpg"
  },
  {
    "id": 353,
    "name": "Midori Asakusa",
    "anime": "Keep Your Hands Off Eizouken!",
    "genres": ["Adventure", "Comedy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Midori Asakusa.jpg"
  },
  {
    "id": 354,
    "name": "Migi",
    "anime": "Parasyte -the maxim-",
    "genres": ["Action", "Horror", "Sci-Fi"],
    "gender": "Non-Binary",
    "beatsGoku": false,
    "image": "images/characters/Migi.jpg"
  },
  {
    "id": 355,
    "name": "Miho Nishizumi",
    "anime": "Girls und Panzer",
    "genres": ["Action", "Sports"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Miho Nishizumi.jpg"
  },
  {
    "id": 356,
    "name": "Mikasa Ackerman",
    "anime": "Attack on Titan",
    "genres": ["Action", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Mikasa Ackerman.jpg"
  },
  {
    "id": 357,
    "name": "Mikazuki Augus",
    "anime": "Mobile Suit Gundam: Iron-Blooded Orphans",
    "genres": ["Action", "Drama", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Mikazuki Augus.jpg"
  },
  {
    "id": 358,
    "name": "Miki Makimura",
    "anime": "Devilman Crybaby",
    "genres": ["Action", "Horror", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Miki Makimura.jpg"
  },
  {
    "id": 359,
    "name": "Miki Okudera",
    "anime": "Your Name.",
    "genres": ["Award Winning", "Drama", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Miki Okudera.jpg"
  },
  {
    "id": 360,
    "name": "Mikiya Kokutou",
    "anime": "Kara no Kyoukai",
    "genres": ["Action", "Mystery", "Supernatural", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Mikiya Kokutou.jpg"
  },
  {
    "id": 361,
    "name": "Mikoshiba Mikoto",
    "anime": "Monthly Girls' Nozaki-kun",
    "genres": ["Comedy", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Mikoshiba Mikoto.jpg"
  },
  {
    "id": 362,
    "name": "Milim Nava",
    "anime": "That Time I Got Reincarnated as a Slime",
    "genres": ["Action", "Adventure", "Comedy", "Fantasy"],
    "gender": "Female",
    "beatsGoku": true,
    "image": "images/characters/Milim Nava.jpg"
  },
  {
    "id": 363,
    "name": "Mima Kirigoe",
    "anime": "Perfect Blue",
    "genres": ["Avant Garde", "Drama", "Horror", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Mima Kirigoe.jpg"
  },
  {
    "id": 364,
    "name": "Mina Ashiro",
    "anime": "Kaiju No. 8",
    "genres": ["Action", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Mina Ashiro.jpg"
  },
  {
    "id": 365,
    "name": "Minene Uryu",
    "anime": "Mirai Nikki",
    "genres": ["Action", "Supernatural", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Minene Uryu.jpg"
  },
  {
    "id": 366,
    "name": "Mio Akiyama",
    "anime": "K-On!",
    "genres": ["Comedy", "Slice of Life"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Mio Akiyama.jpg"
  },
  {
    "id": 367,
    "name": "Miorine Rembran",
    "anime": "Mobile Suit Gundam: The Witch from Mercury",
    "genres": ["Action", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Miorine Rembran.jpg"
  },
  {
    "id": 368,
    "name": "Miria Harvent",
    "anime": "Baccano!",
    "genres": ["Action", "Adventure", "Mystery", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Miria Harvent.jpg"
  },
  {
    "id": 369,
    "name": "Misaki Ayuzawa",
    "anime": "Maid Sama!",
    "genres": ["Comedy", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Misaki Ayuzawa.jpg"
  },
  {
    "id": 370,
    "name": "Mitsuha Miyamizu",
    "anime": "Your Name.",
    "genres": ["Award Winning", "Drama", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Mitsuha Miyamizu.jpg"
  },
  {
    "id": 371,
    "name": "Miyo Saimori",
    "anime": "My Happy Marriage",
    "genres": ["Drama", "Fantasy", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Miyo Saimori.jpg"
  },
  {
    "id": 372,
    "name": "Miyuki Shirogane",
    "anime": "Kaguya-sama: Love Is War",
    "genres": ["Comedy", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Miyuki Shirogane.jpg"
  },
  {
    "id": 373,
    "name": "Mizuki",
    "anime": "Kamisama Kiss",
    "genres": ["Comedy", "Fantasy", "Romance", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Mizuki.jpg"
  },
  {
    "id": 374,
    "name": "Momo Ayase",
    "anime": "Dandadan",
    "genres": ["Action", "Comedy", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Momo Ayase.jpg"
  },
  {
    "id": 375,
    "name": "Monkey D Luffy",
    "anime": "One Piece",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Monkey D Luffy.jpg"
  },
  {
    "id": 376,
    "name": "Morgiana",
    "anime": "Magi: The Labyrinth of Magic",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Morgiana.jpg"
  },
  {
    "id": 377,
    "name": "Motoko Kusanagi",
    "anime": "Ghost in the Shell: Stand Alone Complex",
    "genres": ["Action", "Mystery", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Motoko Kusanagi.jpg"
  },
  {
    "id": 378,
    "name": "Myne Rozemyne",
    "anime": "Ascendance of a Bookworm",
    "genres": ["Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Myne Rozemyne.jpg"
  },
  {
    "id": 379,
    "name": "Nagisa Furukawa",
    "anime": "Clannad",
    "genres": ["Drama", "Romance", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Nagisa Furukawa.jpg"
  },
  {
    "id": 380,
    "name": "Nagisa Shiota",
    "anime": "Assassination Classroom",
    "genres": ["Action", "Comedy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Nagisa Shiota.jpg"
  },
  {
    "id": 381,
    "name": "Naho Takamiya",
    "anime": "Orange",
    "genres": ["Drama", "Romance", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Naho Takamiya.jpg"
  },
  {
    "id": 382,
    "name": "Najimi Osana",
    "anime": "Komi Can't Communicate",
    "genres": ["Comedy", "Romance"],
    "gender": "Non-Binary",
    "beatsGoku": false,
    "image": "images/characters/Najimi Osana.jpg"
  },
  {
    "id": 383,
    "name": "Nami",
    "anime": "One Piece",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Nami.jpg"
  },
  {
    "id": 384,
    "name": "Nanachi",
    "anime": "Made in Abyss",
    "genres": ["Adventure", "Drama", "Fantasy", "Sci-Fi"],
    "gender": "Non-Binary",
    "beatsGoku": false,
    "image": "images/characters/Nanachi.jpg"
  },
  {
    "id": 385,
    "name": "Nanami Aoyama",
    "anime": "The Pet Girl of Sakurasou",
    "genres": ["Comedy", "Drama", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Nanami Aoyama.jpg"
  },
  {
    "id": 386,
    "name": "Nanami Momozono",
    "anime": "Kamisama Kiss",
    "genres": ["Comedy", "Fantasy", "Romance", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Nanami Momozono.jpg"
  },
  {
    "id": 387,
    "name": "Nano Shinonome",
    "anime": "Nichijou - My Ordinary Life",
    "genres": ["Comedy", "Slice of Life"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Nano Shinonome.jpg"
  },
  {
    "id": 388,
    "name": "Nao Tomori",
    "anime": "Charlotte",
    "genres": ["Drama", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Nao Tomori.jpg"
  },
  {
    "id": 389,
    "name": "Naofumi Iwatani",
    "anime": "The Rising of the Shield Hero",
    "genres": ["Action", "Adventure", "Drama", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Naofumi Iwatani.jpg"
  },
  {
    "id": 390,
    "name": "Naota Nandaba",
    "anime": "FLCL",
    "genres": ["Action", "Avant Garde", "Comedy", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Naota Nandaba.jpg"
  },
  {
    "id": 391,
    "name": "Naotsugu",
    "anime": "Log Horizon",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Naotsugu.jpg"
  },
  {
    "id": 392,
    "name": "Naruko Anjou",
    "anime": "Anohana: The Flower We Saw That Day",
    "genres": ["Drama", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Naruko Anjou.jpg"
  },
  {
    "id": 393,
    "name": "Natsu Dragneel",
    "anime": "Fairy Tail",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Natsu Dragneel.jpg"
  },
  {
    "id": 394,
    "name": "Natsuki Shinohara",
    "anime": "Summer Wars",
    "genres": ["Award Winning", "Comedy", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Natsuki Shinohara.jpg"
  },
  {
    "id": 395,
    "name": "Natsuno Yuuki",
    "anime": "Shiki",
    "genres": ["Horror", "Mystery", "Supernatural", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Natsuno Yuuki.jpg"
  },
  {
    "id": 396,
    "name": "Nero Vanetti",
    "anime": "91 Days",
    "genres": ["Action", "Drama", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Nero Vanetti.jpg"
  },
  {
    "id": 397,
    "name": "Nezuko Kamado",
    "anime": "Demon Slayer: Kimetsu no Yaiba",
    "genres": ["Action", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Nezuko Kamado.jpg"
  },
  {
    "id": 398,
    "name": "Nicholas D Wolfwood",
    "anime": "Trigun",
    "genres": ["Action", "Adventure", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Nicholas D Wolfwood.jpg"
  },
  {
    "id": 399,
    "name": "Nijika Ichiji",
    "anime": "Bocchi the Rock!",
    "genres": ["Comedy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Nijika Ichiji.jpg"
  },
  {
    "id": 400,
    "name": "Nikaido",
    "anime": "Dorohedoro",
    "genres": ["Action", "Comedy", "Fantasy", "Horror"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Nikaido.jpg"
  },
  {
    "id": 401,
    "name": "Nine",
    "anime": "Terror in Resonance",
    "genres": ["Mystery", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Nine.jpg"
  },
  {
    "id": 402,
    "name": "No Face Kaonashi",
    "anime": "Spirited Away",
    "genres": ["Adventure", "Award Winning", "Supernatural"],
    "gender": "Unknown",
    "beatsGoku": false,
    "image": "images/characters/No-Face Kaonashi.jpg"
  },
  {
    "id": 403,
    "name": "Noelle Silva",
    "anime": "Black Clover",
    "genres": ["Action", "Comedy", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Noelle Silva.jpg"
  },
  {
    "id": 404,
    "name": "Nona",
    "anime": "Death Parade",
    "genres": ["Drama", "Supernatural", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Nona.jpg"
  },
  {
    "id": 405,
    "name": "Norfah Nora Arendt",
    "anime": "Spice and Wolf",
    "genres": ["Adventure", "Drama", "Fantasy", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Norfah Nora Arendt.jpg"
  },
  {
    "id": 406,
    "name": "Norman",
    "anime": "The Promised Neverland",
    "genres": ["Mystery", "Sci-Fi", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Norman.jpg"
  },
  {
    "id": 407,
    "name": "Nowak",
    "anime": "Orb: On the Movements of the Earth",
    "genres": ["Drama", "Historical"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Nowak.jpg"
  },
  {
    "id": 408,
    "name": "Oczy",
    "anime": "Orb: On the Movements of the Earth",
    "genres": ["Drama", "Historical"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Oczy.jpg"
  },
  {
    "id": 409,
    "name": "Oikatzo",
    "anime": "Shangri-La Frontier",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Oikatzo.jpg"
  },
  {
    "id": 410,
    "name": "Olivia",
    "anime": "Asobi Asobase",
    "genres": ["Comedy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Olivia.jpg"
  },
  {
    "id": 411,
    "name": "Orga Itsuka",
    "anime": "Mobile Suit Gundam: Iron-Blooded Orphans",
    "genres": ["Action", "Drama", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Orga Itsuka.jpg"
  },
  {
    "id": 412,
    "name": "Osamu Dazai",
    "anime": "Bungo Stray Dogs",
    "genres": ["Action", "Mystery", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Osamu Dazai.jpg"
  },
  {
    "id": 413,
    "name": "Osamu Mikumo",
    "anime": "World Trigger",
    "genres": ["Action", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Osamu Mikumo.jpg"
  },
  {
    "id": 414,
    "name": "Ozu",
    "anime": "The Tatami Galaxy",
    "genres": ["Comedy", "Mystery", "Psychological", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Ozu.jpg"
  },
  {
    "id": 415,
    "name": "Paprika Atsuko Chiba",
    "anime": "Paprika",
    "genres": ["Avant Garde", "Fantasy", "Mystery", "Sci-Fi", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Paprika Atsuko Chiba.jpg"
  },
  {
    "id": 416,
    "name": "Phosphophyllite",
    "anime": "Land of the Lustrous",
    "genres": ["Action", "Drama", "Fantasy"],
    "gender": "Non-Binary",
    "beatsGoku": false,
    "image": "images/characters/Phosphophyllite.jpg"
  },
  {
    "id": 417,
    "name": "Pino",
    "anime": "Ergo Proxy",
    "genres": ["Mystery", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Pino.jpg"
  },
  {
    "id": 418,
    "name": "Pluto",
    "anime": "Pluto",
    "genres": ["Action", "Mystery", "Sci-Fi", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Pluto.jpg"
  },
  {
    "id": 419,
    "name": "Power",
    "anime": "Chainsaw Man",
    "genres": ["Action", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Power.jpg"
  },
  {
    "id": 420,
    "name": "Priestess",
    "anime": "Goblin Slayer",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Priestess.jpg"
  },
  {
    "id": 421,
    "name": "Priscilla",
    "anime": "Claymore",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Priscilla.jpg"
  },
  {
    "id": 422,
    "name": "Puppet Master Project 2501",
    "anime": "Ghost in the Shell (1995)",
    "genres": ["Action", "Award Winning", "Mystery", "Sci-Fi", "Suspense"],
    "gender": "Non-Binary",
    "beatsGoku": false,
    "image": "images/characters/Puppet Master Project 2501.jpg"
  },
  {
    "id": 423,
    "name": "Rafal",
    "anime": "Orb: On the Movements of the Earth",
    "genres": ["Drama", "Historical"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Rafal.jpg"
  },
  {
    "id": 424,
    "name": "Rak Wraithraiser",
    "anime": "Tower of God",
    "genres": ["Action", "Adventure", "Drama", "Fantasy", "Mystery"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Rak Wraithraiser.jpg"
  },
  {
    "id": 425,
    "name": "Ray",
    "anime": "The Promised Neverland",
    "genres": ["Mystery", "Sci-Fi", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Ray.jpg"
  },
  {
    "id": 426,
    "name": "Re l Mayer",
    "anime": "Ergo Proxy",
    "genres": ["Mystery", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Re-l Mayer.jpg"
  },
  {
    "id": 427,
    "name": "Rebecca",
    "anime": "Cyberpunk: Edgerunners",
    "genres": ["Action", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Rebecca.jpg"
  },
  {
    "id": 428,
    "name": "Reborn",
    "anime": "Katekyo Hitman Reborn!",
    "genres": ["Action", "Comedy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Reborn.jpg"
  },
  {
    "id": 429,
    "name": "Reg",
    "anime": "Made in Abyss",
    "genres": ["Adventure", "Drama", "Fantasy", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Reg.jpg"
  },
  {
    "id": 430,
    "name": "Rei Ayanami",
    "anime": "Neon Genesis Evangelion",
    "genres": ["Action", "Drama", "Sci-Fi", "Suspense"],
    "gender": "Female",
    "beatsGoku": true,
    "image": "images/characters/Rei Ayanami.jpg"
  },
  {
    "id": 431,
    "name": "Rei Miyamoto",
    "anime": "Highschool of the Dead",
    "genres": ["Action", "Ecchi", "Horror", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Rei Miyamoto.jpg"
  },
  {
    "id": 432,
    "name": "Reiko Terayama",
    "anime": "Golden Boy",
    "genres": ["Adventure", "Comedy", "Ecchi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Reiko Terayama.jpg"
  },
  {
    "id": 433,
    "name": "Reki Kyan",
    "anime": "Sk8 the Infinity",
    "genres": ["Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Reki Kyan.jpg"
  },
  {
    "id": 434,
    "name": "Relena Peacecraft",
    "anime": "Mobile Suit Gundam Wing",
    "genres": ["Action", "Drama", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Relena Peacecraft.jpg"
  },
  {
    "id": 435,
    "name": "Rem",
    "anime": "Re:Zero - Starting Life in Another World",
    "genres": ["Drama", "Fantasy", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Rem.jpg"
  },
  {
    "id": 436,
    "name": "Reno Ichikawa",
    "anime": "Kaiju No. 8",
    "genres": ["Action", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Reno Ichikawa.jpg"
  },
  {
    "id": 437,
    "name": "Rias Gremory",
    "anime": "High School DxD",
    "genres": ["Action", "Comedy", "Ecchi", "Fantasy", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Rias Gremory.jpg"
  },
  {
    "id": 438,
    "name": "Riki Nendo",
    "anime": "The Disastrous Life of Saiki K.",
    "genres": ["Comedy", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Riki Nendo.jpg"
  },
  {
    "id": 439,
    "name": "Riko",
    "anime": "Made in Abyss",
    "genres": ["Adventure", "Drama", "Fantasy", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Riko.jpg"
  },
  {
    "id": 440,
    "name": "Rimuru Tempest",
    "anime": "That Time I Got Reincarnated as a Slime",
    "genres": ["Action", "Adventure", "Comedy", "Fantasy"],
    "gender": "Non-Binary",
    "beatsGoku": true,
    "image": "images/characters/Rimuru Tempest.jpg"
  },
  {
    "id": 441,
    "name": "Rin Okumura",
    "anime": "Blue Exorcist",
    "genres": ["Action", "Fantasy", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Rin Okumura.jpg"
  },
  {
    "id": 442,
    "name": "Rin Tohsaka",
    "anime": "Fate/stay night: Unlimited Blade Works",
    "genres": ["Action", "Fantasy", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Rin Tohsaka.jpg"
  },
  {
    "id": 443,
    "name": "Rintaro Okabe",
    "anime": "Steins;Gate",
    "genres": ["Drama", "Sci-Fi", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Rintaro Okabe.jpg"
  },
  {
    "id": 444,
    "name": "Riza Hawkeye",
    "anime": "Fullmetal Alchemist: Brotherhood",
    "genres": ["Action", "Adventure", "Drama", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Riza Hawkeye.jpg"
  },
  {
    "id": 445,
    "name": "Roy Mustang",
    "anime": "Fullmetal Alchemist: Brotherhood",
    "genres": ["Action", "Adventure", "Drama", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Roy Mustang.jpg"
  },
  {
    "id": 446,
    "name": "Ruby Hoshino",
    "anime": "Oshi no Ko",
    "genres": ["Drama", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Ruby Hoshino.jpg"
  },
  {
    "id": 447,
    "name": "Rudeus Greyrat",
    "anime": "Mushoku Tensei: Jobless Reincarnation",
    "genres": ["Adventure", "Drama", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Rudeus Greyrat.jpg"
  },
  {
    "id": 448,
    "name": "Ruka Sarashina",
    "anime": "Rent-a-Girlfriend",
    "genres": ["Comedy", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Ruka Sarashina.jpg"
  },
  {
    "id": 449,
    "name": "Rumi",
    "anime": "Perfect Blue",
    "genres": ["Avant Garde", "Drama", "Horror", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Rumi.jpg"
  },
  {
    "id": 450,
    "name": "Ruri Hoshino",
    "anime": "Martian Successor Nadesico",
    "genres": ["Action", "Comedy", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Ruri Hoshino.jpg"
  },
  {
    "id": 451,
    "name": "Ruth",
    "anime": "The Ancient Magus' Bride",
    "genres": ["Drama", "Fantasy", "Mythology"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Ruth.jpg"
  },
  {
    "id": 452,
    "name": "Ryo Asuka",
    "anime": "Devilman Crybaby",
    "genres": ["Action", "Horror", "Supernatural"],
    "gender": "Male",
    "beatsGoku": true,
    "image": "images/characters/Ryo Asuka.jpg"
  },
  {
    "id": 453,
    "name": "Ryo Yamada",
    "anime": "Bocchi the Rock!",
    "genres": ["Comedy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Ryo Yamada.jpg"
  },
  {
    "id": 454,
    "name": "Ryo Yoake",
    "anime": "ReLIFE",
    "genres": ["Drama", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Ryo Yoake.jpg"
  },
  {
    "id": 455,
    "name": "Ryosuke Takahashi",
    "anime": "Initial D",
    "genres": ["Action", "Drama"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Ryosuke Takahashi.jpg"
  },
  {
    "id": 456,
    "name": "Ryuji Ayukawa Yuka",
    "anime": "Blue Period",
    "genres": ["Drama"],
    "gender": "Non-Binary",
    "beatsGoku": false,
    "image": "images/characters/Ryuji Ayukawa Yuka.jpg"
  },
  {
    "id": 457,
    "name": "Ryuko Matoi",
    "anime": "Kill la Kill",
    "genres": ["Action", "Comedy", "Ecchi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Ryuko Matoi.jpg"
  },
  {
    "id": 458,
    "name": "Ryunosuke Akutagawa",
    "anime": "Bungo Stray Dogs",
    "genres": ["Action", "Mystery", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Ryunosuke Akutagawa.jpg"
  },
  {
    "id": 459,
    "name": "Ryuuji Takasu",
    "anime": "Toradora!",
    "genres": ["Drama", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Ryuuji Takasu.jpg"
  },
  {
    "id": 460,
    "name": "Saber",
    "anime": "Fate/Zero",
    "genres": ["Action", "Fantasy", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Saber.jpg"
  },
  {
    "id": 461,
    "name": "Saeko Busujima",
    "anime": "Highschool of the Dead",
    "genres": ["Action", "Ecchi", "Horror", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Saeko Busujima.jpg"
  },
  {
    "id": 462,
    "name": "Sagiri Yamada Asaemon",
    "anime": "Hell's Paradise",
    "genres": ["Action", "Fantasy", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Sagiri Yamada Asaemon.jpg"
  },
  {
    "id": 463,
    "name": "Saichi Sugimoto",
    "anime": "Golden Kamuy",
    "genres": ["Action", "Adventure"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Saichi Sugimoto.jpg"
  },
  {
    "id": 464,
    "name": "Saitama",
    "anime": "One-Punch Man",
    "genres": ["Action", "Comedy", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": true,
    "image": "images/characters/Saitama.jpg"
  },
  {
    "id": 465,
    "name": "Sajuna Inui",
    "anime": "My Dress-Up Darling",
    "genres": ["Comedy", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Sajuna Inui.jpg"
  },
  {
    "id": 466,
    "name": "Saki Watanabe",
    "anime": "Shinsekai Yori (From the New World)",
    "genres": ["Drama", "Horror", "Mystery", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Saki Watanabe.jpg"
  },
  {
    "id": 467,
    "name": "Sakura Kinomoto",
    "anime": "Cardcaptor Sakura",
    "genres": ["Adventure", "Comedy", "Fantasy", "Romance"],
    "gender": "Female",
    "beatsGoku": true,
    "image": "images/characters/Sakura Kinomoto.jpg"
  },
  {
    "id": 468,
    "name": "Sakura Yamauchi",
    "anime": "I Want to Eat Your Pancreas",
    "genres": ["Drama", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Sakura Yamauchi.jpg"
  },
  {
    "id": 469,
    "name": "Sakuta Azusagawa",
    "anime": "Rascal Does Not Dream of Bunny Girl Senpai",
    "genres": ["Drama", "Romance", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Sakuta Azusagawa.jpg"
  },
  {
    "id": 470,
    "name": "San",
    "anime": "Princess Mononoke",
    "genres": ["Action", "Adventure", "Award Winning", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/San.jpg"
  },
  {
    "id": 471,
    "name": "Sanji",
    "anime": "One Piece",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Sanji.jpg"
  },
  {
    "id": 472,
    "name": "Satomi Murano",
    "anime": "Parasyte -the maxim-",
    "genres": ["Action", "Horror", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Satomi Murano.jpg"
  },
  {
    "id": 473,
    "name": "Satoru Asahina",
    "anime": "Shinsekai Yori (From the New World)",
    "genres": ["Drama", "Horror", "Mystery", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Satoru Asahina.jpg"
  },
  {
    "id": 474,
    "name": "Satoru Fujinuma",
    "anime": "Erased",
    "genres": ["Mystery", "Supernatural", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Satoru Fujinuma.jpg"
  },
  {
    "id": 475,
    "name": "Satoru Furuya",
    "anime": "Diamond no Ace",
    "genres": ["Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Satoru Furuya.jpg"
  },
  {
    "id": 476,
    "name": "Satoru Gojo",
    "anime": "Jujutsu Kaisen",
    "genres": ["Action", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Satoru Gojo.jpg"
  },
  {
    "id": 477,
    "name": "Satoshi Fukube",
    "anime": "Hyouka",
    "genres": ["Mystery", "Slice of Life"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Satoshi Fukube.jpg"
  },
  {
    "id": 478,
    "name": "Satoshi Ideguchi",
    "anime": "One Outs",
    "genres": ["Sports", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Satoshi Ideguchi.jpg"
  },
  {
    "id": 479,
    "name": "Satsuki Kiryuin",
    "anime": "Kill la Kill",
    "genres": ["Action", "Comedy", "Ecchi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Satsuki Kiryuin.jpg"
  },
  {
    "id": 480,
    "name": "Sawako Kuronuma Sadako",
    "anime": "Kimi ni Todoke",
    "genres": ["Drama", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Sawako Kuronuma Sadako.jpg"
  },
  {
    "id": 481,
    "name": "Sayaka Kanamori",
    "anime": "Keep Your Hands Off Eizouken!",
    "genres": ["Adventure", "Comedy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Sayaka Kanamori.jpg"
  },
  {
    "id": 482,
    "name": "Sayaka Miki",
    "anime": "Puella Magi Madoka Magica",
    "genres": ["Drama", "Fantasy", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Sayaka Miki.jpg"
  },
  {
    "id": 483,
    "name": "Seijuro Akashi",
    "anime": "Kuroko's Basketball",
    "genres": ["Comedy", "Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Seijuro Akashi.jpg"
  },
  {
    "id": 484,
    "name": "Seishiro Nagi",
    "anime": "Blue Lock",
    "genres": ["Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Seishiro Nagi.jpg"
  },
  {
    "id": 485,
    "name": "Senji Kiyomasa Crow",
    "anime": "Deadman Wonderland",
    "genres": ["Action", "Horror", "Sci-Fi", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Senji Kiyomasa Crow.jpg"
  },
  {
    "id": 486,
    "name": "Senku Ishigami",
    "anime": "Dr. Stone",
    "genres": ["Adventure", "Comedy", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Senku Ishigami.jpg"
  },
  {
    "id": 487,
    "name": "Senshi",
    "anime": "Delicious in Dungeon",
    "genres": ["Adventure", "Comedy", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Senshi.jpg"
  },
  {
    "id": 488,
    "name": "Seto Kaiba",
    "anime": "Yu-Gi-Oh! Duel Monsters",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Seto Kaiba.jpg"
  },
  {
    "id": 489,
    "name": "Setsuna F Seiei",
    "anime": "Mobile Suit Gundam 00",
    "genres": ["Action", "Drama", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Setsuna F Seiei.jpg"
  },
  {
    "id": 490,
    "name": "Shalltear Bloodfallen",
    "anime": "Overlord",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Shalltear Bloodfallen.jpg"
  },
  {
    "id": 491,
    "name": "Shen Xiang",
    "anime": "Undead Unluck",
    "genres": ["Action", "Comedy", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Shen Xiang.jpg"
  },
  {
    "id": 492,
    "name": "Sherlock Holmes",
    "anime": "Moriarty the Patriot",
    "genres": ["Mystery", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Sherlock Holmes.jpg"
  },
  {
    "id": 493,
    "name": "Shiemi Moriyama",
    "anime": "Blue Exorcist",
    "genres": ["Action", "Fantasy", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Shiemi Moriyama.jpg"
  },
  {
    "id": 494,
    "name": "Shigeo Kageyama Mob",
    "anime": "Mob Psycho 100",
    "genres": ["Action", "Comedy", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Shigeo Kageyama Mob.jpg"
  },
  {
    "id": 495,
    "name": "Shiki Ryougi",
    "anime": "Kara no Kyoukai",
    "genres": ["Action", "Mystery", "Supernatural", "Suspense"],
    "gender": "Female",
    "beatsGoku": true,
    "image": "images/characters/Shiki Ryougi.jpg"
  },
  {
    "id": 496,
    "name": "Shin Asakura",
    "anime": "Sakamoto Days",
    "genres": ["Action", "Comedy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Shin Asakura.jpg"
  },
  {
    "id": 497,
    "name": "Shin",
    "anime": "Dorohedoro",
    "genres": ["Action", "Comedy", "Fantasy", "Horror"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Shin.jpg"
  },
  {
    "id": 498,
    "name": "Shinei Nouzen",
    "anime": "86 -Eighty Six-",
    "genres": ["Action", "Drama", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Shinei Nouzen.jpg"
  },
  {
    "id": 499,
    "name": "Shinichi Izumi",
    "anime": "Parasyte -the maxim-",
    "genres": ["Action", "Horror", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Shinichi Izumi.jpg"
  },
  {
    "id": 500,
    "name": "Shinji Ikari",
    "anime": "Neon Genesis Evangelion",
    "genres": ["Action", "Drama", "Sci-Fi", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Shinji Ikari.jpg"
  },
  {
    "id": 501,
    "name": "Shinobu Oshino",
    "anime": "Bakemonogatari",
    "genres": ["Mystery", "Romance", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Shinobu Oshino.jpg"
  },
  {
    "id": 502,
    "name": "Shinpei Ajiro",
    "anime": "Summer Time Rendering",
    "genres": ["Mystery", "Supernatural", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Shinpei Ajiro.jpg"
  },
  {
    "id": 503,
    "name": "Shinra Kusakabe",
    "anime": "Fire Force",
    "genres": ["Action", "Sci-Fi", "Supernatural"],
    "gender": "Male",
    "beatsGoku": true,
    "image": "images/characters/Shinra Kusakabe.jpg"
  },
  {
    "id": 504,
    "name": "Shinya Kogami",
    "anime": "Psycho-Pass",
    "genres": ["Action", "Sci-Fi", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Shinya Kogami.jpg"
  },
  {
    "id": 505,
    "name": "Shirase Kobuchizawa",
    "anime": "A Place Further Than the Universe",
    "genres": ["Adventure", "Comedy", "Drama"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Shirase Kobuchizawa.jpg"
  },
  {
    "id": 506,
    "name": "Shiro",
    "anime": "Deadman Wonderland",
    "genres": ["Action", "Horror", "Sci-Fi", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Shiro.jpg"
  },
  {
    "id": 507,
    "name": "Shiroe",
    "anime": "Log Horizon",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Shiroe.jpg"
  },
  {
    "id": 508,
    "name": "Shirou Emiya",
    "anime": "Fate/stay night: Unlimited Blade Works",
    "genres": ["Action", "Fantasy", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Shirou Emiya.jpg"
  },
  {
    "id": 509,
    "name": "Shizuku Kurogane",
    "anime": "Chivalry of a Failed Knight",
    "genres": ["Action", "Fantasy", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Shizuku Kurogane.jpg"
  },
  {
    "id": 510,
    "name": "Shizuo Heiwajima",
    "anime": "Durarara!!",
    "genres": ["Action", "Mystery", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Shizuo Heiwajima.jpg"
  },
  {
    "id": 511,
    "name": "Shogo Makishima",
    "anime": "Psycho-Pass",
    "genres": ["Action", "Sci-Fi", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Shogo Makishima.jpg"
  },
  {
    "id": 512,
    "name": "Shoko Makinohara",
    "anime": "Rascal Does Not Dream of Bunny Girl Senpai",
    "genres": ["Drama", "Romance", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Shoko Makinohara.jpg"
  },
  {
    "id": 513,
    "name": "Shoko Nishimiya",
    "anime": "A Silent Voice",
    "genres": ["Award Winning", "Drama"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Shoko Nishimiya.jpg"
  },
  {
    "id": 514,
    "name": "Shorter Wong",
    "anime": "Banana Fish",
    "genres": ["Action", "Adventure", "Drama", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Shorter Wong.jpg"
  },
  {
    "id": 515,
    "name": "Shota Kazehaya",
    "anime": "Kimi ni Todoke",
    "genres": ["Drama", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Shota Kazehaya.jpg"
  },
  {
    "id": 516,
    "name": "Shotaro Kaneda",
    "anime": "Akira",
    "genres": ["Action", "Award Winning", "Sci-Fi", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Shotaro Kaneda.jpg"
  },
  {
    "id": 517,
    "name": "Shoto Todoroki",
    "anime": "My Hero Academia",
    "genres": ["Action"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Shoto Todoroki.jpg"
  },
  {
    "id": 518,
    "name": "Shouko Komi",
    "anime": "Komi Can't Communicate",
    "genres": ["Comedy", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Shouko Komi.jpg"
  },
  {
    "id": 519,
    "name": "Shounen Bat Lil Slugger",
    "anime": "Paranoia Agent",
    "genres": ["Avant Garde", "Drama", "Mystery", "Suspense"],
    "gender": "Male",
    "beatsGoku": true,
    "image": "images/characters/Shounen Bat Lil Slugger.jpg"
  },
  {
    "id": 520,
    "name": "Shoya Ishida",
    "anime": "A Silent Voice",
    "genres": ["Award Winning", "Drama"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Shoya Ishida.jpg"
  },
  {
    "id": 521,
    "name": "Shoyo Hinata",
    "anime": "Haikyu!!",
    "genres": ["Drama", "Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Shoyo Hinata.jpg"
  },
  {
    "id": 522,
    "name": "Shu Ouma",
    "anime": "Guilty Crown",
    "genres": ["Action", "Drama", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Shu Ouma.jpg"
  },
  {
    "id": 523,
    "name": "Shu Tsukiyama",
    "anime": "Tokyo Ghoul",
    "genres": ["Action", "Horror", "Supernatural", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Shu Tsukiyama.jpg"
  },
  {
    "id": 524,
    "name": "Shun Aonuma",
    "anime": "Shinsekai Yori (From the New World)",
    "genres": ["Drama", "Horror", "Mystery", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Shun Aonuma.jpg"
  },
  {
    "id": 525,
    "name": "Shun Kaido",
    "anime": "The Disastrous Life of Saiki K.",
    "genres": ["Comedy", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Shun Kaido.jpg"
  },
  {
    "id": 526,
    "name": "Silence Suzuka",
    "anime": "Uma Musume: Pretty Derby",
    "genres": ["Sports"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Silence Suzuka.jpg"
  },
  {
    "id": 527,
    "name": "Sinon",
    "anime": "Sword Art Online",
    "genres": ["Action", "Adventure", "Fantasy", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Sinon.jpg"
  },
  {
    "id": 528,
    "name": "Soma Yukihira",
    "anime": "Food Wars!: Shokugeki no Soma",
    "genres": ["Comedy", "Ecchi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Soma Yukihira.jpg"
  },
  {
    "id": 529,
    "name": "Son Hak",
    "anime": "Yona of the Dawn",
    "genres": ["Action", "Adventure", "Fantasy", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Son Hak.jpg"
  },
  {
    "id": 530,
    "name": "Sonoshee McLaren",
    "anime": "Redline",
    "genres": ["Action", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Sonoshee McLaren.jpg"
  },
  {
    "id": 531,
    "name": "Sophie Hatter",
    "anime": "Howl's Moving Castle",
    "genres": ["Adventure", "Award Winning", "Drama", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Sophie Hatter.jpg"
  },
  {
    "id": 532,
    "name": "Sora",
    "anime": "No Game No Life",
    "genres": ["Comedy", "Fantasy", "Ecchi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Sora.jpg"
  },
  {
    "id": 533,
    "name": "Sorata Kanda",
    "anime": "The Pet Girl of Sakurasou",
    "genres": ["Comedy", "Drama", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Sorata Kanda.jpg"
  },
  {
    "id": 534,
    "name": "Soul Eater Evans",
    "anime": "Soul Eater",
    "genres": ["Action", "Comedy", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Soul Eater Evans.jpg"
  },
  {
    "id": 535,
    "name": "Souta Munakata",
    "anime": "Suzume",
    "genres": ["Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Souta Munakata.jpg"
  },
  {
    "id": 536,
    "name": "Special Week",
    "anime": "Uma Musume: Pretty Derby",
    "genres": ["Sports"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Special Week.jpg"
  },
  {
    "id": 537,
    "name": "Spike Spiegel",
    "anime": "Cowboy Bebop",
    "genres": ["Action", "Award Winning", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Spike Spiegel.jpg"
  },
  {
    "id": 538,
    "name": "Stark",
    "anime": "Frieren: Beyond Journey's End",
    "genres": ["Adventure", "Drama", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Stark.jpg"
  },
  {
    "id": 539,
    "name": "Stella Vermillion",
    "anime": "Chivalry of a Failed Knight",
    "genres": ["Action", "Fantasy", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Stella Vermillion.jpg"
  },
  {
    "id": 540,
    "name": "Stephanie Dola",
    "anime": "No Game No Life",
    "genres": ["Comedy", "Fantasy", "Ecchi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Stephanie Dola.jpg"
  },
  {
    "id": 541,
    "name": "Suletta Mercury",
    "anime": "Mobile Suit Gundam: The Witch from Mercury",
    "genres": ["Action", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Suletta Mercury.jpg"
  },
  {
    "id": 542,
    "name": "Sumi Sakurasawa",
    "anime": "Rent-a-Girlfriend",
    "genres": ["Comedy", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Sumi Sakurasawa.jpg"
  },
  {
    "id": 543,
    "name": "Sung Jinwoo",
    "anime": "Solo Leveling",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": true,
    "image": "images/characters/Sung Jinwoo.jpg"
  },
  {
    "id": 544,
    "name": "Sunraku Rakuro Hizutome",
    "anime": "Shangri-La Frontier",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Sunraku Rakuro Hizutome.jpg"
  },
  {
    "id": 545,
    "name": "Suzume Iwato",
    "anime": "Suzume",
    "genres": ["Adventure", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Suzume Iwato.jpg"
  },
  {
    "id": 546,
    "name": "Suzune Horikita",
    "anime": "Classroom of the Elite",
    "genres": ["Drama", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Suzune Horikita.jpg"
  },
  {
    "id": 547,
    "name": "Sweet JP",
    "anime": "Redline",
    "genres": ["Action", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Sweet JP.jpg"
  },
  {
    "id": 548,
    "name": "Syaoran Li",
    "anime": "Cardcaptor Sakura",
    "genres": ["Adventure", "Comedy", "Fantasy", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Syaoran Li.jpg"
  },
  {
    "id": 549,
    "name": "Tadakuni",
    "anime": "Daily Lives of High School Boys",
    "genres": ["Comedy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Tadakuni.jpg"
  },
  {
    "id": 550,
    "name": "Tahomaru",
    "anime": "Dororo",
    "genres": ["Action", "Adventure", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Tahomaru.jpg"
  },
  {
    "id": 551,
    "name": "Tai Kamiya Taichi",
    "anime": "Digimon Adventure",
    "genres": ["Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Tai Kamiya Taichi.jpg"
  },
  {
    "id": 552,
    "name": "Taichi Mashima",
    "anime": "Chihayafuru",
    "genres": ["Drama", "Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Taichi Mashima.jpg"
  },
  {
    "id": 553,
    "name": "Taichi Yaegashi",
    "anime": "Kokoro Connect",
    "genres": ["Drama", "Romance", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Taichi Yaegashi.jpg"
  },
  {
    "id": 554,
    "name": "Taiga Aisaka",
    "anime": "Toradora!",
    "genres": ["Drama", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Taiga Aisaka.jpg"
  },
  {
    "id": 555,
    "name": "Taiga Kagami",
    "anime": "Kuroko's Basketball",
    "genres": ["Comedy", "Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Taiga Kagami.jpg"
  },
  {
    "id": 556,
    "name": "Taiki Inomata",
    "anime": "Blue Box",
    "genres": ["Romance", "Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Taiki Inomata.jpg"
  },
  {
    "id": 557,
    "name": "Takashi Komuro",
    "anime": "Highschool of the Dead",
    "genres": ["Action", "Ecchi", "Horror", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Takashi Komuro.jpg"
  },
  {
    "id": 558,
    "name": "Takashi Sugiyama Shindo",
    "anime": "Run with the Wind",
    "genres": ["Drama", "Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Takashi Sugiyama Shindo.jpg"
  },
  {
    "id": 559,
    "name": "Takemichi Hanagaki",
    "anime": "Tokyo Revengers",
    "genres": ["Action", "Drama", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Takemichi Hanagaki.jpg"
  },
  {
    "id": 560,
    "name": "Takenori Akagi",
    "anime": "Slam Dunk",
    "genres": ["Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Takenori Akagi.jpg"
  },
  {
    "id": 561,
    "name": "Taki Tachibana",
    "anime": "Your Name.",
    "genres": ["Award Winning", "Drama", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Taki Tachibana.jpg"
  },
  {
    "id": 562,
    "name": "Takina Inoue",
    "anime": "Lycoris Recoil",
    "genres": ["Action"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Takina Inoue.jpg"
  },
  {
    "id": 563,
    "name": "Takumi Fujiwara",
    "anime": "Initial D",
    "genres": ["Action", "Drama"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Takumi Fujiwara.jpg"
  },
  {
    "id": 564,
    "name": "Takumi Hira",
    "anime": "Tsuki ga Kirei",
    "genres": ["Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Takumi Hira.jpg"
  },
  {
    "id": 565,
    "name": "Takumi Usui",
    "anime": "Maid Sama!",
    "genres": ["Comedy", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Takumi Usui.jpg"
  },
  {
    "id": 566,
    "name": "Tamaki Kotatsu",
    "anime": "Fire Force",
    "genres": ["Action", "Sci-Fi", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Tamaki Kotatsu.jpg"
  },
  {
    "id": 567,
    "name": "Tanjiro Kamado",
    "anime": "Demon Slayer: Kimetsu no Yaiba",
    "genres": ["Action", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Tanjiro Kamado.jpg"
  },
  {
    "id": 568,
    "name": "Tanya von Degurechaff",
    "anime": "The Saga of Tanya the Evil",
    "genres": ["Action", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Tanya von Degurechaff.jpg"
  },
  {
    "id": 569,
    "name": "Taro Sakamoto",
    "anime": "Sakamoto Days",
    "genres": ["Action", "Comedy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Taro Sakamoto.jpg"
  },
  {
    "id": 570,
    "name": "Taro",
    "anime": "A Whisker Away",
    "genres": ["Drama", "Fantasy", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Taro.jpg"
  },
  {
    "id": 571,
    "name": "Tatsumaki",
    "anime": "One-Punch Man",
    "genres": ["Action", "Comedy", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Tatsumaki.jpg"
  },
  {
    "id": 572,
    "name": "Tatsumi",
    "anime": "Akame ga Kill!",
    "genres": ["Action", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Tatsumi.jpg"
  },
  {
    "id": 573,
    "name": "Tatsuya Fukuda",
    "anime": "Aoashi",
    "genres": ["Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Tatsuya Fukuda.jpg"
  },
  {
    "id": 574,
    "name": "Teresa",
    "anime": "Claymore",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Teresa.jpg"
  },
  {
    "id": 575,
    "name": "Tetsuo Shima",
    "anime": "Akira",
    "genres": ["Action", "Award Winning", "Sci-Fi", "Suspense"],
    "gender": "Male",
    "beatsGoku": true,
    "image": "images/characters/Tetsuo Shima.jpg"
  },
  {
    "id": 576,
    "name": "Tetsuya Kuroko",
    "anime": "Kuroko's Basketball",
    "genres": ["Comedy", "Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Tetsuya Kuroko.jpg"
  },
  {
    "id": 577,
    "name": "The Grey Heron",
    "anime": "The Boy and the Heron",
    "genres": ["Adventure", "Award Winning", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/The Grey Heron.jpg"
  },
  {
    "id": 578,
    "name": "Thorfinn",
    "anime": "Vinland Saga",
    "genres": ["Action", "Adventure", "Drama"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Thorfinn.jpg"
  },
  {
    "id": 579,
    "name": "Tieria Erde",
    "anime": "Mobile Suit Gundam 00",
    "genres": ["Action", "Drama", "Sci-Fi"],
    "gender": "Non-Binary",
    "beatsGoku": false,
    "image": "images/characters/Tieria Erde.jpg"
  },
  {
    "id": 580,
    "name": "Tobio Kageyama",
    "anime": "Haikyu!!",
    "genres": ["Drama", "Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Tobio Kageyama.jpg"
  },
  {
    "id": 581,
    "name": "Toboe",
    "anime": "Wolf's Rain",
    "genres": ["Action", "Adventure", "Drama", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Toboe.jpg"
  },
  {
    "id": 582,
    "name": "Tokai Teio",
    "anime": "Uma Musume: Pretty Derby",
    "genres": ["Sports"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Tokai Teio.jpg"
  },
  {
    "id": 583,
    "name": "Tokio",
    "anime": "Heavenly Delusion",
    "genres": ["Adventure", "Mystery", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Tokio.jpg"
  },
  {
    "id": 584,
    "name": "Tokushiro Tsurumi",
    "anime": "Golden Kamuy",
    "genres": ["Action", "Adventure"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Tokushiro Tsurumi.jpg"
  },
  {
    "id": 585,
    "name": "Tomoe",
    "anime": "Kamisama Kiss",
    "genres": ["Comedy", "Fantasy", "Romance", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Tomoe.jpg"
  },
  {
    "id": 586,
    "name": "Tomoya Okazaki",
    "anime": "Clannad",
    "genres": ["Drama", "Romance", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Tomoya Okazaki.jpg"
  },
  {
    "id": 587,
    "name": "Tomoyo Daidouji",
    "anime": "Cardcaptor Sakura",
    "genres": ["Adventure", "Comedy", "Fantasy", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Tomoyo Daidouji.jpg"
  },
  {
    "id": 588,
    "name": "Toru Ishikawa",
    "anime": "Horimiya",
    "genres": ["Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Toru Ishikawa.jpg"
  },
  {
    "id": 589,
    "name": "Toru Oikawa",
    "anime": "Haikyu!!",
    "genres": ["Drama", "Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Toru Oikawa.jpg"
  },
  {
    "id": 590,
    "name": "Toshimi Konakawa",
    "anime": "Paprika",
    "genres": ["Avant Garde", "Fantasy", "Mystery", "Sci-Fi", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Toshimi Konakawa.jpg"
  },
  {
    "id": 591,
    "name": "Toshio Ozaki",
    "anime": "Shiki",
    "genres": ["Horror", "Mystery", "Supernatural", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Toshio Ozaki.jpg"
  },
  {
    "id": 592,
    "name": "Toua Tokuchi",
    "anime": "One Outs",
    "genres": ["Sports", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Toua Tokuchi.jpg"
  },
  {
    "id": 593,
    "name": "Touka Kirishima",
    "anime": "Tokyo Ghoul",
    "genres": ["Action", "Horror", "Supernatural", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Touka Kirishima.jpg"
  },
  {
    "id": 594,
    "name": "Touko Aozaki",
    "anime": "Kara no Kyoukai",
    "genres": ["Action", "Mystery", "Supernatural", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Touko Aozaki.jpg"
  },
  {
    "id": 595,
    "name": "Tsubaki Sawabe",
    "anime": "Your Lie in April",
    "genres": ["Drama", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Tsubaki Sawabe.jpg"
  },
  {
    "id": 596,
    "name": "Tsubame Mizusaki",
    "anime": "Keep Your Hands Off Eizouken!",
    "genres": ["Adventure", "Comedy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Tsubame Mizusaki.jpg"
  },
  {
    "id": 597,
    "name": "Tsukasa Hiiragi",
    "anime": "Lucky Star",
    "genres": ["Comedy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Tsukasa Hiiragi.jpg"
  },
  {
    "id": 598,
    "name": "Tsukasa Mizugaki",
    "anime": "Plastic Memories",
    "genres": ["Drama", "Romance", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Tsukasa Mizugaki.jpg"
  },
  {
    "id": 599,
    "name": "Tsukiko Sagi",
    "anime": "Paranoia Agent",
    "genres": ["Avant Garde", "Drama", "Mystery", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Tsukiko Sagi.jpg"
  },
  {
    "id": 600,
    "name": "Tsunayoshi Sawada Tsuna",
    "anime": "Katekyo Hitman Reborn!",
    "genres": ["Action", "Comedy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Tsunayoshi Sawada Tsuna.jpg"
  },
  {
    "id": 601,
    "name": "Tsuneo Suzukawa",
    "anime": "Josee, the Tiger and the Fish",
    "genres": ["Drama", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Tsuneo Suzukawa.jpg"
  },
  {
    "id": 602,
    "name": "Turbo Granny Cat",
    "anime": "Dandadan",
    "genres": ["Action", "Comedy", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Turbo Granny Cat.jpg"
  },
  {
    "id": 603,
    "name": "Twelve",
    "anime": "Terror in Resonance",
    "genres": ["Mystery", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Twelve.jpg"
  },
  {
    "id": 604,
    "name": "Twenty Fifth Bam",
    "anime": "Tower of God",
    "genres": ["Action", "Adventure", "Drama", "Fantasy", "Mystery"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Twenty-Fifth Bam.jpg"
  },
  {
    "id": 605,
    "name": "Umetarou Nozaki",
    "anime": "Monthly Girls' Nozaki-kun",
    "genres": ["Comedy", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Umetarou Nozaki.jpg"
  },
  {
    "id": 606,
    "name": "Urumi Kanzaki",
    "anime": "Great Teacher Onizuka (GTO)",
    "genres": ["Comedy", "Drama"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Urumi Kanzaki.jpg"
  },
  {
    "id": 607,
    "name": "Ushio Kofune",
    "anime": "Summer Time Rendering",
    "genres": ["Mystery", "Supernatural", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Ushio Kofune.jpg"
  },
  {
    "id": 608,
    "name": "Ushio Okazaki",
    "anime": "Clannad: After Story",
    "genres": ["Drama", "Romance", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Ushio Okazaki.jpg"
  },
  {
    "id": 609,
    "name": "Utena Tenjou",
    "anime": "Revolutionary Girl Utena",
    "genres": ["Drama", "Fantasy", "Mystery"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Utena Tenjou.jpg"
  },
  {
    "id": 610,
    "name": "Van Fanel",
    "anime": "The Vision of Escaflowne",
    "genres": ["Adventure", "Fantasy", "Romance", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Van Fanel.jpg"
  },
  {
    "id": 611,
    "name": "Vash the Stampede",
    "anime": "Trigun",
    "genres": ["Action", "Adventure", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Vash the Stampede.jpg"
  },
  {
    "id": 612,
    "name": "Victor Nikiforov",
    "anime": "Yuri!!! on Ice",
    "genres": ["Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Victor Nikiforov.jpg"
  },
  {
    "id": 613,
    "name": "Viktoriya Ivanovna Serebryakov",
    "anime": "The Saga of Tanya the Evil",
    "genres": ["Action", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Viktoriya Ivanovna Serebryakov.jpg"
  },
  {
    "id": 614,
    "name": "Vincent Law",
    "anime": "Ergo Proxy",
    "genres": ["Mystery", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Vincent Law.jpg"
  },
  {
    "id": 615,
    "name": "Violet Evergarden",
    "anime": "Violet Evergarden",
    "genres": ["Drama", "Fantasy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Violet Evergarden.jpg"
  },
  {
    "id": 616,
    "name": "Vladilena Milizé",
    "anime": "86 -Eighty Six-",
    "genres": ["Action", "Drama", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Vladilena Milizé.jpg"
  },
  {
    "id": 617,
    "name": "Wakana Gojo",
    "anime": "My Dress-Up Darling",
    "genres": ["Comedy", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Wakana Gojo.jpg"
  },
  {
    "id": 618,
    "name": "Watashi",
    "anime": "The Tatami Galaxy",
    "genres": ["Comedy", "Mystery", "Psychological", "Romance"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Watashi.jpg"
  },
  {
    "id": 619,
    "name": "William James Moriarty",
    "anime": "Moriarty the Patriot",
    "genres": ["Mystery", "Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/William James Moriarty.jpg"
  },
  {
    "id": 620,
    "name": "Yato",
    "anime": "Noragami",
    "genres": ["Action", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Yato.jpg"
  },
  {
    "id": 621,
    "name": "Yatora Yaguchi",
    "anime": "Blue Period",
    "genres": ["Drama"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Yatora Yaguchi.jpg"
  },
  {
    "id": 622,
    "name": "Yin",
    "anime": "Darker than Black",
    "genres": ["Action", "Mystery", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Yin.jpg"
  },
  {
    "id": 623,
    "name": "Yoichi Isagi",
    "anime": "Blue Lock",
    "genres": ["Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Yoichi Isagi.jpg"
  },
  {
    "id": 624,
    "name": "Yona",
    "anime": "Yona of the Dawn",
    "genres": ["Action", "Adventure", "Fantasy", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Yona.jpg"
  },
  {
    "id": 625,
    "name": "Yor Forger",
    "anime": "Spy x Family",
    "genres": ["Action", "Comedy"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Yor Forger.jpg"
  },
  {
    "id": 626,
    "name": "Yoshifumi Nitta",
    "anime": "Hinamatsuri",
    "genres": ["Comedy", "Sci-Fi", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Yoshifumi Nitta.jpg"
  },
  {
    "id": 627,
    "name": "Yoshitake Tanaka",
    "anime": "Daily Lives of High School Boys",
    "genres": ["Comedy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Yoshitake Tanaka.jpg"
  },
  {
    "id": 628,
    "name": "Yotasuke Takahashi",
    "anime": "Blue Period",
    "genres": ["Drama"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Yotasuke Takahashi.jpg"
  },
  {
    "id": 629,
    "name": "Yu Mira",
    "anime": "The God of High School",
    "genres": ["Action", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Yu Mira.jpg"
  },
  {
    "id": 630,
    "name": "Yugi Muto",
    "anime": "Yu-Gi-Oh! Duel Monsters",
    "genres": ["Action", "Adventure", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Yugi Muto.jpg"
  },
  {
    "id": 631,
    "name": "Yui Hirasawa",
    "anime": "K-On!",
    "genres": ["Comedy", "Slice of Life"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Yui Hirasawa.jpg"
  },
  {
    "id": 632,
    "name": "Yui Shiromaru",
    "anime": "Insomniacs After School",
    "genres": ["Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Yui Shiromaru.jpg"
  },
  {
    "id": 633,
    "name": "Yui Yuigahama",
    "anime": "My Teen Romantic Comedy SNAFU (Oregairu)",
    "genres": ["Comedy", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Yui Yuigahama.jpg"
  },
  {
    "id": 634,
    "name": "Yuji Itadori",
    "anime": "Jujutsu Kaisen",
    "genres": ["Action", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Yuji Itadori.jpg"
  },
  {
    "id": 635,
    "name": "Yukari Akiyama",
    "anime": "Girls und Panzer",
    "genres": ["Action", "Sports"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Yukari Akiyama.jpg"
  },
  {
    "id": 636,
    "name": "Yuki",
    "anime": "Wolf Children",
    "genres": ["Award Winning", "Drama", "Fantasy", "Slice of Life"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Yuki.jpg"
  },
  {
    "id": 637,
    "name": "Yukine",
    "anime": "Noragami",
    "genres": ["Action", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Yukine.jpg"
  },
  {
    "id": 638,
    "name": "Yukino Yukinoshita",
    "anime": "My Teen Romantic Comedy SNAFU (Oregairu)",
    "genres": ["Comedy", "Romance"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Yukino Yukinoshita.jpg"
  },
  {
    "id": 639,
    "name": "Yukio Okumura",
    "anime": "Blue Exorcist",
    "genres": ["Action", "Fantasy", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Yukio Okumura.jpg"
  },
  {
    "id": 640,
    "name": "Yukio Tonegawa",
    "anime": "Kaiji: Ultimate Survivor",
    "genres": ["Suspense"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Yukio Tonegawa.jpg"
  },
  {
    "id": 641,
    "name": "Yukiteru Amano",
    "anime": "Mirai Nikki",
    "genres": ["Action", "Supernatural", "Suspense"],
    "gender": "Male",
    "beatsGoku": true,
    "image": "images/characters/Yukiteru Amano.jpg"
  },
  {
    "id": 642,
    "name": "Yuko Aioi",
    "anime": "Nichijou - My Ordinary Life",
    "genres": ["Comedy", "Slice of Life"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Yuko Aioi.jpg"
  },
  {
    "id": 643,
    "name": "Yuma Kuga",
    "anime": "World Trigger",
    "genres": ["Action", "Sci-Fi"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Yuma Kuga.jpg"
  },
  {
    "id": 644,
    "name": "Yumeko Jabami",
    "anime": "Kakegurui",
    "genres": ["Drama", "Mystery", "Suspense"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Yumeko Jabami.jpg"
  },
  {
    "id": 645,
    "name": "Yuno Gasai",
    "anime": "Mirai Nikki",
    "genres": ["Action", "Supernatural", "Suspense"],
    "gender": "Female",
    "beatsGoku": true,
    "image": "images/characters/Yuno Gasai.jpg"
  },
  {
    "id": 646,
    "name": "Yuno Grinberryall",
    "anime": "Black Clover",
    "genres": ["Action", "Comedy", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Yuno Grinberryall.jpg"
  },
  {
    "id": 647,
    "name": "Yuri Katsuki",
    "anime": "Yuri!!! on Ice",
    "genres": ["Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Yuri Katsuki.jpg"
  },
  {
    "id": 648,
    "name": "Yuri Nakamura",
    "anime": "Angel Beats!",
    "genres": ["Action", "Comedy", "Drama", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Yuri Nakamura.jpg"
  },
  {
    "id": 649,
    "name": "Yuri Plisetsky",
    "anime": "Yuri!!! on Ice",
    "genres": ["Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Yuri Plisetsky.jpg"
  },
  {
    "id": 650,
    "name": "Yuri",
    "anime": "Megalo Box",
    "genres": ["Action", "Drama", "Sci-Fi", "Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Yuri.jpg"
  },
  {
    "id": 651,
    "name": "Yurika Misumaru",
    "anime": "Martian Successor Nadesico",
    "genres": ["Action", "Comedy", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Yurika Misumaru.jpg"
  },
  {
    "id": 652,
    "name": "Yutaka Hoshino Peco",
    "anime": "Ping Pong the Animation",
    "genres": ["Award Winning", "Drama", "Sports"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Yutaka Hoshino Peco.jpg"
  },
  {
    "id": 653,
    "name": "Yuu Otosaka",
    "anime": "Charlotte",
    "genres": ["Drama", "Supernatural"],
    "gender": "Male",
    "beatsGoku": true,
    "image": "images/characters/Yuu Otosaka.jpg"
  },
  {
    "id": 654,
    "name": "Yuzuriha",
    "anime": "Hell's Paradise",
    "genres": ["Action", "Fantasy", "Supernatural"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Yuzuriha.jpg"
  },
  {
    "id": 655,
    "name": "Yuzuru Nishimiya",
    "anime": "A Silent Voice",
    "genres": ["Award Winning", "Drama"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Yuzuru Nishimiya.jpg"
  },
  {
    "id": 656,
    "name": "Yuzuru Otonashi",
    "anime": "Angel Beats!",
    "genres": ["Action", "Comedy", "Drama", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Yuzuru Otonashi.jpg"
  },
  {
    "id": 657,
    "name": "Zapp Renfro",
    "anime": "Blood Blockade Battlefront",
    "genres": ["Action", "Comedy", "Supernatural"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Zapp Renfro.jpg"
  },
  {
    "id": 658,
    "name": "Zelgadis Greywords",
    "anime": "Slayers",
    "genres": ["Adventure", "Comedy", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Zelgadis Greywords.jpg"
  },
  {
    "id": 659,
    "name": "Zenitsu Agatsuma",
    "anime": "Demon Slayer: Kimetsu no Yaiba",
    "genres": ["Action", "Fantasy"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "images/characters/Zenitsu Agatsuma.jpg"
  },
  {
    "id": 660,
    "name": "Zero Two",
    "anime": "Darling in the Franxx",
    "genres": ["Action", "Drama", "Romance", "Sci-Fi"],
    "gender": "Female",
    "beatsGoku": false,
    "image": "images/characters/Zero Two.jpg"
  }
];
