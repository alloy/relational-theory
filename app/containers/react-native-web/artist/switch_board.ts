const SwitchBoard = {
  presentNavigationViewController: (component, href) => {
    window.location.assign(`https://staging.artsy.net${href}`)
  }
}

export default SwitchBoard
