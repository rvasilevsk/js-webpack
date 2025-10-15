console.log('analytics')


let counter = 0

window.getClicks = () => {
  return counter
}

document.addEventListener('click', (_event) => { counter += 1 })
