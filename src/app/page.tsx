import HomeComponent from "./components/HomeComponent";

export default function Home(): JSX.Element {
  return (
    <main className="w-screen min-h-screen bg-cyan-700/60 flex flex-col items-center px-4 pt-6 mx-auto container">
      <HomeComponent />
    </main>
  );
}
