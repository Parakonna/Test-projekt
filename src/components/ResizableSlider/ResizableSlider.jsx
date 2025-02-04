import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactSlider from 'react-slider';
import css from './ResizableSlider.module.css';

const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 8px;
`;

const StyledThumb = styled.div`
  position: relative;
  height: 14px;
  width: 14px;
  background: white;
  border: 1px solid #9ebbff;
  margin-top: -3px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border 0.2s ease-in-out;

  &::after {
    content: attr(data-value) '%';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    color: #407bff;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    white-space: nowrap;
  }

  &:focus,
  &:focus-visible {
    border: 1.5px solid #407bff;
    outline: none;
  }
`;

const Thumb = (props, state) => (
  <StyledThumb {...props} data-value={state.valueNow} />
);

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${props => (props.index === 1 ? '#d7e3ff' : '#9ebbff')};
  border-radius: 999px;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

const StyledContainer = styled.div`
  width: 96%;
  max-width: 100%;
  padding-right: 8px;
`;

const ResizableSlider = ({ percentage, onChange, step }) => {
  /*   const [value, setValue] = useState(percentage);

  useEffect(() => {
    setValue(percentage);
  }, [percentage]); */

  return (
    <StyledContainer className={css.cont}>
      <StyledSlider
        value={percentage}
        onChange={onChange}
        step={step}
        renderTrack={Track}
        renderThumb={Thumb}
      />
    </StyledContainer>
  );
};

export default ResizableSlider;
