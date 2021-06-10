import React from 'react';

export const ListData = {
    "header": {
        "logo": true,
        "menu": [
            {name: "Get Started", link: "/get-started"},
            {name: "Brand & Design Guidelines", link: "/brand-design/colours"},
            {name: "Ui Components", link: "/ui-components/alert"},
            {name: "Data Viz", link: "/data/goapi"},
            {name: "Resources", link: "/resources"}
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
            {name: "iconography", link: "/brand-design/iconography"},
            {name: "logo", link: "/brand-design/logo"},
            {name: "typography", link: "/brand-design/typography"},
            {name: "IFRC Brand Guidelines", link: "/brand-design/brand"},
            {name: "Design/Usability Principles", link: "/brand-design/design"}
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
            {name: "GO API", link: "/data/goapi"},
            {name: "Infographics", link: "/data/infographics"},
            {name: "Map", link: "/data/map"}
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
    "demo": {
        "logo": true,
        "right_menu": [
            {
                name: "language",
                dropdown: ["English, French, Spainish"],
            },
            {
                name: "Resources",
                link: '/GO-UI-Library/resources'
            },
            {
                name: "Login",
                link: 'https://www.redcross.org.uk/'
            }
        ],
        "goto": false
    }
}

export default ListData;