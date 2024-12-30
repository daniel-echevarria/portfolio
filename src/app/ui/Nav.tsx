import Link from "next/link";

const Nav = () => {
  return (
    <nav className="z-10 w-full justify-between flex text-grey-900 text-xl font-bold">
      <Link className={`hover:underline`} href="/">
        Daniel Echevarria
      </Link>
      <Link className={`hover:underline`} href={"/about"}>
        About
      </Link>
    </nav>
  );
};

export default Nav;
