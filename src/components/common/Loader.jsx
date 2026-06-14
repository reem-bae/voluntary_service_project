import { faFile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const item = [
  { count: 100, suffix: '+', description: "Volunteer" },
  { count: 50, suffix: '+', description: "Activity" },
  { count: 145, suffix: '+', description: "Community Helped" },
  { count: 200, suffix: '+', description: "Hours of Service" }
]

export const project = [
  {
    id: 1,
    title: "Health Awareness & Free Checkups",
    shortDescription: "Bringing free health checkups and awareness campaigns to underserved communities.",
    fullDescription: "Our Health Awareness Campaign provides free medical checkups, vaccinations, and hygiene workshops to rural communities. Volunteers help organize events, register participants, and assist medical staff. The goal is to improve the overall health and wellbeing of marginalized communities.",
    category: "Health",
    startDate: "2025-01-10",
    endDate: "2025-06-30",
    location: "Addis Ababa & surrounding rural areas",
    goalAmount: 10000,
    raisedAmount: 4500,
    volunteersRequired: 15,
    skillsRequired: "Medical knowledge",
    impact: {
      peopleChecked: 1200,
      workshopAttendees: 500,
      volunteersParticipated: 200
    },
    status: "Active",
    image: "/assets/images/health_campaign.jpg"
  },
  {
    id: 2,
    title: "Education Support Program",
    shortDescription: "Providing school materials and volunteer tutoring to children in need.",
    fullDescription: "The Education Support Program helps children from low-income families gain access to quality education. We distribute school supplies, books, and organize weekly tutoring sessions. Volunteers mentor students and help them develop study skills. Our mission is to empower children academically.",
    category: "Education",
    startDate: "2025-02-01",
    endDate: "2025-12-31",
    location: "Addis Ababa",
    goalAmount: 8000,
    raisedAmount: 6200,
    volunteersRequired: 20,
    skillsRequired: "Teaching and Mentoring",
    impact: {
      studentsSupplied: 300,
      childrenTutored: 150,
      volunteersEngaged: 40
    },
    status: "Active",
    image: "/assets/images/education_support.jpg"
  },
  {
    id: 3,
    title: "Environmental Cleanup Initiative",
    shortDescription: "Promoting a cleaner environment and reforestation through local community efforts.",
    fullDescription: "The Environmental Cleanup Initiative focuses on cleaning public spaces, removing waste, and planting trees in urban and rural areas. Volunteers participate in cleanup drives and tree planting events to promote sustainability.",
    category: "Environment",
    startDate: "2025-03-15",
    endDate: "2025-09-30",
    location: "Addis Ababa & surrounding towns",
    goalAmount: 5000,
    raisedAmount: 2800,
    volunteersRequired: 25,
    skillsRequired: "Physical activity",
    impact: {
      wasteRemovedKg: 50000,
      treesPlanted: 2000,
      volunteersParticipated: 100
    },
    status: "Completed",
    image: "/assets/images/environment_cleanup.jpg"
  },
  {
    id: 4,
    title: "Women Empowerment Program",
    shortDescription: "Helping women develop vocational skills and start small businesses.",
    fullDescription: "The Women Empowerment Program provides training in sewing, handicrafts, digital skills, and entrepreneurship. Volunteers support workshops, mentorship sessions, and community outreach to create sustainable income opportunities.",
    category: "Community",
    startDate: "2025-04-01",
    endDate: "2025-12-31",
    location: "Addis Ababa",
    goalAmount: 7000,
    raisedAmount: 3500,
    volunteersRequired: 15,
    skillsRequired: "Mentoring and Teaching",
    impact: {
      womenTrained: 120,
      businessesLaunched: 30,
      volunteersEngaged: 25
    },
    status: "Completed",
    image: "/assets/images/women_empowerment.jpg"
  },
  {
    id: 5,
    title: "Emergency Relief Drive",
    shortDescription: "Providing emergency support, food, and supplies to disaster-affected communities.",
    fullDescription: "The Emergency Relief Drive responds to natural disasters and urgent community needs. Volunteers distribute food, clean water, blankets, and coordinate temporary shelters and health support.",
    category: "Community",
    startDate: "2025-05-01",
    endDate: "2025-11-30",
    location: "Various locations in Ethiopia",
    goalAmount: 12000,
    raisedAmount: 6000,
    volunteersRequired: 50,
    skillsRequired: "Logistics",
    impact: {
      peopleHelped: 2500,
      familiesSupported: 500,
      volunteersParticipated: 50
    },
    status: "Active",
    image: "/assets/images/emergency_relief.jpg"
  }
];

export const total = [
  {
    title: "Total Projects",
    count: 12,
    icon: <FontAwesomeIcon icon={faFile} />
  }

]

export const donationsData = [
  { month: "Jan", amount: 500 },
  { month: "Feb", amount: 300 },
  { month: "Mar", amount: 700 },
  { month: "Apr", amount: 400 },
];

export const volunteersData = [
  { project: "Education Project", count: 12 },
  { project: "Health Project", count: 8 },
  { project: "Environment Project", count: 5 },
];

export const myProjects = [
  {
    id: 1,
    title: "Clean Water for Rural Communities",
    category: "Health",
    role: "Donor",
    donatedAmount: 120,
    progress: 65,
    status: "Active",
    startDate: "2024-02-10",
    image: "/images/water.jpg",
  },
  {
    id: 2,
    title: "Education Support for Orphans",
    category: "Education",
    role: "Volunteer",
    donatedAmount: 0,
    progress: 40,
    status: "Active",
    startDate: "2024-03-05",
    image: "/images/education.jpg",
  },
  {
    id: 3,
    title: "Shelter for Homeless Elderly",
    category: "Social Care",
    role: "Donor",
    donatedAmount: 300,
    progress: 90,
    status: "Completed",
    startDate: "2023-11-20",
    image: "/images/shelter.jpg",
  },
];


export const myActivities = [

  {
    id: 1,
    type: "Volunteer",
    title: "Applied for Teaching Children",
    date: "2024-04-10",
    status: "Pending",
    location: "Adama"
  },

  {
    id: 2,
    type: "Volunteer",
    title: "Joined Food Distribution Program",
    date: "2024-04-20",
    status: "Approved",
    location: "Addis abeba"
  }
];


export const mydonation = [
  {
    id: 1,
    title: "Donation to Clean Water Project",
    amount: 50,
    date: "2024-04-01",
    donationtype: "ontime",
    status: "Successful",
  },
  {
    id: 2,
    title: "Donation to Shelter Project",
    amount: 100,
    date: "2024-03-18",
    donationtype: "monthly",
    status: "Successful",
  },
]
