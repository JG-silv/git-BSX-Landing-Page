import React, { useState, useEffect } from "react";
import { Tag, CreditCard, ShieldCheck, AlertCircle } from "lucide-react";
// Importe seu LeadForm aqui
import LeadForm from "./leadForm";

const FormSection = () => {
  // Estado para o tempo restante
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // 72h
  const [targetDate, setTargetDate] = useState(
    new Date().getTime() + 30 * 60 * 1000,
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        // Reinicia para +72 horas
        const newTarget = new Date().getTime() + TIMER_DURATION;
        setTargetDate(newTarget);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // Helper para adicionar o zero à esquerda (ex: 09, 05)
  const pad = (num) => String(num).padStart(2, "0");

  // Componente visual de cada bloco de tempo
  const TimeBox = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-slate-800 border border-slate-700 rounded-md p-1.5 sm:p-2 w-12 sm:w-20 text-center shadow-inner">
        <span className="text-lg sm:text-3xl font-bold text-amber-400 font-mono tabular-nums leading-none">
          {pad(value)}
        </span>
      </div>
      <span className="text-[9px] sm:text-xs text-slate-400 uppercase tracking-wider mt-1 font-medium">
        {label}
      </span>
    </div>
  );

  return (
    <section
      id="formulario"
      className="px-4 sm:px-6 lg:px-8 bg-white scroll-mt-20 pb-10"
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all hover:shadow-xl">
          {/* AJUSTE 2: Padding menor no mobile (p-5 em vez de p-8) */}
          <div className="bg-slate-900 p-5 sm:p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-900 via-amber-500 to-slate-900 opacity-50"></div>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
              <CreditCard size={14} />
              <span>3x sem juros no cartão de crédito</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
              Análise Jurídica Premium
              <br />
              <span className="text-slate-400 font-normal text-xl">
                para desbloqueio de crédito
              </span>
            </h2>

            <p className="text-slate-300 text-sm md:text-base max-w-lg mx-auto mb-8">
              Esta oferta exclusiva para o primeiro atendimento encerra em
              breve.
            </p>

            {/* CRONÔMETRO */}
            <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 border border-slate-800 w-full max-w-[340px] sm:max-w-none mx-auto mb-6 shadow-inner">
              <div className="flex items-start justify-center gap-1 sm:gap-4 text-slate-600">
                <TimeBox value={timeLeft.days} label="Dias" />

                <div className="h-full pt-1 sm:pt-2">
                  <span className="text-lg sm:text-2xl font-bold text-slate-700">
                    :
                  </span>
                </div>

                <TimeBox value={timeLeft.hours} label="Horas" />

                <div className="h-full pt-1 sm:pt-2">
                  <span className="text-lg sm:text-2xl font-bold text-slate-700">
                    :
                  </span>
                </div>

                <TimeBox value={timeLeft.minutes} label="Min" />

                <div className="h-full pt-1 sm:pt-2">
                  <span className="text-lg sm:text-2xl font-bold text-slate-700">
                    :
                  </span>
                </div>

                <TimeBox value={timeLeft.seconds} label="Seg" />
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 text-amber-500/80 text-xs font-medium animate-pulse">
                <AlertCircle size={12} />
                <span>O parcelamento especial encerra em breve</span>{" "}
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-10 bg-white">
            <div className="flex items-center justify-center gap-2 mb-8 text-slate-500 text-xs font-medium">
              <ShieldCheck size={14} className="text-emerald-500" />
              <span>
                Seus dados estão protegidos sob sigilo judicial e LGPD
              </span>
            </div>

            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
