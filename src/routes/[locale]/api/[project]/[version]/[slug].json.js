import fs from 'fs';

export function get(req, res, next) {
	const { locale, project, version, slug } = req.params;
	const filePath = `docs/api/${project}/${version}/${slug}.${locale}.md`;
	const file = fs.readFileSync(filePath, 'utf-8');

	if (file) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.end(JSON.stringify(file));
	} else {
		next();
	}
}