var JsonData;

function loadData() {
    var html = "<div>"

    JsonData = "/assets/theme/json/faqall.json";

    var i = 0;

    $.getJSON(JsonData, function (stores) {
        for (var indexx = 0; indexx < defaultFAQshown; indexx++) {

            i++;

            store = stores[indexx];
            var alltitle = store.alltitle;
            var allcontent = store.allcontent;

            if (i == 1) {
                html += "<div class='accordion-item'><h2 class='accordion-header' id='heading" + i + "'><button class='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + i + "' aria-expanded='true' aria-controls='collapse" + i + "'>" + alltitle + "</button></h2><div id='collapse" + i + "' class='accordion-collapse collapse show' aria-labelledby='headingOne' data-bs-parent='#accordionExample'><div class='accordion-body'><p>" + allcontent + "</p></div></div></div>"
            }
            else {
                html += "<div class='accordion-item'><h2 class='accordion-header' id='heading" + i + "'><button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + i + "' aria-expanded='true' aria-controls='collapse" + i + "'>" + alltitle + "</button></h2><div id='collapse" + i + "' class='accordion-collapse collapse' aria-labelledby='headingOne' data-bs-parent='#accordionExample'><div class='accordion-body'><p>" + allcontent + "</p></div></div></div>"
            }


        };

        html += '</div>';
        $('#accordionExample').html(html);
        $("#pcurrent").html(defaultFAQshown);
        $("#ptotal").html(stores.length);

    });
}
// function mobileloadData() {
//     var html = "<div>"

//     JsonData = "/assets/theme/json/faqall.json";

//     var i = 0;

//     $.getJSON(JsonData, function (stores) {
//         for (var indexx = 0; indexx < defaultFAQshown; indexx++) {

//             i++;

//             store = stores[indexx];
//             var alltitle = store.alltitle;
//             var allcontent = store.allcontent;

//             if (i == 1) {
//                 html += "<div class='accordion-item'><h2 class='accordion-header' id='heading" + i + "'><button class='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + i + "' aria-expanded='true' aria-controls='collapse" + i + "'>" + alltitle + "</button></h2><div id='collapse" + i + "' class='accordion-collapse collapse show' aria-labelledby='headingOne' data-bs-parent='#accordionExampleone'><div class='accordion-body'><p>" + allcontent + "</p></div></div></div>"
//             }
//             else {
//                 html += "<div class='accordion-item'><h2 class='accordion-header' id='heading" + i + "'><button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + i + "' aria-expanded='true' aria-controls='collapse" + i + "'>" + alltitle + "</button></h2><div id='collapse" + i + "' class='accordion-collapse collapse' aria-labelledby='headingOne' data-bs-parent='#accordionExampleone'><div class='accordion-body'><p>" + allcontent + "</p></div></div></div>"
//             }


//         };

//         html += '</div>';
        
//         $('#accordionExampleone').html(html);
//         $("#pcurrentoneMobileAll").html(defaultFAQshown);
//         $("#ptotaloneMobileAll").html(stores.length);

//     });
// }

