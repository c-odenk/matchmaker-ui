import { reactive } from 'vue'

// Geteilter Zustand für das Demo-Modal, damit alle „Demo vereinbaren"-Trigger
// (Header, Hero, CTA, Footer) dasselbe Modal öffnen – ohne Prop-Drilling.
export const demoModal = reactive({ open: false })

export function openDemoModal() {
  demoModal.open = true
}

export function closeDemoModal() {
  demoModal.open = false
}
