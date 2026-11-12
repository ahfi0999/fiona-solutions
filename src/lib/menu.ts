// Header mega menus, matching the live site (labels, order, column layout, icons).

export type MenuLink = { label: string; href: string; icon: string };

// 4 columns x 3 items
export const servicesMenu: MenuLink[][] = [
  [
    {
      "label": "Software Development",
      "href": "/services/software-development",
      "icon": "/uploads/menu-icons/software-development.svg"
    },
    {
      "label": "Frontend UI/UX Development",
      "href": "/services/frontend-ui-ux-development",
      "icon": "/uploads/menu-icons/frontend-ui-ux-development.svg"
    },
    {
      "label": "Web & Mobile Development",
      "href": "/services/web-and-mobile-develpment",
      "icon": "/uploads/menu-icons/web-and-mobile-develpment.svg"
    }
  ],
  [
    {
      "label": "Digital Transformation",
      "href": "/services/digital-transformation",
      "icon": "/uploads/menu-icons/digital-transformation.svg"
    },
    {
      "label": "Cloud Transformation",
      "href": "/services/cloud-transformation",
      "icon": "/uploads/menu-icons/cloud-transformation.svg"
    },
    {
      "label": "AI/ML Transformation",
      "href": "/services/ai-ml-transformation",
      "icon": "/uploads/menu-icons/ai-ml-transformation.svg"
    }
  ],
  [
    {
      "label": "Data & Analytics",
      "href": "/services/data-analytics",
      "icon": "/uploads/menu-icons/data-analytics.svg"
    },
    {
      "label": "Cyber Security",
      "href": "/services/cyber-security",
      "icon": "/uploads/menu-icons/cyber-security.svg"
    },
    {
      "label": "Data Backup & Recovery",
      "href": "/services/data-backup-recovery-services",
      "icon": "/uploads/menu-icons/data-backup-recovery-services.svg"
    }
  ],
  [
    {
      "label": "IT Consulting",
      "href": "/services/it-consulting",
      "icon": "/uploads/menu-icons/it-consulting.svg"
    },
    {
      "label": "SEO",
      "href": "/services/seo",
      "icon": "/uploads/menu-icons/seo.svg"
    },
    {
      "label": "Training",
      "href": "/services/training",
      "icon": "/uploads/menu-icons/training.svg"
    }
  ]
];

// 2 columns: 3 + 2 items
export const solutionsMenu: MenuLink[][] = [
  [
    {
      "label": "Cloud Connect",
      "href": "/cloud-connect",
      "icon": "/uploads/menu-icons/cloud-connect.svg"
    },
    {
      "label": "Cloud Sphere",
      "href": "/cloud-sphere",
      "icon": "/uploads/menu-icons/cloud-sphere.svg"
    },
    {
      "label": "SECAPI",
      "href": "/secapi",
      "icon": "/uploads/menu-icons/secapi.svg"
    }
  ],
  [
    {
      "label": "Verifi AI",
      "href": "/verifi-ai",
      "icon": "/uploads/menu-icons/verifi-ai.svg"
    },
    {
      "label": "Vox AI",
      "href": "/vox-ai",
      "icon": "/uploads/menu-icons/vox-ai.svg"
    }
  ]
];