function resetCheckBox(id) {

    var allSelected = false;

    $(':checkbox:checked').each(function (i) {
        if ($(this).val() == "all") {
            allSelected = true;
        }
    });

    if ($('input[name="role1[]"]:checked').length == 1 && allSelected == true) {
        allSelected = true;
    }
    else if ($('input[name="role1[]"]:checked').length < 5 && allSelected == true && id != "role3") {
        allSelected = false;
    }
    if ($('input[name="role2[]"]:checked').length == 1 && allSelected == true) {
        allSelected = true;
    }
    else if ($('input[name="role2[]"]:checked').length < 5 && allSelected == true && id != "role3") {
        allSelected = false;
    }
    if ($('input[name="role3[]"]:checked').length == 1 && allSelected == true) {
        allSelected = true;
    }
    else if ($('input[name="role3[]"]:checked').length < 5 && allSelected == true && id != "role3") {
        allSelected = false;
    }
    if ($('input[name="role4[]"]:checked').length == 1 && allSelected == true) {
        allSelected = true;
    }
    else if ($('input[name="role4[]"]:checked').length < 5 && allSelected == true && id != "role3") {
        allSelected = false;
    }
    if ($('input[name="role5[]"]:checked').length == 1 && allSelected == true) {
        allSelected = true;
    }
    else if ($('input[name="role5[]"]:checked').length < 5 && allSelected == true && id != "role3") {
        allSelected = false;
    }


    if (allSelected == true) {
        $('input[name="role1[]"]').prop('checked', true);
    }
    else if ($('input[name="role1[]"]:checked').length != 5) {
        $('#role3').prop('checked', false);
    }
    if (allSelected == true) {
        $('input[name="role2[]"]').prop('checked', true);
    }
    else if ($('input[name="role2[]"]:checked').length != 5) {
        $('#role3').prop('checked', false);
    }
    if (allSelected == true) {
        $('input[name="role3[]"]').prop('checked', true);
    }
    else if ($('input[name="role3[]"]:checked').length != 5) {
        $('#role3').prop('checked', false);
    }
    if (allSelected == true) {
        $('input[name="role4[]"]').prop('checked', true);
    }
    else if ($('input[name="role4[]"]:checked').length != 5) {
        $('#role3').prop('checked', false);
    }
    if (allSelected == true) {
        $('input[name="role5[]"]').prop('checked', true);
    }
    else if ($('input[name="role5[]"]:checked').length != 5) {
        $('#role3').prop('checked', false);
    }

    if (id == "role3" && allSelected == false) {
        $('input[name="role1[]"]').prop('checked', false);
    }
    if (id == "role3" && allSelected == false) {
        $('input[name="role2[]"]').prop('checked', false);
    }
    if (id == "role3" && allSelected == false) {
        $('input[name="role3[]"]').prop('checked', false);
    }
    if (id == "role3" && allSelected == false) {
        $('input[name="role4[]"]').prop('checked', false);
    }
    if (id == "role3" && allSelected == false) {
        $('input[name="role5[]"]').prop('checked', false);
    }

}

var defaultFAQshown = 10, loadMoreClicked = false;

var catval = [], filterValue = "", myVal = [];

function loadMoreClick() {
    defaultFAQshown = defaultFAQshown + 10;

    loadMoreClicked = true;

    filterData();
}

$(document).ready(function () {

    loadData();
    //mobileloadData();

    $('.faq').click(function () {

        resetCheckBox(this.id);

        filterData();
    });

});

