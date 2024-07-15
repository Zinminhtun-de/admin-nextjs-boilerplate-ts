import * as React from 'react';
import { RadioProps as MRadioProps, Radio as MRadio, styled } from '@mui/material';

interface RadioProps extends MRadioProps {}

const RadioStyled = styled(MRadio)<{}>(() => ({}));

const Radio: React.FC<RadioProps> = ({ ...rest }) => {
  return <RadioStyled {...rest} />;
};

export default Radio;
