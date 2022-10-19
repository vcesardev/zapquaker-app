import {
  AttackType,
  BaseTroop,
  FavoriteTarget,
  ResourceType,
  TargetType,
} from "../../models/Troop";

export const yetiTroopData: BaseTroop = {
  id: "97327327821387931278989",
  attackType: AttackType.Melee,
  barracksLevel: 13,
  dps: [230, 250, 270, 290],
  favoriteTarget: FavoriteTarget.Any,
  hitpoints: [2900, 3200, 3500, 3700],
  labLevel: [0, 10, 11, 12],
  maxLevel: 4,
  name: "Yeti",
  researchTime: [0, 15840, 23040, 25920],
  resourceType: ResourceType.Elixir,
  spaces: 18,
  trainingTime: 12,
  upgradeAmount: [0, 11000000, 15000000, 18000000],
  targetType: TargetType.Ground,
  imageUrl: [
    "https://www.clashtrack.com/img/research/yeti_1.png",
    "https://www.clashtrack.com/img/research/yeti_2.png",
    "https://www.clashtrack.com/img/research/yeti_3.png",
    "https://www.clashtrack.com/img/research/yeti_4.png",
  ],
};
