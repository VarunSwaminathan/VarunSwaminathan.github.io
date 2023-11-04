/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Varun Ravi Swaminathan",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Varun Ravi Swaminathan Portfolio",
    type: "website",
    url: "http://varunrswaminathan.com/",
  },
};

//Home Page
const greeting = {
  title: "Varun Ravi Swaminathan",
  logo_name: "VarunRaviSwaminathan",
  nickname: "thomas_shelby",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1xazct9Wys9khaiY2vYDQtgVHUmEM79r4/view?usp=share_link",
  // portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/VarunSwaminathan",
};

const socialMediaLinks = [
  // /* Your Social Media Link */
  // github: "https://github.com/VarunSwaminathan",
  // linkedin: "www.linkedin.com/in/varunrswaminathan",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/VarunSwaminathan",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "www.linkedin.com/in/varunrswaminathan",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  
  {
    name: "Gmail",
    link: "varunrswaminathan@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/varun_swaminathan57/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
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
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
         
        {
          skillName: "Natural Language Processing",
          fontAwesomeClassname: "simple-icon:NLP",
        },
        {
          skillName: "Computer Vision and Image Processing",
          fontAwesomeClassname: "simple-icon:CVIP",
        },
        {
          skillName: "Reinforcement Learning",
          fontAwesomeClassname: "simple-icon:RL"
        },
        {
          skillName: "Big Data Analytics and Data Intensive Computing",
          fontAwesomeClassname: "simple-icon:DIC"
        }
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
          skillName: "C",
          fontAwesomeClassname: "simple-icons:C#",
          style: {
            color: "#3776AB"
          }
        },

        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:C++",
          style: {
            color: "#D00000"
          }
        },

        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icon:SQL",
          style: {
            color: "#3776AB"
          }
        }

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
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28",
        //   },
        // },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#47A248",
        //   },
        // },
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
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page

