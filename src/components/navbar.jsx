import { Book, Bookmark, GitHub } from "react-feather";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <div className="flex h-16 w-full items-center justify-items-center font-poppins shadow-sm justify-between">
        <div className="ml-2">
          <h1 className="font-bold text-white">Markdown</h1>
          <div className="font-poppins text-xs italic text-gray-400">
            a place to write macrodowns
          </div>
        </div>
        <ul className="flex">
          <li className="mr-5 text-xs"><Link to="/home" key="/home"><Book  size={20}/></Link></li>
          <li className="mr-5 text-xs"><Link to="/home" key="/home"><GitHub size={20}/></Link></li>
        </ul>
      </div>
    </>
  );
};
export default Nav;
