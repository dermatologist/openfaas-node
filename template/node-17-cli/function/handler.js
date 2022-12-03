'use strict'

module.exports = async (event, context) => {
  const result = {
    'body': JSON.stringify(event.body),
    'content-type': event.headers["content-type"]
  }
  if(context != null) {
  return context
    .status(200)
    .succeed(result)
  } else {
    return result
  }
}
