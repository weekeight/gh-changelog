var ghChangeLog = require('../index');

ghChangeLog.getChangeLog({
    user : 'kissyteam',
    repo : 'xtemplate',
    mdFilePath : './changelog.md'
}, function(changeLogData){
	//do something...
});