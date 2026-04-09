import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";
import Gallery from "../components/Gallery";
import Events from "../components/Events";
import NightlifeVideo from "../components/NightlifeVideo";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-background">
        <About imageUrl="https://lh3.googleusercontent.com/d/1dcKQDP9too9Uo6HgCMCP265c96EwmwQj" />
        <Menu />
        <Gallery />
        <Events />
        <NightlifeVideo />
      </div>
    </>
  );
}
