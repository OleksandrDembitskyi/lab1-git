export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const url = new URL(req.url);
  
  // Визначаємо куди проксювати
  const isStatic = url.pathname.includes('/ph/static/');
  const targetHost = isStatic 
    ? 'https://us-assets.i.posthog.com' 
    : 'https://us.i.posthog.com';
  
  // Будуємо новий URL
  const newPath = url.pathname.replace('/api/ph', '');
  const targetUrl = `${targetHost}${newPath}${url.search}`;
  
  // Отримуємо реальний IP клієнта
  const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() 
    || req.headers.get('x-real-ip') 
    || '';

  // Копіюємо заголовки і додаємо IP
  const headers = new Headers(req.headers);
  headers.set('x-forwarded-for', clientIp);
  headers.set('x-real-ip', clientIp);
  headers.delete('host');

  const response = await fetch(targetUrl, {
    method: req.method,
    headers,
    body: req.method !== 'GET' && req.method !== 'HEAD' ? req.body : undefined,
  });

  return new Response(response.body, {
    status: response.status,
    headers: response.headers,
  });
}