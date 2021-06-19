// selecting elements from html document
h1 = document.getElementsByTagName('h1');
hr = h1[0];
min = h1[1];
sec = h1[2];

// repeat function with 0ms interval
setInterval(
    function getTime()
    {
        date = Date();
        hh = date.slice(16, 18);
        // convert 24 hour to 12 hour
        if(hh > 12)
            hh -= 12;
        // convert 1 digit to 2 digit
        if(hh < 10)
            hh = '0' + hh;
        hr.innerText = hh;
        min.innerText = date.slice(19, 21);
        sec.innerText = date.slice(22, 24);
    })