import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { TelegramEnIcon, WhatsAppEnIcon, ViberEnIcon } from "@/components/icons";

const birthdate = new Date('1998-09-16'); // Укажите Вашу дату рождения

const calculateAge = (): number => {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

export const RESUME_DATA_EN = {
  name: "Denis Dmitrievich Minishin",
  initials: "Minishin D.D.",
  location: "Krasnoyarsk, Russia. UTC/GMT +7 hours",
  locationLink: "https://www.google.com/maps/place/Krasnoyarsk",
  gender: "Male",
  age: calculateAge().toLocaleString() + " years",
  birthdate: "born on " + birthdate.toLocaleString('en', { year: 'numeric', month: 'long', day: '2-digit' }),
  about:
    "Design Engineer / Process Control Engineer",
  summary:
    [
      "I am a design engineer with over 4 years of experience in the field of automation and process control systems (PCS). I have expertise in developing working documentation (WD) for process control systems, including process flow diagrams, control loop diagrams, instrument datasheets, and automation system architecture. Additionally, I have extensive experience in designing technical documentation for control panels and automation systems.",
      " ",
      "In my work, I use the following CAD software:",
      "• ePLAN (Electric P8, Pro Panel, FieldSys)",
      "• AutoCAD",
      " ",
      "Having a specialized higher education enables me to deeply understand the theoretical foundations and practical aspects of my field. I strive to automate workflows by leveraging the full potential of CAD tools. I am eager to learn new technologies, enhance my skills, and apply my knowledge and experience to achieve set objectives.",
    ],
  avatarUrl: "./images/7330010.jpg",
  personalWebsiteUrl: "./en",
  contact: {
    email: "denis.minishin@gmail.com",
    tel1_1: "+7 (913) 585 15-59",
    tel1_2: "+79135851559",
    tel2_1: "+7 (950) 435 71-51",
    tel2_2: "+79504357151",
    social: [
      {
        name: "Write in Telegram",
        url: "https://t.me/+79135851559",
        icon: TelegramEnIcon,
      },
      {
        name: "Write in WhatsApp",
        url: "https://wa.me/79135851559",
        icon: WhatsAppEnIcon,
      },
      {
        name: "Write in Viber",
        url: "viber://chat?number=%2B79135851559",
        icon: ViberEnIcon,
      },
    ],
  },
  education: [
    {
      school: "Siberian Federal University",
      institute: "School of Space and Information Technologies",
      link_sfu: "https://www.sfu-kras.ru/en",
      link_ikit: "https://ikit.sfu-kras.ru",
      degree: ["Department of Automation Systems, Automated Control, and Design",
        "Engineering system control"],
      grade: ["Master's degree"],
      start: "2020",
      end: "2022",
    },
    {
      school: "Siberian Federal University",
      institute: "School of Space and Information Technologies",
      link_sfu: "https://www.sfu-kras.ru/en",
      link_ikit: "https://ikit.sfu-kras.ru",
      degree: ["Department of Automation Systems, Automated Control, and Design",
        "Automation of technological processes and production. Control in Technical Systems"],
      grade: ["Bachelor's degree"],
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "OOO «Engineering and Automation Center»",
      link: "https://ceng24.com",
      badges: [],
      title: "Design Engineer / Process Control Engineer",
      logo: "",
      start: "December 2022",
      end: null,
      description:
        ["⠀• Development of operational documentation",
          "⠀• Development of design documentation for control panels and automation",
          "⠀• Professional use of software for electrical engineering projects:",
          "⠀⠀- ePLAN (Electric P8, Pro Panel, FieldSys)",
          "⠀⠀- AutoCAD",
          "⠀• Experience working with the ETM iPRO service",
        ]
    },
    {
      company: "JSC «Krastsvetmet»",
      link: "https://www.krastsvetmet.com",
      badges: [],
      title: "Design Engineer / Process Control Engineer",
      logo: "",
      start: "April 2021",
      end: "December 2022",
      description:
        ["• development of operational documentation for the automated process control system:",
          "⠀⠀- structural diagrams of the complex of technical means",
          "⠀⠀- functional automation diagrams",
          "⠀⠀- electrical schematic diagrams",
          "⠀⠀- external wiring connection diagrams",
          "⠀⠀- equipment and external wiring layout plans",
          "⠀⠀- cable journals",
          "⠀⠀- technical equipment installation drawings",
          "⠀⠀- general types of automation control panels and automation systems",
          "⠀⠀- list of signals",
          "⠀⠀- list of alarms and interlocks",
          "⠀⠀- compilation of equipment, product, material specifications, and procurement statements",
          "• making changes to existing working documentation;",
          "• issuing tasks to related departments;",
          "• coordination of technical assignments and solutions;",
          "• pre-project inspection;",
          "• author's supervision;",
          "• selection of optimal technical solutions, automation equipment, and control systems, knowledge of standards for automation equipment design, foundational structures;",
          "• professional work with software products for electrical engineering projects - AutoCAD, also experienced in Revit and Vault;",
          "• knowledge of regulatory and technical documentation;",
          "• ability to read, understand, and develop electrical schematic diagrams and drawings.",
        ]
    },
    {
      company: "JSC «Krasnoyarsk Hydroelectric Plant»",
      link: "https://www.google.com/maps?ll=55.934722,92.293611&q=55.934722,92.293611&hl=en&t=m&z=15",
      badges: ["Practice"],
      title: "Practice (Production-technological practice)",
      logo: "",
      start: "June 2020",
      end: "July 2020",
      description:
        ["Job Responsibilities and Achievements:",
          "• Studying production technological processes and automated systems applied at the enterprise, as well as the principles of operation of control and management devices during operation.",
          "• Developed switching programs for the industrial controller SIEMENS LOGO! 230RCL using LOGO!Soft Comfort."
        ]
    },
  ],
  languages: [
    "Russian | Native",
    "English | B2 — Upper Intermediate"
  ],
  skills: [
    "Autodesk",
    "AutoCAD",
    "ePLAN",
    "Electric P8",
    "Pro Panel",
    "FieldSys",
    "MS Office",
    "MS Word",
    "MS Excel",
    "MS Visio",
    "Mathcad",
    "MATLAB",
    "Simulink",
    "NormaCS",
    "LabVIEW",
    "ISO",
    "NEC",
    "PLC",
    "SCADA",
    "Control and measurement instruments and automation",
    "Automation of production",
    "Automation of technological processes",
    "Engineering",
    "Designing",
    "Comprehensive automation",
    "Low-voltage packaged devices",
    "Low-voltage systems",
    "Engineering systems",
    "IEC 61131-3",
    "LISP",
    "Automated system for managing the technological process",
    "Working with electrical circuits",
    "Normative-technical documentation",
  ],
  projects: [
    {
      title: "1 – CA",
      techStack: [
        "CA",
        "AutoCAD",
        "OD",
        "DD",
        "PDF",
        "Comprehensive automation",
      ],
      description:
        "Comprehensive automation. Complex of technical means for the automated process control system. Secondary circuits and cable wiring. Operating and design documentation",
      logo: "",
      link: {
        label: "Comprehensive automation. Operating and design documentation",
        href: "./files/portfolio/1-АК.pdf",
      },
    },
    {
      title: "2 – CA",
      techStack: [
        "CA",
        "AutoCAD",
        "OD",
        "DD",
        "PDF",
        "Comprehensive automation",
      ],
      description:
        "Comprehensive automation. Operating and design documentation",
      logo: "",
      link: {
        label: "Comprehensive automation. Operating and design documentation",
        href: "./files/portfolio/2-АК.pdf",
      },
    },
    {
      title: "3 – CA",
      techStack: [
        "CA",
        "AutoCAD",
        "OD",
        "DD",
        "PDF",
        "Comprehensive automation",
      ],
      description: "Comprehensive automation. Operating and design documentation",
      logo: "",
      link: {
        label: "Comprehensive automation. Operating and design documentation",
        href: "./files/portfolio/3-АК.pdf",
      },
    },
    {
      title: "4 – CA",
      techStack: [
        "CA",
        "AutoCAD",
        "OD",
        "DD",
        "PDF",
        "Comprehensive automation",
      ],
      description:
        "Comprehensive automation. Operating and design documentation",
      logo: "",
      link: {
        label: "Comprehensive automation. Operating and design documentation",
        href: "./files/portfolio/4-АК.pdf",
      },
    },
    {
      title: "5 – AVS",
      techStack: [
        "AVS",
        "ePLAN",
        "FieldSys",
        "Electric P8",
        "OD",
        "PDF",
      ],
      description:
        "Automated general-purpose and smoke-exhaust ventilation system. Operating documentation",
      logo: "",
      link: {
        label: "Automated general-purpose and smoke-exhaust ventilation system. Operating documentation",
        href: "./files/portfolio/5-АОВ.pdf",
      },
    },
    {
      title: "6 – ACDS",
      techStack: [
        "ACDS",
        "ePLAN",
        "FieldSys",
        "Electric P8",
        "OD",
        "PDF",
      ],
      description:
        "The automatic control and dispatch system for engineering equipment. Operating documentation",
      logo: "",
      link: {
        label: "The automatic control and dispatch system for engineering equipment. Operating documentation",
        href: "./files/portfolio/6-АСУД.pdf",
      },
    },
    {
      title: "7 – AVS",
      techStack: [
        "AVS",
        "ePLAN",
        "FieldSys",
        "Electric P8",
        "OD",
        "PDF",
      ],
      description:
        "Automated heating, ventilation, and air conditioning. Operating documentation",
      logo: "",
      link: {
        label: "Automated heating, ventilation, and air conditioning. Operating documentation",
        href: "./files/portfolio/7-АОВ.pdf",
      },
    },
    {
      title: "8 – AVS",
      techStack: [
        "AVS",
        "ePLAN",
        "FieldSys",
        "Electric P8",
        "OD",
        "PDF",
      ],
      description:
        "Automation of heating and ventilation. Operational documentation",
      logo: "",
      link: {
        label: "Automation of heating and ventilation. Operational documentation",
        href: "./files/portfolio/8-АОВ.pdf",
      },
    },
    {
      title: "9 – DD-VSCP",
      techStack: [
        "VSCP",
        "ePLAN",
        "Pro Panel",
        "Electric P8",
        "DD",
        "PDF",
      ],
      description:
        "Design Documentation. Ventilation system control panel",
      logo: "",
      link: {
        label: "Design Documentation. Ventilation system control panel",
        href: "./files/portfolio/9-КД-ШУП.pdf",
      },
    },
    {
      title: "10 – DD-CP",
      techStack: [
        "CP",
        "ePLAN",
        "Pro Panel",
        "Electric P8",
        "DD",
        "PDF",
      ],
      description:
        "Design Documentation. Control Panel",
      logo: "",
      link: {
        label: "Design Documentation. Control Panel",
        href: "./files/portfolio/10-КД-ШУ.pdf",
      },
    },
    {
      title: "11 – DD-CPP",
      techStack: [
        "CPP",
        "ePLAN",
        "Pro Panel",
        "Electric P8",
        "DD",
        "PDF",
      ],
      description:
        "Design Documentation. Control panel for pumps",
      logo: "",
      link: {
        label: "Design Documentation. Control panel for pumps",
        href: "./files/portfolio/11-КД-ШУН.pdf",
      },
    },
    {
      title: "12 – DD-VSCP",
      techStack: [
        "VSCP",
        "ePLAN",
        "Pro Panel",
        "Electric P8",
        "DD",
        "PDF",
      ],
      description:
        "Design Documentation. Ventilation system control panel",
      logo: "",
      link: {
        label: "Design Documentation. Ventilation system control panel",
        href: "./files/portfolio/12-КД-ШУП.pdf",
      },
    },
    {
      title: "13 – DD-VSCP",
      techStack: [
        "VSCP",
        "ePLAN",
        "Pro Panel",
        "Electric P8",
        "DD",
        "PDF",
      ],
      description:
        "Design Documentation. Ventilation system control panel",
      logo: "",
      link: {
        label: "Design Documentation. Ventilation system control panel",
        href: "./files/portfolio/13-КД-ШУП.pdf",
      },
    },
    {
      title: "14 – DD-CPHS",
      techStack: [
        "CPHS",
        "ePLAN",
        "Pro Panel",
        "Electric P8",
        "DD",
        "PDF",
      ],
      description:
        "Design Documentation. Control panel of the heating substation",
      logo: "",
      link: {
        label: "Design Documentation. Control panel of the heating substation",
        href: "./files/portfolio/14-КД-ШУТП.pdf",
      },
    },
    {
      title: "15 – DD-CPEF",
      techStack: [
        "CPEF",
        "ePLAN",
        "Pro Panel",
        "Electric P8",
        "DD",
        "PDF",
      ],
      description:
        "Design Documentation. Control panel for exhaust fans",
      logo: "",
      link: {
        label: "Design Documentation. Control panel for exhaust fans",
        href: "./files/portfolio/15-КД-ШУВ.pdf",
      },
    },
  ],
} as const;