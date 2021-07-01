import React from "react";

const DesignPage = () => {
  return (
    <div className="inner">
      <div className="fold__header">
        <h1>Design and Usability Principles</h1>
          <p>The following are the guidelines on how to shape the experiences across the GO platform and other use cases. These are important to follow to create consistency in visual elements and in user experience.</p>
      </div>
      <br/>
      <div>
        <div className="fold__header">
          <div className="container-mid">
            <div className="fold__header__block">
              <h2 className="fold__title margin-reset">Design guidelines</h2>
            </div>
          </div>
        </div>

        <div className="fold__body">
          <div className="container-mid">
            <p>Color should be applied throughout the UI consistently and be compatible with the GO brand.</p>
            <hr/>
            <p>Product icons are the visual expression of a brand and product. Icons communicate the core idea and intent of a product in a simple, bold, and friendly way. While each icon is visually distinct, all product icons for a brand should be unified through concept and execution.</p>
            <hr/>
            <p>Consistency in the use of a typeface plays an important role in reinforcing GO’s image. Maintaining rules of type layout will help ensure the uniform identity. </p>
            <hr/>
            <p>GO and IFRC logos are clear, impactful and recognizable. Following the IFRC guidelines for the logo is critical and required.</p>
            <hr/>
            <p>Follow the principle of creating an aesthetic and minimalist design, displaying only the relevant things on simple, clear interfaces.</p>
            <hr/>
          </div>
        </div>
      </div>
      <br/><br/>
      
      <div className="fold">
        <div className="fold__header">
          <div className="container-mid">
            <div className="fold__header__block">
              <h2 className="fold__title margin-reset">Usability guidelines</h2>
            </div>
          </div>
        </div>

        <div className="fold__body">
          <div className="container-mid">
            <p>The goal is to design intuitive and simple interfaces — interfaces that don’t require instructions or even a long process of trial and error to figure them out. Key to intuitive design is to make use of what people already know or create something new that is easy to learn.</p>
            <hr/>
            <p>A key element of usability is simple and accessible navigation. The users should at all times know where they are on the platform and how to navigate back.</p>
            <hr/>
            <p>In some cases, the content may be long and require scrolling. The horizontal scrolling should be avoided on the platform, while the vertical scrolling should be kept to the minimum to avoid information overload. It is best to split the content into separate sections (such as “View all” button on the GO) or add pagination (especially on tables).</p>
            <hr/>
            <p>Follow the terminology use on GO and apply it consistently to avoid misconceptions and duplications of information.</p>
            <hr/>
            <p>The users should be guided through the platform and clearly notified in case of an error. The error messaging needs to be explicit and guide the user on what to do next.</p>
            <hr/>
            <p>When it comes to page interactions, the interface must have visual cues in guiding the users on where to click (such as explicit hover states and/or icons). Many of the GO users are located in low-bandwidth internet settings. Thus, it is important to consider whether interactions and other media may add an additional load for the page.</p>
            <hr/>
            <p>The interfaces should try to accommodate all potential users in many contexts of use, especially people with disabilities, following accessibility guidelines. </p>
            <hr/>
            <p>The key to better usability is continuous testing. Identify the users early on and validate all the iterations to identify pitfalls and areas of improvement.</p>
            <hr/>
          </div>
        </div>
      </div>

    </div>
  );
};
export default DesignPage;
