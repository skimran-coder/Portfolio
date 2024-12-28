import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { motion } from "motion/react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="bg-black text-white font-merriweather relative z-10">
      <div className="flex justify-between items-center w-4/5 mx-auto py-4">
        <div>
          <a href="/"><svg
            viewBox="0 0 1088 786"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-20 w-16"
          >
            <motion.path
              stroke="white"
              strokeWidth="12"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              d="M1085.5 278L1084.24 279.988M1077.5 278L1067 296.5L1043.5 320L1003 357L960.5 380.5L926.5 388.5L879.5 409.5L827 414.5H790H748H714C702.675 414.5 685 414.5 685 414.5L648 404L627 388.5L610 372.5L605 357L610 340L627 320C627 320 633.399 305.677 637.5 296.5V278L619 296.5L610 311L597 336V372.5L610 404L637.5 425L669 431.5H702H735H803L874 425L934.5 404L985.5 388.5L1035.5 357L1084.24 279.988M1077.5 278L1085.5 270M1077.5 278V232V175.5L1067 146.5L1055.5 115L1022.5 98L926.5 108.5H879.5L790 123L719 129.5L619 146.5L494.5 161L392 175.5L313 188.5L216 209.5L147.5 221.5L97.9999 232L59.4999 240L38.4999 252L46.4999 259.5L222.5 255.5L385.5 246.5L526 240L576 236L584 221.5L597 209.5L610 240V270H569.5H494.5H392L259.5 278H216H171.5H67.4999H38.4999H9.99994V252L24.4999 232L90.9999 209.5L184.5 188.5L279 175.5L392 146.5L507.5 123L648 108.5C648 108.5 688.73 103.568 714 98C800.125 90.9053 904.958 80.765 897.5 81C930.246 78.4577 943.256 76.5593 964.5 73L1022.5 68L1055.5 98L1067 123L1085.5 188.5V232V270M1085.5 270L1084.24 279.988M97.9999 783.5L155.5 741.5L285.5 669.5L423.5 594.5L569.5 505.5L619 456.5V441L610 425L590.5 414.5H555H452.5L305.5 431.5L238.5 441L140 449L46.4999 441L27.9999 414.5L38.4999 380.5L59.4999 357L97.9999 320L121.5 296.5L184.5 252L238.5 209.5L356.5 146.5L442 108.5L541.5 68L637.5 36.5L714 24.5H790L816.5 36.5L833.5 54.5V68L827 115L790 146.5L748 178L702 209.5L648 232L619 240L637.5 259.5L654.5 257L685 252L721.5 232L758.5 209.5L816.5 161L848 123L858.5 89V47L840 20.5L816.5 9L790 2H748H714H669L627 9L605 14L569.5 24.5L541.5 36.5C541.5 36.5 512.855 47.4706 494.5 54.5L423.5 81L313 136L238.5 178L155.5 232L75.4999 296.5L24.4999 351.5L9.99994 380.5L2.99994 414.5L9.99994 449L38.4999 472.5H97.9999H155.5L285.5 464.5L373.5 456.5L459 443.5L507.5 441H569.5L584 449V464.5C567.125 471.348 557.84 476.67 541.5 488L494.5 514.5L452.5 546L408 568.5L338 609L243.5 664L147.5 718L67.4999 783.5H97.9999ZM888.5 622H858.5L816.5 609L803 568.5L809.5 525L803 514.5L790 525L758.5 555L742.5 575L702 609L654.5 649.5C654.5 649.5 651.654 659.329 637.5 664C623.346 668.671 618.494 666.691 619 649.5L627 630L637.5 609L654.5 586.5L677 546L702 505.5L721.5 472.5L735 449L770.5 396L803 351.5L827 311L858.5 257L897.5 202L934.5 146.5L960.5 115L1003 54.5L1016 28.5L1035.5 9H1055.5V24.5L1035.5 54.5L975 136L945 178L911 232L874 290L840 336L816.5 380.5L858.5 340L897.5 290L926.5 252L953 209.5L975 175.5L1003 136L1022.5 108.5L1055.5 54.5L1085.5 9V24.5L1077.5 54.5L1067 81L1043.5 123L1003 178L980.5 215L934.5 278L888.5 336L848 380.5L770.5 456.5L735 505.5L702 546C702 546 672 585.545 693 575C714 564.455 702 575 702 575L735 546L779.5 505.5L800.5 481.5L848 441L911 388.5L934.5 372.5L964.5 364.5C1009.93 358.924 1024.45 361.362 975 404L934.5 431.5L897.5 449L858.5 472.5C839.872 495.424 833.92 511.205 833.5 546V594.5L848 609H879.5H888.5V622Z"
            />
          </svg></a>
        </div>

        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>
    </header>
  );
};

export default Header;
