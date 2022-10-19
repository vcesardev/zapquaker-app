import {
  AttackType,
  BaseTroop,
  FavoriteTarget,
  ResourceType,
  TargetType,
} from "../../models/Troop";

export const babydragonTroopData: BaseTroop = {
  id: "312763216326816312",
  attackType: AttackType.Ranged,
  dps: [75, 85, 95, 105, 115, 125, 135, 145],
  barracksLevel: 11,
  spaces: 10,
  favoriteTarget: FavoriteTarget.Any,
  hitpoints: [1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900],
  labLevel: [0, 7, 8, 8, 9, 10, 11, 12],
  maxLevel: 8,
  name: "Bebê Dragão",
  imageUrl: [
    "https://www.clashtrack.com/img/research/baby_dragon_1.png",
    "https://www.clashtrack.com/img/research/baby_dragon_2.png",
    "https://www.clashtrack.com/img/research/baby_dragon_3.png",
    "https://www.clashtrack.com/img/research/baby_dragon_4.png",
    "https://www.clashtrack.com/img/research/baby_dragon_5.png",
    "https://www.clashtrack.com/img/research/baby_dragon_6.png",
    "https://www.clashtrack.com/img/research/baby_dragon_7.png",
    "https://www.clashtrack.com/img/research/baby_dragon_8.png",
  ],
  researchTime: [0, 2880, 5760, 8640, 14400, 17280, 20160, 23760],
  resourceType: ResourceType.Elixir,
  targetType: TargetType.Both,
  upgradeAmount: [
    0, 2000000, 3000000, 4000000, 6000000, 9000000, 12000000, 17000000,
  ],
  trainingTime: 90,
};
