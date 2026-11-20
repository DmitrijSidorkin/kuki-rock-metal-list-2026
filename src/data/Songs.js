import kukiScore from "./rankings/kukiScore";

let songs = [
   {
    artist: "Hollywood Undead",
    name: "1x1",
    album: "Feels Like Home",
    link: "https://www.youtube.com/watch?v=ND1dRAOx35g",
  },
  {
    artist: "Motionless In White",
    name: "Afraid of the Dark",
    album: "Decades",
    link: "https://www.youtube.com/watch?v=jolaO2Z6xCM",
  },
  {
    artist: "Atreyu",
    name: "All For You",
    album: "The End Is Not the End",
    link: "https://www.youtube.com/watch?v=RTh-A2StcfE",
  },
  {
    artist: "Bilmuri feat. A Day To Remember",
    name: "Always Let You Down",
    album: "KINDA HARD",
    link: "https://www.youtube.com/watch?v=W1mnfilKiPw",
  },
  {
    artist: "Scatterbrain",
    name: "Bitter",
    album: "Single",
    link: "https://www.youtube.com/watch?v=k95_x-J-fk8",
  },
  {
    artist: "Make Them Suffer",
    name: "Black Sheep",
    album: "Single",
    link: "https://www.youtube.com/watch?v=ijlRRv_PUUs",
  },
  {
    artist: "We Came As Romans",
    name: "Born From Nothing",
    album: "ALL IS BEAUTIFUL... BECAUSE WE'RE DOOMED: CIRCULARITY",
    link: "https://www.youtube.com/watch?v=KWYRTcW1_CM",
  },
  {
    artist: "Son of the Dead Sun",
    name: "Bull Dominion",
    album: "The Collapse",
    link: "https://www.youtube.com/watch?v=SKzY1SYvTI4",
  },
  {
    artist: "Catch Your Breath",
    name: "Control",
    album: "Not Broken Enough",
    link: "https://www.youtube.com/watch?v=E9hOrfHkj-c",
  },
  {
    artist: "Northlane",
    name: "Crucified",
    album: "Anemoia",
    link: "https://www.youtube.com/watch?v=6WPQFIiBqqw",
  },
  {
    artist: "Muse",
    name: "Cryogen",
    album: "The Wow! Signal",
    link: "https://www.youtube.com/watch?v=XVvLRbR4Pa0",
  },
  {
    artist: "Black Veil Brides feat. Lillith Czar",
    name: "Cut",
    album: "VINDICATE",
    link: "https://www.youtube.com/watch?v=O2yixU7XjGU",
  },
{
  artist: "Normandie",
  name: "Cyanide",
  album: "SIDE EFFECTS PT.1",
  link: "https://www.youtube.com/watch?v=ISBv2sprHJ8",
},
  {
    artist: "Trivium",
    name: "Dead Inside of Me",
    album: "Single",
    link: "https://www.youtube.com/watch?v=I5qZI_v8eGs",
  },
  {
    artist: "Bring Me The Horizon",
    name: "Dehumanized",
    album: "Count Your Blessings | Repented",
    link: "https://www.youtube.com/watch?v=ilqeDbu4E8Y",
  },
  {
    artist: "Fit For A King",
    name: "Dirt",
    album: "Lonely God (Deluxe Edition)",
    link: "https://www.youtube.com/watch?v=aoV_FeYdYk0",
  },
  {
    artist: "coldrain",
    name: "EX-HUMANITY",
    album: "OPTIMIZE = OPTDEMISE",
    link: "https://www.youtube.com/watch?v=0luBJ94BGQM",
  },
  {
    artist: "From Ashes To New",
    name: "(Not) Psycho",
    album: "Reflections",
    link: "https://www.youtube.com/watch?v=Yd3CkHupEhE",
  },
  {
    artist: "Imminence",
    name: "False Light",
    album: "Axis Mundi",
    link: "https://www.youtube.com/watch?v=C-I6KkSRLH8",
  },
  {
    artist: "Velcara",
    name: "Fury",
    album: "Single",
    link: "https://www.youtube.com/watch?v=rv-4AliPi6Q",
  },
  {
    artist: "Staind",
    name: "Ghosts",
    album: "Single",
    link: "https://www.youtube.com/watch?v=CiMMFk5PhaU",
  },
  {
    artist: "Sleep Theory",
    name: "Giving In",
    album: "Single",
    link: "https://www.youtube.com/watch?v=UtdkE-G9D-0",
  },
  {
    artist: "Resolve",
    name: "Godtier",
    album: "Single",
    link: "https://www.youtube.com/watch?v=tAV8GKNcQp4",
  },
  {
    artist: "Knocked Loose feat. Denzel Curry",
    name: "Hive Mind",
    album: "Single",
    link: "https://www.youtube.com/watch?v=hBn7D3Cxsp0",
  },
  {
    artist: "The HU",
    name: "Horsemen",
    album: "HUN",
    link: "https://www.youtube.com/watch?v=xWwXmuAYAbQ",
  },
  {
    artist: "DragonForce",
    name: "Hunger of the Beast",
    album: "Single",
    link: "https://www.youtube.com/watch?v=VDh_SzEZR_0",
  },
  {
    artist: "VALORANT Music, Grabbitz, Oli Sykes & Courtney LaPlante",
    name: "If The Sun Burns Out Tonight",
    album: "Single",
    link: "https://www.youtube.com/watch?v=x8jAY2CoOBg",
  },
  {
    artist: "Vana",
    name: "In Your name",
    album: "Bleeding Heart",
    link: "https://www.youtube.com/watch?v=kwt_uvey4wA",
  },
  {
    artist: "Falling In Reverse feat. Corey Taylor & Serj Tankian",
    name: "Joseph",
    album: "Single",
    link: "https://www.youtube.com/watch?v=Tk9TM7-eTmw",
  },
  {
    artist: "Calva Louise",
    name: "La Promesa",
    album: "Single",
    link: "https://www.youtube.com/watch?v=lbg7MFBRQm0",
  },
  {
    artist: "Wage War",
    name: "Landfall",
    album: "Landfall",
    link: "https://www.youtube.com/watch?v=t1m4lyZN6sk",
  },
  {
    artist: "Nevertel",
    name: "LAST BREATH",
    album: "Single",
    link: "https://www.youtube.com/watch?v=DsF44Sh8hhE",
  },
  {
    artist: "Escape The Fate",
    name: "Last Goodbye",
    album: "The Last Goodbye",
    link: "https://www.youtube.com/watch?v=1KsMny9tGMo",
  },
  {
    artist: "Electric Callboy feat. The Offspring",
    name: "Let The Good Times Roll",
    album: "TANZNEID",
    link: "https://www.youtube.com/watch?v=UUGGRIaVfds",
  },
  {
    artist: "Architects",
    name: "Machine",
    album: "Single",
    link: "https://www.youtube.com/watch?v=z5e-Fud8Nxs",
  },
  {
    artist: "Periphery",
    name: "Mr. God",
    album: "A Pale White Dot",
    link: "https://www.youtube.com/watch?v=zCRqM20sTLs",
  },
  {
    artist: "Ninth Key",
    name: "No Place Like Home",
    album: "Single",
    link: "https://www.youtube.com/watch?v=xaMmsa0YnTI",
  },
  {
    artist: "STARSET",
    name: "P a r a d 0 x 1 c",
    album: "Single",
    link: "https://www.youtube.com/watch?v=P8YKiII45ic",
  },
  {
    artist: "Sleeping With Sirens",
    name: "Paralyzed",
    album: "An Ending In Itself",
    link: "https://www.youtube.com/watch?v=K9pOZqg1Gsw",
  },
  {
    artist: "Ice Nine Kills",
    name: "Play Dead",
    album: "Single",
    link: "https://www.youtube.com/watch?v=7WpxyUbltqw",
  },
  {
    artist: "Beartooth",
    name: "Pure Ecstasy",
    album: "Pure Ecstasy",
    link: "https://www.youtube.com/watch?v=XvD_C66HX6Y",
  },
  {
    artist: "Korn",
    name: "Reward the Scars",
    album: "Single",
    link: "https://www.youtube.com/watch?v=B-S9od9MbOk",
  },
  {
    artist: "Evanescence",
    name: "Sanctuary",
    album: "Sanctuary",
    link: "https://www.youtube.com/watch?v=E64jOWeVfpg",
  },
  {
    artist: "Skillet",
    name: "Scream",
    album: "After The Storm",
    link: "https://www.youtube.com/watch?v=fE6w_LdkFHg",
  },
  {
    artist: "Papa Roach feat. Hanumankind",
    name: "See U In Hell",
    album: "Single",
    link: "https://www.youtube.com/watch?v=gJBEGzb9XPo",
  },
  {
    artist: "Bullet For My Valentine",
    name: "Social Apocalypse",
    album: "Single",
    link: "https://www.youtube.com/watch?v=8Dg6w1d9Klo",
  },
  {
    artist: "Breaking Benjamin",
    name: "Something Wicked",
    album: "Single",
    link: "https://www.youtube.com/watch?v=0vD3cv4mmyY",
  },
  {
    artist: "Poppy",
    name: "Time Will Tell",
    album: "Empty Hands",
    link: "https://www.youtube.com/watch?v=iM4oQWX-AaM",
  },
  {
    artist: "Polaris",
    name: "Without You",
    album: "Single",
    link: "https://www.youtube.com/watch?v=4ehuyqRFDlI",
  },
{
  artist: "Slipknot",
  name: "Arsenal",
  album: "Single",
  link: "https://www.youtube.com/watch?v=s1s2E6hXU_M",
},
];


songs.forEach((c) => {
  c.kukiScore = kukiScore[c.name];
  c.avgScore = c.kukiScore
  c.bestScore = Math.min(c.kukiScore);
});

songs.sort((a, b) => {
  if (a.avgScore !== b.avgScore) {
    return b.avgScore - a.avgScore;
  } else {
    if (a.bestScore !== b.bestScore) {
      return b.bestScore - a.bestScore;
    }
  }
  return a.artist.localeCompare(b.artist);
});

export default songs;