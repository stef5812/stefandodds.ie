import Container from "../layout/Container";
import cliffImg from "../../assets/images/cliff.jpeg";

function LinkButton({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-2xl
bg-gradient-to-r from-green-500 to-green-600
px-5 py-3 text-sm font-semibold text-white
shadow-md transition-all duration-300
hover:-translate-y-0.5
hover:shadow-[0_0_14px_rgba(34,197,94,0.35)]"
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
      className="inline-flex items-center justify-center rounded-2xl
border border-zinc-200
bg-white
px-5 py-3 text-sm font-semibold text-green-700
shadow-sm transition-all duration-300
hover:border-green-400
hover:text-green-600
hover:shadow-md"
    >
      {children}
    </a>
  );
}

export default function Contact() {
  const email = "stefan@stefandodds.ie";
  const github = "https://github.com/stef5812";
  const linkedin = "https://www.linkedin.com/in/stefandodds/";

  return (
<section id="contact" className="relative overflow-hidden bg-white py-20">
      {/* background image */}
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <img src={cliffImg} alt="" className="h-full w-full object-cover" />
      </div>



      {/* green / chrome light bloom */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_26%)]" />

      <Container>
        <div className="relative grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
          <p className="text-sm font-medium tracking-wide text-green-600">
  Contact
</p>

<h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">
  Let’s build{" "}
  <span className="bg-gradient-to-r from-zinc-500 via-zinc-300 to-green-500 bg-clip-text text-transparent">
    something useful
  </span>
</h2>

<p className="mt-4 text-base leading-relaxed text-zinc-600">
  If you’d like to discuss a role, a project, or a system that needs improving,
  I’m happy to chat.
</p>

            <div className="mt-6 space-y-2 text-sm text-zinc-600">
              <p>
              <span className="text-zinc-700">Email:</span>{" "}
                <a
                  className="underline decoration-green-400/40 underline-offset-4 hover:decoration-green-400 hover:text-green-300"
                  href={`mailto:${email}`}
                >
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
          <div className="rounded-3xl bg-white p-6 ring-1 ring-zinc-200 shadow-xl">
              <h3 className="text-lg font-semibold text-zinc-900">
                Send a message
              </h3>


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
                  <label className="text-sm text-zinc-700" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-sm text-zinc-700" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@domain.com"
                    className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-sm text-zinc-700" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="What are you working on?"
                    className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center rounded-2xl border border-green-400/30 bg-gradient-to-r from-green-500 to-green-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(34,197,94,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:from-green-400 hover:to-green-500 hover:shadow-[0_0_16px_rgba(34,197,94,0.35)]"
                >
                  Send message
                </button>
              </form>
            </div>

            <footer className="mt-6 text-xs text-zinc-500">
              © {new Date().getFullYear()} Stefan Dodds • Built with React +
              Vite + Tailwind
            </footer>
          </div>
        </div>
      </Container>
    </section>
  );
}