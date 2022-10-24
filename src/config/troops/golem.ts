import {
  AttackType,
  BaseTroop,
  FavoriteTarget,
  ResourceType,
  TargetType,
} from "../../models/Troop";

export const golemTroopData: BaseTroop = {
  id: "378278317838",
  attackType: AttackType.Melee,
  barracksLevel: 4,
  dps: [35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
  favoriteTarget: FavoriteTarget.Defenses,
  hitpoints: [
    5100, 5400, 5700, 6000, 6300, 6600, 6900, 7200, 7600, 8000, 8400, 8800,
  ],
  labLevel: [0, 6, 7, 7, 8, 9, 9, 10, 10, 11, 12, 13],
  maxLevel: 12,
  name: "Golem",
  researchTime: [
    0, 1800, 3600, 5400, 6120, 7200, 7920, 10440, 14040, 17280, 23040, 24480,
  ],
  resourceType: ResourceType.DarkElixir,
  spaces: 30,
  targetType: TargetType.Ground,
  trainingTime: 5,
  upgradeAmount: [
    0, 10000, 20000, 30000, 43000, 53000, 77000, 112000, 140000, 200000, 300000,
    330000,
  ],
  imageUrl: [
    "https://www.clashtrack.com/img/research/golem_1.png",
    "https://www.clashtrack.com/img/research/golem_2.png",
    "https://www.clashtrack.com/img/research/golem_3.png",
    "https://www.clashtrack.com/img/research/golem_4.png",
    "https://www.clashtrack.com/img/research/golem_5.png",
    "https://www.clashtrack.com/img/research/golem_6.png",
    "https://www.clashtrack.com/img/research/golem_7.png",
    "https://www.clashtrack.com/img/research/golem_8.png",
    "https://www.clashtrack.com/img/research/golem_9.png",
    "https://www.clashtrack.com/img/research/golem_10.png",
    "https://www.clashtrack.com/img/research/golem_11.png",
    "https://www.clashtrack.com/img/research/golem_12.png",
  ],
};
