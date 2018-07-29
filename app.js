var print = (msg) => {
    console.log(msg);
}

document.addEventListener('DOMContentLoaded', () => {
    print ('App loaded');

    imageContainer = document.getElementById('image-container');

    let api_key = '71xG48SuCyymMp6TIAuG7GiFnF33QJddJ1tR3G9b';
    let url = 'https://api.nasa.gov/planetary/apod?api_key=' + api_key + '&start_date=2017-07-01&end_date=2017-08-11';
    $.getJSON(url, async function(apod) {
        for (var i =0; i < apod.length; i++) {
            print (apod[i]);
            var dateText = apod[i].date;
            var imgURL = apod[i].url;
            var title = apod[i].title;
            var mediaType = apod[i].media_type;
            if (mediaType == 'image') {
                var card = document.createElement('div');
                var image = document.createElement('img');
                var desc = document.createElement('p');
                var date = document.createElement('p');

                image.id = 'image';
                image.src = imgURL;

                desc.id = 'desc';
                desc.innerText = title;

                date.id = 'date';
                date.innerText = dateText;

                card.id = 'card';
                card.appendChild(image);
                card.appendChild(desc);
                card.appendChild(date);
                imageContainer.appendChild(card);
            } else {}
        }
    })
})