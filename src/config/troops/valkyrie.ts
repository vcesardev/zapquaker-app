import {
  AttackType,
  BaseTroop,
  FavoriteTarget,
  ResourceType,
  TargetType,
} from "../../models/Troop";

export const valkyrieTroopData: BaseTroop = {
  id: "7373789738921879312",
  attackType: AttackType.Melee,
  barracksLevel: 3,
  dps: [94, 106, 119, 133, 148, 163, 178, 193, 208],
  hitpoints: [750, 800, 850, 900, 1100, 1200, 1450, 1650, 1850],
  favoriteTarget: FavoriteTarget.Any,
  labLevel: [0, 6, 7, 7, 8, 9, 10, 11, 12],
  maxLevel: 9,
  name: "Valquíria",
  researchTime: [0, 1440, 2880, 4320, 7200, 10800, 15840, 23040, 24480],
  resourceType: ResourceType.DarkElixir,
  spaces: 8,
  targetType: TargetType.Ground,
  trainingTime: 1.5,
  upgradeAmount: [0, 8000, 12000, 25000, 45000, 90000, 175000, 260000, 310000],
  imageUrl: [
    "https://www.clashtrack.com/img/research/valkyrie_1.png",
    "https://www.clashtrack.com/img/research/valkyrie_2.png",
    "https://www.clashtrack.com/img/research/valkyrie_3.png",
    "https://www.clashtrack.com/img/research/valkyrie_4.png",
    "https://www.clashtrack.com/img/research/valkyrie_5.png",
    "https://www.clashtrack.com/img/research/valkyrie_6.png",
    "https://www.clashtrack.com/img/research/valkyrie_7.png",
    "https://www.clashtrack.com/img/research/valkyrie_8.png",
    "https://www.clashtrack.com/img/research/valkyrie_9.png",
  ],
};
