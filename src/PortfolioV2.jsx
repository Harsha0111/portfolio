// import React from "react";
// import {
//   FaLinkedin,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaGitAlt,
//   FaShieldAlt,
//   FaDev, // For DevOps title logo
//   FaTrophy, // For gamified achievements
//   FaYoutube, // For YouTube
//   FaGithub, // For architecture diagram
//   FaCloudUploadAlt, // For architecture diagram
//   FaGlobeAmericas, // For architecture diagram
//   FaArrowRight, // For architecture diagram flow
// } from "react-icons/fa";
// import { BsTelephoneFill } from "react-icons/bs"; // BsGearWideConnected removed as FaDev is used
// import {
//   SiAnsible,
//   SiTerraform,
//   SiJenkins,
//   SiKubernetes,
//   SiPrometheus,
//   SiDocker,
//   SiArgo,
//   SiVercel, // For Vercel in architecture
// } from "react-icons/si";

// const Portfolio = () => {
//   const lastUpdatedDate = new Date().toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });

//   const skillsList = [
//     {
//       name: "Azure",
//       proficiency: "Proficient",
//       note: "Primary cloud for IaaS/PaaS solutions",
//     },
//     {
//       name: "AWS",
//       proficiency: "Familiar",
//       note: "Experience with core services (EC2, S3, RDS)",
//     },
//     {
//       name: "Ansible",
//       proficiency: "Proficient",
//       note: "Automating system configuration & deployments",
//     },
//     {
//       name: "Terraform",
//       proficiency: "Familiar",
//       note: "Infrastructure as Code provisioning",
//     },
//     {
//       name: "Jenkins",
//       proficiency: "Proficient",
//       note: "Building and managing complex CI/CD pipelines",
//     },
//     {
//       name: "GitLab CI (Runner)",
//       proficiency: "Proficient",
//       note: "Integrated CI/CD within GitLab ecosystem",
//     },
//     {
//       name: "Azure DevOps",
//       proficiency: "Proficient",
//       note: "End-to-end DevOps lifecycle management",
//     },
//     {
//       name: "ArgoCD",
//       proficiency: "Familiar",
//       note: "GitOps continuous delivery tool",
//     },
//     {
//       name: "Docker",
//       proficiency: "Proficient",
//       note: "Containerizing applications for portability",
//     },
//     {
//       name: "Podman",
//       proficiency: "Proficient",
//       note: "Daemonless container engine experience",
//     },
//     {
//       name: "Kubernetes",
//       proficiency: "Proficient",
//       note: "Deploying and managing containerized apps at scale",
//     },
//     {
//       name: "Helm",
//       proficiency: "Familiar",
//       note: "Managing Kubernetes applications with charts",
//     },
//     {
//       name: "Prometheus",
//       proficiency: "Proficient",
//       note: "Metrics collection and time-series database",
//     },
//     {
//       name: "Grafana",
//       proficiency: "Proficient",
//       note: "Data visualization and dashboarding",
//     },
//     {
//       name: "Splunk",
//       proficiency: "Proficient",
//       note: "Log management and analysis",
//     },
//     {
//       name: "Bash",
//       proficiency: "Proficient",
//       note: "Automation scripts for Linux environments",
//     },
//     {
//       name: "Python",
//       proficiency: "Basic",
//       note: "Scripting for automation and tooling",
//     },
//     {
//       name: "Linux",
//       proficiency: "Proficient",
//       note: "System administration and troubleshooting",
//     },
//     { name: "Vault", proficiency: "Familiar", note: "Secrets management" },
//     {
//       name: "Istio",
//       proficiency: "Familiar",
//       note: "Service mesh for microservices security",
//     },
//     {
//       name: "GitOps",
//       proficiency: "Familiar",
//       note: "Declarative continuous delivery model",
//     },
//     {
//       name: "CI/CD",
//       proficiency: "Proficient",
//       note: "Implementing robust CI/CD practices",
//     },
//   ];

//   const experiences = [
//     {
//       company: "Walmart Global Tech",
//       role: "Infrastructure Engineer II",
//       dates: "Aug 2024 – Present",
//       status: "currently deployed",
//       statusColor: "green",
//       description: [
//         "Acted as the primary escalation point for P1–P3 incidents, resolving 95% of 50+ monthly issues within SLA through rapid triage and root cause analysis, ensuring minimal disruption.",
//         "Deployed and managed containerized applications using Podman, Docker, and Kubernetes, implementing auto-scaling and rolling updates to achieve 99.99% availability.",
//         "Developed Bash and Python scripts to automate monitoring, deployment, and incident response tasks, eliminating 70% of manual effort and improving workflow efficiency.",
//         "Proactively monitored 100+ services using Prometheus and Grafana, fine-tuning alerts to reduce false positives by 30% and resolving bottlenecks to maintain 99.9% uptime.",
//         "Facilitated 10+ major incident bridges, collaborating with engineering, product, and QA teams to reduce MTTR by 25% through clear communication and documented postmortems.",
//         "Contributed to disaster recovery planning, validating backups and resiliency for 5+ drills, ensuring 100% recovery success during simulated outages.",
//         "Communicated incident updates to stakeholders, enhancing transparency and alignment during high-severity incidents, improving team coordination by 20%.",
//       ],
//       tags: [
//         "Podman",
//         "Docker",
//         "Kubernetes",
//         "Bash",
//         "Python",
//         "Prometheus",
//         "Grafana",
//         "Incident Mgmt",
//       ],
//     },
//     {
//       company: "NSE IT",
//       role: "DevOps Engineer",
//       dates: "Aug 2022 – Sept 2024",
//       status: "previous-commit",
//       statusColor: "blue",
//       description: [
//         "Automated deployment of applications using Kubernetes, leveraging auto-scaling and service discovery to maintain 99.9% availability and support zero-downtime updates.",
//         "Designed and integrated CI/CD pipelines with Jenkins, GitLab CI, SonarQube, and Sonatype Nexus, reducing deployment time by 50% and build failures by 40%.",
//         "Implemented Poll-SCM triggers in Jenkins, automating 200+ hourly builds on GitLab commits, optimizing resource efficiency and ensuring zero-error artifact uploads.",
//         "Independently resolved client requirements through problem-solving, delivering 100% on-time deployment workflows and code quality checks for 10+ clients.",
//         "Collaborated with teams to troubleshoot production issues, resolving 90% of deployment failures within 1 hour, ensuring high availability.",
//       ],
//       tags: [
//         "Kubernetes",
//         "Jenkins",
//         "GitLab CI",
//         "SonarQube",
//         "Nexus",
//         "CI/CD Automation",
//         "Ansible",
//       ],
//     },
//   ];

//   const projects = [
//     {
//       title: "Observability & Alerting Enhancement",
//       category: "Professional Project (Walmart)",
//       status: "production",
//       stars: "Critical Infra",
//       description:
//         "Fine-tuned Prometheus alerts for 60+ microservices, reducing alert noise by 35% and improving on-call efficiency. Built Grafana dashboards, cutting MTTD by 25% for 20+ services through actionable insights. Conducted alert reviews with platform teams, boosting incident detection accuracy by 20%. Suppressed low-impact alerts, enhancing response efficiency by 30% for high-priority incidents.",
//       tags: [
//         "Prometheus",
//         "Grafana",
//         "Microservices",
//         "Alerting",
//         "Monitoring",
//       ],
//       imageUrl:
//         "https://images.unsplash.com/photo-1580983216274-a001b9589fda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9uaXRvcmluZyUyMGRhc2hib2FyZHxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=600&q=60",
//       terminalCmd:
//         "$ promql query 'sum(rate(http_requests_total[5m])) by (job)'",
//       terminalMsg: "✅ Query successful • Displaying metrics",
//     },
//     {
//       title: "Disaster Recovery & Incident Management",
//       category: "Professional Project (Walmart)",
//       status: "active-drills",
//       stars: "High Availability",
//       description:
//         "Participated in 6+ disaster recovery simulations, ensuring 100% recovery for 10+ critical services. Managed P1/P2/P3 incidents, reducing MTTR by 20% through coordinated updates and communication. Created runbooks from incident learnings, improving response efficiency by 30% for 15+ cases. Streamlined on-call processes, enhancing operational readiness by 25%.",
//       tags: [
//         "Disaster Recovery",
//         "Incident Management",
//         "P1/P2/P3",
//         "Runbooks",
//         "Resiliency",
//       ],
//       terminalCmd: "$ ./run_dr_simulation.sh --service critical-app",
//       terminalMsg: "🔄 DR test in progress... Recovery successful!",
//     },
//     {
//       title: "IB Deployment Automation",
//       category: "Professional Project (NSE IT)",
//       status: "completed",
//       stars: "GitLab Migration",
//       description:
//         "Automated CI/CD pipelines using GitLab and Kubernetes, deploying 12+ applications with auto-scaling, reducing downtime by 50%. Implemented rolling updates and service discovery, ensuring 99.9% availability across cloud environments.",
//       tags: [
//         "CI/CD",
//         "GitLab",
//         "Migration",
//         "Kubernetes",
//         "Auto-scaling",
//         "Deployment",
//       ],
//       terminalCmd: "$ kubectl apply -f deployment.yaml --namespace=ib-prod",
//       terminalMsg: "🚀 Deployment scaled successfully.",
//     },
//     {
//       title: "PXIL Project CI/CD Pipeline",
//       category: "Professional Project (NSE IT)",
//       status: "archived",
//       stars: "Reliable Workflows",
//       description:
//         "Built CI/CD pipelines with Jenkins, SonarQube, and Nexus, cutting deployment time by 50%. Automated hourly builds via Poll-SCM, ensuring 100% reliable workflows for the PXIL project.",
//       tags: ["Jenkins", "SonarQube", "Nexus", "Poll-SCM", "CI/CD", "Ansible"],
//       terminalCmd: "$ jenkins-cli build PXIL_Pipeline -p BRANCH=main",
//       terminalMsg: "✅ Build triggered • Artifacts pushed to Nexus.",
//     },
//   ];

