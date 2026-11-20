import kukiScore from "./rankings/kukiScore";

let songs = [
   {
    Artist: "Hollywood Undead",
    Name: "1x1",
    Album: "Feels Like Home",
    Link: "https://www.youtube.com/watch?v=ND1dRAOx35g",
  },
  {
    Artist: "Motionless In White",
    Name: "Afraid of the Dark",
    Album: "Decades",
    Link: "https://www.youtube.com/watch?v=jolaO2Z6xCM",
  },
  {
    Artist: "Atreyu",
    Name: "All For You",
    Album: "The End Is Not the End",
    Link: "https://www.youtube.com/watch?v=RTh-A2StcfE",
  },
  {
    Artist: "Bilmuri feat. A Day To Remember",
    Name: "Always Let You Down",
    Album: "KINDA HARD",
    Link: "https://www.youtube.com/watch?v=W1mnfilKiPw",
  },
  {
    Artist: "Scatterbrain",
    Name: "Bitter",
    Album: "Single",
    Link: "https://www.youtube.com/watch?v=k95_x-J-fk8",
  },
  {
    Artist: "Make Them Suffer",
    Name: "Black Sheep",
    Album: "Single",
    Link: "https://www.youtube.com/watch?v=ijlRRv_PUUs",
  },
  {
    Artist: "We Came As Romans",
    Name: "Born From Nothing",
    Album: "ALL IS BEAUTIFUL... BECAUSE WE'RE DOOMED: CIRCULARITY",
    Link: "https://www.youtube.com/watch?v=KWYRTcW1_CM",
  },
  {
    Artist: "Son of the Dead Sun",
    Name: "Bull Dominion",
    Album: "The Collapse",
    Link: "https://www.youtube.com/watch?v=SKzY1SYvTI4",
  },
  {
    Artist: "Catch Your Breath",
    Name: "Control",
    Album: "Not Broken Enough",
    Link: "https://www.youtube.com/watch?v=E9hOrfHkj-c",
  },
  {
    Artist: "Northlane",
    Name: "Crucified",
    Album: "Anemoia",
    Link: "https://www.youtube.com/watch?v=6WPQFIiBqqw",
  },
  {
    Artist: "Muse",
    Name: "Cryogen",
    Album: "The Wow! Signal",
    Link: "https://www.youtube.com/watch?v=XVvLRbR4Pa0",
  },
  {
    Artist: "Black Veil Brides feat. Lillith Czar",
    Name: "Cut",
    Album: "VINDICATE",
    Link: "https://www.youtube.com/watch?v=O2yixU7XjGU",
  },
{
  Artist: "Normandie",
  Name: "Cyanide",
  Album: "SIDE EFFECTS PT.1",
  Link: "https://www.youtube.com/watch?v=ISBv2sprHJ8",
},
  {
    Artist: "Trivium",
    Name: "Dead Inside of Me",
    Album: "Single",
    Link: "https://www.youtube.com/watch?v=I5qZI_v8eGs",
  },
  {
    Artist: "Bring Me The Horizon",
    Name: "Dehumanized",
    Album: "Count Your Blessings | Repented",
    Link: "https://www.youtube.com/watch?v=ilqeDbu4E8Y",
  },
  {
    Artist: "Fit For A King",
    Name: "Dirt",
    Album: "Lonely God (Deluxe Edition)",
    Link: "https://www.youtube.com/watch?v=aoV_FeYdYk0",
  },
  {
    Artist: "coldrain",
    Name: "EX-HUMANITY",
    Album: "OPTIMIZE = OPTDEMISE",
    Link: "https://www.youtube.com/watch?v=0luBJ94BGQM",
  },
  {
    Artist: "From Ashes To New",
    Name: "Falling From Heaven",
    Album: "Reflections",
    Link: "https://www.youtube.com/watch?v=59B-skjNbG8",
  },
  {
    Artist: "Imminence",
    Name: "False Light",
    Album: "Axis Mundi",
    Link: "https://www.youtube.com/watch?v=C-I6KkSRLH8",
  },
  {
    Artist: "Velcara",
    Name: "Fury",
    Album: "Single",
    Link: "https://www.youtube.com/watch?v=rv-4AliPi6Q",
  },
  {
    Artist: "Staind",
    Name: "Ghosts",
    Album: "Single",
    Link: "https://www.youtube.com/watch?v=CiMMFk5PhaU",
  },
  {
    Artist: "Sleep Theory",
    Name: "Giving In",
    Album: "Single",
    Link: "https://www.youtube.com/watch?v=UtdkE-G9D-0",
  },
  {
    Artist: "Resolve",
    Name: "Godtier",
    Album: "Single",
    Link: "https://www.youtube.com/watch?v=tAV8GKNcQp4",
  },
  {
    Artist: "Knocked Loose feat. Denzel Curry",
    Name: "Hive Mind",
    Album: "Single",
    Link: "https://www.youtube.com/watch?v=hBn7D3Cxsp0",
  },
  {
    Artist: "The HU",
    Name: "Horsemen",
    Album: "HUN",
    Link: "https://www.youtube.com/watch?v=xWwXmuAYAbQ",
  },
  {
    Artist: "DragonForce",
    Name: "Hunger of the Beast",
    Album: "Single",
    Link: "https://www.youtube.com/watch?v=VDh_SzEZR_0",
  },
  {
    Artist: "VALORANT Music, Grabbitz, Oli Sykes & Courtney LaPlante",
    Name: "If The Sun Burns Out Tonight",
    Album: "Single",
    Link: "https://www.youtube.com/watch?v=x8jAY2CoOBg",
  },
  {
    Artist: "Vana",
    Name: "In Your Name",
    Album: "Bleeding Heart",
    Link: "https://www.youtube.com/watch?v=kwt_uvey4wA",
  },
  {
    Artist: "Falling In Reverse feat. Corey Taylor & Serj Tankian",
    Name: "Joseph",
    Album: "Single",
    Link: "https://www.youtube.com/watch?v=Tk9TM7-eTmw",
  },
  {
    Artist: "Calva Louise",
    Name: "La Promesa",
    Album: "Single",
    Link: "https://www.youtube.com/watch?v=lbg7MFBRQm0",
  },
  {
    Artist: "Wage War",
    Name: "Landfall",
    Album: "Landfall",
    Link: "https://www.youtube.com/watch?v=t1m4lyZN6sk",
  },
  {
    Artist: "Nevertel",
    Name: "LAST BREATH",
    Album: "Single",
    Link: "https://www.youtube.com/watch?v=DsF44Sh8hhE",
  },
  {
    Artist: "Escape The Fate",
    Name: "Last Goodbye",
    Album: "The Last Goodbye",
    Link: "https://www.youtube.com/watch?v=1KsMny9tGMo",
  },
  {
    Artist: "Electric Callboy feat. The Offspring",
    Name: "Let The Good Times Roll",
    Album: "TANZNEID",
    Link: "https://www.youtube.com/watch?v=UUGGRIaVfds",
  },
  {
    Artist: "Architects",
    Name: "Machine",
    Album: "Single",
    Link: "https://www.youtube.com/watch?v=z5e-Fud8Nxs",
  },
  {
    Artist: "Periphery",
    Name: "Mr. God",
    Album: "A Pale White Dot",
    Link: "https://www.youtube.com/watch?v=zCRqM20sTLs",
  },
  {
    Artist: "Ninth Key",
    Name: "No Place Like Home",
    Album: "Single",
    Link: "https://www.youtube.com/watch?v=xaMmsa0YnTI",
  },
  {
    Artist: "STARSET",
    Name: "P a r a d 0 x 1 c",
    Album: "Single",
    Link: "https://www.youtube.com/watch?v=P8YKiII45ic",
  },
  {
    Artist: "Sleeping With Sirens",
    Name: "Paralyzed",
    Album: "An Ending In Itself",
    Link: "https://www.youtube.com/watch?v=K9pOZqg1Gsw",
  },
  {
    Artist: "Ice Nine Kills",
    Name: "Play Dead",
    Album: "Single",
    Link: "https://www.youtube.com/watch?v=7WpxyUbltqw",
  },
  {
    Artist: "Beartooth",
    Name: "Pure Ecstasy",
    Album: "Pure Ecstasy",
    Link: "https://www.youtube.com/watch?v=XvD_C66HX6Y",
  },
  {
    Artist: "Korn",
    Name: "Reward the Scars",
    Album: "Single",
    Link: "https://www.youtube.com/watch?v=B-S9od9MbOk",
  },
  {
    Artist: "Evanescence",
    Name: "Sanctuary",
    Album: "Sanctuary",
    Link: "https://www.youtube.com/watch?v=E64jOWeVfpg",
  },
  {
    Artist: "Skillet",
    Name: "Scream",
    Album: "After The Storm",
    Link: "https://www.youtube.com/watch?v=fE6w_LdkFHg",
  },
  {
    Artist: "Papa Roach feat. Hanumankind",
    Name: "See U In Hell",
    Album: "Single",
    Link: "https://www.youtube.com/watch?v=gJBEGzb9XPo",
  },
  {
    Artist: "Bullet For My Valentine",
    Name: "Social Apocalypse",
    Album: "Single",
    Link: "https://www.youtube.com/watch?v=8Dg6w1d9Klo",
  },
  {
    Artist: "Breaking Benjamin",
    Name: "Something Wicked",
    Album: "Single",
    Link: "https://www.youtube.com/watch?v=0vD3cv4mmyY",
  },
  {
    Artist: "Poppy",
    Name: "Time Will Tell",
    Album: "Empty Hands",
    Link: "https://www.youtube.com/watch?v=iM4oQWX-AaM",
  },
  {
    Artist: "Polaris",
    Name: "Without You",
    Album: "Single",
    Link: "https://www.youtube.com/watch?v=4ehuyqRFDlI",
  },
{
  Artist: "Slipknot",
  Name: "Arsenal",
  Album: "Single",
  Link: "https://www.youtube.com/watch?v=s1s2E6hXU_M",
},
];

]

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
