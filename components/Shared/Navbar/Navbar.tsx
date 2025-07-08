import { NavbarProps } from "./Navbar.types";
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";

export function Navbar({ users }: NavbarProps) {
  return (
    <nav>
      <div className="hidden mx-auto md:block">
        <NavbarDesktop users={users} />
      </div>
      <div className="md:hidden">
        <NavbarMobile users={users} />
      </div>
    </nav>
  );
}
