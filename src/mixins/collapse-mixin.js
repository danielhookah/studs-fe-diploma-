export default {
  methods: {
    collapseSmooth (button, collapse) {
      const buttonEl = document.getElementById(button)
      const toggleClasses = () => {
        buttonEl.classList.toggle('not-collapsed')
        buttonEl.classList.toggle('collapsed')
      }
      const callCollapse = () => {
        this.$root.$emit('bv::toggle::collapse', collapse)
      }
      if (buttonEl.classList.contains('collapsed')) {
        toggleClasses()
        setTimeout(() => {
          callCollapse()
        }, 200)
      } else {
        setTimeout(() => {
          toggleClasses()
        }, 300)
        callCollapse()
      }
    }
  }
}
