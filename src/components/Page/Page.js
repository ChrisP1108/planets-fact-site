import { useState } from 'react';
import { TABDATA } from '../../Content';

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
            case 'Structure':
                setOverview(false);
                setStructure(true);
                setSurface(false);
                break;
            case 'Surface':
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
        console.log('State Reset');
    }
    
    const tabMapping = TABDATA.map(tab => {

        return (
            <div key={tab.id} className="info-border-box">
                <div className="row no-padding no-margin">
                    <div className="col-6 my-auto no-padding">
                        <h4>{tab.title}</h4>
                    </div>
                    <div className="col-6 my-auto no-padding">
                        <h5>{eval(tab.reference)}</h5>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="page">
            <div className="row no-margin">
                <div className="col-12 no-padding bottom-border">
                    <div className="row m-0 justify-content-center">
                        <div className="col-4 p-0">
                            <h2><span onClick={() => tabActivate()} 
                                    className={`${overview && `Select-${content.name}`} mobile-hover-select mobile-border-line`}>
                                    OVERVIEW</span></h2>
                        </div>
                        <div className="col-4 p-0">
                            <h2 className={`d-block d-md-none mobile-hover-select`}>
                                <span onClick={() => tabActivate('Structure')}
                                    className={`${structure && `Select-${content.name}`} mobile-hover-select mobile-border-line`}>
                                    STRUCTURE</span></h2>
                            <h2 className={`d-none d-md-block`}>INTERNAL STRUCTURE</h2>
                        </div>
                        <div className="col-4 p-0">
                            <h2 className={`d-block d-md-none mobile-hover-select`}>
                                <span onClick={() => tabActivate('Surface')}
                                    className={`${surface && `Select-${content.name}`} mobile-hover-select mobile-border-line`}>
                                    SURFACE</span></h2>
                            <h2 className={`d-none d-md-block`}>SURFACE GEOLOGY</h2>
                        </div>
                    </div>
                </div>
                <div className="col-12 planet-space no-padding position-relative">
                    <div className={`${overview || surface ? `Planet-${content.name}` 
                        : `Internal-${content.name}`} planet-positioning`}>
                    </div>
                    <div className={`${surface ? `Geology-${content.name}` 
                        : `d-none`} geology-positioning`}>
                    </div>
                </div>
                <div className="col-12 text-center side-padding">
                    <h1>{content.name.toUpperCase()}</h1>
                </div>
                <div className="col-12 text-center mt-4 side-padding">
                    <p>{overview ? content.overview.content : structure ? content.structure.content : content.geology.content}</p>
                </div>
                <div className="col-12 text-center mt-4 side-padding link d-flex justify-content-center">
                    <h3>Source : <a target="_blank" rel="noreferrer" href={content.overview.source}>Wikipedia 
                        <span className="wiki-link"></span>
                        </a>
                    </h3> 
                </div>
                <div className="info-container side-padding">
                    {tabMapping}
                </div>
            </div>
        </div>
    )
}

export default Page
