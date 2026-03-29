export interface ExperienceEntry {
  title: string
  company: string
  period: string
  location: string
  bullets: string[]
  skills: string[]
  metrics?: { label: string; value: string }[]
}

export interface SkillCategory {
  name: string
  color: string
  skills: string[]
}

export interface Project {
  title: string
  description: string
  stack: string[]
  impact: string
  impactMetric?: string
  link?: string
  featured?: boolean
}

export interface Education {
  school: string
  degree: string
  field: string
  period: string
  gpa: string
}

export interface Publication {
  title: string
  publisher: string
  date: string
  link?: string
}

export interface Links {
  linkedin: string
  github: string
  medium: string
  email: string
}

export interface Bio {
  name: string
  title: string
  tagline: string
  about: string
  tags: string[]
}

export const experience: ExperienceEntry[] = [
  {
    title: 'Senior Data & Software Engineer I',
    company: 'Affinity Solutions',
    period: 'Sep 2025 – Present',
    location: 'United States',
    bullets: [
      'Designed and deployed a semantic AI model connected to real-world data, powering advanced chatbots that deliver actionable insights and dynamic visualizations while ensuring data privacy.',
      'Restructured data architecture to reduce query time for conversational AI from minutes to seconds, driving efficiency and scalability.',
      'Collaborated with large, cross-functional teams to expand system capabilities, adding new features, improving compatibility, and enhancing user experience.',
    ],
    skills: ['LLMs', 'Semantic Search', 'Python', 'Snowflake'],
    metrics: [
      { label: 'Query Time', value: 'Minutes → Seconds' },
    ],
  },
  {
    title: 'Data and Software Engineer II',
    company: 'Affinity Solutions',
    period: 'Feb 2023 – Aug 2025',
    location: 'United States',
    bullets: [
      'Contributed to the development of a measurement application, reducing client data turnaround time from 2 weeks to 15 minutes by improving data processing workflows.',
      'Built a POC for Open-Python enabling clients to run custom code on curated datasets within privacy constraints—leveraging AI agents to enforce data governance without exposing row-level data.',
      'Automated weekly client deliverables using Snowflake and Slack alerting, ensuring zero manual intervention and real-time status updates.',
      'Worked extensively with Snowflake Data Clean Rooms and AMC Cloud, collaborating with clients on audience insights, identity matching, modeling, and measurement solutions.',
      'Produced pre-recorded onboarding videos for Snowflake native apps to enhance client self-service and reduce support cycles.',
    ],
    skills: ['Snowflake', 'Apache Iceberg', 'Python', 'AI Agents', 'AMC Cloud'],
    metrics: [
      { label: 'Turnaround', value: '2 Weeks → 15 Min' },
    ],
  },
  {
    title: 'Machine Learning Engineer Intern, Computer Vision',
    company: 'Home Heroes',
    period: 'Aug 2022 – Dec 2022',
    location: 'Roseville, California',
    bullets: [
      'Designed a robust platform for ML application lifecycle management and optimizing ML models at scale.',
      'Created an automated monitoring system using Flask, Google Cloud Run, and Google Cloud Storage to analyze data in real time.',
      'Developed a deep learning model to detect and classify solar panel installations using PyTorch-YOLOv5, achieving 78% accuracy.',
      'Supported business decisions with model insights and targeted marketing campaigns.',
    ],
    skills: ['PyTorch', 'YOLOv5', 'Flask', 'Google Cloud Run', 'Computer Vision'],
    metrics: [
      { label: 'Model Accuracy', value: '78%' },
    ],
  },
  {
    title: 'Graduate Research Scientist',
    company: 'UTHealth Houston',
    period: 'May 2022 – Dec 2022',
    location: 'Texas, United States',
    bullets: [
      'Collected and preprocessed CTA brain images using image registration and the FreeSurfer library.',
      'Applied coordinate templates to normalize stroke image datasets as part of the data cleaning pipeline.',
      'Interpreted and analyzed imaging data using scientific and statistical techniques.',
      'Oversaw research staff on technical procedures and equipment operations.',
    ],
    skills: ['FreeSurfer', 'Medical Imaging', 'Python', 'Data Analysis'],
  },
  {
    title: 'Teaching Assistant, Intro to Deep Learning',
    company: 'California State University, Fresno',
    period: 'Dec 2018 – Jan 2020',
    location: 'Fresno, California',
    bullets: [
      'Covered topics from basic neural networks to CNNs, RNNs, NLP, GANs, and Transformers.',
      'Assisted with supervision of 60 students, providing guidance across coursework and programming projects.',
      'Used positive reinforcement techniques to engage students and promote higher-level thinking.',
      'Delivered clear, effective feedback to improve the quality and efficiency of student-written programs.',
    ],
    skills: ['C++', 'Deep Learning', 'PyTorch', 'NLP'],
  },
  {
    title: 'Event Manager',
    company: 'Fresno State — Dept. of Media, Communications & Journalism',
    period: 'Nov 2018 – Oct 2020',
    location: 'Fresno, California',
    bullets: [
      'Maintained and updated database of volunteers, events, and donors.',
      'Coordinated ticket sales and tracked attendee records.',
      'Planned event advertising including media outlets, graphics, and communications.',
      'Supported the marketing team with ideas and administrative coordination.',
    ],
    skills: ['Social Media', 'Event Management', 'Database Management'],
  },
]