//   const education = [
//     {
//       degree: "Bachelor of Technology in Information Technology",
//       institution: "Anna University",
//       year: "Graduated June 2022",
//     },
//     {
//       degree: "XII (Higher Secondary Certificate)",
//       institution: "Malar Matriculation Higher Secondary School",
//       year: "Completed 2018",
//     },
//     {
//       degree: "X (Secondary School Certificate)",
//       institution: "RN Oxford Matriculation School",
//       year: "Completed 2016",
//     },
//   ];

//   const courses = [
//     "Linux Foundation",
//     "Kubernetes",
//     "Docker Training",
//     "Ansible Basics to Advanced",
//     "Jenkins",
//     "Bash Scripting",
//     "Git",
//     "Azure Administrator",
//     "Azure DevOps",
//     "Python",
//     "Terraform Fundamentals",
//     "ArgoCD Essentials",
//     "Helm Basics",
//     "Vault Security",
//     "Istio Service Mesh",
//   ];

//   const professionalAchievements = [
//     {
//       title: "Bravo Award for Operational Excellence",
//       date: "April 2025",
//       description:
//         "Received for automating the alert onboarding process at Walmart, significantly reducing manual effort and improving incident response efficiency.",
//       icon: <FaTrophy className="text-yellow-500 text-3xl" />,
//     },
//     {
//       title: "NSE IT Digital Recognition",
//       date: "December 2023",
//       description:
//         "Achieved for independently handling project work at NSE IT, integrating new components into the DevOps pipeline, and enhancing its capabilities.",
//       icon: <FaTrophy className="text-yellow-500 text-3xl" />,
//     },
//   ];

//   const youtubeAchievements = [
//     {
//       title: "Reached 1,269 Subscribers",
//       date: "May 2025",
//       description:
//         "Growing a community focused on DevOps and Cloud technologies.",
//       icon: <FaTrophy className="text-red-500 text-3xl" />,
//     },
//     {
//       title: "Published 189 Videos",
//       date: "On-going",
//       description:
//         "Creating educational content on DevOps practices, tools, and workflows.",
//       icon: <FaTrophy className="text-red-500 text-3xl" />,
//     },
//   ];

//   const devOpsWorkflowSteps = [
//     {
//       IconComponent: FaGitAlt,
//       title: "1. Version Control (Git)",
//       description:
//         "Developers commit code to Git repositories, enabling collaboration and history tracking.",
//       color: "text-orange-500",
//     },
//     {
//       IconComponent: SiJenkins,
//       title: "2. CI (Jenkins/GitLab/Azure DevOps)",
//       description:
//         "Automated builds & tests triggered on code changes using tools like Jenkins, GitLab CI, or Azure Pipelines.",
//       color: "text-sky-500",
//     },
//     {
//       IconComponent: SiDocker,
//       title: "3. Containerization (Docker/Podman)",
//       description:
//         "Applications are packaged into lightweight, portable containers for consistent deployments.",
//       color: "text-blue-600",
//     },
//     {
//       IconComponent: SiTerraform,
//       title: "4. IaC (Terraform)",
//       description:
//         "Infrastructure (Azure/AWS) is provisioned and managed as code for repeatability and versioning.",
//       color: "text-purple-600",
//     },
//     {
//       IconComponent: SiAnsible,
//       title: "5. Configuration Mgmt (Ansible)",
//       description:
//         "Systems and applications are configured consistently across all environments.",
//       color: "text-red-500",
//     },
//     {
//       IconComponent: SiKubernetes,
//       title: "6. Orchestration (Kubernetes & Helm)",
//       description:
//         "Containerized apps deployed, scaled, and managed using Kubernetes, with Helm for packaging.",
//       color: "text-indigo-500",
//     },
//     {
//       IconComponent: SiArgo,
//       title: "7. CD & GitOps (ArgoCD)",
//       description:
//         "Continuous Delivery to environments, with GitOps (ArgoCD) ensuring desired state. (Azure DevOps also used for CD).",
//       color: "text-teal-500",
//     },
//     {
//       IconComponent: SiPrometheus,
//       title: "8. Monitoring (Prometheus/Grafana)",
//       description:
//         "Collect metrics (Prometheus), visualize (Grafana), and analyze logs (Splunk) for operational insights.",
//       color: "text-yellow-500",
//     },
//     {
//       IconComponent: FaShieldAlt,
//       title: "9. Security (Vault/Istio)",
//       description:
//         "Manage secrets with Vault and secure service communication using Istio service mesh.",
//       color: "text-green-600",
//     },
//   ];

//   return (
//     <div
//       className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
//       style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}
//     >
//       <div className="layout-container flex h-full grow flex-col">
//         {/* Header */}
//         <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 px-10 py-4 bg-white shadow-sm sticky top-0 z-50">
//           <div className="flex items-center gap-3 text-slate-700">
//             <div className="relative">
//               <FaDev className="text-3xl text-sky-600 animate-pulse" />{" "}
//               {/* DevOps specific logo */}
//               <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
//             </div>
//             <h2 className="text-slate-900 text-xl font-bold leading-tight tracking-[-0.015em]">
//               Harsha JS{" "}
//               <span className="text-xs bg-sky-100 text-sky-800 px-2 py-1 rounded-full ml-2">
//                 {" "}
//                 DevOps Engineer{" "}
//               </span>
//             </h2>
//           </div>
//           <nav className="flex flex-1 justify-end items-center gap-3 md:gap-4 lg:gap-5">
//             {" "}
//             {/* Adjusted gap slightly */}
//             <a
//               className="text-slate-600 hover:text-slate-900 text-sm font-medium leading-normal transition-colors"
//               href="#skills"
//             >
//               {" "}
//               Skills{" "}
//             </a>
//             <a
//               className="text-slate-600 hover:text-slate-900 text-sm font-medium leading-normal transition-colors"
//               href="#experience"
//             >
//               {" "}
//               Experience{" "}
//             </a>
//             <a
//               className="text-slate-600 hover:text-slate-900 text-sm font-medium leading-normal transition-colors"
//               href="#projects"
//             >
//               {" "}
//               Projects{" "}
//             </a>
//             <a
//               className="text-slate-600 hover:text-slate-900 text-sm font-medium leading-normal transition-colors"
//               href="#devops-workflow"
//             >
//               {" "}
//               Workflow{" "}
//             </a>
//             <a
//               className="text-slate-600 hover:text-slate-900 text-sm font-medium leading-normal transition-colors hidden sm:inline"
//               href="#deployment-architecture"
//             >
//               Architecture
//             </a>{" "}
//             {/* New Link */}
//             <a
//               className="text-slate-600 hover:text-slate-900 text-sm font-medium leading-normal transition-colors"
//               href="#education"
//             >
//               {" "}
//               Education{" "}
//             </a>
//             <a
//               className="text-slate-600 hover:text-slate-900 text-sm font-medium leading-normal transition-colors hidden md:inline"
//               href="#courses"
//             >
//               {" "}
//               Courses{" "}
//             </a>
//             <a
//               className="text-slate-600 hover:text-slate-900 text-sm font-medium leading-normal transition-colors hidden lg:inline"
//               href="#achievements"
//             >
//               {" "}
//               Achievements{" "}
//             </a>
//             <a
//               className="text-slate-600 hover:text-slate-900 text-sm font-medium leading-normal transition-colors hidden md:inline"
//               href="#youtube-channel"
//             >
//               YouTube
//             </a>{" "}
//             {/* New Link */}
//             <a
//               className="flex min-w-[90px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-9 px-4 bg-slate-800 text-white text-sm font-semibold leading-normal tracking-[0.015em] shadow-md hover:bg-slate-900 transition-all duration-300 ease-in-out transform hover:scale-105"
//               href="#contact"
//             >
//               <span className="truncate">Contact</span>
//             </a>
//           </nav>
//         </header>

