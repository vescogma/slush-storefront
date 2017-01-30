/*
 * slush-storefront
 * https://github.com/groupby/slush-storefront
 *
 * Copyright (c) 2017, GroupBy Inc.
 * Licensed under the MIT license.
 */

'use strict';

var gulp = require('gulp');
var conflict = require('gulp-conflict');
var template = require('gulp-template');
var rename = require('gulp-rename');
var yarn = require('gulp-yarn');
var _ = require('underscore.string');
var inquirer = require('inquirer');
var path = require('path');

gulp.task('default', function (done) {
  var prompts = [{
    name: 'type',
    message: 'What sort of StoreFront project would you like to create?',
    choices: ['simple']
  }, {
    name: 'customerId',
    message: 'What is your customerId?'
  }, {
    type: 'confirm',
    name: 'moveon',
    message: 'Continue?'
  }];

  // Ask
  inquirer.prompt(prompts)
    .then(function (answers) {
      if (!answers.moveon) {
        return done();
      }
      answers.appName = `start-${_.slugify(answers.customerId)}`;

      if (answers.type === 'simple') {
        gulp.src(path.join(__dirname, 'templates', '**', '*'))
        .pipe(template(answers, { interpolate: /<%=([\s\S]+?)%>/g }))
        .pipe(rename(function (file) {
          if (file.basename[0] === '_') {
            file.basename = '.' + file.basename.slice(1);
          }
          if (file.basename[0] === '$') {
            file.basename = file.basename.slice(1);
          }
        }))
        .pipe(conflict('./'))
        .pipe(gulp.dest('./'))
        .pipe(yarn())
        .on('end', function () {
          done();
        });
      }
    });
});
