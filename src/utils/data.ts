// export const hbsCode =
//   "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
//   "{{kids.length}} kids:</p>" +
//   "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
// <ul class="text-left">{{#contact.items}}<li>{{type}}: {{text}}</li>{{/contact.items}}</ul>
export const hbsCode = `
    <div class="max-w-[50%] h-full shadow-2xl py-5 flex flex-row">
      <aside class="flex flex-col items-center w-screen gap-1 py-6 bg-green-700">
      {{#with Profile as | profile |}}
        <section class="text-center flex flex-col items-center">
       
          <img src="{{profile.profileImageURL}}" class="rounded-full w-20 h-20 mb-4 bg-white"></img>

          <h1 class="text-lg text-center">{{profile.name}}</h1>
          <span class="text-sm">{{profile.profession}}</span>
        </section>
      {{/with}}
      {{#with Education as | education |}}
        <section class="text-center mt-20">
          <h1 class="text-lg">{{education.header}}</h1>
          <div>{{education.degree}}</div>
          <div class='block text-xs'>{{education.date}}</div>
        </section>
      {{/with}}
      {{#with Contact as | contact |}}
        <section class="text-center mt-20">
          <h1 class="text-lg">{{contact.header}}</h1>
          <ul class="text-left">
          <li>email: {{contact.email}}</li>
          <li>phone: {{contact.phone}}</li>
          <li>cite: {{contact.cite}}</li>
          </ul>
        </section>
      {{/with}}
      </aside>
      <main class="flex flex-col bg-white text-black py-6 px-8">
      {{#with EmploymentHistory as | proffesional |}}
        <section>
          <h1 class='text-2xl'>{{proffesional.header}}</h1>
          <hr class="my-2 h-0.5 border-t-0 bg-neutral-500 opacity-100 dark:opacity-50" />
          <p>{{proffesional.about}}</p>
        </section>
      {{/with}}
      {{#with KeySkills as | skills |}}
        <section class='mt-8'>
          <h1 class='text-2xl'>{{skills.header}}</h1>
          <hr class="my-2 h-0.5 border-t-0 bg-neutral-500 opacity-100 dark:opacity-50" />
          <p>{{skills.text}}</p>
        </section>
      {{/with}}
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