//         {/* Main Content */}
//         <main className="px-6 md:px-16 lg:px-32 xl:px-40 flex flex-1 justify-center py-12">
//           {" "}
//           {/* Adjusted padding */}
//           <div className="layout-content-container flex flex-col max-w-4xl flex-1 gap-8 md:gap-12">
//             {" "}
//             {/* Adjusted gap */}
//             {/* Hero Section */}
//             <section
//               className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white rounded-xl shadow-lg"
//               id="hero"
//             >
//               <div
//                 className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-36 w-36 md:min-h-48 md:w-48 border-4 border-slate-200 shadow-md"
//                 style={{
//                   backgroundImage:
//                     'url("https://img.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_138676-9487.jpg")',
//                 }}
//               ></div>
//               <div className="flex flex-col items-center md:items-start text-center md:text-left">
//                 <div className="flex items-center gap-3 mb-2">
//                   <h1 className="text-slate-800 text-3xl md:text-4xl font-bold leading-tight tracking-tight">
//                     {" "}
//                     Harsha JS{" "}
//                   </h1>
//                   <div className="flex items-center gap-1">
//                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                     <span className="text-xs text-green-600 font-mono">
//                       {" "}
//                       actively deploying{" "}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2 mb-1">
//                   <p className="text-slate-700 text-lg md:text-xl font-medium leading-normal">
//                     {" "}
//                     Infrastructure Engineer II{" "}
//                   </p>
//                   <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs px-2 py-1 rounded-full font-mono">
//                     {" "}
//                     Cloud & DevOps{" "}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-2 mb-4">
//                   <p className="text-slate-500 text-base leading-normal">
//                     {" "}
//                     Bangalore, India{" "}
//                   </p>
//                   <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded font-mono">
//                     {" "}
//                     IST UTC+5:30{" "}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-2 mb-4 p-2 bg-slate-100 rounded-lg">
//                   <span className="text-xs font-mono text-slate-600">
//                     {" "}
//                     $ whoami{" "}
//                   </span>
//                   <span className="text-xs font-mono text-green-600">
//                     {" "}
//                     devops_enthusiast{" "}
//                   </span>
//                   <div className="w-2 h-4 bg-slate-400 animate-pulse"></div>
//                 </div>
//                 <div
//                   className="flex flex-col sm:flex-row items-center gap-4 mt-4"
//                   id="contact-info-hero"
//                 >
//                   <a
//                     className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
//                     href="tel:+919876543210"
//                   >
//                     <BsTelephoneFill className="text-lg" />
//                     <span className="text-sm">+91-9876543210</span>{" "}
//                     {/* Number from resume */}
//                   </a>
//                   <a
//                     className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
//                     href="mailto:selviharsha@gmail.com"
//                   >
//                     <FaEnvelope className="text-lg" />
//                     <span className="text-sm">selviharsha@gmail.com</span>{" "}
//                     {/* Email from resume */}
//                   </a>
//                   <a
//                     className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
//                     href="https://linkedin.com/in/harsha-js"
//                     rel="noopener noreferrer"
//                     target="_blank"
//                   >
//                     <FaLinkedin size={16} />
//                     <span className="text-sm">linkedin.com/in/harsha-js</span>
//                   </a>
//                 </div>
//               </div>
//             </section>
//             {/* Skills Section */}
//             <section className="p-8 bg-white rounded-xl shadow-lg" id="skills">
//               <div className="flex items-center gap-3 mb-6">
//                 <h2 className="text-slate-800 text-2xl font-bold leading-tight tracking-tight">
//                   {" "}
//                   Technical Skills{" "}
//                 </h2>
//                 <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-mono">
//                   {" "}
//                   config: loaded ✅{" "}
//                 </span>
//               </div>
//               <div className="mb-4 p-3 bg-slate-900 rounded-lg">
//                 <div className="flex items-center gap-2 mb-2">
//                   <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                   <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                   <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                   <span className="text-green-400 text-xs font-mono ml-2">
//                     {" "}
//                     harsha@devops-rig:~${" "}
//                   </span>
//                 </div>
//                 <div className="text-green-400 font-mono text-sm">
//                   <div className="animate-pulse">./list_skills --verbose</div>
//                   <div className="text-gray-400 text-xs mt-1">
//                     {" "}
//                     🛠️ Core competencies and toolchain mastery{" "}
//                   </div>
//                 </div>
//               </div>
//               <div className="flex gap-3 flex-wrap">
//                 {skillsList.map((skill) => (
//                   <div key={skill.name} className="group relative">
//                     <div className="flex h-9 items-center justify-center gap-x-2 rounded-lg bg-slate-100 text-slate-700 px-4 py-1.5 shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-pointer">
//                       <p className="text-sm font-medium leading-normal">
//                         {" "}
//                         {skill.name}{" "}
//                       </p>
//                     </div>
//                     <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
//                       <div className="font-mono">
//                         {" "}
//                         Proficiency: {skill.proficiency}{" "}
//                       </div>
//                       {skill.note && (
//                         <div className="text-green-400">Note: {skill.note}</div>
//                       )}
//                       <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>
//             {/* Experience Section */}
//             <section
//               className="p-8 bg-white rounded-xl shadow-lg"
//               id="experience"
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <h2 className="text-slate-800 text-2xl font-bold leading-tight tracking-tight">
//                   {" "}
//                   Professional Experience{" "}
//                 </h2>
//                 <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-mono">
//                   {" "}
//                   git log --graph{" "}
//                 </span>
//               </div>
//               <div className="space-y-8">
//                 {experiences.map((exp, index) => (
//                   <div
//                     key={index}
//                     className={`flex gap-4 items-start border-l-4 ${
//                       exp.statusColor === "green"
//                         ? "border-green-500"
//                         : "border-blue-500"
//                     } pl-6 py-2 relative`}
//                   >
//                     <div
//                       className={`absolute -left-3 top-5 w-5 h-5 ${
//                         exp.statusColor === "green"
//                           ? "bg-green-500"
//                           : "bg-blue-500"
//                       } rounded-full border-4 border-white shadow-md`}
//                     ></div>
//                     {/* Company Logo */}
//                     <div className="flex flex-1 flex-col justify-center">
//                       <div className="flex items-center gap-3 mb-1">
//                         <h3 className="text-slate-800 text-lg font-semibold leading-normal">
//                           {" "}
//                           {exp.company}{" "}
//                         </h3>
//                         <span
//                           className={`text-xs ${
//                             exp.statusColor === "green"
//                               ? "bg-green-100 text-green-800"
//                               : "bg-blue-100 text-blue-800"
//                           } px-2 py-1 rounded-full font-mono`}
//                         >
//                           {" "}
//                           {exp.status}{" "}
//                         </span>
//                       </div>
//                       <p className="text-slate-600 text-sm font-medium leading-normal">
//                         {" "}
//                         {exp.role}{" "}
//                       </p>
//                       <p className="text-slate-500 text-xs font-normal leading-normal mb-2">
//                         {" "}
//                         {exp.dates}{" "}
//                       </p>
//                       <ul className="list-disc list-inside text-slate-600 text-sm space-y-1 marker:text-slate-400">
//                         {exp.description.map((point, i) => (
//                           <li key={i}>{point}</li>
//                         ))}
//                       </ul>
//                       <div className="mt-3 flex gap-2 flex-wrap">
//                         {exp.tags.map((tag) => (
//                           <span
//                             key={tag}
//                             className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded font-mono"
//                           >
//                             {" "}
//                             {tag}{" "}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>
//             {/* Projects Section */}
//             <section
//               className="p-8 bg-white rounded-xl shadow-lg"
//               id="projects"
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <h2 className="text-slate-800 text-2xl font-bold leading-tight tracking-tight">
//                   {" "}
//                   Key Projects{" "}
//                 </h2>
//                 <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-mono">
//                   {" "}
//                   kubectl get deployments{" "}
//                 </span>
//               </div>
//               <div className="space-y-8">
//                 {projects.map((project) => (
//                   <div
//                     key={project.title}
//                     className="flex flex-col md:flex-row items-start justify-between gap-6 p-6 border border-slate-200 rounded-lg hover:shadow-xl transition-all duration-300 bg-slate-50/50 hover:bg-gradient-to-r hover:from-blue-50/30 hover:to-purple-50/30"
//                   >
//                     <div className="flex flex-col gap-1.5 flex-[2_2_0px]">
//                       <div className="flex items-center gap-2">
//                         <p className="text-slate-500 text-xs font-semibold leading-normal uppercase tracking-wider">
//                           {" "}
//                           {project.category}{" "}
//                         </p>
//                         <div className="flex gap-1 items-center">
//                           <div
//                             className={`w-2 h-2 ${
//                               project.status === "production" ||
//                               project.status === "active-drills"
//                                 ? "bg-green-500"
//                                 : "bg-blue-500"
//                             } rounded-full animate-pulse`}
//                           ></div>
//                           <span
//                             className={`text-xs ${
//                               project.status === "production" ||
//                               project.status === "active-drills"
//                                 ? "text-green-600"
//                                 : "text-blue-600"
//                             } font-mono`}
//                           >
//                             {" "}
//                             {project.status}{" "}
//                           </span>
//                         </div>
//                       </div>
//                       <div className="flex items-center gap-3">
//                         <h3 className="text-slate-800 text-xl font-bold leading-tight">
//                           {" "}
//                           {project.title}{" "}
//                         </h3>
//                         <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-mono">
//                           {" "}
//                           💡 {project.stars}{" "}
//                         </span>
//                       </div>
//                       <p className="text-slate-600 text-sm font-normal leading-normal">
//                         {" "}
//                         {project.description}{" "}
//                       </p>
//                       <div className="flex gap-2 mt-2 flex-wrap">
//                         {project.tags.map((tag) => (
//                           <span
//                             key={tag}
//                             className="text-xs bg-sky-100 text-sky-800 px-2 py-1 rounded font-mono"
//                           >
//                             {" "}
//                             {tag}{" "}
//                           </span>
//                         ))}
//                       </div>
//                       <div className="mt-3 p-2 bg-slate-900 rounded text-green-400 font-mono text-xs">
//                         {" "}
//                         {project.terminalCmd}
//                         <br />{" "}
//                         <span className="text-gray-400">
//                           {project.terminalMsg}
//                         </span>{" "}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>
//             {/* DevOps Workflow Section */}
//             <section
//               className="p-8 bg-white rounded-xl shadow-lg"
//               id="devops-workflow"
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <h2 className="text-slate-800 text-2xl font-bold leading-tight tracking-tight">
//                   {" "}
//                   My DevOps Workflow{" "}
//                 </h2>
//                 <span className="text-sm bg-teal-100 text-teal-800 px-3 py-1 rounded-full font-mono">
//                   {" "}
//                   pipeline: active 🚀{" "}
//                 </span>
//               </div>
//               <p className="text-slate-600 text-base mb-6">
//                 {" "}
//                 A typical CI/CD and operational workflow I implement or
//                 contribute to, leveraging key tools from my skillset:{" "}
//               </p>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {devOpsWorkflowSteps.map((step, index) => {
//                   const { IconComponent, title, description, color } = step;
//                   return (
//                     <div
//                       key={index}
//                       className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:shadow-md transition-shadow flex flex-col"
//                     >
//                       <div className="flex items-center gap-3 mb-2">
//                         <IconComponent
//                           className={`${color} text-3xl flex-shrink-0`}
//                         />
//                         <h3 className="text-slate-700 text-md font-semibold">
//                           {title}
//                         </h3>
//                       </div>
//                       <p className="text-slate-600 text-sm flex-grow">
//                         {description}
//                       </p>
//                     </div>
//                   );
//                 })}
//               </div>
//               <div className="mt-6 p-3 bg-slate-900 rounded-lg">
//                 <div className="flex items-center gap-2 mb-2">
//                   <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                   <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                   <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                   <span className="text-green-400 text-xs font-mono ml-2">
//                     {" "}
//                     harsha@automation-server:~${" "}
//                   </span>
//                 </div>
//                 <div className="text-green-400 font-mono text-sm">
//                   <div>cat /etc/motd</div>
//                   <div className="text-gray-300 mt-1">
//                     {" "}
//                     -----------------------------------------------------
//                     <br /> This workflow leverages key DevOps tools and
//                     practices for <br /> automation, scalability, and
//                     reliability in software delivery.
//                     <br /> -----------------------------------------------------{" "}
//                   </div>
//                 </div>
//               </div>
//             </section>
//             {/* Portfolio Deployment Architecture Section */}
//             <section
//               className="p-8 bg-white rounded-xl shadow-lg"
//               id="deployment-architecture"
//             >
//               <h2 className="text-slate-800 text-2xl font-bold leading-tight tracking-tight mb-6">
//                 Portfolio Deployment Architecture (Vercel)
//               </h2>
//               <p className="text-slate-600 text-base mb-6">
//                 This portfolio website itself is deployed using a modern,
//                 streamlined CI/CD process leveraging Vercel:
//               </p>
//               <div className="flex flex-col md:flex-row items-center justify-around gap-4 p-6 bg-slate-50 rounded-lg border border-slate-200">
//                 <div className="flex flex-col items-center text-center">
//                   <FaGithub className="text-5xl text-slate-700 mb-2" />
//                   <p className="font-semibold text-slate-700">1. Code Push</p>
//                   <p className="text-xs text-slate-500">To GitHub Repository</p>
//                 </div>
//                 <FaArrowRight className="text-3xl text-slate-400 hidden md:block" />
//                 <div className="md:hidden my-2 border-b-2 border-dashed border-slate-300 w-1/2"></div>{" "}
//                 {/* Mobile separator */}
//                 <div className="flex flex-col items-center text-center">
//                   <SiVercel className="text-5xl text-black mb-2" />
//                   <p className="font-semibold text-slate-700">
//                     2. Vercel CI/CD
//                   </p>
//                   <p className="text-xs text-slate-500">Auto Build & Deploy</p>
//                 </div>
//                 <FaArrowRight className="text-3xl text-slate-400 hidden md:block" />
//                 <div className="md:hidden my-2 border-b-2 border-dashed border-slate-300 w-1/2"></div>{" "}
//                 {/* Mobile separator */}
//                 <div className="flex flex-col items-center text-center">
//                   <FaCloudUploadAlt className="text-5xl text-sky-500 mb-2" />
//                   <p className="font-semibold text-slate-700">3. Deployment</p>
//                   <p className="text-xs text-slate-500">Static Assets Hosted</p>
//                 </div>
//                 <FaArrowRight className="text-3xl text-slate-400 hidden md:block" />
//                 <div className="md:hidden my-2 border-b-2 border-dashed border-slate-300 w-1/2"></div>{" "}
//                 {/* Mobile separator */}
//                 <div className="flex flex-col items-center text-center">
//                   <FaGlobeAmericas className="text-5xl text-green-500 mb-2" />
//                   <p className="font-semibold text-slate-700">4. Global CDN</p>
//                   <p className="text-xs text-slate-500">
//                     Fast Worldwide Access
//                   </p>
//                 </div>
//               </div>
//               <ul className="list-disc list-inside text-slate-600 text-sm space-y-1 mt-6 marker:text-sky-500">
//                 <li>Code is hosted on GitHub.</li>
//                 <li>
//                   Pushing to the main branch automatically triggers Vercel's
//                   build process.
//                 </li>
//                 <li>
//                   Vercel builds the React application, optimizes static assets.
//                 </li>
//                 <li>
//                   The site is deployed globally via Vercel's Edge Network (CDN)
//                   for low latency.
//                 </li>
//                 <li>
//                   Features like automatic HTTPS, custom domains, and preview
//                   deployments are managed by Vercel.
//                 </li>
//               </ul>
//             </section>
//             {/* Education Section */}
//             <section
//               className="p-8 bg-white rounded-xl shadow-lg"
//               id="education"
//             >
//               <h2 className="text-slate-800 text-2xl font-bold leading-tight tracking-tight mb-6">
//                 {" "}
//                 Education{" "}
//               </h2>
//               <div className="space-y-4">
//                 {education.map((edu, index) => (
//                   <div
//                     key={index}
//                     className="flex gap-4 border-l-4 border-slate-400 pl-4 py-2"
//                   >
//                     <div className="flex flex-1 flex-col justify-center">
//                       <h3 className="text-slate-800 text-lg font-semibold leading-normal">
//                         {" "}
//                         {edu.degree}{" "}
//                       </h3>
//                       <p className="text-slate-600 text-sm font-normal leading-normal">
//                         {" "}
//                         {edu.institution}{" "}
//                       </p>
//                       <p className="text-slate-500 text-xs font-normal leading-normal">
//                         {" "}
//                         {edu.year}{" "}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>
//             {/* Courses Section */}
//             <section className="p-8 bg-white rounded-xl shadow-lg" id="courses">
//               <h2 className="text-slate-800 text-2xl font-bold leading-tight tracking-tight mb-6">
//                 {" "}
//                 Key Trainings & Courses{" "}
//               </h2>
//               <ul className="space-y-2 list-disc list-inside text-slate-700 marker:text-sky-500 columns-1 md:columns-2">
//                 {courses.map((course, index) => (
//                   <li
//                     key={index}
//                     className="text-sm font-normal leading-normal"
//                   >
//                     {" "}
//                     {course}{" "}
//                   </li>
//                 ))}
//               </ul>
//             </section>
//             {/* Achievements Section - Gamified */}
//             <section
//               className="p-8 bg-white rounded-xl shadow-lg"
//               id="achievements"
//             >
//               <h2 className="text-slate-800 text-2xl font-bold leading-tight tracking-tight mb-6 text-center">
//                 {" "}
//                 Achievements & Recognitions{" "}
//               </h2>
//               <div className="space-y-6">
//                 {professionalAchievements.map((ach, index) => (
//                   <div
//                     key={index}
//                     className="flex items-start gap-4 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg shadow-sm hover:shadow-md transition-shadow"
//                   >
//                     <div className="flex-shrink-0 mt-1">{ach.icon}</div>
//                     <div>
//                       <h3 className="text-slate-800 text-lg font-semibold leading-tight">
//                         {" "}
//                         {ach.title}{" "}
//                       </h3>
//                       <p className="text-slate-500 text-xs font-medium mb-1">
//                         {ach.date}
//                       </p>
//                       <p className="text-slate-600 text-sm">
//                         {ach.description}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>
//             {/* YouTube Channel Section */}
//             <section
//               className="p-8 bg-white rounded-xl shadow-lg"
//               id="youtube-channel"
//             >
//               <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
//                 <FaYoutube className="text-6xl text-red-600" />
//                 <div>
//                   <h2 className="text-slate-800 text-2xl font-bold leading-tight tracking-tight">
//                     YouTube Channel & Content
//                   </h2>
//                   <p className="text-slate-600 text-base">
//                     Sharing knowledge and insights on DevOps, Cloud Computing,
//                     and Software Engineering.
//                   </p>
//                 </div>
//               </div>
//               <div className="text-center md:text-left mb-6">
//                 <a
//                   href="https://www.youtube.com/@harshaselvi"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors shadow hover:shadow-md"
//                 >
//                   Visit @harshaselvi on YouTube
//                   <FaArrowRight />
//                 </a>
//               </div>
//               <h3 className="text-slate-700 text-xl font-semibold mb-4">
//                 Channel Highlights & Achievements:
//               </h3>
//               <div className="space-y-4">
//                 {youtubeAchievements.map((ach, index) => (
//                   <div
//                     key={index}
//                     className="flex items-start gap-3 p-3 bg-red-50 border-l-4 border-red-400 rounded-r-md shadow-sm"
//                   >
//                     <div className="flex-shrink-0 mt-0.5">{ach.icon}</div>{" "}
//                     {/* Adjusted icon margin */}
//                     <div>
//                       <h4 className="text-slate-800 text-md font-semibold leading-tight">
//                         {" "}
//                         {ach.title}{" "}
//                       </h4>
//                       {ach.date && (
//                         <p className="text-slate-500 text-xs font-medium mb-0.5">
//                           {ach.date}
//                         </p>
//                       )}
//                       <p className="text-slate-600 text-sm">
//                         {ach.description}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//                 {/* ** Add more specific YouTube achievements below as list items or similar styled divs ** */}
//                 {/* Example:
//                     <div className="flex items-start gap-3 p-3 bg-red-50 border-l-4 border-red-400 rounded-r-md shadow-sm">
//                         <FaTrophy className="text-red-500 text-xl mt-0.5" />
//                         <div>
//                              <h4 className="text-slate-800 text-md font-semibold leading-tight">Crossed 5,000 Subscribers</h4>
//                              <p className="text-slate-600 text-sm">Focused on creating valuable Kubernetes tutorials.</p>
//                         </div>
//                     </div>
//                     */}
//               </div>
//             </section>
//             {/* Contact Section */}
//             <section className="p-8 bg-white rounded-xl shadow-lg" id="contact">
//               <h2 className="text-slate-800 text-2xl font-bold leading-tight tracking-tight mb-8 text-center">
//                 {" "}
//                 Get in Touch{" "}
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <a
//                   href="tel:+919876543210"
//                   className="block p-6 bg-slate-50 hover:bg-slate-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 text-center group"
//                 >
//                   <div className="flex flex-col items-center">
//                     <div className="flex-shrink-0 bg-blue-100 text-blue-600 group-hover:bg-blue-500 group-hover:text-white rounded-full p-4 inline-flex transition-colors duration-300">
//                       <FaPhoneAlt size={24} />
//                     </div>
//                     <div className="mt-3">
//                       <h4 className="text-slate-800 text-lg font-semibold">
//                         Phone
//                       </h4>
//                       <p className="text-slate-600 text-sm group-hover:text-blue-600 transition-colors duration-300">
//                         {" "}
//                         +91-9876543210{" "}
//                       </p>{" "}
//                       {/* From resume */}
//                     </div>
//                   </div>
//                 </a>
//                 <a
//                   href="mailto:selviharsha@gmail.com"
//                   className="block p-6 bg-slate-50 hover:bg-slate-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 text-center group"
//                 >
//                   <div className="flex flex-col items-center">
//                     <div className="flex-shrink-0 bg-green-100 text-green-600 group-hover:bg-green-500 group-hover:text-white rounded-full p-4 inline-flex transition-colors duration-300">
//                       <FaEnvelope size={24} />
//                     </div>
//                     <div className="mt-3">
//                       <h4 className="text-slate-800 text-lg font-semibold">
//                         Email
//                       </h4>
//                       <p className="text-slate-600 text-sm group-hover:text-green-600 transition-colors duration-300">
//                         {" "}
//                         selviharsha@gmail.com{" "}
//                       </p>{" "}
//                       {/* From resume */}
//                     </div>
//                   </div>
//                 </a>
//                 <a
//                   href="https://linkedin.com/in/harsha-js"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                   className="block p-6 bg-slate-50 hover:bg-slate-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 text-center group"
//                 >
//                   <div className="flex flex-col items-center">
//                     <div className="flex-shrink-0 bg-sky-100 text-sky-600 group-hover:bg-sky-500 group-hover:text-white rounded-full p-4 inline-flex transition-colors duration-300">
//                       <FaLinkedin size={24} />
//                     </div>
//                     <div className="mt-3">
//                       <h4 className="text-slate-800 text-lg font-semibold">
//                         LinkedIn
//                       </h4>
//                       <p className="text-slate-600 text-sm group-hover:text-sky-600 transition-colors duration-300">
//                         {" "}
//                         linkedin.com/in/harsha-js{" "}
//                       </p>
//                     </div>
//                   </div>
//                 </a>
//               </div>
//             </section>
//           </div>
//         </main>

