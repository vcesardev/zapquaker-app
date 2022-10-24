import {
  AttackType,
  BaseTroop,
  FavoriteTarget,
  ResourceType,
  TargetType,
} from "../../models/Troop";

export const headhunterTroopData: BaseTroop = {
  attackType: AttackType.Ranged,
  barracksLevel: 9,
  dps: [108, 120, 132],
  hitpoints: [360, 400, 440],
  favoriteTarget: FavoriteTarget.Heroes,
  id: "3871731723789178932178938291",
  imageUrl: [
    "https://www.clashtrack.com/img/research/headhunter_1.png",
    "https://www.clashtrack.com/img/research/headhunter_1.png",
    "https://www.clashtrack.com/img/research/headhunter_1.png",
  ],
  labLevel: [0, 10, 11],
  maxLevel: 3,
  name: "Caçadora de Heróis",
  researchTime: [0, 20160, 23040],
  resourceType: ResourceType.DarkElixir,
  spaces: 6,
  targetType: TargetType.Both,
  trainingTime: 2,
  upgradeAmount: [0, 180000, 240000],
};
