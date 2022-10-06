import { BaseSpell } from "../../../models/Spells";

import ZapImage from "../../../assets/images/spells/spell-lightning.png";

export const zapSpellData: BaseSpell = {
  id: "eq311231312",
  maxLevel: 9,
  imageUrl: ZapImage,
  damage: [150, 180, 210, 240, 270, 320, 400, 480, 560],
};
