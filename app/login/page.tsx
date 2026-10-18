"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import * as m from "motion/react-m";
import { ArrowLeft, Eye, EyeOff, KeyRound } from "lucide-react";
import { DEMO_EMAIL, DEMO_LOGIN_ENABLED, DEMO_PASSWORD } from "@/config/auth";

const BACKGROUND_IMAGE = "/photos/1618005182384-a83a8bd57fbe.webp";

const inputClass =
  "w-full rounded-xl border border-fg/15 bg-fg/5 px-4 py-3.5 text-sm text-fg placeholder:text-fg/40 transition-[border-color,background-color] duration-200 focus:border-fg/50 focus:bg-fg/10 focus:outline-none";
const labelClass = "mb-2 block text-xs tracking-wider text-fg/70 uppercase";

export default function LoginPage() {
  const router = useRouter();
  const [view, setView] = useState<"login" | "forgot">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setError(data?.error ?? "No se pudo iniciar sesión. Intenta de nuevo.");
        setSubmitting(false);
        return;
      }

      const next = new URLSearchParams(window.location.search).get("next");
      const destination = next && next.startsWith("/") ? next : "/dashboard";
      router.push(destination);
      router.refresh();
    } catch {
      setError("No se pudo conectar. Revisa tu conexión e intenta de nuevo.");
      setSubmitting(false);
    }
  }

  // No backend yet: password recovery arrives with Firebase Auth. This only confirms the request on screen.
  function handleForgot(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setResetSent(true);
  }

  function goTo(next: "login" | "forgot") {
    setView(next);
    setError(null);
    setResetSent(false);
  }

  return (
    <main className="relative h-screen min-h-screen w-full overflow-hidden bg-canvas font-sans text-fg">
      {/* Full-width background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={BACKGROUND_IMAGE}
        alt=""
        fetchPriority="high"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />

      {/* Two-column overlay: the left half is fully transparent, the right half is 50% transparent */}
      <div className="relative z-10 grid h-full w-full grid-cols-1 lg:grid-cols-2">
        <div className="hidden flex-col justify-between p-12 text-white lg:flex lg:p-16">
          <span className="font-serif text-2xl tracking-wide italic [text-shadow:0_1px_12px_rgba(0,0,0,0.55)]">
            Pegasus Pixels
          </span>
          <p className="max-w-sm text-xs tracking-widest text-white uppercase [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]">
            Socio tecnológico para la era digital
          </p>
        </div>

        <div className="flex flex-col justify-between overflow-y-auto border-l border-fg/10 bg-canvas/50 p-8 backdrop-blur-md sm:p-12 lg:p-16">
          <div className="flex w-full items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-medium tracking-wider text-fg/70 uppercase transition-colors duration-200 hover:text-fg"
            >
              <ArrowLeft size={14} aria-hidden />
              Volver al sitio
            </Link>
            <span className="font-serif text-lg italic lg:hidden">Pegasus Pixels</span>
          </div>

          <m.div
            key={view}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto my-auto w-full max-w-sm py-8"
          >
            {view === "login" ? (
              <>
                <div className="mb-8">
                  <h1 className="font-inter-display mb-3 text-4xl leading-tight font-medium tracking-[-0.02em]">Iniciar sesión</h1>
                  <p className="text-sm text-fg/70">Ingresa tus credenciales para acceder al panel.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Correo electrónico
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu@ejemplo.com"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label htmlFor="password" className="block text-xs tracking-wider text-fg/70 uppercase">
                        Contraseña
                      </label>
                      <button
                        type="button"
                        onClick={() => goTo("forgot")}
                        className="text-xs text-fg/70 underline-offset-4 transition-colors duration-200 hover:text-fg hover:underline"
                      >
                        ¿Olvidaste tu contraseña?
                      </button>
                    </div>
                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className={`${inputClass} pr-12`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                        aria-pressed={showPassword}
                        className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-fg/60 transition-colors duration-200 hover:text-fg"
                      >
                        {showPassword ? <EyeOff size={16} aria-hidden /> : <Eye size={16} aria-hidden />}
                      </button>
                    </div>
                  </div>

                  {error && (
                    <p role="alert" className="text-sm text-red-500">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-xl bg-fg py-3.5 text-sm font-medium text-canvas transition-[background-color,transform] duration-200 ease-out hover:bg-fg/90 active:scale-[0.98] disabled:opacity-60"
                  >
                    {submitting ? "Ingresando…" : "Iniciar sesión"}
                  </button>
                </form>

                {/* Temporary open access: the demo credentials are shown here until Firebase Auth is connected */}
                {DEMO_LOGIN_ENABLED && (
                  <div className="mt-8 rounded-xl border border-fg/15 bg-fg/5 p-4 text-sm">
                    <p className="flex items-center gap-2 text-xs font-medium tracking-wider text-fg/80 uppercase">
                      <KeyRound size={14} aria-hidden />
                      Acceso de demostración
                    </p>
                    <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5">
                      <dt className="text-fg/70">Correo</dt>
                      <dd className="font-mono break-all text-fg">{DEMO_EMAIL}</dd>
                      <dt className="text-fg/70">Contraseña</dt>
                      <dd className="font-mono break-all text-fg">{DEMO_PASSWORD}</dd>
                    </dl>
                    <button
                      type="button"
                      onClick={() => {
                        setEmail(DEMO_EMAIL);
                        setPassword(DEMO_PASSWORD);
                        setError(null);
                      }}
                      className="mt-4 text-xs font-medium text-fg underline underline-offset-4 transition-colors duration-200 hover:text-fg/70"
                    >
                      Usar estas credenciales
                    </button>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="mb-8">
                  <h1 className="font-inter-display mb-3 text-4xl leading-tight font-medium tracking-[-0.02em]">Recuperar contraseña</h1>
                  <p className="text-sm text-fg/70">Ingresa tu correo y te enviaremos un enlace para restablecerla.</p>
                </div>

                {resetSent ? (
                  <p role="status" className="rounded-xl border border-fg/15 bg-fg/5 p-4 text-sm leading-relaxed text-fg/90">
                    La recuperación de contraseña se activará cuando se conecte el inicio de sesión definitivo. Por ahora
                    puedes entrar con las credenciales de demostración.
                  </p>
                ) : (
                  <form onSubmit={handleForgot} className="space-y-6">
                    <div>
                      <label htmlFor="reset-email" className={labelClass}>
                        Correo electrónico
                      </label>
                      <input
                        id="reset-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="tu@ejemplo.com"
                        className={inputClass}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-fg py-3.5 text-sm font-medium text-canvas transition-[background-color,transform] duration-200 ease-out hover:bg-fg/90 active:scale-[0.98]"
                    >
                      Enviar enlace
                    </button>
                  </form>
                )}

                <button
                  type="button"
                  onClick={() => goTo("login")}
                  className="mt-8 inline-flex items-center gap-2 text-sm text-fg/70 underline-offset-4 transition-colors duration-200 hover:text-fg hover:underline"
                >
                  <ArrowLeft size={14} aria-hidden />
                  Volver a iniciar sesión
                </button>
              </>
            )}
          </m.div>

          <p className="text-xs text-fg/60">
            &copy; {new Date().getFullYear()} Pegasus Pixels. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </main>
  );
}
