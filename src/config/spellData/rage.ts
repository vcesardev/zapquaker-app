import { BaseBuffingSpell } from "../../models/Spells";
import { ResourceType } from "../../models/Troop";

export const rageSpellData: BaseBuffingSpell = {
  id: "7327832781387218237",
  brewingTime: 6,
  damageIncrease: [130, 140, 150, 160, 170, 180],
  speedIncrease: [20, 22, 24, 26, 28, 30],
  housingSpaces: 2,
  labLevel: [0, 3, 4, 5, 6, 10],
  maxLevel: 6,
  researchCost: [0, 400000, 800000, 1600000, 2400000, 11000000],
  resourceType: ResourceType.Elixir,
  spellFactoryLevel: 3,
  researchTime: [0, 720, 1440, 2880, 5760, 16560],
};
