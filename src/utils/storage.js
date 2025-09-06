const KEY = 'ayuda-tata-progress-v1'

export function getProgress() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function setProgress(progress) {
  localStorage.setItem(KEY, JSON.stringify(progress))
}

export function isComplete(id) {
  const p = getProgress()
  return Boolean(p[id])
}

export function toggleComplete(id) {
  const p = getProgress()
  p[id] = !p[id]
  setProgress(p)
  return p[id]
}
