module.exports = ({ env }) => ({
    'cloudflare-pages': {
    enabled: true,
    config: {
      instances: [
        {
          name: "production website",
          hook_url: 'https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/a6c85ac1-53f1-4f36-b2e6-5ba8d5e08f8d'
        },
      ]
    }
  },
  'transformer': {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
    }
  },
});
