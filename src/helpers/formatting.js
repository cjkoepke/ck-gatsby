/**
 * Helps decode HTML encoded strings so we
 * don't have to use dangerouslySetInnerHTML
 * @param {string} text
 */
export const decodeText = text => {
  const el = document.createElement("textarea")
  el.innerHTML = text
  return el.innerText
}
