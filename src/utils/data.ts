import { InfoComponent, Page } from "./types";

export const dataInfo: InfoComponent[] = [
  {
    header: "Profile",
    type: "Profile",
    name: "Kevin Coto Carrera",
    profession: "Senior Developer",
    profileImageURL:
      "https://media.licdn.com/dms/image/C4E03AQGVTyjmr0m9EQ/profile-displayphoto-shrink_800_800/0/1662505742816?e=2147483647&v=beta&t=bmTOmjD9wT8PEPfaypfBidbLqdgHOY-RtrzW8CZX9TI",
    display: true,
    position: "left",
    about:
      "Recent college graduate with experience in various areas of software engineering, including infrastructure and data analytics. A fast learner who thrives on generating innovative ideas, trouble-shooting and problem-solving, and working with object-oriented programming languages including Python and Java. ",
  },
  {
    header: "Contact",
    type: "Contact",
    position: "right",
    display: true,
    phone: "+61 01 012121",
    email: "eliot@example.com",
    cite: "www.eliotdev.com",
    items: [
      {
        text: "+61 01 012121",
      },
      {
        text: "eliot@example.com",
      },
      {
        text: "www.eliotdev.com",
      },
    ],
  },
  {
    header: "Proffesional Summary",
    type: "Employment",
    position: "right",
    display: true,
    about:
      "Recent college graduate with experience in various areas of software engineering, including infrastructure and data analytics. A fast learner who thrives on generating innovative ideas, trouble-shooting and problem-solving, and working with object-oriented programming languages including Python and Java. ",

    items: [
      {
        position: "Software Engineer - Bank of E-Corp",
        date: "Mar 2017 - Dec 2019",
        description:
          "Bank of E-Corp is a Banking Financial Institution in the US.\nAs a Software Engineer, I work on their banking platform in an Agile environment.\n My daily responsibilities include: ",
        responsibilities:
          "• Participating in daily stand up meetings, led by our Scrum Master\n • Utilizing the MEAN stack to enhance and maintain our banking platform \n• Conducting code peer reviews with other members in my team\n• Participating in product demos\n• Documenting all code changes",
      },
      {
        position: "Junior Software Developer - Steel Mountain",
        date: "Mar 2015 - Dec 2016",
        description:
          "Bank of E Network is a Banking Financial Institution in the US.\nAs a Software Developer, I work on their banking platform in an Agile environment.\n My daily responsibilities include: ",
        responsibilities:
          "• Built RESTful API that served data to the JavaScript front-end based on \n   dynamicially chosen user inputs that handled over 100,000 concurrent users.\n • Built international tool using NodeJS and Pupeteer.js to automate QA. \n• Conducting code peer reviews with other members in my team\n• Documenting all code changes ",
      },
    ],
  },
  {
    header: "Education",
    type: "Education",
    degree: "Software Engineering - University of Sydney",
    date: "Mar 2017 - Dec 2019",
    position: "right",
    display: true,
    items: [
      {
        degree: "Software Engineering - University of Sydney",
        date: "Mar 2017 - Dec 2019",
      },
    ],
  },
  {
    header: "Key Skills",
    type: "KeySkills",
    display: true,
    position: "right",
    text: "• Knowledge of basic coding languages including C++, HTML5, and JavaScript.\n• Basic knowledge of  SQL, NoSQL databases\n• Knowledgable on Node.js, Spring, Hibernate\n• Extensive Linux/Unix experience\n• Software testing (Jest, Chai, Mocha)\n• CI/CD Basics ",
  },
];

export const info: Page[] = [
  {
    id: 1,
    elements: dataInfo,
  },
];
