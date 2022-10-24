import {
  AttackType,
  BaseTroop,
  FavoriteTarget,
  ResourceType,
  TargetType,
} from "../../models/Troop";

export const bowlerTroopData: BaseTroop = {
  id: "378278312783782187321",
  attackType: AttackType.Ranged,
  barracksLevel: 7,
  dps: [65, 75, 85, 90, 86, 102],
  favoriteTarget: FavoriteTarget.Any,
  hitpoints: [290, 310, 350, 390, 430, 500],
  imageUrl: [
    "https://www.clashtrack.com/img/research/bowler_1.png",
    "https://www.clashtrack.com/img/research/bowler_2.png",
    "https://www.clashtrack.com/img/research/bowler_3.png",
    "https://www.clashtrack.com/img/research/bowler_4.png",
    "https://www.clashtrack.com/img/research/bowler_5.png",
    "https://www.clashtrack.com/img/research/bowler_6.png",
  ],
  labLevel: [0, 8, 9, 10, 11, 12],
  maxLevel: 6,
  name: "Lançador",
  researchTime: [0, 5760, 10080, 17280, 20880, 25200],
  spaces: 6,
  targetType: TargetType.Ground,
  trainingTime: 1,
  upgradeAmount: [0, 75000, 125000, 200000, 280000, 320000],
  resourceType: ResourceType.DarkElixir,
};
