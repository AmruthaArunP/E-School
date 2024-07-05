function editstaff(id) {
	$.ajax({
	dataType:"json",
	url: "ajax.php",
	data:{id:id,action:'editstaff'},
	type: "POST",
	success:function(result){
		$("#staffbtn").val("Save");
		$("#action").val("UpdateStaff");
		$("#id").val(result.id);
		$("#mobile").val(result.mobile);
		$("#address").val(result.address);
		$("#lastname").val(result.last_name);
		$("#firstname").val(result.first_name);
		$("#boxtitle").html("Update Staff");
	},
	error:function (d){alert(d);}
	});
}
$("select#class").change(function(){

var class_id = $("select#class option:selected").attr('value');

 if (class_id.length > 0 ) {
 $("#section").html( '' );
  $("#section").attr("disabled",true);
 $.ajax({
 type: "POST",
 url: "ajax.php",
 data: {class_id:class_id,action:"section"},
 cache: false,
 beforeSend: function () {
 $('#section').html('<option>Loading...</option>');
 },
 success: function(html) {
 $("#section").html( html );
 $("#section").attr("disabled",false);
 }
 });
 }
});
$("select#toclass").change(function(){

var class_id = $("select#toclass option:selected").attr('value');

 if (class_id.length > 0 ) {
 $("#tosection").html( '' );
  $("#tosection").attr("disabled",true);
 $.ajax({
 type: "POST",
 url: "ajax.php",
 data: {class_id:class_id,action:"section"},
 cache: false,
 beforeSend: function () {
 $('#tosection').html('<option>Loading...</option>');
 },
 success: function(html) {
 $("#tosection").html( html );
 $("#tosection").attr("disabled",false);
 }
 });
 }
});
function editclass(id) {
	$.ajax({
	dataType:"html",
	url: "ajax.php",
	data:{id:id,action:'editclass'},
	type: "POST",
	success:function(result){		
		$("#classbox").html(result);
		$("#classheading").html('<i class="glyphicon glyphicon-edit"></i> Update Class');
	},
	error:function (d){alert(d);}
	});
}
$("#username").on('change', function(){
	username=$(this).val();
	$.ajax({
	dataType:"json",
	url: "ajax.php",
	data:{username:username,action:'username'},
	type: "POST",
	success:function(result){
		if(result.data=='Availabe.'){
			$("#checkusername").html('<span class="label-success label label-default">'+result.data+'</span>');
		}else{
			$("#checkusername").html('<span class="label-warning label label-default">'+result.data+'</span>');
		}		
	},
	error:function (d){alert(d);}
	});
});
 $(document).ready(function() {
$('.alert').delay( 15000 ).fadeOut();
 });

