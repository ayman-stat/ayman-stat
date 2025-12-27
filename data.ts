export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  technologies: string[];
  impact: {
    metric: string;
    value: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  results: {
    metric: string;
    value: string;
  }[];
  details: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credential?: string;
}

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Leejam Sports Company',
    role: 'Lead Data Scientist',
    period: 'Apr. 2025 – Present',
    location: 'Saudi Arabia',
    achievements: [
      'Led a team of 4 analysts and data scientists to deliver advanced analytics and ML solutions',
      'Designed and deployed unified semantic model on Microsoft Fabric, consolidating 5+ data sources and cutting maintenance time by 40%',
      'Built centralized KPI dashboard standardizing metrics across 3x subscriber base, enabling real-time performance tracking',
      'Delivered customer churn prediction, segmentation, RFM modeling, and sales forecasting, driving retention and boosting marketing ROI',
      'Streamlined ETL pipelines and automated reporting, reducing manual effort by 70% and accelerating executive insights',
      'Partnered with executives across operations, finance, and marketing to ensure alignment of data initiatives with corporate strategy',
    ],
    technologies: ['Microsoft Fabric', 'Python', 'Azure', 'Power BI', 'SQL', 'Machine Learning', 'ETL Pipelines'],
    impact: [
      { metric: 'Maintenance Time Reduction', value: '40%' },
      { metric: 'Manual Effort Reduction', value: '70%' },
      { metric: 'Team Size', value: '4 members' },
    ],
  },
  {
    id: '2',
    company: 'IDH',
    role: 'Data Scientist Supervisor',
    period: 'May 2024 – Present',
    location: 'Consultant',
    achievements: [
      'Designed AI-driven branch expansion strategy for Al-Borg & Al-Mokhtabar, replacing manual feasibility studies with ML/geospatial models',
      'Built AI-powered marketing automation & patient engagement models (personalized SMS + ML targeting), generating 3x incremental campaign revenues',
      'Consolidated multi-department requirements into executive dashboards, improving visibility and accelerating decisions',
      'Enhanced Oracle ETL pipelines with stored procedures & automated jobs, cutting reporting time by 50%',
      'Supervised junior scientists, ensuring delivery of high-quality ML models aligned with best practices',
      'Drove adoption of AI solutions across operations, marketing, and sales through cross-functional collaboration',
    ],
    technologies: ['Python', 'R', 'Machine Learning', 'Geospatial Analysis', 'Oracle', 'ETL', 'SQL'],
    impact: [
      { metric: 'Campaign Revenue Growth', value: '3x' },
      { metric: 'Reporting Time Reduction', value: '50%' },
      { metric: 'Branch Expansion', value: 'AI-Driven' },
    ],
  },
  {
    id: '3',
    company: 'Credit Agricole Egypt Bank',
    role: 'Data Analytics Officer',
    period: 'Jul. 2023 – Apr. 2024',
    location: 'Cairo, Egypt',
    achievements: [
      'Built and maintained daily, monthly, and quarterly dashboards for senior management, enabling faster data-driven decisions',
      'Developed ECL & credit risk models (Cash Loan, Car Loan, Housing, Credit Cards) with Basel II compliance, segmented by program, source, and dealer',
      'Automated reporting workflows (migrated SAS → R), reducing operational costs',
      'Produced RMarkdown risk reports with interactive visualizations, improving clarity for regulators and executives',
      'Delivered IFRS 9 reporting to the Central Bank of Egypt and supported Retail Risk policy monitoring',
    ],
    technologies: ['R', 'SAS', 'SQL', 'Basel II', 'IFRS 9', 'Risk Modeling', 'RMarkdown', 'Data Visualization'],
    impact: [
      { metric: 'Compliance', value: '100% Basel II' },
      { metric: 'Migration', value: 'SAS to R' },
      { metric: 'Regulatory Reporting', value: 'IFRS 9' },
    ],
  },
  {
    id: '4',
    company: 'Huawei Technologies Co.',
    role: 'Data Analyst',
    period: 'Jan. 2022 – Jun. 2023',
    location: 'Cairo, Egypt',
    achievements: [
      'Automated Excel reporting with Power Query, reducing report creation from 4 hours → under 1 minute',
      'Designed Power BI dashboards for sales and inventory, improving decision-making speed',
      'Set sales targets for all Egypt, breaking them down by region, area, field force & promoter, aligned with available stock',
      'Managed Sell-Out & Sell-Through incentive programs for IR & OR dealers (B-Tech, Vodafone, Dubai Phone), reducing calculation errors',
      'Reported directly to Country Manager & Sales Director, delivering daily/weekly/monthly reports on performance',
      'Conducted competitor analysis on sell-out share, pricing, and promotions, optimizing stock distribution',
    ],
    technologies: ['Excel', 'Power BI', 'Power Query', 'SQL', 'VBA', 'Data Visualization'],
    impact: [
      { metric: 'Time Reduction', value: '4 hours → 1 min' },
      { metric: 'Efficiency', value: '99.6%' },
      { metric: 'Reporting Speed', value: 'Real-time' },
    ],
  },
  {
    id: '5',
    company: 'Upwork',
    role: 'Freelance Data Analyst',
    period: 'Oct. 2019 – Present',
    location: 'Remote',
    achievements: [
      'Completed 50+ international projects across healthcare, finance, retail, and marketing with Top Rated status and consistent 5★ reviews',
      'Delivered predictive modeling, risk analysis, and BI dashboards (Power BI, Tableau, Excel) improving decision-making for global clients',
      'Automated ETL pipelines & workflows using Python, R, SQL, and Power Query, reducing manual efforts',
      'Conducted survey analytics, A/B testing, segmentation, and forecasting, delivering actionable insights for growth',
      'Recognized for clear communication, on-time delivery, and translating complex data into business impact',
    ],
    technologies: ['Python', 'R', 'SQL', 'Power BI', 'Tableau', 'Excel', 'Power Query', 'ETL'],
    impact: [
      { metric: 'Projects Completed', value: '50+' },
      { metric: 'Client Rating', value: '5★' },
      { metric: 'Status', value: 'Top Rated' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Churn Prediction Model',
    description: 'Built ML pipeline with 93% AUC, used in retention campaigns for millions of subscribers, directly reducing churn rate.',
    category: 'Machine Learning',
    technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Feature Engineering', 'Model Deployment', 'ML Pipeline'],
    results: [
      { metric: 'AUC Score', value: '93%' },
      { metric: 'Subscribers', value: 'Millions' },
      { metric: 'Impact', value: 'Churn Reduction' },
    ],
    details: [
      'Developed comprehensive ML pipeline combining multiple algorithms for optimal performance',
      'Engineered features from customer behavior, transaction history, and engagement metrics',
      'Deployed model in production with real-time prediction capabilities for millions of subscribers',
      'Enabled proactive customer retention campaigns based on churn probability scores',
      'Directly contributed to reducing overall churn rate through data-driven interventions',
    ],
  },
  {
    id: '2',
    title: 'Branch Expansion Strategy (Healthcare)',
    description: 'Designed AI tool combining geolocation, competitor scraping, and ML to optimize site selection, reducing feasibility study time.',
    category: 'Business Intelligence',
    technologies: ['Python', 'Geospatial Analysis', 'Machine Learning', 'Web Scraping', 'Statistical Modeling'],
    results: [
      { metric: 'Feasibility Study Time', value: 'Reduced' },
      { metric: 'Site Selection', value: 'AI-Optimized' },
      { metric: 'Accuracy', value: 'Improved' },
    ],
    details: [
      'Designed AI-driven branch expansion strategy replacing manual feasibility studies',
      'Combined geolocation data, competitor scraping, and ML models for optimal site selection',
      'Built predictive models to forecast branch performance and ROI',
      'Created interactive dashboards for executive decision-making',
      'Significantly reduced time required for feasibility studies while improving accuracy',
    ],
  },
  {
    id: '3',
    title: 'BI Automation: 20+ Interactive Dashboards',
    description: 'Created 20+ interactive dashboards consolidating KPIs for executives, replacing legacy Excel reports and reducing reporting delays by 80%.',
    category: 'Automation',
    technologies: ['Power BI', 'Python', 'SQL', 'Azure', 'ETL Pipelines', 'Data Warehousing', 'DAX'],
    results: [
      { metric: 'Dashboards Created', value: '20+' },
      { metric: 'Reporting Delays', value: '80% Reduction' },
      { metric: 'Legacy Reports', value: 'Replaced' },
    ],
    details: [
      'Created 20+ interactive dashboards consolidating KPIs for executives',
      'Replaced legacy Excel reports with modern BI solutions',
      'Automated data extraction, transformation, and loading processes',
      'Implemented scheduled reports and real-time data refresh capabilities',
      'Reduced reporting delays by 80% and improved data consistency across all reports',
    ],
  },
  {
    id: '4',
    title: 'AI-Driven Marketing Automation',
    description: 'Designed and deployed ML-based personalized campaigns, tripling incremental revenues through improved targeting.',
    category: 'Machine Learning',
    technologies: ['Python', 'Machine Learning', 'Marketing Automation', 'Personalization', 'SMS Targeting'],
    results: [
      { metric: 'Revenue Growth', value: '3x' },
      { metric: 'Campaign Type', value: 'Personalized' },
      { metric: 'Targeting', value: 'ML-Powered' },
    ],
    details: [
      'Built AI-powered marketing automation & patient engagement models',
      'Implemented personalized SMS campaigns with ML targeting',
      'Generated 3x incremental campaign revenues through improved targeting',
      'Designed ML-based personalized campaigns for better patient engagement',
      'Delivered actionable insights that directly impacted marketing ROI',
    ],
  },
];

export const skills: Skill[] = [
  {
    category: 'Programming Languages',
    items: ['Python', 'R', 'SQL', 'SAS', 'VBA', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Data Science & ML',
    items: [
      'Machine Learning',
      'Deep Learning',
      'Statistical Modeling',
      'Predictive Analytics',
      'Feature Engineering',
      'Model Deployment',
      'Churn Prediction',
      'RFM Modeling',
    ],
  },
  {
    category: 'Data Visualization',
    items: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn', 'Plotly', 'Recharts', 'RMarkdown'],
  },
  {
    category: 'Cloud & Big Data',
    items: ['Microsoft Fabric', 'Azure', 'AWS', 'Data Warehousing', 'ETL Pipelines', 'Oracle'],
  },
  {
    category: 'Databases',
    items: ['SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB', 'Data Modeling'],
  },
  {
    category: 'Tools & Frameworks',
    items: ['Git', 'Docker', 'Jupyter', 'Apache Spark', 'Hadoop', 'Kubernetes', 'Power Query'],
  },
];

export const stats = {
  yearsExperience: '5+',
  projectsUpwork: '50+',
  churnAccuracy: '93%',
  automationEfficiency: '70%',
  revenueGrowth: 'Multimillion',
  dashboardsCreated: '20+',
  teamSize: '4',
};

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/mohamed-ghareb/',
  upwork: 'https://www.upwork.com/freelancers/~014329e93fb9620b00',
  email: 'mohammed.ayman.stat@gmail.com',
  phone: '01060060292',
};

// Hero Section Data
export const hero = {
  name: 'Mohamed Ayman',
  roles: ['Senior Data Scientist', 'Senior Business Intelligence', 'ML Engineer'],
  tagline: 'Transforming Data into Million-Dollar Decisions',
  bio: 'Senior Data Scientist with 5+ years of experience in banking, healthcare, telecom, and sports industries. Specialized in machine learning, predictive analytics, and business intelligence solutions that reduced churn, optimized sales, and generated multimillion revenue growth. Proven leader in driving cross-functional projects, mentoring teams, and deploying scalable AI/BI solutions on cloud and enterprise platforms.',
  image: '/profile.jpg', // Placeholder - add actual image
  cta: {
    primary: { text: 'View My Work', href: '#projects' },
    secondary: { text: 'Download Resume', href: '/resume.pdf' },
    connect: { text: "Let's Connect", href: 'https://wa.me/201060060292?text=Freelance' },
  },
  badges: [
    { label: '50+ Projects', icon: '🚀' },
    { label: '5+ Years', icon: '⭐' },
    { label: '93% AUC', icon: '🎯' },
  ],
};

// Testimonials
export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  company: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Mohamed's churn prediction model saved us millions in customer retention costs. His expertise in machine learning and business intelligence is exceptional.",
    author: 'CEO',
    company: 'E-commerce Company',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'The BI automation system Mohamed built reduced our reporting time by 70%. His attention to detail and technical skills are outstanding.',
    author: 'Director of Analytics',
    company: 'Financial Services',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'Working with Mohamed was a game-changer. His data-driven insights helped us make strategic decisions that increased revenue by 3x.',
    author: 'VP of Strategy',
    company: 'Retail Chain',
    rating: 5,
  },
  {
    id: 4,
    quote:
      'Mohamed delivered a comprehensive analytics solution that exceeded our expectations. Highly professional and results-oriented.',
    author: 'Head of Operations',
    company: 'Tech Startup',
    rating: 5,
  },
];

