import callistaAsset from "@/assets/project-callista-hd.jpg.asset.json";
import cilantraAsset from "@/assets/project-cilantra-hd.jpg.asset.json";
import texking from "@/assets/project-texking.jpg";
import coral from "@/assets/project-coral.jpg";
import rasik from "@/assets/project-rasik.jpg";
import homes from "@/assets/project-homes.jpg";

export const projects = [
  {
    name: "Swagat Callista",
    tag: "Residential",
    image: callistaAsset.url,
    desc: "An elevated address designed for families who seek refinement, light and lasting craftsmanship.",
  },
  {
    name: "Swagat Cilantra",
    tag: "Residential",
    image: cilantraAsset.url,
    desc: "A garden-wrapped tower where private balconies meet open sky in the heart of Surat.",
  },
  {
    name: "Swagat Texking",
    tag: "Commercial",
    image: texking,
    desc: "A landmark commercial address shaped for the city's next generation of businesses.",
  },
  {
    name: "Coral Heights",
    tag: "Residential",
    image: coral,
    desc: "Warm, balanced architecture with thoughtfully proportioned homes and skyline views.",
  },
  {
    name: "Rasik Villa",
    tag: "Residential",
    image: rasik,
    desc: "Private low-rise residences with serene landscapes, water features and quiet luxury.",
  },
  {
    name: "Swagat Homes",
    tag: "Residential",
    image: homes,
    desc: "Modern family residences crafted for everyday comfort and timeless living.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Why Swagat", href: "#why" },
  { label: "Amenities", href: "#amenities" },
  { label: "Contact", href: "#contact" },
];
