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
    ],
    skills: ['Snowflake', 'Apache Iceberg', 'Python', 'AI Agents', 'AMC Cloud'],
    metrics: [
      { label: 'Turnaround', value: '2 Weeks → 15 Min' },
    ],
  },
]

export const skills: SkillCategory[] = [
  {
    name: 'Data Engineering',
    color: '#00d4ff',
    skills: ['Snowflake', 'Apache Iceberg', 'dbt', 'SQL', 'ETL/ELT'],
  },
  {
    name: 'AI / LLM',
    color: '#a855f7',
    skills: ['Python', 'LangChain', 'RAG', 'Semantic Search', 'AI Agents'],
  },
  {
    name: 'Cloud & Platforms',
    color: '#3fb950',
    skills: ['AWS', 'Snowflake Clean Rooms', 'AMC Cloud', 'Slack API'],
  },
]

export const projects: Project[] = [
  {
    title: 'Semantic AI Chatbot',
    description: 'LLM-powered chatbot connected to real-world data, delivering actionable insights and dynamic visualizations with full data privacy.',
    stack: ['Python', 'LangChain', 'Snowflake', 'LLMs'],
    impact: 'Production at Affinity Solutions',
    impactMetric: 'Live in Production',
  },
  {
    title: 'Measurement App Overhaul',
    description: 'Redesigned data processing workflows to slash client data turnaround time by 98%, from two weeks to fifteen minutes.',
    stack: ['Snowflake', 'Python', 'SQL'],
    impact: '98% time reduction',
    impactMetric: '2 Weeks → 15 Min',
  },
  {
    title: 'Open-Python POC',
    description: 'Privacy-preserving analytics platform letting clients run custom Python on curated datasets. AI agents enforce data governance without exposing row-level data.',
    stack: ['Python', 'AI Agents', 'Snowflake'],
    impact: 'Privacy-preserving self-service analytics',
    impactMetric: '0 Data Exposures',
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
