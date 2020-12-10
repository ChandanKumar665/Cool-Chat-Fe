exports.showAlertMsg = (
  msg = 'Success',
  isRedirect = true,
  path = '/dashboard'
) => {
  window.alert(msg)
  if (isRedirect) {
    window.location = path
  }
}
