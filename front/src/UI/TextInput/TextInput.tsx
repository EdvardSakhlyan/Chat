import styled from "styled-components";

const TextInputWrapper = styled("div")(() => ({
  height: "50px",
}));

const StyledInput = styled("input")(({ theme }) => ({
  padding: theme.spacing.small,
  height: "50px",
  width: "100%",
  outline: "none",
  borderRadius: theme.spacing.small,
}));

const TextInput = () => {
  return (
    <TextInputWrapper>
      <StyledInput type="text" />
    </TextInputWrapper>
  );
};

export default TextInput;
