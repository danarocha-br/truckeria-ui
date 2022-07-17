import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import  { Flex, FlexProps } from '.';
import { Box } from '../Box';

export default {
  title: 'Primitives/Flex',
  component: Flex,
  parameters: {
    layout: 'centered'
  },
  args: {
    as: 'div',
    align: 'stretch',
    justify: 'center',
    wrap: 'noWrap',
    gap: '2',
    direction: 'row'
  },
  argTypes: {
    as: {
      table: {
        category: 'Modifiers'
      }
    },
    align: {
      table: {
        category: 'Modifiers'
      },
      options: ['stretch', 'center', 'end', 'start', 'baseline'],
      control: {
        type: 'inline-radio'
      }
    },
    justify: {
      table: {
        category: 'Modifiers'
      },
      options: ['start', 'center', 'end', 'between'],
      control: {
        type: 'inline-radio'
      }
    },
    direction: {
      table: {
        category: 'Modifiers'
      },
      options: ['column', 'row', 'rowReverse', 'columnReverse'],
      control: {
        type: 'inline-radio'
      }
    },
    gap: {
      table: {
        category: 'Modifiers'
      }
    },
    wrap: {
      type: '',
      table: {
        category: 'Modifiers'
      },
      options: ['wrap', 'noWrap', 'wrapReverse'],
      control: {
        type: 'inline-radio'
      }
    },
    css: {
      type: '',
      table: {
        category: 'Modifiers'
      },
      control: {
        type: 'object'
      }
    },
    ref: {
      type: '',
      table: {
        category: 'Text'
      }
    }
  }
} as FlexProps as Meta;

const Template: Story<FlexProps> = (args) => (
  <Flex
    {...args}
    css={{
      h: '100%',
      w: '12rem',
    }}
  >
    <Box>1</Box>
    <Box>2</Box>
  </Flex>
);

export const Primary = Template.bind({});
