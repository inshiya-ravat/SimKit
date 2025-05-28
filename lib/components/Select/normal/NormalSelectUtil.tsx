import { css } from '@emotion/react';

import type { SimLibTheme } from '../../../theme.type';

export function getSelectStyles(
  theme: SimLibTheme,
  state: { isOpen: boolean; disabled: boolean }
) {
  return css`
    font-family: ${theme.Typography.fontFamily};
    cursor: ${state.disabled ? 'not-allowed' : 'pointer'};

    padding: ${theme.Spacing[2]} ${theme.Spacing[3]};

    background-color: ${state.disabled ? theme.Colors.disabled : ''};

    border-style: solid;
    border-radius: ${theme.Border.borderRadius.small};
    border-width: ${theme.Border.borderWidth['b-1']};
    border-color: ${theme.Border.borderColor.default};

    &:hover {
      border-color: ${theme.Border.borderColor.focus};
    }

    ${state.isOpen &&
    `
      box-shadow: 0 0 4px 1px ${theme.Colors.focus};
    `}

    position: relative;
    user-select: none;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.Spacing[3]};

    & > span {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      line-clamp: 1;
    }

    & > svg {
      width: 1rem;
      height: 1rem;
    }

    ${state.isOpen &&
    `
      & > svg {
        rotate: 180deg; 
      }
    `}
  `;
}

export function getDropdownStyles(theme: SimLibTheme) {
  return css`
    position: absolute;
    top: calc(100% + ${theme.Spacing[1]});
    left: 0;
    right: 0;

    border-style: solid;
    border-radius: ${theme.Border.borderRadius.small};
    border-width: ${theme.Border.borderWidth['b-1']};
    border-color: ${theme.Border.borderColor.default};

    box-shadow: ${theme.Shadow.xlarge};

    z-index: 1000;
    max-height: 200px;
    overflow-y: auto;
  `;
}

export function getOptionStyles(theme: SimLibTheme) {
  return css`
    & > span {
      cursor: pointer;
      &:hover {
        background-color: ${theme.Colors.focus}20;
      }

      padding: ${theme.Spacing[2]} ${theme.Spacing[3]};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      line-clamp: 1;
    }

    & > span.selected {
      background-color: ${theme.Colors.focus}50;
    }
  `;
}
