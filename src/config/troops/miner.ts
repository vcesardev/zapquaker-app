import {
  AttackType,
  BaseTroop,
  FavoriteTarget,
  ResourceType,
  TargetType,
} from "../../models/Troop";

export const minerTroopData: BaseTroop = {
  id: "72736371732",
  attackType: AttackType.Melee,
  barracksLevel: 12,
  spaces: 6,
  dps: [80, 88, 96, 104, 112, 120, 128, 136, 144],
  favoriteTarget: FavoriteTarget.Any,
  hitpoints: [550, 610, 670, 730, 800, 900, 1000, 1100, 1200],
  labLevel: [0, 8, 8, 9, 9, 10, 11, 12, 13],
  maxLevel: 9,
  name: "Mineiro",
  resourceType: ResourceType.Elixir,
  targetType: TargetType.Ground,
  researchTime: [0, 3120, 5040, 5760, 10080, 12960, 16920, 23040, 24480],
  trainingTime: 0.5,
  upgradeAmount: [
    0, 2500000, 3200000, 3800000, 5000000, 6500000, 10000000, 16500000,
    18500000,
  ],
  imageUrl: [
    "https://www.clashtrack.com/img/research/miner_1.png",
    "https://www.clashtrack.com/img/research/miner_2.png",
    "https://www.clashtrack.com/img/research/miner_3.png",
    "https://www.clashtrack.com/img/research/miner_4.png",
    "https://www.clashtrack.com/img/research/miner_5.png",
    "https://www.clashtrack.com/img/research/miner_6.png",
    "https://www.clashtrack.com/img/research/miner_7.png",
    "https://www.clashtrack.com/img/research/miner_8.png",
    "https://www.clashtrack.com/img/research/miner_9.png",
  ],
};
