import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';
import Logo from './Logo';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        <Logo />
      </Link>
      <SearchOrder />
      <Username className="text-sm font-semibold" />
    </header>
  );
}

export default Header;
