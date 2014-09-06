# grunt-concat-with-template

> Concatenate scripts or stylesheets with template.

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-concat-with-template --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-concat-with-template');
```

## The "concat_with_template" task

### Overview
This plugin concatinate source files into a result file with template. The template file processed using [grunt.template.process](http://gruntjs.com/api/grunt.template#grunt.template.process).

In your project's Gruntfile, add a section named `concat_with_template` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  concat_with_template: {
    your_target: {
      src: {
        script: 'source/script.js',
        style: 'source/style.css'
      },
      dest: "dist/result.html",
      tmpl: "template/template.html"
    },
  },
});
```

And write such template file to "template/template.html", for instance.

```html
<html>
<head>
<script>
<%= script %>
</script>
<style>
<%= style %>
</style>
</head>
<body>
This is template file
</body>
</html>
```

Format of placeholder is `<%= variable_name %>`.

And then you run the task `grunt concat_with_template`, the template file is expanded and result is saved to `dest` file path.

## Release History

- `v0.1.0` Initial release.