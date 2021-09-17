import React from "react";

export const DataTwo = {
    "fetching": false,
    "fetched": true,
    "receivedAt": 1625584056913,
    "data": {
        "sectionOne": {
            backLink: { name: "Back to Preparedness", link: "back"},
            name: "EARLY ACTION PROTOCOL - TYPHOONS",
            title: 'Section Title',
            right: {name: "View all emergencies (last 30 days)", link: "www.britishredcross.org.uk"},
            list: {
                type: 'secondary',
                align: 'center',
                list: [
                    {id: 1, title: 'SUMMARY', content: 'CONTENT TEXT...1'},
                    {id: 1, title: 'RISK AND VULNERABILITY OVERVIEW', content: 'CONTENT TEXT...2'},
                    {id: 1, title: 'EARLY ACTIONS', content: 'CONTENT TEXT...3'}
                ]
            }
        },
        "sectionTwo": {
            "title": 'Section Title',
            "right": {name: "View all emergencies (last 30 days)", link: "www.britishredcross.org.uk"}
        },
        "sectionThree": {
            "title": 'Section Title',
            "description": "Description of the section goes here"
        }
    }
}

export default DataTwo;