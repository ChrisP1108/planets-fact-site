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
        <div className='container-margin'>
            <div className="row">
                <div className="col">
                    <h2>OVERVIEW</h2>
                    <h2>STRUCTURE</h2>
                    <h2>SURFACE</h2>
                </div>
                <div className="col">
                    <div className={`Planet-${content.name}`}></div>
                </div>
                <div className="col-12">
                    <h1>{content.name.toUpperCase()}</h1>
                    <p>{content.overview.content}</p>
                </div>
                <div className="col-12">
                    <p>Test</p>
                </div>
                {/* <div className={`Internal-${content.name}`}></div>
                <div className={`Geology-${content.name}`}></div> */}
            </div>
        </div>
    )
}

export default Page
