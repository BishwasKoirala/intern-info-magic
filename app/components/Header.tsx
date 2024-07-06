import React from 'react';

interface HeaderProps {
  onChange: (item: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onChange }) => {
  const handleMenuItemClick = (item: string) => {
    onChange(item);
  };

  return (
    <header className="flex items-center justify-between border-b border-b-gray-200 px-4 py-4">
      <h1 className="font-bold text-lg md:text-xl text-black">
        インターン情報一覧
      </h1>
      <div className="flex items-center space-x-4">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-primary m-1">
            Filter
          </label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            {['26卒', '27卒', '全学年', '募集中', '募集終了', 'フロント', 'バック', 'ネットワーク', '対面', 'リモート'].map((item) => (
              <li key={item}>
                <a onClick={() => handleMenuItemClick(item)}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
