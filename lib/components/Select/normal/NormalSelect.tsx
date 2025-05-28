import React, { useState, useRef, useEffect } from 'react';

import { useSimLibTheme } from '../../../hooks/theme';
import type { Component } from '../../Component.type';
import DownArrow from '../assets/DownArrow';

import {
  getDropdownStyles,
  getOptionStyles,
  getSelectStyles,
} from './NormalSelectUtil';

export interface NormalSelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    Component {
  /** Default label to show when no value is selected. */
  label: string;
  /** List of options to select. */
  options: Array<{ value: string; display: string }>;
  /** Currently selected value. */
  value: string;
  /** Fired when user selects the new value. */
  onChange: (value: string) => void;
  /** Disable the selector. */
  disabled?: boolean;
}

export const NormalSelect: React.FC<NormalSelectProps> = ({
  label,
  options,
  value,
  onChange,
  disabled = false,
  css,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const selectTheme = useSimLibTheme();

  const selectedOption = options.find((opt) => opt.value === value);

  const toggleDropdown = () => {
    if (!disabled) setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (val: string) => {
    onChange?.(val);
    setTimeout(() => {
      setIsOpen(false);
    }, 0);
  };

  useEffect(() => {
    const ctrl = new AbortController();

    document.addEventListener('click', (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    });

    return () => ctrl.abort();
  }, []);

  const selectStyles = getSelectStyles(selectTheme, { isOpen, disabled });

  const dropdownStyles = getDropdownStyles(selectTheme);

  const optionStyles = getOptionStyles(selectTheme);

  return (
    <div css={css} {...props}>
      <div css={selectStyles} onClick={toggleDropdown} ref={selectRef}>
        <span>{selectedOption?.display || `-- Choose a ${label} --`}</span>
        <DownArrow />
        {isOpen && (
          <div css={dropdownStyles}>
            {options.map((opt) => (
              <div
                key={opt.value}
                css={optionStyles}
                onClick={() => handleOptionClick(opt.value)}
              >
                <span
                  className={`${opt.value === selectedOption?.value ? 'selected' : undefined}`}
                >
                  {opt.display}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
