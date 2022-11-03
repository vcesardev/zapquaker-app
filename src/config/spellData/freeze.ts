import { BaseSpellData } from "../../models/Spells";
import { ResourceType } from "../../models/Troop";

export const freezeSpellData: BaseSpellData = {
  spellDuration: [2.5, 3, 3.5, 4, 4.5, 5, 5.5],
  brewingTime: 6,
  housingSpaces: 1,
  id: "23289983189328998",
  labLevel: [0, 8, 8, 8, 8, 9, 10],
  maxLevel: 7,
  researchCost: [0, 1200000, 2000000, 3600000, 5000000, 8500000, 11000000],
  researchTime: [0, 2160, 4320, 7200, 10800, 12960, 16560],
  resourceType: ResourceType.Elixir,
  spellFactoryLevel: 4,
};
