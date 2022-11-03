import { BaseHealingSpell } from "../../models/Spells";
import { ResourceType } from "../../models/Troop";

export const healingSpellData: BaseHealingSpell = {
  maxLevel: 9,
  brewingTime: 6,
  healing: [600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200],
  housingSpaces: 2,
  id: "12378783217837813781",
  labLevel: [0, 2, 4, 5, 6, 7, 8, 11, 13],
  researchCost: [
    0, 75000, 150000, 300000, 900000, 1800000, 3000000, 10500000, 17000000,
  ],
  spellFactoryLevel: 2,
  resourceType: ResourceType.Elixir,
  researchTime: [0, 300, 600, 1200, 2160, 5760, 8640, 17280, 24480],
};
