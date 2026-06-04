export interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
  achievements: string[]
  technologies: string[]
  impact: {
    metric: string
    value: string
  }[]
}

export interface Project {
  id: string
  title: string
  description: string
  category: string
  technologies: string[]
  results: {
    metric: string
    value: string
  }[]
  details: string[]
  status?: string
  url?: string
}

export interface Skill {
  category: string
  items: string[]
}

export interface Certification {
  id: string
  title: string
  issuer: string
  year: string
  status?: 'Completed' | 'In Progress'
}

export interface ServiceArea {
  title: string
  outcome: string
  useCases: string[]
  tools: string[]
}

export interface EducationItem {
  title: string
  institution: string
  period: string
  status?: string
}

export interface Testimonial {
  id: number
  quote: string
  author: string
  company: string
  rating: number
  project: string
}

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/mohamed-ghareb/',
  github: 'https://github.com/ayman-stat',
  upwork: 'https://www.upwork.com/freelancers/~014329e93fb9620b00',
  email: 'mohammed.ayman.stat@gmail.com',
  phone: '+201060060292',
  whatsapp: 'https://wa.me/201060060292?text=Freelance%20or%20data%20science%20opportunity',
}

export const hero = {
  name: 'Mohamed Ayman',
  roles: ['Senior Data Scientist', 'Lead Analytics Professional', 'ML Engineering & BI'],
  tagline: 'Data science, BI, and production-minded ML for decisions that survive scrutiny.',
  bio:
    'I help teams turn messy business questions into reliable analytics products: predictive models, executive dashboards, automated reporting, risk analysis, and practical AI workflows. My experience spans banking, telecom, healthcare, sports, consulting, and global freelance analytics.',
  image: '/logo.jpg',
  cta: {
    primary: { text: 'View Use Cases', href: '#projects' },
    secondary: { text: 'View CV', href: '#cv' },
    connect: { text: 'Contact Me', href: 'mailto:mohammed.ayman.stat@gmail.com' },
  },
}

export const proofStats = [
  { label: 'Years in data and analytics', value: '5+', note: 'Banking, telecom, healthcare, sports, freelance' },
  { label: 'Upwork Job Success', value: '100%', note: 'Public Upwork profile' },
  { label: 'Upwork jobs', value: '60', note: '56 completed, 4 in progress' },
  { label: 'Verified Upwork rating', value: '5.0', note: 'Recent public client feedback' },
  { label: 'Reporting automation', value: '40%', note: 'Retail Risk reporting efficiency improvement' },
  { label: 'Manual work saved', value: '30+ hrs/mo', note: 'Huawei executive reporting automation' },
]

