exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }
  try {
    const { email } = JSON.parse(event.body || '{}');
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Invalid email' }) };
    }
    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: 'Beautiful! Check your inbox to confirm your subscription.' }) };
  } catch { return { statusCode: 500, body: JSON.stringify({ error: 'Server error' }) }; }
};
