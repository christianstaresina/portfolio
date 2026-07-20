export const shopUrl = "https://christianstaresinaprints.com";
export const linkedInUrl = "https://www.linkedin.com/in/christian-staresina/";
export const resumePdfUrl = "/files/christian-staresina-resume.pdf";

export const navItems = [
  { href: "", label: "Home" },
  { href: "resume", label: "Resume" },
  { href: "hobbies", label: "Hobbies" },
] as const;

export const about = {
  placeholder:
    "Personal background and interests will be added here soon.",
} as const;

export const resume = {
  summary:
    "Career highlights below. Download the PDF for the complete resume.",
  experience: [
    {
      role: "Electrical Engineer II",
      org: "Zurn Elkay Water Solutions · Cary, NC",
      period: "June 2026 — Present",
      focus:
        "Leads schematic and PCB layout, design verification, and cross-functional delivery.",
    },
    {
      role: "Electrical Engineer I",
      org: "Zurn Elkay Water Solutions · Cary, NC",
      period: "August 2023 — June 2026",
      focus:
        "Schematic capture, PCB layout, prototype bring-up, DVT, and manufacturing support.",
    },
    {
      role: "Electrical Engineering Intern",
      org: "Zurn Elkay Water Solutions · Cary, NC",
      period: "May 2023 — August 2023",
      focus:
        "PCB design, fabrication files, BOM work, and SMT prototype assembly.",
    },
  ],
  education: [
    {
      school: "North Carolina State University",
      credential: "B.S. Electrical Engineering",
      period: "2021 — 2024",
    },
    {
      school: "Wake Technical Community College",
      credential: "Associate in Science · Associate in Engineering",
      period: "2019 — 2021",
    },
  ],
  skills:
    "OrCAD/Allegro · KiCad · Schematic capture · PCB layout · Oscilloscopes · Multimeters · SMT soldering · FDM 3D printing · SolidWorks · Autodesk Inventor · Fusion 360 · LTspice · Embedded C/C++ · Python · Git · Azure DevOps · Microsoft 365",
} as const;

export const photography = {
  title: "Christian Staresina Prints",
  summary:
    "Fine-art prints and field work. Explore the collection at the print shop while the full gallery section expands.",
  meta: "Visit print shop",
  link: { href: shopUrl, external: true },
} as const;

export const projects = [
  {
    title: "Laser Timer System V1",
    summary:
      "Portable start and finish gates that measure elapsed time and average speed for sprint training.",
    meta: "C · GitHub",
    link: {
      href: "https://github.com/christianstaresina/laser-timer-system-v1",
      external: true,
    },
  },
  {
    title: "Savings Portfolio Dashboard",
    summary:
      "Privacy-first desktop dashboard for local savings and investment tracking, charts, and forecasts.",
    meta: "TypeScript · GitHub",
    link: {
      href: "https://github.com/christianstaresina/savings-portfolio-dashboard",
      external: true,
    },
  },
] as const;

export const variants = [
  {
    id: "forge",
    name: "Forge",
    tagline: "Industrial charcoal. Condensed headlines. Straight edges.",
  },
  {
    id: "field",
    name: "Field",
    tagline: "Olive utility. Grounded type. Outdoor-ready structure.",
  },
  {
    id: "signal",
    name: "Signal",
    tagline: "Navy technical grid. Clean hierarchy. Quiet precision.",
  },
] as const;

export type VariantId = (typeof variants)[number]["id"];
