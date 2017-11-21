/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/
 var token = sessionStorage.getItem("access_token"); 
 var username = sessionStorage.getItem("user");
// $(username).appendTo("#userName").slideDown("fast"); 
 $('#userName').append(username);
console.log(username);
   $.ajaxSetup({
    headers: { 'accept': 'application/json',	
	'Authorization': 'Bearer '+token ,
	'content-type': 'application/x-www-form-urlencoded' }
    });
	var cYr = (new Date()).getFullYear();
		var cMo = (new Date()).getMonth()+ 1;
		var SD = (cYr-1)+'-01-01';
		var ED = (cYr-1)+'-'+cMo+'-01';
		var urlDate = SD+'/'+ED;
		var currUrlDate = (cYr)+'-01-01'+'/'+(cYr)+'-'+cMo+'-01';
		var date = new Date();

        //var last = new Date(((new Date()).getFullYear()), ((new Date()).getMonth()) + 1, 0);

		var currUrlMonth = (cYr)+'-01-01'+'/'+(cYr)+'-'+cMo+'-28';
		console.log(currUrlDate);
		
		
		
		$.ajax({		
         url: "http://tracking.orangedsinc.com:8088/api/reports/jobs/month/"+currUrlMonth,         
         type: "GET",        
         success: function(data) { 	
console.log(cMo);		 
		 console.log(data[cMo-2]);	
var a = ((data[cMo-2].YValue)-(data[cMo-3].YValue)).toFixed(2);		 
var b = ((data[cMo-3].YValue / data[cMo-2].YValue) * 100).toFixed(2);
var c = 0 ;
$.each(data, function(i) {
	 c += parseFloat(data[i].YValue);
})
var arrow ;
if(a <0){
	arrow='down';

}else{
	arrow='up';
}

 a     = a.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
 b     = a.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
 var e = c.toFixed(2);
 e     = e.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
 
    $('<h1>'+e+'</h1>'
        +'<p class="subcontent">JOBS</p>'
        +'<a><i class="fa fa-caret-'+arrow+'" aria-hidden="true"></i>'+a +'('+ b+'%)</a></br></br>'
       // +'<li class="text-uppercase"><a class="odd">'+data[i].YValue+'</a></li> </ul>'
        +'<p class="text-uppercase">'+arrow+ ' FROM PREVIOUS MONTH</p>').appendTo("#jobReport").slideDown("fast");                   
		
		 }
      });
	  
	  //username setting pageX
	   $.ajaxSetup({
    headers: { 'accept': 'application/json',	
	'Authorization': 'Bearer '+token ,
	'content-type': 'application/x-www-form-urlencoded' }
    });
	var cYr = (new Date()).getFullYear();
		var cMo = (new Date()).getMonth()+ 1;
		var SD = (cYr-1)+'-01-01';
		var ED = (cYr-1)+'-'+cMo+'-01';
		var urlDate = SD+'/'+ED;
		var currUrlDate = (cYr)+'-01-01'+'/'+(cYr)+'-'+cMo+'-01';
		var date = new Date();

        //var last = new Date(((new Date()).getFullYear()), ((new Date()).getMonth()) + 1, 0);

		var currUrlMonth = (cYr)+'-01-01'+'/'+(cYr)+'-'+cMo+'-28';
		console.log(currUrlDate);
		
		
		
		$.ajax({		
         url: "http://tracking.orangedsinc.com:8088/api/users/0",         
         type: "GET",        
         success: function(data) { 	
           console.log(data);	
$("#efname").val(data ["Name"]);
$("#euname").val(data ["UserName"]);		   
		 $('<li class="active"><a>'
								+'<div class="row">'
									+'<h5 class="text-uppercase">My Settings</h5>'
								+'</div>'
								+'<div class="row orange-setting">'
									+'<div class="col-sm-3 col-md-3 col-xs-3 text-center user-icon">'
									  +'<img class="img-circle" src="assets/dashboard/bootstrap/images/user2.png" >'
									+'</div>'
									+'<div class="col-sm-9 col-md-9 col-xs-9">'
									  +'<p><strong>'+data["Name"]+'</strong></p>'
									  +'<small>'+data["UserName"]+'</small>'
									+'</div>'
								+'</div>'
								+'<div class="row text-uppercase">'
									+'<a class="all-user"></a>'
								+'</div>'
                                +'</a></li>').appendTo("#admindetail").slideDown("fast");
		 }
      });
	  
	  
	  
	  $.ajax({		
         url: "http://tracking.orangedsinc.com:8088/api/reports/pieces/month/"+currUrlMonth,         
         type: "GET",        
         success: function(data) { 			 
		 console.log(data);	
console.log(cMo);		 
		 console.log(data[cMo-2]);	
var a = ((data[cMo-2].YValue)-(data[cMo-3].YValue)).toFixed(2);		 
var b = ((data[cMo-3].YValue / data[cMo-2].YValue) * 100).toFixed(2);
var c = 0 ;
$.each(data, function(i) {
	 c += parseFloat(data[i].YValue);
});
var arrow ;
if(a <0){
	arrow='down';

}else{
	arrow='up';
}	

a     = a.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
b     = a.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
var e = ( data[1].YValue).toFixed(2);
e     = e.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    $('<h1>'+e +'</h1>'
        +'<p class="subcontent">THOUSAND PIECES</p>'
        +'<a><i class="fa fa-caret-'+arrow+'" aria-hidden="true"></i>'+a +'('+ b+'%)</a></br></br>'
       // +'<li class="text-uppercase"><a class="odd">'+data[i].YValue+'</a></li> </ul>'
        +'<p class="text-uppercase">'+arrow+ ' FROM PREVIOUS MONTH</p>').appendTo("#piecesReport").slideDown("fast");                   
		
		 }
      }); 
	  
	  $.ajax({		
         url: "http://tracking.orangedsinc.com:8088/api/reports/revenue/month/"+currUrlMonth,         
         type: "GET",        
         success: function(data) { 			 
		 console.log(data);	
console.log(cMo);		 
		 console.log(data[cMo-1]);	
var a = ((data[cMo-2].YValue)-(data[cMo-3].YValue)).toFixed(2);
 		 
var b = ((data[cMo-3].YValue / data[cMo-2].YValue) * 100).toFixed(2);
var c = 0 ;
$.each(data, function(i) {
	 c += parseFloat(data[i].YValue);
})
var arrow ;
if(a <0){
	arrow='down';

}else{
	arrow='up';
}

 a     = a.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
 b     = a.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
 var e = (data[1].YValue).toFixed(2);
 e     = e.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	
    $('<h1>'+e+'</h1>'
        +'<p class="subcontent">THOUSAND US DOLLARS</p>'
        +'<a><i class="fa fa-caret-'+arrow+'" aria-hidden="true"></i>'+a +'('+ b+'%)</a></br></br>'
       // +'<li class="text-uppercase"><a class="odd">'+data[i].YValue+'</a></li> </ul>'
        +'<p class="text-uppercase">'+arrow+ ' FROM PREVIOUS MONTH</p>').appendTo("#revenueReport").slideDown("fast");                   
		
		 }
      });
	  
	   $.ajax({		
         url: "http://tracking.orangedsinc.com:8088/api/reports/PiecesWeight/month/"+currUrlMonth,         
         type: "GET",        
         success: function(data) { 			 
		 console.log(data);	
console.log(cMo);		 
		 console.log(data[cMo-1]);	
var a = ((data[cMo-2].YValue)-(data[cMo-3].YValue)).toFixed(2);		 
var b = ((data[cMo-3].YValue / data[cMo-2].YValue) * 100).toFixed(2);
var c = 0 ;
$.each(data, function(i) {
	 c += parseFloat(data[i].YValue);
})
var arrow ;
if(a <0){
	arrow='down';

}else{
	arrow='up';
}	

a     = a.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
b     = a.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
var e = (data[1].YValue).toFixed(2);
e     = e.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    $('<h1>'+e+'</h1>'
        +'<p class="subcontent">POUNDS</p>'
        +'<a><i class="fa fa-caret-'+arrow+'" aria-hidden="true"></i>'+a +'('+ b+'%)</a></br></br>'
       // +'<li class="text-uppercase"><a class="odd">'+data[i].YValue+'</a></li> </ul>'
        +'<p class="text-uppercase">'+arrow+ ' FROM PREVIOUS MONTH</p>').appendTo("#poundReport").slideDown("fast");                   
		
		 }
      });  
	
