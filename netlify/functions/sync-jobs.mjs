import { getStore } from '@netlify/blobs';

export default async (req, context) => {
    try {
        const authHeader = req.headers.get('authorization');
        // सुरक्षा के लिए सीक्रेट की जांच
        if (authHeader !== `Bearer ${process.env.SYNC_SECRET_KEY}`) {
            return new Response(JSON.stringify({ error: 'Unauthorized' }), {
                status: 401,
                headers: { 'content-type': 'application/json' }
            });
        }

        const body = await req.json();
        const store = getStore('sarkari-rojgar-auto-updates');
        
        await store.setJSON('latest.json', body);

        return new Response(JSON.stringify({ success: true, message: 'Jobs updated successfully!' }), {
            status: 200,
            headers: { 'content-type': 'application/json' }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'content-type': 'application/json' }
        });
    }
};
