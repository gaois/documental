import fs from 'fs';

export function get(req, res, next) {
	const { locale, project, version, slug } = req.params;

	const filePath = `docs/api/${project}/${version}/${slug}.${locale}.md`;
	const alternateLocale = (locale === 'en') ? 'ga' : 'en';
	const alternateFilePath = `docs/api/${project}/${version}/${slug}.${alternateLocale}.md`;

	let file;
	let monolingual = false;

	if (fs.existsSync(filePath)) {
		file = fs.readFileSync(filePath, 'utf-8');
	} else if (fs.existsSync(alternateFilePath)) {
		file = fs.readFileSync(alternateFilePath, 'utf-8');
		monolingual = true;
	}

	if (file) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		let result = {};
		result.markdown = file;
		result.monolingual = monolingual;

		res.end(JSON.stringify(result));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: (locale === 'en') ? 'The page was not found' : 'Níor aimsíodh an leathanach'
		}));
	}
}