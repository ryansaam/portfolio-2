export function updateScroll(scrollY) {
  return {
    type: "SCROLL",
    scrollY
  }
}

export function updateParallaxOffset(offset) {
  return {
    type: "PARALLAX_OFFSET",
    offset
  }
}