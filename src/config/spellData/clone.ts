import { BaseSpellData } from "../../models/Spells";
import { ResourceType } from "../../models/Troop";

export const cloneSpellData: BaseSpellData = {
  id: "72784782487327843",
  brewingTime: 12,
  housingSpaces: 2,
  labLevel: [0, 8, 9, 9, 9, 11, 12],
  maxLevel: 7,
  researchCost: [0, 2500000, 4000000, 6000000, 8000000, 12000000, 16500000],
  resourceType: ResourceType.Elixir,
  spellFactoryLevel: 5,
  cloneSpace: [18, 21, 24, 27, 30, 34, 38],
  researchTime: [0, 2880, 5760, 7920, 14400, 21600, 23760],
};
