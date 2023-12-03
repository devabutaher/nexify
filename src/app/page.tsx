import MainNavbar from "@/components/Navbar/Navbar";
import { ThemeToggle } from "@/components/ThemeProvider/ThemeToggle";

export default function Home() {
  return (
    <div>
      <MainNavbar />
      <ThemeToggle />
      <div className="text-foreground">Hello Project!</div>
    </div>
  );
}
