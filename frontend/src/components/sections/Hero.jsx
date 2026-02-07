import Container from "../layout/Container";
import codingImg from "../../assets/images/coding.webp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <img
          src={codingImg}
          alt=""
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      <Container>
        <div className="relative pt-24 pb-20 sm:pt-28 sm:pb-28 max-w-3xl">
          {/* Brand pill */}
          <p className="inline-block rounded-full bg-gradient-to-r from-orange-500/15 to-purple-500/15 px-3 py-1 text-xs font-medium text-white ring-1 ring-orange-500/25">
            Full Stack • Systems • Delivery
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            I build{" "}
            <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
              software that solves real problems
            </span>{" "}
            — end to end.
          </h1>

          <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
            Over 15 years of experience designing, building, and supporting
            production systems — from CRM-style platforms to modern full-stack
            web applications.
          </p>

          {/* subtle divider */}
          <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-orange-500/35 to-transparent" />
        </div>
      </Container>
    </section>
  );
}
