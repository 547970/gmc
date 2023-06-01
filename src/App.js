import logo from './logo.svg';
import './App.css';
import Profile from './Component/profile/FullName';
import Address from './Component/profile/Address';
import FullName from "./Component/profile/FullName";
import ProfilePhoto from './Component/profile/ProfilePhoto';
function App() {
  return (
    <div>
      <Profile/>
      <Address/>
      <FullName/>
      <ProfilePhoto/>
    </div>
  );
}

export default App;
