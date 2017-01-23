"use strict";
/* tslint:disable max-line-length */
const languages_1 = require("../../src/icon-manifest/languages");
const models_1 = require("../../src/models");
exports.extensions = {
    default: {
        file: { icon: 'file', format: models_1.FileFormat.svg },
    },
    supported: [
        { icon: 'access', extensions: ['accdb', 'accdt', 'mdb', 'accda', 'accdc', 'accde', 'accdp', 'accdr', 'accdu', 'ade', 'adp', 'laccdb', 'ldb', 'mam', 'maq', 'mdw'], format: models_1.FileFormat.svg },
        { icon: 'actionscript', extensions: ['as'], format: models_1.FileFormat.svg },
        { icon: 'ai', extensions: ['ai'], format: models_1.FileFormat.svg },
        { icon: 'ai', extensions: ['ai'], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'angular', extensions: ['angular-cli.json'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'ng_component_ts', extensions: ['component.ts'], format: models_1.FileFormat.svg },
        { icon: 'ng_component_js', extensions: ['component.js'], format: models_1.FileFormat.svg },
        { icon: 'ng_smart_component_ts', extensions: ['page.ts', 'container.ts'], format: models_1.FileFormat.svg },
        { icon: 'ng_smart_component_js', extensions: ['page.js', 'container.js'], format: models_1.FileFormat.svg },
        { icon: 'ng_directive_ts', extensions: ['directive.ts'], format: models_1.FileFormat.svg },
        { icon: 'ng_directive_js', extensions: ['directive.js'], format: models_1.FileFormat.svg },
        { icon: 'ng_pipe_ts', extensions: ['pipe.ts'], format: models_1.FileFormat.svg },
        { icon: 'ng_pipe_js', extensions: ['pipe.js'], format: models_1.FileFormat.svg },
        { icon: 'ng_service_ts', extensions: ['service.ts'], format: models_1.FileFormat.svg },
        { icon: 'ng_service_js', extensions: ['service.js'], format: models_1.FileFormat.svg },
        { icon: 'ng_module_ts', extensions: ['module.ts'], format: models_1.FileFormat.svg },
        { icon: 'ng_module_js', extensions: ['module.js'], format: models_1.FileFormat.svg },
        { icon: 'ng_routing_ts', extensions: ['routing.ts'], format: models_1.FileFormat.svg },
        { icon: 'ng_routing_js', extensions: ['routing.js'], format: models_1.FileFormat.svg },
        { icon: 'ng_routing_ts', extensions: ['app-routing.module.ts'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'ng_routing_js', extensions: ['app-routing.module.js'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'ng_component_ts2', extensions: ['component.ts'], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'ng_component_js2', extensions: ['component.js'], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'ng_directive_ts2', extensions: ['directive.ts'], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'ng_directive_js2', extensions: ['directive.js'], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'ng_pipe_ts2', extensions: ['pipe.ts'], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'ng_pipe_js2', extensions: ['pipe.js'], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'ng_service_ts2', extensions: ['service.ts'], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'ng_service_js2', extensions: ['service.js'], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'ng_module_ts2', extensions: ['module.ts'], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'ng_module_js2', extensions: ['module.js'], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'ng_routing_ts2', extensions: ['routing.ts'], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'ng_routing_js2', extensions: ['routing.js'], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'ng_routing_ts2', extensions: ['app-routing.module.ts'], filename: true, format: models_1.FileFormat.svg, disabled: true },
        { icon: 'ng_routing_js2', extensions: ['app-routing.module.js'], filename: true, format: models_1.FileFormat.svg, disabled: true },
        { icon: 'apache', extensions: ['.htaccess', '.htpasswd'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'apib', extensions: ['apib'], format: models_1.FileFormat.svg },
        { icon: 'applescript', extensions: ['app'], format: models_1.FileFormat.svg },
        { icon: 'appveyor', extensions: ['appveyor.yml', '.appveyor.yml'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'ansible', extensions: ['ansible'], format: models_1.FileFormat.svg },
        { icon: 'asp', extensions: ['asp'], format: models_1.FileFormat.svg },
        { icon: 'aspx', extensions: ['aspx', 'ascx'], format: models_1.FileFormat.svg },
        { icon: 'assembly', extensions: ['s', 'asm'], format: models_1.FileFormat.svg },
        { icon: 'autohotkey', extensions: ['ahk'], format: models_1.FileFormat.svg },
        { icon: 'autoit', extensions: ['au3'], format: models_1.FileFormat.svg },
        { icon: 'aws', extensions: [], format: models_1.FileFormat.svg },
        { icon: 'babel', extensions: ['.babelrc'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'bat', extensions: [], languages: [languages_1.languages.bat], format: models_1.FileFormat.svg },
        { icon: 'binary', extensions: ['bin', 'o', 'a', 'exe', 'obj', 'lib', 'dll', 'so', 'pyc', 'pyd', 'pyo', 'n', 'ndll', 'pdb', 'cmo', 'cmx', 'cma', 'cmxa', 'cmi'], format: models_1.FileFormat.svg },
        { icon: 'bithound', extensions: ['.bithoundrc'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'blade', extensions: ['blade.php'], format: models_1.FileFormat.svg },
        { icon: 'bower', extensions: ['.bowerrc', 'bower.json'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'buckbuild', extensions: ['.buckconfig'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'bundler', extensions: ['gemfile', 'gemfile.lock'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'c', extensions: [], languages: [languages_1.languages.c], format: models_1.FileFormat.svg },
        { icon: 'c2', extensions: [], languages: [languages_1.languages.c], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'cake', extensions: ['cake'], format: models_1.FileFormat.svg },
        { icon: 'cakephp', extensions: [], format: models_1.FileFormat.svg },
        { icon: 'cf', extensions: ['lucee'], format: models_1.FileFormat.svg },
        { icon: 'cf2', extensions: ['lucee'], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'cfc', extensions: ['cfc'], format: models_1.FileFormat.svg },
        { icon: 'cfc2', extensions: ['cfc'], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'cfm', extensions: ['cfm'], format: models_1.FileFormat.svg },
        { icon: 'cfc2', extensions: ['cfm'], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'cheader', extensions: ['h'], format: models_1.FileFormat.svg },
        { icon: 'class', extensions: ['class'], format: models_1.FileFormat.svg },
        { icon: 'clojure', extensions: ['cjm', 'cljc'], languages: [languages_1.languages.clojure], format: models_1.FileFormat.svg },
        { icon: 'cmake', extensions: ['CMakeCache.txt', 'CMakeLists.txt', '.cmake'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'cobol', extensions: ['cbl', 'cob', 'cpy'], format: models_1.FileFormat.svg },
        { icon: 'codeclimate', extensions: ['codeclimate.yml'], light: true, filename: true, format: models_1.FileFormat.svg },
        { icon: 'coffeescript', extensions: [], languages: [languages_1.languages.coffeescript], format: models_1.FileFormat.svg },
        { icon: 'config', extensions: ['env'], light: true, languages: [languages_1.languages.properties], format: models_1.FileFormat.svg },
        { icon: 'config', extensions: ['.env.example'], light: true, filename: true, format: models_1.FileFormat.svg },
        { icon: 'compass', extensions: [], format: models_1.FileFormat.svg },
        { icon: 'composer', extensions: ['composer.json', 'composer.lock'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'cpp', extensions: [], languages: [languages_1.languages.cpp], format: models_1.FileFormat.svg },
        { icon: 'cpp2', extensions: [], languages: [languages_1.languages.cpp], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'cppheader', extensions: ['hpp'], format: models_1.FileFormat.svg },
        { icon: 'crystal', extensions: [], languages: [languages_1.languages.crystal], format: models_1.FileFormat.svg },
        { icon: 'csharp', extensions: ['csx'], languages: [languages_1.languages.csharp], format: models_1.FileFormat.svg },
        { icon: 'csproj', extensions: ['csproj'], format: models_1.FileFormat.png },
        { icon: 'css', extensions: [], languages: [languages_1.languages.css], format: models_1.FileFormat.svg },
        { icon: 'csslint', extensions: ['.csslintrc'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'cssmap', extensions: ['css.map'], format: models_1.FileFormat.svg },
        { icon: 'cucumber', extensions: ['feature'], format: models_1.FileFormat.svg },
        { icon: 'dartlang', extensions: ['dart'], format: models_1.FileFormat.svg },
        { icon: 'delphi', extensions: ['pas', 'dfm', 'dpr'], format: models_1.FileFormat.svg },
        { icon: 'dlang', extensions: ['d'], format: models_1.FileFormat.svg },
        { icon: 'diff', extensions: [], languages: [languages_1.languages.diff], format: models_1.FileFormat.svg },
        { icon: 'docker', extensions: ['.dockerignore', 'docker-compose.yml', 'docker-cloud.yml'], filename: true, languages: [languages_1.languages.dockerfile], format: models_1.FileFormat.svg },
        { icon: 'docker2', extensions: ['.dockerignore', 'docker-compose.yml', 'docker-cloud.yml'], filename: true, languages: [languages_1.languages.dockerfile], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'editorconfig', extensions: ['.editorconfig'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'ejs', extensions: ['ejs'], format: models_1.FileFormat.svg },
        { icon: 'elasticbeanstalk', extensions: [], format: models_1.FileFormat.svg },
        { icon: 'elixir', extensions: ['ex', 'exs', 'eex'], format: models_1.FileFormat.png },
        { icon: 'elm', extensions: ['elm'], format: models_1.FileFormat.svg },
        { icon: 'elm', extensions: ['elm-package.json'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'elm2', extensions: ['elm'], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'elm2', extensions: ['elm-package.json'], filename: true, format: models_1.FileFormat.svg, disabled: true },
        { icon: 'emacs', extensions: ['el', 'elc'], format: models_1.FileFormat.svg },
        { icon: 'ember', extensions: ['.ember-cli'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'eps', extensions: ['eps'], format: models_1.FileFormat.svg },
        { icon: 'erb', extensions: ['rhtml', 'erb'], format: models_1.FileFormat.svg },
        { icon: 'erlang', extensions: ['erl', 'hrl'], format: models_1.FileFormat.svg },
        { icon: 'erlang', extensions: ['emakefile', '.emakerfile'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'eslint', extensions: ['.eslintrc', '.eslintignore', '.eslintrc.js', '.eslintrc.json', '.eslintrc.yaml', '.eslintrc.yml'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'eslint2', extensions: ['.eslintrc', '.eslintignore', '.eslintrc.js', '.eslintrc.json', '.eslintrc.yaml', '.eslintrc.yml'], filename: true, format: models_1.FileFormat.svg, disabled: true },
        { icon: 'excel', extensions: ['xls', 'xlsx', 'xlsm', 'ods'], format: models_1.FileFormat.svg },
        { icon: 'favicon', extensions: ['favicon.ico'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'flash', extensions: ['swf', 'swc', 'sol'], format: models_1.FileFormat.svg },
        { icon: 'flow', extensions: ['js.flow'], format: models_1.FileFormat.svg },
        { icon: 'flow', extensions: ['.flowconfig'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'font', extensions: ['woff', 'woff2', 'ttf', 'otf', 'eot', 'pfa', 'pfb', 'sfd'], light: true, format: models_1.FileFormat.svg },
        { icon: 'fortran', extensions: ['f90', 'mod', 'f'], format: models_1.FileFormat.svg },
        { icon: 'fsharp', extensions: [], languages: [languages_1.languages.fsharp], format: models_1.FileFormat.svg },
        { icon: 'git', extensions: ['.gitattributes', '.gitconfig', '.gitignore', '.gitmodules', '.gitkeep'], filename: true, languages: [languages_1.languages.git], format: models_1.FileFormat.svg },
        { icon: 'gitlab', extensions: ['.gitlab-ci.yml'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'go', extensions: [], languages: [languages_1.languages.go], format: models_1.FileFormat.svg },
        { icon: 'gradle', extensions: ['gradle'], format: models_1.FileFormat.svg },
        { icon: 'graphql', extensions: ['gql', 'graphql'], format: models_1.FileFormat.svg },
        { icon: 'graphviz', extensions: [], format: models_1.FileFormat.png },
        { icon: 'groovy', extensions: [], languages: [languages_1.languages.groovy], format: models_1.FileFormat.svg },
        { icon: 'groovy2', extensions: [], languages: [languages_1.languages.groovy], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'grunt', extensions: ['gruntfile.js'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'gulp', extensions: ['gulpfile.js'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'haml', extensions: ['haml'], format: models_1.FileFormat.svg },
        { icon: 'handlebars', extensions: [], languages: [languages_1.languages.handlebars], format: models_1.FileFormat.svg },
        { icon: 'handlebars2', extensions: [], languages: [languages_1.languages.handlebars], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'haskell', extensions: ['has', 'hs', 'lhs', 'lit', 'gf'], format: models_1.FileFormat.svg },
        { icon: 'haskell2', extensions: ['has', 'hs', 'lhs', 'lit', 'gf'], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'haxe', extensions: ['hx', 'hxml'], format: models_1.FileFormat.svg },
        { icon: 'haxe', extensions: ['haxelib.json'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'haxecheckstyle', extensions: ['checkstyle.json'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'haxedevelop', extensions: ['hxproj'], format: models_1.FileFormat.svg },
        { icon: 'html', extensions: [], languages: [languages_1.languages.html], format: models_1.FileFormat.svg },
        { icon: 'idris', extensions: ['idr', 'lidr', 'ibc'], format: models_1.FileFormat.svg },
        { icon: 'image', extensions: ['jpeg', 'jpg', 'gif', 'png', 'bmp', 'tiff', 'ico'], format: models_1.FileFormat.svg },
        { icon: 'ini', extensions: [], languages: [languages_1.languages.ini], light: true, format: models_1.FileFormat.svg },
        { icon: 'infopath', extensions: ['infopathxml', 'xsn', 'xsf', 'xtp2'], format: models_1.FileFormat.svg },
        { icon: 'ionic', extensions: ['ionic.project'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'ionic', extensions: ['ionic.config.json'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'jar', extensions: ['jar'], format: models_1.FileFormat.svg },
        { icon: 'java', extensions: [], languages: [languages_1.languages.java], format: models_1.FileFormat.svg },
        { icon: 'jbuilder', extensions: ['jbuilder'], format: models_1.FileFormat.svg },
        { icon: 'jest', extensions: ['jest.json', 'jest.config.json'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'jinja', extensions: ['jinja', 'jinja2'], format: models_1.FileFormat.svg },
        { icon: 'js', extensions: [], languages: [languages_1.languages.javascript], format: models_1.FileFormat.svg },
        { icon: 'js_official', extensions: [], languages: [languages_1.languages.javascript], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'jshint', extensions: ['.jshintrc'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'jsmap', extensions: ['js.map'], format: models_1.FileFormat.svg },
        { icon: 'json', extensions: [], languages: [languages_1.languages.json], format: models_1.FileFormat.svg },
        { icon: 'json_official', extensions: [], languages: [languages_1.languages.json], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'json2', extensions: [], languages: [languages_1.languages.json], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'jsp', extensions: ['jsp'], format: models_1.FileFormat.svg },
        { icon: 'julia', extensions: ['jl'], format: models_1.FileFormat.svg },
        { icon: 'julia2', extensions: ['jl'], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'karma', extensions: ['karma.conf.js', 'karma.conf.coffee'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'kotlin', extensions: ['kt'], format: models_1.FileFormat.svg },
        { icon: 'lerna', extensions: ['lerna.json'], light: true, filename: true, format: models_1.FileFormat.svg },
        { icon: 'less', extensions: [], languages: [languages_1.languages.less], format: models_1.FileFormat.svg },
        { icon: 'license', extensions: ['enc'], format: models_1.FileFormat.svg },
        { icon: 'license', extensions: ['license', 'licence', 'license.md', 'licence.md'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'lisp', extensions: ['bil'], format: models_1.FileFormat.svg },
        { icon: 'lime', extensions: ['hxp'], format: models_1.FileFormat.svg },
        { icon: 'lime', extensions: ['include.xml'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'locale', extensions: [], format: models_1.FileFormat.svg },
        { icon: 'log', extensions: ['log'], format: models_1.FileFormat.svg },
        { icon: 'lsl', extensions: ['lsl'], format: models_1.FileFormat.svg },
        { icon: 'lua', extensions: [], languages: [languages_1.languages.lua], format: models_1.FileFormat.svg },
        { icon: 'lync', extensions: ['crec', 'ocrec'], format: models_1.FileFormat.svg },
        { icon: 'makefile', extensions: ['makefile'], format: models_1.FileFormat.svg },
        { icon: 'makefile', extensions: [], languages: [languages_1.languages.makefile], format: models_1.FileFormat.svg },
        { icon: 'map', extensions: ['map'], format: models_1.FileFormat.svg },
        { icon: 'markdown', extensions: ['mdown', 'markdown'], languages: [languages_1.languages.markdown], format: models_1.FileFormat.svg },
        { icon: 'marko', extensions: ['marko'], format: models_1.FileFormat.svg },
        { icon: 'markojs', extensions: ['marko.js'], format: models_1.FileFormat.svg },
        { icon: 'matlab', extensions: ['fig', 'mat', 'mex', 'mexn', 'mexrs6', 'mn', 'mum', 'mx', 'mx3', 'rwd', 'slx', 'slddc', 'smv', 'tikz', 'xvc'], format: models_1.FileFormat.png },
        { icon: 'masterpage', extensions: ['master'], format: models_1.FileFormat.png },
        { icon: 'meteor', extensions: [], format: models_1.FileFormat.svg },
        { icon: 'mustache', extensions: ['mustache', 'mst'], light: true, format: models_1.FileFormat.svg },
        { icon: 'nim', extensions: ['nim', 'nims'], format: models_1.FileFormat.svg },
        { icon: 'node', extensions: ['.nvmrc'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'node2', extensions: [], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'npm', extensions: ['.npmignore', '.npmrc', 'package.json'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'nsi', extensions: ['nsi', 'nsh', 'bbnsi', 'bbnsh'], format: models_1.FileFormat.svg },
        { icon: 'nuget', extensions: ['nupkg', 'nuspec', 'psmdcp'], format: models_1.FileFormat.svg },
        { icon: 'nunjucks', extensions: ['njk', 'nunjucks', 'nunjs', 'nunj', 'njs', 'nj'], format: models_1.FileFormat.svg },
        { icon: 'objectivec', extensions: [], languages: [languages_1.languages.objectivec], format: models_1.FileFormat.svg },
        { icon: 'ocaml', extensions: ['ml', 'mll', 'mli', 'mly', 'ocamlmakefile', 'merlin'], format: models_1.FileFormat.svg },
        { icon: 'onenote', extensions: ['one', 'onepkg', 'onetoc', 'onetoc2', 'sig'], format: models_1.FileFormat.svg },
        { icon: 'opencl', extensions: ['cl', 'opencl'], format: models_1.FileFormat.svg },
        { icon: 'outlook', extensions: ['pst', 'bcmx', 'otm', 'msg', 'oft'], format: models_1.FileFormat.svg },
        { icon: 'paket', extensions: ['paket.dependencies', 'paket.lock', 'paket.references', 'paket.template', 'paket.local'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'patch', extensions: ['patch'], format: models_1.FileFormat.svg },
        { icon: 'pdf', extensions: ['pdf'], format: models_1.FileFormat.svg },
        { icon: 'pdf2', extensions: ['pdf'], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'perl', extensions: [], languages: [languages_1.languages.perl], format: models_1.FileFormat.svg },
        { icon: 'perl2', extensions: [], languages: [languages_1.languages.perl], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'photoshop', extensions: ['psd'], format: models_1.FileFormat.svg },
        { icon: 'photoshop', extensions: ['psd'], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'php', extensions: ['php1', 'php2', 'php3', 'php4', 'php5', 'php6', 'phps', 'phpsa', 'phpt', 'phtml', 'phar'], languages: [languages_1.languages.php], format: models_1.FileFormat.svg },
        { icon: 'php2', extensions: ['php1', 'php2', 'php3', 'php4', 'php5', 'php6', 'phps', 'phpsa', 'phpt', 'phtml', 'phar'], languages: [languages_1.languages.php], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'phpunit', extensions: ['phpunit.xml'], filename: true, format: models_1.FileFormat.png },
        { icon: 'plantuml', extensions: ['pu', 'plantuml', 'iuml', 'puml'], format: models_1.FileFormat.png },
        { icon: 'poedit', extensions: ['po', 'mo'], format: models_1.FileFormat.svg },
        { icon: 'polymer', extensions: [], languages: [languages_1.languages.polymer], format: models_1.FileFormat.svg },
        { icon: 'postcss', extensions: [], languages: [languages_1.languages.postcss], format: models_1.FileFormat.svg },
        { icon: 'powerpoint', extensions: ['pot', 'potx', 'potm', 'pps', 'ppsx', 'ppsm', 'ppt', 'pptx', 'pptm', 'pa', 'ppa', 'ppam', 'sldm', 'sldx'], format: models_1.FileFormat.svg },
        { icon: 'powershell', extensions: [], languages: [languages_1.languages.powershell], format: models_1.FileFormat.svg },
        { icon: 'procfile', extensions: ['procfile'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'prolog', extensions: ['pro', 'P'], languages: [languages_1.languages.prolog], format: models_1.FileFormat.png },
        { icon: 'protobuf', extensions: ['proto'], format: models_1.FileFormat.svg },
        { icon: 'protractor', extensions: ['protractor.conf.js'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'publisher', extensions: ['pub', 'puz'], format: models_1.FileFormat.svg },
        { icon: 'puppet', extensions: ['epp', 'pp'], format: models_1.FileFormat.svg },
        { icon: 'pug', extensions: [], languages: [languages_1.languages.pug], format: models_1.FileFormat.svg },
        { icon: 'pug', extensions: ['.jade-lintrc', '.pug-lintrc', '.jade-lint.json', '.pug-lintrc.js', '.pug-lintrc.json'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'purescript', extensions: ['purs'], light: true, format: models_1.FileFormat.svg },
        { icon: 'python', extensions: [], languages: [languages_1.languages.python], format: models_1.FileFormat.svg },
        { icon: 'qlikview', extensions: ['qvd', 'qvw'], format: models_1.FileFormat.svg },
        { icon: 'r', extensions: [], languages: [languages_1.languages.r], format: models_1.FileFormat.svg },
        { icon: 'rails', extensions: [], format: models_1.FileFormat.svg },
        { icon: 'rake', extensions: ['rake'], format: models_1.FileFormat.svg },
        { icon: 'rake', extensions: ['rakefile'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'raml', extensions: ['raml'], format: models_1.FileFormat.svg },
        { icon: 'razor', extensions: [], languages: [languages_1.languages.razor], format: models_1.FileFormat.svg },
        { icon: 'reactjs', extensions: [], languages: [languages_1.languages.javascriptreact], format: models_1.FileFormat.svg },
        { icon: 'reacttemplate', extensions: ['rt'], format: models_1.FileFormat.svg },
        { icon: 'reactts', extensions: ['tsx'], format: models_1.FileFormat.svg },
        { icon: 'rest', extensions: [], languages: [languages_1.languages.restructuredtext], format: models_1.FileFormat.svg },
        { icon: 'riot', extensions: ['tag'], format: models_1.FileFormat.svg },
        { icon: 'robotframework', extensions: ['robot'], format: models_1.FileFormat.svg },
        { icon: 'rollup', extensions: ['rollup.config.js'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'rspec', extensions: ['.rspec'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'ruby', extensions: [], languages: [languages_1.languages.ruby], format: models_1.FileFormat.svg },
        { icon: 'rust', extensions: [], languages: [languages_1.languages.rust], format: models_1.FileFormat.png },
        { icon: 'saltstack', extensions: ['sls'], format: models_1.FileFormat.svg },
        { icon: 'sass', extensions: ['sass'], format: models_1.FileFormat.svg },
        { icon: 'scala', extensions: ['scala'], format: models_1.FileFormat.svg },
        { icon: 'script', extensions: [], format: models_1.FileFormat.svg },
        { icon: 'scss', extensions: [], languages: [languages_1.languages.scss], format: models_1.FileFormat.svg },
        { icon: 'shaderlab', extensions: [], languages: [languages_1.languages.shaderlab], light: true, format: models_1.FileFormat.svg },
        { icon: 'shell', extensions: ['fish'], languages: [languages_1.languages.shellscript], format: models_1.FileFormat.svg },
        { icon: 'slim', extensions: ['slim', 'skim'], format: models_1.FileFormat.svg },
        { icon: 'sln', extensions: ['sln'], format: models_1.FileFormat.png },
        { icon: 'smarty', extensions: ['tpl', 'swig'], format: models_1.FileFormat.svg },
        { icon: 'snyk', extensions: ['.snyk'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'source', extensions: [], format: models_1.FileFormat.svg },
        { icon: 'sql', extensions: [], languages: [languages_1.languages.sql], format: models_1.FileFormat.svg },
        { icon: 'sqlite', extensions: ['sqlite', 'sqlite3', 'db3'], format: models_1.FileFormat.svg },
        { icon: 'sss', extensions: ['sss'], format: models_1.FileFormat.svg },
        { icon: 'style', extensions: [], format: models_1.FileFormat.svg },
        { icon: 'stylelint', extensions: ['.stylelintrc', 'stylelint.config.js'], light: true, filename: true, format: models_1.FileFormat.svg },
        { icon: 'stylus', extensions: ['styl'], format: models_1.FileFormat.svg },
        { icon: 'storyboard', extensions: ['storyboard'], format: models_1.FileFormat.png },
        { icon: 'svg', extensions: ['svg'], format: models_1.FileFormat.svg },
        { icon: 'swift', extensions: [], languages: [languages_1.languages.swift], format: models_1.FileFormat.svg },
        { icon: 'swift', extensions: ['Package.pins'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'tcl', extensions: ['tcl', 'exp'], format: models_1.FileFormat.svg },
        { icon: 'terraform', extensions: ['tf', 'terra'], format: models_1.FileFormat.svg },
        { icon: 'testjs', extensions: ['test.js', 'spec.js'], format: models_1.FileFormat.svg },
        { icon: 'testts', extensions: ['test.ts', 'spec.ts'], format: models_1.FileFormat.svg },
        { icon: 'tex', extensions: ['texi', 'tex'], light: true, format: models_1.FileFormat.svg },
        { icon: 'text', extensions: ['csv'], languages: [languages_1.languages.plaintext], format: models_1.FileFormat.svg },
        { icon: 'textile', extensions: ['textile'], format: models_1.FileFormat.svg },
        { icon: 'tfs', extensions: ['.tfignore'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'todo', extensions: ['todo'], light: true, format: models_1.FileFormat.svg },
        { icon: 'toml', extensions: ['toml'], format: models_1.FileFormat.svg },
        { icon: 'travis', extensions: ['.travis.yml'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'tslint', extensions: ['tslint.json'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'twig', extensions: ['twig'], format: models_1.FileFormat.png },
        { icon: 'typescript', extensions: [], languages: [languages_1.languages.typescript], format: models_1.FileFormat.svg },
        { icon: 'typescript_official', extensions: [], languages: [languages_1.languages.typescript], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'typescriptdef', extensions: ['d.ts'], format: models_1.FileFormat.svg },
        { icon: 'typescriptdef_official', extensions: ['d.ts'], format: models_1.FileFormat.svg, disabled: true },
        { icon: 'vagrant', extensions: ['vagrantfile'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'vash', extensions: ['vash'], format: models_1.FileFormat.svg },
        { icon: 'vb', extensions: [], languages: [languages_1.languages.vb], format: models_1.FileFormat.svg },
        { icon: 'vbhtml', extensions: ['vbhtml'], format: models_1.FileFormat.svg },
        { icon: 'vbproj', extensions: ['vbproj'], format: models_1.FileFormat.png },
        { icon: 'vhdl', extensions: [], languages: [languages_1.languages.vhdl], format: models_1.FileFormat.svg },
        { icon: 'view', extensions: [], format: models_1.FileFormat.svg },
        { icon: 'vim', extensions: ['vim'], format: models_1.FileFormat.svg },
        { icon: 'vim', extensions: ['.vimrc', '.gvimrc'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'volt', extensions: ['volt'], format: models_1.FileFormat.svg },
        {
            icon: 'vscode',
            extensions: [
                'vscodeignore.json',
                'launch.json',
                'tasks.json',
                'jsconfig.json',
                'tsconfig.json',
                '.vscodeignore',
            ],
            filename: true,
            format: models_1.FileFormat.svg,
        },
        { icon: 'vsix', extensions: ['vsix'], light: true, format: models_1.FileFormat.svg },
        { icon: 'vue', extensions: ['vue'], format: models_1.FileFormat.svg },
        {
            icon: 'webpack',
            extensions: [
                'webpack.config.js',
                'webpack.config.common.js',
                'webpack.config.babel.js',
                'webpack.config.common.babel.js',
                'webpack.config.base.babel.js',
                'webpack.config.dev.babel.js',
                'webpack.config.staging.babel.js',
                'webpack.config.production.babel.js',
                'webpack.config.prod.babel.js',
                'webpack.config.dev.js',
                'webpack.config.staging.js',
                'webpack.config.production.js',
                'webpack.config.prod.js',
                'webpack.config.ts',
                'webpack.config.coffee',
                "webpack.config.test.js",
            ],
            filename: true,
            format: models_1.FileFormat.svg,
        },
        { icon: 'word', extensions: ['doc', 'docx', 'docm', 'dot', 'dotx', 'dotm', 'wll'], format: models_1.FileFormat.svg },
        { icon: 'wxml', extensions: ['wxml'], format: models_1.FileFormat.svg },
        { icon: 'wxss', extensions: ['wxss'], format: models_1.FileFormat.svg },
        { icon: 'xib', extensions: ['xib'], format: models_1.FileFormat.png },
        { icon: 'xliff', extensions: ['xliff', 'xlf'], format: models_1.FileFormat.svg },
        { icon: 'xml', extensions: ['pex'], languages: [languages_1.languages.xml], format: models_1.FileFormat.svg },
        { icon: 'xsl', extensions: [], languages: [languages_1.languages.xsl], format: models_1.FileFormat.svg },
        { icon: 'yaml', extensions: ['yml'], languages: [languages_1.languages.yaml], format: models_1.FileFormat.svg },
        { icon: 'yarn', extensions: ['yarnclean'], format: models_1.FileFormat.svg },
        { icon: 'yarn', extensions: ['yarn.lock'], filename: true, format: models_1.FileFormat.svg },
        { icon: 'zip', extensions: ['zip', 'rar', '7z', 'tar', 'gz', 'bzip2', 'xz', 'bz2'], format: models_1.FileFormat.svg },
        { icon: 'zip2', extensions: ['zip', 'rar', '7z', 'tar', 'gz', 'bzip2', 'xz', 'bz2'], format: models_1.FileFormat.svg, disabled: true },
    ],
};
//# sourceMappingURL=supportedExtensions.js.map