import type React from 'react';

import type { NormalSelectProps } from './normal/NormalSelect';
import { NormalSelect } from './normal/NormalSelect';

type SelectProps = {
  /** Type of the Select input. */
  type: 'normal';
} & NormalSelectProps;

const NormalSelectType = 'normal';

/** Select input */
export const Select: React.FC<SelectProps> = ({ type, ...props }) => {
  if (type === NormalSelectType) {
    return <NormalSelect {...props} />;
  }
};
