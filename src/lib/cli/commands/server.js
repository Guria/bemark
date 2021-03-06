'use strict';

const {join} = require('path');
const nodemon = require('nodemon');
const bs = require('browser-sync');

module.exports = function() {
  return this
    .title('Serve static')
    .helpful()
    .opt()
      .name('INPUT')
      .title('Input folder')
      .short('i')
      .end()
    .act(function(opts) {
      const {INPUT} = opts;
      const userConfig = require(join(process.cwd(), INPUT, 'config'));

      nodemon({
        watch: [
          INPUT
        ],
        ext: 'bemhtml.js js css post.css svg md json',
        exec: `bemark build -i ${INPUT}`
      });

      bs.init({
        server: {
          baseDir: userConfig.output
        },
        files: [
          join(userConfig.output, 'css', '*.css'),
          join(userConfig.output, 'js', '*.js'),
          join(userConfig.output, '*.html'),
          join(userConfig.output, '*.*.html'),
          join(userConfig.output, '**', '*.html'),
          join(userConfig.output, '**', '*.*.html')
        ],
        tunnel: false,
        online: false,
        open: false,
        notify: false
      });

      nodemon.on('quit', function () {
        bs.exit();
        process.exit(0);
      });
    });
};
