const YM_ID = Number(process.env.NEXT_PUBLIC_YM_ID || '110024121')

type YmFn = (id: number, action: 'reachGoal', goal: string) => void

export function reachMetrikaGoal(goal: string) {
  if (typeof window === 'undefined' || !Number.isFinite(YM_ID)) return
  const ym = (window as unknown as { ym?: YmFn }).ym
  try {
    ym?.(YM_ID, 'reachGoal', goal)
  } catch {}
}

export function reachMetrikaGoalOnce(goal: string, key: string) {
  if (typeof window === 'undefined') return
  try {
    if (window.sessionStorage.getItem(key) === '1') return
    window.sessionStorage.setItem(key, '1')
  } catch {}
  reachMetrikaGoal(goal)
}
