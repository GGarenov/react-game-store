const games = [
  {
    name: "Cyberpunk 2077",
    surname: "cyberpunk",
    price: "$59.99",
    desc: "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your characters cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.",
    link: "https://www.cyberpunk.net/",
    release: "10th of December, 2020",
    platforms: "Playstation 4, PC, Xbox Series S/X, Playstation 5, Xbox One",
    genre: "RPG",
    developers: "CD PROJECT RED, CD PROJECT",
    publishers: "CD PROJECT RED",
    inCart: false,
    selected: false,
  },
  {
    name: "Battlefield V",
    surname: "battlefield",
    price: "$29.99",
    desc: "The Battlefield series goes back to its roots in a never-before-seen portrayal of World War 2. Take on physical, all-out multiplayer with your squad in modes like the vast Grand Operations and the cooperative Combined Arms, or witness human drama set against global combat in the single player War Stories. As you fight in epic, unexpected locations across the globe, enjoy the richest and most immersive Battlefield yet.",
    link: "https://www.origin.com/store/battlefield/battlefield-v",
    release: "9th of November, 2018",
    platforms: "Playstation 4, PC, Xbox Series S/X, Xbox One",
    genre: "Shooter",
    developers: "EA Digital Illusions CE",
    publishers: "Electronic Arts",
    inCart: false,
    selected: false,
  },
  {
    name: "Life is Strange",
    surname: "lis",
    price: "$14.99",
    desc: "Life is Strange is a five part episodic game that sets out to revolutionize story based choice and consequence games by allowing the player to rewind time and affect the past, present and future.",
    link: "https://lifeisstrange.square-enix-games.com/",
    release: "30th of January, 2015",
    platforms: "Playstation 4, PC, Xbox One, Xbox 360, Playstation 3",
    genre: "Adventure",
    developers: "Dontnod Entertainment",
    publishers: "Square Enix",
    inCart: false,
    selected: false,
  },
  {
    name: "Mario Kart 8: Deluxe",
    surname: "mariokart",
    price: "$24.99",
    desc: "Hit the road with the definitive version of Mario Kart 8 and play anytime, anywhere! Race your friends or battle them in a revised battle mode on new and returning battle courses. Play locally in up to 4-player multiplayer in 1080p while playing in TV Mode. Every track from the Wii U version, including DLC, makes a glorious return. Plus, the Inklings appear as all-new guest characters, along with returning favorites, such as King Boo, Dry Bones, and Bowser Jr.!",
    link: "https://mariokart8deluxe.nintendo.com/",
    release: "28th of April, 2017",
    platforms: "Nintendo Switch",
    genre: "Racing",
    developers: "Nintendo EAD",
    publishers: "Nintendo",
    inCart: false,
    selected: false,
  },
  {
    name: "Bioshock Infinite",
    surname: "bioshockinfinite",
    price: "$18.99",
    desc: "This first-person story-driven shooter and entry in the Bioshock franchise follows Booker DeWitt as he enters the floating independent (formerly US) city of Columbia in 1912 and attempts to retrieve a girl trapped in a tower by the citys self-proclaimed despot/prophet in order to erase his financial debt. Throughout the story, themes of violence, racism and fatalism are brought up.",
    link: "https://2k.com/en-US/game/bioshock-infinite/",
    release: "26th of February, 2013",
    platforms: "Xbox One, PlayStation 4, Linux, Xbox 360, PC, Nintendo Switch, PlayStation 3",
    genre: "Puzzle",
    developers: "Irrational Games",
    publishers: "2K Games",
    inCart: false,
    selected: false,
  },
  {
    name: "Anno: 1800",
    surname: "anno",
    price: "$12.99",
    desc: "Anno 1800: Lead the Industrial Revolution! Welcome to the dawn of the Industrial Age. The path you choose will define your world. Are you an innovator or an exploiter? A conqueror or a liberator? How the world remembers your name is up to you.",
    link: "https://anno-union.com/",
    release: "16th of April, 2019",
    platforms: "PC (Microsoft Windows)",
    genre: "Strategy",
    developers: "Blue Byte",
    publishers: "Ubisoft",
    inCart: false,
    selected: false,
  },
  {
    name: "Red Dead Redemption 2",
    surname: "rdr",
    price: "$34.99",
    desc: "Red Dead Redemption 2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age.",
    link: "https://www.rockstargames.com/reddeadredemption2",
    release: "26th of October, 2018",
    platforms: "Xbox One, PlayStation 4, PC, Google Stadia",
    genre: "RPG",
    developers: "Rockstar Studios",
    publishers: "Rockstar Games",
    inCart: false,
    selected: false,
  },
  {
    name: "Horizon Zero Dawn",
    surname: "horizon",
    price: "$29.99",
    desc: "Welcome to a vibrant world rich with the beauty of nature – but inhabited by awe-inspiring, highly advanced machines. As a young machine hunter named Aloy, you must unravel the mysteries of this world and find your own destiny.",
    link: "https://www.guerrilla-games.com/games",
    release: "28th of February, 2017",
    platforms: "PlayStation 4, PC",
    genre: "Adventure",
    developers: "Guerrilla Games",
    publishers: "Sony Interactive Entertainment",
    inCart: false,
    selected: false,
  },
  {
    name: "Grand Theft Auto: V",
    surname: "gtav",
    price: "$39.99",
    desc: "Grand Theft Auto V is a vast open world game set in Los Santos, a sprawling sun-soaked metropolis struggling to stay afloat in an era of economic uncertainty and cheap reality TV. The game blends storytelling and gameplay in new ways as players repeatedly jump in and out of the lives of the games three lead characters, playing all sides of the games interwoven story.",
    link: "https://www.rockstargames.com/gta-v",
    release: "17th of September, 2013",
    platforms: "Xbox One, PlayStation 4, Xbox 360, PlayStation 5, PC, PlayStation 3, Xbox Series S/X",
    genre: "Action",
    developers: "Rockstar North",
    publishers: "Rockstar Games",
    inCart: false,
    selected: false,
  },
  {
    name: "Warframe",
    surname: "warframe",
    price: "$5.99",
    desc: "Warframe situates players as members of the Tenno race, newly awoken after years of cryo-sleep into a solar system at war. Reborn into a corrupt era, the Tenno are sought by the oppressive Grineer Empire for annihilation. Warframe armor is the key to overthrowing the Grineer by providing players with unique offensive and defensive powers to explore, upgrade and master during purpose-driven radical raids.",
    link: "https://www.warframe.com/de/landing",
    release: "25th of March, 2013",
    platforms: "Xbox One, PlayStation 4, PlayStation 5, PC, Nintendo Switch, Xbox Series S/X",
    genre: "Action",
    developers: "Digital Extremes",
    publishers: "Digital Extremes",
    inCart: false,
    selected: false,
  },
  {
    name: "Minecraft",
    surname: "minecraft",
    price: "$25.99",
    desc: "Minecraft focuses on allowing the player to explore, interact with, and modify a dynamically-generated map made of one-cubic-meter-sized blocks. In addition to blocks, the environment features plants, mobs, and items. Some activities in the game include mining for ore, fighting hostile mobs, and crafting new blocks and tools by gathering various resources found in the game. The games open-ended model allows players to create structures, creations, and artwork on various multiplayer servers or their single-player maps. Other features include redstone circuits for logic computations and remote actions, minecarts and tracks, and a mysterious underworld called the Nether. A designated but completely optional goal of the game is to travel to a dimension called the End, and defeat the ender dragon.",
    link: "https://www.minecraft.net",
    release: "15th of August, 2011",
    platforms: "Android, Linux, Mac, PC",
    genre: "Adventure",
    developers: "Mojang",
    publishers: "Mojang / Xbox Game Studios / Sony Interactive Entertainment",
    inCart: false,
    selected: false,
  },
  {
    name: "Rise of the Tomb Raider",
    surname: "riseofthetombraider",
    price: "$12.99",
    desc: "Join Lara Croft on her first great tomb raiding expedition as she seeks to discover the secret of immortality. Featuring high-octane action set in the most beautiful and hostile environments on earth, Rise of the Tomb Raider delivers cinematic survival action-adventure.",
    link: "https://tombraider.square-enix-games.com/en-us",
    release: "10th of November, 2015",
    platforms: "Xbox One, PlayStation 4, Linux, Xbox 360, Mac, PC, Google Stadia",
    genre: "Adventure",
    developers: "Crystal Dynamics",
    publishers: "Microsoft Studios / Square Enix Europe",
    inCart: false,
    selected: false,
  },
  {
    name: "Metro 2033",
    surname: "metro",
    price: "$7.99",
    desc: "Metro 2033 is a first-person shooter with survival horror elements, based on the Russian book of the same name by Dmitry Glukhovsky. Most of the game takes place underground, but several times Artyom will have to venture outside, into the perpetual nuclear winter. Game progression is fairly linear, though areas may be explored more thoroughly for items and ammunition. Setpieces include a few on-rails sequences, missions that involve defending a location from an onslaught of monsters, and others. A few stages can be completed in a stealthy fashion.",
    link: "https://www.4a-games.com.mt/metro-2033",
    release: "16th of March, 2010",
    platforms: "Xbox 360, PC",
    genre: "Shooter",
    developers: "4A Games",
    publishers: "THQ / Deep Silver",
    inCart: false,
    selected: false,
  },
  {
    name: "Terraria",
    surname: "terraria",
    price: "$14.99",
    desc: "Dig, Fight, Explore, Build: The very world is at your fingertips as you fight for survival, fortune, and glory. Will you delve deep into cavernous expanses in search of treasure and raw materials with which to craft ever-evolving gear, machinery, and aesthetics? Perhaps you will choose instead to seek out ever-greater foes to test your mettle in combat? Maybe you will decide to construct your own city to house the host of mysterious allies you may encounter along your travels? In the World of Terraria, the choice is yours!",
    link: "https://terraria.org/",
    release: "16th of May, 2011",
    platforms: "A lot.",
    genre: "Adventure",
    developers: "Re-Logic",
    publishers: "505 Games",
    inCart: false,
    selected: false,
  },
  {
    name: "Rocket League",
    surname: "rocketleague",
    price: "$23.99",
    desc: "Rocket League is a high-powered hybrid of arcade-style soccer and vehicular mayhem with easy-to-understand controls and fluid, physics-driven competition. Rocket League includes casual and competitive Online Matches, a fully-featured offline Season Mode, special “Mutators” that let you change the rules entirely, hockey and basketball-inspired Extra Modes, and more than 500 trillion possible cosmetic customization combinations.",
    link: "https://www.rocketleague.com/",
    release: "7th of July, 2015",
    platforms: "Xbox One, PlayStation 4, Linux, Mac, PlayStation 5, PC, Nintendo Switch, Xbox Series S/X",
    genre: "Sports",
    developers: "Psyonix",
    publishers: "Psyonix",
    inCart: false,
    selected: false,
  },
  {
    name: "The Witcher 3: Wild Hunt",
    surname: "thewitcher",
    price: "$19.99",
    desc: "RPG and sequel to The Witcher 2 (2011), The Witcher 3 follows witcher Geralt of Rivia as he seeks out his former lover and his young subject while intermingling with the political workings of the wartorn Northern Kingdoms. Geralt has to fight monsters and deal with people of all sorts in order to solve complex problems and settle contentious disputes, each ranging from the personal to the world-changing.",
    link: "https://www.thewitcher.com/en",
    release: "19th of May, 2015",
    platforms: "Xbox One, PlayStation 4, PC, Nintendo Switch",
    genre: "RPG",
    developers: "CD PROJECT RED",
    publishers: "CD PROJECT",
    inCart: false,
    selected: false,
  },
  {
    name: "Hitman",
    surname: "hitman",
    price: "$12.99",
    desc: "Become the Master Assassin in an intense spy-thriller story. As Agent 47, you perform contract hits on powerful, high-profile targets in exotic locations around the world. Gameplay focuses on taking out targets in huge and intricate sandbox levels with complete freedom of approach. Where to go, when to strike and who to kill – it is all up to you.",
    link: "https://hitman.com/global/",
    release: "11th of March, 2016",
    platforms: "Xbox One, PlayStation 4, Linux, Mac, PC, Google Stadia",
    genre: "Strategy",
    developers: "IO Interactive",
    publishers: "Square Enix Europe",
    inCart: false,
    selected: false,
  },
  {
    name: "Fallout 4",
    surname: "fallout",
    price: "$26.99",
    desc: "Bethesda Game Studios welcome you to the world of Fallout 4, their most ambitious game ever, and the next generation of open-world gaming. As the sole survivor of Vault 111, you enter a world destroyed by nuclear war. Every second is a fight for survival, and every choice is yours. Only you can rebuild and determine the fate of the Wasteland. Welcome home.",
    link: "https://fallout.bethesda.net/en/games/fallout-4",
    release: "10th of November, 2015",
    platforms: "Xbox One, PlayStation 4, PC",
    genre: "RPG",
    developers: "Bethesda Game Studios",
    publishers: "Bethesda Softworks",
    inCart: false,
    selected: false,
  },
  {
    name: "GTA: San Andreas",
    surname: "gtasanandreas",
    price: "$3.99",
    desc: "Returning after his mothers murder to the semi-fictional city of Los Santos (based on Los Angeles), Carl Johnson, a former gang banger, must take back the streets for his family and friends by gaining respect and once again gaining control over the streets. However, a story filled with crime, lies and corruption will lead him to trudge the entire state of San Andreas (based on California and Nevada) to rebuild his life.",
    link: "https://www.rockstargames.com/games/sanandreas",
    release: "26th of October, 2004",
    platforms: "Android, PlayStation 4, PlayStation 2, Xbox 360, Xbox, PC, PlayStation 3",
    genre: "Action",
    developers: "Rockstar North",
    publishers: "Rockstar Games",
    inCart: false,
    selected: false,
  },
  {
    name: "Golf with your Friends",
    surname: "golfwithyourfriends",
    price: "$7.99",
    desc: "Why have friends if not to play golf... with your friends! Nothing is out of bounds as you take on courses filled with fast paced, exciting, simultaneous mini golf for up to 12 players!",
    link: "http://www.blacklightinteractive.com/",
    release: "29th of January, 2016",
    platforms: "Xbox One, PlayStation 4, Linux, PC, Nintendo Switch, Google Stadia",
    genre: "Sports",
    developers: "Blacklight Interactive",
    publishers: "Team17 Digital / Blacklight Interactive",
    inCart: false,
    selected: false,
  },
  {
    name: "Heavy Rain",
    surname: "heavyrain",
    price: "$23.99",
    desc: "Heavy Rain is a cinematic psychological thriller from game developer Quantic Dream exclusively for the PlayStation 3. Dealing with a range of adult themes, the game revolves around a sophisticated plot and strong narrative threads that explore a complex moral proposition. You assume the role of multiple characters with very different backgrounds, motivations, and skills in a world where each player decision affects what will follow.",
    link: "https://www.www.quanticdream.com/en/#!/en/category/heavy-rain",
    release: "18th of February, 2010",
    platforms: "PlayStation 4, PC, PlayStation 3",
    genre: "Puzzle",
    developers: "Quantic Dream",
    publishers: "Sony Computer Entertainment / Quantic Dream",
    inCart: false,
    selected: false,
  },
  {
    name: "Dota 2",
    surname: "dota",
    price: "$12.99",
    desc: "Dota 2 is a multiplayer online battle arena video game and the stand-alone sequel to the Defense of the Ancients (DotA) mod. With regular updates that ensure a constant evolution of gameplay, features, and heroes, Dota 2 has taken on a life of its own.",
    link: "https://www.dota2.com/home",
    release: "9th of July, 2013",
    platforms: "Linux, Mac, PC",
    genre: "Strategy",
    developers: "Valve",
    publishers: "Valve",
    inCart: false,
    selected: false,
  },
  {
    name: "Portal 2",
    surname: "portal2",
    price: "$44.99",
    desc: "Sequel to the acclaimed Portal (2007), Portal 2 pits the protagonist of the original game, Chell, and her new robot friend, Wheatley, against more puzzles conceived by GLaDOS, an A.I. with the sole purpose of testing the Portal Guns mechanics and taking revenge on Chell for the events of Portal. As a result of several interactions and revelations, Chell once again pushes to escape Aperture Science Labs.",
    link: "https://www.thinkwithportals.com/",
    release: "19th of April, 2011",
    platforms: "Linux, Xbox 360, Mac, PC, PlayStation 3",
    genre: "Puzzle",
    developers: "Valve",
    publishers: "Valve",
    inCart: false,
    selected: false,
  },
  {
    name: "Sid Meier's Civilization VI",
    surname: "civilization",
    price: "$27.99",
    desc: "Civilization is a turn-based strategy game in which you attempt to build an empire to stand the test of time. Become Ruler of the World by establishing and leading a civilization from the Stone Age to the Information Age. Wage war, conduct diplomacy, advance your culture, and go head-to-head with historys greatest leaders as you attempt to build the greatest civilization the world has ever known.",
    link: "https://www.civilization.com/",
    release: "20th of October, 2016",
    platforms: "Xbox One, PlayStation 4, Linux, Mac, iOS, PC, Nintendo Switch",
    genre: "Strategy",
    developers: "Firaxis Games",
    publishers: "2K Games / Aspyr Media",
    inCart: false,
    selected: false,
  },
  {
    name: "God of War",
    surname: "godofwar",
    price: "$41.99",
    desc: "God of War is the sequel to God of War III as well as a continuation of the canon God of War chronology. Unlike previous installments, this game focuses on Norse mythology and follows an older and more seasoned Kratos and his son Atreus in the years since the third game. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
    link: "https://www.playstation.com/de-de/god-of-war/",
    release: "20th of April, 2018",
    platforms: "PlayStation 4, PC",
    genre: "Adventure",
    developers: "Santa Monica Studio",
    publishers: "Sony Interactive Entertainment",
    inCart: false,
    selected: false,
  },
  {
    name: "FIFA 22",
    surname: "fifa",
    price: "$15.99",
    desc: "Powered by Football, FIFA 22 brings the game even closer to the real thing with fundamental gameplay advances and a new season of innovation across every mode. Play with 17,000+ players, over 700 teams in 90+ stadiums and more than 30 leagues from all over the globe.",
    link: "https://www.ea.com/de-de/games/fifa/fifa-22",
    release: "30th of September, 2021",
    platforms: "Xbox One, PlayStation 4, PlayStation 5, PC, Xbox Series S/X, Google Stadia",
    genre: "Sports",
    developers: "EA Vancouver / EA Romania",
    publishers: "EA Sports",
    inCart: false,
    selected: false,
  },
  {
    name: "Half-Life 2",
    surname: "halflife",
    price: "$11.99",
    desc: "1998. HALF-LIFE sends a shock through the game industry with its combination of pounding action and continuous, immersive storytelling. By taking the suspense, challenge and visceral charge of the original, and adding startling new realism and responsiveness, Half-Life 2 opens the door to a world where the players presence affects everything around them, from the physical environment to the behaviors even the emotions of both friends and enemies.",
    link: "https://www.half-life.com/en/halflife2",
    release: "16th of November, 2004",
    platforms: "Android, Linux, Xbox 360, Mac, Xbox, PC, PlayStation 3",
    genre: "Shooter",
    developers: "Valve",
    publishers: "Valve",
    inCart: false,
    selected: false,
  },
  {
    name: "The Walking Dead: S1",
    surname: "twd",
    price: "$6.99",
    desc: "The Walking Dead: Season One (also known as The Walking Dead: The Game) is an episodic interactive drama graphic adventure video game developed and published by Telltale Games. Based on Robert Kirkmans The Walking Dead comic book series, the game consists of five episodes, released between April and November 2012. It is available for Android, iOS, Kindle Fire HDX, Microsoft Windows, Mac OS X, PlayStation 3, PlayStation Vita, Xbox 360, PlayStation 4 and Xbox One. The game is the first of The Walking Dead video game series published by Telltale.",
    link: "http://www.thewalkingdeadgame.com/",
    release: "24th of April, 2012",
    platforms: "Android, Xbox One, PlayStation 4, Xbox 360, PC, Nintendo Switch, PlayStation 3",
    genre: "Adventure",
    developers: "Telltale Games",
    publishers: "Telltale Games",
    inCart: false,
    selected: false,
  },
  {
    name: "Crusader Kings III",
    surname: "crusaderkings",
    price: "$22.99",
    desc: "Crusader Kings III is the newest generation in the medieval role-playing grand strategy game series Crusader Kings. Expand and improve your realm, whether a mighty kingdom or modest county. Use marriage, diplomacy and war to increase your power and prestige in a meticulously detailed map that stretches from Spain to India, Scandinavia to Central Africa.",
    link: "https://www.paradoxinteractive.com/games/crusader-kings-iii/about",
    release: "1st of September, 2020",
    platforms: "Linux, Mac, PlayStation 5, PC, Xbox Series S/X",
    genre: "Strategy",
    developers: "Paradox Development Studios",
    publishers: "Paradox Interactive",
    inCart: false,
    selected: false,
  },
  {
    name: "Counter Strike: GO",
    surname: "csgo",
    price: "$4.99",
    desc: "CS:GO is the fourth iteration of Valves team-based modern-military first-person shooter that features new and updated versions of the classic CS content. While expanding the franchise, the game also introduces new gameplay modes, matchmaking and leader boards.",
    link: "https://blog.counter-strike.net/",
    release: "21st of August, 2012",
    platforms: "Linux, Xbox 360, Mac, PC, PlayStation 3",
    genre: "Shooter",
    developers: "Valve / Hidden Path Entertainment",
    publishers: "Valve",
    inCart: false,
    selected: false,
  },
  {
    name: "Detroit: Become Human",
    surname: "detroit",
    price: "$65.99",
    desc: "Detroit: Become Human puts the destiny of both mankind and androids in your hands, taking you to a near future where machines have become more intelligent than humans. Every choice you make affects the outcome of the game, with one of the most intricately branching narratives ever created.",
    link: "https://www.www.quanticdream.com/en/detroit-become-human",
    release: "25th of May, 2018",
    platforms: "PlayStation 4, PC",
    genre: "Puzzle",
    developers: "Quantic Dream",
    publishers: "Sony Interactive Entertainment / Quantic Dream",
    inCart: false,
    selected: false,
  },
  {
    name: "Tomb Raider",
    surname: "tombraider",
    price: "$17.99",
    desc: "Tomb Raider explores the intense and gritty origin story of Lara Croft and her ascent from a young woman to a hardened survivor. Armed only with raw instincts and the ability to push beyond the limits of human endurance, Lara must fight to unravel the dark history of a forgotten island to escape its relentless hold.",
    link: "https://tombraider.square-enix-games.com/en-us",
    release: "4th of March, 2013",
    platforms: "Linux, Xbox 360, Mac, PC, PlayStation 3",
    genre: "Adventure",
    developers: "Crystal Dynamics",
    publishers: "Square Enix Europe",
    inCart: false,
    selected: false,
  },
];

export default games;
