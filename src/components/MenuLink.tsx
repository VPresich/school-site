import { Link } from 'react-router-dom';
import { IconType } from 'react-icons';

interface MenuLinkProps {
  to: string;
  label: string;
  Icon: IconType;
  isActive: boolean;
}

const MenuLink: React.FC<MenuLinkProps> = ({ to, label, Icon, isActive }) => {
  return (
    <Link
      to={to}
      className={`flex items-center px-2 py-2 rounded-t-xl font-semibold transition-colors
        ${
          isActive
            ? 'bg-[#993333] text-white'
            : 'text-[#993333] hover:bg-[#d66044] hover:text-white'
        }`}
    >
      <Icon className="text-xl shrink-0 mr-2" />
      <span className="flex-1">{label}</span>
    </Link>
  );
};

export default MenuLink;
