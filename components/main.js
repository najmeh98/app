import styled from "styled-components";

export const StandardInput = ({
  label,
  value,
  onChange,
  placeHolder,
  onSubmit,
  errorMessage,
  style,
  type,
  ...prop
}) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      type={type || text}
      placeholder={placeHolder}
      autoComplete="username"
      autoCorrect="on"
      autoCapitalize="sentences"
    />
  );
};

export const CustomButton = ({ children, onClick, loading, color }) => {
  return (
    <Button onClick={onClick} disabled={loading}>
      {children}
    </Button>
  );
};

const Input = styled.input`
  width: 100%;
  //  z-index: 1;
  font-size: 14px;
  height: 100%;
  border: 1px solid #cbcbcb;
  border-radius: 4px;
  padding-top: 15px;
  outline: none;
  font-size: 18px;
  padding-bottom: 13px;
  ::placeholder {
    font-size: 15px;
    line-height: 24px;
    color: #cbcbcb;
  }
`;

const Button = styled.button`
  width: 100%;
  border-radius: 20px;
  color: ${(p) => (p.color ? (p) => p.theme.colors.buttonText : "#fff")};
  background: ${(p) =>
    p.color ? "#fff" : (p) => p.theme.colors.buttonBackground};
  min-height: 40px;
  border: none;
  padding: 8px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;
