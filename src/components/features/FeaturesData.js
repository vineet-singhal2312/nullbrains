import { AiOutlineNotification } from "react-icons/ai";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { CgToolbarLeft } from "react-icons/cg";
import { BiChip } from "react-icons/bi";
import { RiCouponLine } from "react-icons/ri";

export const FeaturesData = [
  {
    id: 1,
    icon: <AiOutlineSafetyCertificate id="icon" />,
    title: "Certification",
    subTitle:
      "Each of our plan will provide you and your time with certification.",
  },
  {
    id: 2,
    icon: <AiOutlineNotification id="icon" />,
    title: "Notification",
    subTitle:
      "Send Out notification to all your customers to keep them engaged.",
  },
  {
    id: 3,
    icon: <AiOutlineCodeSandbox id="icon" />,
    title: "bundles",
    subTitle: "High-quality bundles of awesome tools to help you out.",
  },
  {
    id: 4,
    icon: <CgToolbarLeft id="icon" />,
    title: "Developer Tools",
    subTitle:
      "Developer tools to help grow your application and keep it up-to-date.",
  },
  {
    id: 5,
    icon: <BiChip id="icon" />,
    title: "Building Blocks",
    subTitle:
      "The right kind of building blocks to take your company to the level.",
  },
  {
    id: 6,
    icon: <RiCouponLine id="icon" />,
    title: "Coupons",
    subTitle:
      "Coupons system to provide special offers and discounts for your app.",
  },
];
