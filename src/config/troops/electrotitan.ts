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
};
