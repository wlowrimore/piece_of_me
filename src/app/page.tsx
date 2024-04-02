import HomeComponent from "./components/Home/HomeComponent";

export default function Home(): JSX.Element {
  return (
    <main className="bg-fixed bg-resume-bg bg-cover bg-center bg-norepeat flex flex-col items-center justify-center mx-auto container">
      <div className="bg-black/50">
        <HomeComponent />
      </div>
    </main>
  );
}
