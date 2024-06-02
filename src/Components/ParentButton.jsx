import RedirectButton from "../RedirectButton";

export default function ParentComponent() {
  return (
    <div>
      <RedirectButton link="toronto_city.jsx" />
      <RedirectButton link="/" />
      <RedirectButton link="/" />
    </div>
  );
}
