import React from "react";

const DesignPage = () => {
    return (
        <div className="inner">
            <div className="fold__body">
                <div className="container-full">
                    <h1>IFRC Design Guidelines</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                        dictum elit ac tincidunt consectetur. Sed malesuada sapien at turpis
                        pharetra, vel sodales lectus venenatis. Morbi feugiat quam pretium
                        placerat rhoncus. Pellentesque volutpat consectetur ex non rhoncus.
                        Praesent metus augue, tincidunt ut turpis ac, interdum rhoncus
                        mauris. Integer elementum facilisis libero ac sodales. Phasellus a
                        accumsan sem.
                    </p>

                    <div className="fold__header__block">
                        <h2 className="fold__title margin-reset">Design guidelines</h2>
                    </div>
                    <div className="fold__header__block">
                        Color should be applied throughout the UI consistently and be compatible with the GO brand.
                    </div>
                    <div className="fold__header__block">
                        Product icons are the visual expression of a brand and product. Icons communicate the core idea
                        and intent of a product in a simple, bold, and friendly way. While each icon is visually
                        distinct, all product icons for a brand should be unified through concept and execution.
                    </div>
                    <div className="fold__header__block">
                        Consistency in the use of a typeface plays an important role in reinforcing GO’s image.
                        Maintaining rules of type layout will help ensure the uniform identity.
                    </div>
                    <div className="fold__header__block">
                        GO and IFRC logos are clear, impactful and recognizable. Following the IFRC guidelines for the
                        logo is critical and required.
                    </div>
                    <div className="fold__header__block">
                        Follow the principle of creating an aesthetic and minimalist design, displaying only the
                        relevant things on simple, clear interfaces.
                    </div>
                </div>
                <div className="box_space">
                    <div className="fold__header__block">
                        <h2 className="fold__title margin-reset">Design guidelines</h2>
                    </div>
                    <div className="fold__header__block">
                        The goal is to design intuitive and simple interfaces — interfaces that don’t require
                        instructions or even a long process of trial and error to figure them out. Key to intuitive
                        design is to make use of what people already know or create something new that is easy to learn.
                    </div>
                    <div className="fold__header__block">
                        A key element of usability is simple and accessible navigation. The users should at all times
                        know where they are on the platform and how to navigate back.
                    </div>
                    <div className="fold__header__block">
                        In some cases, the content may be long and require scrolling. The horizontal scrolling should be
                        avoided on the platform, while the vertical scrolling should be kept to the minimum to avoid
                        information overload. It is best to split the content into separate sections (such as “View all”
                        button on the GO) or add pagination (especially on tables).
                    </div>
                    <div className="fold__header__block">
                        Follow the terminology use on GO and apply it consistently to avoid misconceptions and
                        duplications of information.
                    </div>
                    <div className="fold__header__block">
                        The users should be guided through the platform and clearly notified in case of an error. The
                        error messaging needs to be explicit and guide the user on what to do next.
                    </div>
                    <div className="fold__header__block">
                        When it comes to page interactions, the interface must have visual cues in guiding the users on
                        where to click (such as explicit hover states and/or icons). Many of the GO users are located in
                        low-bandwidth internet settings. Thus, it is important to consider whether interactions and
                        other media may add an additional load for the page.
                    </div>
                    <div className="fold__header__block">
                        The interfaces should try to accommodate all potential users in many contexts of use, especially
                        people with disabilities, following accessibility guidelines.
                    </div>
                    <div className="fold__header__block">
                        The key to better usability is continuous testing. Identify the users early on and validate all
                        the iterations to identify pitfalls and areas of improvement.
                    </div>

                </div>

            </div>

        </div>
    );
};
export default DesignPage;
