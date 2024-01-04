var JsonData;

$(document).ready(function () {

    JsonData = "/assets/theme/json/livenetwork1.json";

    $('.tsp').click(function () {
        //alert(this.id);
        
        loadNewData(this.id);
    })

    $("#a2-tab").click(function(){
        loadNewData('integrationstage4');
        $('input[id="integrationstage4"]').prop("checked", true).trigger("click");
    });

//Active Tab on Page Load 
       
var activeTab = window.location.hash;
activeTab=activeTab.replace("#","");     
if(activeTab){         
   $('#myTab>li').each(function () {
       if ($(this).hasClass(activeTab)) {
           $('#myTab>li a').removeClass('active');
           $('#myTab>li.'+activeTab+' a').addClass('active');
       $("#myTabContent .tab-pane").removeClass('show active');
        $('#myTabContent .tab-pane.'+activeTab+'').addClass('show active');
        if(activeTab=="echo")
           loadNewData('integrationstage4');

           $('html, body').animate({
            scrollTop: $("#myTab").offset().top
        }, 500);
   }
   else {
      // $(this).hide();      
   }
   });        
}

//Footer link clicks page will be reloaded
$(".a-foot-net-link").click(function()
{
   var link=$(this).attr("href");
   var activeTabSelect=link.replace("/network-participants/#","");   
if(activeTabSelect){         
   $('#myTab>li').each(function () {
       if ($(this).hasClass(activeTabSelect)) {
           $('#myTab>li a').removeClass('active');
           $('#myTab>li.'+activeTabSelect+' a').addClass('active');
       $("#myTabContent .tab-pane").removeClass('show active');
        $('#myTabContent .tab-pane.'+activeTabSelect+'').addClass('show active');
        if(activeTabSelect=="echo")
           loadNewData('integrationstage4');
        else if(activeTabSelect=="network")
            $('input[id="integrationstage1"]').prop("checked", true).trigger("click");

           $('html, body').animate({
            scrollTop: $("#myTab").offset().top
        }, 500);
        }
   else {
      // $(this).hide();      
   }
   });       
}
  
});

    function loadNewData(dataId)
    {
        if (dataId == "integrationstage4") { 
            JsonData = "/assets/theme/json/tsp.json";
            var html = "<table class='table table-striped' id='sellertableone'><thead><tr><th scope='col'>Name of Technology Service Provider (TSP)</th><th scope='col'>Solution for Role</th><th scope='col'>Contact</th></tr></thead><tbody>";
            $.getJSON(JsonData, function (stores) {
                $.each(stores, function (i, store) {
                    var nametsp = store.nametsp;
                    var role = store.role;
                    var contact = store.contact;
                    html += "<tr><td>" + nametsp + "</td><td>" + role + "</td><td>" + contact + "</td></tr>";
                });
                html += '</tbody></table>';

                //data - response from server
                //alert(data);
                $('#tbledivone').html(html);
                $('#pagulone').html("");
                $('#pagulone').html('<li id="div1prev" class="prev"><a style="display:none; href="#myTab"><img src="/assets/theme/images/company/prev.png"></a></li>');
                var rowsShown = 14;
                var rowsTotal = $('#sellertableone tbody tr').length;
                var numPages = rowsTotal / rowsShown;
                for (i = 0; i < numPages; i++) {
                    var pageNum = i + 1;
                    $('#pagulone').append('<li class="nmbr" style="display:none;"><a href="javascript:void(0);" rel="' + i + '">' + pageNum + '</a></li>');
                }
                $('#pagulone').append('<li id="div1next" class="next"><a style="display:none; href="#myTab"><img src="/assets/theme/images/company/next.png"></a></li>');
                $('#sellertableone tbody tr').hide();
                $('#sellertableone tbody tr').slice(0, rowsShown).show();
                $('#pagulone li.nmbr:first a').addClass('active');
                $('#pagulone li.nmbr a').bind('click', function () {
                    $('#pagulone li.nmbr a').removeClass('active');
                    $(this).addClass('active');
                    var currPage = $(this).attr('rel');
                    var startItem = currPage * rowsShown;
                    var endItem = startItem + rowsShown;
                    $('#sellertableone tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
                        css('display', 'table-row').animate({ opacity: 1 }, 300);
                    $("#pstartone").html(startItem + 1);
                    if (endItem > rowsTotal) {
                        $("#pendone").html(rowsTotal);
                    } else {
                        $("#pendone").html(endItem);
                    }
                    //alert(endItem);
                });
                $('#div1prev .prev a').bind('click', function () {
                    var cPage = $("#pagulone a.active").attr('rel');
                    if (cPage > 0) {
                        //alert(cPage);
                        var dd = cPage - 1;
                        $('#pagulone li.nmbr a').removeClass('active');
                        $("#pagulone li.nmbr a[rel$='" + dd + "']").addClass('active');
                        var startItem = cPage * rowsShown;
                        var startItem = startItem - 10;
                        //alert(startItem);
                        var endItem = startItem + rowsShown;
                        $('#sellertableone tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
                            css('display', 'table-row').animate({ opacity: 1 }, 300);
                        $("#pstartone").html(startItem + 1);
                        if (endItem > rowsTotal) {
                            $("#pendone").html(rowsTotal);
                        } else {
                            $("#pendone").html(endItem);
                        }
                    }
                });
                $('#div1next .next a').bind('click', function () {
                    var cPage = $("#pagulone a.active").attr('rel');
                    if (cPage < numPages.toPrecision(1)) {
                        var dd = parseInt(cPage) + 1;
                        //alert(dd);
                        $('#pagulone li.nmbr a').removeClass('active');
                        $("#pagulone li.nmbr a[rel$='" + dd + "']").addClass('active');
                        var startItem = cPage * rowsShown;
                        var startItem = startItem + 10;
                        //alert(startItem);
                        var endItem = startItem + rowsShown;
                        $('#sellertableone tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
                            css('display', 'table-row').animate({ opacity: 1 }, 300);
                        $("#pstartone").html(startItem + 1);
                        if (endItem > rowsTotal) {
                            $("#pendone").html(rowsTotal);
                        } else {
                            $("#pendone").html(endItem);
                        }
                    }
                });

                var currPage1 = 0;
                var startItem1 = currPage1 * rowsShown;
                var endItem1 = startItem1 + rowsShown;
                $("#pstartone").html(startItem1 + 1);
                if (endItem1 > rowsTotal) {
                    $("#pendone").html(rowsTotal);
                } else {
                    $("#pendone").html(endItem1);
                }
                //alert(currPage1);
                $("#ptcntone").html(rowsTotal);

            });
        }
        else if (dataId == "integrationstage5") { 
            JsonData = "/assets/theme/json/rsp.json";
            var html = "<table class='table table-striped' id='sellertableone'><thead><tr><th scope='col'>Organisation</th><th scope='col'>Role</th><th scope='col'>Email</th></tr></thead><tbody>";
            $.getJSON(JsonData, function (stores) {
                $.each(stores, function (i, store) {
                    var organisation = store.Organisation;
                    var contact= store.role;
                    var email = store.contact;
                    html += "<tr><td>" + organisation + "</td><td>" + contact + "</td><td>" + email + "</td></tr>";
                });
                html += '</tbody></table>';

                //data - response from server
                //alert(data);
                $('#tbledivone').html(html);
                $('#pagulone').html("");
                $('#pagulone').html('<li id="div1prev" class="prev"><a style="display:none; href="#myTab"><img src="/assets/theme/images/company/prev.png"></a></li>');
                var rowsShown = 10;
                var rowsTotal = $('#sellertableone tbody tr').length;
                var numPages = rowsTotal / rowsShown;
                for (i = 0; i < numPages; i++) {
                    var pageNum = i + 1;
                    $('#pagulone').append('<li class="nmbr" style="display:none;"><a href="javascript:void(0);" rel="' + i + '">' + pageNum + '</a></li>');
                }
                $('#pagulone').append('<li id="div1next" class="next"><a style="display:none; href="#myTab"><img src="/assets/theme/images/company/next.png"></a></li>');
                $('#sellertableone tbody tr').hide();
                $('#sellertableone tbody tr').slice(0, rowsShown).show();
                $('#pagulone li.nmbr:first a').addClass('active');
                $('#pagulone li.nmbr a').bind('click', function () {
                    $('#pagulone li.nmbr a').removeClass('active');
                    $(this).addClass('active');
                    var currPage = $(this).attr('rel');
                    var startItem = currPage * rowsShown;
                    var endItem = startItem + rowsShown;
                    $('#sellertableone tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
                        css('display', 'table-row').animate({ opacity: 1 }, 300);
                    $("#pstartone").html(startItem + 1);
                    if (endItem > rowsTotal) {
                        $("#pendone").html(rowsTotal);
                    } else {
                        $("#pendone").html(endItem);
                    }
                    //alert(endItem);
                });
                $('#div1prev .prev a').bind('click', function () {
                    var cPage = $("#pagulone a.active").attr('rel');
                    if (cPage > 0) {
                        //alert(cPage);
                        var dd = cPage - 1;
                        $('#pagulone li.nmbr a').removeClass('active');
                        $("#pagulone li.nmbr a[rel$='" + dd + "']").addClass('active');
                        var startItem = cPage * rowsShown;
                        var startItem = startItem - 10;
                        //alert(startItem);
                        var endItem = startItem + rowsShown;
                        $('#sellertableone tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
                            css('display', 'table-row').animate({ opacity: 1 }, 300);
                        $("#pstartone").html(startItem + 1);
                        if (endItem > rowsTotal) {
                            $("#pendone").html(rowsTotal);
                        } else {
                            $("#pendone").html(endItem);
                        }
                    }
                });
                $('#div1next .next a').bind('click', function () {
                    var cPage = $("#pagulone a.active").attr('rel');
                    if (cPage < numPages.toPrecision(1)) {
                        var dd = parseInt(cPage) + 1;
                        //alert(dd);
                        $('#pagulone li.nmbr a').removeClass('active');
                        $("#pagulone li.nmbr a[rel$='" + dd + "']").addClass('active');
                        var startItem = cPage * rowsShown;
                        var startItem = startItem + 10;
                        //alert(startItem);
                        var endItem = startItem + rowsShown;
                        $('#sellertableone tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
                            css('display', 'table-row').animate({ opacity: 1 }, 300);
                        $("#pstartone").html(startItem + 1);
                        if (endItem > rowsTotal) {
                            $("#pendone").html(rowsTotal);
                        } else {
                            $("#pendone").html(endItem);
                        }
                    }
                });

                var currPage1 = 0;
                var startItem1 = currPage1 * rowsShown;
                var endItem1 = startItem1 + rowsShown;
                $("#pstartone").html(startItem1 + 1);
                if (endItem1 > rowsTotal) {
                    $("#pendone").html(rowsTotal);
                } else {
                    $("#pendone").html(endItem1);
                }
                //alert(currPage1);
                $("#ptcntone").html(rowsTotal);

            });
        }
        else if (dataId == "integrationstage6") { 
            JsonData = "/assets/theme/json/nap.json";
            var html = "<table class='table table-striped' id='sellertableone'><thead><tr><th style='padding:0.5rem;' scope='col'>Bank Name</th><th style='padding:0.5rem;' scope='col' style='width:23%'>Contact</th><th style='padding:0.5rem;' scope='col' style='width:25%'>Email ID</th><th style='padding:0.5rem;' scope='col'>Contact Number</th><th style='padding:0.5rem;' scope='col' style='width:17%'>Zone</th><th style='padding:0rem;' scope='col'>Links</th></tr></thead><tbody>";
            $.getJSON(JsonData, function (stores) {
                $.each(stores, function (i, store) {
                    var bankname = store.bankname;
                    var contact = store.contact;
                    var email = store.email;
                    var zone = store.zone;
                    var contactno = store.contactno;
                    var links = store.link;
                    html += "<tr><td style='padding:0.5rem;'>" + bankname + "</td><td style='padding:0.5rem;'>" + contact + "</td><td style='padding:0.5rem;'>" + email + "</td><td style='padding:0.5rem;'>" + contactno + "</td><td style='padding:0.5rem;'>" + zone + "</td><td style='padding:0rem;'>" + links + "</td></tr>";
                });
                html += '</tbody></table>';

                //data - response from server
                //alert(data);
                $('#tbledivone').html(html);
                $('#pagulone').html("");
                $('#pagulone').html('<li id="div1prev" class="prev"><a style="display:none; href="#myTab"><img src="/assets/theme/images/company/prev.png"></a></li>');
                var rowsShown = 12;
                var rowsTotal = $('#sellertableone tbody tr').length;
                var numPages = rowsTotal / rowsShown;
                for (i = 0; i < numPages; i++) {
                    var pageNum = i + 1;
                    $('#pagulone').append('<li class="nmbr" style="display:none;"><a href="javascript:void(0);" rel="' + i + '">' + pageNum + '</a></li>');
                }
                $('#pagulone').append('<li id="div1next" class="next"><a style="display:none; href="#myTab"><img src="/assets/theme/images/company/next.png"></a></li>');
                $('#sellertableone tbody tr').hide();
                $('#sellertableone tbody tr').slice(0, rowsShown).show();
                $('#pagulone li.nmbr:first a').addClass('active');
                $('#pagulone li.nmbr a').bind('click', function () {
                    $('#pagulone li.nmbr a').removeClass('active');
                    $(this).addClass('active');
                    var currPage = $(this).attr('rel');
                    var startItem = currPage * rowsShown;
                    var endItem = startItem + rowsShown;
                    $('#sellertableone tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
                        css('display', 'table-row').animate({ opacity: 1 }, 300);
                    $("#pstartone").html(startItem + 1);
                    if (endItem > rowsTotal) {
                        $("#pendone").html(rowsTotal);
                    } else {
                        $("#pendone").html(endItem);
                    }
                    //alert(endItem);
                });
                $('#div1prev .prev a').bind('click', function () {
                    var cPage = $("#pagulone a.active").attr('rel');
                    if (cPage > 0) {
                        //alert(cPage);
                        var dd = cPage - 1;
                        $('#pagulone li.nmbr a').removeClass('active');
                        $("#pagulone li.nmbr a[rel$='" + dd + "']").addClass('active');
                        var startItem = cPage * rowsShown;
                        var startItem = startItem - 10;
                        //alert(startItem);
                        var endItem = startItem + rowsShown;
                        $('#sellertableone tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
                            css('display', 'table-row').animate({ opacity: 1 }, 300);
                        $("#pstartone").html(startItem + 1);
                        if (endItem > rowsTotal) {
                            $("#pendone").html(rowsTotal);
                        } else {
                            $("#pendone").html(endItem);
                        }
                    }
                });
                $('#div1next .next a').bind('click', function () {
                    var cPage = $("#pagulone a.active").attr('rel');
                    if (cPage < numPages.toPrecision(1)) {
                        var dd = parseInt(cPage) + 1;
                        //alert(dd);
                        $('#pagulone li.nmbr a').removeClass('active');
                        $("#pagulone li.nmbr a[rel$='" + dd + "']").addClass('active');
                        var startItem = cPage * rowsShown;
                        var startItem = startItem + 10;
                        //alert(startItem);
                        var endItem = startItem + rowsShown;
                        $('#sellertableone tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
                            css('display', 'table-row').animate({ opacity: 1 }, 300);
                        $("#pstartone").html(startItem + 1);
                        if (endItem > rowsTotal) {
                            $("#pendone").html(rowsTotal);
                        } else {
                            $("#pendone").html(endItem);
                        }
                    }
                });

                var currPage1 = 0;
                var startItem1 = currPage1 * rowsShown;
                var endItem1 = startItem1 + rowsShown;
                $("#pstartone").html(startItem1 + 1);
                if (endItem1 > rowsTotal) {
                    $("#pendone").html(rowsTotal);
                } else {
                    $("#pendone").html(endItem1);
                }
                //alert(currPage1);
                $("#ptcntone").html(rowsTotal);

            });
        }
        else if (dataId == "integrationstage7") { 
            JsonData = "/assets/theme/json/osp.json";
            var html = "<table class='table table-striped' id='sellertableone'><thead><tr><th scope='col'>Organisation</th><th scope='col'>Contact Person</th><th scope='col'>Email addresses</th></tr></thead><tbody>";
            $.getJSON(JsonData, function (stores) {
                $.each(stores, function (i, store) {
                    var organisation = store.Organisation;
                    var contact= store.Contact;
                    var email = store.Email;
                    html += "<tr><td>" + organisation + "</td><td>" + contact + "</td><td>" + email + "</td></tr>";
                });
                html += '</tbody></table>';

                //data - response from server
                //alert(data);
                $('#tbledivone').html(html);
                $('#pagulone').html("");
                $('#pagulone').html('<li id="div1prev" class="prev"><a style="display:none; href="#myTab"><img src="/assets/theme/images/company/prev.png"></a></li>');
                var rowsShown = 10;
                var rowsTotal = $('#sellertableone tbody tr').length;
                var numPages = rowsTotal / rowsShown;
                for (i = 0; i < numPages; i++) {
                    var pageNum = i + 1;
                    $('#pagulone').append('<li class="nmbr" style="display:none;"><a href="javascript:void(0);" rel="' + i + '">' + pageNum + '</a></li>');
                }
                $('#pagulone').append('<li id="div1next" class="next"><a style="display:none; href="#myTab"><img src="/assets/theme/images/company/next.png"></a></li>');
                $('#sellertableone tbody tr').hide();
                $('#sellertableone tbody tr').slice(0, rowsShown).show();
                $('#pagulone li.nmbr:first a').addClass('active');
                $('#pagulone li.nmbr a').bind('click', function () {
                    $('#pagulone li.nmbr a').removeClass('active');
                    $(this).addClass('active');
                    var currPage = $(this).attr('rel');
                    var startItem = currPage * rowsShown;
                    var endItem = startItem + rowsShown;
                    $('#sellertableone tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
                        css('display', 'table-row').animate({ opacity: 1 }, 300);
                    $("#pstartone").html(startItem + 1);
                    if (endItem > rowsTotal) {
                        $("#pendone").html(rowsTotal);
                    } else {
                        $("#pendone").html(endItem);
                    }
                    //alert(endItem);
                });
                $('#div1prev .prev a').bind('click', function () {
                    var cPage = $("#pagulone a.active").attr('rel');
                    if (cPage > 0) {
                        //alert(cPage);
                        var dd = cPage - 1;
                        $('#pagulone li.nmbr a').removeClass('active');
                        $("#pagulone li.nmbr a[rel$='" + dd + "']").addClass('active');
                        var startItem = cPage * rowsShown;
                        var startItem = startItem - 10;
                        //alert(startItem);
                        var endItem = startItem + rowsShown;
                        $('#sellertableone tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
                            css('display', 'table-row').animate({ opacity: 1 }, 300);
                        $("#pstartone").html(startItem + 1);
                        if (endItem > rowsTotal) {
                            $("#pendone").html(rowsTotal);
                        } else {
                            $("#pendone").html(endItem);
                        }
                    }
                });
                $('#div1next .next a').bind('click', function () {
                    var cPage = $("#pagulone a.active").attr('rel');
                    if (cPage < numPages.toPrecision(1)) {
                        var dd = parseInt(cPage) + 1;
                        //alert(dd);
                        $('#pagulone li.nmbr a').removeClass('active');
                        $("#pagulone li.nmbr a[rel$='" + dd + "']").addClass('active');
                        var startItem = cPage * rowsShown;
                        var startItem = startItem + 10;
                        //alert(startItem);
                        var endItem = startItem + rowsShown;
                        $('#sellertableone tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
                            css('display', 'table-row').animate({ opacity: 1 }, 300);
                        $("#pstartone").html(startItem + 1);
                        if (endItem > rowsTotal) {
                            $("#pendone").html(rowsTotal);
                        } else {
                            $("#pendone").html(endItem);
                        }
                    }
                });

                var currPage1 = 0;
                var startItem1 = currPage1 * rowsShown;
                var endItem1 = startItem1 + rowsShown;
                $("#pstartone").html(startItem1 + 1);
                if (endItem1 > rowsTotal) {
                    $("#pendone").html(rowsTotal);
                } else {
                    $("#pendone").html(endItem1);
                }
                //alert(currPage1);
                $("#ptcntone").html(rowsTotal);

            });
        }
        else if (dataId == "integrationstage8") { //Associated Service Enablers
            JsonData = "/assets/theme/json/ase.json";
            var html = "<table class='table table-striped' id='sellertableone'><thead><tr><th scope='col'>Name</th><th scope='col'>Contact</th><th scope='col'>Email</th></tr></thead><tbody>";
            $.getJSON(JsonData, function (stores) {
                $.each(stores, function (i, store) {
                    var name = store.name;
                    var contact = store.contact;
                    var email = store.email;
                   
                    html += "<tr><td>" + name + "</td><td>" + contact + "</td><td>" + email + "</td></tr>";
                });
                html += '</tbody></table>';

                //data - response from server
                //alert(data);
                $('#tbledivone').html(html);
                $('#pagulone').html("");
                $('#pagulone').html('<li id="div1prev" class="prev"><a style="display:none; href="#myTab"><img src="/assets/theme/images/company/prev.png"></a></li>');
                var rowsShown = 12;
                var rowsTotal = $('#sellertableone tbody tr').length;
                var numPages = rowsTotal / rowsShown;
                for (i = 0; i < numPages; i++) {
                    var pageNum = i + 1;
                    $('#pagulone').append('<li class="nmbr" style="display:none;"><a href="javascript:void(0);" rel="' + i + '">' + pageNum + '</a></li>');
                }
                $('#pagulone').append('<li id="div1next" class="next"><a style="display:none; href="#myTab"><img src="/assets/theme/images/company/next.png"></a></li>');
                $('#sellertableone tbody tr').hide();
                $('#sellertableone tbody tr').slice(0, rowsShown).show();
                $('#pagulone li.nmbr:first a').addClass('active');
                $('#pagulone li.nmbr a').bind('click', function () {
                    $('#pagulone li.nmbr a').removeClass('active');
                    $(this).addClass('active');
                    var currPage = $(this).attr('rel');
                    var startItem = currPage * rowsShown;
                    var endItem = startItem + rowsShown;
                    $('#sellertableone tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
                        css('display', 'table-row').animate({ opacity: 1 }, 300);
                    $("#pstartone").html(startItem + 1);
                    if (endItem > rowsTotal) {
                        $("#pendone").html(rowsTotal);
                    } else {
                        $("#pendone").html(endItem);
                    }
                    //alert(endItem);
                });
                $('#div1prev .prev a').bind('click', function () {
                    var cPage = $("#pagulone a.active").attr('rel');
                    if (cPage > 0) {
                        //alert(cPage);
                        var dd = cPage - 1;
                        $('#pagulone li.nmbr a').removeClass('active');
                        $("#pagulone li.nmbr a[rel$='" + dd + "']").addClass('active');
                        var startItem = cPage * rowsShown;
                        var startItem = startItem - 10;
                        //alert(startItem);
                        var endItem = startItem + rowsShown;
                        $('#sellertableone tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
                            css('display', 'table-row').animate({ opacity: 1 }, 300);
                        $("#pstartone").html(startItem + 1);
                        if (endItem > rowsTotal) {
                            $("#pendone").html(rowsTotal);
                        } else {
                            $("#pendone").html(endItem);
                        }
                    }
                });
                $('#div1next .next a').bind('click', function () {
                    var cPage = $("#pagulone a.active").attr('rel');
                    if (cPage < numPages.toPrecision(1)) {
                        var dd = parseInt(cPage) + 1;
                        //alert(dd);
                        $('#pagulone li.nmbr a').removeClass('active');
                        $("#pagulone li.nmbr a[rel$='" + dd + "']").addClass('active');
                        var startItem = cPage * rowsShown;
                        var startItem = startItem + 10;
                        //alert(startItem);
                        var endItem = startItem + rowsShown;
                        $('#sellertableone tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
                            css('display', 'table-row').animate({ opacity: 1 }, 300);
                        $("#pstartone").html(startItem + 1);
                        if (endItem > rowsTotal) {
                            $("#pendone").html(rowsTotal);
                        } else {
                            $("#pendone").html(endItem);
                        }
                    }
                });

                var currPage1 = 0;
                var startItem1 = currPage1 * rowsShown;
                var endItem1 = startItem1 + rowsShown;
                $("#pstartone").html(startItem1 + 1);
                if (endItem1 > rowsTotal) {
                    $("#pendone").html(rowsTotal);
                } else {
                    $("#pendone").html(endItem1);
                }
                //alert(currPage1);
                $("#ptcntone").html(rowsTotal);

            });
        }
        
    }

    $('.icls').click(function () {
        if (this.id == "integrationstage1") {

            $(".dcls").prop("checked", false);
            $(".rtcls").prop("checked", false);

            var x = document.getElementById("role");
            var y = document.getElementById("category");

            if (x.style.display !== "block") {
                x.style.display = "block";
            }

            if (y.style.display !== "block") {
                y.style.display = "block";
            }

            JsonData = "/assets/theme/json/livenetwork.json";
            loadData();
        }
        else if (this.id == "integrationstage2") {

            $(".dcls").prop("checked", false);
            $(".rtcls").prop("checked", false);

            var x = document.getElementById("role");
            var y = document.getElementById("category");

            if (x.style.display !== "block") {
                x.style.display = "block";
            }
            if (y.style.display !== "block") {
                y.style.display = "block";
            }

            JsonData = "/assets/theme/json/advancestage.json";
            loadData();
        }
        else if (this.id == "integrationstage3") {
         
            var x = document.getElementById("role");
            var y = document.getElementById("category");

            if (x.style.display !== "none") {
                x.style.display = "none";
            }
            if (y.style.display !== "none") {
                y.style.display = "none";
            }
            
            JsonData = "/assets/theme/json/initiatedintegration.json";
            var html = "<table class='table table-striped' id='sellertable'><thead><tr><th scope='col'>Name</th></tr></thead><tbody>";
           
            $.getJSON(JsonData, function (stores) {              
                $.each(stores, function (i, store) {
                    var sellername = store.sellername;
                 
                    html += "<tr><td>" + sellername + "</td></tr>";
                });
                html += '</tbody></table>';
             
                //data - response from server
                //alert(data);
                $('#tblediv').html(html);
                $('#pagul').html("");
                $('#pagul').html('<li class="prev"><a href="#myTab"><img src="/assets/theme/images/company/prev.png"></a></li>');
                var rowsShown = 20;
                var rowsTotal = $('#sellertable tbody tr').length;
                var numPages = rowsTotal / rowsShown;
                for (i = 0; i < numPages; i++) {
                    var pageNum = i + 1;
                    $('#pagul').append('<li class="nmbr" style="display:none;"><a href="javascript:void(0);" rel="' + i + '">' + pageNum + '</a></li>');
                }
                $('#pagul').append('<li class="next"><a href="#myTab"><img src="/assets/theme/images/company/next.png"></a></li>');
                $('#sellertable tbody tr').hide();
                $('#sellertable tbody tr').slice(0, rowsShown).show();
                $('#pagul li.nmbr:first a').addClass('active');
                $('#pagul li.nmbr a').bind('click', function () {
                    $('#pagul li.nmbr a').removeClass('active');
                    $(this).addClass('active');
                    var currPage = $(this).attr('rel');
                    var startItem = currPage * rowsShown;
                    var endItem = startItem + rowsShown;
                    $('#sellertable tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
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
                        var startItem = startItem - 20;
                        //alert(startItem);
                        var endItem = startItem + rowsShown;
                        $('#sellertable tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
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
                   
                    if ((parseInt(cPage)+1) <= parseInt(numPages)) {
                        var dd = parseInt(cPage) + 1;
                        //alert(dd);
                        $('#pagul li.nmbr a').removeClass('active');
                        $("#pagul li.nmbr a[rel$='" + dd + "']").addClass('active');
                        var startItem = cPage * rowsShown;
                        var startItem = startItem + 20;
                        //alert(startItem);
                        var endItem = startItem + rowsShown;
                        $('#sellertable tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
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

    });


    $('.dcls').click(function () {

        $('#tblediv').empty();

        var catval = [];
        var roleBNPcatVal=[];
        var roleSNPcatVal=[];
        var roleSNPConSubcatVal=[];
        var roleSNPBusSubcatVal=[];

        var role = [], myVal = [];
        var filterData = [];

      
       

      
      
      
       
        $('input[name="domain1"]:checkbox:checked').each(function (i) {
            filterData.push($(this).val());             
        });
        $('input[name="domain2"]:checkbox:checked').each(function (i) {
            filterData.push($(this).val());
        });
        $('input[name="domain3"]:checkbox:checked').each(function (i) {
            filterData.push($(this).val());
        });


        $('input[name="BNP-Customers"]:checkbox:checked').each(function (i) {          
            filterData.push($(this).val());  
        });
        $('input[name="BNP-Business"]:checkbox:checked').each(function (i) {
            filterData.push($(this).val());            
        });
        $('input[name="SNP-Customers"]:checkbox:checked').each(function (i) {
            filterData.push($(this).val());            
        });
        $('input[name="SNP-Business"]:checkbox:checked').each(function (i) {
            filterData.push($(this).val());            
        });

        $('input[name="SNP-C-InventorySellers"]:checkbox:checked').each(function (i) {
            filterData.push($(this).val());           
        });
        $('input[name="SNP-C-Marketplacess"]:checkbox:checked').each(function (i) {
            filterData.push($(this).val());            
        });
        
        $('input[name="SNP-B-InventorySellers"]:checkbox:checked').each(function (i) {
            filterData.push($(this).val());           
        });
        $('input[name="SNP-B-Marketplacess"]:checkbox:checked').each(function (i) {
            filterData.push($(this).val());            
        });

      

        $('input[name="retail1"]:checkbox:checked').each(function (i) {
            catval.push($(this).val());
        });
        $('input[name="retail2"]:checkbox:checked').each(function (i) {
            catval.push($(this).val());
        });
        $('input[name="retail3"]:checkbox:checked').each(function (i) {
            catval.push($(this).val());
        });
        $('input[name="retail4"]:checkbox:checked').each(function (i) {
            catval.push($(this).val());
        });
        $('input[name="retail5"]:checkbox:checked').each(function (i) {
            catval.push($(this).val());
        });
        $('input[name="retail6"]:checkbox:checked').each(function (i) {
            catval.push($(this).val());
        });
        $('input[name="retail7"]:checkbox:checked').each(function (i) {
            catval.push($(this).val());
        });
        
        
        if((filterData.indexOf('Buy-Bus')!=-1 || filterData.indexOf('Buy-Con')!=-1) && filterData.indexOf('Buy-')!=-1)
            filterData.splice($.inArray('Buy-', filterData), 1);
        if((filterData.indexOf('Sel-Bus')!=-1 || filterData.indexOf('Sel-Con')!=-1) && filterData.indexOf('Sel-')!=-1)
            filterData.splice($.inArray('Sel-', filterData), 1);
        if((filterData.indexOf('Sel-Con-Mar')!=-1 || filterData.indexOf('Sel-Con-Inv')!=-1) && filterData.indexOf('Sel-Con')!=-1)
            filterData.splice($.inArray('Sel-Con', filterData), 1);
        if((filterData.indexOf('Sel-Bus-Mar')!=-1 || filterData.indexOf('Sel-Bus-Inv')!=-1) && filterData.indexOf('Sel-Bus')!=-1)
            filterData.splice($.inArray('Sel-Bus', filterData), 1);
        if((filterData.indexOf('Sel-Con-Mar')!=-1 || filterData.indexOf('Sel-Con-Inv')!=-1) && filterData.indexOf('Sel-')!=-1)
            filterData.splice($.inArray('Sel-', filterData), 1);
        if((filterData.indexOf('Sel-Bus-Mar')!=-1 || filterData.indexOf('Sel-Bus-Inv')!=-1) && filterData.indexOf('Sel-')!=-1)
            filterData.splice($.inArray('Sel-', filterData), 1);
       
       
        var formData = { cat: role }; //Array 
        var html = "<table class='table table-striped' id='sellertable'><thead><tr><th scope='col'>Name</th><th scope='col'>Role</th><th scope='col' style='text-transform:none;'>Type of Business</th><th scope='col' style='text-transform:none;'>Type of Operations</th><th scope='col'>Categories</th><th scope='col'>Active Cities</th><th scope='col'>Contact</th><th scope='col'>Website</th></tr></thead><tbody>";
        var storeIndex = 0;
       
        $.getJSON(JsonData, function (stores) {
            for (var indexx = 0; indexx < stores.length; indexx++) {
                store = stores[indexx];

                var sellername = store.sellername;
                var domain = store.domain;
                var rolecat=store.domainCat;
                var rolesubcat=store.domainSubCat;
                var categories = store.categories;
                var cities = store.cities;
                var contact = store.contact;
                var website = store.website;
                var filter = store.filter;

                if (categories == undefined)
                    categories = "-";

                if (cities == undefined)
                    cities = "-";

                if (contact == undefined)
                    contact = "-";

                if (rolecat == undefined)
                    rolecat = "-";
                if (rolesubcat == undefined)
                    rolesubcat = "-";
                //alert(filter + "...." + filterData); 
                if(filterData.length>0){
                    var filters = filter.split(",");
                    for (var i = 0; i < filters.length; i++) {                  
                if(filterData.indexOf(filters[i])!=-1){ 
                    html += "<tr><td>" + sellername + "</td><td>" + domain + "</td><td>" + rolecat + "</td><td>" + rolesubcat + "</td><td>" + categories + "</td><td>" + cities + "</td><td>" + contact + "</td><td>" + website + "</td></tr>";
                    break;                   
                }
            }
            }
//                 if(roleBNPcatVal.length>0 || roleSNPcatVal.length>0 || roleSNPConSubcatVal.length>0 || roleSNPBusSubcatVal.length>0)
//                 {
//                   if(((roleSNPConSubcatVal.indexOf(rolesubcat)!=-1 && rolecat=="Consumer (B2C)") || (roleSNPBusSubcatVal.indexOf(rolesubcat)!=-1 && rolecat=="Business (B2B)") || roleBNPcatVal.indexOf(rolecat)!=-1 ) && role.indexOf(domain)!=-1)
//                     {    html += "<tr><td>" + sellername + "</td><td>" + domain + "</td><td>" + rolecat + "</td><td>" + rolesubcat + "</td><td>" + categories + "</td><td>" + cities + "</td><td>" + contact + "</td><td>" + website + "</td></tr>";
//                 alert("!");
//                 }
//                     else if(((roleSNPConSubcatVal.indexOf(rolesubcat)!=-1 && rolecat=="Consumer (B2C)") || (roleSNPBusSubcatVal.indexOf(rolesubcat)!=-1 && rolecat=="Business (B2B)")) && role.indexOf(domain)!=-1)
//                      {   html += "<tr><td>" + sellername + "</td><td>" + domain + "</td><td>" + rolecat + "</td><td>" + rolesubcat + "</td><td>" + categories + "</td><td>" + cities + "</td><td>" + contact + "</td><td>" + website + "</td></tr>";
//                      alert("2");
//             }
//                     else if(((roleSNPConSubcatVal.indexOf(rolesubcat)!=-1 && rolecat=="Consumer (B2C)") || (roleSNPBusSubcatVal.indexOf(rolesubcat)!=-1 && rolecat=="Business (B2B)"))  && domain.indexOf("Seller Network Participant")!=-1)
//                       {  html += "<tr><td>" + sellername + "</td><td>" + domain + "</td><td>" + rolecat + "</td><td>" + rolesubcat + "</td><td>" + categories + "</td><td>" + cities + "</td><td>" + contact + "</td><td>" + website + "</td></tr>";
//                       alert("3");
//         }
//                     else if(roleSNPConSubcatVal.indexOf(rolesubcat)!=-1  && domain.indexOf("Seller Network Participant")!=-1 && rolecat=="Consumer (B2C)")
//                         {html += "<tr><td>" + sellername + "</td><td>" + domain + "</td><td>" + rolecat + "</td><td>" + rolesubcat + "</td><td>" + categories + "</td><td>" + cities + "</td><td>" + contact + "</td><td>" + website + "</td></tr>";
//                         alert("4");
//     }
//                     else if(roleSNPBusSubcatVal.indexOf(rolesubcat)!=-1 && domain.indexOf("Seller Network Participant")!=-1 && rolecat=="Business (B2B)")
//                         {html += "<tr><td>" + sellername + "</td><td>" + domain + "</td><td>" + rolecat + "</td><td>" + rolesubcat + "</td><td>" + categories + "</td><td>" + cities + "</td><td>" + contact + "</td><td>" + website + "</td></tr>";
//                         alert("5");
// }
//                     else if((roleBNPcatVal.indexOf(rolecat)!=-1 || rolecat.indexOf(roleBNPcatVal)!=-1)  && domain.indexOf("Buyer Network Participant")!=-1)
//                        { html += "<tr><td>" + sellername + "</td><td>" + domain + "</td><td>" + rolecat + "</td><td>" + rolesubcat + "</td><td>" + categories + "</td><td>" + cities + "</td><td>" + contact + "</td><td>" + website + "</td></tr>";
//                        alert("6");
// }
// else if((roleSNPcatVal.indexOf(rolecat)!=-1 || rolecat.indexOf(roleSNPcatVal)!=-1)  && domain.indexOf("Seller Network Participant")!=-1)
//                        { html += "<tr><td>" + sellername + "</td><td>" + domain + "</td><td>" + rolecat + "</td><td>" + rolesubcat + "</td><td>" + categories + "</td><td>" + cities + "</td><td>" + contact + "</td><td>" + website + "</td></tr>";
//                        alert(roleSNPcatVal);
// }
// else if(roleSNPcatVal.indexOf(rolecat)!=-1 && domain.indexOf("Seller Network Participant")!=-1 && ((rolecat=="Consumer (B2C)" && roleSNPConSubcatVal.length==0) || (rolecat=="Business (B2B)" && roleSNPBusSubcatVal.length==0))&& role.indexOf(domain)!=-1 )
// {html += "<tr><td>" + sellername + "</td><td>" + domain + "</td><td>" + rolecat + "</td><td>" + rolesubcat + "</td><td>" + categories + "</td><td>" + cities + "</td><td>" + contact + "</td><td>" + website + "</td></tr>";
// alert("8");
// }
//                        else if(roleSNPcatVal.indexOf(rolecat)!=-1 && domain.indexOf("Seller Network Participant")!=-1 && ((rolecat=="Consumer (B2C)" && roleSNPConSubcatVal.length==0) || (rolecat=="Business (B2B)" && roleSNPBusSubcatVal.length==0)) )
//                         {html += "<tr><td>" + sellername + "</td><td>" + domain + "</td><td>" + rolecat + "</td><td>" + rolesubcat + "</td><td>" + categories + "</td><td>" + cities + "</td><td>" + contact + "</td><td>" + website + "</td></tr>";
//                         alert("7");
// }
                    
                                                
//                 }
                else if (role.length > 0  ) {
                    for (var i = 0; i < role.length; i++) {

                        var existing = myVal.indexOf(indexx);
                       

                        if (domain.indexOf(role[i]) != -1 && catval.length > 0 && existing == -1) {
                            for (var j = 0; j < catval.length; j++) {
                                var existing1 = myVal.indexOf(indexx);
                                if (categories.indexOf(catval[j]) != -1 && domain.indexOf(role[i]) != -1 && existing1 == -1) {
                                    html += "<tr><td>" + sellername + "</td><td>" + domain + "</td><td>" + rolecat + "</td><td>" + rolesubcat + "</td><td>" + categories + "</td><td>" + cities + "</td><td>" + contact + "</td><td>" + website + "</td></tr>";
                                    myVal.push(indexx);
                                }
                            }
                            
                        }
                        else if (domain.indexOf(role[i]) != -1 && existing == -1) {
                            html += "<tr><td>" + sellername + "</td><td>" + domain + "</td><td>" + rolecat + "</td><td>" + rolesubcat + "</td><td>" + categories + "</td><td>" + cities + "</td><td>" + contact + "</td><td>" + website + "</td></tr>";
                            myVal.push(indexx);
                        }
                        
                    }
                }
                else {
                    const existing = myVal.indexOf(indexx);

                    if (catval.length > 0 && existing == -1) {
                        for (var j = 0; j < catval.length; j++) {
                            if (categories.indexOf(catval[j]) != -1) {
                                html += "<tr><td>" + sellername + "</td><td>" + domain + "</td><td>" + rolecat + "</td><td>" + rolesubcat + "</td><td>" + categories + "</td><td>" + cities + "</td><td>" + contact + "</td><td>" + website + "</td></tr>";
                            }
                        }
                    }
                    else {
                        html += "<tr><td>" + sellername + "</td><td>" + domain + "</td><td>" + rolecat + "</td><td>" + rolesubcat + "</td><td>" + categories + "</td><td>" + cities + "</td><td>" + contact + "</td><td>" + website + "</td></tr>";
                    }

                }
                //});
                storeIndex++;
            }

            html += '</tbody></table>';
            //data - response from server
            //alert(data);
            $('#tblediv').html(html);
            $('#pagul').html("");
            $('#pagul').html('<li class="prev"><a href="#myTab"><img src="/assets/theme/images/company/prev.png?v=5422a4a885"></a></li>');
            var rowsShown = 10;
            var rowsTotal = $('#sellertable tbody tr').length;
            var numPages = rowsTotal / rowsShown;
            for (i = 0; i < numPages; i++) {
                var pageNum = i + 1;
                $('#pagul').append('<li class="nmbr" style="display:none;"><a href="javascript:void(0);" rel="' + i + '">' + pageNum + '</a></li>');
            }
            $('#pagul').append('<li class="next"><a href="#myTab"><img src="/assets/theme/images/company/next.png?v=5422a4a885"></a></li>');
            $('#sellertable tbody tr').hide();
            $('#sellertable tbody tr').slice(0, rowsShown).show();
            $('#pagul li.nmbr:first a').addClass('active');
            $('#pagul li.nmbr a').bind('click', function () {
                $('#pagul li.nmbr a').removeClass('active');
                $(this).addClass('active');
                var currPage = $(this).attr('rel');
                var startItem = currPage * rowsShown;
                var endItem = startItem + rowsShown;
                $('#sellertable tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
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
                    $('#sellertable tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
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
                if (cPage < numPages.toPrecision(1) && numPages > 1) {
                    var dd = parseInt(cPage) + 1;
                    //alert(numPages);
                    $('#pagul li.nmbr a').removeClass('active');
                    $("#pagul li.nmbr a[rel$='" + dd + "']").addClass('active');
                    var startItem = cPage * rowsShown;
                    var startItem = startItem + 10;
                    //alert(startItem);
                    var endItem = startItem + rowsShown;
                    $('#sellertable tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
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
    });


    $('.rtcls').click(function () {

$
        $('#tblediv').empty();
        var catval = [];

        $('input[name="retail1"]:checkbox:checked').each(function (i) {
            catval.push($(this).val());
        });
        $('input[name="retail2"]:checkbox:checked').each(function (i) {
            catval.push($(this).val());
        });
        $('input[name="retail3"]:checkbox:checked').each(function (i) {
            catval.push($(this).val());
        });
        $('input[name="retail4"]:checkbox:checked').each(function (i) {
            catval.push($(this).val());
        });
        $('input[name="retail5"]:checkbox:checked').each(function (i) {
            catval.push($(this).val());
        });
        $('input[name="retail6"]:checkbox:checked').each(function (i) {
            catval.push($(this).val());
        });
        $('input[name="retail7"]:checkbox:checked').each(function (i) {
            catval.push($(this).val());
        });

        var role = [], myVal = [];

        $('input[name="domain1"]:checkbox:checked').each(function (i) {
            role.push($(this).val());
        });
        $('input[name="domain2"]:checkbox:checked').each(function (i) {
            role.push($(this).val());
        });
        $('input[name="domain3"]:checkbox:checked').each(function (i) {
            role.push($(this).val());
        });

        var formData = { cat: catval }; //Array 
        //console.log(formData);
        var html = "<table class='table table-striped' id='sellertable'><thead><tr><th scope='col'>Name</th><th scope='col'>Role</th><th scope='col'>Categories</th><th scope='col'>Active Cities</th><th scope='col'>Contact</th><th scope='col'>Website</th></tr></thead><tbody>";
        //var JsonData = "json/livenetwork.json";
        var storeIndex = 0;
        $.getJSON(JsonData, function (stores) {
            //console.log("Stores", stores);
            //$.each(stores, function (i, store) {
            for (var indexx = 0; indexx < stores.length; indexx++) {
                store = stores[indexx];

                var sellername = store.sellername;
                var domain = store.domain;
                var categories = store.categories;
                var cities = store.cities;
                var contact = store.contact;
                var website = store.website;

                if (categories == undefined)
                    categories = "-";

                if (cities == undefined)
                    cities = "-";

                if (contact == undefined)
                    contact = "-";

                if (catval.length > 0) {
                    for (var i = 0; i < catval.length; i++) {

                        var existing = myVal.indexOf(indexx);

                        if (categories.indexOf(catval[i]) != -1 && role.length > 0 && existing == -1) {
                            for (var j = 0; j < role.length; j++) {
                                var existing1 = myVal.indexOf(indexx);
                                if (domain.indexOf(role[j]) != -1 && categories.indexOf(catval[i]) != -1 && existing1 == -1) {
                                    html += "<tr><td>" + sellername + "</td><td>" + domain + "</td><td>" + categories + "</td><td>" + cities + "</td><td>" + contact + "</td><td>" + website + "</td></tr>";
                                    myVal.push(indexx);
                                }
                            }
                            
                        }
                        else if (categories.indexOf(catval[i]) != -1 && existing == -1) {
                            html += "<tr><td>" + sellername + "</td><td>" + domain + "</td><td>" + categories + "</td><td>" + cities + "</td><td>" + contact + "</td><td>" + website + "</td></tr>";
                            myVal.push(indexx);
                        }               
                    }
                }
                else {
                    const existing = myVal.indexOf(indexx);

                    if (role.length > 0 && existing == -1) {
                        for (var j = 0; j < role.length; j++) {
                            if (domain.indexOf(role[j]) != -1) {
                                html += "<tr><td>" + sellername + "</td><td>" + domain + "</td><td>" + categories + "</td><td>" + cities + "</td><td>" + contact + "</td><td>" + website + "</td></tr>";
                            }
                        }
                    }
                    else {
                        html += "<tr><td>" + sellername + "</td><td>" + domain + "</td><td>" + categories + "</td><td>" + cities + "</td><td>" + contact + "</td><td>" + website + "</td></tr>";
                    }

                }

                storeIndex++;
                //});
            }


            html += '</tbody></table>';
            //data - response from server
            //alert(data);
            $('#tblediv').html(html);
            $('#pagul').html("");
            //console.log(html);
            $('#pagul').html('<li class="prev"><a href="#myTab"><img src="/assets/theme/images/company/prev.png"></a></li>');
            var rowsShown = 10;
            var rowsTotal = $('#sellertable tbody tr').length;
            var numPages = rowsTotal / rowsShown;
            for (i = 0; i < numPages; i++) {
                var pageNum = i + 1;
                $('#pagul').append('<li class="nmbr" style="display:none;"><a href="javascript:void(0);" rel="' + i + '">' + pageNum + '</a></li>');
            }
            $('#pagul').append('<li class="next"><a href="#myTab"><img src="/assets/theme/images/company/next.png?v=5422a4a885"></a></li>');
            $('#sellertable tbody tr').hide();
            $('#sellertable tbody tr').slice(0, rowsShown).show();
            $('#pagul li.nmbr:first a').addClass('active');
            $('#pagul li.nmbr a').bind('click', function () {
                $('#pagul li.nmbr a').removeClass('active');
                $(this).addClass('active');
                var currPage = $(this).attr('rel');
                var startItem = currPage * rowsShown;
                var endItem = startItem + rowsShown;
                $('#sellertable tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
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
                    $('#sellertable tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
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
                if (cPage < numPages.toPrecision(1) && numPages > 1) {
                    var dd = parseInt(cPage) + 1;
                    //alert(numPages);
                    $('#pagul li.nmbr a').removeClass('active');
                    $("#pagul li.nmbr a[rel$='" + dd + "']").addClass('active');
                    var startItem = cPage * rowsShown;
                    var startItem = startItem + 10;
                    //alert(startItem);
                    var endItem = startItem + rowsShown;
                    $('#sellertable tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
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
    });
    $("#a1-tab").click(function(){
        $('input[id="integrationstage1"]').prop("checked", true).trigger("click");
    });
});

function loadData() {
    var html = "<table class='table table-striped' id='sellertable'><thead><tr><th scope='col'>Name</th><th scope='col'>Role</th><th scope='col' style='text-transform:none;'>Type of Business</th><th scope='col' style='text-transform:none;'>Type of Operations</th><th scope='col'>Categories</th><th scope='col'>Active Cities</th><th scope='col'>Contact</th><th scope='col'>Website</th></thead><tbody>";

    $.getJSON(JsonData, function (stores) {
        $.each(stores, function (i, store) {
            var sellername = store.sellername;
            var domain = store.domain;
            var rolecat=store.domainCat;
            var rolesubcat=store.domainSubCat;
            var categories = store.categories;
            var cities = store.cities;
            var contact = store.contact;
            var website=store.website;

            if (categories == undefined)
                categories = "-";

            if (cities == undefined)
                cities = "-";

            if (contact == undefined)
                contact = "-";

            if (rolecat == undefined)
                rolecat = "-";
            if (rolesubcat == undefined)
                rolesubcat = "-";

            html += "<tr><td>" + sellername + "</td><td>" + domain + "</td><td>" + rolecat + "</td><td>" + rolesubcat + "</td><td>" + categories + "</td><td>" + cities + "</td><td>" + contact + "</td><td>" + website + "</td></tr>";
        });

        html += '</tbody></table>';

        //data - response from server
        //alert(data);
        $('#tblediv').html(html);
        $('#pagul').html("");
        $('#pagul').html('<li class="prev"><a href="#myTab"><img src="/assets/theme/images/company/prev.png"></a></li>');
        var rowsShown = 10;
        var rowsTotal = $('#sellertable tbody tr').length;
        var numPages = rowsTotal / rowsShown;
        for (i = 0; i < numPages; i++) {
            var pageNum = i + 1;
            $('#pagul').append('<li class="nmbr" style="display:none;"><a href="javascript:void(0);" rel="' + i + '">' + pageNum + '</a></li>');
        }
        $('#pagul').append('<li class="next"><a href="#myTab"><img src="/assets/theme/images/company/next.png"></a></li>');
        $('#sellertable tbody tr').hide();
        $('#sellertable tbody tr').slice(0, rowsShown).show();
        $('#pagul li.nmbr:first a').addClass('active');
        $('#pagul li.nmbr a').bind('click', function () {
            $('#pagul li.nmbr a').removeClass('active');
            $(this).addClass('active');
            var currPage = $(this).attr('rel');
            var startItem = currPage * rowsShown;
            var endItem = startItem + rowsShown;
            $('#sellertable tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
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
                $('#sellertable tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
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
           
            if ((parseInt(cPage)+1) <= parseInt(numPages.toPrecision(1))) {
            //if (parseInt(cPage) < (numPages.toPrecision(2))) {
                var dd = parseInt(cPage) + 1;
                //alert(dd);
                $('#pagul li.nmbr a').removeClass('active');
                $("#pagul li.nmbr a[rel$='" + dd + "']").addClass('active');
                var startItem = cPage * rowsShown;
                var startItem = startItem + 10;
                //alert(startItem);
                var endItem = startItem + rowsShown;
                $('#sellertable tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
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
$(window).load(function () {
    loadData();
});
$(document).ready(function () {
    $(".ex_title").click(function () { $(".ex_cnt").is(":visible") && ($(".ex_cnt").hide("slow"), $(".ex_title").removeClass("active_ex")), $(this).next(".ex_cnt").is(":visible") ? ($(".ex_cnt").hide("slow"), $(this).removeClass("active_ex")) : ($(this).next(".ex_cnt").show("slow"), $(this).addClass("active_ex")) })
});



  