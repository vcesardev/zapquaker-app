import { BaseDefense, DefenseData } from "../../../models/Defenses";

import Image1 from "../../../assets/images/defenses/airdefenses/14_1.png";
import Image2 from "../../../assets/images/defenses/airdefenses/14_2.png";
import Image3 from "../../../assets/images/defenses/airdefenses/14_3.png";
import Image4 from "../../../assets/images/defenses/airdefenses/14_4.png";
import Image5 from "../../../assets/images/defenses/airdefenses/14_5.png";
import Image6 from "../../../assets/images/defenses/airdefenses/14_6.png";
import Image7 from "../../../assets/images/defenses/airdefenses/14_7.png";
import Image8 from "../../../assets/images/defenses/airdefenses/14_8.png";
import Image9 from "../../../assets/images/defenses/airdefenses/14_9.png";
import Image10 from "../../../assets/images/defenses/airdefenses/14_10.png";
import Image11 from "../../../assets/images/defenses/airdefenses/14_11.png";
import Image12 from "../../../assets/images/defenses/airdefenses/14_12.png";

export const data: DefenseData = {
  id: "123214124",
  name: "Defesa Aérea",
  hitpoints: [
    "800",
    "850",
    "900",
    "950",
    "1000",
    "1050",
    "1100",
    "1200",
    "1300",
    "1400",
    "1500",
    "1600",
  ],
  imageUrl: [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
  ],
  maxLevel: 12,
};
