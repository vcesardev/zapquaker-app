import { DefenseData } from "../../models/Defenses";

import { airDefenseData } from "./airdefense";
import { airSweeperDefenseData } from "./airsweeper";
import { archerTowerDefenseData } from "./archertower";
import { bomberTowerDefenseData } from "./bombertower";
import { builderDefenseData } from "./builder";
import { cannonDefenseData } from "./cannon";
import { eagleDefenseData } from "./eagle";
import { infernoDefenseData } from "./inferno";
import { monolithDefenseData } from "./monolith";
import { mortarDefenseData } from "./mortar";
import { scatterShotDefenseData } from "./scattershot";
import { spelltowerDefenseData } from "./spelltower";
import { teslaDefenseData } from "./teslas";
import { wizardTowerDefenseData } from "./wizardtower";
import { xbowDefenseData } from "./xbow";

const generalDefensesData: DefenseData[] = [
  airDefenseData,
  airSweeperDefenseData,
  archerTowerDefenseData,
  builderDefenseData,
  bomberTowerDefenseData,
  cannonDefenseData,
  eagleDefenseData,
  infernoDefenseData,
  monolithDefenseData,
  mortarDefenseData,
  scatterShotDefenseData,
  spelltowerDefenseData,
  teslaDefenseData,
  wizardTowerDefenseData,
  xbowDefenseData,
];

export default generalDefensesData;