export const experiences: Experience[] = [
  {
    id: 'leejam',
    company: 'Leejam Sports Company',
    role: 'Lead Data Analyst',
    period: 'Apr 2025 - Present',
    location: 'Saudi Arabia',
    achievements: [
      'Lead analytics initiatives that support business growth, operational efficiency, performance management, and executive decision-making.',
      'Develop dashboards and recurring reporting solutions for commercial and operational KPIs.',
      'Built a customer churn prediction model to identify at-risk members and support retention analytics.',
      'Translate stakeholder requirements into scalable data models, analytical views, and BI outputs.',
      'Mentor junior analysts and improve how teams consume, interpret, and act on insights.',
    ],
    technologies: ['Python', 'SQL', 'Power BI', 'Predictive Modeling', 'Churn Analytics', 'Data Modeling'],
    impact: [
      { metric: 'Use case', value: 'Churn model' },
      { metric: 'Focus', value: 'Retention' },
      { metric: 'Audience', value: 'Leadership' },
    ],
  },
  {
    id: 'idh',
    company: 'IDH',
    role: 'Data Scientist Supervisor, Consultant',
    period: 'May 2024 - Present',
    location: 'Consultant',
    achievements: [
      'Design machine learning and analytics solutions for operational forecasting, performance monitoring, and business optimization.',
      'Build dynamic dashboards that give leadership faster access to actionable insights.',
      'Improve data workflows and analytical pipelines to strengthen reporting reliability and business visibility.',
      'Partner with analytics, IT, and business stakeholders to convert operational challenges into practical data science use cases.',
    ],
    technologies: ['Python', 'R', 'SQL', 'Forecasting', 'Dashboards', 'Operational Analytics'],
    impact: [
      { metric: 'Domain', value: 'Healthcare' },
      { metric: 'Work type', value: 'Consulting' },
      { metric: 'Focus', value: 'Forecasting' },
    ],
  },
  {
    id: 'credit-agricole',
    company: 'Credit Agricole Egypt Bank',
    role: 'Data Analytics Officer',
    period: 'Jul 2023 - Apr 2024',
    location: 'Cairo, Egypt',
    achievements: [
      'Automated Retail Risk reporting pipelines, improving efficiency by 40% and reducing manual reporting errors.',
      'Developed Power BI dashboards to track credit risk KPIs, cost of risk, portfolio performance, and policy impact.',
      'Supported IFRS 9 model analysis, ad-hoc investigations, and analytical reviews for strategic risk decisions.',
      'Delivered data-driven insights for retail risk stakeholders using SQL, Power BI, and statistical analysis.',
    ],
    technologies: ['SQL', 'Power BI', 'R', 'Credit Risk', 'IFRS 9', 'Retail Risk Analytics'],
    impact: [
      { metric: 'Efficiency gain', value: '40%' },
      { metric: 'Domain', value: 'Retail Risk' },
      { metric: 'Reporting', value: 'IFRS 9' },
    ],
  },
  {
    id: 'huawei',
    company: 'Huawei Technologies Co.',
    role: 'Data Analyst',
    period: 'Jan 2022 - Jun 2023',
    location: 'Cairo, Egypt',
    achievements: [
      'Managed Egypt incentive-calculation analytics for telecom dealers and operators.',
      'Automated executive reporting workflows, saving more than 30 hours per month in manual work.',
      'Built market analysis and competitive intelligence dashboards for strategy and sales planning.',
      'Delivered analytical problem-solving training sessions for business teams.',
    ],
    technologies: ['Excel', 'Power Query', 'Power BI', 'SQL', 'Market Analytics', 'Reporting Automation'],
    impact: [
      { metric: 'Time saved', value: '30+ hrs/mo' },
      { metric: 'Domain', value: 'Telecom' },
      { metric: 'Focus', value: 'Incentives' },
    ],
  },
  {
    id: 'upwork',
    company: 'Upwork / Private Client Work',
    role: 'Freelance Data Analyst & AI Product Contributor',
    period: 'Oct 2019 - Present',
    location: 'Remote',
    achievements: [
      'Completed public Upwork work across data analysis, survey analytics, dashboards, statistical modeling, and research support.',
      'Maintain 100% Job Success and Top Rated status on Upwork, with 60 public jobs listed on the profile.',
      'Support clients with SPSS crosstabs, Excel deliverables, Power BI dashboards, Python/R analysis, and business reporting.',
      'Contribute confidentially to InteriorAiMVP as a freelance data and AI professional in a company/client delivery context.',
    ],
    technologies: ['Python', 'R', 'SPSS', 'Excel', 'Power BI', 'Tableau', 'SQL', 'Survey Analytics'],
    impact: [
      { metric: 'Job Success', value: '100%' },
      { metric: 'Public jobs', value: '60' },
      { metric: 'Rating', value: '5.0' },
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'churn',
    title: 'Customer Churn Prediction & Retention Analytics',
    description:
      'Confidential Leejam project to identify at-risk members and support retention analytics, stakeholder decision-making, and KPI monitoring.',
    category: 'Machine Learning',
    technologies: ['Python', 'Classification', 'Feature Engineering', 'Model Evaluation', 'Retention Analytics'],
    status: 'Confidential business project',
    results: [
      { metric: 'Model', value: '1 churn model' },
      { metric: 'Output', value: 'Risk scores' },
      { metric: 'Business use', value: 'Retention' },
    ],
    details: [
      'Built around a real customer retention use case in the sports and fitness domain.',
      'Designed to help teams identify members who need proactive engagement.',
      'Model-performance metrics and campaign impact are kept private until approved for public sharing.',
      'No company data or confidential implementation details are published.',
    ],
  },
  {
    id: 'data-engineering',
    title: 'Real-Time E-Commerce Data Engineering Pipeline',
    description:
      'Public data engineering project using Kafka, PySpark Structured Streaming, a three-layer lakehouse layout, MongoDB, Power BI planning, and forecasting.',
    category: 'Data Engineering',
    technologies: ['Kafka', 'PySpark', 'MongoDB', 'Docker', 'Power BI', 'scikit-learn'],
    status: 'Public portfolio project',
    url: 'https://github.com/ayman-stat/Data-Engineering--DEPI',
    results: [
      { metric: 'Architecture', value: 'Kafka + Spark' },
      { metric: 'Pipeline layers', value: '3 layers' },
      { metric: 'ML layer', value: 'Forecasting' },
    ],
    details: [
      'Simulates live e-commerce orders and processes them into analytics-ready outputs.',
      'Includes a NoSQL sink and a forecasting layer for daily order volume.',
      'Designed as a practical local data platform with clear setup and demo scripts.',
      'Strong evidence for data engineering, analytics engineering, and BI readiness.',
    ],
  },
  {
    id: 'bedrock',
    title: 'AWS Bedrock GenAI & AI Agents Labs',
    description:
      'Public learning lab for the AWS Generative AI and AI Agents with Amazon Bedrock Professional Certificate, with runnable Boto3 examples.',
    category: 'Generative AI',
    technologies: ['AWS Bedrock', 'Boto3', 'Amazon Nova', 'Prompt Engineering', 'Responsible AI'],
    status: 'In progress learning lab',
    url: 'https://github.com/ayman-stat/aws-bedrock-genai-agents-labs',
    results: [
      { metric: 'Lab', value: 'Invoke FM' },
      { metric: 'API', value: 'Converse' },
      { metric: 'Status', value: 'In progress' },
    ],
    details: [
      'Implements foundation model invocation using Bedrock Runtime patterns.',
      'Includes configuration, security notes, cost guidance, and responsible AI checklist.',
      'Clearly marked as in-progress professional development, not a completed certificate claim.',
      'Next step: run in AWS, add sanitized outputs, then build a small RAG or agent demo.',
    ],
  },
  {
    id: 'credit-risk',
    title: 'Retail Credit Risk Analytics & IFRS 9 Support',
    description:
      'Banking analytics work supporting Retail Risk dashboards, cost-of-risk visibility, policy impact monitoring, and IFRS 9 model-related analysis.',
    category: 'Risk Analytics',
    technologies: ['SQL', 'Power BI', 'R', 'Credit Risk', 'IFRS 9', 'Statistical Analysis'],
    status: 'Confidential employer project',
    results: [
      { metric: 'Efficiency gain', value: '40%' },
      { metric: 'Domain', value: 'Banking' },
      { metric: 'Audience', value: 'Risk teams' },
    ],
    details: [
      'Automated recurring Retail Risk reporting pipelines.',
      'Improved visibility into credit KPIs, cost of risk, and policy impact.',
      'Supported ad-hoc investigations and analytical reviews for risk decisions.',
      'Published details intentionally avoid confidential banking data.',
    ],
  },
  {
    id: 'huawei-automation',
    title: 'Telecom Incentive Calculation & Executive Reporting',
    description:
      'Commercial analytics and reporting automation for Egypt telecom dealer/operator incentive tracking and executive performance visibility.',
    category: 'Business Analytics',
    technologies: ['Excel', 'Power Query', 'Power BI', 'SQL', 'Automation'],
    status: 'Confidential employer project',
    results: [
      { metric: 'Time saved', value: '30+ hrs/mo' },
      { metric: 'Domain', value: 'Telecom' },
      { metric: 'Output', value: 'Executive reports' },
    ],
    details: [
      'Managed incentive-related analytics for telecom dealers and operators.',
      'Automated recurring executive reporting workflows.',
      'Produced market and competitive intelligence dashboards.',
      'Supported commercial stakeholders with clearer performance tracking.',
    ],
  },
  {
    id: 'interior-ai',
    title: 'InteriorAiMVP Contribution',
    description:
      'Confidential freelance contribution to an AI-enabled interior design MVP delivered through a company/client context.',
    category: 'AI Product',
    technologies: ['AI Product Delivery', 'Data/AI Support', 'Client Collaboration'],
    status: 'Confidential freelance/client work',
    results: [
      { metric: 'Scope', value: 'AI MVP' },
      { metric: 'Role', value: 'Freelance' },
      { metric: 'Details', value: 'Private' },
    ],
    details: [
      'Public description is intentionally limited to protect client and delivery confidentiality.',
      'The site should not imply ownership of the company or complete product delivery.',
      'Use this as evidence of practical AI product exposure without revealing secrets.',
    ],
  },
]

export const serviceAreas: ServiceArea[] = [
  {
    title: 'Data Analysis',
    outcome: 'Clean, analyze, and explain datasets for business, research, and operational decisions.',
    useCases: ['Survey analysis and crosstabs', 'Exploratory analysis', 'Statistical reporting', 'Research support'],
    tools: ['Excel', 'SPSS', 'R', 'Python', 'Stata'],
  },
  {
    title: 'Data Analytics',
    outcome: 'Translate recurring questions into dashboards, KPI systems, and decision workflows.',
    useCases: ['Executive KPI dashboards', 'Commercial analytics', 'Risk monitoring', 'Operational reporting'],
    tools: ['Power BI', 'Tableau', 'SQL', 'DAX', 'Power Query'],
  },
  {
    title: 'Machine Learning',
    outcome: 'Build practical predictive models for retention, risk, forecasting, and segmentation.',
    useCases: ['Churn prediction', 'Credit risk analytics', 'Forecasting', 'Customer segmentation'],
    tools: ['Python', 'scikit-learn', 'XGBoost', 'Model evaluation'],
  },
  {
    title: 'Generative AI',
    outcome: 'Develop hands-on cloud AI capability through Bedrock labs and responsible AI workflows.',
    useCases: ['Foundation model invocation', 'Prompt experiments', 'AI workflow design', 'Responsible AI checks'],
    tools: ['AWS Bedrock', 'Boto3', 'Amazon Nova', 'Prompt Engineering'],
  },
  {
    title: 'Data Engineering',
    outcome: 'Prepare data pipelines and analytics-ready layers that make BI and ML easier to maintain.',
    useCases: ['Streaming pipelines', 'ETL automation', 'Lakehouse layers', 'Data quality workflows'],
    tools: ['Kafka', 'PySpark', 'MongoDB', 'SQL', 'Docker'],
  },
  {
    title: 'Deep Learning',
    outcome: 'Active diploma study toward stronger neural network, computer vision, and production ML capability.',
    useCases: ['Neural networks', 'Computer vision study', 'Model serving study', 'Image/text AI labs'],
    tools: ['TensorFlow/Keras concepts', 'PyTorch study', 'CSkilled Deep Learning Diploma', 'DeepLearning.AI'],
  },
]

export const skills: Skill[] = [
  {
    category: 'Programming & Analysis',
    items: ['Python', 'R', 'SQL', 'Excel', 'SPSS', 'Power Query', 'DAX'],
  },
  {
    category: 'Machine Learning',
    items: ['Predictive Modeling', 'Classification', 'Regression', 'Forecasting', 'Feature Engineering', 'Model Evaluation'],
  },
  {
    category: 'BI & Executive Analytics',
    items: ['Power BI', 'Tableau', 'KPI Design', 'Executive Dashboards', 'Data Storytelling', 'Risk Dashboards'],
  },
  {
    category: 'Data Engineering',
    items: ['ETL', 'PySpark', 'Kafka', 'MongoDB', 'SQL Server', 'Oracle SQL', 'Data Quality'],
  },
  {
    category: 'Generative AI',
    items: ['AWS Bedrock', 'Boto3', 'Amazon Nova', 'Prompt Engineering', 'Responsible AI', 'AI Agents Study'],
  },
  {
    category: 'Business & Leadership',
    items: ['Stakeholder Management', 'Requirements Translation', 'Mentoring', 'Consulting', 'Executive Communication'],
  },
]

export const expertiseAreas = serviceAreas.map((area, index) => ({
  id: String(index + 1),
  title: area.title,
  icon: '',
  description: area.outcome,
  technologies: area.tools,
  achievement: area.useCases.join(' | '),
  color: index % 2 === 0 ? 'from-data-blue to-cyber-lime' : 'from-cyan-500 to-blue-500',
}))

export const education: EducationItem[] = [
  {
    title: 'M.Sc. in Data Science',
    institution: 'Faculty of Graduate Studies for Statistical Research, Cairo University',
    period: 'Expected 2026',
    status: 'In Progress',
  },
  {
    title: 'B.Sc. in Statistics',
    institution: 'Faculty of Economics and Political Science, Cairo University',
    period: '2021',
  },
]

export const certifications: Certification[] = [
  { id: 'depi-data-engineering', title: 'Data Engineering Scholarship - AI & Data Science Track', issuer: 'DEPI Egypt', year: 'Jun 2026', status: 'Completed' },
  { id: 'cskilled-ml-diploma', title: 'Machine Learning Diploma', issuer: 'CSkilled Academy / Dr. Mostafa Saad', year: '2026', status: 'Completed' },
  { id: 'powerbi-depi', title: 'Microsoft Power BI Engineer', issuer: 'DEPI', year: '2024', status: 'Completed' },
  { id: 'iti-bi', title: 'Business Intelligence Developer', issuer: 'ITI, 369 hours', year: '2023', status: 'Completed' },
  { id: 'machinfy', title: 'Diploma in Data Science', issuer: 'Machinfy', year: '2022', status: 'Completed' },
  { id: 'credit-scoring', title: 'Credit Scoring Analysis with Python', issuer: '365 Data Science', year: '2022', status: 'Completed' },
  { id: 'linkedin-da', title: 'Data Analyst Career Path', issuer: 'LinkedIn Learning', year: '2021', status: 'Completed' },
  { id: 'ibm-da', title: 'IBM Data Analyst Professional Certificate', issuer: 'Coursera', year: '2019', status: 'Completed' },
  { id: 'udacity-da', title: 'Data Analyst Nanodegree', issuer: 'Udacity', year: '2019', status: 'Completed' },
]

export const inProgressLearning: Certification[] = [
  { id: 'cskilled-dl-diploma', title: 'Deep Learning Diploma', issuer: 'CSkilled Academy / Dr. Mostafa Saad', year: 'In Progress', status: 'In Progress' },
  {
    id: 'aws-bedrock',
    title: 'AWS Generative AI and AI Agents with Amazon Bedrock Professional Certificate',
    issuer: 'Coursera',
    year: 'In Progress',
    status: 'In Progress',
  },
  { id: 'genai-engineering', title: 'Generative AI Engineering Learning Path', issuer: 'Coursera', year: 'In Progress', status: 'In Progress' },
  { id: 'aws-ai', title: 'AWS Artificial Intelligence Practitioner', issuer: 'Coursera', year: 'In Progress', status: 'In Progress' },
  { id: 'deep-learning', title: 'Deep Learning Specialization', issuer: 'DeepLearning.AI / Coursera', year: 'In Progress', status: 'In Progress' },
  { id: 'ml-specialization', title: 'Machine Learning Specialization', issuer: 'DeepLearning.AI / Stanford / Coursera', year: 'In Progress', status: 'In Progress' },
  { id: 'ml-production', title: 'ML in Production', issuer: 'DeepLearning.AI / Coursera', year: 'In Progress', status: 'In Progress' },
]

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'I think Mohammed is one of the top candidates in his field. Highly recommended.',
    author: 'Upwork client',
    company: 'Public Upwork review',
    rating: 5,
    project: 'Data Analysis',
  },
  {
    id: 2,
    quote: 'As always, Mohamed completed the work efficiently and effectively (ahead of schedule) and made himself available for feedback.',
    author: 'Upwork client',
    company: 'Public Upwork review',
    rating: 5,
    project: 'SPSS crosstabs for litigation survey results',
  },
  {
    id: 3,
    quote: 'Completed work ahead of deadline and proactively uncovered a few issues in the data set that saved us time later.',
    author: 'Upwork client',
    company: 'Public Upwork review',
    rating: 5,
    project: 'SPSS crosstabs for investment funds survey results',
  },
  {
    id: 4,
    quote: 'Stellar attention to detail and very efficient with complex crosstabs.',
    author: 'Upwork client',
    company: 'Public Upwork review',
    rating: 5,
    project: 'Global business sentiment survey results',
  },
  {
    id: 5,
    quote: "I appreciate the consistency in Mohamed's work, each and every time.",
    author: 'Upwork client',
    company: 'Public Upwork review',
    rating: 5,
    project: 'Global survey results',
  },
]

