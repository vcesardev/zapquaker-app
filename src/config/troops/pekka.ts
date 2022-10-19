import {
  AttackType,
  BaseTroop,
  FavoriteTarget,
  ResourceType,
  TargetType,
} from "../../models/Troop";

export const pekkaTroopData: BaseTroop = {
  id: "238977831278937891789312879",
  attackType: AttackType.Melee,
  barracksLevel: 10,
  dps: [240, 270, 310, 360, 410, 470, 540, 610, 680],
  favoriteTarget: FavoriteTarget.Any,
  hitpoints: [2800, 3100, 3500, 4000, 4500, 5100, 5700, 6300, 6700],
  labLevel: [0, 6, 6, 7, 8, 8, 9, 10, 11],
  maxLevel: 9,
  name: "P.E.K.K.A.",
  imageUrl: [
    "https://www.clashtrack.com/img/research/pekka_1.png",
    "https://www.clashtrack.com/img/research/pekka_2.png",
    "https://www.clashtrack.com/img/research/pekka_3.png",
    "https://www.clashtrack.com/img/research/pekka_4.png",
    "https://www.clashtrack.com/img/research/pekka_5.png",
    "https://www.clashtrack.com/img/research/pekka_6.png",
    "https://www.clashtrack.com/img/research/pekka_7.png",
    "https://www.clashtrack.com/img/research/pekka_8.png",
    "https://www.clashtrack.com/img/research/pekka_9.png",
  ],
  researchTime: [0, 720, 1440, 2880, 5760, 7920, 12240, 20160, 21600],
  resourceType: ResourceType.Elixir,
  spaces: 25,
  targetType: TargetType.Ground,
  upgradeAmount: [
    0, 1200000, 1800000, 2800000, 3800000, 5000000, 7500000, 11000000, 14000000,
  ],
  trainingTime: 3,
};
