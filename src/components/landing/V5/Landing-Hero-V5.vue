<template>
  <div>
    <section class="hero" id="hero">
      <div class="glow g1"></div>
      <div class="glow g2"></div>

      <div class="wrap hero-grid">
        <div class="hero-left">
          <span class="eyebrow on-dark">
            <span class="dot"></span>
            KI-gestütztes Talentpool-Management
          </span>

          <div class="rating" style="margin-left:5px;margin-top:14px">
            <span class="stars">★★★★★</span>
            <span class="rt">Aus der Beratungspraxis empfohlen</span>
          </div>

          <h1>
            Recruiting-Automatisierung, die <br>
            <span style="color:#5fa0ea">Ihrem Urteil</span> vertraut.
          </h1>

          <p class="lead">
            KI übernimmt die zeitintensiven Schritte – Marktanalyse, Matching und Anschreiben. Sie entscheiden - immer!
          </p>

          <div class="hero-cta">
            <a class="btn btn-blue" :href="loginUrl">Jetzt anmelden →</a>
            <button type="button" class="btn btn-ghost-dark" @click="openDemo">Demo vereinbaren</button>
          </div>

          <div class="hero-trust">
            <span><span class="ck"></span>DSGVO-konform</span>
            <span><span class="ck"></span>EU-Hosting</span>
            <span><span class="ck"></span>Human-in-the-Loop</span>
          </div>
        </div>

        <div class="hero-visual">
          <div class="hero-figure">

            <div class="hero-photo">
              <img
                :src="heroImg"
                alt="Personalberaterin arbeitet mit matchmaker.hr am Laptop"
                width="907"
                height="982"
                fetchpriority="high"
                decoding="async"
              />
            </div>

            <!-- Schwebende Badges um das Hero-Bild -->
            <div class="hero-badges">
              <div class="hero-badge hb-stat">
                <span class="hb-ic hb-ic-green">
                  <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/>
                    <polyline points="16 17 22 17 22 11"/>
                  </svg>
                </span>
                <span class="hb-txt"><b>−70&nbsp;%</b>&nbsp;weniger Aufwand</span>
              </div>

              <div class="hero-badge hb-time">
                <span class="hb-ic hb-ic-blue">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.9">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 6v6h4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </span>
                Mehr Zeit für Beratung
              </div>

              <div class="hero-badge hb-scale">
                <span class="hb-ic hb-ic-navy">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.9">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m11.25-5.25h-4.5m4.5 0v4.5m0-4.5L15 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15m11.25 5.25h-4.5m4.5 0v-4.5m0 4.5L15 15"/>
                  </svg>
                </span>
                Skalierbarer Outreach
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section class="sources">
      <div class="wrap sources-row">
        <span class="lbl">Der Market Agent scannt kontinuierlich</span>

        <span class="src"><span class="srcmono">S</span>StepStone</span>
        <span class="src">
          <img src="https://cdn.simpleicons.org/indeed" width="17" height="17" alt="" loading="lazy" @error="imgErr" />
          Indeed
        </span>
        <span class="src">
          <img src="https://api.iconify.design/simple-icons/linkedin.svg?color=%230A66C2" width="17" height="17" alt="" loading="lazy" @error="imgErr" />
          LinkedIn
        </span>
        <span class="src">
          <img src="https://cdn.simpleicons.org/xing" width="17" height="17" alt="" loading="lazy" @error="imgErr" />
          Xing
        </span>

        <span class="src">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7">
            <path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
          </svg>
          Unternehmenswebsites
        </span>
      </div>
    </section>
  </div>
</template>

<script>
import { openDemoModal } from '@/components/landing/V5/demo-modal-store'
import heroImg from '@/assets/Hero-Consultant.jpg'

export default {
  name: 'LandingHeroV5',
  data() {
    return {
      loginUrl: process.env.VUE_APP_DASHBOARD_URL || '#',
      heroImg
    }
  },
  methods: {
    imgErr(e) {
      e.target.style.display = 'none'
    },
    openDemo() {
      openDemoModal()
    }
  }
}
</script>

<style>
  .hero-badges {
    display: none;
  }
</style>