function filterData() {
    $("#btnLoadMore").removeClass("hidden");
    var j = 0;

    if (loadMoreClicked == false) {
        defaultFAQshown = 10;
    }

    var catval = [], filterValue = "", myVal = [];
    $(':checkbox:checked').each(function (i) {
        catval[i] = $(this).val();
        if ($(this).val() == "all") {
            filterValue = "all"
        }
    });

    if (catval.length == 0) {
        filterValue = "all";
    }

        var html = "<div>"
        JsonData = "/assets/theme/json/faqall.json";

    var multiCategory = false;

    $.getJSON(JsonData, function (stores) {
        //$.each(stores, function (i, store) {
        for (var indexx = 0; indexx < stores.length; indexx++) {
            var store = stores[indexx];

            var alltitle = store.alltitle;
            var allcontent = store.allcontent;
            var categories = store.categories;

            if (categories.indexOf(",") != -1) {
                categories = categories.split(",");

                multiCategory = true;
            }

            //console.log(categories);

            if (filterValue == "all") {
                var existing = myVal.indexOf(indexx);

                if (indexx == 0 && existing == -1 && myVal.length < defaultFAQshown) {
                    html += "<div class='accordion-item'><h2 class='accordion-header' id='heading" + indexx + "'><button class='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + indexx + "' aria-expanded='true' aria-controls='collapse" + indexx + "'>" + alltitle + "</button></h2><div id='collapse" + indexx + "' class='accordion-collapse collapse show' aria-labelledby='heading" + indexx + "' data-bs-parent='#accordionExample'><div class='accordion-body'><p>" + allcontent + "</p></div></div></div>"
                }
                else if (existing == -1 && myVal.length < defaultFAQshown) {
                    html += "<div class='accordion-item'><h2 class='accordion-header' id='heading" + indexx + "'><button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + indexx + "' aria-expanded='true' aria-controls='collapse" + indexx + "'>" + alltitle + "</button></h2><div id='collapse" + indexx + "' class='accordion-collapse collapse' aria-labelledby='heading" + indexx + "' data-bs-parent='#accordionExample'><div class='accordion-body'><p>" + allcontent + "</p></div></div></div>"
                }

                myVal.push(indexx);
            }
            else {
                if (catval.length > 0) {
                    for (var i = 0; i < catval.length; i++) {

                        var existing = myVal.indexOf(indexx);

                        if (multiCategory == true) {
                            categories.forEach(category => {

                                category = category.trim();

                                if (catval[i] == "Buyer App" || catval[i] == "Seller App") {

                                    if ((category == catval[i] || category == "All App") && html == "<div>" && existing == -1 && myVal.length < defaultFAQshown) {
                                        html += "<div class='accordion-item'><h2 class='accordion-header' id='heading" + indexx + "'><button class='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + indexx + "' aria-expanded='true' aria-controls='collapse" + indexx + " - " + categories + "'>" + alltitle + "</button></h2><div id='collapse" + indexx + "' class='accordion-collapse collapse show' aria-labelledby='heading" + indexx + "' data-bs-parent='#accordionExample'><div class='accordion-body'><p>" + allcontent + "</p></div></div></div>"
                                        myVal.push(indexx);
                                        console.log(alltitle);
                                    }
                                    else if ((category == catval[i] || category == "All App") && existing == -1 && myVal.length < defaultFAQshown) {
                                        html += "<div class='accordion-item'><h2 class='accordion-header' id='heading" + indexx + "'><button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + indexx + "' aria-expanded='true' aria-controls='collapse" + indexx + "'>" + alltitle + "</button></h2><div id='collapse" + indexx + "' class='accordion-collapse collapse' aria-labelledby='heading" + indexx + "' data-bs-parent='#accordionExample'><div class='accordion-body'><p>" + allcontent + "</p></div></div></div>"
                                        myVal.push(indexx);
                                        console.log(alltitle);
                                    }
                                    else if ((category == catval[i] || category == "All App") && existing == -1 && myVal.length >= defaultFAQshown) {
                                        myVal.push(indexx);
                                        console.log(alltitle);
                                    }
                                }
                                else {
                                    //console.log("Inside Else");
                                    if (category == catval[i] && html == "<div>" && existing == -1 && myVal.length < defaultFAQshown) {
                                        html += "<div class='accordion-item'><h2 class='accordion-header' id='heading" + indexx + "'><button class='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + indexx + "' aria-expanded='true' aria-controls='collapse" + indexx + " - " + categories + "'>" + alltitle + "</button></h2><div id='collapse" + indexx + "' class='accordion-collapse collapse show' aria-labelledby='heading" + indexx + "' data-bs-parent='#accordionExample'><div class='accordion-body'><p>" + allcontent + "</p></div></div></div>"
                                        myVal.push(indexx);
                                    }
                                    else if (category == catval[i] && existing == -1 && myVal.length < defaultFAQshown) {
                                        html += "<div class='accordion-item'><h2 class='accordion-header' id='heading" + indexx + "'><button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + indexx + "' aria-expanded='true' aria-controls='collapse" + indexx + "'>" + alltitle + "</button></h2><div id='collapse" + indexx + "' class='accordion-collapse collapse' aria-labelledby='heading" + indexx + "' data-bs-parent='#accordionExample'><div class='accordion-body'><p>" + allcontent + "</p></div></div></div>"
                                        myVal.push(indexx);
                                    }
                                    else if (category == catval[i] && existing == -1 && myVal.length >= defaultFAQshown) {
                                        myVal.push(indexx);
                                    }
                                }

                                // + " - " + categories  
                            });
                        }
                        else {
                            if (catval[i] == "Buyer App" || catval[i] == "Seller App") {

                                if ((categories == catval[i] || categories == "All App") && html == "<div>" && existing == -1 && myVal.length < defaultFAQshown) {
                                    html += "<div class='accordion-item'><h2 class='accordion-header' id='heading" + indexx + "'><button class='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + indexx + "' aria-expanded='true' aria-controls='collapse" + indexx + " - " + categories + "'>" + alltitle + "</button></h2><div id='collapse" + indexx + "' class='accordion-collapse collapse show' aria-labelledby='heading" + indexx + "' data-bs-parent='#accordionExample'><div class='accordion-body'><p>" + allcontent + "</p></div></div></div>"
                                    myVal.push(indexx);
                                    console.log(alltitle);
                                }
                                else if ((categories == catval[i] || categories == "All App") && existing == -1 && myVal.length < defaultFAQshown) {
                                    html += "<div class='accordion-item'><h2 class='accordion-header' id='heading" + indexx + "'><button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + indexx + "' aria-expanded='true' aria-controls='collapse" + indexx + "'>" + alltitle + "</button></h2><div id='collapse" + indexx + "' class='accordion-collapse collapse' aria-labelledby='heading" + indexx + "' data-bs-parent='#accordionExample'><div class='accordion-body'><p>" + allcontent + "</p></div></div></div>"
                                    myVal.push(indexx);
                                    console.log(alltitle);
                                }
                                else if ((categories == catval[i] || categories == "All App") && existing == -1 && myVal.length >= defaultFAQshown) {
                                    myVal.push(indexx);
                                    console.log(alltitle);
                                }
                            }
                            else {
                                //console.log("Inside Else");
                                if (categories == catval[i] && html == "<div>" && existing == -1 && myVal.length < defaultFAQshown) {
                                    html += "<div class='accordion-item'><h2 class='accordion-header' id='heading" + indexx + "'><button class='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + indexx + "' aria-expanded='true' aria-controls='collapse" + indexx + "'>" + alltitle + "</button></h2><div id='collapse" + indexx + "' class='accordion-collapse collapse show' aria-labelledby='heading" + indexx + "' data-bs-parent='#accordionExample'><div class='accordion-body'><p>" + allcontent + "</p></div></div></div>"
                                    myVal.push(indexx);
                                }
                                else if (categories == catval[i] && existing == -1 && myVal.length < defaultFAQshown) {
                                    html += "<div class='accordion-item'><h2 class='accordion-header' id='heading" + indexx + "'><button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + indexx + "' aria-expanded='true' aria-controls='collapse" + indexx + "'>" + alltitle + "</button></h2><div id='collapse" + indexx + "' class='accordion-collapse collapse' aria-labelledby='heading" + indexx + "' data-bs-parent='#accordionExample'><div class='accordion-body'><p>" + allcontent + "</p></div></div></div>"
                                    myVal.push(indexx);
                                }
                                else if (categories == catval[i] && existing == -1 && myVal.length >= defaultFAQshown) {
                                    myVal.push(indexx);
                                }
                            }

                        }
                    }

                }
            }

            multiCategory = false;

            j++;
        }

        //defaultFAQshown = myVal.length;
        loadMoreClicked = false;

        if (defaultFAQshown >= myVal.length) {
            defaultFAQshown = myVal.length;
            $("#btnLoadMore").addClass("hidden");
        }

        html += '</div>';
        $('#accordionExample').html(html);
        $("#pcurrent").html(defaultFAQshown);
        $("#ptotal").html(myVal.length);

    });
}
function loadMoreClicks() {
    defaultFAQshown = defaultFAQshown + 10;

    loadMoreClicked = true;

    //mobileFilter(globalVal);
}