// Timeline
export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: string;
}

export const timeline: TimelineItem[] = [
  {
    year: '2019',
    title: 'Started Freelance Career',
    description: 'Began freelance data analysis on Upwork, completed first international projects',
    icon: '🚀',
  },
  {
    year: '2020',
    title: 'First Certifications',
    description: 'Earned IBM Data Analyst & Udacity Nanodegree certifications',
    icon: '🎓',
  },
  {
    year: '2021',
    title: 'B.Sc. in Statistics',
    description: 'Graduated from Faculty of Economics and Political Science, Cairo University',
    icon: '📜',
  },
  {
    year: '2022',
    title: 'Joined Huawei Technologies',
    description: 'Data Analyst - Automated reporting from 4 hours to 1 minute',
    icon: '💼',
  },
  {
    year: '2023',
    title: 'Credit Agricole Bank',
    description: 'Data Analytics Officer - Basel II compliance & IFRS 9 reporting',
    icon: '🏦',
  },
  {
    year: '2024',
    title: 'Data Scientist Supervisor',
    description: 'IDH - AI-driven branch expansion & 3x revenue growth',
    icon: '👨‍💼',
  },
  {
    year: '2025',
    title: 'Lead Data Scientist',
    description: 'Leejam Sports - Leading team of 4, Microsoft Fabric deployment',
    icon: '🏆',
  },
];

