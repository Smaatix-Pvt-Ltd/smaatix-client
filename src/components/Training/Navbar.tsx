import { useEffect, useState } from "react";
import React from "react";

interface NavbarProps {
  activeTab: string;
  onTabChange?: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const [domains, setDomains] = useState<string[]>([]);

  // Fetch domain names
  useEffect(() => {
    setDomains([]); // Reset domains on every fetch to avoid keeping previous values
    
    fetch("http://192.168.1.202:3000/api/course/domains")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          if (data.length > 0) {
            setDomains(data);
            // Set the first domain as active only if there's data
            if (onTabChange) {
              onTabChange(data[0]);
            }
          } else {
            // If data array is empty, ensure domains state is also empty
            setDomains([]);
          }
        } else {
          // Handle case where data isn't an array
          console.error("Expected array but received:", typeof data);
          setDomains([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching domains:", err);
        setDomains([]);
      });
  }, [onTabChange]); // Added onTabChange to dependency array

  const handleTabClick = (tab: string) => {
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  // If domains is empty, you might want to render a placeholder or nothing
  if (domains.length === 0) {
    return (
      <nav className="flex border-b border-gray-200 dark:border-gray-700">
        <span className="px-5 py-4 text-sm md:text-base text-gray-400">
          No domains available
        </span>
      </nav>
    );
  }

  return (
    <nav className="flex overflow-x-auto border-b border-gray-200 dark:border-gray-700">
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
            whitespace-nowrap relative
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