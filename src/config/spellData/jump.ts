import { BaseSpellData } from "../../models/Spells";
import { ResourceType } from "../../models/Troop";

export const jumpSpellData: BaseSpellData = {
  id: "787832187172832781",
  brewingTime: 6,
  housingSpaces: 2,
  labLevel: [0, 5, 8, 11, 13],
  maxLevel: 5,
  researchCost: [0, 2000000, 3400000, 9000000, 16500000],
  researchTime: [0, 5760, 8640, 16200, 23760],
  resourceType: ResourceType.Elixir,
  spellFactoryLevel: 4,
  spellDuration: [20, 40, 60, 80, 100],
};
