import {
  AttackType,
  BaseTroop,
  FavoriteTarget,
  ResourceType,
  TargetType,
} from "../../models/Troop";

export const dragonTroopData: BaseTroop = {
  id: "32478472463274",
  attackType: AttackType.Ranged,
  barracksLevel: 9,
  spaces: 20,
  favoriteTarget: FavoriteTarget.Any,
  trainingTime: 180,
  dps: [140, 160, 180, 210, 240, 270, 310, 330, 350],
  hitpoints: [1900, 2100, 2300, 2600, 3100, 3400, 3900, 4200, 4500],
  labLevel: [0, 5, 6, 7, 8, 9, 10, 11, 12],
  upgradeAmount: [
    0, 1000000, 2000000, 3000000, 4500000, 7000000, 10000000, 15000000,
    18500000,
  ],
  targetType: TargetType.Both,
  resourceType: ResourceType.Elixir,
  maxLevel: 9,
  researchTime: [0, 1080, 2160, 4320, 8640, 11520, 20160, 23040, 25920],
  imageUrl: [
    "https://www.clashtrack.com/img/research/dragon_1.png",
    "https://www.clashtrack.com/img/research/dragon_2.png",
    "https://www.clashtrack.com/img/research/dragon_3.png",
    "https://www.clashtrack.com/img/research/dragon_4.png",
    "https://www.clashtrack.com/img/research/dragon_5.png",
    "https://www.clashtrack.com/img/research/dragon_6.png",
    "https://www.clashtrack.com/img/research/dragon_7.png",
    "https://www.clashtrack.com/img/research/dragon_8.png",
    "https://www.clashtrack.com/img/research/dragon_9.png",
  ],
  name: "Dragão",
};