/*	$.ajax({		
         url: "http://tracking.orangedsinc.com:8088/api/reports/revenue/month/"+currUrlMonth,         
         type: "GET",        
         success: function(data) { 			 
		 console.log(data);	
var a = (data[1].YValue)-(data[0].YValue);		 
var b = (data[0].YValue / data[1].YValue) * 100;
var arrow ;
if(a <0){
	arrow='down';

}else{
	arrow='up';
}	
    $('<h1>'+ data[1].YValue+'</h1>'
        +'<p class="subcontent">THOUSAND US DOLLARS</p>'
        +'<a><i class="fa fa-caret-'+arrow+'" aria-hidden="true"></i>'+a +'('+ b+'%)</a></br></br>'
       // +'<li class="text-uppercase"><a class="odd">'+data[i].YValue+'</a></li> </ul>'
        +'<p class="text-uppercase">'+arrow+ ' FROM PREVIOUS MONTH</p>').appendTo("#revenueReport").slideDown("fast");                   
		
		 }
      });
	*/  
 
$(function () {

  "use strict";

  //Make the dashboard widgets sortable Using jquery UI
  $(".connectedSortable").sortable({
    placeholder: "sort-highlight",
    connectWith: ".connectedSortable",
    handle: ".box-header, .nav-tabs",
    forcePlaceholderSize: true,
    zIndex: 999999
  });
  $(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css("cursor", "move");

  //jQuery UI sortable for the todo list
  $(".todo-list").sortable({
    placeholder: "sort-highlight",
    handle: ".handle",
    forcePlaceholderSize: true,
    zIndex: 999999
  });

  //bootstrap WYSIHTML5 - text editor
  $(".textarea").wysihtml5();

  $('.daterange').daterangepicker({
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    startDate: moment().subtract(29, 'days'),
    endDate: moment()
  }, function (start, end) {
    window.alert("You chose: " + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
  });

  /* jQueryKnob */
  $(".knob").knob();

  //jvectormap data
  var visitorsData = {
    "US": 398, //USA
    "SA": 400, //Saudi Arabia
    "CA": 1000, //Canada
    "DE": 500, //Germany
    "FR": 760, //France
    "CN": 300, //China
    "AU": 700, //Australia
    "BR": 600, //Brazil
    "IN": 800, //India
    "GB": 320, //Great Britain
    "RU": 3000 //Russia
  };
  //World map by jvectormap
  $('#world-map').vectorMap({
    map: 'world_mill_en',
    backgroundColor: "transparent",
    regionStyle: {
      initial: {
        fill: '#e4e4e4',
        "fill-opacity": 1,
        stroke: 'none',
        "stroke-width": 0,
        "stroke-opacity": 1
      }
    },
    series: {
      regions: [{
        values: visitorsData,
        scale: ["#92c1dc", "#ebf4f9"],
        normalizeFunction: 'polynomial'
      }]
    },
    onRegionLabelShow: function (e, el, code) {
      if (typeof visitorsData[code] != "undefined")
        el.html(el.html() + ': ' + visitorsData[code] + ' new visitors');
    }
  });

  //Sparkline charts
  var myvalues = [1000, 1200, 920, 927, 931, 1027, 819, 930, 1021];
  $('#sparkline-1').sparkline(myvalues, {
    type: 'line',
    lineColor: '#92c1dc',
    fillColor: "#ebf4f9",
    height: '50',
    width: '80'
  });
  myvalues = [515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921];
  $('#sparkline-2').sparkline(myvalues, {
    type: 'line',
    lineColor: '#92c1dc',
    fillColor: "#ebf4f9",
    height: '50',
    width: '80'
  });
  myvalues = [15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21];
  $('#sparkline-3').sparkline(myvalues, {
    type: 'line',
    lineColor: '#92c1dc',
    fillColor: "#ebf4f9",
    height: '50',
    width: '80'
  });

  //The Calender
  $("#calendar").datepicker();

  //SLIMSCROLL FOR CHAT WIDGET
  $('#chat-box').slimScroll({
    height: '250px'
  });

  /* Morris.js Charts */
  // Sales chart+
 
  var revenueBdata = [];
  var revenueOutputdata = '['
  $.ajax({
         url: "http://tracking.orangedsinc.com:8088/api/reports/pieces/month/"+urlDate,
		  type: "GET",
		  success: function(bdata) {
         revenueBdata = bdata;			  
		// alert('Success!');  
		 console.log(revenueBdata);
	$.ajax({
         url: "http://tracking.orangedsinc.com:8088/api/reports/pieces/month/"+currUrlDate,
		  type: "GET",
		  success: function(data) {			  
			   console.log(data);
			   $.each(data, function(i) {
				//data[i].YValue =  revenueBdata[i].YValue - data[i].YValue;
				   
				   revenueOutputdata += '{"m":"'+data[i].XValue+'","b":'+(revenueBdata[i].YValue).toFixed(2)+',"a":'+(data[i].YValue).toFixed(2)+'}';
		if(i!=data.length-1){
			console.log(i);
			revenueOutputdata += ',';
		}       
         });
		 revenueOutputdata += ']';		  
		 console.log(revenueOutputdata);
		 revenueOutputdata = $.parseJSON(revenueOutputdata);
		 
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var mon = [0,20, 40, 60, 80, 100, 120,140, 160, 180, 200, 220];
  var area = new Morris.Line({
    element: 'revenue-chart',
    resize: true,    
	data:revenueOutputdata,
  xkey: 'm',
    ykeys: ['b','a'],
         labels: [cYr-1,cYr],
         lineColors: ['#a7b3bc','#ff6c0c'],
  xLabelFormat: function(x) { // <--- x.getMonth() returns valid index
    var month = months[x.getMonth()];
    return month;
  }
         });
		 }
		 });		 
		 }
		 });
  
  /**** Revenue Chart2 ****/
  
  
  var revenue1Bdata = [];
  var revenue1Outputdata = '['
  $.ajax({
         url: "http://tracking.orangedsinc.com:8088/api/reports/revenue/month/"+urlDate,
		  type: "GET",
		  success: function(bdata) {
         revenue1Bdata = bdata;			  
		 //alert('Success!');  
		 console.log(revenue1Bdata);
	$.ajax({
         url: "http://tracking.orangedsinc.com:8088/api/reports/revenue/month/"+currUrlDate,
		  type: "GET",
		  success: function(data) {			  
			   console.log(data);
			   $.each(data, function(i) {
				   revenue1Outputdata += '{"m":"'+data[i].XValue+'","b":'+(data[i].YValue).toFixed(2)+',"a":'+(revenue1Bdata[i].YValue).toFixed(2)+'}';
		if(i!=data.length-1){
			console.log(i);
			revenue1Outputdata += ',';
		}       
         });
		 revenue1Outputdata += ']';		  
		 console.log(revenue1Outputdata);
		 revenue1Outputdata = $.parseJSON(revenue1Outputdata);
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var mon = [0,20, 40, 60, 80, 100, 120,140, 160, 180, 200, 220];
  var area = new Morris.Line({
         element: 'revenue-chart1',
         resize: true,
	     data:revenue1Outputdata,
         xkey: 'm',
         ykeys: ['b','a'],
         labels: [cYr-1,cYr],
         lineColors: ['#a7b3bc','#ff6c0c'],
         xLabelFormat: function(x) { // <--- x.getMonth() returns valid index
         var month = months[x.getMonth()];
         return month;
  }
         });
		 }
		 });		 
		 }
		 });
  
  
  
  /**** Revenue Chart3 ****/

		var bdata = [];
		 var outputdata = '['
	$.ajax({
         url: "http://tracking.orangedsinc.com:8088/api/reports/PiecesWeight/month/"+urlDate,
		  type: "GET",
		  success: function(bdata) {
         bdata = bdata;			  
		// alert('Success!');  
		console.log(bdata);
		 $.ajax({
         url: "http://tracking.orangedsinc.com:8088/api/reports/PiecesWeight/month/"+currUrlDate,
		  type: "GET",
		  success: function(data) {
			  //data = bdata;
			  console.log(data);
			   $.each(data, function(i) {
        outputdata += '{"m":"'+data[i].XValue+'","b":'+(data[i].YValue).toFixed(2)+',"a":'+(bdata[i].YValue).toFixed(2)+'}';
		if(i!=data.length-1){
			console.log(i);
			outputdata += ',';
		}
       // outputdata[i].b = data[i].YValue;
         });
		 outputdata += ']';
		  
		 console.log(outputdata);
		 outputdata = $.parseJSON(outputdata);		 
		 
		  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var mon = [0,20, 40, 60, 80, 100, 120,140, 160, 180, 200, 220];
  var area = new Morris.Line({
    element: 'revenue-chart3',
    resize: true,
	data:outputdata,
  xkey: 'm',
  ykeys: ['b','a'],
  labels: [cYr-1,cYr],
lineColors: ['#a7b3bc','#ff6c0c'],
  xLabelFormat: function(x) { // <--- x.getMonth() returns valid index
    var month = months[x.getMonth()];
    return month;
  }
  });
		  }
		 });		 
		 }
		 });
/*	
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var mon = [0,20, 40, 60, 80, 100, 120,140, 160, 180, 200, 220];
  var area = new Morris.Area({
    element: 'revenue-chart3',
    resize: true,
	*/
	
	
    // data: [
      // {y: ' Q1', item1: 2666, item2: 2666},
      // {y: '201 Q2', item1: 2778, item2: 2294},
      // {y: '201 Q3', item1: 4912, item2: 1969},
      // {y: '201 Q4', item1: 3767, item2: 3597},
      // {y: '202 Q1', item1: 6810, item2: 1914},
      // {y: '202 Q2', item1: 5670, item2: 4293},
      // {y: '202 Q3', item1: 4820, item2: 3795},
      // {y: '202 Q4', item1: 15073, item2: 5967},
      // {y: '203 Q1', item1: 10687, item2: 4460},
      // {y: '203 Q2', item1: 8432, item2: 5713}

    // ],
    // xkey: 'y',
    // ykeys: ['item1', 'item2'],
    // labels: ['Item 1', 'Item 2'],
    // lineColors: ['#a0d0e0', '#3c8dbc'],
    // hideHover: 'auto'
	
	
	/* data: [{
    m: '2017-01', // <-- valid timestamp strings
    b: 0   
  }, {
    m: '2017-02',
   
    b: 160
  }, {
    m: '2017-03',
    
    b: 80
  }, {
    m: '2017-04',
    
    b: 120
  }, {
    m: '2017-05',
   
    b: 20
  }, {
    m: '2017-06',
   
    b: 100
  }, {
    m: '2017-07',
   
    b: 180
  }, {
    m: '2017-08',
   
    b: 140
  }, {
    m: '2017-09',
    
    b: 190
  }, {
    m: '2017-10',
    
    b: 290
  }, {
    m: '2017-11',
    
    b: 10
  }, {
    m: '2017-12',
    
    b: 150
  }, ]
  */ 

/*  data:outputdata,
  xkey: 'm',
  ykeys: ['b'],
  labels: ['Weight'],
lineColors: ['#ff6c0c'],
  xLabelFormat: function(x) { // <--- x.getMonth() returns valid index
    var month = months[x.getMonth()];
    return month;
  }
  
  });
  */
  
  
  
  
  
  /**** Revenue Chart4 ****/
  var avgDeliveryData = [];
		 var avgDeliveryOutputdata = '['
	$.ajax({
         url: "http://tracking.orangedsinc.com:8088/api/reports/AvgDeliveryDays/month/"+urlDate,
		  type: "GET",
		  success: function(bdata) {
         avgDeliveryData = bdata;			  
		// alert('Success!');  
		 console.log(avgDeliveryData);
	$.ajax({
         url: "http://tracking.orangedsinc.com:8088/api/reports/AvgDeliveryDays/month/"+currUrlDate,
		  type: "GET",
		  success: function(data) {			  
			   console.log(data);
			   $.each(data, function(i) {
        avgDeliveryOutputdata += '{"m":"'+data[i].XValue+'","b":'+(data[i].YValue).toFixed(2)+',"a":'+(avgDeliveryData[i].YValue).toFixed(2)+'}';
		if(i!=data.length-1){
			console.log(i);
			avgDeliveryOutputdata += ',';
		}       
         });
		 avgDeliveryOutputdata += ']';		  
		 console.log(avgDeliveryOutputdata);
		 avgDeliveryOutputdata = $.parseJSON(avgDeliveryOutputdata);
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var mon = [0,20, 40, 60, 80, 100, 120,140, 160, 180, 200, 220];
  var area = new Morris.Line({
    element: 'revenue-chart4',
    resize: true,
	     data:avgDeliveryOutputdata,
         xkey: 'm',
         ykeys: ['b','a'],
         labels: [cYr-1,cYr],
         lineColors: ['#a7b3bc','#ff6c0c'],
         xLabelFormat: function(x) { // <--- x.getMonth() returns valid index
         var month = months[x.getMonth()];
         return month;
         }
         });
		 }
		 });		 
		 }
		 });
  
  
  
  var line = new Morris.Line({
    element: 'line-chart',
    resize: true,
    data: [
      {y: '2011 Q1', item1: 2666},
      {y: '2011 Q2', item1: 2778},
      {y: '2011 Q3', item1: 4912},
      {y: '2011 Q4', item1: 3767},
      {y: '2012 Q1', item1: 6810},
      {y: '2012 Q2', item1: 5670},
      {y: '2012 Q3', item1: 4820},
      {y: '2012 Q4', item1: 15073},
      {y: '2013 Q1', item1: 10687},
      {y: '2013 Q2', item1: 8432}
    ],
    xkey: 'y',
    ykeys: ['item1'],
    labels: ['Item 1'],
    lineColors: ['#efefef'],
    lineWidth: 2,
    hideHover: 'auto',
    gridTextColor: "#fff",
    gridStrokeWidth: 0.4,
    pointSize: 4,
    pointStrokeColors: ["#efefef"],
    gridLineColor: "#efefef",
    gridTextFamily: "Open Sans",
    gridTextSize: 10
  });

  //Donut Chart
  var donut = new Morris.Donut({
    element: 'sales-chart',
    resize: true,
    colors: ["#3c8dbc", "#f56954", "#00a65a"],
    data: [
      {label: "Download Sales", value: 12},
      {label: "In-Store Sales", value: 30},
      {label: "Mail-Order Sales", value: 20}
    ],
    hideHover: 'auto'
  });

  //Fix for charts under tabs
  $('.box ul.nav a').on('shown.bs.tab', function () {
    area.redraw();
    donut.redraw();
    line.redraw();
  });

  /* The todo list plugin */
  $(".todo-list").todolist({
    onCheck: function (ele) {
      window.console.log("The element has been checked");
      return ele;
    },
    onUncheck: function (ele) {
      window.console.log("The element has been unchecked");
      return ele;
    }
  });

});
