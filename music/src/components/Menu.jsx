import { Logo } from "./Menu/Logo";
import { Nav } from "./Menu/Nav";
import { Playlist } from "./Menu/Playlist";

export function Menu() {
  return (
    <div className="menu">
      <Logo />
      <Nav />
      <hr />
      <Playlist />
    </div>
  );
}
