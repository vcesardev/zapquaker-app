import {
  AttackType,
  BaseTroop,
  FavoriteTarget,
  ResourceType,
  TargetType,
} from "../../models/Troop";

export const eletricdragonTroopData: BaseTroop = {
  id: "3248747289749327934879",
  attackType: AttackType.Ranged,
  barracksLevel: 13,
  dps: [240, 270, 300, 330, 360, 390],
  favoriteTarget: FavoriteTarget.Any,
  hitpoints: [3200, 3700, 4200, 4500, 4800, 5100],
  labLevel: [0, 9, 10, 11, 12, 13],
  name: "Dragão Elétrico",
  maxLevel: 6,
  spaces: 30,
  researchTime: [0, 7920, 14040, 17280, 24480, 25920],
  resourceType: ResourceType.Elixir,
  targetType: TargetType.Both,
  upgradeAmount: [0, 6300000, 7700000, 12000000, 18000000, 20000000],
  trainingTime: 6,
  imageUrl: [
    "https://www.clashtrack.com/img/research/electro_dragon_1.png",
    "https://www.clashtrack.com/img/research/electro_dragon_2.png",
    "https://www.clashtrack.com/img/research/electro_dragon_3.png",
    "https://www.clashtrack.com/img/research/electro_dragon_4.png",
    "https://www.clashtrack.com/img/research/electro_dragon_5.png",
    "https://www.clashtrack.com/img/research/electro_dragon_6.png",
  ],
};
