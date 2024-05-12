import Toggle from "./Toggle.tsx";

export default function Header() {
  return (
    <header>
      <h1>My App</h1>
      <div>
        <h2>Annually</h2>
        <Toggle />
        <h2>Monthly</h2>
      </div>
    </header>
  );
}