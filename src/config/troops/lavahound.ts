import {
  AttackType,
  BaseTroop,
  FavoriteTarget,
  ResourceType,
  TargetType,
} from "../../models/Troop";

export const lavahoundTroopData: BaseTroop = {
  id: "778487273482874273887",
  attackType: AttackType.Ranged,
  dps: [10, 12, 14, 16, 18, 20],
  barracksLevel: 6,
  favoriteTarget: FavoriteTarget.Defenses,
  hitpoints: [6100, 6500, 6800, 7200, 7600, 8000],
  labLevel: [0, 7, 8, 9, 10, 11],
  maxLevel: 6,
  name: "Lava Hound",
  researchTime: [0, 7200, 9360, 12960, 20160, 23040],
  spaces: 30,
  resourceType: ResourceType.DarkElixir,
  targetType: TargetType.Both,
  trainingTime: 5,
  upgradeAmount: [0, 35000, 60000, 120000, 190000, 270000],
  imageUrl: [
    "https://www.clashtrack.com/img/research/lava_hound_1.png",
    "https://www.clashtrack.com/img/research/lava_hound_2.png",
    "https://www.clashtrack.com/img/research/lava_hound_3.png",
    "https://www.clashtrack.com/img/research/lava_hound_4.png",
    "https://www.clashtrack.com/img/research/lava_hound_5.png",
    "https://www.clashtrack.com/img/research/lava_hound_6.png",
  ],
};