//         {/* Footer */}
//         <footer className="text-center py-8 border-t border-slate-200 bg-white">
//           <div className="flex flex-col items-center gap-3">
//             <div className="flex items-center gap-4 text-sm text-slate-600">
//               <div className="flex items-center gap-2">
//                 <span className="font-mono">
//                   {" "}
//                   © {new Date().getFullYear()} Harsha JS{" "}
//                 </span>
//                 <span className="text-xs bg-slate-100 px-2 py-1 rounded font-mono">
//                   {" "}
//                   MIT License{" "}
//                 </span>
//               </div>
//             </div>
//             <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs text-slate-500">
//               <div className="flex items-center gap-1">
//                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                 <span className="font-mono">
//                   {" "}
//                   Server Status: All systems operational{" "}
//                 </span>
//               </div>
//               <span className="font-mono hidden md:inline">|</span>
//               <span className="font-mono">Last updated: {lastUpdatedDate}</span>
//               <span className="font-mono hidden md:inline">|</span>
//               <span className="font-mono">☕ Powered by coffee & CI/CD</span>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

import React from "react";
import {
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaGitAlt,
  FaShieldAlt,
  FaDev, // For DevOps title logo
  FaTrophy, // For gamified achievements
  FaYoutube, // For YouTube
  FaGithub, // For architecture diagram
  FaCloudUploadAlt, // For architecture diagram
  FaGlobeAmericas, // For architecture diagram
  FaArrowRight, // For architecture diagram flow
} from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs"; // BsGearWideConnected removed as FaDev is used
import {
  SiAnsible,
  SiTerraform,
  SiJenkins,
  SiKubernetes,
  SiPrometheus,
  SiDocker,
  SiArgo,
  SiVercel, // For Vercel in architecture
} from "react-icons/si";

