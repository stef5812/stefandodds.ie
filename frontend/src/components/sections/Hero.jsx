import Container from "../layout/Container";
import codingImg from "../../assets/images/coding.webp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <img
          src={codingImg}
          alt=""
          className="h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-900/55 to-zinc-950/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.20),transparent_35%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_30%)]" />
      </div>

      <Container>
        <div className="relative max-w-3xl pt-24 pb-20 sm:pt-28 sm:pb-28">
          {/* Brand pill */}
          <p className="inline-block rounded-full border border-green-400/30 bg-gradient-to-r from-white/10 via-zinc-200/10 to-green-400/10 px-3 py-1 text-xs font-medium text-green-300 shadow-[0_0_12px_rgba(34,197,94,0.18)] backdrop-blur-sm">
            Full Stack • Systems • Delivery
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            I build{" "}
            <span className="bg-gradient-to-r from-white via-zinc-200 to-green-400 bg-clip-text text-transparent">
              software that solves real problems
            </span>{" "}
            — end to end.
          </h1>

          <p className="mt-6 text-base leading-relaxed text-zinc-200 sm:text-lg">
            Over 15 years of experience designing, building, and supporting
            production systems — from CRM-style platforms to modern full-stack
            web applications.
          </p>

          {/* subtle divider */}
          <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-green-400/40 to-transparent" />
        </div>
      </Container>
    </section>
  );
}