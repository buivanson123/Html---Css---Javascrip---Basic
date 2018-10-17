var maxLength;
$("#btn-submit").on('click', function () {
    var userMax = parseInt($('#max-row').val());
    maxLength = parseInt($('#max-valude').val());
    if (userMax === 0 || maxLength === 0 || maxLength <25) {
        alert('Ban can nhap so va lon hon 25 truoc khi choi');
    } else {
        $('.content').empty();
        for (var ii = 1; ii <= userMax; ii++) {
            $('.content').append('    <div class="box box' + ii + '">\n' +
                '    </div>');
            random(maxLength, ii);
        }
    }
});

$('#btn-result').on('click', function () {
    localStorage.setItem("storageMax", maxLength);
    window.location.replace("file:///var/www/bingo/result.html");
});

function random(max, boxitem) {
    var number = [];
    var getRandomNumberArray = [];
    for (var i = 1; i <= max; i++) {
        number.push(i);
    }

    for (k = 1; k <= 25; k++) {
        let random = Math.floor(Math.random() * max);
        max--;
        getRandomNumberArray.push(number[random]);
        number.splice(random, 1);

    };

    $.each(getRandomNumberArray, function (index, value) {
        let tagInsert = '.box' + boxitem;
        $(tagInsert).append(' <div class="item">' + value + '</div>');
        if (index===0){
            localStorage.setItem("storageArray", getRandomNumberArray);
        }
    });
}