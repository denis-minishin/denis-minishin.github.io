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
import { TelegramRuIcon, WhatsAppRuIcon, ViberRuIcon } from "@/components/icons";

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

export const RESUME_DATA_RU = {
  name: "Денис Дмитриевич Минишин",
  initials: "Минишин Д.Д.",
  location: "Красноярск, Россия. МСК+4",
  locationLink: "https://www.google.com/maps/place/Krasnoyarsk",
  gender: "Мужчина",
  age: calculateAge().toLocaleString() + " лет",
  birthdate: "родился " + birthdate.toLocaleString('ru', { year: 'numeric', month: 'long', day: '2-digit' }),
  about:
    "Инженер-проектировщик АСУ ТП, КИПиА и диспетчеризации",
  summary:
    [
      "Я — инженер-проектировщик с более 4-летним опытом работы проектировщиком в области автоматики, автоматизации технологических процессов (АСУ ТП). Есть опыт разработки рабочей (РД) документации разделов: АОВ, АК, АТХ, АСУД, а также опыт проектирования конструкторской документации (КД) на шкафы управления и автоматики. ",
      " ",
      "В своей работе использую такие САПР как:",
      "• ePLAN (Electric P8, Pro Panel, FieldSys)",
      "• AutoCAD",
      " ",
      "Наличие профильного высшего образования позволяет мне глубоко понимать теоретические основы и практические аспекты моей специализации. Я стремлюсь к автоматизации рабочих процессов, используя все возможности САПР. Готов к изучению нового, совершенствованию имеющихся навыков, применению своих знаний и опыта для достижения поставленных задач.",
    ],
  avatarUrl: "./images/7330010.jpg",
  personalWebsiteUrl: "./",
  contact: {
    email: "denis.minishin@gmail.com",
    tel1_1: "+7 (913) 585 15-59",
    tel1_2: "+79135851559",
    tel2_1: "+7 (950) 435 71-51",
    tel2_2: "+79504357151",
    social: [
      {
        name: "Написать в Telegram",
        url: "https://t.me/+79135851559",
        icon: TelegramRuIcon,
      },
      {
        name: "Написать в WhatsApp",
        url: "https://wa.me/79135851559",
        icon: WhatsAppRuIcon,
      },
      {
        name: "Написать в Viber",
        url: "viber://chat?number=%2B79135851559",
        icon: ViberRuIcon,
      },
    ],
  },
  education: [
    {
      school: "Сибирский федеральный университет",
      institute: "Институт космических и информационных технологий",
      link_sfu: "https://www.sfu-kras.ru",
      link_ikit: "https://ikit.sfu-kras.ru",
      degree: ["Кафедра систем автоматики, автоматизированного управления и проектирования",
        "Интегрированные системы управления производством"],
      grade: ["Магистр"],
      start: "2020",
      end: "2022",
    },
    {
      school: "Сибирский федеральный университет",
      institute: "Институт космических и информационных технологий",
      link_sfu: "https://www.sfu-kras.ru",
      link_ikit: "https://ikit.sfu-kras.ru",
      degree: ["Кафедра систем автоматики, автоматизированного управления и проектирования",
        "Управление в технических системах"],
      grade: ["Бакалавр"],
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "ООО «Центр Инжиниринга и Автоматизации»",
      link: "https://ceng24.com",
      badges: [],
      title: "Инженер-проектировщик",
      logo: "",
      start: "декабрь 2022",
      end: null,
      description:
        ["⠀• разработка рабочей документации (разделы: АОВ, АК, АТХ, АСУД)",
          "⠀• разработка конструкторской документации (КД) на шкафы управления и автоматики",
          "⠀• профессиональная работа с программными продуктами для выполнения проектов в области электротехники:",
          "⠀⠀- ePLAN (Electric P8, Pro Panel, FieldSys)",
          "⠀⠀- AutoCAD",
          "⠀• опыт работы с сервисом ЭТМ iPRO",
        ]
    },
    {
      company: "ОАО «Красцветмет»",
      link: "https://www.krastsvetmet.ru",
      badges: [],
      title: "Инженер-проектировщик",
      logo: "",
      start: "апрель 2021",
      end: "декабрь 2022",
      description:
        ["• разработка рабочей документации (стадия П, стадия Р, ОТР) на АСУ ТП (разделы АК, АТХ):",
          "⠀⠀- структурные схемы комплекса технических средств",
          "⠀⠀- функциональные схемы автоматизации",
          "⠀⠀- электрические принципиальные схемы",
          "⠀⠀- схемы соединений внешних проводок",
          "⠀⠀- планы расположения оборудования и проводок",
          "⠀⠀- кабельные журналы",
          "⠀⠀- чертежи установки технических средств",
          "⠀⠀- общие виды шкафов",
          "⠀⠀- перечень сигналов",
          "⠀⠀- перечень сигнализаций и блокировок",
          "⠀⠀- составление спецификации оборудования, изделий, материалов и закупочных ведомостей",
          "• внесение изменений в существующую рабочую документацию;",
          "• выдача заданий смежным отделам;",
          "• согласование технического задания, технических решений;",
          "• предпроектное обследование;",
          "• авторский надзор;",
          "• подбор оптимальных технических решений, оборудования АСУТП и КИПиА, знание стандартов по проектированию оборудования автоматизации, закладных конструкций;",
          "• профессиональная работа с программными продуктами для выполнения проектов в области электротехники - AutoCAD, также есть опыт работы в Revit, Vault;",
          "• знание нормативной и технической документации;",
          "• умение читать, понимать и разрабатывать электрические принципиальные схемы, чертежи.",
        ]
    },
    {
      company: "АО «Красноярская ГЭС»",
      link: "https://www.so-ups.ru/odu-siberia/odu-siberia-zone/znachimye-ehnergoobekty/krasnojarskaja-gehs",
      badges: ["Практика"],
      title: "Практикант (Производственно-технологическая практика)",
      logo: "",
      start: "июнь 2020",
      end: "июль 2020",
      description:
        ["Должностные обязанности и достижения:",
          "• Изучение производственных технологических процессов и автоматизированных систем, применяемых на предприятии, а также основ работы устройств контроля и управления в процессе эксплуатации.",
          "• Разрабатывал коммутационные программы для промышленного контроллера SIEMENS LOGO! 230RCL используя LOGO!Soft Comfort."
        ]
    },
  ],
  languages: [
    "Русский | Родной",
    "Английский | B2 — Средне-продвинутый"
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
    "АСУТП",
    "КИПиА",
    "АК",
    "АТХ",
    "АОВ",
    "Автоматизация технологических процессов",
    "Автоматизация производства",
    "Автоматизация комплексная",
    "Слаботочные системы",
    "Инженерные системы",
    "Инжиниринг",
    "Проектирование",
    "АСУ",
    "АСУ ТП",
    "Рабочая документация",
    "Проектная документация",
    "Конструкторская документация",
    "Щиты автоматики и управления",
    "РД",
    "ПД",
    "КД",
    "Низковольтные комплектные устройства",
    "НКУ",
    "Работа с электрическими схемами",
    "Нормативно-техническая документация",
    "ЕСКД",
    "ПУЭ",
    "PLC",
    "SCADA",
    "МЭК 6-1131/3",
    "LISP",
  ],
  projects: [
    {
      title: "1 – АК",
      techStack: [
        "АК",
        "AutoCAD",
        "РД",
        "КД",
        "PDF",
        "Автоматизация комплексная",
      ],
      description:
        "Автоматизация комплексная. Комплекс технических средств АСУ ТП. Вторичные цепи и кабельные проводки. Рабочая и конструкторская документация",
      logo: "",
      link: {
        label: "Автоматизация комплексная. Рабочая и конструкторская документация",
        href: "./files/portfolio/1-АК.pdf",
      },
    },
    {
      title: "2 – АК",
      techStack: [
        "АК",
        "AutoCAD",
        "РД",
        "КД",
        "PDF",
        "Автоматизация комплексная",
      ],
      description:
        "Автоматизация комплексная. Рабочая и конструкторская документация",
      logo: "",
      link: {
        label: "Автоматизация комплексная. Рабочая и конструкторская документация",
        href: "./files/portfolio/2-АК.pdf",
      },
    },
    {
      title: "3 – АК",
      techStack: [
        "АК",
        "AutoCAD",
        "РД",
        "КД",
        "PDF",
        "Автоматизация комплексная",
      ],
      description: "Автоматизация комплексная. Рабочая и конструкторская документация",
      logo: "",
      link: {
        label: "Автоматизация комплексная. Рабочая и конструкторская документация",
        href: "./files/portfolio/3-АК.pdf",
      },
    },
    {
      title: "4 – АК",
      techStack: [
        "АК",
        "AutoCAD",
        "РД",
        "КД",
        "PDF",
        "Автоматизация комплексная",
      ],
      description:
        "Автоматизация комплексная. Рабочая и конструкторская документация",
      logo: "",
      link: {
        label: "Автоматизация комплексная. Рабочая и конструкторская документация",
        href: "./files/portfolio/4-АК.pdf",
      },
    },
    {
      title: "5 – АОВ",
      techStack: [
        "АОВ",
        "ePLAN",
        "FieldSys",
        "Electric P8",
        "РД",
        "PDF",
      ],
      description:
        "Автоматизация общеобменной и противодымной вентиляции. Рабочая документация",
      logo: "",
      link: {
        label: "Автоматизация общеобменной и противодымной вентиляции. Рабочая документация",
        href: "./files/portfolio/5-АОВ.pdf",
      },
    },
    {
      title: "6 – АСУД",
      techStack: [
        "АСУД",
        "ePLAN",
        "FieldSys",
        "Electric P8",
        "РД",
        "PDF",
      ],
      description:
        "Автоматическая система управления и диспетчеризации инженерных систем. Рабочая документация",
      logo: "",
      link: {
        label: "Автоматическая система управления и диспетчеризации инженерных систем. Рабочая документация",
        href: "./files/portfolio/6-АСУД.pdf",
      },
    },
    {
      title: "7 – АОВ",
      techStack: [
        "АОВ",
        "ePLAN",
        "FieldSys",
        "Electric P8",
        "РД",
        "PDF",
      ],
      description:
        "Автоматизация отопления, вентиляции и кондиционирования. Рабочая документация",
      logo: "",
      link: {
        label: "Автоматизация отопления, вентиляции и кондиционирования. Рабочая документация",
        href: "./files/portfolio/7-АОВ.pdf",
      },
    },
    {
      title: "8 – АОВ",
      techStack: [
        "АОВ",
        "ePLAN",
        "FieldSys",
        "Electric P8",
        "РД",
        "PDF",
      ],
      description:
        "Автоматизация отопления и вентиляции. Рабочая документация",
      logo: "",
      link: {
        label: "Автоматизация отопления и вентиляции. Рабочая документация",
        href: "./files/portfolio/8-АОВ.pdf",
      },
    },
    {
      title: "9 – КД-ШУП",
      techStack: [
        "ШУП",
        "ePLAN",
        "Pro Panel",
        "Electric P8",
        "КД",
        "PDF",
      ],
      description:
        "Конструкторская документация. Шкаф управления вентсистемой",
      logo: "",
      link: {
        label: "Конструкторская документация. Шкаф управления вентсистемой",
        href: "./files/portfolio/9-КД-ШУП.pdf",
      },
    },
    {
      title: "10 – КД-ШУ",
      techStack: [
        "ШУ",
        "ePLAN",
        "Pro Panel",
        "Electric P8",
        "КД",
        "PDF",
      ],
      description:
        "Конструкторская документация. Шкаф управления",
      logo: "",
      link: {
        label: "Конструкторская документация. Шкаф управления",
        href: "./files/portfolio/10-КД-ШУ.pdf",
      },
    },
    {
      title: "11 – КД-ШУН",
      techStack: [
        "ШУН",
        "ePLAN",
        "Pro Panel",
        "Electric P8",
        "КД",
        "PDF",
      ],
      description:
        "Конструкторская документация. Шкаф управления насосами",
      logo: "",
      link: {
        label: "Конструкторская документация. Шкаф управления насосамия",
        href: "./files/portfolio/11-КД-ШУН.pdf",
      },
    },
    {
      title: "12 – КД-ШУП",
      techStack: [
        "ШУП",
        "ePLAN",
        "Pro Panel",
        "Electric P8",
        "КД",
        "PDF",
      ],
      description:
        "Конструкторская документация. Шкаф управления вентсистемой",
      logo: "",
      link: {
        label: "Конструкторская документация. Шкаф управления вентсистемой",
        href: "./files/portfolio/12-КД-ШУП.pdf",
      },
    },
    {
      title: "13 – КД-ШУП",
      techStack: [
        "ШУП",
        "ePLAN",
        "Pro Panel",
        "Electric P8",
        "КД",
        "PDF",
      ],
      description:
        "Конструкторская документация. Шкаф управления вентсистемой",
      logo: "",
      link: {
        label: "Конструкторская документация. Шкаф управления вентсистемой",
        href: "./files/portfolio/13-КД-ШУП.pdf",
      },
    },
    {
      title: "14 – КД-ШУТП",
      techStack: [
        "ШУТП",
        "ePLAN",
        "Pro Panel",
        "Electric P8",
        "КД",
        "PDF",
      ],
      description:
        "Конструкторская документация. Шкаф управления тепловым пунктом",
      logo: "",
      link: {
        label: "Конструкторская документация. Шкаф управления тепловым пунктом",
        href: "./files/portfolio/14-КД-ШУТП.pdf",
      },
    },
    {
      title: "15 – КД-ШУВ",
      techStack: [
        "ШУВ",
        "ePLAN",
        "Pro Panel",
        "Electric P8",
        "КД",
        "PDF",
      ],
      description:
        "Конструкторская документация. Шкаф управления вытяжными вентиляторами",
      logo: "",
      link: {
        label: "Конструкторская документация. Шкаф управления вытяжными вентиляторами",
        href: "./files/portfolio/15-КД-ШУВ.pdf",
      },
    },
  ],
} as const;