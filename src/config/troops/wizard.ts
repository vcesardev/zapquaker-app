import {
  AttackType,
  BaseTroop,
  FavoriteTarget,
  ResourceType,
  TargetType,
} from "../../models/Troop";

export const wizardTroopData: BaseTroop = {
  id: "77273173179327131",
  dps: [50, 70, 90, 125, 170, 185, 200, 215, 230, 245, 260],
  attackType: AttackType.Ranged,
  barracksLevel: 7,
  favoriteTarget: FavoriteTarget.Any,
  maxLevel: 11,
  hitpoints: [75, 90, 108, 130, 156, 175, 190, 210, 230, 250, 270],
  labLevel: [0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13],
  imageUrl: [
    "https://www.clashtrack.com/img/research/wizard_1.png",
    "https://www.clashtrack.com/img/research/wizard_2.png",
    "https://www.clashtrack.com/img/research/wizard_3.png",
    "https://www.clashtrack.com/img/research/wizard_4.png",
    "https://www.clashtrack.com/img/research/wizard_5.png",
    "https://www.clashtrack.com/img/research/wizard_6.png",
    "https://www.clashtrack.com/img/research/wizard_7.png",
    "https://www.clashtrack.com/img/research/wizard_8.png",
    "https://www.clashtrack.com/img/research/wizard_9.png",
    "https://www.clashtrack.com/img/research/wizard_10.png",
    "https://www.clashtrack.com/img/research/wizard_11.png",
  ],
  spaces: 4,
  researchTime: [
    0, 480, 720, 1080, 1440, 2880, 5040, 7560, 12600, 15840, 23040,
  ],
  resourceType: ResourceType.Elixir,
  targetType: TargetType.Both,
  trainingTime: 0.5,
  upgradeAmount: [
    0, 120000, 320000, 620000, 1200000, 2200000, 3500000, 5000000, 6500000,
    10500000, 17200000,
  ],
  name: "Mago",
};
