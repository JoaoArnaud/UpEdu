export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-24 sm:px-10">
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
