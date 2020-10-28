import { say } from 'cowsay-browser';

export async function cowsayFortune() {
  const response = await fetch('https://api.ef.gy/fortune', {
    headers: { Accept: 'text/json' },
  });

  if (!response.ok)
    return say({
      text: `something went wrong :(\nAPI returned ${response.status}\n    -- This website`,
      e: 'xx',
      n: true,
    });

  const data = await response.json();
  if (data.file.includes('/off/')) {
    return say({
      text:
        "You miss 100% of the shots you don't take.\n    -- Albert Einstein",
      e: 'oO',
      n: true,
    });
  } else {
    return say({
      text: `${data.cookie.replace(/\t/g, '  ')} (${data.file}#${
        data['file-id']
      })`,
      e: 'oo',
      n: true,
    });
  }
}
