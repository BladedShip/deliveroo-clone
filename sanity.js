import imageUrlBuilder from '@sanity/image-url';
import { createClient } from '@sanity/client';

const client = createClient({
    projectId: '6s9f34fg',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2021-10-21',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
    builder.image(source);
}

export default client;