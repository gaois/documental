import * as sapper from '@sapper/app';

import 'i18n';

const config = {
	target: document.querySelector('#sapper')
};

if (!Intl.PluralRules) {
	(async () => {
		await import('@formatjs/intl-getcanonicallocales/polyfill');
		await import('@formatjs/intl-pluralrules/polyfill');
		await import('@formatjs/intl-pluralrules/dist/locale-data/en');
		await import('@formatjs/intl-pluralrules/dist/locale-data/ga');
		sapper.start(config);
	})();
} else {
	sapper.start(config);
}