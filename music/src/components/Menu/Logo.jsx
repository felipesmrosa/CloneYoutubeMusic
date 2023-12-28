import { IoMenu } from "react-icons/io5";

export function Logo() {
  return (
    <>
      <div className="menu__logo">
        <IoMenu className="menu__logo--icon" />
        <img src="../src/img/logo.svg" alt="" className="menu__logo--logo" />
      </div>
    </>
  );
}
