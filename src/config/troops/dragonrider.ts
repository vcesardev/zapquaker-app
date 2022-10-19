import {
  AttackType,
  BaseTroop,
  FavoriteTarget,
  ResourceType,
  TargetType,
} from "../../models/Troop";

export const dragonriderTroopData: BaseTroop = {
  id: "83217317327891",
  attackType: AttackType.Ranged,
  dps: [340, 370, 400],
  barracksLevel: 15,
  favoriteTarget: FavoriteTarget.Defenses,
  hitpoints: [4100, 4400, 4700],
  labLevel: [0, 11, 12],
  maxLevel: 3,
  name: "Dragão Dirigível",
  spaces: 25,
  upgradeAmount: [0, 16000000, 17500000],
  researchTime: [0, 21600, 24480],
  resourceType: ResourceType.Elixir,
  trainingTime: 16.7,
  targetType: TargetType.Both,
  imageUrl: [
    "https://www.clashtrack.com/img/research/dragon_rider_1.png",
    "https://www.clashtrack.com/img/research/dragon_rider_1.png",
    "https://www.clashtrack.com/img/research/dragon_rider_1.png",
  ],
};
