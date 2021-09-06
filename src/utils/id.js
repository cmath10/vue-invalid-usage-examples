const registry = new Map()

export default scope => {
  const current = registry.get(scope) || 0
  const next = current + 1

  registry.set(scope, next)

  return `${scope}-${next}`
}
