import { useEffect, useState } from "react";
import React from "react";

interface NavbarProps {
  activeTab: string;
  onTabChange?: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const [domains, setDomains] = useState<string[]>([]);

  useEffect(() => {
    fetch("http://192.168.1.202:8080/api/coursesentity/domains")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setDomains(data);
          if (onTabChange) {
            onTabChange(data[0]); // Call `onTabChange` only if it's defined
          }
        }
      })
      .catch((err) => console.error("Error fetching domains:", err));
  }, []);

  const handleTabClick = (tab: string) => {
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <nav className="flex border-b border-gray-200 dark:border-gray-700">
      {domains.map((item) => (
        <a
          key={item}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleTabClick(item);
          }}
          className={`
            px-5 py-4 text-sm md:text-base font-medium transition-all duration-300
            relative
            ${
              activeTab === item
                ? "text-purple-700 dark:text-purple-400 font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-purple-700 dark:after:bg-purple-400"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            }
          `}
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
