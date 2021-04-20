const jsonResponse = (statusCode, json) => {
  return new Response(JSON.stringify(json), {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
    status: statusCode,
  })
}

export { jsonResponse }
