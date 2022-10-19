import {
  AttackType,
  BaseTroop,
  FavoriteTarget,
  ResourceType,
  TargetType,
} from "../../models/Troop";

export const baloonTroopData: BaseTroop = {
  id: "3773127231732",
  dps: [25, 32, 48, 72, 108, 162, 198, 246, 256, 276],
  attackType: AttackType.Melee,
  barracksLevel: 6,
  favoriteTarget: FavoriteTarget.Defenses,
  hitpoints: [150, 180, 216, 280, 390, 545, 690, 840, 940, 1040],
  spaces: 5,
  labLevel: [0, 2, 4, 5, 6, 7, 9, 10, 11, 12],
  maxLevel: 10,
  upgradeAmount: [
    0, 125000, 400000, 800000, 1500000, 2750000, 6500000, 11000000, 14000000,
    18000000,
  ],
  targetType: TargetType.Ground,
  researchTime: [0, 480, 720, 1080, 1440, 5040, 10080, 19440, 23040, 25920],
  trainingTime: 0.5,
  resourceType: ResourceType.Elixir,
  imageUrl: [
    "https://www.clashtrack.com/img/research/balloon_1.png",
    "https://www.clashtrack.com/img/research/balloon_2.png",
    "https://www.clashtrack.com/img/research/balloon_3.png",
    "https://www.clashtrack.com/img/research/balloon_4.png",
    "https://www.clashtrack.com/img/research/balloon_5.png",
    "https://www.clashtrack.com/img/research/balloon_6.png",
    "https://www.clashtrack.com/img/research/balloon_7.png",
    "https://www.clashtrack.com/img/research/balloon_8.png",
    "https://www.clashtrack.com/img/research/balloon_9.png",
    "https://www.clashtrack.com/img/research/balloon_10.png",
  ],
  name: "Balão",
};
