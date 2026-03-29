import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center px-6 py-24 sm:px-10">
      <nav
        aria-label="Acesso a autenticacao"
        className="fixed right-4 top-4 z-40 flex items-center gap-3 sm:right-6 sm:top-6"
      >
        <Link
          href="/login"
          className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-lg shadow-slate-300/35 transition-all hover:-translate-y-0.5 hover:bg-slate-50"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-400/30 transition-all hover:-translate-y-0.5 hover:bg-slate-800"
        >
          SignUp
        </Link>
      </nav>

      <section className="w-full max-w-4xl rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-2xl shadow-slate-300/40 backdrop-blur sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
          Area publica
        </p>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Welcome to the Public Page!
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          This page is accessible to everyone. The left sidebar behaves like a
          modal and can start open or closed using the control variable in the
          sidebar constants file.
        </p>
      </section>
    </main>
  );
}
