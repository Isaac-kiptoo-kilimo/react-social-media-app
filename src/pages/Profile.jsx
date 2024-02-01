import Bottom from '../components/Bottom';
import Top from '../components/Top';
import './Profile.scss';
import RightBar from '../layout/RightBar';
import Notifications from '../components/notifications/Notifications';


const Profile=()=>{
    return (
      <>
       <div className="main-right-content">
         <div className="middle-content">
         <div className="top">
          <Top/>
        </div>
        <div className="bottom">
          <Bottom/>
        </div>
      </div>
      

             
 </div>
 <div className="footer">
 <Notifications/>
 </div>
 </>

    )
};

export default Profile;

