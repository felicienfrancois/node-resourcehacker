node-resourcehacker
===================

Node module to edit windows executable resources (icons, ...)
This is a simple node wrapper of [Resource Hacker](http://www.angusj.com/resourcehacker/)

### OS Support

##### Windows

Works natively on windows

##### Linux & Mac OS X

Works if [wine](www.winehq.org) is installed

Note: even if it is fully command line, it requires a X server to work.
You can use [Xvfb](http://en.wikipedia.org/wiki/Xvfb) :

```shell
xvfb-run resourcehacker args
```

```shell
`xvfb-run node yourscript.js
```

```shell
xvfb-run grunt yourtask
```

### Usage

##### Command line

```shell
npm install -g resourcehacker
```

```shell
resourcehacker -add ExeFileName, ResultingFileName, ResourceAddress, ResourceType, ResourceName,
resourcehacker -addskip ExeFileName, ResultingFileName, ResourceAddress, ResourceType, ResourceName,
resourcehacker -addoverwrite ExeFileName, ResultingFileName, ResourceAddress, ResourceType, ResourceName,
resourcehacker -modify ExeFileName, ResultingFileName, ResourceAddress, ResourceType, ResourceName,
resourcehacker -extract ExeFileName, ResourceAddress, ResourceType, ResourceName,
resourcehacker -delete ExeFileName, ResultingFileName, ResourceType, ResourceName,
```

##### Node JS

```shell
npm install resourcehacker
```

```javascript
var resourcehacker = require("resourcehacker");

resourcehacker("-add ExeFileName, ResultingFileName, ResourceAddress, ResourceType, ResourceName,", callback);
resourcehacker("-addskip ExeFileName, ResultingFileName, ResourceAddress, ResourceType, ResourceName,", callback);
resourcehacker("-addoverwrite ExeFileName, ResultingFileName, ResourceAddress, ResourceType, ResourceName,", callback);
resourcehacker("-modify ExeFileName, ResultingFileName, ResourceAddress, ResourceType, ResourceName,", callback);
resourcehacker("-extract ExeFileName, ResourceAddress, ResourceType, ResourceName,", callback);
resourcehacker("-delete ExeFileName, ResultingFileName, ResourceType, ResourceName,", callback);
```

##### Grunt

```shell
npm install resourcehacker --save-dev
```

```javascript
grunt.loadNpmTasks('resourcehacker');
...
grunt.initConfig({
	...
	"resourcehacker": {
		your_target: {
			command: "-add ExeFileName, ResultingFileName, ResourceAddress, ResourceType, ResourceName,"
		}
	}
	...
});
```


### Credits

Thanks to [Angus Johnson](http://www.angusj.com/) for his amazing work on [Resource Hacker](http://www.angusj.com/resourcehacker/)