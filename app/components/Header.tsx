import Link from 'next/link';
import { useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}


const Header = (props: { onChange: (item: string) => void; actions?: React.ReactNode }) => {
  const { onChange, actions } = props;

  const handleMenuItemClick = (item: string) => {
    onChange(item);

// const Header = ( props ) => {
// 	const { onChange, actions } = props;
// 	const [button, setButton] = useState("");

//   const handleMenuItemClick = (item) => {
// 		setButton(item);

  };

  return (
    <header className="flex items-center justify-between border-b border-b-border px-2 py-4">
      <Link href="/">
        <h1 className="font-heading text-lg font-bold md:text-xl text-black">
          インターン情報一覧
        </h1>
      </Link>
      {actions}
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="検索..."
          className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Menu
              <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            </MenuButton>
          </div>
          <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {['26卒', '27卒', '全学年', '募集中', '募集終了', 'フロント', 'バック', 'ネットワーク', '対面', 'リモート'].map((item) => (
								<MenuItem key={item}>
								{({ focus }) => (
									<a href="#" className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')} onClick={() => handleMenuItemClick(item)}>
										{item}
									</a>
								)}
							</MenuItem>
              ))}
            </div>
          </MenuItems>
        </Menu>
        <div>
          <button type="button" className="text-white bg-blue-500 hover:bg-blue-700 px-2 py-1 me-2 mb-2 focus:ring-2 focus:ring-blue-300 rounded-lg focus:outline-none">
            sort
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