const degrees = {
  degrees: [
    {
      title: "SRM University, Kattankulathur",
      subtitle: "B.Tech. in Computer Science and Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "SRMU Ktr",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Neuro Fuzzy, Genetic programming and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college.",
      ],
      website_link: "https://www.srmist.edu.in/",
    },
    {
      title: "University at Buffalo, SUNY",
      subtitle: "M.S. in Computer Science",
      logo_path: "iu_logo.png",
      alt_name: "University at Buffalo, SUNY",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Machine Learning, Computer Vision, Pattern Recognition, Data Intensive Computing, etc",
        "⚡ Apart from this, I worked on a independent study on ",
        "⚡ During my time at university, I was also played cricket and football(soccer) for different clubs",
      ],
      website_link: "https://www.buffalo.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },

    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   // certificate_link:
    //   //   "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
 
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Data Analytics",
      subtitle: "- Google",
      logo_path: "coursera_logo.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Financial Markets",
      subtitle: "Robert Shiller - Yale Universiy",
      logo_path: "coursera_logo.png",
      // certificate_link:
      //   "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "FNRC",
      color_code: "#4285F499",
    },
    {
      title: "Generative AI with Large Language Models",
      subtitle: "- DeepLearning.AI",
      logo_path: "coursera_logo.png",
      // certificate_link:
      //   "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "GAILLM",
      color_code: "#FFBB0099",
    },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internships",
  description:
    "I have worked with many evolving startups as AI and Data Science Developer. I love tech and I am very passionate about evolving tech products.",
  header_image_path: "experience.svg",
  sections: [
    // {
    //   title: "Work",
    //   work: true,
    //   experiences: [
    //     {
    //       title: "Associate AI Engineer",
    //       company: "Legato Health Technology",
    //       company_url: "https://legatohealthtech.com/",
    //       logo_path: "legato_logo.png",
    //       duration: "June 2020 - Aug 2021",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
    //       color: "#0879bf",
    //     },
    //     {
    //       title: "Android and ML Developer",
    //       company: "Muffito Incorporation",
    //       company_url: "https://www.linkedin.com/company/muffito-inc/about/",
    //       logo_path: "muffito_logo.png",
    //       duration: "May 2018 - Oct 2018",
    //       location: "Pune, Maharashtra",
    //       description:
    //         "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
    //       color: "#9b1578",
    //     },
    //     {
    //       title: "Android Developer",
    //       company: "FreeCopy Pvt. Ltd.",
    //       company_url: "https://www.linkedin.com/company/freecopy/about/",
    //       logo_path: "freecopy_logo.png",
    //       duration: "Nov 2017 - Dec 2017",
    //       location: "Ahmedabad, Gujarat",
    //       description:
    //         "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
    //       color: "#fc1f20",
    //     },
    //   ],
    // },
    {
      title: "Internships",
      experiences: [
        {
          title: "Artificial Intelligence Intern",
          company: "Sustainable Living Lab",
          // company_url: "https://www.tiktok.com/en/",
          // logo_path: "tiktok_logo.png",
          duration: "Jan 2022 - May 2022",
          location: "Chennai, India"
          description:
            "Collaborated with senior engineers to understand project requirements and develop innovative machine learning models. Devised 5+ scalable classifiers, leading to a 20% increase in model efficiency. Engaged in data preprocessing, model optimization, and evaluation to drive development of a novel product for Intel. Adapted standard machine learning methods for optimal performance in modern parallel environments, including assigned clusters, multicore SMP, and GPU.",
          color: "#000000",
        },
        {
          title: "Artificial Intelligence Intern",
          company: "Genebloc.ai",
          // company_url: "https://www.delhivery.com/",
          // logo_path: "delhivery_logo.png",
          duration: "June 2021 - October 2021",
          location: "Chennai, India",
          description:
            " Created and optimized 4 ML algorithms for Automated Genomic Sequence Analysis project, enhancing accuracy by 3%. Contributed to development of algorithms to predict genomic data patterns and insights.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Sparks Foundation",
          // company_url:
          //   "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          // logo_path: "intel_logo.jpg",
          duration: "March 2020 - May 2020",
          location: "Work From Home",
          description:
            "Designed and deployed predictive models using advanced statistical techniques. Collaborated closely with product team to integrate data-driven solutions seamlessly. Assisted in data preprocessing and feature engineering achieving a 20% boost in business insights.",
          color: "#0071C5",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. The following section highlights a series of pivotal research projects and hands-on experiences that I have undertaken throughout my academic and professional journey. These projects underscore my proficiency in developing cutting-edge machine learning and deep learning solutions, translating complex algorithms into practical applications, and steering innovations in the realms of genomics, damage assessment, and robotics. Each endeavor showcases a commitment to technical excellence, collaborative problem-solving, and the continuous pursuit of pushing the boundaries in artificial intelligence and data science.",
  avatar_image_path: "projects_image.svg",
};

const project = {
  data: [
    {
      id: "KKJBYVUbibais",
      title: "Chatbot System",
      description: "Developed an advanced chatbot utilizing GRU-based Deep Learning architecture. Showcased proficiency in NLP, machine learning, and model evaluation. Devised a seamless and engaging conversational experience, highlighting ability to translate complex algorithms into practical AI applications. Reduced user query resolution time by 25% through efficient algorithm implementations.",
      url: 
      "https://github.com/VarunSwaminathan/Chatbot-using-GRU",
    },
    {
      id: "hjcuscvqaoao",
      title: "Deep Learning for Damage Assessment using Remote Sensing Data",
      description: "Designed and implemented a Convolutional Neural Network (CNN) for post-natural disaster damage assessment, leveraging remote sensing data, achieving a model accuracy of 95.68%. Worked on distributed training and GPU performance optimization for efficient model deployment. Streamlined deployment processes, reducing resource usage by 20%.",
      url: "https://github.com/VarunSwaminathan/Deep-Learning-for-Damage-Assessment-using-Remote-Sensing-Data"
    },
    {
      id: "NAIIBYbilsbcosaa",
      title: "Glove based Exercise Robot",
      description: "pearheaded a team to design a robot translates braille characters from sensory input into hand movements. Achieved an implementation accuracy of 94.3%",

    },
    {
      id: "isdbcsiqibcaiHUYV",
      title: "Brain Hemorrhage Detection",
      description: "This project centered around the development and deployment of a Convolutional Neural Network (CNN) to accurately detect and classify brain hemorrhages from medical imaging data. The designed CNN not only showcased a high accuracy rate but also offered rapid processing capabilities, promising significant implications for timely and precise medical interventions in neurology. This project was later deployed in a cancer clinic in Chennai", 
      url: "https://github.com/VarunSwaminathan/Brain-Hemorrhage-Detection-#brain-hemorrhage-detection-"
    },
    {
      id: "Hauygkudsdahc",
      title: "Stock Price Prediction",
      description: "This project delved into the intricate realm of financial markets, aiming to forecast stock price movements using advanced machine learning techniques. The insights drawn from this model offer traders and investors a data-driven edge, aiding in informed decision-making and potential risk mitigation in the volatile landscape of stock trading."
    },
    {
      id:"other",
      title: "Other Projects",
      description: "Click on the link to assess my other projects",
      url: "https://github.com/VarunSwaminathan"
    },
  ],
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
      name: "Machine learning-based Approach to Predict Single Nucleotide Polymorphism and Drug Resistance in Mycobacterium Tuberculosis from Time Series Genome Analysis",
      // createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in IEEE Explorer ",
      // url:
      //   "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
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
    profile_image_path: ".png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "https://blogs.ashutoshhathidara.com/",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle:
      "51 Merrimac, Buffalo",
    locality: "Buffalo",
    country: "United States",
    region: "New York",
    postalCode: "14214",
    // streetAddress: "Ambavadi vas",
    // avatar_image_path: "address_image.svg",
    // location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
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
  project,
  publicationsHeader,
  publications,
  contactPageData,
};
