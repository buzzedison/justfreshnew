import Commerce from '@chec/commerce.js';

const commerce = new Commerce(import.meta.env.VITE_COMMERCEJS_PUBLIC_KEY, true);

export default commerce;
