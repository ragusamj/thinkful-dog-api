/* This app doesn't follow a11y best practices, and the JS file is incomplete. Complete the getDataFromApi and displaySearchData functions. When you're done, this app should allow a user to search for a specific dog breed, and display a random image of that dog breed. You should make requests to this API: https://dog.ceo/dog-api/ . Also make any necessary adjustments to make this app accessible. */



//Step 2 - define the function to make the api call; shopkeeper goes to warehouse to get shoe
function getDataFromApi(queryTarget) {

    //full AJAX intro https://www.w3schools.com/xml/ajax_intro.asp

    // Step 2a - make the api call using the URL, dataType (JSON or JSONP), type (GET or POST)
    $.ajax({
            type: "GET",
            url: 'https://dog.ceo/api/breed/' + queryTarget + '/images',
            dataType: 'json',
        })

        //Step 2b - success scenario (call the function to display the results)
        .done(function (dataOutput) {

            //displays the external api json object in the console
            displaySearchData(dataOutput);
        })

        // Step 2c - failure scenario (display errors)
        .fail(function (jqXHR, error, errorThrown) {

            //display errors
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
};


//Step 3 - display the results; sales process
function displaySearchData(data) {

    //Step 3a - console.log the results
    console.log(data);

    //Step 3b - if there are no results show errors
    if (data.message == "") {

        //show and alert
        alert("No results");
    }

    //
    else {

        //Step 3c - if there are results, create an HTML results variable
        let htmlOutput = "";
        $.each(data.message, function (dataKey, dataValue) {
            htmlOutput += "<li>";
            htmlOutput += "<img src='" + dataValue + "'/>";
            htmlOutput += "</li>";
        });

        //Step 3e - send the content of HTML results variable to the HTML - display them in the html page (use "<pre><code>" to auto format the lyrics mode details here https: //www.w3schools.com/tags/tag_code.asp and here https://www.w3schools.com/tags/tag_pre.asp )
        $('.js-search-results').html(htmlOutput);
    }
}


//Step 1 - watch for user input; tell shopkeeper what shoe size, color
function watchSubmit() {

    //Step 1a - create a trigger
    $(".js-search-form").submit(function (event) {

        //if the page refreshes when you submit the form use "preventDefault()" to force JavaScript to handle the form submission
        event.preventDefault();

        //Step 1b - get user input - get the value from the input box
        let queryTarget = $(event.currentTarget).find('.js-query').val();

        //Step 1c - input validation - validate input
        if (queryTarget == '') {
            alert("Please select an artist");
        }


        //Step 1d - use the api function - use that artist and title values to call the getResults function defined at the top
        getDataFromApi(queryTarget);
    });
}



$(watchSubmit);
