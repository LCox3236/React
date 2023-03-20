import { useAuth } from "../contexts/Auth";
import { useNavigate, Link } from "react-router-dom";

export function Dashboard() {
  // Get current user and signOut function from context
  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  async function handleSignOut() {
    // Ends user session
    await signOut();

    // Redirects the user to Login page
    navigate("/login");
  }

  return (
    <div>
      {/* Change it to display the user ID too 👇*/}
      <p>Welcome, {user?.id}!</p>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
}
