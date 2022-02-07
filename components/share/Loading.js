import styled from "styled-components";
export const Loading = () => {
  return (
    <Loader>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
    </Loader>
  );
};

const Loader = styled.div`
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .bubble {
    animation: expand 0.75s ease-in-out infinite;
    border-radius: 20px;
    display: inline-block;
    transform-origin: center center;
    margin: 0 3px;
    width: 10px;
    height: 10px;
  }

  .bubble:nth-child(3) {
    background: #b6e1d6;
  }

  .bubble:nth-child(2) {
    animation-delay: 180ms;
    background: #b6e1d6;
  }

  .bubble:nth-child(1) {
    animation-delay: 360ms;
    background: #b6e1d6;
  }

  @keyframes expand {
    0% {
      transform: scale(0.9);
    }
    25% {
      transform: scale(1.2);
      background: #fff;
    }
  }
`;