export const skills: SkillCategory[] = [
  {
    name: 'Data Engineering',
    color: '#00d4ff',
    skills: ['Snowflake', 'Apache Iceberg', 'dbt', 'SQL', 'ETL/ELT', 'Data Clean Rooms', 'Apache Spark', 'Kafka', 'Hadoop', 'AWS Redshift', 'MySQL', 'MongoDB'],
  },
  {
    name: 'AI / ML',
    color: '#a855f7',
    skills: ['Python', 'LangChain', 'RAG', 'Semantic Search', 'AI Agents', 'PyTorch', 'TensorFlow', 'YOLOv5', 'LSTM', 'Computer Vision', 'NLP', 'OpenCV'],
  },
  {
    name: 'Cloud & Platforms',
    color: '#3fb950',
    skills: ['AWS', 'GCP', 'Kubernetes', 'Snowflake Clean Rooms', 'AMC Cloud', 'AWS Glue', 'Slack API', 'Flask', 'Streamlit', 'Tableau', 'JIRA'],
  },
]

export const projects: Project[] = [
  {
    title: 'Smart City Community Watch',
    description: 'Published research: end-to-end CV pipeline detecting illegal dumping in smart city camera feeds. Multi-object tracking with Deep SORT + OCR for license plate identification. Deployed on AWS.',
    stack: ['YOLOv5', 'PyTorch', 'Deep SORT', 'OCR', 'AWS EC2', 'Streamlit'],
    impact: '72% mAP · Published on MDPI',
    impactMetric: 'MDPI Published',
    link: 'https://www.mdpi.com/2624-6511/7/4/88',
    featured: true,
  },
  {
    title: 'Conversational AI Platform',
    description: 'Semantic AI model integrated with real financial institution data, powering chatbots that surface actionable insights and dynamic visualizations — all with built-in data privacy.',
    stack: ['Python', 'LangChain', 'Snowflake', 'LLMs'],
    impact: 'Production at Affinity Solutions',
    impactMetric: 'Live in Production',
  },
  {
    title: 'Client Data Pipeline Acceleration',
    description: 'Redesigned data processing workflows to slash client data turnaround time by 98% — from two weeks down to fifteen minutes.',
    stack: ['Snowflake', 'Python', 'SQL'],
    impact: '98% time reduction',
    impactMetric: '2 Weeks → 15 Min',
  },
  {
    title: 'Privacy-First Analytics Engine',
    description: 'Open-Python platform letting clients run custom code securely on curated datasets. AI agents enforce data governance at runtime — zero row-level data exposure.',
    stack: ['Python', 'AI Agents', 'Snowflake'],
    impact: 'Privacy-preserving self-service analytics',
    impactMetric: '0 Data Exposures',
  },
  {
    title: 'Illegal Dumping Action Detection',
    description: 'End-to-end CV pipeline for detecting illegal dumping in smart city camera feeds. Multi-object tracking with Deep SORT + OCR for license plate identification.',
    stack: ['YOLOv5', 'PyTorch', 'Deep SORT', 'OCR', 'AWS EC2', 'Streamlit'],
    impact: '54% mAP improvement over baseline',
    impactMetric: '+54% mAP',
    link: 'https://www.mdpi.com/2624-6511/7/4/88',
  },
  {
    title: 'Driver Drowsiness Detection',
    description: 'Real-time drowsiness detection using facial landmark extraction (eye ratio, mouth ratio, head tilt, blinks/min) and sequential deep learning models.',
    stack: ['Python', 'OpenCV', 'LSTM', 'GRU', 'KerasTuner'],
    impact: '18% accuracy improvement over baseline',
    impactMetric: '73% Accuracy',
  },
  {
    title: 'Real-Time Hospital Bed Availability',
    description: 'Live Kibana dashboard tracking hospital bed availability during the pandemic, ingesting Twitter data in real time via Amazon Kinesis for immediate public health visibility.',
    stack: ['Amazon Kinesis', 'Kibana', 'Python', 'Twitter API', 'AWS'],
    impact: 'Real-time pandemic resource monitoring',
    impactMetric: 'Real-Time',
  },
]

export const education: Education[] = [
  {
    school: 'San José State University',
    degree: 'Master of Science',
    field: 'Data Science',
    period: 'Jan 2021 – Dec 2022',
    gpa: '3.6',
  },
  {
    school: 'California State University, Fresno',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    period: 'Jan 2017 – Dec 2020',
    gpa: '3.6',
  },
]

export const publications: Publication[] = [
  {
    title: 'Smart City Community Watch — Camera-Based Community Watch for Traffic and Illegal Dumping',
    publisher: 'MDPI',
    date: 'Aug 6, 2024',
    link: 'https://www.mdpi.com/2624-6511/7/4/88',
  },
]

export const links: Links = {
  linkedin: 'https://www.linkedin.com/in/vraj-mistry/',
  github: 'https://github.com/vraj1231',
  medium: 'https://medium.com/@mistryvraj3198',
  email: 'mistryvraj3198@gmail.com',
}

export const bio: Bio = {
  name: 'Vraj Mistry',
  title: 'Senior Data & AI Engineer',
  tagline: 'Building at the intersection of LLMs and data infrastructure.',
  about: "I'm a Senior Data & Software Engineer at Affinity Solutions, where I design AI-powered data systems that turn raw data into actionable intelligence. I specialize in large language models, data pipelines, and cloud-native architectures — building things that are fast, private, and useful.",
  tags: ['Builder', 'Data-Driven', 'AI-First'],
}
