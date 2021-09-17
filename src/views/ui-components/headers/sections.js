import React from "react";
import {PropTypes as T} from 'prop-types';
import LanguageContext from '../../../languageContext';
import c from 'classnames';
import Button from "../../../components/button";
import TabsContent from "../../../components/tab-content";

class Sections extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.data;
    }

    render() {

        const backLink = this.state.backLink;
        const center = false;
        const columns = 'twoColumn';
        const sections = 'fold__center'
        if (backLink) {
            this.center = 'center';
        }
        if (this.state.backLink && this.state.right) {
            this.columns = 'threeColumn';
            this.sections = 'row';
        } else {
            this.columns = 'twoColumn';
            this.sections = 'row block';
        }

        return (
            <div className='inner'>

                <div className='fold__center'>
                    <div className={this.sections}>
                        {this.state.backLink ?
                            <div className={this.columns}>
                                <Button
                                    size="small"
                                    text={this.state.backLink['name']}
                                    icon="back"
                                />
                            </div> : null}
                        <div className={this.columns}>
                            <div className={this.center}>
                                <h2 className="fold__title fold__title--inline">{this.state.title}</h2>

                                {this.state.description ?
                                    <div className='fold__description'>
                                        {this.state.description}</div>
                                    : null}
                            </div>
                        </div>
                        {this.state.right ?
                            <div className={this.columns}>
                                <div className="right">
                                    <a className="fold__title__link" href={this.state.right['link']}>
                                        <span className="">{this.state.right['name']}</span>
                                    </a>
                                </div>
                            </div> : null}
                    </div>

                </div>
                {this.state.list ?
                    <div className="fold__tabs">
                        <div className={c('column', this.center)}>
                            <TabsContent
                                tabs={this.state.list}
                            ></TabsContent>
                        </div>
                    </div> : null}


            </div>
        );
    }

}

export default Sections;

Sections.contextType = LanguageContext;

Sections.propTypes = {
    option: T.string
    ,
    type: T.string
    ,
    autoDismiss: T.string
    ,
    popover: T.bool
    ,
    children: T.node
    ,
    text: T.string
    ,
    _hide: T.func
    ,
}

;