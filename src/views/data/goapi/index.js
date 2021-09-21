import React from "react";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import CreateNew from "./../../../assets/graphics/content/create new.png";
import GoTokenGenerator from "./../../../assets/graphics/content/go token generator.png";
import GoTokenGeneratorTwo from "./../../../assets/graphics/content/go token generator 2.png";
import PowerBiApi from "./../../../assets/graphics/content/example1_powerbi_api.png";

const GoApiPage = () => {
  return (
    <div className="inner">
      <div className="fold__body">
        <div className="container-mid">
          <h1>GO API templates</h1>
          <p>API templates and guidance to help you build customised dashboards and other data tools that connect dynamically to the GO database.</p>
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <strong>Example 0</strong> Get Authorization Token
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="container-mid">
                    <h2>Generating a Token</h2>
                    <p>Step-by-step instructions on how to get go-api access token</p>
                    <br/>
                    <h3>What You’ll Need</h3>
                    <div className="container-mid">
                      <ul className="container-mid">
                        <li><strong>An API tool</strong>: For this walkthrough, we will be using Postman, a popular service with a free account option. There are many others, and the basic steps outlined here should work with them as well.</li>
                        <li><strong>GO Login Credentials</strong>: In order to generate a token, you need to have a GO account with Red Cross Red Crescent permissions.</li>
                      </ul>
                    </div>
                    <br/>
                    <h4>What are Authentication Tokens?</h4>
                    <p>Information in GO is segregated by audience. Some pieces of information are fine for the general public to access, while other pieces are limited to only members of the Red Cross Red Crescent Movement. When you create a user profile on GO as a member of a national society, your account is given access to that more private level of information, and when we access that data via the API, the system needs a way to verify that we are permitted to see it. That’s where tokens come in.</p>
                    <p>A token is passed to the server along with whatever your search request is, as a way to tell it that we’re allowed to see what we’re requesting. Think of it like a secret handshake to get into the members-only club.</p>
                    <br/>
                    <h4>How Do I Get An Authentication Token?</h4>
                    <p>From the API Basics article, you’ll remember that the four key elements of interacting with an API are:</p>
                    <div className="container-mid">
                      <ul className="container-mid">
                        <li>The endpoint</li>
                        <li>The method</li>
                        <li>The headers</li>
                        <li>The data (or body)</li>
                      </ul>
                    </div>
                    <br/>
                    <h5>Endpoint</h5>
                    <p>The endpoint here is:</p>
                    <p><code>https://prddsgocdnapi.azureedge.net/get_auth_token</code></p>
                    <p>The base URL is telling the request to ping the GO server. The <code>/get_auth_token</code> is accessing the token generator.</p>
                    <br/>
                    <h5>Method</h5>
                    <p>We need to generate one with a special API call. There are a number of methods for interacting with APIs, depending on what you’re trying to do with the data in the server. Most of the time, we’re just reading data, and that means using the <code>GET</code> method. But in some scenarios, including this step of generating a token, we need to use <code>POST</code>. That’s because we’re sending a request to the server to actually create a new resource (in this case, our token).</p>
                    <br/>
                    <h5>Headers</h5>
                    <p>This isn’t a query in the same sense as other interactions with the GO server, so we don’t have any parameters to include. However, there is one header that is a good idea to add here:</p>
                    <p>Key (Header Name): <code>Content-Type</code> Value (Header Value): <code>application/json</code></p>
                    <p>Understanding the reason for this specification isn’t vital to your understanding of this process, but if you’re interested, the short explanation is that this header tells the server what media type it is dealing with, and then that the data should be formatted as JSON. Other media types include:</p>
                    <div className="container-mid">
                      <ul className="container-mid">
                        <li>audio</li>
                        <li>font</li>
                        <li>example</li>
                        <li>image</li>
                        <li>message</li>
                        <li>model</li>
                        <li>multipart</li>
                        <li>text</li>
                        <li>video</li>
                      </ul>
                    </div>
                    <br/>
                    <h5>Data</h5>
                    <p>Here is where the actual request to the server is being stored. As we’re dealing with JSON formatting, our data here needs to be formatted as such. We’re going to include the following in the body:</p>
                    <pre>
                      <code className="language-javascript">
                        {'{'}<br/>
                          "username": "myusername",<br/>
                          "password": "mypassword"<br/>{'}'}
                      </code>
                    </pre>
                    <p>You would update the text above with your own GO username (case-sensitive) and password, while <em>keeping the quotes around all of the elements</em>. So as an example, my own snippet would look like this:</p>
                    <pre>
                      <code className="language-javascript">
                        {'{'}<br/>
                        "username": "Jonathan",<br/>
                        "password": "This_is_my_secret_password"<br/>
                        {'}'}
                      </code>
                    </pre>
                    <br/>
                    <h4>Putting It All Together</h4>
                    <div className="container-mid">
                      <ol className="container-mid">
                        <li>Log into Postman. At the top left of the window, click <code>New</code></li>
                        <li>In the window that pops up, click on <code>Request</code></li>
                      </ol>
                    </div>
                    <p><img alt="some meaningful text" src={CreateNew} style={{width:'100%', maxWidth:'100%', height:'auto'}} /></p>
                    <div className="container-mid">
                      <ol start="3" className="container-mid">
                        <li>In the main window that appears, click <code>GET</code> and from the dropdown, select <code>POST</code></li>
                        <li>In the field labeled <code>Enter request URL</code> type <code>https://prddsgocdnapi.azureedge.net/get_auth_token</code></li>
                        <li>Click <code>Headers</code> below the URL bar, and enter:</li>
                        <li>Key: <code>Content-Type</code></li>
                        <li>Value: <code>application/json</code></li>
                        <li>Make sure the checkbox to the left of <code>Content-Type</code> is checked</li>
                      </ol>
                    </div>
                    <p>
                      <img alt="other meaningful text" src={GoTokenGenerator} style={{width:'100%', maxWidth:'100%', height:'auto'}} />
                      </p>
                    <ol start="6">
                      <li>Click <code>Body</code>, then select <code>raw</code> from the menu below. The last element should say <code>JSON</code> - if not, select it. Then enter <code>{'{"username": "your-username", "password": "your-password"}'}</code>, changing where you see "your-username" and "your-password" to match the credentials you use to log into GO. Remember to keep quotes around all of those elements!</li>
                    </ol>
                    <p><img alt="the last text" src={GoTokenGeneratorTwo} style={{width:'100%', maxWidth:'100%', height:'auto'}} /></p>
                    <div className="container-mid">
                      <ol start="7" className="container-mid">
                        <li>Click <code>Send</code> at the top right. If everything was entered correctly, you should get a response from the server with the following:</li>
                      </ol>
                    </div>
                    <pre>
                      <code className="language-javascript">
                      {'{'}<br/>
                      "token": "redacted, but you would see a long string of characters here!",<br/>
                      "username": "Jonathan",<br/>
                      "first": "Jonathan",<br/>
                      "last": "Garro",<br/>
                      "expires": "2021-02-23T19:33:04.456Z",<br/>
                      "id": 1316<br/>
                      {'}'}
                      </code>
                    </pre>
                    <br/>
                    <pre>
                      <code className="language-javascript">
                      <br/>
                      const postBody = {'{'}<br/>
                        <div className="container-mid">
                          username: 'Jonathan',<br/>
                          password: 'This_is_my_secret_password',<br/>
                        </div>
                      {'}'};<br/><br/>

                      fetch('https://goadmin.ifrc.org/get_auth_token', {'{'}<br/>
                        <div className="container-mid">
                        method: 'POST',<br/>
                        body: JSON.stringify(postBody),<br/>
                        headers: {'{'}<br/>
                          <div className="container-mid">
                            'Content-Type': 'application/json',<br/>
                          </div>
                        {'}'},<br/>
                        </div>
                      {'}'})<br/><br/>

                        .then((response) => response.json())<br/>
                        .then((data) => {'{'}<br/>
                          <div className="container-mid">
                            console.log('GO_API_AUTHORIZATION_TOKEN={"${data.token}"}');<br/>
                          </div>
                      {'}'});<br/>
                      
                      </code>
                    </pre>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <strong>Example 1</strong> Projects per Sector
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="container-mid">
                    <p>Example 1: Projects per SectorNumber of projects per sector in Nepal</p>
                    <h2>Building Your Query</h2>
                    <p>The API can be accessed by building a URL query. We start with the base URL to access the database, then set parameters to select just the data that we need. In this example, we need to access <em>Projects</em> and then set the <em>Country</em> parameter to Nepal. Note that to select countries, you’ll need to use the associated ISO code (specifically, <a href="https://www.iso.org/obp/ui/#search/code/">the Alpha-3 code</a>).</p>
                    <p>So our URL for this particular search would look like this:</p>
                    <p><a href="https://goadmin.ifrc.org/api/v2/project/?country=NPL">https://goadmin.ifrc.org/api/v2/project/?country=NPL</a></p>
                    <p><img alt="URL" src={PowerBiApi} style={{width:'100%', maxWidth:'100%', height:'auto'}} /></p>
                    
                    <h2>Power BI</h2>
                    <h3>Get Your Data Into PowerBI</h3>
                    <div className="container-mid">
                      <ol className="container-mid">
                        <li>Open PowerBI and select “Get Data” from the top ribbon, then select “Web”.</li>
                        <li>Type your URL into the window that appears and click OK.</li>
                        <li>This will open a new window called Power Query Editor where you can organize the data that is returned in preparation for visualization.</li>
                        <li>First give your query a name. When you start bringing in lots of different queries, it can be hard to remember what each one is doing. So on the left pane with the query selected, look at the right side of the window and rename it to something like “Nepal Projects”.</li>
                        <li>The data comes into PowerBI in JSON format, which makes transferring the data easy, but can be difficult to easily interpret. Our Nepal Projects query returned 15 lines (note that if you’re following along this number might change based on activity within GO), but we can’t see much about those projects. Click on the “List” link next to results. Now each result from GO is listed as a distinct record.</li>
                        <li>Having a list with “Record” doesn’t tell us much. Converting it to a table will make it easier to read, so click the “Convert to Table” in the “Transform” section of the ribbon at the top of the window. In the window that pops up, select “None” and “Show as errors” for the two options.</li>
                        <li>Right now, our table has an index column (numbering the rows) and “Column1”, which is just a placeholder for the data for that particular result. Use the button at the top right of the table and you’ll see all the columns that we’ve pulled from GO. These should all be selected by default. Click OK. Now we’re able to see what data this query is actually providing us! We’re ready to start building our visuals, so click Close and Apply at the top of your Power Query Editor window.</li>
                      </ol>
                    </div>
                    <h3>Set Up Your Visualization</h3>
                    <p>The three icons to the far left of your screen include, in descending order:</p>
                    <div className="container-mid">
                      <ul className="container-mid">
                        <li>Report: A preview and editor pane for your dashboard. This is where we’ll build the actual visualization.</li>
                        <li>Data: A way to more easily view the data that you have connected. In this example, you’ll see the Nepal Projects data we pulled into PowerBI in the previous section of this walkthrough. As you get more comfortable with PowerBI, you might bring in additional data sources.</li>
                        <li>Model: This allows you to view your various data sources and create relationships between fields. In this simple example, we won’t be using this tab, but in cases where you have multiple data sources, this is an important tab.</li>
                      </ul>
                    </div>
                    <div className="container-mid">
                      <ol className="container-mid">
                        <li>Start by selecting the Report tab. Along the right side of your window, you should see three sections: Filters, Visualizations, and Fields. (These may be collapsed. If so, use the arrow to expand them). For this example, we’re going to be working with bar charts to visualize the relative proportion of projects by sector, so select either the vertical or horizontal bar chart. We’re only working with a single column of data, so a stacked bar chart will work for our purposes.</li>
                        <li>After clicking on the chart type, a blank placeholder should appear in the preview pane. To populate the chart with your data, we need to drag the relevant fields from the far right pane into the fields below the visualizations. In this simple example, we only need to worry about the column that has the sector data. GO has several fields that contain the word “sector”, so we might want to refresh our memory and make sure we’re using the right column from the data source. Pop over into the Data tab and scroll to the right to find the right one. It looks like “primary_sector_display” is the right one. Go back to the Report tab.</li>
                        <li>From the fields pane on the far right, find “primary_sector_display”, and drag it over into the Axis field. Then repeat for the Legend and Values fields. For the Values field, PowerBI is smart enough to understand what we’re doing, so it counts the frequency each unique value appears in that list and generates that bar chart!</li>
                      </ol>
                    </div>
                    <div className="fold">
                      <h2>JavaScript</h2>
                      <pre>
                        <code>
                        <div>
                          import React, {'{'} useEffect, useState {'}'} from "react";<br/>
                          import {'{'} Bar {'}'} from "react-chartjs-2";<br/><br/>
                          interface Project {'{'}<br/>
                          <div className="container-mid">
                            id: number;<br/>
                            name: string;<br/>
                            primary_sector_display: string;<br/>
                          </div>
                          {'}'}<br/><br/>
                          interface Dataset {'{'}<br/>
                          <div className="container-mid">
                            label: string;<br/>
                            data: number[];<br/>
                            backgroundColor: string[];<br/>
                            borderColor: string[];<br/>
                            borderWidth: number;<br/>
                          </div>
                          {'}'}<br/><br/>
                          interface Data {'{'}<br/>
                          <div className="container-mid">
                            labels: string[];<br/>
                            datasets: Dataset[];<br/>
                          </div>
                          {'}'}<br/><br/>
                          export const Chart: React.FC = () =&gt; {'{'}<br/>
                          <div className="container-mid">
                            <div className="container-mid">
                              const [projects, setProjects] = useState([]);<br/>
                              const [data, setData] = useState({'{'}{'}'});<br/>
                              const backgroundColors = [<br/>
                            </div>
                            <div className="container-mid">
                              "rgba(255, 99, 132, 0.2)",<br/>
                              "rgba(54, 162, 235, 0.2)",<br/>
                              "rgba(255, 206, 86, 0.2)",<br/>
                              "rgba(75, 192, 192, 0.2)",<br/>
                              "rgba(153, 102, 255, 0.2)",<br/>
                              "rgba(255, 159, 64, 0.2)",<br/>
                            </div>
                            ];<br/><br/>
                            
                            const borderColors = [<br/>
                            <div className="container-mid">
                              "rgba(255, 99, 132, 1)",<br/>
                              "rgba(54, 162, 235, 1)",<br/>
                              "rgba(255, 206, 86, 1)",<br/>
                              "rgba(75, 192, 192, 1)",<br/>
                              "rgba(153, 102, 255, 1)",<br/>
                              "rgba(255, 159, 64, 1)",<br/>
                            </div>
                            ];<br/><br/>
                            const options = {'{'}<br/>
                            <div className="container-mid">
                              scales: {'{'}<br/>
                              <div className="container-mid">
                                yAxes: [<br/>
                                <div className="container-mid">
                                  {'{'}<br/>
                                  <div className="container-mid">
                                    ticks: {'{'}<br/>
                                    <div className="container-mid">
                                      beginAtZero: true,<br/>
                                    </div>
                                    {'}'},<br/>
                                  </div>
                                  {'}'},<br/>
                                </div>
                                ],<br/>
                              </div>
                              {'}'},<br/>
                            </div>
                            {'}'};<br/><br/>
                            const fetchProjects = () =&gt; {'{'}<br/>
                            <div className="container-mid">
                              fetch("https://goadmin.ifrc.org/api/v2/project/?country=NPL")<br/>
                              <div className="container-mid">
                                .then(response =&gt; response.json())<br/>
                                .then(data =&gt; {'{'}<br/>
                                  <div className="container-mid">
                                  setProjects(data.results);<br/>
                                  setData(getChartDataFromProjects(projects));<br/>
                                  </div>
                              </div>
                              {'}'});<br/>
                            </div>
                            {'}'};<br/><br/>
                            useEffect(fetchProjects, [projects.length]);<br/><br/>
                            const getChartDataFromProjects = (projects: Project[]) =&gt; {'{'}<br/>
                            <div className="container-mid">
                              const data: Data = {'{'}<br/>
                              <div className="container-mid">
                                labels: [],<br/>
                                datasets: [<br/>
                                <div className="container-mid">
                                  {'{'}<br/>
                                  label: "# of Projects",<br/>
                                  data: [],<br/>
                                  backgroundColor: [],<br/>
                                  borderColor: [],<br/>
                                  borderWidth: 1,<br/>
                                </div>
                                {'}'},<br/>
                              </div>
                              ],<br/>
                            </div>
                            {'}'};<br/><br/>
                            projects.forEach(project =&gt; {'{'}<br/>
                            <div className="container-mid">
                              const dataIndex = data.labels.indexOf(<br/>
                              <div className="container-mid">
                                project.primary_sector_display<br/>
                              </div>
                              );<br/><br/>
                              if (dataIndex &gt;= 0) {'{'}<br/>
                              <div className="container-mid">
                                data.datasets[0].data[dataIndex] += 1;<br/>
                              </div>
                              {'}'} else {'{'}<br/>
                              <div className="container-mid">
                                data.labels.push(project.primary_sector_display);<br/>
                                data.datasets[0].data.push(1);<br/>
                                data.datasets[0].backgroundColor = backgroundColors.slice(<br/>
                                <div className="container-mid">
                                  0,<br/>
                                  data.datasets[0].data.length<br/>
                                </div>
                                );<br/>
                                data.datasets[0].borderColor = borderColors.slice(<br/>
                                <div className="container-mid">
                                  0,<br/>
                                  data.datasets[0].data.length<br/>
                                </div>
                                );<br/>
                                {'}'}<br/>
                              </div>
                              {'}'});<br/><br/>
                              return data;<br/>
                            </div>
                            {'}'};<br/><br/>
                            return (<br/>
                            <div className="container-mid">
                              {'<div classname="chart-container">'}<br/>
                                <div className="container-mid">
                                  {'<bar data="{data}" options="{options}" />'}<br/>
                                </div>
                              {'</div>'}<br/>
                            </div>
                            );<br/>
                          </div>
                          {'}'};<br/>
                        </div> 
                      </code>
                    </pre>
                    </div>
                    <div className="fold">
                      <h2>Python</h2>
                      <pre>
                        <code>
                          <div>
                            import matplotlib.pyplot as plt<br/>
                            import requests<br/>
                            from collections import Counter<br/>
                            import numpy as np<br/><br/>
                            def fetchProjects():<br/>
                            <div className="container-mid">
                            return requests.get("https://goadmin.ifrc.org/api/v2/project/?country=NPL").json()['results']<br/>
                            </div><br/><br/>
                            def getDataFromProjects(projects):<br/>
                            <div className="container-mid">
                              counter = Counter()<br/>
                              for project in projects:<br/>
                              <div className="container-mid">
                                counter[project['primary_sector_display']] += 1<br/>
                              </div>
                              return counter<br/>
                            </div><br/><br/>
                            def generateChart(data):<br/>
                            <div className="container-mid">
                              labels, values = zip(*data.items())<br/>
                              indexes = np.arange(len(labels))<br/>
                              fig, ax = plt.subplots()<br/>
                              plt.bar(indexes, values)<br/>
                              plt.xticks(indexes * 1.0, labels)<br/>
                              plt.show()<br/>
                            </div><br/><br/>
                            if __name__ == "__main__":<br/>
                            <div className="container-mid">
                              projects = fetchProjects()<br/>
                              data = getDataFromProjects(projects)<br/>
                              generateChart(data)<br/>
                            </div>
                          </div>
                        </code>
                      </pre>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                      <strong>Example 2</strong> Projects per Status
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="container-mid">
                    <p>Number of projects per status in Nepal</p>
                    <h2>JavaScript</h2>
                    <pre>
                      <code>
                        import React, {'{'} useEffect, useState {'}'} from "react";
                        import {'{'} Bar {'}'} from "react-chartjs-2";
                        interface Project {'{'}
                        id: number;
                        name: string;
                        status_display: string;
                        {'}'}
                        interface Dataset {'{'}
                        label: string;
                        data: number[];
                        backgroundColor: string[];
                        borderColor: string[];
                        borderWidth: number;
                        {'}'}
                        interface Data {'{'}
                        labels: string[];
                        datasets: Dataset[];
                        {'}'}
                        export const Chart: React.FC = () =&gt; {'{'}
                        const [projects, setProjects] = useState([]);
                        const [data, setData] = useState({'{'}{'}'});
                        const backgroundColors = [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                        ];
                        const borderColors = [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                        ];
                        const options = {'{'}
                        scales: {'{'}
                        yAxes: [
                        {'{'}
                        ticks: {'{'}
                        beginAtZero: true,
                        {'}'},
                        {'}'},
                        ],
                        {'}'},
                        {'}'};
                        const fetchProjects = () =&gt; {'{'}
                        fetch("https://goadmin.ifrc.org/api/v2/project/?country=NPL")
                        .then(response =&gt; response.json())
                        .then(data =&gt; {'{'}
                        setProjects(data.results);
                        setData(getChartDataFromProjects(projects));
                        {'}'});
                        {'}'};
                        useEffect(fetchProjects, [projects.length]);
                        const getChartDataFromProjects = (projects: Project[]) =&gt; {'{'}
                        const data: Data = {'{'}
                        labels: [],
                        datasets: [
                        {'{'}
                        label: "# of Projects",
                        data: [],
                        backgroundColor: [],
                        borderColor: [],
                        borderWidth: 1,
                        {'}'},
                        ],
                        {'}'};
                        projects.forEach(project =&gt; {'{'}
                        const dataIndex = data.labels.indexOf(
                        project.status_display
                        );
                        if (dataIndex &gt;= 0) {'{'}
                        data.datasets[0].data[dataIndex] += 1;
                        {'}'} else {'{'}
                        data.labels.push(project.status_display);
                        data.datasets[0].data.push(1);
                        data.datasets[0].backgroundColor = backgroundColors.slice(
                        0,
                        data.datasets[0].data.length
                        );
                        data.datasets[0].borderColor = borderColors.slice(
                        0,
                        data.datasets[0].data.length
                        );
                        {'}'}
                        {'}'});
                        return data;
                        {'}'};
                        return (
                        <div className="chart-container">
                          <bar data="{data}" options="{options}">
                          </bar></div>
                        );
                        {'}'};
                      </code>
                    </pre>
                    <div className="fold">
                      <h2>PYTHON</h2>
                      <pre>
                        <code>
                          import matplotlib.pyplot as plt
                          import requests
                          from collections import Counter
                          import numpy as np
                          def fetchProjects():
                          return requests.get("https://goadmin.ifrc.org/api/v2/project/?country=NPL").json()['results']
                          def getDataFromProjects(projects):
                          counter = Counter()
                          for project in projects:
                          counter[project['status_display']] += 1
                          return counter
                          def generateChart(data):
                          labels, values = zip(*data.items())
                          indexes = np.arange(len(labels))
                          fig, ax = plt.subplots()
                          plt.bar(indexes, values)
                          plt.xticks(indexes * 1.0, labels)
                          plt.show()
                          if __name__ == "__main__":
                          projects = fetchProjects()
                          data = getDataFromProjects(projects)
                          generateChart(data)
                        </code>
                      </pre>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <strong>Example 3</strong> Surge Alerts grouped by Deployment Needed
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="container-mid">
                    <p>Number of surge alerts for which deployment is needed</p>
                    <h2>JavaScript</h2>
                    <pre>
                      <code>
                        import React, {'{'} useEffect, useState {'}'} from 'react';
                        import {'{'} Bar {'}'} from 'react-chartjs-2';
                        interface SurgeAlert {'{'}
                        id: number;
                        deployment_needed: string;
                        {'}'}
                        interface Dataset {'{'}
                        label: string;
                        data: number[];
                        backgroundColor: string[];
                        borderColor: string[];
                        borderWidth: number;
                        {'}'}
                        interface Data {'{'}
                        labels: string[];
                        datasets: Dataset[];
                        {'}'}
                        export const Chart: React.FC = () =&gt; {'{'}
                        const [surgeAlerts, setSurgeAlerts] = useState([]);
                        const [data, setData] = useState({'{'}{'}'});
                        const backgroundColors = [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        ];
                        const borderColors = [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        ];
                        const options = {'{'}
                        scales: {'{'}
                        yAxes: [
                        {'{'}
                        ticks: {'{'}
                        beginAtZero: true,
                        {'}'},
                        {'}'},
                        ],
                        {'}'},
                        {'}'};
                        const fetchSurgeAlerts = () =&gt; {'{'}
                        fetch('https://goadmin.ifrc.org/api/v2/surge_alert/?limit=1000', {'{'}
                        headers: {'{'}
                        Authorization: 'Token GO_API_AUTHORIZATION_TOKEN',
                        {'}'},
                        {'}'})
                        .then((response) =&gt; response.json())
                        .then((data) =&gt; {'{'}
                        setSurgeAlerts(data.results);
                        setData(getChartDataFromSurgeAlerts(surgeAlerts));
                        {'}'});
                        {'}'};
                        useEffect(fetchSurgeAlerts, [surgeAlerts.length]);
                        const getChartDataFromSurgeAlerts = (surgeAlerts: SurgeAlert[]) =&gt; {'{'}
                        const data: Data = {'{'}
                        labels: [],
                        datasets: [
                        {'{'}
                        label: '# of Surge Alerts',
                        data: [],
                        backgroundColor: [],
                        borderColor: [],
                        borderWidth: 1,
                        {'}'},
                        ],
                        {'}'};
                        surgeAlerts.forEach((surgeAlert) =&gt; {'{'}
                        const dataIndex = data.labels.indexOf(surgeAlert.deployment_needed);
                        if (dataIndex &gt;= 0) {'{'}
                        data.datasets[0].data[dataIndex] += 1;
                        {'}'} else {'{'}
                        data.labels.push(surgeAlert.deployment_needed);
                        data.datasets[0].data.push(1);
                        data.datasets[0].backgroundColor = backgroundColors.slice(
                        0,
                        data.datasets[0].data.length
                        );
                        data.datasets[0].borderColor = borderColors.slice(
                        0,
                        data.datasets[0].data.length
                        );
                        {'}'}
                        {'}'});
                        return data;
                        {'}'};
                        return (
                        <div classname="chart-container">
                          <bar data="{data}" options="{options}">
                          </bar></div>
                        );
                        {'}'};
                      </code>
                    </pre>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <strong>Example 4</strong> Get Appeal Documents by Appeal Code
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="container-mid">
                    <p>Search for appeal documents by an appeal code</p>
                    <h2>JavaScript</h2>
                    <pre>
                      <code>
                        const getAppealDocumentsByAppealCode = (appealCode: string) =&gt; {'{'}
                        fetch(`https://goadmin.ifrc.org/api/v2/appeal/?limit=1&amp;code=${'{'}appealCode{'}'}`)
                        .then((response) =&gt; response.json())
                        .then((response) =&gt; {'{'}
                        const appealId = response.results[0].aid;
                        fetch(
                        `https://goadmin.ifrc.org/api/v2/appeal_document/?limit=10&amp;appeal=${'{'}appealId{'}'}`
                        )
                        .then((response) =&gt; response.json())
                        .then((response) =&gt; {'{'}
                        console.log(JSON.stringify(response.results));
                        {'}'});
                        {'}'});
                        {'}'};
                        getAppealDocumentsByAppealCode('MDRCM002');
                        /*
                        [
                        {'{'}
                        "created_at": "2021-02-20T00:00:00Z",
                        "document": null,
                        "document_url": "https://www.ifrc.org/docs/appeals/Active/MDRGN012.pdf",
                        "appeal": 3388,
                        "id": 2699,
                        "name": "Donor Response"
                        {'}'},
                        {'{'}
                        "created_at": "2021-02-18T00:00:00Z",
                        "document": null,
                        "document_url": "https://www.ifrc.org/docs/Appeals/21/IB%20Guinea_Ebola%20Virus%20Disease.pdf",
                        "appeal": 3388,
                        "id": 2697,
                        "name": "IB Guinea_Ebola Virus Disease"
                        {'}'},
                        {'{'}
                        "created_at": "2021-02-17T00:00:00Z",
                        "document": null,
                        "document_url": "https://adore.ifrc.org/Download.aspx?FileId=386727",
                        "appeal": 3388,
                        "id": 2696,
                        "name": "DREF Operation"
                        {'}'}
                        ]
                        */
                      </code>
                    </pre>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <strong>Example 5</strong> Events in Countries
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="container-mid">
                    <p>Number of events in India, Indonesia, Suriname, Nepal and Bangladesh</p>
                    <h2>JavaScript</h2>
                    <pre>
                      <code>
                        import React, {'{'} useCallback, useEffect, useState {'}'} from 'react';
                        import {'{'} Bar {'}'} from 'react-chartjs-2';
                        interface Dataset {'{'}
                        label: string;
                        data: number[];
                        backgroundColor: string[];
                        borderColor: string[];
                        borderWidth: number;
                        {'}'}
                        interface Data {'{'}
                        labels: string[];
                        datasets: Dataset[];
                        {'}'}
                        interface GoAPIResponse {'{'}
                        count: number;
                        next: string;
                        previous: string;
                        results: GoAPIResponseResult[];
                        {'}'}
                        interface ReliefWebAPIResponse {'{'}
                        count: number;
                        next: string;
                        previous: string;
                        results: GoAPIResponseResult[];
                        data: ReliefWebAPIResponseData[];
                        embedded: ReliefWebAPIResponseEmbedded;
                        href: string;
                        time: number;
                        took: number;
                        totalCount: number;
                        {'}'}
                        interface GoAPIResponseResult {'{'}
                        [key: string]: string;
                        {'}'}
                        interface ReliefWebAPIResponseData {'{'}
                        [key: string]: string;
                        {'}'}
                        interface ReliefWebAPIResponseEmbedded {'{'}
                        facets: ReliefWebAPIResponseFacets;
                        {'}'}
                        interface ReliefWebAPIResponseFacets {'{'}
                        [key: string]: ReliefWebAPIResponseFacet;
                        {'}'}
                        interface ReliefWebAPIResponseFacet {'{'}
                        data: ReliefWebAPIResponseFacetData[];
                        missing: number;
                        more: boolean;
                        type: string;
                        {'}'}
                        interface ReliefWebAPIResponseFacetData {'{'}
                        value: string;
                        count: number;
                        {'}'}
                        function ObjectByString(o: any, s: string) {'{'}
                        s = s.replace(/[(w+)]/g, '.$1'); // convert indexes to properties
                        s = s.replace(/^./, ''); // strip a leading dot
                        const a = s.split('.');
                        for (var i = 0, n = a.length; i &lt; n; ++i) {'{'}
                        const k = a[i];
                        if (k in o) {'{'}
                        o = o[k];
                        {'}'} else {'{'}
                        return;
                        {'}'}
                        {'}'}
                        return o;
                        {'}'}
                        export const Chart: React.FC = () =&gt; {'{'}
                        const [data, setData] = useState({'{'}{'}'} as Data);
                        const goAPIUrl =
                        'https://goadmin.ifrc.org/api/v2/event/?countries__in=123%2C84%2C85%2C180&amp;format=json&amp;limit=1000';
                        const goAPILabel = '# of Events in Go';
                        const goAPIKey = 'countries.0.iso3';
                        const reliefWebFacet = 'primary_country.iso3';
                        const reliefWebLabel = '# of Events in ReliefWeb';
                        const reliefWebFacetValues = ['IND', 'NPL', 'SUR', 'IDN', 'BGD'];
                        const reliefWebUrl =
                        'https://api.reliefweb.int/v1/disasters?appname=how-to-use-the-go-api&amp;appname=how-to-use-the-go-api';
                        const backgroundColors = [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        ];
                        const borderColors = [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        ];
                        const options = {'{'}
                        scales: {'{'}
                        yAxes: [
                        {'{'}
                        ticks: {'{'}
                        beginAtZero: true,
                        {'}'},
                        {'}'},
                        ],
                        {'}'},
                        {'}'};
                        const reliefWeb = useCallback(() =&gt; {'{'}
                        const callReliefWebAPIBody = {'{'}
                        limit: 1000,
                        preset: 'latest',
                        facets: [
                        {'{'}
                        field: reliefWebFacet,
                        {'}'},
                        ],
                        filter: {'{'}
                        conditions: [
                        {'{'}
                        field: reliefWebFacet,
                        value: reliefWebFacetValues,
                        operator: 'OR',
                        {'}'},
                        ],
                        {'}'},
                        {'}'};
                        return fetch(reliefWebUrl, {'{'}
                        body: JSON.stringify(callReliefWebAPIBody),
                        method: 'POST',
                        {'}'})
                        .then((response) =&gt; response.json())
                        .then((reliefWebResponse: ReliefWebAPIResponse): void =&gt; {'{'}
                        const parsedReliefWebAPIResponse = reliefWebResponse.embedded.facets[
                        reliefWebFacet
                        ].data.map(
                        (
                        reliefWebAPIResponseFacetData: ReliefWebAPIResponseFacetData
                        ) =&gt; reliefWebAPIResponseFacetData.count
                        );
                        if (data.datasets[0] &amp;&amp; data.datasets.length &lt; 2) {'{'}
                        const reliefWebDataset: Dataset = {'{'}
                        label: reliefWebLabel,
                        data: parsedReliefWebAPIResponse,
                        backgroundColor: Array(data.labels.length).fill(
                        backgroundColors[1]
                        ),
                        borderColor: Array(data.labels.length).fill(
                        borderColors[1]
                        ),
                        borderWidth: 1,
                        {'}'};
                        const newDatasets = data.datasets.concat(reliefWebDataset);
                        const newData = {'{'} ...data {'}'};
                        newData.datasets = newDatasets;
                        newData.datasets[0].backgroundColor = Array(
                        data.labels.length
                        ).fill(backgroundColors[0]);
                        newData.datasets[0].borderColor = Array(
                        data.labels.length
                        ).fill(borderColors[0]);
                        setData(newData);
                        {'}'}
                        {'}'});
                        {'}'}, [
                        reliefWebFacet,
                        reliefWebFacetValues,
                        reliefWebUrl,
                        data,
                        backgroundColors,
                        borderColors,
                        ]);
                        useEffect(() =&gt; {'{'}
                        reliefWeb();
                        {'}'}, [reliefWeb]);
                        const callGoAPI = () =&gt; {'{'}
                        fetch(goAPIUrl)
                        .then((response) =&gt; response.json())
                        .then((goAPIResponse: GoAPIResponse): void =&gt; {'{'}
                        const parsedGoAPIResponse = getDataFromResponseResults(
                        goAPIResponse.results,
                        goAPILabel,
                        goAPIKey
                        );
                        setData(parsedGoAPIResponse);
                        {'}'});
                        {'}'};
                        useEffect(callGoAPI, [data]);
                        const getDataFromResponseResults = (
                        responseResults: GoAPIResponseResult[],
                        responseResultLabel: string,
                        responseResultKey: string
                        ) =&gt; {'{'}
                        const data: Data = {'{'}
                        labels: [],
                        datasets: [
                        {'{'}
                        label: responseResultLabel,
                        data: [],
                        backgroundColor: [],
                        borderColor: [],
                        borderWidth: 1,
                        {'}'},
                        ],
                        {'}'};
                        responseResults.forEach((responseResult) =&gt; {'{'}
                        const responseResultValue = ObjectByString(
                        responseResult,
                        responseResultKey
                        );
                        const dataIndex = data.labels.indexOf(responseResultValue);
                        if (dataIndex &gt;= 0) {'{'}
                        data.datasets[0].data[dataIndex] += 1;
                        {'}'} else {'{'}
                        data.labels.push(responseResultValue);
                        data.datasets[0].data.push(1);
                        data.datasets[0].backgroundColor = backgroundColors.slice(
                        0,
                        data.datasets[0].data.length
                        );
                        data.datasets[0].borderColor = borderColors.slice(
                        0,
                        data.datasets[0].data.length
                        );
                        {'}'}
                        {'}'});
                        return data;
                        {'}'};
                        return <bar data="{data}" options="{options}">;
                          {'}'};
                        </bar>
                      </code>
                    </pre>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <strong>Example 6</strong> Get API response in a supported language
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="container-mid">
                    <p>Number of projects per status in Nepal, same as example 2, but the API response is in Spanish</p>
                    <p>This is accomplished by setting an <code>Accept-Language</code> request header in the request.</p>
                    <p>The value should be the two letter language code you want responses in,</p>
                    <div className="container-mid">
                      <ul className="container-mid">
                        <li><code>en</code> for English</li>
                        <li><code>fr</code> for French</li>
                        <li><code>es</code> for Spanish</li>
                        <li><code>ar</code> for Arabic</li>
                      </ul>
                    </div>
                    <div className="fold">
                      <h2>JavaScript</h2>
                      <pre>
                        <code>
                          import React, {'{'} useEffect, useState {'}'} from "react";
                          import {'{'} Bar {'}'} from "react-chartjs-2";
                          interface Project {'{'}
                          id: number;
                          name: string;
                          status_display: string;
                          {'}'}
                          interface Dataset {'{'}
                          label: string;
                          data: number[];
                          backgroundColor: string[];
                          borderColor: string[];
                          borderWidth: number;
                          {'}'}
                          interface Data {'{'}
                          labels: string[];
                          datasets: Dataset[];
                          {'}'}
                          export const Chart: React.FC = () =&gt; {'{'}
                          const [projects, setProjects] = useState([]);
                          const [data, setData] = useState({'{'}{'}'});
                          const backgroundColors = [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(255, 206, 86, 0.2)",
                          "rgba(75, 192, 192, 0.2)",
                          "rgba(153, 102, 255, 0.2)",
                          "rgba(255, 159, 64, 0.2)",
                          ];
                          const borderColors = [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                          ];
                          const options = {'{'}
                          scales: {'{'}
                          yAxes: [
                          {'{'}
                          ticks: {'{'}
                          beginAtZero: true,
                          {'}'},
                          {'}'},
                          ],
                          {'}'},
                          {'}'};
                          const fetchProjects = () =&gt; {'{'}
                          fetch("https://goadmin.ifrc.org/api/v2/project/?country=NPL", {'{'}
                          headers: {'{'}
                          "Accept-Language": "es"
                          {'}'},
                          {'}'})
                          .then(response =&gt; response.json())
                          .then(data =&gt; {'{'}
                          setProjects(data.results);
                          setData(getChartDataFromProjects(projects));
                          {'}'});
                          {'}'};
                          useEffect(fetchProjects, [projects.length]);
                          const getChartDataFromProjects = (projects: Project[]) =&gt; {'{'}
                          const data: Data = {'{'}
                          labels: [],
                          datasets: [
                          {'{'}
                          label: "# of Proyectos",
                          data: [],
                          backgroundColor: [],
                          borderColor: [],
                          borderWidth: 1,
                          {'}'},
                          ],
                          {'}'};
                          projects.forEach(project =&gt; {'{'}
                          const dataIndex = data.labels.indexOf(
                          project.status_display
                          );
                          if (dataIndex &gt;= 0) {'{'}
                          data.datasets[0].data[dataIndex] += 1;
                          {'}'} else {'{'}
                          data.labels.push(project.status_display);
                          data.datasets[0].data.push(1);
                          data.datasets[0].backgroundColor = backgroundColors.slice(
                          0,
                          data.datasets[0].data.length
                          );
                          data.datasets[0].borderColor = borderColors.slice(
                          0,
                          data.datasets[0].data.length
                          );
                          {'}'}
                          {'}'});
                          return data;
                          {'}'};
                          return (
                          <div classname="chart-container">
                            <bar data="{data}" options="{options}">
                            </bar></div>
                          );
                          {'}'};
                        </code>
                      </pre>
                    </div>
                    <h2>PYTHON</h2>
                    <pre>
                      <code>
                        import matplotlib.pyplot as plt
                        import requests
                        from collections import Counter
                        import numpy as np
                        def fetchProjects():
                        return requests.get("https://goadmin.ifrc.org/api/v2/project/?country=NPL", headers={'{'} "Accept-Language": "es" {'}'}).json()['results']
                        def getDataFromProjects(projects):
                        counter = Counter()
                        for project in projects:
                        counter[project['status_display']] += 1
                        return counter
                        def generateChart(data):
                        labels, values = zip(*data.items())
                        indexes = np.arange(len(labels))
                        fig, ax = plt.subplots()
                        plt.bar(indexes, values)
                        plt.xticks(indexes * 1.0, labels)
                        plt.show()
                        if __name__ == "__main__":
                        projects = fetchProjects()
                        data = getDataFromProjects(projects)
                        generateChart(data)
                      </code>
                    </pre>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
          </Accordion>
          <div className="fold">
            <p><strong><a href="https://goadmin.ifrc.org/docs/" target="_blank" rel="noreferrer"><span class="icon-demo f-icon-pages"></span>Documentation</a></strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GoApiPage;
