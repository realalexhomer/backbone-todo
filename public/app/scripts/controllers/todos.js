var test = new app.Todo({userId: 'test',
title:'make the app run',
description: 'do it!',
completed: false
});
console.log(test);
test.save()

// test.destroy();