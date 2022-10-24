import {
  AttackType,
  BaseTroop,
  FavoriteTarget,
  ResourceType,
  TargetType,
} from "../../models/Troop";

export const electrotitanTroopData: BaseTroop = {
  id: "4u8284273847823789432",
  attackType: AttackType.Ranged,
  dps: [1800, 200, 220],
  barracksLevel: 16,
  favoriteTarget: FavoriteTarget.Any,
  hitpoints: [7200, 7700, 8200],
  labLevel: [0, 12, 13],
  maxLevel: 3,
  name: "Titã Elétrica",
  researchTime: [0, 21600, 24480],
  resourceType: ResourceType.Elixir,
  spaces: 32,
  targetType: TargetType.Both,
  imageUrl: [
    "https://static.wikia.nocookie.net/clashofclans/images/b/bd/Electro_Titan1.png/revision/latest?cb=20221012220116",
    "https://static.wikia.nocookie.net/clashofclans/images/1/12/Electro_Titan2.png/revision/latest?cb=20221012220117",
    "https://static.wikia.nocookie.net/clashofclans/images/d/d1/Electro_Titan3.png/revision/latest?cb=20221012220118",
  ],
  trainingTime: 2,
  upgradeAmount: [0, 19500000, 20500000],
};