$("select#class_data").change(function(){

var class_id = $("select#class_data option:selected").attr('value');

 if (class_id.length > 0 ) {
 $("#section_data").html( '' );
  $("#section_data").attr("disabled",true);
 $.ajax({
 type: "POST",
 url: "ajax.php",
 data: {class_id:class_id,action:"section"},
 cache: false,
 beforeSend: function () {
 $('#section_data').html('<option>Loading...</option>');
 },
 success: function(html) {
 $("#section_data").html( html );
 $("#section_data").attr("disabled",false);
 getstudent();
 }
 });
 }
});
$("select#section_data").change(function(){
getstudent();
});
function getstudent(){
	
var class_id = $("select#class_data option:selected").attr('value');

var section_id = $("select#section_data option:selected").attr('value');

 if (class_id.length > 0 ) {
 $("#students").html( '' );
  $("#students").attr("disabled",true);
 $.ajax({
 type: "POST",
 url: "ajax.php",
 data: {class_id:class_id,section_id:section_id,action:"getstudents"},
 cache: false,
 beforeSend: function () {
 $('#students').html('<option>Loading...</option>');
 },
 success: function(html) {
 $("#students").html( html );
 $("#students").attr("disabled",false);
 }
 });
 }	
}
$("select#students").change(function(){
	
var students = $("select#students option:selected").attr('value');

	$.ajax({
	dataType:"html",
	url: "ajax.php",
	data:{students:students,action:'GetStudentData'},
	type: "POST",
	success:function(result){
		$("#StudentDeatil").html(result);		
		$("#fee_group").val('');
	},
	error:function (d){alert(d.toSource());}
	});
	
	GetPreviousdata(students);

});
function GetPreviousdata(students){
	$.ajax({
	dataType:"html",
	url: "ajax.php",
	data:{students:students,action:'GetPreviousdata'},
	type: "POST",
	success:function(result){
		$("#showpreviousdata").html(result);
	},
	error:function (d){alert(d.toSource());}
	});
}
$("#admission_no").change(function(){
	
var admission_no = $(this).val();

	$.ajax({
	dataType:"html",
	url: "ajax.php",
	data:{admission_no:admission_no,action:'GetStudentDatabyAdmission'},
	type: "POST",
	success:function(result){
		$("#StudentDeatil").html(result);		
		$("#fee_group").val('');
	},
	error:function (d){alert(d.toSource());}
	});
	$.ajax({
	dataType:"html",
	url: "ajax.php",
	data:{admission_no:admission_no,action:'GetPreviousdata1'},
	type: "POST",
	success:function(result){
		$("#showpreviousdata").html(result);
	},
	error:function (d){alert(d.toSource());}
	});
});
function showpaymentdetail(fee_group,admission_no,students){	
	//payment details
	$.ajax({
	dataType:"json",
	url: "ajax.php",
	data:{fee_group:fee_group,admission_no:admission_no,students:students,action:'GetFeeAmountdetail'},
	type: "POST",
	success:function(result){
		if(result.status == 1){
		$("#totalamount").val(result.data.fee_amount);
		$("#paidamt").val(result.data.fee_amount);
		$("#discountamt").val(0);
		$("#discountper").val(0);
		monthlyval(1);
		$('#payfee').attr('disabled', false);		
		$('#pirnt').attr('disabled', true);
		}else{
			
		$("#totalamount").val(0);
		$("#paidamt").val(0);
		$("#discountamt").val(0);
		$("#discountper").val(0);
		
		$('#payfee').attr('disabled', true);		
		$('#pirnt').attr('disabled', true);
		}
	},
	error:function (d){alert(d.toSource());}
	})
}
$("#fee_group").change(function(){
	
var students = $("select#students option:selected").attr('value');
var admission_no = $("#admission_no").val();
var fee_group = $(this).val();
if(admission_no.length > 0 || students.length > 0){
	$.ajax({
	dataType:"html",
	url: "ajax.php",
	data:{fee_group:fee_group,admission_no:admission_no,students:students,action:'GetFeeAmount'},
	type: "POST",
	success:function(result){
		$("#showtable").html(result);		
	},
	error:function (d){alert(d.toSource());}
	});
	showpaymentdetail(fee_group,admission_no,students);
	if(fee_group == 'MONTHLY FEE'){
		$.ajax({
		dataType:"html",
		url: "ajax.php",
		data:{fee_group:fee_group,admission_no:admission_no,students:students,action:'GetFeeMonth'},
		type: "POST",
		success:function(result){
			$("#showmonths").html(result);		
		},
		error:function (d){alert(d.toSource());}
		});
	}else{
		$("#showmonths").html('');
	}
}else{
	alert("Please select student.");
}
});
function removetable(){
	if(confirm('Are you sure you want to remove?')){
	$.ajax({
	dataType:"html",
	url: "ajax.php",
	data:{action:'RemovefeeTable'},
	type: "POST",
	success:function(result){
		$("#showtable").html(result);	
		$("#fee_group").val('');
		$("#totalamount").val(0);
		$("#paidamt").val(0);
		$("#discountamt").val(0);
		$("#discountper").val(0);
		
		$('#payfee').attr('disabled', true);		
		$('#pirnt').attr('disabled', true);	
	},
	error:function (d){alert(d.toSource());}
	});
	}
}
function valueChanged()
{
    if($('#selectamt').is(":checked")){		 
		var students = $("select#students option:selected").attr('value');
		var admission_no = $("#admission_no").val();
		var fee_group = $("select#fee_group option:selected").attr('value');
		showpaymentdetail(fee_group,admission_no,students);
	}else{
       $("#totalamount").val(0);
		$("#paidamt").val(0);
		$("#discountamt").val(0);
		$("#discountper").val(0);
		
		$('#payfee').attr('disabled', true);		
		$('#pirnt').attr('disabled', true);	
	}
}
function monthlyval(month)
{
	var i = 0;
	if($('#apr').is(":checked")){	
	i++;
	}
	if($('#may').is(":checked")){	
	i++;
	}
	if($('#jun').is(":checked")){	
	i++;
	}
	if($('#jul').is(":checked")){	
	i++;
	}
	if($('#aug').is(":checked")){	
	i++;
	}
	if($('#sep').is(":checked")){	
	i++;
	}
	if($('#oct').is(":checked")){	
	i++;
	}
	if($('#nov').is(":checked")){	
	i++;
	}
	if($('#dec').is(":checked")){	
	i++;
	}
	if($('#jan').is(":checked")){	
	i++;
	}
	if($('#feb').is(":checked")){	
	i++;
	}
	if($('#mar').is(":checked")){	
	i++;
	}
	 mainamt = $("#mainamt").val();
	 if(i>0){
		 totalamt = mainamt*i;
		 $('#totaltableamt').html(totalamt);
		 $('#totalamount').val(totalamt);
		 $('#paidamt').val(totalamt);		 
	 }
}
// pay fee
$("#payfee").on('click', function(){
	var payment_date = $("#payment_date").val();
	var totalamount = $("#totalamount").val();
	var paidamt = $("#paidamt").val();
	var discountamt = $("#discountamt").val();
	var discountper = $("#discountper").val();
	var paymentinfo = $("#paymentinfo").val();
	var paymenttype = $("#paymenttype").val();
	var feedesc = $("#feedesc").val();
	var fee_group = $("select#fee_group option:selected").attr('value');
	var studentid = $("#studentid").val();
	var studentclass = $("#studentclass").val();
	if(fee_group=='GENERAL RECEIPT'){
		fee_group = $("select#customfee_group option:selected").attr('value');
	}
	if(payment_date !=''){
	$.ajax({
	dataType:"json",
	url: "ajax.php",
	data:{totalamount:totalamount,paidamt:paidamt,discountamt:discountamt,discountper:discountper,paymentinfo:paymentinfo,paymenttype:paymenttype,feedesc:feedesc,fee_group:fee_group,payment_date:payment_date,studentid:studentid,studentclass:studentclass,action:'PayFee'},
	type: "POST",
	success:function(result){
		if(result.status == 1){
		$('#payfee').attr('disabled', true);
			if(fee_group == 'MONTHLY FEE'){
				if($('#apr').is(":checked")){
				var month = $('#apr').val();					
				paymonthlyfee(month,result.id);
				}
				if($('#may').is(":checked")){	
				var month = $('#may').val();					
				paymonthlyfee(month,result.id);
				}
				if($('#jun').is(":checked")){	
				var month = $('#jun').val();					
				paymonthlyfee(month,result.id);
				}
				if($('#jul').is(":checked")){	
				var month = $('#jul').val();					
				paymonthlyfee(month,result.id);
				}
				if($('#aug').is(":checked")){	
				var month = $('#aug').val();					
				paymonthlyfee(month,result.id);
				}
				if($('#sep').is(":checked")){	
				var month = $('#sep').val();					
				paymonthlyfee(month,result.id);
				}
				if($('#oct').is(":checked")){	
				var month = $('#oct').val();					
				paymonthlyfee(month,result.id);
				}
				if($('#nov').is(":checked")){	
				var month = $('#nov').val();					
				paymonthlyfee(month,result.id);
				}
				if($('#dec').is(":checked")){	
				var month = $('#dec').val();					
				paymonthlyfee(month,result.id);
				}
				if($('#jan').is(":checked")){	
				var month = $('#jan').val();					
				paymonthlyfee(month,result.id);
				}
				if($('#feb').is(":checked")){	
				var month = $('#feb').val();					
				paymonthlyfee(month,result.id);
				}
				if($('#mar').is(":checked")){	
				var month = $('#mar').val();					
				paymonthlyfee(month,result.id);				
				}
				$("#payment_id").val(result.id);
					
			}
				$("#pirnt").attr("href", "invoice?payment_id="+result.id);
				$('#pirnt').attr('disabled', false);
			var options = $.parseJSON('{"text":"Payment made successfully.","layout":"topCenter","type":"success"}');
        noty(options);
		}
	},
	error:function (d){alert(d.toSource());}
	});
	}else{
		alert("Please select date");
	}
});

