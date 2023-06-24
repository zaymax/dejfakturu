import { Link } from "react-router-dom";

export function MenuItem(props) {
  return (
    <li className="menu__link">
      <Link to={props.link} className="menu__link-text">
        {props.text ? props.text : props.children}
      </Link>
    </li>
  );
}
