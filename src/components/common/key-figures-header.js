import React, { useContext } from 'react';
// import c from 'classnames';
import { percent, shortenLargeNumber } from '../common/format';
// import BlockLoading from '#components/block-loading';
import { PropTypes as T } from 'prop-types';
import Tooltip from '../tooltip';

import LogoDref from "../../assets/graphics/layout/logo-dref.svg";
import activeAppeals from "../../assets/graphics/layout/logo-appeals.svg";
import budget from "../../assets/graphics/layout/funding-requirements.svg";
import appealsFunding from "../../assets/graphics/layout/funding-coverage.svg";
import targetPop from "../../assets/graphics/layout/targeted-population.svg";

const keyFiguresList = ['activeDrefs', 'activeAppeals', 'budget', 'appealsFunding', 'targetPop'];

const keyIconSrc = {
    activeDrefs: LogoDref,
    activeAppeals: activeAppeals,
    budget: budget,
    appealsFunding: appealsFunding,
    targetPop: targetPop
};

const keyFigures = {
    keyFiguresError: 'Data not available.',
    keyFiguresHeading: 'IFRC Disaster Response and Preparedness',
    keyFiguresStatsOverall: 'Overall stats',
    keyFiguresActiveDrefs: 'Active DREF Operations',
    keyFiguresActiveAppeals: 'Active Emergency Appeals',
    keyFiguresBudget: 'Funding requirements (CHF)',
    keyFiguresAppealsFunding: 'Funding coverage',
    keyFiguresTargetPop: 'Targeted population',
    keyFiguresDrefTitle: 'DREF',
    keyFiguresDrefDescription: 'These are small to medium scale emergency operations funded through the Disaster Relief Emergency Fund (DREF).The DREF provides immediate financial support to National Red Cross and Red Crescent Societies, enabling them to carry out their unique role as first responders after a disaster.',
    keyFigureActiveAppealTitle: 'Emergency Appeal',
    keyFigureActiveAppealDescription: 'These are medium to large scale emergency operations funded through a public appeal for funds.',
};

export default function KeyFiguresHeader (props) {
    const {
        data: {
            stats
        } = {},
        fetched,
        // fetching,
        error
    } = props.appealsListStats;

    // const { strings } = useContext(LanguageContext);

    const keyTitle = {
        activeDrefs: keyFigures['keyFiguresActiveDrefs'],
        activeAppeals: keyFigures['keyFiguresActiveAppeals'],
        budget: keyFigures['keyFiguresBudget'],
        appealsFunding: keyFigures['keyFiguresAppealsFunding'],
        targetPop: keyFigures['keyFiguresTargetPop']
    };
    // Lists two tooltip descriptions currently in use.
    const tooltipOptions = {
        activeDrefs: {
            title: keyFigures['keyFiguresDrefTitle'],
            description: keyFigures['keyFiguresDrefDescription'],
        },
        activeAppeals: {
            title: keyFigures['keyFigureActiveAppealTitle'],
            description: keyFigures['keyFigureActiveAppealDescription']
        }
    };

    // if (fetching) {
    //     return <BlockLoading/>;
    // }

    // if (error) {
    //     return <p>{strings.keyFiguresError}</p>;
    // }
    //
    // if (!fetched || error) { return null; }

    /**
     * @return {Array} of key figures with edited numbers to fit format.
     */
    const filteredKeyFigures = () => {
        return Object.keys(stats).map(stat => {
            let value = stats[stat];
            // Applies common util to long numbers
            const statsToShorten = ['budget', 'targetPop', 'amountFunded', 'amountRequested', ''];
            // if (statsToShorten.includes(stat)) {
            //     value = value;
            // }
            // Applies common util to create percent
            if (stat === 'appealsFunding' && stats.appealsBudget) {
                value = `${percent(stats.appealsFunding, stats.appealsBudget, 1)}%`;
                // value = '1234%';
            }
            return {
                id: stat,
                title: keyTitle[stat],
                value,
                icon: keyIconSrc[stat],
                // icon: keyIcon[stat],
                tooltip: tooltipOptions[stat] || null
            };
        }).filter(figure => keyFiguresList.includes(figure.id));
    };

    return (
        <div className='container-lg'>
            <div className='stats-overall'>
                <h1 className='visually-hidden'>
                    {keyFigures['keyFiguresStatsOverall']}
                </h1>
                <div className='sumstats__wrap'>
                    <ul className='sumstats'>
                        {filteredKeyFigures().map(keyFigure => (
                            <li key={keyFigure.id} className='sumstats__item__wrap'>
                                <div className='sumstats__item'>
                                    {/* <span className={c(`${keyFigure.icon}`, 'sumstats__icon')}></span> */}
                                    <span className='sumstats__icon_wrapper'>
                    <img className='sumstats__icon_2020' src={keyFigure.icon} />
                  </span>
                                    <span className='sumstats__value'>{keyFigure.value}</span>
                                    <span className='sumstats__key'>
                    {keyFigure.title}
                                        {keyFigure.tooltip ? <Tooltip title={keyFigure.tooltip.title} description={keyFigure.tooltip.description}/> : null}
                  </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

    KeyFiguresHeader.propTypes = {
        appealsListStats: T.object,
        data: T.object,
        fullscreen: T.bool
    };

