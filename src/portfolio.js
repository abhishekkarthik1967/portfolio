/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abhishek",
  title: "Hi all, I'm Abhishek Karthik Manikandan",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with Angular / JavaScript / Reactjs, backend with Nodejs / Java SpringBoot and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1VpTUG3f0_5If2FWBa1k_p7IjLTdzEHVLWkdqYDYNEPw/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/abhishek1967",
  linkedin: "https://www.linkedin.com/in//abhishek-karthik-manikandan-401273a2/",
  gmail: "karthik95abi@gmail.com",
  facebook: "https://www.facebook.com/abhishek.karthik.90/",
  stackoverflow: "https://stackoverflow.com/users/22453256/abhishek-karthik",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Dalhousie University",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Dalhousie_University_Seal.svg/1200px-Dalhousie_University_Seal.svg.png",
      subHeader: "Master in Applied Computer Science",
      duration: "September 2021 - Dec 2022",
    },
    {
      schoolName: "Anna University",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Anna_University_Logo.svg/1200px-Anna_University_Logo.svg.png",
      subHeader: "Bachelor of Electronics and Communication Engineering",
      duration: "Aug 2013 - May 2017",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full stack developer",
      company: "Royal Bank Of Canada",
      companylogo: "https://pbs.twimg.com/profile_images/1634225386585194501/yb-5bbs9_400x400.jpg",
      date: "Sep 2022 – Present",
      desc: "Launched RBC translate, Cerbi and Temboo social sentiment tracker by gaining expertise in React, Angular, Python, OCP4, .Net, NodeJs, Web security, fixing production even after failures with the Team lead and grew office revenue by 200% in the first nine months (representing 20% of company revenue). Led redesign of mobile app and website.",
      descBullets: [
        "Analyzed data from 10000 monthly active users and used outputs to guide  product strategies; increased average app engagement time by 2x and 30% decrease in drop off rate.",
        "Drove redevelopment of internal tracking system in use by 100 employees, resulting in 20+ new features, reduction of 20% in save/load time and 15% operation time. Overhauled the obsolete legacy source code of two production applications, resulting in increased usability and reduced run time performance by 50%."
      ]
    },
    {
      role: "Software Engineer (Part-time)",
      company: "Ayogo Healthcare",
      companylogo: "https://media.licdn.com/dms/image/C560BAQFuIyGtJRm79g/company-logo_200_200/0/1649091867457?e=1701302400&v=beta&t=rBj8vqzKUd1tmomgnMQbS1Rm3ZoBzayVg5SB9-YunN0",
      date: "May 2022 – Aug 2022",
      desc: "As an early engineer on the development team of the startup, developed the SaaS product along with the team as it grew to 25 employees. Led redesign of mobile app and website by learning Vue.js, Jest, GraphQL, ECS, SQS, RDS, S3, DynamoDB, Cloudwatch, Lambda, Kinesis, NodeJS, EBS, EC2, Cloudformation and Serverless framework.",
      descBullets: [
        "Spearheaded a major pricing restructure by  introducing cloud infrastructure and redesigning the architecture to microservices which increased average sale 35% and margin 12%.",
        "Identified steps to reduce return rates by 10% resulting in an eventual $75k cost savings.",
        "Also helped in developing an analytics module with Databricks that facilitated in extracting meaningful insights from user state data using Spark SQL and AWS logs."
      ]
    },
    {
      role: "Development Engineer 2",
      company: "Comcast India ",
      companylogo: "https://pbs.twimg.com/profile_images/1604949348999217153/hdZmq635_400x400.jpg",
      date: "Jan 2021 – May 2018",
      desc: "Liaised with high level executives, improved an ecommerce platform website with the help of UI UX designers to sell their telecom products and plans to end users in the USA market.",
      descBullets: [
        "Analyzed data from 25000 monthly active users using ELK Stack and  AppDynamics to provide meaningful insights on product refinement.",
        "Identified steps to introduce microservices and micro-frontends architecture using Angular, NodeJS, Nginx, Swagger docs, Jenkins, Docker, MongoDB."
      ]
    },
    {
      role: "Programmer Analyst",
      company: "Sanmina",
      companylogo: "https://pbs.twimg.com/profile_images/996500516145434629/hDxT-bol_400x400.jpg",
      date: "Jan 2017 – Sep 2020",
      desc: "Automated smooth onboarding of employees by developing a marketplace for new joiners leveraging Angular, NodeJS, Java MVC and GCP - App Engine, CloudRun, Cloud SQL, Cloud build, Pub/Sub . Contributed towards migration of applications from Angular 1.x to Angular 8.",
      descBullets: [
        "Created reusable libraries and components and published to a private npm registry. Improved the scalability and performance, productivity  by 50% converting monolith architecture to microservices using Angular and NodeJS.",
        "Used Pentaho, Camunda BPM and Oracle, PostgreSQL for application workflows for internal applications."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (902)-412-8229",
  email_address: "karthik95abi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
