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
        <div className='container'>
            <div className="row">
                <div className="col">
                    <div className={`Planet-${content.name}`}>
                    </div>
                    <div className={`Internal-${content.name}`}>
                    </div>
                    <div className={`Geology-${content.name}`}>
                    </div>
                </div>
                <div className="col">
                    
                </div>
            </div>
        </div>
    )
}

export default Page
