import { getStore } from '@netlify/blobs';

export default async () => {
  try {
    const store = getStore('sarkari-rojgar-auto-updates');
    const data = await store.get('latest.json', { type: 'json' });

    return new Response(JSON.stringify(data || {
      jobs: [],
      updatedAt: null,
      note: 'अभी कोई नया अपडेट नहीं मिला।'
    }), {
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'public, max-age=300'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      jobs: [],
      error: 'अभी अपडेट उपलब्ध नहीं हैं।'
    }), {
      headers: {
        'content-type': 'application/json; charset=utf-8'
      }
    });
  }
};
