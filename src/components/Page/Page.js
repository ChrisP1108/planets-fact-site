import { useState } from 'react';

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

    const [overview, setOverview] = useState(true);
    const [structure, setStructure] = useState(false);
    const [surface, setSurface] = useState(false);

    const tabActivate = tab => {
        if (tab === 'Overview') {
            setOverview(true);
            setStructure(false);
            setSurface(false);
        } else if (tab === 'Structure') {
            setOverview(false);
            setStructure(true);
            setSurface(false);
        } else {
            setOverview(false);
            setSurface(true);
            setStructure(false);
        }
    }

    return (
        <div className="page">
            <div className="row no-margin">
                <div className="col-12 no-padding bottom-border">
                    <div className="row m-0 justify-content-center">
                        <div className="col-4 p-0">
                            <h2><span onClick={() => tabActivate('Overview')} 
                                    className={`${overview && `Select-${content.name}`} mobile-hover-select`}>
                                    OVERVIEW</span></h2>
                        </div>
                        <div className="col-4 p-0">
                            <h2 className={`d-block d-md-none mobile-hover-select`}>
                                <span onClick={() => tabActivate('Structure')}
                                    className={`${structure && `Select-${content.name}`} mobile-hover-select`}>
                                    STRUCTURE</span></h2>
                            <h2 className={`d-none d-md-block`}>INTERNAL STRUCTURE</h2>
                        </div>
                        <div className="col-4 p-0">
                            <h2 className={`d-block d-md-none mobile-hover-select`}>
                                <span onClick={() => tabActivate('Surface')}
                                    className={`${surface && `Select-${content.name}`} mobile-hover-select`}>
                                    SURFACE</span></h2>
                            <h2 className={`d-none d-md-block`}>SURFACE GEOLOGY</h2>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className={`${overview || surface ? `Planet-${content.name}` 
                        : `Internal-${content.name}`} mx-auto my-auto`}></div>
                </div>
                <div className="col-12 text-center mobile-planet-space">
                    <h1>{content.name.toUpperCase()}</h1>
                </div>
                <div className="col-12 text-center mt-4 side-padding">
                    <p>{overview ? content.overview.content : structure ? content.structure.content : content.geology.content}</p>
                </div>
                <div className="col-12 text-center mt-4 side-padding">
                    <a target="_blank" href={content.overview.source}>Wikipedia</a>
                </div>
                {/* <div className={`Internal-${content.name}`}></div>
                <div className={`Geology-${content.name}`}></div> */}
            </div>
        </div>
    )
}

export default Page