export const upworkSnapshot = {
  title: 'Upwork public profile snapshot',
  stats: ['100% Job Success', 'Top Rated', '60 total jobs', '56 completed jobs', '4 jobs in progress', '$35/hr listed rate'],
  profileUrl: socialLinks.upwork,
}

export const timeline = [
  { year: '2019', title: 'Freelance analytics begins', description: 'Started global client work on Upwork across data analysis, dashboards, and statistical consulting.', icon: '' },
  { year: '2021', title: 'B.Sc. in Statistics', description: 'Graduated from Faculty of Economics and Political Science, Cairo University.', icon: '' },
  { year: '2022', title: 'Huawei Technologies', description: 'Worked on telecom commercial analytics, incentives, executive reporting, and automation.', icon: '' },
  { year: '2023', title: 'Credit Agricole Egypt', description: 'Supported Retail Risk, IFRS 9 analysis, credit KPI dashboards, and reporting automation.', icon: '' },
  { year: '2024', title: 'IDH consulting', description: 'Expanded into healthcare analytics, operational forecasting, dashboards, and data science consulting.', icon: '' },
  { year: '2025', title: 'Leejam Sports Company', description: 'Lead analytics work for business performance, retention analytics, dashboards, and churn modeling.', icon: '' },
  { year: '2026', title: 'Data engineering and AI specialization', description: 'Completed DEPI Data Engineering Scholarship and CSkilled ML Diploma; continuing Deep Learning and AWS Bedrock work.', icon: '' },
]

export const blogPosts = [
  {
    id: 1,
    title: 'Building a public GenAI portfolio without exposing client data',
    excerpt: 'How I structure AWS Bedrock learning labs, responsible AI notes, and sanitized demos while protecting confidential work.',
    thumbnail: '/blog/bedrock-labs.jpg',
    readTime: 'Portfolio note',
    slug: 'aws-bedrock-learning-labs',
  },
  {
    id: 2,
    title: 'From risk reporting to decision-ready dashboards',
    excerpt: 'Lessons from automating recurring risk and performance reporting for stakeholders who need clear decisions, not just charts.',
    readTime: 'Case note',
    thumbnail: '/blog/risk-dashboard.jpg',
    slug: 'risk-reporting-dashboards',
  },
  {
    id: 3,
    title: 'A practical path from BI to ML engineering',
    excerpt: 'Why strong data preparation, dashboards, and stakeholder context make machine learning projects more useful in production.',
    readTime: 'Career note',
    thumbnail: '/blog/ml-engineering.jpg',
    slug: 'bi-to-ml-engineering',
  },
]
