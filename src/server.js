import * as sapper from '@sapper/server';
import compression from 'compression';
import enthusiast from 'enthusiast';
import polka from 'polka';
import sirv from 'sirv';
import { getProtocol } from 'utils/server';

import 'i18n';
import { cookieName, defaultLocale, excludedRoutes, locales } from 'i18n/settings';

const { PORT, NODE_ENV, HOSTNAME } = process.env;
const dev = NODE_ENV === 'development';

polka()
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		enthusiast({
			cookieName: cookieName,
			defaultLocale: defaultLocale,
			excludedRoutes: excludedRoutes,
			locales: locales
		}),
		sapper.middleware({
			session: (req) => ({
				locale: req.locale || '',
				hostname: HOSTNAME,
				protocol: getProtocol(req)
			})
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});