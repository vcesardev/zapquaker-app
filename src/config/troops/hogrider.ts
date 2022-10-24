import {
  AttackType,
  BaseTroop,
  FavoriteTarget,
  ResourceType,
  TargetType,
} from "../../models/Troop";

export const hogriderTroopData: BaseTroop = {
  id: "8973273728947382",
  name: "Corredor",
  attackType: AttackType.Melee,
  favoriteTarget: FavoriteTarget.Defenses,
  barracksLevel: 2,
  resourceType: ResourceType.DarkElixir,
  researchTime: [
    0, 600, 1200, 1800, 2880, 5760, 10800, 16560, 20160, 23040, 24480,
  ],
  dps: [60, 70, 80, 92, 105, 118, 135, 148, 161, 174, 187],
  hitpoints: [270, 312, 360, 415, 480, 590, 700, 810, 890, 970, 1080],
  labLevel: [0, 5, 6, 6, 7, 8, 9, 10, 10, 11, 12],
  maxLevel: 11,
  spaces: 5,
  targetType: TargetType.Ground,
  trainingTime: 0.75,
  upgradeAmount: [
    0, 5000, 9000, 16000, 30000, 50000, 100000, 150000, 240000, 280000, 320000,
  ],
  imageUrl: [
    "https://www.clashtrack.com/img/research/hog_rider_1.png",
    "https://www.clashtrack.com/img/research/hog_rider_2.png",
    "https://www.clashtrack.com/img/research/hog_rider_3.png",
    "https://www.clashtrack.com/img/research/hog_rider_4.png",
    "https://www.clashtrack.com/img/research/hog_rider_5.png",
    "https://www.clashtrack.com/img/research/hog_rider_6.png",
    "https://www.clashtrack.com/img/research/hog_rider_7.png",
    "https://www.clashtrack.com/img/research/hog_rider_8.png",
    "https://www.clashtrack.com/img/research/hog_rider_9.png",
    "https://www.clashtrack.com/img/research/hog_rider_10.png",
    "https://www.clashtrack.com/img/research/hog_rider_11.png",
  ],
};
