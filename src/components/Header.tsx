"use client";
import Link from "next/link";
const headerLinks = [
  {
    id: 1,
    text: "Gmail",
    to: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
  },
  {
    id: 2,
    text: "Images",
    to: "https://www.google.com/imghp?hl=en&tab=ri&ogbl",
  },
];

const Header = () => {

  return (
    <header className="w-full py-3 px-4 ">
      <div className="w-full flex items-center justify-end gap-4">
        {headerLinks.map((link) => (
          <Link
            className={`text-white p-3 rounded-full duration-150 ${
              link.id !== 3 ? "hover:underline " : "hover:bg-opacity-50"
            }`}
            href={link.to}
            key={link.id}
            target="_blank"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
