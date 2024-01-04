$(document).ready(function () {

    $("#range-slider1").change(function () {

        filterData();
    });

    $('#citysrch').change(function () {
        filterData();
    });

    function filterData() {
        var cty = $('#citysrch').val();
        var catval = [];
        $(':checkbox:checked').each(function (i) {
            catval[i] = $(this).val();
        });

        var exp = $("#range-slider1").val();

        var formData = { city: cty, cat: catval }; //Array 
        var html = "<div>";
        var i = 0;
        var JsonData = "/assets/theme/json/career.json";
        var multiCategory = false, multiExperience = false;
        $.getJSON(JsonData, function (stores) {
            $.each(stores, function (indexx, store) {

                var departmentDiv = "";

                var fulltime = store.fulltime;
                var jobtitle = store.jobtitle;
                var shortcontent = store.shortcontent;
                var longdescriptions = store.longdescriptions;
                var department = store.department;
                var city = store.city;
                var experience = store.range;

                var departments = [], experiences = [], myVal=[];

                if (department.indexOf(",") != -1) {
                    departments = department.split(",");

                    for (var d = 0; d < departments.length; d++) {
                        departmentDiv += "<div class='job-content'><a>" + departments[d].trim() + "</a></div>"
                    }
                    multiCategory = true;
                }
                else {
                    departmentDiv += "<div class='job-content'><a>" + department + "</a></div>";

                    multiCategory = false;
                }

                if (experience.indexOf("-") != -1) {
                    experiences = experience.split("-");

                    experiences[0] = parseInt(experiences[0]);
                    experiences[1] = parseInt(experiences[1]);

                    multiExperience = true;
                }
                else {

                    experience = parseInt(experience);

                    multiExperience = false;
                }

                exp = parseInt(exp);

                if (exp == 0) {
                    if (cty && catval == "") {
                        
                        if (cty == city) {
                            if (i == 1) {
                                html += "<div class='job-accordion active mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                            }
                            else {
                                html += "<div class='job-accordion  mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                            }
                        }
                    }
                    else if (cty == "" && catval != "") {
                        for (var i = 0; i < catval.length; i++) {
                            var existing = myVal.indexOf(indexx);
                            if (multiCategory == true) {
                                departments.forEach((element, index) => {
                                    if (element.trim() == catval[i] && existing == -1) {
                                        if (i == 1) {
                                            html += "<div class='job-accordion active mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                                        }
                                        else {
                                            html += "<div class='job-accordion  mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                                        }
                                        myVal.push(indexx);
                                    }
                                });
                            }
                            if (department == catval[i]) {
                                if (i == 1) {
                                    html += "<div class='job-accordion active mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                                }
                                else {
                                    html += "<div class='job-accordion  mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                                }
                            }
                        }
                    }
                    else if (cty != "" && catval != "") {
                        for (var i = 0; i < catval.length; i++) {
                            var existing = myVal.indexOf(indexx);
                            if (multiCategory == true) {

                                departments.forEach((element, index) => {
                                    if (element.trim() == catval[i] && cty == city && existing == -1) {
                                        console.log(catval[i], 'hai');
                                        if (i == 1) {
                                            html += "<div class='job-accordion active mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                                        }
                                        else {
                                            html += "<div class='job-accordion  mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                                        }
                                        myVal.push(indexx);
                                    }
                                });
                            }
                            if (department == catval[i] && cty == city) {
                                if (i == 1) {
                                    html += "<div class='job-accordion active mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                                }
                                else {
                                    html += "<div class='job-accordion  mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                                }
                            }
                        }
                    }
                    else {
                        html += "<div class='job-accordion  mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                    }
                }
                else {
                    if (multiExperience == true) {
                        if (cty && catval == "") {
                            if (cty == city && exp <= experiences[1] && exp >= experiences[0]) {
                                if (i == 1) {
                                    html += "<div class='job-accordion active mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                                }
                                else {
                                    html += "<div class='job-accordion  mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                                }
                            }
                        }
                        else if (cty == "" && catval != "") {
                            for (var i = 0; i < catval.length; i++) {
                                var existing = myVal.indexOf(indexx);
                                if (multiCategory == true) {
                                    departments.forEach((element, index) => {
                                        if (element.trim() == catval[i] && exp <= experiences[1] && exp >= experiences[0] && existing == -1) {
                                            if (i == 1) {
                                                html += "<div class='job-accordion active mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                                            }
                                            else {
                                                html += "<div class='job-accordion  mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                                            }
                                            myVal.push(indexx);
                                        }
                                    });
                                }
                                else if (department == catval[i] && exp <= experiences[1] && exp >= experiences[0] && existing == -1) {
                                    if (i == 1) {
                                        html += "<div class='job-accordion active mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                                    }
                                    else {
                                        html += "<div class='job-accordion  mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                                    }
                                    myVal.push(indexx);
                                }
                            }
                        }
                        else if (cty != "" && catval != "") {
                            for (var i = 0; i < catval.length; i++) {
                                var existing = myVal.indexOf(indexx);
                                if (multiCategory == true) {

                                    departments.forEach((element, index) => {
                                        if (element.trim() == catval[i] && cty == city && exp <= experiences[1] && exp >= experiences[0] && existing == -1) {
                                            if (i == 1) {
                                                html += "<div class='job-accordion active mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                                            }
                                            else {
                                                html += "<div class='job-accordion  mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                                            }
                                            myVal.push(indexx);
                                        }
                                    });
                                }
                                else if (department == catval[i] && cty == city && exp <= experiences[1] && exp >= experiences[0]) {
                                    if (i == 1) {
                                        html += "<div class='job-accordion active mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                                    }
                                    else {
                                        html += "<div class='job-accordion  mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                                    }
                                }
                            }
                        }
                        else {
                            if (parseInt(exp) <= parseInt(experiences[1]) && parseInt(exp) >= parseInt(experiences[0])) {
                                html += "<div class='job-accordion  mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                            }
                        }
                    }
                    else {
                        if (cty && catval == "") {
                            if (cty == city && exp == experience) {
                                if (i == 1) {
                                    html += "<div class='job-accordion active mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                                }
                                else {
                                    html += "<div class='job-accordion  mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                                }
                            }
                        }
                        else if (cty == "" && catval != "") {
                            for (var i = 0; i < catval.length; i++) {
                                if (multiCategory == true) {
                                    departments.forEach((element, index) => {
                                        if (element.trim() == catval[i] && exp == experience) {
                                            if (i == 1) {
                                                html += "<div class='job-accordion active mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                                            }
                                            else {
                                                html += "<div class='job-accordion  mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                                            }
                                        }
                                    });
                                }
                                else if (department == catval[i] && exp == experience) {
                                    if (i == 1) {
                                        html += "<div class='job-accordion active mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                                    }
                                    else {
                                        html += "<div class='job-accordion  mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                                    }
                                }
                            }
                        }
                        else if (cty != "" && catval != "") {
                            for (var i = 0; i < catval.length; i++) {
                                if (multiCategory == true) {
                                    departments.forEach((element, index) => {
                                        if (element.trim() == catval[i] && cty == city && exp == experience) {
                                            if (i == 1) {
                                                html += "<div class='job-accordion active mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                                            }
                                            else {
                                                html += "<div class='job-accordion  mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                                            }
                                        }
                                    });
                                }
                                else if (department == catval[i] && cty == city && exp == experience) {
                                    if (i == 1) {
                                        html += "<div class='job-accordion active mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                                    }
                                    else {
                                        html += "<div class='job-accordion  mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                                    }
                                }
                            }
                        }
                        else {
                            if (exp == experience) {
                                html += "<div class='job-accordion  mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
                            }

                        }
                    }

                }

            });
            html += '</div>';
            //data - response from server
            //alert(data);
            $('#jobs').html(html);
            setTimeout(() => {
                accordionLoad();
            }, 400);
            $('#pagul').html("");
            $('#pagul').html('<li class="prev"><a href="javascript:void(0);"><img src="images/company/prev.png"></a></li>');
            var rowsShown = 10;
            var rowsTotal = $('.job-accordion').length;
            var numPages = rowsTotal / rowsShown;
            for (i = 0; i < numPages; i++) {
                var pageNum = i + 1;
                $('#pagul').append('<li class="nmbr" style="display:none;"><a href="javascript:void(0);" rel="' + i + '">' + pageNum + '</a></li>');
            }
            $('#pagul').append('<li class="next"><a href="javascript:void(0);"><img src="images/company/next.png"></a></li>');
            $('.job-accordion').hide();
            $('.job-accordion').slice(0, rowsShown).show();
            $('#pagul li.nmbr:first a').addClass('active');
            $('#pagul li.nmbr a').bind('click', function () {
                $('#pagul li.nmbr a').removeClass('active');
                $(this).addClass('active');
                var currPage = $(this).attr('rel');
                var startItem = currPage * rowsShown;
                var endItem = startItem + rowsShown;
                $('.job-accordion').css('opacity', '0.0').hide().slice(startItem, endItem).
                    css('display', 'table-row').animate({ opacity: 1 }, 300);
                $("#pstart").html(startItem + 1);
                if (endItem > rowsTotal) {
                    $("#pend").html(rowsTotal);
                } else {
                    $("#pend").html(endItem);
                }
                //alert(endItem);
            });
            $('.prev a').bind('click', function () {
                var cPage = $("#pagul a.active").attr('rel');
                if (cPage > 0) {
                    //alert(cPage);
                    var dd = cPage - 1;
                    $('#pagul li.nmbr a').removeClass('active');
                    $("#pagul li.nmbr a[rel$='" + dd + "']").addClass('active');
                    var startItem = cPage * rowsShown;
                    var startItem = startItem - 10;
                    //alert(startItem);
                    var endItem = startItem + rowsShown;
                    $('.job-accordion').css('opacity', '0.0').hide().slice(startItem, endItem).
                        css('display', 'table-row').animate({ opacity: 1 }, 300);
                    $("#pstart").html(startItem + 1);
                    if (endItem > rowsTotal) {
                        $("#pend").html(rowsTotal);
                    } else {
                        $("#pend").html(endItem);
                    }
                }
            });
            $('.next a').bind('click', function () {
                var cPage = $("#pagul a.active").attr('rel');
                if ((parseInt(cPage) + 1) <= parseInt(numPages)) {
                    var dd = parseInt(cPage) + 1;
                    //alert(dd);
                    $('#pagul li.nmbr a').removeClass('active');
                    $("#pagul li.nmbr a[rel$='" + dd + "']").addClass('active');
                    var startItem = cPage * rowsShown;
                    var startItem = startItem + 10;
                    //alert(startItem);
                    var endItem = startItem + rowsShown;
                    $('.job-accordion').css('opacity', '0.0').hide().slice(startItem, endItem).
                        css('display', 'table-row').animate({ opacity: 1 }, 300);
                    $("#pstart").html(startItem + 1);
                    if (endItem > rowsTotal) {
                        $("#pend").html(rowsTotal);
                    } else {
                        $("#pend").html(endItem);
                    }
                }
            });

            var currPage1 = 0;
            var startItem1 = currPage1 * rowsShown;
            var endItem1 = startItem1 + rowsShown;
            $("#pstart").html(startItem1 + 1);
            if (endItem1 > rowsTotal) {
                $("#pend").html(rowsTotal);
            } else {
                $("#pend").html(endItem1);
            }
            //alert(currPage1);
            $("#ptcnt").html(rowsTotal);


        });
    }

    $('.dcls').click(function () {
        filterData();

    });

    loadData();

    setTimeout(() => {
        accordionLoad();
    }, 300);


//     if ($(window).width() < 576) {
//         $(".all-program").slick({
//       dots: true,
//       autoplay: false,
//       arrows: false,
//       infinite: false,
//       slidesToShow: 1.2,
//       slidesToScroll: 1,
//       customPaging: function (slick, index) {
//         return '<a>' + 0 + (index + 1) + '</a>';
//       },
    
      
//     });     
// }


});

function accordionLoad() {
    var acc = document.getElementsByClassName('accordion');
    var i;

    // Open the first accordion
    var firstAccordion = acc[0];

    var firstPanel = firstAccordion.nextElementSibling;
    firstAccordion.classList.add("active");
    firstPanel.style.maxHeight = 20000 + "px";

    // Add onclick listener to every accordion element
    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function () {
            // For toggling purposes detect if the clicked section is already "active"
            var isActive = this.classList.contains("active");

            // Close all accordions
            var allAccordions = document.getElementsByClassName("accordion");
            for (j = 0; j < allAccordions.length; j++) {
                // Remove active class from section header
                allAccordions[j].classList.remove("active");

                // Remove the max-height class from the panel to close it
                var panel = allAccordions[j].nextElementSibling;
                // var maxHeightValue = getStyle(panel, "maxHeight");

                if (maxHeightValue !== "0px") {
                    panel.style.maxHeight = null;
                }
            }

            // Toggle the clicked section using a ternary operator
            isActive ? this.classList.remove("active") : this.classList.add("active");

            // Toggle the panel element
            var panel = this.nextElementSibling;
            var maxHeightValue = getStyle(panel, "maxHeight");

            if (maxHeightValue !== "0px") {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        };
    }
}

function getStyle(el, styleProp) {
    var value, defaultView = (el.ownerDocument || document).defaultView;
    if (defaultView && defaultView.getComputedStyle) {
        // sanitize property name to css notation
        // (hypen separated words eg. font-Size)
        styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
        return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    } else if (el.currentStyle) { // IE
        // sanitize property name to camelCase
        styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
            return letter.toUpperCase();
        });
        value = el.currentStyle[styleProp];
        // convert other units to pixels on IE
        if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
            return (function (value) {
                var oldLeft = el.style.left,
                    oldRsLeft = el.runtimeStyle.left;
                el.runtimeStyle.left = el.currentStyle.left;
                el.style.left = value || 0;
                value = el.style.pixelLeft + "px";
                el.style.left = oldLeft;
                el.runtimeStyle.left = oldRsLeft;
                return value;
            })(value);
        }
        return value;
    }
}

function loadData() {
    var html = "<div>";
    var i = 0;
    var JsonData = "/assets/theme/json/career.json";
    $.getJSON(JsonData, function (stores) {
        $.each(stores, function (i, store) {
            i++;

            var departmentDiv = "";

            var fulltime = store.fulltime;
            var jobtitle = store.jobtitle;
            var shortcontent = store.shortcontent;
            var longdescriptions = store.longdescriptions;
            var department = store.department;
            var city = store.city;

            if (department.indexOf(",") != -1) {
                var departments = department.split(",");

                for (var d = 0; d < departments.length; d++) {
                    departmentDiv += "<div class='job-content'><a>" + departments[d].trim() + "</a></div>"
                }
            }
            else {
                departmentDiv += "<div class='job-content'><a>" + department + "</a></div>"
            }

            //var city = store.city;
            if (i == 1) {
                html += "<div class='job-accordion active mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
            }
            else {
                html += "<div class='job-accordion  mt-3'> <button class='accordion'> <div class='row single-jobview'> <p class='py-2'>" + fulltime + " </p> <div class='col-lg-8 col-md-12'> <h3>" + jobtitle + " </h3> <p>" + shortcontent + "</p> <div class='py-2 jobpg-location'>" + departmentDiv + "<div class='job-content'><a><img src='images/Vector.png' alt='location vector image' class='mx-2'>" + city + "</a></div></div> </div> <div class='col-lg-4 col-md-12 d-flex flex-column apply-now'><a href='mailto:info@sagenomeglobal.com'>Apply Now <i class='fa-solid fa-arrow-right mx-3'></i></a> <p>See Details</p> </div> </div> </button> <div class='panel'> <p class='py-1 long-descriptions-header'>" + longdescriptions + "</p> </div> </div>"
            }
        });
        html += '</div>';

        //data - response from server
        //alert(data);
        $('#jobs').html(html);
        $('#pagul').html("");
        $('#pagul').html('<li class="prev"><a href="javascript:void(0);"><img src="images/company/prev.png"></a></li>');
        var rowsShown = 10;
        var rowsTotal = $('.job-accordion').length;
        var numPages = rowsTotal / rowsShown;
        for (i = 0; i < numPages; i++) {
            var pageNum = i + 1;
            $('#pagul').append('<li class="nmbr" style="display:none;"><a href="javascript:void(0);" rel="' + i + '">' + pageNum + '</a></li>');
        }
        $('#pagul').append('<li class="next"><a href="javascript:void(0);"><img src="images/company/next.png"></a></li>');
        $('.job-accordion').hide();
        $('.job-accordion').slice(0, rowsShown).show();
        $('#pagul li.nmbr:first a').addClass('active');
        $('#pagul li.nmbr a').bind('click', function () {
            $('#pagul li.nmbr a').removeClass('active');
            $(this).addClass('active');
            var currPage = $(this).attr('rel');
            var startItem = currPage * rowsShown;
            var endItem = startItem + rowsShown;
            $('.job-accordion').css('opacity', '0.0').hide().slice(startItem, endItem).
                css('display', 'table-row').animate({ opacity: 1 }, 300);
            $("#pstart").html(startItem + 1);
            if (endItem > rowsTotal) {
                $("#pend").html(rowsTotal);
            } else {
                $("#pend").html(endItem);
            }
            //alert(endItem);
        });
        $('.prev a').bind('click', function () {
            var cPage = $("#pagul a.active").attr('rel');
            if (cPage > 0) {
                //alert(cPage);
                var dd = cPage - 1;
                $('#pagul li.nmbr a').removeClass('active');
                $("#pagul li.nmbr a[rel$='" + dd + "']").addClass('active');
                var startItem = cPage * rowsShown;
                var startItem = startItem - 10;
                //alert(startItem);
                var endItem = startItem + rowsShown;
                $('.job-accordion').css('opacity', '0.0').hide().slice(startItem, endItem).
                    css('display', 'table-row').animate({ opacity: 1 }, 300);
                $("#pstart").html(startItem + 1);
                if (endItem > rowsTotal) {
                    $("#pend").html(rowsTotal);
                } else {
                    $("#pend").html(endItem);
                }
            }
        });
        $('.next a').bind('click', function () {
            var cPage = $("#pagul a.active").attr('rel');
            if ((parseInt(cPage) + 1) <= parseInt(numPages)) {
                var dd = parseInt(cPage) + 1;
                //alert(dd);
                $('#pagul li.nmbr a').removeClass('active');
                $("#pagul li.nmbr a[rel$='" + dd + "']").addClass('active');
                var startItem = cPage * rowsShown;
                var startItem = startItem + 10;
                //alert(startItem);
                var endItem = startItem + rowsShown;
                $('.job-accordion').css('opacity', '0.0').hide().slice(startItem, endItem).
                    css('display', 'table-row').animate({ opacity: 1 }, 300);
                $("#pstart").html(startItem + 1);
                if (endItem > rowsTotal) {
                    $("#pend").html(rowsTotal);
                } else {
                    $("#pend").html(endItem);
                }
            }
        });

        var currPage1 = 0;
        var startItem1 = currPage1 * rowsShown;
        var endItem1 = startItem1 + rowsShown;
        $("#pstart").html(startItem1 + 1);
        if (endItem1 > rowsTotal) {
            $("#pend").html(rowsTotal);
        } else {
            $("#pend").html(endItem1);
        }
        //alert(currPage1);
        $("#ptcnt").html(rowsTotal);

    });
}
    