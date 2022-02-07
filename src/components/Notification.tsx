import styled from 'styled-components';

const StyledNotification = styled.div`
  border-radius: 20px;
  padding: 10px 20px;
  margin-top: 10px;
`;

export const Notification = ({
  message,
  color,
}: {
  message: string | null;
  color: string;
}) => {
  if (message === null) {
    return null;
  }

  const style = {
    color: color,
    border: `1px solid ${color}`,
  };
  return <StyledNotification style={style}>{message}</StyledNotification>;
};
