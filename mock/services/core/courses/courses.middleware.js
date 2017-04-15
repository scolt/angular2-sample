const express = require('express');
const router = express.Router();
const url = require('url');

module.exports = (server) => {

	router.get('/courses', (req, res, next) => {
		let url_parts = url.parse(req.originalUrl, true),
			query = url_parts.query,
			from = query.start,
      search = query.search,
			to = +query.start + +query.count,
			sort = query.sort,
			queryStr = query.query,
			courses = server.db.getState().courses;
		console.log(sort);
		console.log(queryStr);

    if (search) {
      courses = courses.filter(item => item.name.toLowerCase().indexOf(search.toLowerCase()) > -1)
    }

    const totalPages = Math.round(courses.length / query.count);

		if (courses.length < to) {
			to = courses.length;
		}
		courses = courses.slice(from, to);

		res.json({
		  totalPages: totalPages,
		  courses: courses
    });
	});

	return router;
};
