var fs = require('fs');

//异步建立多层文件夹
function mkdirs(path) {
    var ary = path.split('/');
    var i = 0, len = ary.length;
    var cur = [];
    if (ary[0] == '' || ary[0] == '.') {
        cur = ary.slice(0, ++i + 1);
    } else {
        cur = ary.slice(0, i + 1);
    }
    function mk(cur) {
        fs.exists(cur.join('/'), function (exists) {
            if (!exists) {
                fs.mkdir(cur.join('/'), function (err) {
                    if (err) throw err;
                    if (i <= len) mk(ary.slice(0, ++i + 1));
                });
            }
        });
    }

    mk(cur);

}

mkdirs('aa/bb/cc');
//mkdirs('./aa/bb/cc');
//mkdirs('/aa/bb/cc');
