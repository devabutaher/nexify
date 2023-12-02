import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div>
      <ThemeToggle />
      <div className="text-foreground">Hello Project!</div>
    </div>
  );
}
