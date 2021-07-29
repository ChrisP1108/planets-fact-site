import { useState } from 'react';
import { TABS, INFODATA } from '../../Content';

import '../../App.css';
import './Page.css';
import './Mercury.css';
import './Venus.css';
import './Earth.css';
import './Mars.css';
import './Jupiter.css';
import './Saturn.css';
import './Uranus.css';
import './Neptune.css';

const Page = ({ content }) => {

    const [reset, setReset] = useState(content.name);
    const [overview, setOverview] = useState(true);
    const [structure, setStructure] = useState(false);
    const [surface, setSurface] = useState(false);

    const tabActivate = tab => {
        switch(tab) {
            case 'structure':
                setOverview(false);
                setStructure(true);
                setSurface(false);
                break;
            case 'surface':
                setOverview(false);
                setSurface(true);
                setStructure(false);
                break;
            default:
                setOverview(true);
                setStructure(false);
                setSurface(false);
                break;
        }
    }

    if (reset !== content.name) {
        tabActivate();
        setReset(content.name);
        window.scrollTo(0, 0);
        console.log('State Reset');
    }

    const tabMapping = TABS.map(tab => {
        return (
            <div key={tab.id} onClick={() => tabActivate(tab.name)}  
                className={`${eval(tab.name) ? `${content.name}-Border-Fill` : `tab-border-box`} 
                            tab-format col-4 ${content.name}-Text-Hover`}>
                {/* Mobile Version*/}
                <h2 className={`d-block d-md-none mobile-hover-select`}>
                    <span 
                        className={`${eval(tab.name) && `Select-${content.name}`} mobile-border-line`}>
                        {tab.mobileName}</span></h2>
                {/* Tablet & Desktop Version */}
                <div className="d-none d-md-flex">
                    <h2 className="tab-number-format">{`0${tab.id}`}</h2>
                    <h2>{tab.regularName}</h2>
                </div>
            </div>
        );
    });
    
    const dataMapping = INFODATA.map(data => {
        return (
            <div key={data.id} className="info-border-box">
                {/* Mobile Version*/}
                <div className="d-md-none row no-padding no-margin">
                    <div className="col-6 col-md-12 my-auto no-padding">
                        <h4>{data.title}</h4>
                    </div>
                    <div className="col-6 col-md-12 my-auto no-padding">
                        <h5>{eval(data.reference)}</h5>
                    </div>
                </div>
                {/* Tablet & Desktop Version */}
                <div className="d-none d-md-block">
                    <h4>{data.title}</h4>
                    <h5>{eval(data.reference).toUpperCase()}</h5>
                </div>
            </div>
        );
    });

    return (
        <div className="page">
            <div className="row no-margin">
                <div className="col-12 col-md-6 bottom-border order-md-3 tabs-container-top-margin 
                    ml-md-1 tab-padding d-xl-none">
                    <div className="row m-0">
                        {tabMapping}
                    </div>
                </div>
                <div className="col-12 col-xl-7 planet-space no-padding position-relative order-md-1">
                    <div className={`${overview || surface ? `Planet-${content.name}` 
                        : `Internal-${content.name}`} planet-positioning`}>
                    </div>
                    <div className={`${surface ? `Geology-${content.name}` 
                        : `d-none`} geology-positioning`}>
                    </div>
                </div>
                <div className="col-md-6 col-xl-4 order-md-2 p-md-0">
                    <div className="col-12 text-center text-md-center side-padding">
                        <h1>{content.name.toUpperCase()}</h1>
                    </div>
                    <div className="col-12 text-center side-padding">
                        <h6>{overview ? content.overview.content : structure ? content.structure.content 
                        : content.geology.content}</h6>
                    </div>
                    <div className="col-12 col-md-12 d-none link d-xl-flex justify-content-center 
                        justify-content-md-start order-md-3 order-xl-3">
                        <h3>Source : <a target="_blank" rel="noreferrer" 
                            href={content.overview.source}>Wikipedia</a>
                        </h3>
                        <a className="wiki-link my-auto" rel="noreferrer" 
                            target="_blank" href={content.overview.source}>
                        </a>
                    </div>
                    <div className="col-12 bottom-border order-md-3 tabs-container-top-margin ml-md-1 
                        tab-padding d-none d-xl-block">
                        <div className="row m-0">
                            {tabMapping}
                        </div>
                </div>
                </div>
                <div className="col-12 col-md-12 col-xl-4 mt-4 side-padding link d-flex d-xl-none 
                    justify-content-center justify-content-md-start order-md-3 order-xl-3">
                    <h3>Source : <a target="_blank" rel="noreferrer" 
                        href={content.overview.source}>Wikipedia</a>
                    </h3>
                    <a className="wiki-link my-auto" rel="noreferrer" 
                        target="_blank" href={content.overview.source}>
                    </a>
                </div>
                <div className="data-container data-padding order-md-4 d-md-flex justify-content-md-between 
                    justify-content-xl-between">
                    {dataMapping}
                </div>
            </div>
        </div>
    )
}

export default Page