// Blog Posts
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  thumbnail: string;
  readTime: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'How I Built a 93% AUC Churn Prediction Model',
    excerpt: 'A deep dive into feature engineering, model selection, and deployment strategies that achieved 93% AUC for millions of subscribers.',
    thumbnail: '/blog/churn-model.jpg',
    readTime: '8 min',
    slug: 'churn-prediction-model',
  },
  {
    id: 2,
    title: 'BI Automation: From Legacy Reports to 20+ Dashboards',
    excerpt: 'Learn how to automate your BI workflows, create interactive dashboards, and reduce reporting delays by 80% using Power BI and Azure.',
    readTime: '6 min',
    thumbnail: '/blog/bi-automation.jpg',
    slug: 'power-bi-automation',
  },
  {
    id: 3,
    title: 'Microsoft Fabric: Unified Data Analytics Platform',
    excerpt: 'Essential patterns and practices for building scalable data pipelines and consolidating multiple data sources on Microsoft Fabric.',
    readTime: '10 min',
    thumbnail: '/blog/azure-databricks.jpg',
    slug: 'microsoft-fabric-best-practices',
  },
];

// Expertise Areas
export interface Expertise {
  id: string;
  title: string;
  icon: string;
  description: string;
  technologies: string[];
  achievement: string;
  color: string;
}

