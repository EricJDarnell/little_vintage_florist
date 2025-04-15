import { Link, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';

interface NavLinkProps {
  to: string;
  children: ReactNode;
  mobile?: boolean;
  onClick?: () => void;
}

const NavLink = ({ to, children, mobile = false, onClick }: NavLinkProps) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  const baseClasses = "transition-colors duration-200";
  const activeClasses = "text-pink-600 font-medium";
  const inactiveClasses = "text-gray-700 hover:text-pink-500";
  const mobileClasses = mobile ? "block py-2 px-4" : "py-1";

  return (
    <Link
      to={to}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses} ${mobileClasses}`}
      onClick={onClick}
    >
      {children}
      {isActive && (
        <span className={`${mobile ? 'ml-2' : 'ml-1'} inline-block w-1 h-1 rounded-full bg-pink-600`} />
      )}
    </Link>
  );
};

export default NavLink;