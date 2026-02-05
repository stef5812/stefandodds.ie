// Create: src/components/sections/Contact.jsx
import Container from "../layout/Container";
import cliffImg from "../../assets/images/cliff.jpeg";

function LinkButton({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-white/90"
    >
      {children}
    </a>
  );
}

function GhostButton({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
    >
      {children}
    </a>
  );
}

export default function Contact() {
  // TODO: replace these with your real links
  const email = "stefan@stefandodds.ie";
  const github = "https://github.com/stef5812";
  const linkedin = "https://www.linkedin.com/in/stefandodds/";


  return (
    <section id="contact" className="relative overflow-hidden bg-zinc-50 py-20">
      {/* subtle background */}
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <img src={cliffImg} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/70 to-zinc-950" />

      <Container>
        <div className="relative grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-zinc-400">Contact</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
              Let’s build{" "}
              <span className="bg-gradient-to-r from-orange-400 to-emerald-400 bg-clip-text text-transparent">

                something useful
              </span>              
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              If you’d like to discuss a role, a project, or a system that needs
              improving, I’m happy to chat.
            </p>

            <div className="mt-6 space-y-2 text-sm text-zinc-300">
              <p>
                <span className="text-white/80">Email:</span>{" "}
                <a className="underline decoration-white/30 hover:decoration-white" href={`mailto:${email}`}>
                  {email}
                </a>
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href={`mailto:${email}`}>Email me</LinkButton>
              <GhostButton href={github}>GitHub</GhostButton>
              <GhostButton href={linkedin}>LinkedIn</GhostButton>
            </div>


          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <h3 className="text-lg font-semibold text-white">Send a message</h3>
              <p className="mt-2 text-sm text-white/70">
                (This form is UI-only for now. Next step: connect to your backend.)
              </p>

              <form              
                className="mt-6 grid gap-4"
                onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.currentTarget;

                    const fd = new FormData(form);
                    const name = String(fd.get("name") || "").trim();
                    const email = String(fd.get("email") || "").trim();
                    const message = String(fd.get("message") || "").trim();
                    

                    try {
                    const res = await fetch("/api/contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ name, email, message }),
                    });

                    const data = await res.json().catch(() => ({}));

                    if (!res.ok) {
                        alert(data.error || "Failed to send message.");
                        return;
                    }

                    alert("Message sent ✅");
                    form.reset();
                    } catch (err) {
                    console.error(err);
                    alert("Network error sending message.");
                    }
                }}
                >

<div className="grid gap-2">
  <label className="text-sm text-white/80" htmlFor="name">
    Name
  </label>
  <input
    id="name"
    name="name"
    type="text"
    placeholder="Your name"
    className="w-full rounded-2xl bg-zinc-950/60 px-4 py-3 text-sm text-white ring-1 ring-white/10 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/20"
  />
</div>

                <div className="grid gap-2">
                  <label className="text-sm text-white/80" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@domain.com"
                    className="w-full rounded-2xl bg-zinc-950/60 px-4 py-3 text-sm text-white ring-1 ring-white/10 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-sm text-white/80" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="What are you working on?"
                    className="w-full rounded-2xl bg-zinc-950/60 px-4 py-3 text-sm text-white ring-1 ring-white/10 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90"
                >
                  Send message
                </button>

              </form>
            </div>

            <footer className="mt-6 text-xs text-zinc-500">
              © {new Date().getFullYear()} Stefan Dodds • Built with React + Vite
              + Tailwind
            </footer>
          </div>
        </div>
      </Container>
    </section>
  );
}