const Portfolio = () => {
  const lastUpdatedDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const skillsList = [
    {
      name: "Azure",
      proficiency: "Proficient",
      note: "Primary cloud for IaaS/PaaS solutions",
    },
    {
      name: "AWS",
      proficiency: "Familiar",
      note: "Experience with core services (EC2, S3, RDS)",
    },
    {
      name: "Ansible",
      proficiency: "Proficient",
      note: "Automating system configuration & deployments",
    },
    {
      name: "Terraform",
      proficiency: "Familiar",
      note: "Infrastructure as Code provisioning",
    },
    {
      name: "Jenkins",
      proficiency: "Proficient",
      note: "Building and managing complex CI/CD pipelines",
    },
    {
      name: "GitLab CI (Runner)",
      proficiency: "Proficient",
      note: "Integrated CI/CD within GitLab ecosystem",
    },
    {
      name: "Azure DevOps",
      proficiency: "Proficient",
      note: "End-to-end DevOps lifecycle management",
    },
    {
      name: "ArgoCD",
      proficiency: "Familiar",
      note: "GitOps continuous delivery tool",
    },
    {
      name: "Docker",
      proficiency: "Proficient",
      note: "Containerizing applications for portability",
    },
    {
      name: "Podman",
      proficiency: "Proficient",
      note: "Daemonless container engine experience",
    },
    {
      name: "Kubernetes",
      proficiency: "Proficient",
      note: "Deploying and managing containerized apps at scale",
    },
    {
      name: "Helm",
      proficiency: "Familiar",
      note: "Managing Kubernetes applications with charts",
    },
    {
      name: "Prometheus",
      proficiency: "Proficient",
      note: "Metrics collection and time-series database",
    },
    {
      name: "Grafana",
      proficiency: "Proficient",
      note: "Data visualization and dashboarding",
    },
    {
      name: "Splunk",
      proficiency: "Proficient",
      note: "Log management and analysis",
    },
    {
      name: "Bash",
      proficiency: "Proficient",
      note: "Automation scripts for Linux environments",
    },
    {
      name: "Python",
      proficiency: "Basic",
      note: "Scripting for automation and tooling",
    },
    {
      name: "Linux",
      proficiency: "Proficient",
      note: "System administration and troubleshooting",
    },
    { name: "Vault", proficiency: "Familiar", note: "Secrets management" },
    {
      name: "Istio",
      proficiency: "Familiar",
      note: "Service mesh for microservices security",
    },
    {
      name: "GitOps",
      proficiency: "Familiar",
      note: "Declarative continuous delivery model",
    },
    {
      name: "CI/CD",
      proficiency: "Proficient",
      note: "Implementing robust CI/CD practices",
    },
  ];

  const experiences = [
    {
      company: "Walmart Global Tech",
      role: "Infrastructure Engineer II",
      dates: "Aug 2024 – Present",
      status: "currently deployed",
      statusColor: "green",
      description: [
        "Acted as the primary escalation point for P1–P3 incidents, resolving 95% of 50+ monthly issues within SLA through rapid triage and root cause analysis, ensuring minimal disruption.",
        "Deployed and managed containerized applications using Podman, Docker, and Kubernetes, implementing auto-scaling and rolling updates to achieve 99.99% availability.",
        "Developed Bash and Python scripts to automate monitoring, deployment, and incident response tasks, eliminating 70% of manual effort and improving workflow efficiency.",
        "Proactively monitored 100+ services using Prometheus and Grafana, fine-tuning alerts to reduce false positives by 30% and resolving bottlenecks to maintain 99.9% uptime.",
        "Facilitated 10+ major incident bridges, collaborating with engineering, product, and QA teams to reduce MTTR by 25% through clear communication and documented postmortems.",
        "Contributed to disaster recovery planning, validating backups and resiliency for 5+ drills, ensuring 100% recovery success during simulated outages.",
        "Communicated incident updates to stakeholders, enhancing transparency and alignment during high-severity incidents, improving team coordination by 20%.",
      ],
      tags: [
        "Podman",
        "Docker",
        "Kubernetes",
        "Bash",
        "Python",
        "Prometheus",
        "Grafana",
        "Incident Mgmt",
      ],
    },
    {
      company: "NSE IT",
      role: "DevOps Engineer",
      dates: "Aug 2022 – Sept 2024",
      status: "previous-commit",
      statusColor: "blue",
      description: [
        "Automated deployment of applications using Kubernetes, leveraging auto-scaling and service discovery to maintain 99.9% availability and support zero-downtime updates.",
        "Designed and integrated CI/CD pipelines with Jenkins, GitLab CI, SonarQube, and Sonatype Nexus, reducing deployment time by 50% and build failures by 40%.",
        "Implemented Poll-SCM triggers in Jenkins, automating 200+ hourly builds on GitLab commits, optimizing resource efficiency and ensuring zero-error artifact uploads.",
        "Independently resolved client requirements through problem-solving, delivering 100% on-time deployment workflows and code quality checks for 10+ clients.",
        "Collaborated with teams to troubleshoot production issues, resolving 90% of deployment failures within 1 hour, ensuring high availability.",
      ],
      tags: [
        "Kubernetes",
        "Jenkins",
        "GitLab CI",
        "SonarQube",
        "Nexus",
        "CI/CD Automation",
        "Ansible",
      ],
    },
  ];

  const projects = [
    {
      title: "Observability & Alerting Enhancement",
      category: "Professional Project (Walmart)",
      status: "production",
      stars: "Critical Infra",
      description:
        "Fine-tuned Prometheus alerts for 60+ microservices, reducing alert noise by 35% and improving on-call efficiency. Built Grafana dashboards, cutting MTTD by 25% for 20+ services through actionable insights. Conducted alert reviews with platform teams, boosting incident detection accuracy by 20%. Suppressed low-impact alerts, enhancing response efficiency by 30% for high-priority incidents.",
      tags: [
        "Prometheus",
        "Grafana",
        "Microservices",
        "Alerting",
        "Monitoring",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1580983216274-a001b9589fda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9uaXRvcmluZyUyMGRhc2hib2FyZHxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=600&q=60",
      terminalCmd:
        "$ promql query 'sum(rate(http_requests_total[5m])) by (job)'",
      terminalMsg: "✅ Query successful • Displaying metrics",
    },
    {
      title: "Disaster Recovery & Incident Management",
      category: "Professional Project (Walmart)",
      status: "active-drills",
      stars: "High Availability",
      description:
        "Participated in 6+ disaster recovery simulations, ensuring 100% recovery for 10+ critical services. Managed P1/P2/P3 incidents, reducing MTTR by 20% through coordinated updates and communication. Created runbooks from incident learnings, improving response efficiency by 30% for 15+ cases. Streamlined on-call processes, enhancing operational readiness by 25%.",
      tags: [
        "Disaster Recovery",
        "Incident Management",
        "P1/P2/P3",
        "Runbooks",
        "Resiliency",
      ],
      terminalCmd: "$ ./run_dr_simulation.sh --service critical-app",
      terminalMsg: "🔄 DR test in progress... Recovery successful!",
    },
    {
      title: "IB Deployment Automation",
      category: "Professional Project (NSE IT)",
      status: "completed",
      stars: "GitLab Migration",
      description:
        "Automated CI/CD pipelines using GitLab and Kubernetes, deploying 12+ applications with auto-scaling, reducing downtime by 50%. Implemented rolling updates and service discovery, ensuring 99.9% availability across cloud environments.",
      tags: [
        "CI/CD",
        "GitLab",
        "Migration",
        "Kubernetes",
        "Auto-scaling",
        "Deployment",
      ],
      terminalCmd: "$ kubectl apply -f deployment.yaml --namespace=ib-prod",
      terminalMsg: "🚀 Deployment scaled successfully.",
    },
    {
      title: "PXIL Project CI/CD Pipeline",
      category: "Professional Project (NSE IT)",
      status: "archived",
      stars: "Reliable Workflows",
      description:
        "Built CI/CD pipelines with Jenkins, SonarQube, and Nexus, cutting deployment time by 50%. Automated hourly builds via Poll-SCM, ensuring 100% reliable workflows for the PXIL project.",
      tags: ["Jenkins", "SonarQube", "Nexus", "Poll-SCM", "CI/CD", "Ansible"],
      terminalCmd: "$ jenkins-cli build PXIL_Pipeline -p BRANCH=main",
      terminalMsg: "✅ Build triggered • Artifacts pushed to Nexus.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Anna University",
      year: "Graduated June 2022",
    },
    {
      degree: "XII (Higher Secondary Certificate)",
      institution: "Malar Matriculation Higher Secondary School",
      year: "Completed 2018",
    },
    {
      degree: "X (Secondary School Certificate)",
      institution: "RN Oxford Matriculation School",
      year: "Completed 2016",
    },
  ];

  const courses = [
    "Linux Foundation",
    "Kubernetes",
    "Docker Training",
    "Ansible Basics to Advanced",
    "Jenkins",
    "Bash Scripting",
    "Git",
    "Azure Administrator",
    "Azure DevOps",
    "Python",
    "Terraform Fundamentals",
    "ArgoCD Essentials",
    "Helm Basics",
    "Vault Security",
    "Istio Service Mesh",
  ];

  const professionalAchievements = [
    {
      title: "Bravo Award for Operational Excellence",
      date: "April 2025",
      description:
        "Received for automating the alert onboarding process at Walmart, significantly reducing manual effort and improving incident response efficiency.",
      icon: <FaTrophy className="text-yellow-500 text-3xl" />,
    },
    {
      title: "NSE IT Digital Recognition",
      date: "December 2023",
      description:
        "Achieved for independently handling project work at NSE IT, integrating new components into the DevOps pipeline, and enhancing its capabilities.",
      icon: <FaTrophy className="text-yellow-500 text-3xl" />,
    },
  ];

  const youtubeAchievements = [
    {
      title: "Reached 1,269 Subscribers",
      date: "May 2025",
      description:
        "Growing a community focused on DevOps and Cloud technologies.",
      icon: <FaTrophy className="text-red-500 text-3xl" />,
    },
    {
      title: "Published 189 Videos",
      date: "On-going",
      description:
        "Creating educational content on DevOps practices, tools, and workflows.",
      icon: <FaTrophy className="text-red-500 text-3xl" />,
    },
  ];

  const devOpsWorkflowSteps = [
    {
      IconComponent: FaGitAlt,
      title: "1. Version Control (Git)",
      description:
        "Developers commit code to Git repositories, enabling collaboration and history tracking.",
      color: "text-orange-500",
    },
    {
      IconComponent: SiJenkins,
      title: "2. CI (Jenkins/GitLab/Azure DevOps)",
      description:
        "Automated builds & tests triggered on code changes using tools like Jenkins, GitLab CI, or Azure Pipelines.",
      color: "text-sky-500",
    },
    {
      IconComponent: SiDocker,
      title: "3. Containerization (Docker/Podman)",
      description:
        "Applications are packaged into lightweight, portable containers for consistent deployments.",
      color: "text-blue-600",
    },
    {
      IconComponent: SiTerraform,
      title: "4. IaC (Terraform)",
      description:
        "Infrastructure (Azure/AWS) is provisioned and managed as code for repeatability and versioning.",
      color: "text-purple-600",
    },
    {
      IconComponent: SiAnsible,
      title: "5. Configuration Mgmt (Ansible)",
      description:
        "Systems and applications are configured consistently across all environments.",
      color: "text-red-500",
    },
    {
      IconComponent: SiKubernetes,
      title: "6. Orchestration (Kubernetes & Helm)",
      description:
        "Containerized apps deployed, scaled, and managed using Kubernetes, with Helm for packaging.",
      color: "text-indigo-500",
    },
    {
      IconComponent: SiArgo,
      title: "7. CD & GitOps (ArgoCD)",
      description:
        "Continuous Delivery to environments, with GitOps (ArgoCD) ensuring desired state. (Azure DevOps also used for CD).",
      color: "text-teal-500",
    },
    {
      IconComponent: SiPrometheus,
      title: "8. Monitoring (Prometheus/Grafana)",
      description:
        "Collect metrics (Prometheus), visualize (Grafana), and analyze logs (Splunk) for operational insights.",
      color: "text-yellow-500",
    },
    {
      IconComponent: FaShieldAlt,
      title: "9. Security (Vault/Istio)",
      description:
        "Manage secrets with Vault and secure service communication using Istio service mesh.",
      color: "text-green-600",
    },
  ];

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 px-4 sm:px-6 md:px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
          <div className="flex items-center gap-3 text-slate-700">
            <div className="relative">
              <FaDev className="text-3xl text-sky-600 animate-pulse" />{" "}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            <h2 className="text-slate-900 text-lg sm:text-xl font-bold leading-tight tracking-[-0.015em]">
              Harsha JS{" "}
              <span className="text-xs bg-sky-100 text-sky-800 px-2 py-1 rounded-full ml-1 sm:ml-2">
                DevOps Engineer
              </span>
            </h2>
          </div>
          <nav className="hidden md:flex flex-wrap justify-end items-center gap-2 sm:gap-3 md:gap-4">
            <a
              className="text-slate-600 hover:text-slate-900 text-sm font-medium leading-normal transition-colors"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="text-slate-600 hover:text-slate-900 text-sm font-medium leading-normal transition-colors"
              href="#experience"
            >
              Experience
            </a>
            <a
              className="text-slate-600 hover:text-slate-900 text-sm font-medium leading-normal transition-colors"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="text-slate-600 hover:text-slate-900 text-sm font-medium leading-normal transition-colors hidden md:inline"
              href="#education"
            >
              Education
            </a>
            <a
              className="text-slate-600 hover:text-slate-900 text-sm font-medium leading-normal transition-colors hidden md:inline"
              href="#courses"
            >
              Courses
            </a>
            <a
              className="text-slate-600 hover:text-slate-900 text-sm font-medium leading-normal transition-colors hidden lg:inline"
              href="#achievements"
            >
              Achievements
            </a>
            <a
              className="flex min-w-[90px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-9 px-4 bg-slate-800 text-white text-sm font-semibold leading-normal tracking-[0.015em] shadow-md hover:bg-slate-900 transition-all duration-300 ease-in-out transform hover:scale-105"
              href="#contact"
            >
              <span className="truncate">Contact</span>
            </a>
          </nav>
        </header>

        {/* Main Content */}
        <main className="px-4 sm:px-6 md:px-8 flex flex-1 justify-center py-8 sm:py-12">
          <div className="layout-content-container flex flex-col max-w-4xl flex-1 gap-8 md:gap-12">
            {/* Hero Section */}
            <section
              className="flex flex-col md:flex-row items-center gap-6 md:gap-8 p-6 sm:p-8 bg-white rounded-xl shadow-lg"
              id="hero"
            >
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-36 h-36 md:w-48 md:h-48 border-4 border-slate-200 shadow-md flex-shrink-0"
                style={{
                  backgroundImage:
                    'url("https://img.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_138676-9487.jpg")',
                }}
              ></div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-slate-800 text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                    Harsha JS
                  </h1>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600 font-mono">
                      actively deploying
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-1">
                  <p className="text-slate-700 text-lg md:text-xl font-medium leading-normal">
                    Infrastructure Engineer II
                  </p>
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs px-2 py-1 rounded-full font-mono">
                    Cloud & DevOps
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-4">
                  <p className="text-slate-500 text-base leading-normal">
                    Bangalore, India
                  </p>
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded font-mono">
                    IST UTC+5:30
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-4 p-2 bg-slate-100 rounded-lg">
                  <span className="text-xs font-mono text-slate-600">
                    $ whoami
                  </span>
                  <span className="text-xs font-mono text-green-600">
                    devops_enthusiast
                  </span>
                  <div className="w-2 h-4 bg-slate-400 animate-pulse"></div>
                </div>
                <div
                  className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-4"
                  id="contact-info-hero"
                >
                  <a
                    className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
                    href="tel:+919876543210"
                  >
                    <BsTelephoneFill className="text-lg" />
                    <span className="text-sm">+91-9876543210</span>
                  </a>
                  <a
                    className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
                    href="mailto:selviharsha@gmail.com"
                  >
                    <FaEnvelope className="text-lg" />
                    <span className="text-sm">selviharsha@gmail.com</span>
                  </a>
                  <a
                    className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
                    href="https://linkedin.com/in/harsha-js"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaLinkedin size={16} />
                    <span className="text-sm">linkedin.com/in/harsha-js</span>
                  </a>
                </div>
              </div>
            </section>
            {/* Skills Section */}
            <section
              className="p-6 sm:p-8 bg-white rounded-xl shadow-lg"
              id="skills"
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-slate-800 text-2xl font-bold leading-tight tracking-tight">
                  Technical Skills
                </h2>
                <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-mono">
                  config: loaded ✅
                </span>
              </div>
              <div className="mb-4 p-3 bg-slate-900 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-400 text-xs font-mono ml-2">
                    harsha@devops-rig:~$
                  </span>
                </div>
                <div className="text-green-400 font-mono text-sm break-all">
                  {" "}
                  {/* Added break-all for small screens */}
                  <div className="animate-pulse">./list_skills --verbose</div>
                  <div className="text-gray-400 text-xs mt-1">
                    🛠️ Core competencies and toolchain mastery
                  </div>
                </div>
              </div>
              <div className="flex gap-2 sm:gap-3 flex-wrap">
                {skillsList.map((skill) => (
                  <div key={skill.name} className="group relative">
                    <div className="flex h-9 items-center justify-center gap-x-2 rounded-lg bg-slate-100 text-slate-700 px-3 sm:px-4 py-1.5 shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-pointer">
                      <p className="text-sm font-medium leading-normal">
                        {skill.name}
                      </p>
                    </div>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                      <div className="font-mono">
                        Proficiency: {skill.proficiency}
                      </div>
                      {skill.note && (
                        <div className="text-green-400">Note: {skill.note}</div>
                      )}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* Experience Section */}
            <section
              className="p-6 sm:p-8 bg-white rounded-xl shadow-lg"
              id="experience"
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-slate-800 text-2xl font-bold leading-tight tracking-tight">
                  Professional Experience
                </h2>
                <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-mono">
                  git log --graph
                </span>
              </div>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`flex gap-4 items-start border-l-4 ${
                      exp.statusColor === "green"
                        ? "border-green-500"
                        : "border-blue-500"
                    } pl-4 sm:pl-6 py-2 relative`}
                  >
                    <div
                      className={`absolute -left-3 top-5 w-5 h-5 ${
                        exp.statusColor === "green"
                          ? "bg-green-500"
                          : "bg-blue-500"
                      } rounded-full border-4 border-white shadow-md`}
                    ></div>
                    <div className="flex flex-1 flex-col justify-center">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                        <h3 className="text-slate-800 text-lg font-semibold leading-normal">
                          {exp.company}
                        </h3>
                        <span
                          className={`text-xs ${
                            exp.statusColor === "green"
                              ? "bg-green-100 text-green-800"
                              : "bg-blue-100 text-blue-800"
                          } px-2 py-1 rounded-full font-mono`}
                        >
                          {exp.status}
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm font-medium leading-normal">
                        {exp.role}
                      </p>
                      <p className="text-slate-500 text-xs font-normal leading-normal mb-2">
                        {exp.dates}
                      </p>
                      <ul className="list-disc list-inside text-slate-600 text-sm space-y-1 marker:text-slate-400">
                        {exp.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                      <div className="mt-3 flex gap-2 flex-wrap">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* Projects Section */}
            <section
              className="p-6 sm:p-8 bg-white rounded-xl shadow-lg"
              id="projects"
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-slate-800 text-2xl font-bold leading-tight tracking-tight">
                  Key Projects
                </h2>
                <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-mono">
                  kubectl get deployments
                </span>
              </div>
              <div className="space-y-8">
                {projects.map((project) => (
                  <div
                    key={project.title}
                    className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-6 p-4 sm:p-6 border border-slate-200 rounded-lg hover:shadow-xl transition-all duration-300 bg-slate-50/50 hover:bg-gradient-to-r hover:from-blue-50/30 hover:to-purple-50/30"
                  >
                    <div className="flex flex-col gap-1.5 flex-[2_2_0px] w-full">
                      {" "}
                      {/* Ensured full width for stacking */}
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-slate-500 text-xs font-semibold leading-normal uppercase tracking-wider">
                          {project.category}
                        </p>
                        <div className="flex gap-1 items-center">
                          <div
                            className={`w-2 h-2 ${
                              project.status === "production" ||
                              project.status === "active-drills"
                                ? "bg-green-500"
                                : "bg-blue-500"
                            } rounded-full animate-pulse`}
                          ></div>
                          <span
                            className={`text-xs ${
                              project.status === "production" ||
                              project.status === "active-drills"
                                ? "text-green-600"
                                : "text-blue-600"
                            } font-mono`}
                          >
                            {project.status}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="text-slate-800 text-xl font-bold leading-tight">
                          {project.title}
                        </h3>
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-mono whitespace-nowrap">
                          {" "}
                          {/* Added whitespace-nowrap to badge */}
                          💡 {project.stars}
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm font-normal leading-normal">
                        {project.description}
                      </p>
                      <div className="flex gap-2 mt-2 flex-wrap">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-sky-100 text-sky-800 px-2 py-1 rounded font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-3 p-2 bg-slate-900 rounded text-green-400 font-mono text-xs break-all">
                        {" "}
                        {/* Added break-all */}
                        {project.terminalCmd}
                        <br />
                        <span className="text-gray-400">
                          {project.terminalMsg}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* DevOps Workflow Section */}
            <section
              className="p-6 sm:p-8 bg-white rounded-xl shadow-lg"
              id="devops-workflow"
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-slate-800 text-2xl font-bold leading-tight tracking-tight">
                  My DevOps Workflow
                </h2>
                <span className="text-sm bg-teal-100 text-teal-800 px-3 py-1 rounded-full font-mono">
                  pipeline: active 🚀
                </span>
              </div>
              <p className="text-slate-600 text-base mb-6">
                A typical CI/CD and operational workflow I implement or
                contribute to, leveraging key tools from my skillset:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {devOpsWorkflowSteps.map((step, index) => {
                  const { IconComponent, title, description, color } = step;
                  return (
                    <div
                      key={index}
                      className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:shadow-md transition-shadow flex flex-col"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <IconComponent
                          className={`${color} text-3xl flex-shrink-0`}
                        />
                        <h3 className="text-slate-700 text-md font-semibold">
                          {title}
                        </h3>
                      </div>
                      <p className="text-slate-600 text-sm flex-grow">
                        {description}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 p-3 bg-slate-900 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-400 text-xs font-mono ml-2">
                    harsha@automation-server:~$
                  </span>
                </div>
                <div className="text-green-400 font-mono text-sm break-words">
                  {" "}
                  {/* Added break-words */}
                  <div>cat /etc/motd</div>
                  <div className="text-gray-300 mt-1">
                    -----------------------------------------------------
                    <br /> This workflow leverages key DevOps tools and
                    practices for <br /> automation, scalability, and
                    reliability in software delivery.
                    <br /> -----------------------------------------------------
                  </div>
                </div>
              </div>
            </section>
            {/* Portfolio Deployment Architecture Section */}
            <section
              className="p-6 sm:p-8 bg-white rounded-xl shadow-lg"
              id="deployment-architecture"
            >
              <h2 className="text-slate-800 text-2xl font-bold leading-tight tracking-tight mb-6">
                Portfolio Deployment Architecture (Vercel)
              </h2>
              <p className="text-slate-600 text-base mb-6">
                This portfolio website itself is deployed using a modern,
                streamlined CI/CD process leveraging Vercel:
              </p>
              <div className="flex flex-col md:flex-row items-center justify-around gap-4 p-4 sm:p-6 bg-slate-50 rounded-lg border border-slate-200">
                <div className="flex flex-col items-center text-center">
                  <FaGithub className="text-4xl sm:text-5xl text-slate-700 mb-2" />
                  <p className="font-semibold text-slate-700 text-sm sm:text-base">
                    1. Code Push
                  </p>
                  <p className="text-xs text-slate-500">To GitHub Repository</p>
                </div>
                <FaArrowRight className="text-2xl sm:text-3xl text-slate-400 hidden md:block" />
                <div className="md:hidden my-2 border-b-2 border-dashed border-slate-300 w-1/2"></div>
                <div className="flex flex-col items-center text-center">
                  <SiVercel className="text-4xl sm:text-5xl text-black mb-2" />
                  <p className="font-semibold text-slate-700 text-sm sm:text-base">
                    2. Vercel CI/CD
                  </p>
                  <p className="text-xs text-slate-500">Auto Build & Deploy</p>
                </div>
                <FaArrowRight className="text-2xl sm:text-3xl text-slate-400 hidden md:block" />
                <div className="md:hidden my-2 border-b-2 border-dashed border-slate-300 w-1/2"></div>
                <div className="flex flex-col items-center text-center">
                  <FaCloudUploadAlt className="text-4xl sm:text-5xl text-sky-500 mb-2" />
                  <p className="font-semibold text-slate-700 text-sm sm:text-base">
                    3. Deployment
                  </p>
                  <p className="text-xs text-slate-500">Static Assets Hosted</p>
                </div>
                <FaArrowRight className="text-2xl sm:text-3xl text-slate-400 hidden md:block" />
                <div className="md:hidden my-2 border-b-2 border-dashed border-slate-300 w-1/2"></div>
                <div className="flex flex-col items-center text-center">
                  <FaGlobeAmericas className="text-4xl sm:text-5xl text-green-500 mb-2" />
                  <p className="font-semibold text-slate-700 text-sm sm:text-base">
                    4. Global CDN
                  </p>
                  <p className="text-xs text-slate-500">
                    Fast Worldwide Access
                  </p>
                </div>
              </div>
              <ul className="list-disc list-inside text-slate-600 text-sm space-y-1 mt-6 marker:text-sky-500">
                <li>Code is hosted on GitHub.</li>
                <li>
                  Pushing to the main branch automatically triggers Vercel's
                  build process.
                </li>
                <li>
                  Vercel builds the React application, optimizes static assets.
                </li>
                <li>
                  The site is deployed globally via Vercel's Edge Network (CDN)
                  for low latency.
                </li>
                <li>
                  Features like automatic HTTPS, custom domains, and preview
                  deployments are managed by Vercel.
                </li>
              </ul>
            </section>
            {/* Education Section */}
            <section
              className="p-6 sm:p-8 bg-white rounded-xl shadow-lg"
              id="education"
            >
              <h2 className="text-slate-800 text-2xl font-bold leading-tight tracking-tight mb-6">
                Education
              </h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="flex gap-4 border-l-4 border-slate-400 pl-4 py-2"
                  >
                    <div className="flex flex-1 flex-col justify-center">
                      <h3 className="text-slate-800 text-lg font-semibold leading-normal">
                        {edu.degree}
                      </h3>
                      <p className="text-slate-600 text-sm font-normal leading-normal">
                        {edu.institution}
                      </p>
                      <p className="text-slate-500 text-xs font-normal leading-normal">
                        {edu.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* Courses Section */}
            <section
              className="p-6 sm:p-8 bg-white rounded-xl shadow-lg"
              id="courses"
            >
              <h2 className="text-slate-800 text-2xl font-bold leading-tight tracking-tight mb-6">
                Key Trainings & Courses
              </h2>
              <ul className="space-y-2 list-disc list-inside text-slate-700 marker:text-sky-500 columns-1 sm:columns-2">
                {courses.map((course, index) => (
                  <li
                    key={index}
                    className="text-sm font-normal leading-normal"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </section>
            {/* Achievements Section - Gamified */}
            <section
              className="p-6 sm:p-8 bg-white rounded-xl shadow-lg"
              id="achievements"
            >
              <h2 className="text-slate-800 text-2xl font-bold leading-tight tracking-tight mb-6 text-center">
                Achievements & Recognitions
              </h2>
              <div className="space-y-6">
                {professionalAchievements.map((ach, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex-shrink-0 mt-1">{ach.icon}</div>
                    <div>
                      <h3 className="text-slate-800 text-lg font-semibold leading-tight">
                        {ach.title}
                      </h3>
                      <p className="text-slate-500 text-xs font-medium mb-1">
                        {ach.date}
                      </p>
                      <p className="text-slate-600 text-sm">
                        {ach.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* YouTube Channel Section */}
            <section
              className="p-6 sm:p-8 bg-white rounded-xl shadow-lg"
              id="youtube-channel"
            >
              <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                <FaYoutube className="text-5xl sm:text-6xl text-red-600" />
                <div>
                  <h2 className="text-slate-800 text-2xl font-bold leading-tight tracking-tight">
                    YouTube Channel & Content
                  </h2>
                  <p className="text-slate-600 text-base">
                    Sharing knowledge and insights on DevOps, Cloud Computing,
                    and Software Engineering.
                  </p>
                </div>
              </div>
              <div className="text-center md:text-left mb-6">
                <a
                  href="https://www.youtube.com/@harshaselvi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors shadow hover:shadow-md text-sm sm:text-base"
                >
                  Visit @harshaselvi on YouTube
                  <FaArrowRight />
                </a>
              </div>
              <h3 className="text-slate-700 text-xl font-semibold mb-4">
                Channel Highlights & Achievements:
              </h3>
              <div className="space-y-4">
                {youtubeAchievements.map((ach, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-red-50 border-l-4 border-red-400 rounded-r-md shadow-sm"
                  >
                    <div className="flex-shrink-0 mt-0.5">{ach.icon}</div>
                    <div>
                      <h4 className="text-slate-800 text-md font-semibold leading-tight">
                        {ach.title}
                      </h4>
                      {ach.date && (
                        <p className="text-slate-500 text-xs font-medium mb-0.5">
                          {ach.date}
                        </p>
                      )}
                      <p className="text-slate-600 text-sm">
                        {ach.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* Contact Section */}
            <section
              className="p-6 sm:p-8 bg-white rounded-xl shadow-lg"
              id="contact"
            >
              <h2 className="text-slate-800 text-2xl font-bold leading-tight tracking-tight mb-8 text-center">
                Get in Touch
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <a
                  href="tel:+919876543210"
                  className="block p-4 sm:p-6 bg-slate-50 hover:bg-slate-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 text-center group"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex-shrink-0 bg-blue-100 text-blue-600 group-hover:bg-blue-500 group-hover:text-white rounded-full p-3 sm:p-4 inline-flex transition-colors duration-300">
                      <FaPhoneAlt className="text-xl sm:text-2xl" />
                    </div>
                    <div className="mt-3">
                      <h4 className="text-slate-800 text-lg font-semibold">
                        Phone
                      </h4>
                      <p className="text-slate-600 text-sm group-hover:text-blue-600 transition-colors duration-300">
                        +91-9876543210
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="mailto:selviharsha@gmail.com"
                  className="block p-4 sm:p-6 bg-slate-50 hover:bg-slate-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 text-center group"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex-shrink-0 bg-green-100 text-green-600 group-hover:bg-green-500 group-hover:text-white rounded-full p-3 sm:p-4 inline-flex transition-colors duration-300">
                      <FaEnvelope className="text-xl sm:text-2xl" />
                    </div>
                    <div className="mt-3">
                      <h4 className="text-slate-800 text-lg font-semibold">
                        Email
                      </h4>
                      <p className="text-slate-600 text-sm group-hover:text-green-600 transition-colors duration-300">
                        selviharsha@gmail.com
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/harsha-js"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="block p-4 sm:p-6 bg-slate-50 hover:bg-slate-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 text-center group"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex-shrink-0 bg-sky-100 text-sky-600 group-hover:bg-sky-500 group-hover:text-white rounded-full p-3 sm:p-4 inline-flex transition-colors duration-300">
                      <FaLinkedin className="text-xl sm:text-2xl" />
                    </div>
                    <div className="mt-3">
                      <h4 className="text-slate-800 text-lg font-semibold">
                        LinkedIn
                      </h4>
                      <p className="text-slate-600 text-sm group-hover:text-sky-600 transition-colors duration-300">
                        linkedin.com/in/harsha-js
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center py-6 sm:py-8 border-t border-slate-200 bg-white">
          <div className="flex flex-col items-center gap-3 px-4">
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="font-mono">
                  © {new Date().getFullYear()} Harsha JS
                </span>
                <span className="text-xs bg-slate-100 px-2 py-1 rounded font-mono">
                  MIT License
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-x-3 gap-y-1 sm:gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-mono">
                  Server Status: All systems operational
                </span>
              </div>
              <span className="font-mono hidden sm:inline">|</span>
              <span className="font-mono">Last updated: {lastUpdatedDate}</span>
              <span className="font-mono hidden sm:inline">|</span>
              <span className="font-mono">☕ Powered by coffee & CI/CD</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
