// This function gets the current location of the user and keeps you up to date in the console
export function location() {
  console.log('🌍 Requesting location')
  return new Promise((resolve, reject) => {
      let pos
      navigator.geolocation.getCurrentPosition((position) => {
          pos = {
              lat: position.coords.latitude,
              long: position.coords.longitude
          }
          console.log('🌍 Allowed location')
          resolve(pos)
      }, () => {
          Promise.reject(new Error('🌍 Disallowed location')).then(resolve(false))
      })
  })
}

// This code is written with help from Maik (the help student)