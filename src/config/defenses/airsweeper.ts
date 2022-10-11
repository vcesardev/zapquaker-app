import { DefenseData } from "../../models/Defenses";

import Image1 from "../../assets/images/defenses/airsweeper/15_1.png";
import Image2 from "../../assets/images/defenses/airsweeper/15_2.png";
import Image3 from "../../assets/images/defenses/airsweeper/15_3.png";
import Image4 from "../../assets/images/defenses/airsweeper/15_4.png";
import Image5 from "../../assets/images/defenses/airsweeper/15_5.png";
import Image6 from "../../assets/images/defenses/airsweeper/15_6.png";
import Image7 from "../../assets/images/defenses/airsweeper/15_7.png";

export const airSweeperDefenseData: DefenseData = {
  id: "36731636123",
  hitpoints: [750, 800, 850, 900, 950, 1000, 1050],
  name: "Dispersor aéreo",
  maxLevel: 7,
  imageUrl: [Image1, Image2, Image3, Image4, Image5, Image6, Image7],
};
