import About from "../components/About";

export default function AboutPage() {
  return (
    <div className="pt-28">
      <About />
      <section className="py-20 px-6 md:px-16 bg-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading mb-8">Our Philosophy</h2>
          <p className="text-muted-foreground leading-relaxed text-lg font-light">
            At Mellows Lounge, we believe that luxury is not just about the surroundings, but about the feeling of being truly cared for. Every detail, from the curve of our furniture to the notes in our signature cocktails, is designed to provide a sanctuary for the senses.
          </p>
        </div>
      </section>
    </div>
  );
}
