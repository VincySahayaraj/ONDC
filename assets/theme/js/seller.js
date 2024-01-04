$(document).ready(function(){
$('#citysrch').change(function(){
	$('#overlay').fadeOut();
	$("#tblediv").html("<div id='overlay'></div>")
	$('#overlay').fadeIn();
	var cty=$(this).val();	
	var catval = [];
        $(':checkbox:checked').each(function(i){
          catval[i] = $(this).val();
        });	
      
var formData = {city:cty,cat:catval}; //Array 
var html="<table class='table table-striped' id='sellertable'><thead><tr><th scope='col'>Provider</th><th scope='col'>Domain</th><th scope='col'>City</th><th scope='col'>Pin Code</th></tr></thead><tbody>";
var JsonData="/assets/theme/json/seller_all.json";    
    $.getJSON(JsonData, function(stores) {  
        
  $.each(stores, function(i, store) {   
    var sellername = store.provider;
    //var domain = store.domain;
    var categories = store.domain;
    var cities = store.city;
    // var count = store.count;
    var pincode = store.pin_code;
    if(cty && catval!="")
    {         
        for(var i=0; i<catval.length; i++){
        if(cty==cities && categories == catval[i])
		html+="<tr><td>"+sellername+"</td><td>"+categories+"</td><td>"+cities+"</td><td>"+pincode+"</td></tr>";    
	} 
    }  
    else if(cty && catval==""){         
        if(cty==cities)
		html+="<tr><td>"+sellername+"</td><td>"+categories+"</td><td>"+cities+"</td><td>"+pincode+"</td></tr>";    
    } 
    else if(cty=="" && catval!=""){         
         for(var i=0; i<catval.length; i++){  
        if(categories == catval[i])
           {              
			html+="<tr><td>"+sellername+"</td><td>"+categories+"</td><td>"+cities+"</td><td>"+pincode+"</td></tr>";    
		}
        }
    } 
    else
    {         
		html+="<tr><td>"+sellername+"</td><td>"+categories+"</td><td>"+cities+"</td><td>"+pincode+"</td></tr>";    
    }
  });
  html+='</tbody></table>';


        //data - response from server
		//alert(data);
		$('#tblediv').html(html);
		$('#pagul').html("");
		$('#pagul').html('<li class="prev"><a href="javascript:void(0);"><img src="/assets/theme/images/company/prev.png"></a></li>');
		var rowsShown = 20;  
    var rowsTotal = $('#sellertable tbody tr').length;  
    var numPages = rowsTotal/rowsShown;  
    for (i = 0;i < numPages;i++) {  
        var pageNum = i + 1;  
        $('#pagul').append ('<li class="nmbr" style="display:none;"><a href="javascript:void(0);" rel="'+i+'">'+pageNum+'</a></li>');  
    }  
	$('#pagul').append('<li class="next"><a href="javascript:void(0);"><img src="/assets/theme/images/company/next.png"></a></li>');
    $('#sellertable tbody tr').hide();  
    $('#sellertable tbody tr').slice (0, rowsShown).show();  
    $('#pagul li.nmbr:first a').addClass('active');  
    $('#pagul li.nmbr a').bind('click', function() {  
    $('#pagul li.nmbr a').removeClass('active');  
   $(this).addClass('active');  
        var currPage = $(this).attr('rel');  
        var startItem = currPage * rowsShown;  
        var endItem = startItem + rowsShown;  
        $('#sellertable tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).  
        css('display','table-row').animate({opacity:1}, 300);  
		$("#pstart").html(startItem+1);
		if(endItem>rowsTotal){
			$("#pend").html(rowsTotal);
		}else{
	$("#pend").html(endItem);
		}
	//alert(endItem);
    });
	$('.prev a').bind('click', function() {  
	var cPage = $("#pagul a.active").attr('rel'); 
	if(cPage>0){
	//alert(cPage);
	var dd=cPage-1;
	$('#pagul li.nmbr a').removeClass('active');  
   $( "#pagul li.nmbr a[rel$='"+dd+"']" ).addClass('active');
	var startItem = cPage * rowsShown;
	var startItem = startItem - 20;
	//alert(startItem);
	var endItem = startItem + rowsShown;  
	$('#sellertable tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).  
        css('display','table-row').animate({opacity:1}, 300);  
		$("#pstart").html(startItem+1);
		if(endItem>rowsTotal){
			$("#pend").html(rowsTotal);
		}else{
	$("#pend").html(endItem);
		}
	}
	});
	$('.next a').bind('click', function() {  
	var cPage = $("#pagul a.active").attr('rel'); 
	if ((parseInt(cPage)+1) <= parseInt(numPages) && numPages>1){
	var dd=parseInt(cPage)+1;
	//alert(cPage);
	$('#pagul li.nmbr a').removeClass('active');  
   $( "#pagul li.nmbr a[rel$='"+dd+"']" ).addClass('active');
	var startItem = cPage * rowsShown;
	var startItem = startItem + 20;
	//alert(startItem);
	var endItem = startItem + rowsShown;  
	$('#sellertable tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).  
        css('display','table-row').animate({opacity:1}, 300);  
		$("#pstart").html(startItem+1);
		if(endItem>rowsTotal){
			$("#pend").html(rowsTotal);
		}else{
	$("#pend").html(endItem);
		}
	}
	});
	var currPage1 = 0;  
	var startItem1 = currPage1 * rowsShown;  
	var endItem1 = startItem1 + rowsShown; 
	$("#pstart").html(startItem1+1);
	if(endItem1>rowsTotal){
		$("#pend").html(rowsTotal);
	}else{
		$("#pend").html(endItem1);
	}
	$("#ptcnt").html(rowsTotal);

	
	
	$('.pagindiv').show();
	if (rowsTotal == 0){	
		$("#sellertable tbody").html("");
		$('.pagindiv').hide();
		$("#sellertable tbody").html("<tr><td colspan='5'>No records found</td></tr>");
	}
    });  	 
	$('#overlay').fadeOut();		 
});				 
			 
$('.rtcls').click(function(){
	$('#overlay').fadeOut();
	$("#tblediv").html("<div id='overlay'></div>")
	$('#overlay').fadeIn();
	var cty=$('#citysrch').val();	
	var catval = [];
        $(':checkbox:checked').each(function(i){
          catval[i] = $(this).val();
        });		 
          
var formData = {city:cty,cat:catval}; //Array 
var html="<table class='table table-striped' id='sellertable'><thead><tr><th scope='col'>Provider</th><th scope='col'>Domain</th><th scope='col'>City</th><th scope='col'>Pin Code</th></tr></thead><tbody>";
    var JsonData="/assets/theme/json/seller_all.json";    
    $.getJSON(JsonData, function(stores) {        
  $.each(stores, function(i, store) {   
    var sellername = store.provider;
    //var domain = store.domain;
    var categories = store.domain;
    var cities = store.city;
    //var count = store.count;
    var pincode = store.pin_code;
    if(cty && catval!="")
    {         
        for(var i=0; i<catval.length; i++){
        if(cty==cities && categories == catval[i])
		html+="<tr><td>"+sellername+"</td><td>"+categories+"</td><td>"+cities+"</td><td>"+pincode+"</td></tr>";    
        } 
    }  
    else if(cty && catval==""){         
        if(cty==cities)
		html+="<tr><td>"+sellername+"</td><td>"+categories+"</td><td>"+cities+"</td><td>"+pincode+"</td></tr>";    
    } 
    else if(cty=="" && catval!=""){         
         for(var i=0; i<catval.length; i++){  
        if(categories == catval[i])
           {              
			html+="<tr><td>"+sellername+"</td><td>"+categories+"</td><td>"+cities+"</td><td>"+pincode+"</td></tr>";    
		}
        }
    } 
    else
    {         
		html+="<tr><td>"+sellername+"</td><td>"+categories+"</td><td>"+cities+"</td><td>"+pincode+"</td></tr>";    
    }
    
  });
  html+='</tbody></table>';
        //data - response from server
		//alert(data);
		$('#tblediv').html(html);
		$('#pagul').html("");
		$('#pagul').html('<li class="prev"><a href="javascript:void(0);"><img src="/assets/theme/images/company/prev.png"></a></li>');
		var rowsShown = 20;  
    var rowsTotal = $('#sellertable tbody tr').length;  
    var numPages = rowsTotal/rowsShown;  
    for (i = 0;i < numPages;i++) {  
        var pageNum = i + 1;  
        $('#pagul').append ('<li class="nmbr" style="display:none;"><a href="javascript:void(0);" rel="'+i+'">'+pageNum+'</a></li>');  
    }  
	$('#pagul').append('<li class="next"><a href="javascript:void(0);"><img src="/assets/theme/images/company/next.png"></a></li>');
    $('#sellertable tbody tr').hide();  
    $('#sellertable tbody tr').slice (0, rowsShown).show();  
    $('#pagul li.nmbr:first a').addClass('active');  
    $('#pagul li.nmbr a').bind('click', function() {  
    $('#pagul li.nmbr a').removeClass('active');   
   $(this).addClass('active');  
        var currPage = $(this).attr('rel');  
        var startItem = currPage * rowsShown;  
        var endItem = startItem + rowsShown;  
        $('#sellertable tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).  
        css('display','table-row').animate({opacity:1}, 300);  
		$("#pstart").html(startItem+1);
		if(endItem>rowsTotal){
			$("#pend").html(rowsTotal);
		}else{
	$("#pend").html(endItem);
		}
	//alert(endItem);
    });
	$('.prev a').bind('click', function() {  
	var cPage = $("#pagul a.active").attr('rel'); 
	if(cPage>0){
	//alert(cPage);
	var dd=cPage-1;
	$('#pagul li.nmbr a').removeClass('active');  
   $( "#pagul li.nmbr a[rel$='"+dd+"']" ).addClass('active');
	var startItem = cPage * rowsShown;
	var startItem = startItem - 20;
	//alert(startItem);
	var endItem = startItem + rowsShown;  
	$('#sellertable tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).  
        css('display','table-row').animate({opacity:1}, 300);  
		$("#pstart").html(startItem+1);
		if(endItem>rowsTotal){
			$("#pend").html(rowsTotal);
		}else{
	$("#pend").html(endItem);
		}
	}
	});
	$('.next a').bind('click', function() {  
	var cPage = $("#pagul a.active").attr('rel'); 
	if ((parseInt(cPage)+1) <= parseInt(numPages) && numPages>1){
	var dd=parseInt(cPage)+1;
	//alert(numPages);
	$('#pagul li.nmbr a').removeClass('active');  
   $( "#pagul li.nmbr a[rel$='"+dd+"']" ).addClass('active');
	var startItem = cPage * rowsShown;
	var startItem = startItem + 20;
	//alert(startItem);
	var endItem = startItem + rowsShown;  
	$('#sellertable tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).  
        css('display','table-row').animate({opacity:1}, 300);  
		$("#pstart").html(startItem+1);
		if(endItem>rowsTotal){
			$("#pend").html(rowsTotal);
		}else{
	$("#pend").html(endItem);
		}
	}
	});
	var currPage1 = 0;  
        var startItem1 = currPage1 * rowsShown;  
        var endItem1 = startItem1 + rowsShown; 
		$("#pstart").html(startItem1+1);
		if(endItem1>rowsTotal){
			$("#pend").html(rowsTotal);
		}else{
	$("#pend").html(endItem1);
		}
	$("#ptcnt").html(rowsTotal);
	$('.pagindiv').show();
	if (rowsTotal == 0){	
		$("#sellertable tbody").html("");
		$('.pagindiv').hide();
		$("#sellertable tbody").html("<tr><td colspan='5'>No records found</td></tr>");
	}
   
});	
});
$('#overlay').fadeOut();	
});

function loadData()
{
   var html="<table class='table table-striped' id='sellertable'><thead><tr><th scope='col'>Provider</th><th scope='col'>Domain</th><th scope='col'>City</th><th scope='col'>Pin Code</th></tr></thead><tbody>";
    var JsonData="/assets/theme/json/seller_all.json";
	// $.ajax({
	// 	type: "GET",
	// 	url: "",
	// 	headers: {
	// 		Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY1OTE1MTk1NiwianRpIjoiYWMyMGMwMGEtN2QxNi00YzVlLTg3ZGMtZWViMmJhNjE0ZjViIiwibmJmIjoxNjU5MTUxOTU2LCJ0eXBlIjoiYWNjZXNzIiwic3ViIjoiZGF0YUBvbmRjLm9yZyIsImV4cCI6MTY5OTIzODM1NiwiZW1haWwiOiJuYXZkZWVwQG9uZGMub3JnIiwicHVycG9zZSI6ImxvZ2luIiwicGhvbmVfbnVtYmVyIjpudWxsLCJyb2xlcyI6WyJhZG1pbmlzdHJhdG9yIl0sImZpcnN0X25hbWUiOiJOYXZkZWVwIiwibGFzdF9uYW1lIjoiYWdhcndhbCJ9.o7hureliqoaDjcDwW7F-PWljKC57OvS3elHIEZwYb9c '
	// 	},
	// 	dataType: 'json',
	// 	success: function (result, status, xhr) {   
    $.getJSON(JsonData, function(stores) {        
  $.each(stores, function(i, store) {   
    var sellername = store.provider;
    var domain = store.domain;
    // var categories = store.categories;
    var cities = store.city;
    // var count = store.count;
    var pincode = store.pin_code;
    html+="<tr><td>"+sellername+"</td><td>"+domain+"</td><td>"+cities+"</td><td>"+pincode+"</td></tr>";    
  });
  html+='</tbody></table>';
  
  //data - response from server
		//alert(data);
		$('#tblediv').html(html);
		
		$('#pagul').html("");
		$('#pagul').html('<li class="prev"><a href="javascript:void(0);"><img src="/assets/theme/images/company/prev.png"></a></li>');
		var rowsShown = 20;  
    var rowsTotal = $('#sellertable tbody tr').length;  
    var numPages = rowsTotal/rowsShown;  
    for (i = 0;i < numPages;i++) {  
        var pageNum = i + 1;  
        $('#pagul').append ('<li class="nmbr" style="display:none;"><a href="javascript:void(0);" rel="'+i+'">'+pageNum+'</a></li>');  
    }  
	$('#pagul').append('<li class="next"><a href="javascript:void(0);"><img src="/assets/theme/images/company/next.png"></a></li>');
    $('#sellertable tbody tr').hide();  
    $('#sellertable tbody tr').slice (0, rowsShown).show();  
    $('#pagul li.nmbr:first a').addClass('active');  
    $('#pagul li.nmbr a').bind('click', function() {  
    $('#pagul li.nmbr a').removeClass('active');  
   $(this).addClass('active');  
        var currPage = $(this).attr('rel');  
        var startItem = currPage * rowsShown;  
        var endItem = startItem + rowsShown;  
        $('#sellertable tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).  
        css('display','table-row').animate({opacity:1}, 300);  
		$("#pstart").html(startItem+1);
		if(endItem>rowsTotal){
			$("#pend").html(rowsTotal);
		}else{
	$("#pend").html(endItem);
		}
	//alert(endItem);
    });
	$('.prev a').bind('click', function() {  
	var cPage = $("#pagul a.active").attr('rel'); 
	if(cPage>0){
	//alert(cPage);
	var dd=cPage-1;
	$('#pagul li.nmbr a').removeClass('active');  
   $( "#pagul li.nmbr a[rel$='"+dd+"']" ).addClass('active');
	var startItem = cPage * rowsShown;
	var startItem = startItem - 20;
	//alert(startItem);
	var endItem = startItem + rowsShown;  
	$('#sellertable tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).  
        css('display','table-row').animate({opacity:1}, 300);  
		$("#pstart").html(startItem+1);
		if(endItem>rowsTotal){
			$("#pend").html(rowsTotal);
		}else{
	$("#pend").html(endItem);
		}
	}
	});
	$('.next a').bind('click', function() {  
	var cPage = $("#pagul a.active").attr('rel'); 
	if ((parseInt(cPage)+1) <= parseInt(numPages)){
	var dd=parseInt(cPage)+1;
	//alert(dd);
	$('#pagul li.nmbr a').removeClass('active');  
   $( "#pagul li.nmbr a[rel$='"+dd+"']" ).addClass('active');
	var startItem = cPage * rowsShown;
	var startItem = startItem + 20;
	//alert(startItem);
	var endItem = startItem + rowsShown;  
	$('#sellertable tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).  
        css('display','table-row').animate({opacity:1}, 300);  
		$("#pstart").html(startItem+1);
		if(endItem>rowsTotal){
			$("#pend").html(rowsTotal);
		}else{
	$("#pend").html(endItem);
		}
	}
	});
	
	var currPage1 = 0;  
        var startItem1 = currPage1 * rowsShown;  
        var endItem1 = startItem1 + rowsShown; 
		$("#pstart").html(startItem1+1);
		if(endItem1>rowsTotal){
			$("#pend").html(rowsTotal);
		}else{
	$("#pend").html(endItem1);
		}
		//alert(currPage1);
	$("#ptcnt").html(rowsTotal);
	$('#overlay').fadeOut();
});
}
$(window).load(function(){  
	  
   loadData(); 
});


var map;
var map1;
        function bindmap(City)  {
          
            var LocationsForMap = [
                ['560076',12.8843025,77.5612568,'327','Bengaluru'],
         ['560038',12.9852236,77.6295763,'94','Bengaluru'],
         ['560037',12.9600025,77.6821215,'238','Bengaluru'],
         ['560035',12.9009503,77.6700896,'75','Bengaluru'],
         ['560093',12.9854194,77.6508349,'44','Bengaluru'],
         ['560041',12.9244798,77.5728798,'52','Bengaluru'],
         ['560102',12.9142675,77.6266308,'253','Bengaluru'],
         ['560036',13.0227414,77.6626284,'39','Bengaluru'],
         ['560062',12.8653077,77.4867438,'29','Bengaluru'],
         ['560025',12.9628138,77.5993229,'33','Bengaluru'],
         ['560005',12.9971355,77.6107109,'31','Bengaluru'],
         ['560011',12.9344406,77.5799201,'25','Bengaluru'],
         ['560008',12.9702969,77.618033,'83','Bengaluru'],
         ['560085',12.9304477,77.5282783,'67','Bengaluru'],
         ['560066',12.9652713,77.7073453,'186','Bengaluru'],
         ['560027',12.9561752,77.5898918,'25','Bengaluru'],
         ['560003',12.9992847,77.5641142,'40','Bengaluru'],
         ['560098',12.913949,77.4967803,'114','Bengaluru'],
         ['560103',12.9224441,77.6579943,'131','Bengaluru'],
         ['560087',12.920837,77.7072301,'44','Bengaluru'],
         ['602024',13.161194,79.9584948,'1','Chennai'],
         ['208012',26.4629172,80.2934092,'1','KANPUR'],
         ['623501',9.3730006,78.8102171,'1','RAMANATHAPURAM'],
         ['641006',11.0500376,76.9480717,'2','Coimbatore'],
         ['625512',9.9333393,77.5353167,'1','Theni'],
         ['641001',10.9966926,76.9379051,'2','Coimbatore'],
         ['411057',18.5892364,73.6900809,'2','Pune'],
         ['110015',28.6518466,77.1277315,'38','DELHI'],
         ['302005',26.8995834,75.7935951,'1','Jaipur'],
         ['682032',9.982873,76.3026379,'1','KOCHI'],
         ['201306',28.5250059,77.4024119,'2','Noida'],
         ['627006',8.7142509,77.6462351,'1','Thirunelveli '],
         ['535558',18.5914949,83.3145303,'1','bobbili'],
         ['700046',22.5464375,88.3779963,'1','Kolkata'],
         ['560079',12.9886952,77.5169569,'58','Bengaluru'],
         ['560017',12.9526307,77.6498407,'24','Bengaluru'],
         ['560061',12.9002343,77.522345,'30','Bengaluru'],
         ['244412',28.4555073,78.7258096,'1','Chandausi'],
         ['480001',22.0451135,78.8295855,'1','Chhindwara'],
         ['600117',12.9410168,80.170315,'1','Chennai'],
         ['560100',12.8473438,77.6260559,'210','Bengaluru'],
         ['110001',28.6255396,77.178603,13,'36','New Delhi'],
         ['560068',12.8952369,77.6074796,'187','Bengaluru'],
         ['560086',13.008674,77.5301946,'25','Bengaluru'],
         ['560043',13.0230461,77.6259112,'227','Bengaluru'],
         ['695023',8.4790622,76.9361458,'1','Trivandrum'],
         ['560048',12.986482,77.6776723,'61','Bengaluru'],
         ['560040',12.9647451,77.5182503,'62','Bengaluru'],
         ['642002',10.6925829,76.960742,'2','pollachi'],
         ['560010',12.9945269,77.5370839,'56','Bengaluru'],
         ['250004',28.9285394,77.708559,'16','Meerut'],
         ['110030',28.5053523,77.1296992,'28','Delhi'],
         ['244001',28.8423389,78.6104861,'1','Moradabad'],
         ['110045',28.5978559,77.0684413,'52','Delhi'],
         ['641043',11.0279029,76.9427339,'1','Coimbatore'],
         ['600048',12.8769859,80.0774216,'2','Mannivakkam'],
         ['122022',28.4708526,76.9914167,'62','Gurgaon'],
         ['560028',12.932696,77.5643466,'3','Bengaluru'],
         ['560091',12.9864584,77.4597002,'33','Bengaluru'],
         ['122002',28.4614922,77.0631271,'59','Gurgaon'],
         ['560067',13.0108342,77.6946803,'67','Bengaluru'],
         ['110085',28.7175913,77.0908893,'177','New Delhi'],
         ['560078',12.8897795,77.54169,'205','Bengaluru'],
         ['560092',13.0626652,77.5743271,'50','Bengaluru'],
         ['560032',13.0278389,77.5825879,'71','Bengaluru'],
         ['560030',12.9426236,77.5998186,'51','Bengaluru'],
         ['560115',13.0265387,77.7599486,'1','Bengaluru'],
         ['560064',13.1218089,77.5185122,'95','Bengaluru'],
         ['110077',28.5663344,77.0510266,'62','Delhi'],
         ['110060',28.634079,77.1763183,'42','Delhi'],
         ['110092',28.6337856,77.2520998,'240','Delhi'],
         ['110008',28.6532876,77.1464221,'44','Delhi'],
         ['110075',28.5805256,77.0087587,'170','Delhi'],
         ['110024',28.5688284,77.2325249,'152','Delhi'],
         ['110017',28.5322481,77.1954947,'194','Delhi'],
         ['110016',28.5426759,77.1728954,'34','Delhi'],
         ['110019',28.5332258,77.2382043,'220','Delhi'],
         ['110067',28.5421449,77.150481,'12','Delhi'],
         ['560099',12.8434319,77.6324606,'74','Bengaluru'],
         ['560034',12.9260496,77.6135769,'216','Bengaluru'],
         ['560070',12.9228583,77.5485074,'110','Bengaluru'],
         ['110065',28.5650451,77.2424629,'74','Delhi'],
         ['110018',28.6431232,77.0676424,'210','New Delhi'],
         ['560016',13.0160426,77.6397709,'112','Bengaluru'],
         ['641004',11.0429462,76.9892559,'2','COIMBATORE'],
         ['689622',9.3080804,76.5042609,'2','Mannar'],
         ['576104',13.3506864,74.7495684,'16','Eshwar Nagar'],
         ['612401',10.9410392,79.3632581,'2','kumbakonam'],
         ['560077',13.0653669,77.6315535,'102','Bengaluru'],
         ['110009',28.7083287,77.184678,'160','New Delhi'],
         ['462041',23.2701738,77.4588402,'2','Bhopal'],
         ['560004',12.9464998,77.5709306,'86','Bengaluru'],
         // ['500078',17.6050844,78.5489352,'2','Bengaluru'],
         ['560054',13.0351912,77.548508,'138','Bengaluru'],
         ['110084',28.749825,77.168968,'14','New Delhi'],
         ['560056',12.9467294,77.4851128,'20','Bengaluru'],
         ['560029',12.9306724,77.585987,'93','Bengaluru'],
         ['560020',12.9907729,77.5681417,'13','Bengaluru'],
         ['400086',19.0912189,72.886645,'1','Mumbai'],
         ['560094',13.0365579,77.5546138,'45','Bengaluru'],
         ['560065',13.084608,77.5589865,'9','Bengaluru'],
         ['560047',12.9527168,77.6032152,'51','Bengaluru'],
         ['560095',12.9373529,77.6168802,'79','Bengaluru'],
         ['576101',13.3267794,74.6916803,'6','Udupi'],
         ['560072',12.9662469,77.4949978,'51','Bengaluru'],
         ['110070',28.5276918,77.1117803,'39','Delhi'],
         ['570001',12.3198735,76.6433366,'1','Mysuru'],
         ['110006',28.6554616,77.2064444,'6','New Delhi'],
         ['560001',12.9801171,77.5776129,'34','Bengaluru'],
         ['560084',13.0114052,77.6172217,'38','Bengaluru'],
         ['570012',12.3220224,76.6089166,'1','Mysore'],
         ['560019',12.946956,77.5526436,'11','Bengaluru'],
         ['560049',13.0455836,77.6881816,'44','Bengaluru'],
         ['560073',13.0399074,77.44533,'22','Bengaluru'],
         ['560060',12.9027883,77.3876588,'36','Bengaluru'],
         ['560021',12.9931135,77.5527669,'24','Bengaluru'],
         ['560059',12.9243124,77.4891865,'13','Bengaluru'],
         ['517214',13.7383301,78.832076,'1','piler'],
         ['452012',22.6591239,75.8006293,'1','Indore'],
         ['560055',13.0081961,77.5543601,'18','Bengaluru'],
         ['110054',28.6884412,77.1865495,'7','New Delhi'],
         ['411047',18.62407,73.9006276,'1','Pune'],
         ['560075',12.971627,77.6479214,'71','Bengaluru'],
         ['563101',13.1101882,78.0780761,'3','Bengaluru'],
         ['122001',28.4452018,76.9780365,'116','Gurgaon'],
         ['577006',13.9710353,75.76838,'1','Bengaluru'],
         ['560097',13.076916,77.5407906,'42','Bengaluru'],
         ['110025',28.555919,77.2712378,'14','Delhi'],
         ['110074',28.4515693,77.1315738,'11','Delhi'],
         ['395004',21.23181,72.7846887,'1','SURAT'],
         ['110058',28.6215653,77.0709997,'65','New Delhi'],
         ['110059',28.6270622,77.016405,'208','New Delhi'],
         ['250003',28.9776834,77.7052301,'7','Meerut'],
         ['122011',28.4237156,77.086574,'9','Gurgaon'],
         ['110052',28.6901451,77.1584341,'19','New Delhi'],
         ['562157',13.1877119,77.5279637,'2','Bengaluru'],
         ['560057',13.0473622,77.5045911,'25','Bengaluru'],
         ['110034',28.6963653,77.1096805,'66','New Delhi'],
         ['570002',12.3281931,76.6195799,'1','Mysuru'],
         ['122003',28.4374097,77.0646505,'27','Gurgaon'],
         ['249407',29.9265373,78.0874172,'2','Haridwar'],
         ['110033',28.7244203,77.1567216,'13','New Delhi'],
         ['560090',13.0908431,77.4782797,'15','Bengaluru'],
         ['110027',28.6468128,77.1001053,'70','New Delhi'],
         ['110020',28.538237,77.2410182,'7','New Delhi'],
         // ['411033',18.6261862,73.7137804,'1','Bengaluru'],
         ['122018',28.4194227,77.0382936,'32','Gurgaon'],
         ['560045',13.0348986,77.5827306,'61','Bengaluru'],
         ['110005',28.6537967,77.1671424,'40','Delhi'],
         ['110037',28.5442901,77.0690596,'18','New Delhi'],
         ['560053',12.968072,77.5612543,'8','Bengaluru'],
         ['560058',13.0260281,77.4725502,'24','Bengaluru'],
         ['40120',19.4167395,72.8222642,'1','VASAI'],
         ['560071',12.9551967,77.6318959,'15','Bengaluru'],
         ['250001',28.9710306,77.6178612,'7','Meerut'],
         ['110055',28.6447965,77.2021556,'20','New Delhi'],
         ['560050',12.9400901,77.5530906,'22','Bengaluru'],
         ['562101',13.4360106,77.718258,'1','Bengaluru'],
         ['562114',13.0159538,77.7258114,'3','Bengaluru'],
         ['562135',13.2278268,77.7634581,'1','Bengaluru'],
         ['500032',17.4284365,78.3210236,'2','Hyd'],
         ['560006',13.0095483,77.5696392,'6','Bengaluru'],
         ['600052',13.2175156,80.0975003,'1','Tiruvallur'],
         ['560105',12.7860375,77.5952574,'9','Bengaluru'],
         ['122009',28.4664915,77.0751871,'15','Gurgaon'],
         ['110048',28.5434876,77.2216977,'32','New Delhi'],
         ['560022',13.0296819,77.5283397,'24','Bengaluru'],
         ['110021',28.6031917,77.1478651,'8','New Delhi'],
         ['560081',12.9231567,77.608295,'2','Bengaluru'],
         ['562125',12.8705102,77.7149586,'14','Bengaluru'],
         ['110003',28.5895539,77.2192948,'18','New Delhi'],
         ['635126',12.7440942,77.7608055,'1','Hosur'],
         ['110076',28.5306447,77.2915675,'10','New Delhi'],
         ['560051',12.9904556,77.5887456,'32','Bengaluru'],
         ['110083',28.6934799,77.0810398,'10','New Delhi'],
         ['110051',28.6544702,77.2767719,'52','New Delhi'],
         ['110035',28.6772743,77.1441445,'9','New Delhi'],
         ['110063',28.6688955,77.0890328,'40','New Delhi'],
         ['110061',28.5360187,77.0075076,'1','New Delhi'],
         ['560024',13.0410461,77.5815747,'15','Bengaluru'],
         ['110078',28.6086942,77.0157421,'17','New Delhi'],
         ['560083',12.7941592,77.501447,'14','Bengaluru'],
         ['560023',12.9736913,77.5486411,'14','Bengaluru'],
         ['600011',13.1148439,80.2328626,'1','Chennai'],
         ['335002',29.8850514,73.8582981,'1','Sri Ganganagar'],
         ['247667',29.9202046,77.7807577,'1','Roorkee'],
         ['110026',28.6673777,77.1202435,'18','New Delhi'],
         ['110042',28.7494652,77.1023705,'10','New Delhi'],
         ['110029',28.5637669,77.1938017,'15','New Delhi'],
         ['562107',12.7612003,77.6779144,'6','Bengaluru'],
         ['110087',28.6681383,77.0678037,'18','New Delhi'],
         ['560063',13.1328657,77.5939885,'9','Bengaluru'],
         ['560018',12.9587117,77.5599223,'6','Bengaluru'],
         ['560069',12.919619,77.5896278,'10','Bengaluru'],
         ['110007',28.6776447,77.183301,'46','New Delhi'],
         ['753002',20.4680386,85.8404389,'2','Cuttack'],
         ['110057',28.5627887,77.1381785,'6','New Delhi'],
         ['110032',28.675662,77.2689788,'64','New Delhi'],
         ['244715',29.4644088,78.7683283,'1','ramanagar'],
         ['122008',28.498447,77.0583847,'7','Gurgaon'],
         ['110046',28.6063157,77.0878826,'22','New Delhi'],
         ['122004',28.4024112,76.9178742,'10','Gurgaon'],
         // ['141001',30.9088351,75.78498,'1','Bengaluru'],
         ['122010',28.4944773,77.0891399,'11','Gurgaon'],
         ['562129',13.1376623,77.6960416,'2','Bengaluru'],
         // ['591222',16.3614148,74.6347113,'1','Bengaluru'],
         ['560015',13.062287,77.5264957,'17','Bengaluru'],
         ['695011',8.5308944,76.8917151,'1','THIRUVANANTHAPURAM'],
         ['603209',12.7805309,80.0078663,'1','Chennai'],
         ['110031',28.6507781,77.2481343,'34','New Delhi'],
         ['246701',29.3720343,77.9855263,'2','Bijnor'],
         ['110081',28.7318926,76.9324809,'9','New Delhi'],
         ['110096',28.6052806,77.2807919,'25','New Delhi'],
         ['110064',28.6239915,77.0990684,'21','New Delhi'],
         ['560046',13.0006263,77.5941368,'4','Bengaluru'],
         ['570023',12.2788421,76.5995006,'1','Mysuru'],
         ['110091',28.6047583,77.2742135,'19','New Delhi'],
         ['110062',28.5102274,77.1975321,'10','New Delhi'],
         ['686004',9.5659914,76.5180434,'1','Kottayam '],
         ['575001',12.8565671,74.8235904,'4','Mangaluru'],
         ['600096',12.9675811,80.2170827,'1','Chennai'],
         ['600031',13.0725501,80.2333582,'1','Chennai'],
         ['400071',19.0305769,72.8634986,'2','Mumbai'],
         ['682020',9.9612161,76.2851852,'2','Ernakulam'],
         ['700029',22.516979,88.3498476,'1','Kolkata'],
         ['500082',17.427913,78.4454561,'1','Hyderabad'],
         ['751008',20.2760203,85.803031,'1','Bhubaneswar'],
         ['110028',28.6340357,77.1202318,'5','New Delhi'],
         ['110038',28.5167654,77.092057,'1','New Delhi'],
         ['122102',28.3203922,76.9607087,'6','Gurgaon'],
         ['110012',28.6262816,77.1263634,'2','New Delhi'],
         ['110041',28.6629806,77.0006522,'20','New Delhi'],
         ['110014',28.5791128,77.2452599,'25','Delhi'],
         // ['411001',18.5188292,73.8533857,'1','Bengaluru'],
         ['302012',26.9572424,75.6255588,'1','Jaipur'],
         // ['600017',13.0410557,80.2191923,'3','Bengaluru'],
         ['560013',13.049945,77.5320267,'9','Bengaluru'],
         ['683101',10.1018976,76.3430223,'1','Ernakulam'],
         ['577101',13.3394627,75.7219865,'7','Chikkamagaluru'],
         ['576102',13.3603238,74.7272403,'3','Udupi'],
         ['122007',28.4701583,77.0415716,'6','Gurgaon'],
         ['110089',28.7358932,77.1183988,'28','New Delhi'],
         ['560082',12.789408,77.4162089,'3','Bengaluru'],
         ['122015',28.3314048,76.8087688,'6','Gurgaon'],
         ['753001',20.4810582,85.8662883,'3','Cuttack'],
         ['560096',13.0142264,77.5269653,'6','Bengaluru'],
         ['302022',26.7787103,75.7898301,'1','Sitapura Industrial Area'],
         ['110090',28.60533,77.2289862,'10','New Delhi'],
         ['110086',28.7143704,77.0294945,'32','New Delhi'],
         ['110093',28.7007673,77.29315,'16','New Delhi'],
         ['110049',28.5587585,77.2046566,'18','New Delhi'],
         ['110043',28.5821423,76.8837089,'20','New Delhi'],
         ['110095',28.6790256,77.2984935,'15','New Delhi'],
         ['110088',28.7157482,77.1399593,'16','New Delhi'],
         ['122017',28.5114329,76.983992,'21','Gurgaon'],
         ['562123',13.096648,77.3263539,'4','Bengaluru'],
         ['563114',12.9672875,78.0707589,'1','Bengaluru'],
         ['563130',13.0035138,77.8875296,'2','Malur'],
         ['400093',19.1273714,72.8483774,'1','Mumbai'],
         ['380009',23.0365038,72.5367597,'1','Ahemabad'],
         ['560104',12.9614274,77.5300791,'8','Bengaluru'],
         ['110071',28.5527893,76.9665587,'2','New Delhi'],
         ['110053',28.6838199,77.2414581,'42','New Delhi'],
         ['600063',12.9129003,80.0824557,'1','Chennai'],
         ['560107',13.0871985,77.4747181,'10','Bengaluru'],
         ['201301',28.5893612,77.3098845,'3','Noida'],
         ['110047',28.4620907,77.1030429,'3','New Delhi'],
         ['585101',17.3353831,76.8361997,'1','Gulbarga'],
         ['360001',22.3104267,70.759319,'1','Rajkot'],
         ['560052',12.9879317,77.5900724,'3','Bengaluru'],
         ['641045',10.9995246,76.9776647,'2','Coimbatore'],
         ['793001',25.5773491,91.8708238,'2','Shillong'],
         ['620017',10.8154988,78.6595048,'1','Tiruchirappalli'],
         ['122005',28.4340019,77.0251897,'1','Gurgaon'],
         ['226011',26.8199703,80.8810573,'1','Lucknow'],
         ['560002',12.9635289,77.5709756,'10','Bengaluru'],
         ['110044',28.5031308,77.2587616,'11','New Delhi'],
         ['793003',25.5715888,91.8928928,'2','Shillong'],
         ['400017',19.0469862,72.845304,'1','Mumbai'],
         // ['585100',22.8203918,88.2171041,'1','Bengaluru'],
         ['110022',28.5646394,77.1580869,'3','New Delhi'],
         ['110002',28.6370797,77.2065881,'5','Delhi'],
         ['560042',12.9826661,77.6086236,'3','Bengaluru'],
         ['712409',22.8203918,88.2171041,'1','Singur'],
         // ['566046',25.8742648,85.0408343,'1','Bengaluru'],
         ['841219',25.8742648,85.0408343,'2','Tapsia'],
         ['400101',19.218054,72.864925,'1','Mumbai'],
         ['560033',12.9990299,77.6344843,'9','Bengaluru'],
         ['110040',28.8376648,77.0736475,'1','New Delhi'],
         ['560012',13.0189783,77.5577694,'1','Bengaluru'],
         ['400013',18.9948898,72.8199793,'3','Mumbai '],
         ['110080',28.4944664,77.2323298,'3','New Delhi'],
         ['110068',28.4840193,77.2004206,'6','Delhi'],
         ['201005',28.6921826,77.3326482,'2','New Delhi'],
         ['400012',18.9996911,72.8327248,'3','Mumbai '],
         ['562110',13.2814675,77.6370096,'1','Bengaluru'],
         ['560007',12.9565272,77.6172133,'4','Bengaluru'],
         ['395010',21.1977451,72.8543119,'1','Surat'],
         ['560112',12.9542946,77.490855,'2','Bengaluru'],
         ['226017',26.8400915,80.8434105,'1','Lucknow'],
         ['560080',13.0090493,77.5737717,'2','Bengaluru'],
         ['140308',30.6852132,76.6829902,'2','Mohali'],
         ['600028',13.0237965,80.2514495,'1','31,ABM Avenue,Bishop Garden,Raja Annamalai Puram'],
         ['380006',23.0210286,72.5500192,'1','Ahmedabad'],
         ['500059',17.3524557,78.5002879,'1','Saidabad'],
         ['562112',12.7259611,77.3912599,'1','Bengaluru'],
         ['110066',28.5662891,77.1804355,'1','New Delhi'],
         ['560009',12.9742494,77.5746135,'7','Bengaluru'],
         ['641018',11.0033016,76.9659144,'2','Coimbatore'],
         ['226021',26.9362641,80.9362641,'1','Lucknow'],
         ['282001',27.1301801,77.9805533,'1','Agra'],
         ['632012',12.9275181,79.1327979,'1','Vellore'],
         ['303108',27.7258458,76.0743603,'5','Kotputli'],
         ['400062',19.1593409,72.8378911,'1','Mumbai'],
         ['121003',28.4589737,77.2585797,'1','Gurgaon'],
         ['210502',25.8647407,80.1288974,'1','Sumerpur'],
         ['380008',22.9931133,72.6064611,'3','Ahmedabad'],
         ['422004',20.0854623,73.7850251,'1','Nashik'],
         ['226024',26.8913532,80.9362633,'1','Lucknow'],
         ['122052',28.3788338,76.8914054,'1','Gurgaon'],
         ['410506',18.6733023,73.61206,'1','Pune'],
         ['560026',12.9539072,77.5372929,'10','Bengaluru'],
         ['201102',28.7714326,77.2462851,'1','New Delhi'],
         ['562162',13.0248092,77.3755804,'2','Bengaluru'],
         ['560110',12.9505884,77.4706852,'3','Bengaluru'],
         ['590006',15.8306237,74.4828453,'1','Belgaum'],
         ['110039',28.7920717,76.9877305,'2','New Delhi'],
         ['302020',26.8494199,75.7369916,'1','Jaipur'],
         ['400701',19.1320427,72.9958632,'1','Mumbai'],
         ['400088',19.0410588,72.9246619,'1','Mumbai'],
         ['400078',19.1551494,72.9007973,'1','Mumbai'],
         ['395006',21.2297439,72.8696453,'1','Surat'],
         ['691001',8.8850636,76.584727,'3','Kollam'],
         ['110094',28.7164338,77.2369859,'6','New Delhi'],
         ['700051',22.6670377,88.4194881,'1','Kolkata'],
         ['250002',28.9171247,77.6229587,'1','Meerut'],
         ['575002',12.8594965,74.8474326,'2','Dakshina Kannada'],
         ['110072',28.6574931,76.9316806,'1','New Delhi'],
         ['620018',10.823179,78.678199,'1','Trichy'],
         ['452016',22.7402016,75.9330617,'1','Indore'],
         ['575003',12.8817793,74.8256247,'1','Mangalore'],
         ['413103',17.9605892,74.9333666,'1','Pune'],
         ['421506',19.1586442,73.1809513,'1','Thane'],
         ['403002',15.4711268,73.8107612,'1','Panaji'],
         ['226020',26.901444,80.8962044,'1','Lucknow'],
         ['122016',28.5096108,77.0657461,'1','Gurgaon'],
         ['695001',8.492779,76.9443148,'1','Thiruvananthapuram'],
         ['380015',23.0200434,72.507054,'1','Vastrapur'],
         ['415509',17.6900591,74.70531,'1','Mhaswad'],
         ['226001',26.8480994,80.9292705,'1','Lucknow'],
         ['403602',15.2949438,73.9537157,'1','Madgaon'],
         ['226029',26.7661736,80.9511592,'1','Lucknow'],
         ['400601',19.2025483,72.968359,'3','Thane'],
         ['390004',22.2708126,73.2112524,'1','Vadodara'],
         ['403726',15.3878959,73.8539486,'1','Zuari Nagar'],
         ['403401',15.3906968,73.9765404,'1','Ponda'],
         ['625020',9.9290214,78.1736264,'1','MADURAI'],
         ['575014',12.9920743,74.8025952,'3','Dakshina Kannada'],
         ['737102',27.2981182,88.5924503,'1','gangtok'],
         ['604001',12.2359633,79.6201753,'1','TINDIVANAM'],
         ['390001',22.3012666,73.1776438,'1','Vadodara'],
         ['581115',14.6754791,75.5818742,'3','Haveri'],
         ['560039',12.9401552,77.5146579,'7','Bengaluru'],
         ['110013',28.5914568,77.2506299,'2','New Delhi'],
         ['626532',28.6364943,77.2461612,'1','Madurai'],
         ['638003',11.351656,77.7241424,'1','Erode'],
         ['575004',12.8897382,74.8487183,'1','Mangaluru'],
         ['638107',11.3421642,77.6001616,'2','Erode'],
         ['600115',12.9235304,80.231874,'1','CHENNAI'],
         ['403507',15.5920175,73.7849293,'3','North Goa'],
         ['560109',12.8649037,77.516351,'1','Bengaluru'],
         ['560074',12.8740932,77.4067316,'2','Bengaluru'],
         ['411027',18.5844936,73.7859907,'2','Pune '],
         ['571401',12.5265947,76.87654,'2','Mandya'],
         // ['583121',15.6516406,76.9045303,'1','Bengaluru'],
         ['591102',15.8292107,74.73021,'2','Belagavi'],
         ['583103',15.209159,76.9102598,'1','Ballari'],
         ['580030',15.3473263,75.0700903,'1','Hubballi'],
         ['600040',13.0877045,80.1958182,'5','Chennai'],
         ['601201',13.449637,80.0777745,'1','Chennai'],
         ['462042',23.1326023,77.3952801,'1','Bhopal'],
         ['400053',19.1303621,72.8277027,'1','Mumbai'],
         ['403519',15.6142042,73.6777235,'1','North Goa'],
         ['180015',32.6935589,74.8779902,'1','Jammu'],
         ['180007',32.7633727,74.8538207,'1','Jammu'],
         ['462046',23.0956646,77.4848414,'1','deep'],
         ['781028',26.1200643,91.7931971,'1','Assam'],
         ['575015',12.9294766,74.8500451,'1','Dakshina Kannada'],
         ['411043',18.4651787,73.8412453,'1','Pune'],
         ['190003',34.0977437,74.809565,'1','Srinagar'],
         ['411045',18.5672006,73.7583112,'1','pune'],
         ['248001',30.3222053,78.0472186,'1','Derahun'],
         ['575011',12.963423,74.8067952,'1','Dakshina Kannada'],
         ['700156',22.5871756,88.4459902,'1','Kolkata'],
         ['403521',15.5075648,73.8274545,'2','North Goa'],
         ['574227',13.0765291,74.9350304,'1','Moodbidri'],
         ['302017',26.8525246,75.8156778,'1','New Delhi'],
         ['5600070',12.9228379,77.5572623,'1','Bengaluru'],
         ['638314',11.5816611,77.6252133,'1','ERODE'],
         ['249401',29.9714152,78.0838418,'1','Haridwar'],
         ['562120',12.9274138,77.1173595,'1','Bengaluru'],
         ['700075',22.4911725,88.3785149,'1','Kolkata'],
         ['520015',16.5430375,80.6313273,'1','VIJAYAWADA'],
         ['201002',28.6830219,77.4481898,'1','New Delhi'],
         ['563160',12.9317966,77.8657754,'1','Bengaluru'],
         // ['600010',13.0875604,80.2327042,'2','Bengaluru'],
         ['562130',12.9329122,77.3330055,'4','Bengaluru'],
         ['641035',11.0886019,76.9674885,'1','Coimbatore'],
         ['562106',12.7318442,77.6367811,'3','Bengaluru'],
         ['600002',13.0693102,80.2576628,'1','Chennai'],
         ['572103',13.3318985,77.1100563,'1','Tumakuru'],
         ['572137',13.7487103,76.8342098,'1','Bengaluru'],
         ['562109',12.7820638,77.3571595,'1','Bengaluru'],
         ['572105',13.3270941,77.0781484,'1','Tumakuru'],
         // ['382418',23.0033676,72.6686858,'1','Bengaluru'],
         ['500081',17.443066,78.3633563,'1','Hyderabad'],
         ['403501',15.536632,73.8184103,'1','North Goa'],
         ['581110',14.7732598,75.3670029,'1','Haveri'],
         ['400092',19.2237064,72.7991085,'1','Mumbai'],
         ['400080',19.1707136,72.9324492,'4','Thane'],
         ['313001',24.5589829,73.6324131,'2','Udaipur'],
         ['464668',22.9856963,78.1751344,'1','Bareli'],
         ['421501',19.2002199,73.1846955,'1','Ambernath'],
         ['631501',12.8318299,79.6953713,'7','Ennaikaran'],
         ['247001',29.9448852,77.5290771,'1','Saharanpur'],
         ['627011',8.7084992,77.7620725,'1','TIRUNELVELI'],
         ['382213',22.920193,72.3913842,'1','Ahmedabad'],
         ['600018',13.0367139,80.2436913,'1','Chennai'],
         ['600110',13.1327439,80.2203779,'1','176 / Old No.108A,GNTROAD,MADHAVARAM'],
         ['121006',28.3784695,77.3100226,'1','FARIDABAD'],
         ['410210',19.0654388,73.0323463,'1','Mumbai'],
         ['410209',19.0200393,73.0895795,'1','Mumbai'],
         ['695013',8.5328994,76.9807273,'4','Thiruvananthapuram'],
         ['500004',17.4038369,78.4536267,'1','Hyderabad'],
         ['500040',17.4607916,78.5504318,'1','SECUNDERABAD'],
         ['125104',29.8955653,74.6517102,'1','Mandi Dabwali'],
         ['226018',26.8514249,80.912404,'1','Lucknow'],
         ['695004',8.5307436,76.9319146,'1','Thiruvananthapuram'],
         ['262701',27.9897156,80.6296477,'1','Lakhimpur'],
         ['124507',28.6584357,76.7859752,'1','bahadurgarh'],
         ['387001',22.6833505,72.8483316,'1','Nadiad'],         
         ['273004',26.7940959,83.3599386,'1','Gorakhpur'],
         ['601203',13.3562921,80.205892,'1','CHENNAI'],
         ['400610',19.2295054,72.9459109,'1','Thane'],
         ['600082',13.1189279,80.2123503,'2','Chennai'],
         ['363035',22.6977279,71.6820783,'1','Surendranagar'],
         ['273003',26.7944743,83.3816764,'1','Gorakhpur'],
         ['208013',26.422532,80.3450445,'1','Kanpur'],
         ['180004',32.6994077,74.8591875,'1','Jammu'],
         ['500077',17.2936407,78.4033084,'1','Hyderebad'],
         ['561203',13.3328108,77.4595601,'1','Bengaluru'],
         ['600023',13.0993164,80.2212207,'1','Chennai'],
         ['400058',19.1201862,72.8261827,'1','Mumbai'],
         ['380004',23.0557959,72.5719235,'1','Ahmedabad'],
         ['110036',28.8088889,77.1345681,'1','New Delhi'],
         ['688012',9.485971,76.3173789,'1','ALAPPUZHA'],
         ['638004',11.3494267,77.668109,'1','Erode'],
         ['411062',18.6939932,73.7722904,'1','pune'],
         ['335001',29.917632,73.7926519,'1','Sri Ganganagar'],
         ['600097',12.9256432,80.2203097,'1','CHENNAI'],
         ['670567',11.9891452,75.346284,'1','Kannur'],
         ['843302',26.5497738,85.3601316,'1','Sitamarhi'],
         ['700118',22.7309029,88.3942029,'1','Kolkata'],
         ['700102',22.5940007,88.4281062,'1','Kolkata'],
         ['635109',12.7092686,77.8244819,'1','Bengaluru'],
         ['673011',11.2713019,75.7674913,'1','Kozhikode Dist'],
         ['682304',9.938246,76.314785,'1','Ernakulam'],
         ['641002',11.0094284,76.9418203,'1','Coimbatore'],
         ['781301',26.3078879,90.9747549,'1','Assam'],
         ['793014',25.5591637,91.8945,'1','Shillong'],
         ['110073',28.5594242,76.8629643,'1','New Delhi'],
         ['600118',13.1372892,80.2513453,'1','CHENNAI'],
         ['201014',28.6469716,77.3545623,'1','New Delhi'],
         ['500013',17.3936493,78.5199012,'1','HYDERABAD'],
         ['246149',29.7575863,78.3542159,'1','Pauri Garhwal'],
         ['387002',22.7146885,72.8372112,'1','Nadiad'],
         ['600008',13.0693298,80.2465426,'1','Chennai'],
         ['580025',15.3916346,75.0743148,'1','Hubli'],
         ['143001',31.6340904,74.8616148,'1','Amritsar'],
         ['500028',17.3921935,78.4304488,'1','Hyderabad'],
         ['600081',13.1376897,80.278728,'1','Chennai'],
         ['201309',28.6213044,77.3480308,'1','Noida'],
         ['700101',22.6021451,88.4206977,'1','Kolkata'],
         ['600049',13.1091909,80.196367,'1','Chennai'],
         ['462016',23.2094323,77.4015553,'2','Bhopal'],
         ['600099',13.1320631,80.1855266,'2','Chennai'],
         ['700091',22.5846383,88.4223464,'2','Kolkata'],
         ['700064',22.5919995,88.4008505,'1','Kolkata'],
         ['560108',12.8574185,77.5512739,'1','Bengaluru'],
         ['560111',12.8981883,77.5669177,'1','Bengaluru'],
         ['600038',13.0992391,80.2079823,'1','Chennai'],
         ['600037',13.0811547,80.1685339,'1','Chennai'],
         ['482001',23.1614456,79.9302854,'8','Jabalpur'],
         ['680615',10.5029158,76.049077,'1','Trichur'],
         ['122101',28.372066,77.0065463,'2','Gurgaon'],
         ['700106',22.5766883,88.4101688,'1','Kolkata'],
         ['679101',10.7688356,76.3748686,'1','Palakkad'],
         ['401107',19.2833293,72.8589184,'3','Mumbai']
             ];
             var json_geodata = '';          
             let geodataarray = [];
 
             for (i = 0; i < LocationsForMap.length; i++) {             
                if(City=="All")  {
                    geodataarray.push({"type": "Feature", "properties": {"icon-size": .75,"icon-offset": [0, -10],"text-size":10,"text-offset":[0, .6],"text":LocationsForMap[i][3],"htmlPopup": LocationsForMap[i][4]+', '+LocationsForMap[i][0]+' \nNo. Of Sellers: '+LocationsForMap[i][3]}, "geometry": {"type": "Point","coordinates": [LocationsForMap[i][1], LocationsForMap[i][2]]}});                   
                }
                else if(City==LocationsForMap[i][4])  {
                    geodataarray.push({"type": "Feature", "properties": {"icon-size": .75,"icon-offset": [0, -10],"text-size":10,"text-offset":[0, .6],"text":LocationsForMap[i][3],"htmlPopup": LocationsForMap[i][4]+', '+LocationsForMap[i][0]+' \nNo. Of Sellers: '+LocationsForMap[i][3]}, "geometry": {"type": "Point","coordinates": [LocationsForMap[i][1], LocationsForMap[i][2]]}});
                }
             }
             json_geodata = JSON.stringify( geodataarray );
             
             map = new mappls.Map('map', {
                center: [22.6591239, 75.8006293],
                zoomControl: true,
                location: true                
            });
        
            map.addListener('load', function() {
                var geoData = {
                    "type": "FeatureCollection",
                    "features": geodataarray
                };
               
                var marker = mappls.Marker({
                    map: map,
                    position: geoData,
                    icon_url: 'https://apis.mapmyindia.com/map_v3/2.png',
                    fitbounds: true,
                    clusters: false,
                    fitboundOptions: {
                        padding: 120,
                        duration: 1000
                    },
                    popupOptions: {
                        offset: {
                            'bottom': [0, -20]
                        }
                    }
                });
            });
        }

		$("#pshwall").click(function(){
            $("#showcity").slideToggle();
            // $("").show();
            $(".hide-city").css('display','inline-block');
            $("#pshwall").hide();
        });
        $("#pclose").click(function(){
            $("#showcity").slideToggle();
            $(".hide-city").hide();
          $("#pshwall").show();
        });
        $("#pclose2").click(function(){
          $("#showcity").slideToggle();
          $(".hide-city").hide();
          $("#pshwall").show();
      });