export const expertiseAreas: Expertise[] = [
  {
    id: '1',
    title: 'Machine Learning & AI',
    icon: '🧠',
    description:
      'Building production-ready ML models with 93% AUC. Specialized in predictive analytics, churn prediction, segmentation, RFM modeling, and sales forecasting. Expert in feature engineering and model deployment.',
    technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Feature Engineering', 'Model Deployment', 'Predictive Analytics'],
    achievement: '93% AUC churn prediction models',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: '2',
    title: 'Business Intelligence & Analytics',
    icon: '📊',
    description:
      'Creating comprehensive BI solutions with 20+ interactive dashboards. Expert in Microsoft Fabric, Power BI, and data storytelling. Delivered solutions that reduced reporting delays by 80%.',
    technologies: ['Power BI', 'Microsoft Fabric', 'SQL', 'Tableau', 'DAX', 'RMarkdown'],
    achievement: '20+ dashboards, 80% delay reduction',
    color: 'from-data-blue to-cyber-lime',
  },
  {
    id: '3',
    title: 'Data Engineering & Cloud',
    icon: '☁️',
    description:
      'Designing and implementing scalable data pipelines on Microsoft Fabric and Azure. Building robust ETL processes, automated workflows, and unified semantic models consolidating 5+ data sources.',
    technologies: ['Microsoft Fabric', 'Azure', 'Oracle', 'ETL Pipelines', 'Data Warehousing', 'Stored Procedures'],
    achievement: '40% maintenance reduction, 5+ data sources',
    color: 'from-cyber-lime to-data-blue',
  },
];

// Certifications
export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Supervised Machine Learning: Regression & Classification',
    issuer: 'DeepLearning.AI',
    year: '2025',
  },
  {
    id: '2',
    title: 'Analyzing and Visualizing Data with Power BI',
    issuer: 'edX',
    year: '2024',
  },
  {
    id: '3',
    title: 'Data Science: R Basics',
    issuer: 'edX',
    year: '2023',
  },
  {
    id: '4',
    title: 'Data Modeling & Advanced Analytics with Power BI',
    issuer: 'DataCamp',
    year: '2022',
  },
  {
    id: '5',
    title: 'Data Analytics for Decision Making',
    issuer: 'Bond University',
    year: '2021',
  },
  {
    id: '6',
    title: 'IBM Data Analyst Professional Certificate',
    issuer: 'Coursera',
    year: '2019',
  },
  {
    id: '7',
    title: 'Data Analyst Nanodegree',
    issuer: 'Udacity',
    year: '2019',
  },
];

// Education
export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: string;
}

export const education: Education[] = [
  {
    id: '1',
    degree: 'M.Sc. in Data Science',
    institution: 'Faculty of Graduate Studies for Statistical Research, Cairo University',
    period: 'Expected 2026',
    status: 'In Progress',
  },
  {
    id: '2',
    degree: 'B.Sc. in Statistics',
    institution: 'Faculty of Economics and Political Science, Cairo University',
    period: '2021',
    status: 'Completed',
  },
];
