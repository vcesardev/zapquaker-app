//THANK YOU BRYGHT7!!!

import { eqSpellData } from "../config/spells/earthquake";
import { zapSpellData } from "../config/spells/zap";
import { BaseDefense } from "../models/Defenses";
import { ZapQuake } from "../models/Spells";

type Props = {
  zapLevel: number;
  quakeLevel: number;
  spellCapacity: number;
  building: BaseDefense;
};

export function getZapQuakes(props: Props, buildingLevel: number): ZapQuake[] {
  const result: ZapQuake[] = [];
  const hp = props.building.hitpoints[buildingLevel - 1];
  const damageZap = zapSpellData.damage[props.zapLevel - 1];
  const damageQuake = eqSpellData.damage[props.quakeLevel - 1]; // to be divided by 100
  let nbSpells = 0;
  let hpLeft = hp;

  // if building is a hero, can't be damaged by quakes
  // directly return nb of zaps if <= spell capacity
  if (props.building.id === "62" || props.building.id === "122") {
    const nbZaps = Math.ceil(hp / damageZap);
    return nbZaps <= props.spellCapacity
      ? [{ nbQuakes: 0, nbZaps: nbZaps }]
      : [];
  }

  for (let q = 0; nbSpells < props.spellCapacity && hpLeft > 0; q++) {
    for (let z = 1; nbSpells < props.spellCapacity && hpLeft > 0; z++) {
      let damage = z * damageZap; // by default zap damage
      if (q > 0) {
        let quakesMultiplier = 1; // successive quakes multiplier
        if (q > 1) {
          let denominator = 3;
          for (let i = 0; i < q - 1; i++) {
            // q=2: 1+1/3, q=3: 1+1/3+1/5, q=4: 1+1/3+1/5+1/7 ...
            quakesMultiplier += 1 / denominator;
            denominator += 2;
          }
        }
        // add quake damage
        damage += ((hp * damageQuake) / 100) * quakesMultiplier;
      }
      hpLeft = hp - damage; // deal damage to building
      if (hpLeft <= 0) {
        // if building is destroyed, we got a zapquake combination
        result.push({ nbQuakes: q, nbZaps: z });
      }
      nbSpells = q + z; // update nbSpells
    }
    hpLeft = hp; // repair building for next test
  }

  // sort by amount of spells used
  result.sort((a: ZapQuake, b: ZapQuake) => {
    if (a.nbZaps + a.nbQuakes > b.nbZaps + b.nbQuakes) return 1;
    if (b.nbZaps + b.nbQuakes > a.nbZaps + a.nbQuakes) return -1;
    return 0;
  });

  return result;
}
