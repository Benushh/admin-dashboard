import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import DashboardIcons from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import LogoutIcon from "@mui/icons-material/Logout";
import { colorModeActions } from "../../store/store";
import "./Sidebar.scss";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" className="link">
          <span className="logo">Admin Dashboard</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" className="link">
            <li>
              <DashboardIcons className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" className="link">
            <li>
              <PersonIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" className="link">
            <li>
              <StoreMallDirectoryIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/" className="link">
            <li>
              <ListAltIcon className="icon" />
              <span>Orders</span>
            </li>
          </Link>
          <Link to="/" className="link">
            <li>
              <LocalShippingIcon className="icon" />
              <span>Delivery</span>
            </li>
          </Link>
          <p className="title">USEFUL</p>
          <Link to="/" className="link">
            <li>
              <EqualizerIcon className="icon" />
              <span>Stats</span>
            </li>
          </Link>
          <Link to="/" className="link">
            <li>
              <NotificationsIcon className="icon" />
              <span>Notifications</span>
            </li>
          </Link>
          <p className="title">SERVICE</p>
          <Link to="/" className="link">
            <li>
              <LocalHospitalIcon className="icon" />
              <span>System Health</span>
            </li>
          </Link>
          <Link to="/" className="link">
            <li>
              <MenuBookIcon className="icon" />
              <span>Logs</span>
            </li>
          </Link>
          <Link to="/" className="link">
            <li>
              <SettingsIcon className="icon" />
              <span>Settings</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <Link to="/" className="link">
            <li>
              <PersonPinIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <Link to="/pre" className="link">
            <li>
              <LogoutIcon className="icon" />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch(colorModeActions.toggleWhite())}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch(colorModeActions.toggleDark())}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
