// export const hbsCode =
//   "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
//   "{{kids.length}} kids:</p>" +
//   "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
// <ul class="text-left">{{#contact.items}}<li>{{type}}: {{text}}</li>{{/contact.items}}</ul>
export const hbsCode = `
    <div class="w-[595px] min-h-[600px] max-h-[842px] shadow-3xl my-5 mr-5 -px-10 -py-10 bg-white page flex">
      <aside class="box flex flex-col items-center gap-1 px-2 py-6 bg-green-700 text-white basis-2/6">
        <section class="text-center flex flex-col items-center">
        {{#with profile as | profile |}}
          <img src="{{profile.profileImageURL}}" class="rounded-full border-4 border-white w-20 h-20 mb-4 bg-white"></img>
          <h1 class="text-lg text-center">{{profile.name}}</h1>
          <span class="text-sm">{{profile.profession}}</span>
          {{/with}}
        </section>
        <section class="text-center mt-20">
        {{#with education as | education |}}
          <h1 class="text-lg">{{education.header}}</h1>
          <div>{{education.degree}}</div>
          <div class='block text-xs'>{{education.date}}</div>
          {{/with}}
        </section>
        <section class="text-center mt-20">
        {{#with contact as | contact |}}
          <h1 class="text-lg">{{contact.header}}</h1>
          <ul class="text-left">
          <li>email: {{contact.email}}</li>
          <li>phone: {{contact.phone}}</li>
          <li>cite: {{contact.cite}}</li>
          </ul>
          {{/with}}
        </section>
      </aside>
      <main class="box flex flex-col bg-white text-black py-6 px-8 basis-4/6">
        <section>
        {{#with employmentHistory as | proffesional |}}
          <h1 class='text-2xl'>{{proffesional.header}}</h1>
          <hr class="my-2 h-0.5 border-t-0 bg-neutral-500 opacity-100 dark:opacity-50" />
          <p>{{proffesional.about}}</p>
          {{/with}}
        </section>
        <section class='mt-8'>
        {{#with keySkills as | skills |}}
          <h1 class='text-2xl'>{{skills.header}}</h1>
          <hr class="my-2 h-0.5 border-t-0 bg-neutral-500 opacity-100 dark:opacity-50" />
          <p>{{skills.text}}</p>
          {{/with}}
        </section>
      </main>
    </div>
    `;

export const dataInfo = {
  profile: {
    name: "Kevin Coto Carrera",
    type: "Profile",
    profession: "Senior Developer",
    profileImageURL:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp",
    display: true,
    about:
      "Recent college graduate with experience in various areas of software engineering, including infrastructure and data analytics. A fast learner who thrives on generating innovative ideas, trouble-shooting and problem-solving, and working with object-oriented programming languages including Python and Java. ",
  },
  education: {
    header: "Education",
    type: "Education",
    degree: "Software Engineering - University of Sydney",
    date: "Mar 2017 - Dec 2019",
    display: true,
  },
  keySkills: {
    header: "Key Skills",
    type: "KeySkills",
    display: true,
    text: "• Knowledge of basic coding languages including C++, HTML5, and JavaScript.\n• Basic knowledge of  SQL, NoSQL databases\n• Knowledgable on Node.js, Spring, Hibernate\n• Extensive Linux/Unix experience\n• Software testing (Jest, Chai, Mocha)\n• CI/CD Basics ",
  },
  employmentHistory: {
    header: "Proffesional Summary",
    type: "Employment",
    display: true,
    about:
      "Recent college graduate with experience in various areas of software engineering, including infrastructure and data analytics. A fast learner who thrives on generating innovative ideas, trouble-shooting and problem-solving, and working with object-oriented programming languages including Python and Java. ",
  },
  contact: {
    header: "Contact",
    type: "Contact",
    display: true,
    phone: "+61 01 012121",
    email: "eliot@example.com",
    cite: "www.eliotdev.com",
  },
};
