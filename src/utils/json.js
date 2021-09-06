const stringify = JSON.stringify

export const clone = v => JSON.parse(stringify(v))
export const same = (a, b) => stringify(a) === stringify(b)
