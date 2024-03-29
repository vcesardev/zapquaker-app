import {
  AttackType,
  BaseTroop,
  FavoriteTarget,
  ResourceType,
  TargetType,
} from "../../models/Troop";

export const giantTroopData: BaseTroop = {
  id: "43274246327482",
  targetType: TargetType.Ground,
  attackType: AttackType.Melee,
  favoriteTarget: FavoriteTarget.Defenses,
  resourceType: ResourceType.Elixir,
  barracksLevel: 3,
  spaces: 5,
  trainingTime: 0.5,
  dps: [22, 28, 38, 48, 62, 86, 110, 124, 140, 156, 172],
  hitpoints: [300, 360, 450, 600, 800, 1100, 1300, 1500, 1850, 2000, 2200],
  imageUrl: [
    "https://www.clashtrack.com/img/research/giant_1.png",
    "https://www.clashtrack.com/img/research/giant_2.png",
    "https://www.clashtrack.com/img/research/giant_3.png",
    "https://www.clashtrack.com/img/research/giant_4.png",
    "https://www.clashtrack.com/img/research/giant_5.png",
    "https://www.clashtrack.com/img/research/giant_6.png",
    "https://www.clashtrack.com/img/research/giant_7.png",
    "https://www.clashtrack.com/img/research/giant_8.png",
    "https://www.clashtrack.com/img/research/giant_9.png",
    "https://www.clashtrack.com/img/research/giant_10.png",
    "https://www.clashtrack.com/img/research/giant_11.png",
  ],
  labLevel: [0, 2, 4, 5, 6, 7, 8, 9, 10, 11, 13],
  maxLevel: 11,
  upgradeAmount: [
    0, 40000, 150000, 500000, 1200000, 2000000, 3000000, 3500000, 6300000,
    10000000, 16500000,
  ],
  researchTime: [0, 240, 480, 720, 1440, 2880, 5040, 7920, 12960, 16200, 23040],
  name: "Gigante",
};
