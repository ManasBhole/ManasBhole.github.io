/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Manas Bhole's Portfolio",
  description:
    "I am a driven individual who thrives on working on end-to-end products that develop reliable and adaptable social and technical systems to make an impact.",
  og: {
    title: "Manas Bhole Portfolio",
    type: "website",
    url: "http://manasbhole.com/",
  },
};

//Home Page
const greeting = {
  title: "Manas Bhole",
  logo_name: "Manas Bhole",
  nickname: "Hey Techies",
  subTitle:
    "I am a driven individual who thrives on working on end-to-end products that develop reliable and adaptable social and technical systems to make an impact.",
  resumeLink:
    "https://drive.google.com/file/d/1OKeALzwL2cg6C2HrNGuGbzeqLvHhMFjf/view?usp=share_link",
  portfolio_repository: "https://github.com/ManasBhole",
  githubProfile: "https://github.com/ManasBhole",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/ManasBhole",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/manas-bhole-920417192/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:manasbhole2000@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/_manasb08/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Developer, Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Full stack developers are the architects of the digital world, building strong foundations and designing systems that can withstand the test of time.",
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/manasbhole2000/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/manasbhole2000",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Ramrao Adik Institute of Technology",
      subtitle: "BE in Information Technology",
      logo_path: "umumbai.png",
      alt_name: "RAIT",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "http://rait.ac.in",
    },
    {
      title: "Syracuse University",
      subtitle: "M.S. in Computer Science",
      logo_path: "SULOGO.png",
      alt_name: "Syracuse University",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ I have worked on creating new algorithms in Graph ML and Network Science. Also having good grasp over algorithms and programming concepts.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.syracuse.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Academy Cloud Foundations",
      subtitle: "- AWS Academy Graduate",
      logo_path: "aws.png",
      certificate_link:
        "https://www.credly.com/badges/4eaee706-4b3f-4448-80ef-05d06bdd8720?source=linked_in_profile",
      alt_name: "Amazon",
      color_code: "white",
    },
    {
      title: "What is Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/YB24EQ3SV3KS",
      alt_name: "IBM",
      color_code: "#white",
    },
    {
      title: "Python Data Structures",
      subtitle: "- Charles Severance",
      logo_path: "umich.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/M3267QPLDAND",
      alt_name: "Python Data Structure",
      color_code: "#00000099",
    },
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/G5LJG9QTW8PY",
      alt_name: "Stanford University",
      color_code: "#0C9D5899",
    },

    {
      title: "JPMorgan Chase & Co.",
      subtitle: "- JPMorgan Chase & Co.",
      logo_path: "jpmorgan.jpeg",
      certificate_link:
        "https://insidesherpa.s3.amazonaws.com/completion-certificates/JP%20Morgan/R5iK7HMxJGBgaSbvk_JPMorgan%20Chase_cXcwAdQ9MJttAn3Kg_completion_certificate.pdf",
      alt_name: "JPMorgan Chase & Co.",
      color_code: "#D83B0199",
    },

    {
      title: "Databases and SQL for Data Science with Python",
      subtitle: "- Rav Ahuja",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/9WGEQDHUKRB5",
      alt_name: "IBM",
      color_code: "white",
    },
    {
      title: "Exploratory Data Analysis",
      subtitle: "- ANZ",
      logo_path: "anz.jpeg",
      certificate_link:
        "https://insidesherpa.s3.amazonaws.com/completion-certificates/ANZ/ZLJCsrpkHo9pZBJNY_ANZ_cXcwAdQ9MJttAn3Kg_completion_certificate.pdf",
      alt_name: "ANZ",
      color_code: "#00000099",
    },
    {
      title: "Virtual Internship",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.theforage.com/module-badges/cXcwAdQ9MJttAn3Kg/Ne4ZdX2YjJCMWQHAt/7ZdGbzhzJXbdMnfmS/Engineering%3A%20Undergraduate%20%26%20Masters%20Virtual%20Internship%20Platform/Manas",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Introduction to Networks",
      subtitle: "- Cisco",
      logo_path: "cisco.jpeg",
      certificate_link:
        "https://www.credly.com/badges/65e98361-2ff2-4c4e-bd77-3cbfc1173ce3?source=linked_in_profile",
      alt_name: "Cisco",
      color_code: "#4285F499",
    },
    {
      title: "Introduction to CyberSecurity",
      subtitle: "- Cisco",
      logo_path: "cisco.jpeg",
      certificate_link:
        "https://www.credly.com/earner/earned/badge/9ee0e63f-9a7f-401a-9d5c-3b5d9f7de31a",
      alt_name: "Cisco",
      color_code: "#FFBB0099",
    },
    {
      title: "Cybersecurity Essentials",
      subtitle: "- Cisco",
      logo_path: "cisco.jpeg",
      certificate_link:
        "https://www.credly.com/earner/earned/badge/d2af2835-ecf3-499b-a3e4-0ed66484df1a",
      alt_name: "Cisco",
      color_code: "#4285F499",
    },
    {
      title: "Introduction to Packet Tracer",
      subtitle: "- Cisco",
      logo_path: "cisco.jpeg",
      certificate_link:
        "https://www.credly.com/earner/earned/badge/d2af2835-ecf3-499b-a3e4-0ed66484df1a",
      alt_name: "Cisco",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Developer Intern",
          company: "Metis Consulting Group",
          company_url: "https://www.metisconsultinggroup.com/",
          logo_path: "metis.png",
          duration: "Dec 2022 - Present",
          location: "New York, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Getting into AWS system of the company and solving the root causes of bugs. Improving the frontend website and user experience as well.",
          color: "#000000",
        },
        {
          title: "Data Analyst And Administrator Intern",
          company: "Bharat Gears Pvt. Ltd.",
          company_url: "https://www.bharatgears.com/",
          logo_path: "bg.jpeg",
          duration: "May 2021 - Nov 2021",
          location: "Mumbai, India",
          description:
            "Managed database security for inventory and customer payments of company. Sustained data sanity by enrichingproduct information entered by numerous merchants hence revising efficiency by 65 %. Constructed real time API calling feature in web application where one can view products along with prices associated withit and escalated optimization upto 75 %. Controlled meetings between team and project manager to ensure timely delivery of project.",
          color: "#000000",
        },
        {
          title: "Web Developer Intern",
          company: "Zirconia Refratech Pvt. Ltd.",
          company_url: "http://zirconiarefratech.com/",
          logo_path: "zirconia.jpeg",
          duration: "Oct 2020 - May 2021",
          location: "Mumbai, India",
          description:
            "Formulated ideas to create and re-engineer e-commerce website of company. Supervised company's website security and enhancedit by more 55 % including debugging and continued traffic growth. Enhanced latency speed by 80 % by designing REST/HTTP APIs, including JSON data formats and API versioning strategy and deployed website for firm by leveraging MERN stack. Researched on Search Engine Optimization for growth of website and acquired 40 % boost in browser history.",
          color: "#ee3c26",
        },
        {
          title: "Application Developer Intern",
          company: "Eduvance",
          company_url: "https://www.eduvance.in/",
          logo_path: "eduvance.png",
          duration: "Apr 2020 - Oct 2020",
          location: "Mumbai, India",
          description:
            "Created 3D model design on mobile application by operating Blender along with advanced tools for 3D designing. Revamped application models by 60 % modern. Directed 3D animation using Blender, resulting in developing Augmented reality application on EnablAR platform. Tested the Augmented Reality application on more than 10 android smartphones.",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Plagiarism Detection Model Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on plagiarism detection published in IEEE ",
      url:
        "https://drive.google.com/file/d/1sSrkT7nAVQfQMchp1vzG8k0LGja-INvO/view?usp=share_link",
    },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "coder.webp",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blog",
    subtitle: "Blog on Wasserstein Distance",
    link:
      "https://www.linkedin.com/pulse/unleashing-potential-wasserstein-distance-game-changer-manas-bhole/?trackingId=b4qPfbXPQvyqD46x4BtiWA%3D%3D",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "212, Bassett Street, Syracuse, New York, 13210",
    //avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/212+Bassett+St,+Syracuse,+NY+13210/@43.0437041,-76.121989,3a,75y,269.11h,90t/data=!3m6!1e1!3m4!1sfPLIgGQfVx7yTueHvDIh5w!2e0!7i16384!8i8192!4m5!3m4!1s0x89d9f30dd8b34639:0x172249be21e252e2!8m2!3d43.0437008!4d-76.1222593",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
