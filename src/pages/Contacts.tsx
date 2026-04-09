import Location from "../components/Location";

export default function ContactsPage() {
  return (
    <div className="pt-28">
      <Location />
      <section className="py-20 px-6 md:px-16 bg-secondary/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="p-10 bg-white border border-border/50 rounded-[2rem] shadow-lg">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-4">General Inquiries</h4>
            <p className="text-sm text-muted-foreground">info@mellowslounge.co.za</p>
            <p className="text-sm text-muted-foreground">+27 (018) 642 1234</p>
          </div>
          <div className="p-10 bg-white border border-border/50 rounded-[2rem] shadow-lg">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-4">Reservations</h4>
            <p className="text-sm text-muted-foreground">bookings@mellowslounge.co.za</p>
            <p className="text-sm text-muted-foreground">+27 (018) 642 5678</p>
          </div>
          <div className="p-10 bg-white border border-border/50 rounded-[2rem] shadow-lg">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-4">Events & PR</h4>
            <p className="text-sm text-muted-foreground">events@mellowslounge.co.za</p>
            <p className="text-sm text-muted-foreground">+27 (018) 642 9012</p>
          </div>
        </div>
      </section>
    </div>
  );
}
