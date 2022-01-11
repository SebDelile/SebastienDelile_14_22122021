import Image from 'next/image';
import Link from 'next/link';

export const Header = (): React.ReactElement => (
  <header className="h-24 w-full flex-none bg-primary text-white shadow-md">
    <div className="h-full w-4/5 mx-auto sm:w-11/12 max-w-7xl flex justify-between items-center">
      <div className="h-2/3 flex flex-row justify-start items-center gap-4">
        <Image
          height={64}
          width={64}
          src="/images/logo192-alt.png"
          alt="logo"
        />
        <p className="text-3xl hidden xs:block">HRnet</p>
      </div>
      <nav>
        <ul className="h-full flex flex-row justify-end items-center sm:text-xl">
          <li className="h-full">
            <Link href="/">
              <a className="navlink">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/employee-list">
              <a className="navlink">Employees</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
