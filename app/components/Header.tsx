import Link from 'next/link';
import React, { useState } from 'react';

interface HeaderProps {
  onChange: (item: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onChange }) => {
  const [selectedItem , setSelectedItem] = useState("")
  const handleMenuItemClick = (item: string) => {
    onChange(item);
    setSelectedItem(item)
  };

  return (
    <header className="flex items-center justify-between border-b-gray-200 px-2 py-2">
      <span className="font-bold text-lg md:text-xl text-black">
        インターン情報
      </span>
      <div className="flex items-center space-x-4">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-primary ">
            Filter : {selectedItem}
          </label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            {['全て','26卒', '27卒', '全学年', '募集中', '募集終了', 'フロント', 'バック', 'ネットワーク', '対面', 'リモート'].map((item) => (
              <li key={item}>
                <a onClick={() => handleMenuItemClick(item)}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <button className="bg-green-600 mx-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <Link href="/form">情報を追加</Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
