import { BaseDamageSpell } from "../../models/Spells";
import { ResourceType } from "../../models/Troop";

export const lightningSpellData: BaseDamageSpell = {
  id: "832138178317832781",
  brewingTime: 3,
  damage: [150, 180, 210, 240, 270, 320, 400, 480, 560, 600],
  housingSpaces: 1,
  labLevel: [0, 1, 2, 3, 6, 7, 8, 9, 10, 13],
  maxLevel: 10,
  researchCost: [
    0, 50000, 100000, 200000, 600000, 1500000, 2500000, 4200000, 7000000,
    16000000,
  ],
  resourceType: ResourceType.Elixir,
  spellFactoryLevel: 1,
  researchTime: [0, 240, 480, 720, 1440, 5760, 8640, 10440, 12960, 23040],
};
