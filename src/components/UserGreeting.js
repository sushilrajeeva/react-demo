export const UserGreeting = () => {
  const isLoggedIn = true;
  return <div>Welcome! {isLoggedIn ? "User" : "Guest"}</div>;
};
