import {
  AttackType,
  BaseTroop,
  FavoriteTarget,
  ResourceType,
  TargetType,
} from "../../models/Troop";

export const minionTroopData: BaseTroop = {
  id: "8798793278923187998",
  attackType: AttackType.Ranged,
  barracksLevel: 1,
  dps: [35, 38, 42, 46, 50, 54, 58, 62, 66, 70, 74],
  favoriteTarget: FavoriteTarget.Any,
  hitpoints: [55, 60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
  labLevel: [0, 5, 6, 6, 7, 8, 9, 10, 11, 12, 13],
  maxLevel: 11,
  name: "Servo",
  researchTime: [
    0, 480, 960, 1440, 2880, 5040, 7200, 14040, 16560, 22320, 23760,
  ],
  resourceType: ResourceType.DarkElixir,
  spaces: 2,
  targetType: TargetType.Both,
  trainingTime: 0.3,
  upgradeAmount: [
    0, 3000, 7000, 15000, 25000, 35000, 63000, 105000, 188000, 285000, 310000,
  ],
  imageUrl: [
    "https://www.clashtrack.com/img/research/minion_1.png",
    "https://www.clashtrack.com/img/research/minion_2.png",
    "https://www.clashtrack.com/img/research/minion_3.png",
    "https://www.clashtrack.com/img/research/minion_4.png",
    "https://www.clashtrack.com/img/research/minion_5.png",
    "https://www.clashtrack.com/img/research/minion_6.png",
    "https://www.clashtrack.com/img/research/minion_7.png",
    "https://www.clashtrack.com/img/research/minion_8.png",
    "https://www.clashtrack.com/img/research/minion_9.png",
    "https://www.clashtrack.com/img/research/minion_10.png",
    "https://www.clashtrack.com/img/research/minion_11.png",
  ],
};
