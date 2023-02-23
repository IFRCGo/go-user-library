// import {MenuItem} from "react-bootstrap-dropdown-menu";
// import React from "react";

export const ListData = {
    "header": {
        "logo": true,
        "menu": [
            {
                type: 'link',
                name: "Get Started",
                link: "/get-started"
            },
            {
                type: 'link',
                name: "Brand & Design Guidelines",
                link: "/brand-design/Colours"
            },
            {
                type: 'link',
                name: "UI Components",
                link: "/ui-components/alert"
            },
            {
                type: 'link',
                name: "Data Visualization",
                link: "/data/goapi"
            },
            {
                type: 'link',
                name: "Maps",
                link: "/maps"
            }
        ],
        "login": false,
        "goto":
            {
                status: true,
                title: "Go to GO",
                link: "/"
            }
    },
    "brand": {
        "logo": true,
        "menu": [
            {name: "Colours", link: "/brand-design/colours"},
            {name: "Iconography", link: "/brand-design/iconography"},
            {name: "Logo", link: "/brand-design/logo"},
            {name: "Typography", link: "/brand-design/typography"},
            {name: "IFRC Brand Guidelines", link: "/brand-design/brand"},
            {name: "Design & Usability Principles", link: "/brand-design/design"}
        ],
        "login": false,
        "goto": [
            {
                status: "true",
                title: "Go to GO",
                link: "/"
            }
        ]
    },
    "components": {
        "logo": false,
        "menu": [
            {name: "Alerts", link: "/ui-components/alert"},
            {name: "Breadcrumbs", link: "/ui-components/breadcrumbs"},
            {name: "Buttons", link: "/ui-components/buttons"},
            {name: "Cards", link: "/ui-components/cards"},
            {name: "Filters", link: "/ui-components/filters"},
            {name: "Forms", link: "/ui-components/forms"},
            {name: "Graphs", link: "/ui-components/graphs"},
            {name: "Headers", link: "/ui-components/headers"},
            {name: "Links", link: "/ui-components/links"},
            {name: "Modal", link: "/ui-components/modal"},
            {name: "Navigation", link: "/ui-components/navigation"},
            {name: "Preloader", link: "/ui-components/preloader"},
            {name: "Tabs", link: "/ui-components/tabs"},
            {name: "Tables", link: "/ui-components/tables"},
            {name: "Tooltips & Popups", link: "/ui-components/tooltip"}
        ],
        "login": false,
        "goto": [
            {
                status: "true",
                title: "Go to GO",
                link: "/"
            }
        ]
    },
    "data": {
        "logo": false,
        "menu": [
            {name: "GO API templates", link: "/data/goapi"},
            {name: "Infographics", link: "/data/infographics"},
        ],
        "login": false,
        "goto": [
            {
                status: "true",
                title: "Go to GO",
                link: "/"
            }
        ]
    },
    "demoOne": {
        "logo": true,
        "right_menu": [
            {
                type: 'dropdown',
                name: "Language",
                dropdown: [
                    {"name": "English"},
                    {"name": "French"},
                    {"name": "Spainish"}
                ]
            },
            {
                type: 'link',
                name: "Maps",
                link: '/maps'
            },
            {
                type: 'link',
                name: "Login",
                link: '/'
            }
        ],
        "goto": false
    },
    "demoTwo": {
        "logo": true,
        "right_menu": [
            {
                type: 'dropdown',
                name: "Language",
                dropdown: [
                    {"name": "English"},
                    {"name": "French"},
                    {"name": "Spanish"}
                ]
            },
            {
                type: 'link',
                name: "Maps",
                link: '/maps'
            },
            {
                type: 'user',
                name: "Mariam",
                link: '/',
                menu: [
                    {"name": "Home", "location": "/home"},
                    {"name": "Edit Profile", "location": "/profile"},
                    {"name": "Change Password", "location": "/change-password"},
                    {"name": "Privacy Settings", "location": "/privacy-settings"}
                ]
            }
        ],
        "goto": false
    },
    "demoThree": {
        "logo": false,
        "menu": [
            {
                type: 'link',
                name: "Home",
                link: '/'
            },
            {
                type: 'dropdown',
                name: "Regions",
            },
            {
                type: 'link',
                name: "All Emergencies",
                link: '/emergencies'
            },
            {
                type: 'link',
                name: "Surge",
                link: '/surge'
            },
            {
                type: 'link',
                name: "Preparedness",
                link: '/preparedness'
            }
        ],
        "goto": false
    },
    "demoFilter": {
        "logo": false,
        "menu": [
            {
                type: 'link',
                name: "All",
                link: '/'
            },
            {
                type: 'link',
                name: "Appeals",
                link: '/Appeals'
            },
            {
                type: 'link',
                name: "DREFs",
                link: '/DREFs'
            },
            {
                type: 'link',
                name: "Other",
                link: '/Other'
            },
        ],
        "goto": false
    },
    "footer": {
        "logo": false,
        "copyright": '© IFRC 2020',
        "col": [
            {
                type: 'text',
                name: "ABOUT GO",
                text: 'IFRC GO is a Red Cross Red Crescent platform to connect information on emergency needs with the right response.'
            },
            {
                type: 'list',
                name: "FIND OUT MORE",
                list:[
                    {
                        name: 'ifrc.org',
                        link: 'https://ifrc.org/'
                    },
                    {
                        name: 'rcrcsims',
                        link: 'https://rcrcsims.org/'
                    },
                    {
                        name: 'data.ifrc.org',
                        link: 'https://data.ifrc.org/'
                    },
                ]
            },
            {
                type: 'list',
                name: "HELPFUL LINKS",
                list:[
                    {
                        name: 'Open Source Code',
                        link: 'https://github.com/ifrcgo/go-frontend'
                    },
                    {
                        name: 'API Documentation',
                        link: 'https://goadmin.ifrc.org/docs'
                    },
                    {
                        name: 'Other Resources',
                        link: 'https://go.ifrc.org/about'
                    },
                ]
            },
            {
                type: 'social',
                name: "CONTACT US",
                social:
                    {
                        name: 'im@ifrc.org',
                        link: 'mailto:im@ifrc.org'

                    }
                ,
                list:[
                    {
                        type: 'f-icon-medium footer-social-icon',
                        link: 'https://ifrc.medium.com'
                    },
                    {
                        type: 'f-icon-facebook  footer-social-icon',
                        link: 'https://www.facebook.com/IFRC'
                    },
                    {
                        type: 'f-icon-twitter  footer-social-icon',
                        link: 'https://twitter.com/ifrcgo'
                    },
                    {
                        type: 'f-icon-youtube  footer-social-icon',
                        link: 'https://www.youtube.com/watch?v=dwPsQzla9A4'
                    },
                ],
            },
        ],
        "goto": false
    }
}

export default ListData;
