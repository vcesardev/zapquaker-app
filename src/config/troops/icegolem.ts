import {
  AttackType,
  FavoriteTarget,
  IceGolemTroop,
  ResourceType,
  TargetType,
} from "../../models/Troop";

export const icegolemTroopData: IceGolemTroop = {
  id: "378783127837817831783782187",
  attackType: AttackType.Melee,
  barracksLevel: 8,
  dps: [24, 28, 32, 36, 40, 44],
  favoriteTarget: FavoriteTarget.Defenses,
  freezingTime: [0.066, 0.0791, 0.091, 0.1041, 0.1166, 0.125],
  hitpoints: [2600, 2800, 3000, 3200, 3400, 3600],
  imageUrl: [
    "https://www.clashtrack.com/img/research/ice_golem_1.png",
    "https://www.clashtrack.com/img/research/ice_golem_2.png",
    "https://www.clashtrack.com/img/research/ice_golem_3.png",
    "https://www.clashtrack.com/img/research/ice_golem_4.png",
    "https://www.clashtrack.com/img/research/ice_golem_5.png",
    "https://www.clashtrack.com/img/research/ice_golem_6.png",
  ],
  labLevel: [0, 9, 9, 10, 10, 12],
  maxLevel: 6,
  name: "Golem de Gelo",
  researchTime: [0, 5760, 10080, 15120, 20160, 24480],
  resourceType: ResourceType.DarkElixir,
  spaces: 15,
  targetType: TargetType.Ground,
  trainingTime: 2.5,
  upgradeAmount: [0, 80000, 120000, 160000, 200000, 320000],
};
