export default (context, inject) => {
  const createSEOMeta = data => {
    return [
      {
        hid: 'description',
        name: 'description',
        content: data.description
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: data.url },
      {
        property: 'og:title',
        hid: 'og:title',
        content: data.title
      },
      {
        property: 'og:description',
        hid: 'og:description',
        content: data.description
      },
      { property: 'og:image', content: data.image },
      {
        property: 'og:image:secure_url',
        content: data.image
      },
      { property: 'og:image:width', content: '400' },
      { property: 'og:image:height', content: '300' },
      { property: 'twitter:creator', content: '@eKademy_eu'},
      { property: 'twitter:card', content: 'twitter-card' },
      { property: 'twitter:url', content: data.url },
      {
        property: 'twitter:title',
        content: data.title
      },
      { property: 'twitter:description', content: data.description },
      {
        property: 'twitter:image',
        content: data.image
      }
    ]
  }
  inject('seo', createSEOMeta)
}