// var globalVal = "All";

// function mobileFilter(tabs) {

//     $("#btnLoadMores").removeClass("hidden");
//     var j = 0;

//     if (loadMoreClicked == false) {
//         defaultFAQshown = 10;
//     }

//     var catval = tabs;

//     globalVal = tabs;

//     var html = "<div>"
//     JsonData = "/assets/theme/json/faqall.json";



//     var multiCategory = false, myVal=[];

//     $.getJSON(JsonData, function (stores) {
//         //console.log(stores, "hari");
//         //$.each(stores, function (i, store) {
//         for (var indexx = 0; indexx < stores.length; indexx++) {
//             var store = stores[indexx];

//             var alltitle = store.alltitle;
//             var allcontent = store.allcontent;
//             var categories = store.categories;

//             if (categories.indexOf(",") != -1) {
//                 categories = categories.split(",");

//                 multiCategory = true;
//             }


//             if (catval == "All") {
//                 var existing = myVal.indexOf(indexx);

//                 if (indexx == 0 && existing == -1 && myVal.length < defaultFAQshown) {
//                     html += "<div class='accordion-item'><h2 class='accordion-header' id='heading" + indexx + "'><button class='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + indexx + "' aria-expanded='true' aria-controls='collapse" + indexx + "'>" + alltitle + "</button></h2><div id='collapse" + indexx + "' class='accordion-collapse collapse show' aria-labelledby='heading" + indexx + "' data-bs-parent='#accordionExampleone'><div class='accordion-body'><p>" + allcontent + "</p></div></div></div>"
//                 }
//                 else if (existing == -1 && myVal.length < defaultFAQshown) {
//                     html += "<div class='accordion-item'><h2 class='accordion-header' id='heading" + indexx + "'><button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + indexx + "' aria-expanded='true' aria-controls='collapse" + indexx + "'>" + alltitle + "</button></h2><div id='collapse" + indexx + "' class='accordion-collapse collapse' aria-labelledby='heading" + indexx + "' data-bs-parent='#accordionExampleone'><div class='accordion-body'><p>" + allcontent + "</p></div></div></div>"
//                 }

