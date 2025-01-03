
import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";



export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const pricingOptions = [
  {
    title: "Basic Plan",
    price: "$16",
    features: [
      "Smart workout plan",
      "At home workouts",
      
    ],
  },
  {
    title: "Weekly Plan",
    price: "$25",
    features: [
      "PRO Gyms",
      "Smart workout plan",
      "At home workouts",
      
    ],
  },
  {
    title: "Monthly Plan",
    price: "$45",
    features: [
      "ELITE Gyms & Classes",
      "PRO Gyms",
      "Smart workout plan",
      "At home workout",
      "Personal Training",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Bunnies" },
  { href: "#rec", text: "Franchise" },
  { href: "#dep", text: "Partership" },
  { href: "#loc", text: "Network" },
  
];

export const platformLinks = [
  {  href: "", text: "Blogs" },
  {  href: "", text: "Security" },
  {  href: "", text: "Careers" },
];

export const communityLinks = [
  { href: "#", text: "Contact Us" },
  { href: "#", text: "Privacy Policy" },
  { href: "#", text: "Terms & Conditions" },
  { href: "#", text: "BMI Calculator" },
];
