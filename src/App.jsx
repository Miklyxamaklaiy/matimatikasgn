import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock,
  Infinity as InfinityIcon,
  Sigma,
  Calculator,
  LineChart,
  BookOpenCheck,
  GraduationCap,
  CheckCircle2,
  Heart,
  MapPin,
  QrCode,
  Sparkles,
  ArrowRight
} from "lucide-react";

// 🔧 ВСТАВЬТЕ ССЫЛКУ НА ЛОГО (сверху слева будет именно оно)
const logoUrl = "https://placehold.co/200x200/png?text=LOGO"; // ← замените на ваш логотип

export default function Poster_Math_Limits() {
  const posterRef = useRef(null);

  return (
    <div className="w-full min-h-screen bg-slate-950 py-10 px-4 flex items-center justify-center">
      {/* ПРЕВЬЮ-ПАНЕЛЬ С КНОПКАМИ */}
      <div className="max-w-[1200px] w-full grid md:grid-cols-[1fr_360px] gap-6">
        {/* Постер */}
        <motion.div
          ref={posterRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-[1080px] max-w-full aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl"
        >
          {/* Фон-градиент */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b1020] via-[#1c1f45] to-[#3b0f4c]" />

          {/* Светящиеся пятна */}
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl opacity-30 bg-fuchsia-500" />
          <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-25 bg-indigo-500" />

          {/* Декор-сетка */}
          <svg className="absolute inset-0 opacity-[0.08]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* ЛОГО СВЕРХУ СЛЕВА */}
          <div className="absolute top-6 left-6 flex items-center gap-3">
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-2">
              <img
                src={logoUrl}
                alt="Логотип"
                className="h-14 w-14 object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Верхний правый стикер */}
          <motion.div
            initial={{ rotate: -6, opacity: 0, y: -10 }}
            animate={{ rotate: -6, opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute top-6 right-6 bg-white text-slate-900 rounded-2xl px-4 py-3 font-semibold shadow-lg flex items-center gap-2"
          >
            <Sparkles className="h-5 w-5" /> Новичкам — особенно ♥
          </motion.div>

          {/* Контент */}
          <div className="relative h-full w-full p-10 flex flex-col">
            {/* Заголовки */}
            <div className="mt-10">
              <div className="inline-flex items-center gap-2 text-fuchsia-200/90 text-sm tracking-wide uppercase">
                <div className="h-1 w-6 rounded-full bg-fuchsia-400" /> Учебный вечер
              </div>
              <h1 className="mt-3 leading-tight font-extrabold text-white drop-shadow-[0_4px_24px_rgba(99,102,241,0.35)] text-5xl md:text-6xl">
                Пределы — это красиво
              </h1>
              <p className="mt-4 text-indigo-100/90 text-lg md:text-xl max-w-3xl">
                Поможем разобраться в пределах и полюбить их, а также подготовиться к первому РК.
              </p>

              {/* Дата и время */}
              <div className="mt-6 flex flex-wrap gap-4 text-indigo-100/90">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2 border border-white/15">
                  <CalendarDays className="h-5 w-5" /> 10 октября
                </div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2 border border-white/15">
                  <Clock className="h-5 w-5" /> 18:00
                </div>
              </div>
            </div>

            {/* Большая карточка с формулой */}
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 relative rounded-3xl p-8 bg-white/10 border border-white/20 backdrop-blur-xl shadow-xl"
            >
              <div className="absolute -top-3 -left-3 bg-fuchsia-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">главная тема</div>
              <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-6 items-center">
                <div>
                  <div className="text-3xl md:text-4xl font-semibold leading-snug">
                    <span className="opacity-90">lim</span>
                    <span className="opacity-70 align-super text-base"> x→a </span>
                    <span className="opacity-90"> f(x) = L</span>
                  </div>
                  <p className="mt-3 text-indigo-100/90">
                    Разложим страшные слова «эпсилон–дельта» на понятные и наглядные шаги. Научимся быстро
                    видеть предел по графику, по формулам и по определению.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      { icon: <InfinityIcon className="h-5 w-5" />, label: "бесконечно малые" },
                      { icon: <Sigma className="h-5 w-5" />, label: "правила пределов" },
                      { icon: <Calculator className="h-5 w-5" />, label: "типовые задачи" },
                      { icon: <LineChart className="h-5 w-5" />, label: "графический смысл" }
                    ].map((chip, i) => (
                      <span key={i} className="inline-flex items-center gap-2 text-sm bg-white/10 rounded-full px-3 py-1 border border-white/15">
                        {chip.icon} {chip.label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Наглядная картинка в стиле графика */}
                <div className="relative h-56 md:h-64 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 border border-white/20 overflow-hidden">
                  <svg viewBox="0 0 300 200" className="absolute inset-0 w-full h-full">
                    {/* Оси */}
                    <line x1="20" y1="180" x2="290" y2="180" stroke="white" strokeOpacity="0.35" strokeWidth="2" />
                    <line x1="40" y1="190" x2="40" y2="10" stroke="white" strokeOpacity="0.35" strokeWidth="2" />
                    {/* Функция */}
                    <path d="M 40 160 C 80 60, 140 60, 180 120 S 260 190, 300 80" fill="none" stroke="white" strokeOpacity="0.9" strokeWidth="3" />
                    {/* Горизонтальная L */}
                    <line x1="40" y1="110" x2="290" y2="110" stroke="#A78BFA" strokeOpacity="0.9" strokeDasharray="6 6" strokeWidth="2.5" />
                    {/* Точка x→a */}
                    <circle cx="140" cy="110" r="6" fill="#F0ABFC" />
                    {/* Аннотация */}
                    <text x="150" y="100" fill="white" opacity="0.9" fontSize="13">L</text>
                    <text x="128" y="130" fill="white" opacity="0.9" fontSize="11">x→a</text>
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Что разберём / Практика */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl p-6 bg-white/10 border border-white/15">
                <div className="flex items-center gap-2 text-fuchsia-200/90 font-semibold uppercase tracking-wide text-sm">
                  <BookOpenCheck className="h-5 w-5" /> Что разберём
                </div>
                <ul className="mt-4 space-y-3 text-indigo-100/90">
                  {[
                    "Определение предела (интуитивно и строго)",
                    "Правила вычисления пределов",
                    "Бесконечно малые и эквивалентности",
                    "Односторонние пределы и разрывы",
                    "Пределы последовательностей"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-fuchsia-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl p-6 bg-white/10 border border-white/15">
                <div className="flex items-center gap-2 text-fuchsia-200/90 font-semibold uppercase tracking-wide text-sm">
                  <GraduationCap className="h-5 w-5" /> Практика и подготовка к РК
                </div>
                <ul className="mt-4 space-y-3 text-indigo-100/90">
                  {[
                    "Разберём 15+ задач разных типов",
                    "Типичные ловушки и быстрая проверка",
                    "Мини‑конспект с формулами и примерами",
                    "Ответы на вопросы первокурсников"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-fuchsia-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Место / CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-2xl px-4 py-3 border border-white/15 text-indigo-100/90">
                <MapPin className="h-5 w-5" /> Место: аудитория ____ (уточните)
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-2xl px-4 py-3 border border-white/15 text-indigo-100/90">
                <Heart className="h-5 w-5" /> Атмосфера поддержки и простых объяснений
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-semibold px-6 py-4 rounded-2xl shadow-lg"
              >
                Будет больно не прийти <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
              </motion.a>

              <div className="flex items-center gap-3 text-indigo-100/80">
                <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2 border border-white/15">
                  <QrCode className="h-5 w-5" />
                  <span className="text-sm">QR под регистрацию / чат (вставьте позже)</span>
                </div>
              </div>
            </div>

            {/* Низ */}
            <div className="mt-auto pt-6 text-xs text-indigo-200/70">
              Если нужно — добавим логотипы партнёров, ссылку на регистрацию и точный адрес.
            </div>
          </div>
        </motion.div>

        {/* Боковая панель подсказок */}
        <div className="h-full bg-white/5 border border-white/10 rounded-3xl p-6 text-indigo-100/90">
          <h3 className="text-white font-bold text-lg">Как быстро адаптировать афишу</h3>
          <ul className="mt-4 list-disc list-inside space-y-2">
            <li><b>Логотип:</b> замените <code>logoUrl</code> на вашу ссылку.</li>
            <li><b>Дата/время:</b> в блоке «Дата и время» — 10 октября, 18:00.</li>
            <li><b>Место:</b> укажите конкретную аудиторию и корпус.</li>
            <li><b>QR‑код:</b> поставьте ссылку на регистрацию/чат и сгенерируйте QR.</li>
            <li><b>Текст:</b> при желании отредактируйте заголовок и списки.</li>
          </ul>
          <div className="mt-6 text-sm opacity-80">
            Под печать — экспортируйте страницу в PDF (Ctrl/Cmd+P → Сохранить как PDF, поля: узкие).
          </div>
        </div>
      </div>
    </div>
  );
}
