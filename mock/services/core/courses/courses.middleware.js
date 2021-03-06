const express = require('express');
const router = express.Router();
const url = require('url');

module.exports = (server) => {
  router.get('/courses/authors', (req, res, next) => {
    let dbState = server.db.getState();
    const authors = dbState.courses.reduce((result, item) => result.concat(item.authors), []);

    res.json(authors);
  });

  router.get('/courses/delete', (req, res, next) => {
    let url_parts = url.parse(req.originalUrl, true),
      query = url_parts.query,
      id = query.id,
      dbState = server.db.getState();
    const indexToDelete = dbState.courses.findIndex((item) => item.id == id);
    dbState.courses.splice(indexToDelete, 1);
    server.db.setState(dbState);

    res.json({
      status: 'success'
    });
  });
  router.get('/courses', (req, res, next) => {
    let url_parts = url.parse(req.originalUrl, true),
      query = url_parts.query,
      from = query.start,
      search = query.search,
      to = +query.start + +query.count,
      sort = query.sort,
      queryStr = query.query,
      id = query.id,
      courses = server.db.getState().courses;

    if (search) {
      courses = courses.filter(item => item.name.toLowerCase().indexOf(search.toLowerCase()) > -1)
    }

    const totalPages = Math.round(courses.length / query.count);

    if (courses.length < to) {
      to = courses.length;
    }

    if (from && to) {
      courses = courses.slice(from, to);
    }

    if (id) {
      courses = courses.filter(item => item.id == id);
    }

    res.json({
      totalPages: totalPages,
      courses: courses
    });
  });

  return router;
};
