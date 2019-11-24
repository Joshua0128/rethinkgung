document.getElementById('myButton').onclick = function() {
  var str = '001.html';
  var str2 = '002.html';

  var db = ['001.html', '002.html', '003.html', '004.html', '007.html', '008.html', '009.html',
            '011.html', '012.html'
            ];

  var lottery = db[Math.floor(Math.random() * db.length)]
          
  location.href = lottery;
};