//                 myVal.push(indexx);
//                 console.log(myVal, 'test');
//             }
//             else {
//                 //if (catval.length > 0) {
//                     var tabIdval = catval.replace(" ","");

//                 var existing = myVal.indexOf(indexx);

//                 if (multiCategory == true) {
//                     categories.forEach(category => {

//                         category = category.trim();

//                         if (catval == "Buyer App" || catval == "Seller App") {

//                             if ((category == catval || category == "All App") && html == "<div>" && existing == -1 && myVal.length < defaultFAQshown) {
//                                 html += "<div class='accordion-item'><h2 class='accordion-header' id='heading" + indexx + "'><button class='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + indexx + "' aria-expanded='true' aria-controls='collapse" + indexx + " - " + categories + "'>" + alltitle + "</button></h2><div id='collapse" + indexx + "' class='accordion-collapse collapse show' aria-labelledby='heading" + indexx + "' data-bs-parent='#accordion"+tabIdval+"'><div class='accordion-body'><p>" + allcontent + "</p></div></div></div>"
//                                 myVal.push(indexx);
//                             }
//                             else if ((category == catval || category == "All App") && existing == -1 && myVal.length < defaultFAQshown) {
//                                 html += "<div class='accordion-item'><h2 class='accordion-header' id='heading" + indexx + "'><button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + indexx + "' aria-expanded='true' aria-controls='collapse" + indexx + "'>" + alltitle + "</button></h2><div id='collapse" + indexx + "' class='accordion-collapse collapse' aria-labelledby='heading" + indexx + "' data-bs-parent='#accordion"+tabIdval+"'><div class='accordion-body'><p>" + allcontent + "</p></div></div></div>"
//                                 myVal.push(indexx);
//                             }
//                             else if ((category == catval || category == "All App") && existing == -1 && myVal.length >= defaultFAQshown) {
//                                 myVal.push(indexx);
//                             }
//                         }
//                         else {
//                             //console.log("Inside Else");
//                             if (category == catval && html == "<div>" && existing == -1 && myVal.length < defaultFAQshown) {
//                                 html += "<div class='accordion-item'><h2 class='accordion-header' id='heading" + indexx + "'><button class='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + indexx + "' aria-expanded='true' aria-controls='collapse" + indexx + " - " + categories + "'>" + alltitle + "</button></h2><div id='collapse" + indexx + "' class='accordion-collapse collapse show' aria-labelledby='heading" + indexx + "' data-bs-parent='#accordion"+tabIdval+"'><div class='accordion-body'><p>" + allcontent + "</p></div></div></div>"
//                                 myVal.push(indexx);
//                             }
//                             else if (category == catval && existing == -1 && myVal.length < defaultFAQshown) {
//                                 html += "<div class='accordion-item'><h2 class='accordion-header' id='heading" + indexx + "'><button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + indexx + "' aria-expanded='true' aria-controls='collapse" + indexx + "'>" + alltitle + "</button></h2><div id='collapse" + indexx + "' class='accordion-collapse collapse' aria-labelledby='heading" + indexx + "' data-bs-parent='#accordion"+tabIdval+"'><div class='accordion-body'><p>" + allcontent + "</p></div></div></div>"
//                                 myVal.push(indexx);
//                             }
//                             else if (category == catval && existing == -1 && myVal.length >= defaultFAQshown) {
//                                 myVal.push(indexx);
//                             }
//                         }

