import { DirectiveBinding } from 'vue'

const tooltipDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const tooltip = document.createElement('div')
    tooltip.textContent = binding.value
    tooltip.className = 'tooltip'
    document.body.appendChild(tooltip)

    el.addEventListener('mouseenter', () => {
      const rect = el.getBoundingClientRect()

      tooltip.style.left = `${rect.left + window.scrollX}px`
      tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 5}px`
      tooltip.style.visibility = 'visible'
    })

    el.addEventListener('mouseleave', () => {
      tooltip.style.visibility = 'hidden'
    })

    el._tooltip = tooltip as HTMLElement
  },
  unmounted(el: HTMLElement) {
    if (el._tooltip) {
      document.body.removeChild(el._tooltip)
    }
  }
}

export default tooltipDirective
