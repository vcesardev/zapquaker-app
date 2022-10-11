import { DefenseData } from "../../models/Defenses";

import Image1 from "../../assets/images/defenses/eagle/20_1.png";
import Image2 from "../../assets/images/defenses/eagle/20_2.png";
import Image3 from "../../assets/images/defenses/eagle/20_3.png";
import Image4 from "../../assets/images/defenses/eagle/20_4.png";
import Image5 from "../../assets/images/defenses/eagle/20_5.png";

export const eagleDefenseData: DefenseData = {
  id: "321551325631256",
  name: "Artilharia águia",
  hitpoints: [4000, 4400, 4800, 5200, 5600],
  maxLevel: 5,
  imageUrl: [Image1, Image2, Image3, Image4, Image5],
};
