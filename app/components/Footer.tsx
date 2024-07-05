// Footer.tsx
import Link from 'next/link';
import Button from './Button';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center h-24 bg-black">
      <Link href="/form">
        <Button
          size="xl"
          variant="outline"
          className="flex items-center justify-center h-12 px-8 text-lg font-semibold text-white bg-black border-2 border-white hover:bg-white hover:text-black shadow-md transform transition-transform duration-200 hover:scale-105 rounded-full"
        >
          インターン情報の登録はこちら
        </Button>
      </Link>
    </footer>
  );
};

export default Footer;
