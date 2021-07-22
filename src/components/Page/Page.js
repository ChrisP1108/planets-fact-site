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

    return (
        <>
            <div className="row no-margin">
                <div className="col-12 no-padding bottom-border">
                    <div className="row m-0 justify-content-around">
                        <div className="col-3 p-0">
                            <h2>OVERVIEW</h2>
                        </div>
                        <div className="col-3 p-0">
                            <h2 className="d-block d-md-none">STRUCTURE</h2>
                            <h2 className="d-none d-md-block">INTERNAL STRUCTURE</h2>
                        </div>
                        <div className="col-3 p-0">
                            <h2 className="d-block d-md-none">SURFACE</h2>
                            <h2 className="d-none d-md-block">SURFACE GEOLOGY</h2>
                        </div>
                    </div>
                </div>
                <div className={`Position-${content.name} col-12`}>
                    <div className={`Planet-${content.name} mx-auto my-auto`}></div>
                </div>
                <div className="col-12 text-center mobile-planet-space">
                    <h1>{content.name.toUpperCase()}</h1>
                </div>
                <div className="col-12 text-center mt-4 side-padding">
                    <p>{content.overview.content}</p>
                </div>
                <div className="col-12 text-center mt-4 side-padding">
                    <a href={content.overview.source}>Wikipedia</a>
                </div>
                {/* <div className={`Internal-${content.name}`}></div>
                <div className={`Geology-${content.name}`}></div> */}
            </div>
        </>
    )
}

export default Page
