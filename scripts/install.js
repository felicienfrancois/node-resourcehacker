var http = require('http')
var fs = require('fs');
var AdmZip = require('adm-zip')
var path = require('path');

var download = function(url, dest, cb) {
  console.log('Downloading ResourceHacker by Angus Johnson...')
  var file = fs.createWriteStream(dest);
  var request = http.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close(cb);
    });
  }).on('error', function(err) { // Handle errors
    fs.unlink(dest); 
    if (cb) cb(err.message);
  });
};


var dir_path = path.join(__dirname,'../bin/')
var zip_path = path.join(__dirname,'../bin/resource_hacker.zip')
if(!fs.existsSync(dir_path)){
  fs.mkdirSync(dir_path)
}
var download_url = 'http://www.angusj.com/resourcehacker/resource_hacker.zip'
download(download_url,zip_path,function(err){
  var zip  = new AdmZip(zip_path)
  zip.extractAllTo(dir_path,true)
  console.log('Download completed')
})


