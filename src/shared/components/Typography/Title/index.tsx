import React from 'react';
import classNames from 'classnames';

import { BaseTypography } from '@/shared/components/Typography/types';
import { TEXT_COLOR_MAPS } from '@/shared/components/Typography/classMappings';

const Title = ({ children, color = 'black' }: BaseTypography) => {
  const classes = classNames('text-2xl', TEXT_COLOR_MAPS[color]);

  return <h1 className={classes}>{children}</h1>;
};

export default Title;