function paymonthlyfee(month,paymentid){
	var amount = $("#mainamt").val();
	var studentid = $("#studentid").val();
	$.ajax({
	dataType:"json",
	url: "ajax.php",
	data:{month:month,paymentid:paymentid,amount:amount,studentid:studentid,action:'paymonthlyfee'},
	type: "POST",
	success:function(result){
		if(result.status == 1){
			GetPreviousdata(studentid);
		}
	},
	error:function (d){alert(d.toSource());}
	});
	
}
$("#addfeedata").on('click', function(){
	var fee_group = $("select#customfee_group option:selected").attr('value');
	var amount = $("#customfee_amount").val();
	var students = $("select#students option:selected").attr('value');
	var admission_no = $("#admission_no").val();
if(admission_no.length > 0 || students.length > 0){
	$.ajax({
	dataType:"html",
	url: "ajax.php",
	data:{fee_group:fee_group,amount:amount,students:students,admission_no:admission_no,action:'GetCustomFeeAmount'},
	type: "POST",
	success:function(result){
		$("#showtable").html(result);	
		
		$("#totalamount").val(amount);
		$("#paidamt").val(amount);
		$("#discountamt").val(0);
		$("#discountper").val(0);

		$('#payfee').attr('disabled', false);		
		$('#pirnt').attr('disabled', true);
	},
	error:function (d){alert(d.toSource());}
	});
}else{
	alert("Please select student.");
}
});

$("#discountper").change(function(){
	var totalamount = $("#totalamount").val();
	var paidamt = $("#paidamt").val();
	var discountamt = $("#discountamt").val();
	var discountper = $("#discountper").val();
	if(discountper > 0){
	var peramt = (totalamount*discountper/100);
	remainamt = totalamount-peramt;
	$("#discountamt").val(peramt);
	$("#paidamt").val(remainamt);
	$("#totalamount").val(remainamt);
	}
	
});