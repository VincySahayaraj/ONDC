$(document).ready(function(){
    $('#citysrch').change(function(){
        var cty=$(this).val();	
        var catval = [];
            $(':checkbox:checked').each(function(i){
              catval[i] = $(this).val();
            });	
          
    var formData = {city:cty,cat:catval}; //Array 
    var html="<table class='table table-striped' id='sellertable'><thead><tr><th scope='col'>Provider</th><th scope='col'>Domain</th><th scope='col'>City</th><th scope='col'>Pin Code</th></tr></thead><tbody>";
    var JsonData="/assets/theme/json/sellertry.json";    
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
            $('#sellertable').DataTable();
    // 		$('#pagul').html("");
    // 		$('#pagul').html('<li class="prev"><a href="javascript:void(0);"><img src="/assets/theme/images/company/prev.png"></a></li>');
    // 		var rowsShown = 20;  
    //     var rowsTotal = $('#sellertable tbody tr').length;  
    //     var numPages = rowsTotal/rowsShown;  
    //     for (i = 0;i < numPages;i++) {  
    //         var pageNum = i + 1;  
    //         $('#pagul').append ('<li class="nmbr" style="display:none;"><a href="javascript:void(0);" rel="'+i+'">'+pageNum+'</a></li>');  
    //     }  
    // 	$('#pagul').append('<li class="next"><a href="javascript:void(0);"><img src="/assets/theme/images/company/next.png"></a></li>');
    //     $('#sellertable tbody tr').hide();  
    //     $('#sellertable tbody tr').slice (0, rowsShown).show();  
    //     $('#pagul li.nmbr:first a').addClass('active');  
    //     $('#pagul li.nmbr a').bind('click', function() {  
    //     $('#pagul li.nmbr a').removeClass('active');  
    //    $(this).addClass('active');  
    //         var currPage = $(this).attr('rel');  
    //         var startItem = currPage * rowsShown;  
    //         var endItem = startItem + rowsShown;  
    //         $('#sellertable tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).  
    //         css('display','table-row').animate({opacity:1}, 300);  
    // 		$("#pstart").html(startItem+1);
    // 		if(endItem>rowsTotal){
    // 			$("#pend").html(rowsTotal);
    // 		}else{
    // 	$("#pend").html(endItem);
    // 		}
    // 	//alert(endItem);
    //     });
    // 	$('.prev a').bind('click', function() {  
    // 	var cPage = $("#pagul a.active").attr('rel'); 
    // 	if(cPage>0){
    // 	//alert(cPage);
    // 	var dd=cPage-1;
    // 	$('#pagul li.nmbr a').removeClass('active');  
    //    $( "#pagul li.nmbr a[rel$='"+dd+"']" ).addClass('active');
    // 	var startItem = cPage * rowsShown;
    // 	var startItem = startItem - 20;
    // 	//alert(startItem);
    // 	var endItem = startItem + rowsShown;  
    // 	$('#sellertable tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).  
    //         css('display','table-row').animate({opacity:1}, 300);  
    // 		$("#pstart").html(startItem+1);
    // 		if(endItem>rowsTotal){
    // 			$("#pend").html(rowsTotal);
    // 		}else{
    // 	$("#pend").html(endItem);
    // 		}
    // 	}
    // 	});
    // 	$('.next a').bind('click', function() {  
    // 	var cPage = $("#pagul a.active").attr('rel'); 
    // 	if ((parseInt(cPage)+1) <= parseInt(numPages) && numPages>1){
    // 	var dd=parseInt(cPage)+1;
    // 	//alert(cPage);
    // 	$('#pagul li.nmbr a').removeClass('active');  
    //    $( "#pagul li.nmbr a[rel$='"+dd+"']" ).addClass('active');
    // 	var startItem = cPage * rowsShown;
    // 	var startItem = startItem + 20;
    // 	//alert(startItem);
    // 	var endItem = startItem + rowsShown;  
    // 	$('#sellertable tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).  
    //         css('display','table-row').animate({opacity:1}, 300);  
    // 		$("#pstart").html(startItem+1);
    // 		if(endItem>rowsTotal){
    // 			$("#pend").html(rowsTotal);
    // 		}else{
    // 	$("#pend").html(endItem);
    // 		}
    // 	}
    // 	});
    // 	var currPage1 = 0;  
    // 	var startItem1 = currPage1 * rowsShown;  
    // 	var endItem1 = startItem1 + rowsShown; 
    // 	$("#pstart").html(startItem1+1);
    // 	if(endItem1>rowsTotal){
    // 		$("#pend").html(rowsTotal);
    // 	}else{
    // 		$("#pend").html(endItem1);
    // 	}
    // 	$("#ptcnt").html(rowsTotal);
    
        
        
        // $('.pagindiv').show();
        // if (rowsTotal == 0){	
        // 	$("#sellertable tbody").html("");
        // 	$('.pagindiv').hide();
        // 	$("#sellertable tbody").html("<tr><td colspan='5'>No records found</td></tr>");
        // }
        });  	 
                 
    });				 
                 
    $('.rtcls').click(function(){
        var cty=$('#citysrch').val();	
        var catval = [];
            $(':checkbox:checked').each(function(i){
              catval[i] = $(this).val();
            });		 
              
    var formData = {city:cty,cat:catval}; //Array 
    var html="<table class='table table-striped' id='sellertable'><thead><tr><th scope='col'>Provider</th><th scope='col'>Domain</th><th scope='col'>City</th><th scope='col'>Pin Code</th></tr></thead><tbody>";
        var JsonData="/assets/theme/json/sellertry.json";    
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
            $('#sellertable').DataTable();
    // 		$('#pagul').html("");
    // 		$('#pagul').html('<li class="prev"><a href="javascript:void(0);"><img src="/assets/theme/images/company/prev.png"></a></li>');
    // 		var rowsShown = 20;  
    //     var rowsTotal = $('#sellertable tbody tr').length;  
    //     var numPages = rowsTotal/rowsShown;  
    //     for (i = 0;i < numPages;i++) {  
    //         var pageNum = i + 1;  
    //         $('#pagul').append ('<li class="nmbr" style="display:none;"><a href="javascript:void(0);" rel="'+i+'">'+pageNum+'</a></li>');  
    //     }  
    // 	$('#pagul').append('<li class="next"><a href="javascript:void(0);"><img src="/assets/theme/images/company/next.png"></a></li>');
    //     $('#sellertable tbody tr').hide();  
    //     $('#sellertable tbody tr').slice (0, rowsShown).show();  
    //     $('#pagul li.nmbr:first a').addClass('active');  
    //     $('#pagul li.nmbr a').bind('click', function() {  
    //     $('#pagul li.nmbr a').removeClass('active');   
    //    $(this).addClass('active');  
    //         var currPage = $(this).attr('rel');  
    //         var startItem = currPage * rowsShown;  
    //         var endItem = startItem + rowsShown;  
    //         $('#sellertable tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).  
    //         css('display','table-row').animate({opacity:1}, 300);  
    // 		$("#pstart").html(startItem+1);
    // 		if(endItem>rowsTotal){
    // 			$("#pend").html(rowsTotal);
    // 		}else{
    // 	$("#pend").html(endItem);
    // 		}
    // 	//alert(endItem);
    //     });
    // 	$('.prev a').bind('click', function() {  
    // 	var cPage = $("#pagul a.active").attr('rel'); 
    // 	if(cPage>0){
    // 	//alert(cPage);
    // 	var dd=cPage-1;
    // 	$('#pagul li.nmbr a').removeClass('active');  
    //    $( "#pagul li.nmbr a[rel$='"+dd+"']" ).addClass('active');
    // 	var startItem = cPage * rowsShown;
    // 	var startItem = startItem - 20;
    // 	//alert(startItem);
    // 	var endItem = startItem + rowsShown;  
    // 	$('#sellertable tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).  
    //         css('display','table-row').animate({opacity:1}, 300);  
    // 		$("#pstart").html(startItem+1);
    // 		if(endItem>rowsTotal){
    // 			$("#pend").html(rowsTotal);
    // 		}else{
    // 	$("#pend").html(endItem);
    // 		}
    // 	}
    // 	});
    // 	$('.next a').bind('click', function() {  
    // 	var cPage = $("#pagul a.active").attr('rel'); 
    // 	if ((parseInt(cPage)+1) <= parseInt(numPages) && numPages>1){
    // 	var dd=parseInt(cPage)+1;
    // 	//alert(numPages);
    // 	$('#pagul li.nmbr a').removeClass('active');  
    //    $( "#pagul li.nmbr a[rel$='"+dd+"']" ).addClass('active');
    // 	var startItem = cPage * rowsShown;
    // 	var startItem = startItem + 20;
    // 	//alert(startItem);
    // 	var endItem = startItem + rowsShown;  
    // 	$('#sellertable tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).  
    //         css('display','table-row').animate({opacity:1}, 300);  
    // 		$("#pstart").html(startItem+1);
    // 		if(endItem>rowsTotal){
    // 			$("#pend").html(rowsTotal);
    // 		}else{
    // 	$("#pend").html(endItem);
    // 		}
    // 	}
    // 	});
    // 	var currPage1 = 0;  
    //         var startItem1 = currPage1 * rowsShown;  
    //         var endItem1 = startItem1 + rowsShown; 
    // 		$("#pstart").html(startItem1+1);
    // 		if(endItem1>rowsTotal){
    // 			$("#pend").html(rowsTotal);
    // 		}else{
    // 	$("#pend").html(endItem1);
    // 		}
    // 	$("#ptcnt").html(rowsTotal);
    // 	$('.pagindiv').show();
    // 	if (rowsTotal == 0){	
    // 		$("#sellertable tbody").html("");
    // 		$('.pagindiv').hide();
    // 		$("#sellertable tbody").html("<tr><td colspan='5'>No records found</td></tr>");
    // 	}
       
    });	
    });
    });
    
    function loadData()
    {
       var html="<table class='table table-striped' id='sellertable'><thead><tr><th scope='col'>Provider</th><th scope='col'>Domain</th><th scope='col'>City</th><th scope='col'>Pin Code</th></tr></thead><tbody>";
        var JsonData="/assets/theme/json/sellertry.json";
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
    // 		$('#pagul').html("");
    // 		$('#pagul').html('<li class="prev"><a href="javascript:void(0);"><img src="/assets/theme/images/company/prev.png"></a></li>');
    // 		var rowsShown = 20;  
    //     var rowsTotal = $('#sellertable tbody tr').length;  
    //     var numPages = rowsTotal/rowsShown;  
    //     for (i = 0;i < numPages;i++) {  
    //         var pageNum = i + 1;  
    //         $('#pagul').append ('<li class="nmbr" style="display:none;"><a href="javascript:void(0);" rel="'+i+'">'+pageNum+'</a></li>');  
    //     }  
    // 	$('#pagul').append('<li class="next"><a href="javascript:void(0);"><img src="/assets/theme/images/company/next.png"></a></li>');
    //     $('#sellertable tbody tr').hide();  
    //     $('#sellertable tbody tr').slice (0, rowsShown).show();  
    //     $('#pagul li.nmbr:first a').addClass('active');  
    //     $('#pagul li.nmbr a').bind('click', function() {  
    //     $('#pagul li.nmbr a').removeClass('active');  
    //    $(this).addClass('active');  
    //         var currPage = $(this).attr('rel');  
    //         var startItem = currPage * rowsShown;  
    //         var endItem = startItem + rowsShown;  
    //         $('#sellertable tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).  
    //         css('display','table-row').animate({opacity:1}, 300);  
    // 		$("#pstart").html(startItem+1);
    // 		if(endItem>rowsTotal){
    // 			$("#pend").html(rowsTotal);
    // 		}else{
    // 	$("#pend").html(endItem);
    // 		}
    // 	//alert(endItem);
    //     });
    // 	$('.prev a').bind('click', function() {  
    // 	var cPage = $("#pagul a.active").attr('rel'); 
    // 	if(cPage>0){
    // 	//alert(cPage);
    // 	var dd=cPage-1;
    // 	$('#pagul li.nmbr a').removeClass('active');  
    //    $( "#pagul li.nmbr a[rel$='"+dd+"']" ).addClass('active');
    // 	var startItem = cPage * rowsShown;
    // 	var startItem = startItem - 20;
    // 	//alert(startItem);
    // 	var endItem = startItem + rowsShown;  
    // 	$('#sellertable tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).  
    //         css('display','table-row').animate({opacity:1}, 300);  
    // 		$("#pstart").html(startItem+1);
    // 		if(endItem>rowsTotal){
    // 			$("#pend").html(rowsTotal);
    // 		}else{
    // 	$("#pend").html(endItem);
    // 		}
    // 	}
    // 	});
    // 	$('.next a').bind('click', function() {  
    // 	var cPage = $("#pagul a.active").attr('rel'); 
    // 	if ((parseInt(cPage)+1) <= parseInt(numPages)){
    // 	var dd=parseInt(cPage)+1;
    // 	//alert(dd);
    // 	$('#pagul li.nmbr a').removeClass('active');  
    //    $( "#pagul li.nmbr a[rel$='"+dd+"']" ).addClass('active');
    // 	var startItem = cPage * rowsShown;
    // 	var startItem = startItem + 20;
    // 	//alert(startItem);
    // 	var endItem = startItem + rowsShown;  
    // 	$('#sellertable tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).  
    //         css('display','table-row').animate({opacity:1}, 300);  
    // 		$("#pstart").html(startItem+1);
    // 		if(endItem>rowsTotal){
    // 			$("#pend").html(rowsTotal);
    // 		}else{
    // 	$("#pend").html(endItem);
    // 		}
    // 	}
    // 	});
        
    // 	var currPage1 = 0;  
    //         var startItem1 = currPage1 * rowsShown;  
    //         var endItem1 = startItem1 + rowsShown; 
    // 		$("#pstart").html(startItem1+1);
    // 		if(endItem1>rowsTotal){
    // 			$("#pend").html(rowsTotal);
    // 		}else{
    // 	$("#pend").html(endItem1);
    // 		}
    // 		//alert(currPage1);
    // 	$("#ptcnt").html(rowsTotal);
        $('#sellertable').DataTable();
      
    });
    }
    $(window).load(function(){  
        $('#overlay').fadeOut();  
       loadData(); 
    });
    