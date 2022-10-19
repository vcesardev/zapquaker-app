import {
  AttackType,
  BaseTroop,
  FavoriteTarget,
  ResourceType,
  TargetType,
} from "../../models/Troop";

export const wallbreakerTroopData: BaseTroop = {
  id: "321773217813278",
  attackType: AttackType.Melee,
  favoriteTarget: FavoriteTarget.Walls,
  dps: [240, 400, 600, 800, 1720, 2200, 2640, 3000, 3440, 3760, 4080],
  barracksLevel: 5,
  hitpoints: [20, 24, 29, 35, 53, 72, 82, 92, 112, 130, 140],
  labLevel: [0, 2, 4, 5, 6, 8, 9, 10, 11, 12, 13],
  maxLevel: 11,
  spaces: 2,
  resourceType: ResourceType.Elixir,
  trainingTime: 0.25,
  upgradeAmount: [
    0, 100000, 250000, 600000, 1200000, 2500000, 4200000, 7300000, 10000000,
    15200000, 16500000,
  ],
  targetType: TargetType.Ground,
  researchTime: [
    0, 360, 720, 1080, 1440, 3120, 5040, 10080, 15840, 21600, 23040,
  ],
  imageUrl: [
    "https://www.clashtrack.com/img/research/wall_breaker_1.png",
    "https://www.clashtrack.com/img/research/wall_breaker_2.png",
    "https://www.clashtrack.com/img/research/wall_breaker_3.png",
    "https://www.clashtrack.com/img/research/wall_breaker_4.png",
    "https://www.clashtrack.com/img/research/wall_breaker_5.png",
    "https://www.clashtrack.com/img/research/wall_breaker_6.png",
    "https://www.clashtrack.com/img/research/wall_breaker_7.png",
    "https://www.clashtrack.com/img/research/wall_breaker_8.png",
    "https://www.clashtrack.com/img/research/wall_breaker_9.png",
    "https://www.clashtrack.com/img/research/wall_breaker_10.png",
    "https://www.clashtrack.com/img/research/wall_breaker_11.png",
  ],
  name: "Quebra-Muros",
};