//                     });
//                 }
//                 else {
//                     if (catval == "Buyer App" || catval == "Seller App") {

//                         if ((categories == catval || categories == "All App") && html == "<div>" && existing == -1 && myVal.length < defaultFAQshown) {
//                             html += "<div class='accordion-item'><h2 class='accordion-header' id='heading" + indexx + "'><button class='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + indexx + "' aria-expanded='true' aria-controls='collapse" + indexx + " - " + categories + "'>" + alltitle + "</button></h2><div id='collapse" + indexx + "' class='accordion-collapse collapse show' aria-labelledby='heading" + indexx + "' data-bs-parent='#accordion"+tabIdval+"'><div class='accordion-body'><p>" + allcontent + "</p></div></div></div>"
//                             myVal.push(indexx);
//                         }
//                         else if ((categories == catval || categories == "All App") && existing == -1 && myVal.length < defaultFAQshown) {
//                             html += "<div class='accordion-item'><h2 class='accordion-header' id='heading" + indexx + "'><button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + indexx + "' aria-expanded='true' aria-controls='collapse" + indexx + "'>" + alltitle + "</button></h2><div id='collapse" + indexx + "' class='accordion-collapse collapse' aria-labelledby='heading" + indexx + "' data-bs-parent='#accordion"+tabIdval+"'><div class='accordion-body'><p>" + allcontent + "</p></div></div></div>"
//                             myVal.push(indexx);
//                         }
//                         else if ((categories == catval || categories == "All App") && existing == -1 && myVal.length >= defaultFAQshown) {
//                             myVal.push(indexx);
//                         }
//                     }
//                     else {
//                         if (categories == catval && html == "<div>" && existing == -1 && myVal.length < defaultFAQshown) {
//                             html += "<div class='accordion-item'><h2 class='accordion-header' id='heading" + indexx + "'><button class='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + indexx + "' aria-expanded='true' aria-controls='collapse" + indexx + "'>" + alltitle + "</button></h2><div id='collapse" + indexx + "' class='accordion-collapse collapse show' aria-labelledby='heading" + indexx + "' data-bs-parent='#accordion"+tabIdval+"'><div class='accordion-body'><p>" + allcontent + "</p></div></div></div>"
//                             myVal.push(indexx);
//                         }
//                         else if (categories == catval && existing == -1 && myVal.length < defaultFAQshown) {
//                             html += "<div class='accordion-item'><h2 class='accordion-header' id='heading" + indexx + "'><button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + indexx + "' aria-expanded='true' aria-controls='collapse" + indexx + "'>" + alltitle + "</button></h2><div id='collapse" + indexx + "' class='accordion-collapse collapse' aria-labelledby='heading" + indexx + "' data-bs-parent='#accordion"+tabIdval+"'><div class='accordion-body'><p>" + allcontent + "</p></div></div></div>"
//                             myVal.push(indexx);
//                         }
//                         else if (categories == catval && existing == -1 && myVal.length >= defaultFAQshown) {
//                             myVal.push(indexx);
//                         }
//                     }

//                 }

//                 //}
//             }

//             multiCategory = false;

//             j++;
//         }

//         //defaultFAQshown = myVal.length;
//         loadMoreClicked = false;

//         var tabId = catval.replace(" ","");

//         if (defaultFAQshown >= myVal.length) {
//             defaultFAQshown = myVal.length;
//             $("#btnLoadMoresMobile"+tabId).addClass("hidden");
//         }

//         html += '</div>';
        
//         if(tabId == "All")
//         {
//             $('#accordionExampleone').html(html);
//         }
//         else
//         {
//             $('#accordion'+tabId).html(html);
//         }

//         $("#pcurrentoneMobile"+tabId).html(defaultFAQshown);
//         $("#ptotaloneMobile"+tabId).html(myVal.length);

//     });

// }
