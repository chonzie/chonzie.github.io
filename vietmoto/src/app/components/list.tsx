"use client";

import { useState } from 'react';
import styles from "./list.module.css";

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
      <div className={styles.listContainer}>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.checklist}>
          {listItems.map((item, index) => (
            <li key={index} className={styles.checklistItem}>
              <label className={styles.checkboxContainer}>
                <input 
                  type="checkbox" 
                  checked={checkedItems[index]}
                  onChange={() => toggleCheck(index)}
                  className={styles.checkboxInput}
                />
                <span className={`${styles.checkmark} ${checkedItems[index] ? styles.checked : ''}`}></span>
                <span className={checkedItems[index] ? styles.checkedText : ''}>
                  {item}
                </span>
              </label>
            </li>
          ))}
        </ul> 
      </div>
    );
}