// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN =
  'https://f13f4583ed3b4ed8bfdb0dbe492c4746@bb-sentry.bb-online-stage.com/431';

Sentry.init({
  dsn: SENTRY_DSN,
  tracesSampleRate: 1.0,
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
