<template>
  <div>
    <main class="overflow-hidden">
      <div
        aria-hidden="true"
        class="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block"
      >
        <div class="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div class="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div class="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>

      <section>
        <div class="relative pt-16 md:pt-24">
          <div class="absolute inset-0 -z-20 hero-bg-fade">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=3272&auto=format&fit=crop"
              alt="AI Technology Background"
              class="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block w-full object-cover opacity-30"
              style="max-height: 900px;"
            />
          </div>

          <div
            aria-hidden="true"
            class="absolute inset-0 -z-10 size-full"
            style="background: radial-gradient(125% 125% at 50% 100%, transparent 0%, var(--bg-color, white) 75%);"
          />

          <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#6b7280" stroke-width="0.8"/>
                </pattern>
                <radialGradient id="hero-fade" cx="50%" cy="50%" r="55%" fx="50%" fy="50%">
                  <stop offset="30%" stop-color="white" stop-opacity="1"/>
                  <stop offset="100%" stop-color="white" stop-opacity="0"/>
                </radialGradient>
                <mask id="hero-mask">
                  <rect width="100%" height="100%" fill="url(#hero-fade)" />
                </mask>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-grid)" mask="url(#hero-mask)" opacity="0.25" />
            </svg>
          </div>

          <div class="mx-auto max-w-container px-container-h">
            <div class="text-center sm:mx-auto lg:mr-auto lg:mt-0">

              <div class="hero-animate-item" style="animation-delay: 0.1s">
                <h1 class="mt-8 max-w-5xl mx-auto text-balance text-h1-sm md:text-h1-md lg:text-h1-lg 2xl:text-h1-2xl tracking-tight text-gray-900 dark:text-white lg:mt-12">
                  <!-- Die KI-Revolution für <span class="text-deep-blue">Reverse Matching</span> & Headhunting -->
                   Lorem ipsum dolor sit amet consetetur sadipscing elitr
                </h1>
              </div>

              <div class="hero-animate-item" style="animation-delay: 0.25s">
                <p class="paragraph-lead mx-auto mt-8 max-w-3xl text-balance text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>
              </div>

              <div class="hero-animate-item mt-12 flex flex-col items-center justify-center gap-4 md:flex-row" style="animation-delay: 0.4s">
                <a
                  href="#"
                  class="inline-flex items-center justify-center h-12 rounded-xl px-8 text-base font-semibold bg-deep-blue text-white hover:shadow-lg hover:shadow-deep-blue/20 transition-all"
                >
                  <span class="text-nowrap">Jetzt anmelden</span>
                </a>
                <a
                  href="#"
                  class="inline-flex items-center justify-center h-12 rounded-xl px-8 text-base font-semibold text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all"
                >
                  <span class="text-nowrap">Demo vereinbaren</span>
                </a>
              </div>
            </div>
          </div>

          <div class="hero-animate-item relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20" style="animation-delay: 0.55s">
            <div
              aria-hidden="true"
              class="absolute inset-0 z-10"
              style="background: linear-gradient(to bottom, transparent 35%, var(--bg-color, white) 100%);"
            />
            <div class="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 p-4 shadow-2xl shadow-zinc-950/20 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm">
              <img
                class="aspect-[16/9] relative rounded-xl w-full object-cover object-top"
                src="@/assets/Dashboard-Mockup.png"
                alt="Zentrales Berater-Dashboard für KI-gestütztes Matching"
                width="2700"
                height="1440"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>