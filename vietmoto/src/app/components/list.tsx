"use client";

import { useState } from 'react';

export default function List({title, listItems}: {title: string, listItems: string[]}) {
    const [checkedItems, setCheckedItems] = useState<boolean[]>(() => 
        new Array(listItems.length).fill(false)
    );

    const toggleCheck = (index: number) => {
        const newCheckedItems = [...checkedItems];
        newCheckedItems[index] = !newCheckedItems[index];
        setCheckedItems(newCheckedItems);
    };

    return (
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-2xl font-bold dark:text-gray-800 mb-4">{title}</h2>
        <ul className="flex flex-col gap-3 w-full list-none p-0 m-0">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-start relative pl-10 min-h-8 text-gray-200 dark:text-gray-700 leading-relaxed">
              <label className="flex items-start cursor-pointer relative text-base select-none w-full">
                <input 
                  type="checkbox" 
                  checked={checkedItems[index]}
                  onChange={() => toggleCheck(index)}
                  className="opacity-0 absolute h-0 w-0"
                />
                <span className={`
                  absolute -left-10 top-0.5 h-6 w-6 bg-gray-100 dark:bg-gray-100 border-2 
                  border-gray-300 dark:border-gray-500 rounded transition-all duration-200
                  hover:bg-gray-200 dark:hover:bg-gray-600
                  ${checkedItems[index] ? 'bg-blue-500 border-blue-500' : ''}
                  after:content-[""] after:absolute after:hidden after:left-2 after:top-1
                  after:w-1.5 after:h-3 after:border-white after:border-r-2 after:border-b-2
                  after:rotate-45
                  ${checkedItems[index] ? 'after:block' : ''}
                `}></span>
                <span className={`${checkedItems[index] ? 'line-through text-gray-800 dark:text-gray-400' : ''}`}>
                  {item}
                </span>
              </label>
            </li>
          ))}
        </ul> 
      </div>
    );
}