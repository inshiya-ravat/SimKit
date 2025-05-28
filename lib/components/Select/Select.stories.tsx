import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { FRUITS } from './MockData/fruits';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['normal'],
    },
    value: {
      control: {
        disable: true,
      },
    },
    onChange: {
      control: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const NormalSelect: Story = {
  render({ label, type, options, ...props }) {
    const [value, setValue] = useState(''); // eslint-disable-line react-hooks/rules-of-hooks
    return (
      <Select
        type={type}
        label={label}
        options={options}
        {...props}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        style={{ minWidth: '12rem' }}
      />
    );
  },

  args: {
    type: 'normal',
    label: 'fruit',
    options: FRUITS,
  },
};
