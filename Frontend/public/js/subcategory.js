$(document).ready(function(){

$("select#Category").change(function(){

var category_id = $("select#Category option:selected").attr('value');
 $("#Subcategory").html( "" );

 if (category_id.length > 0 ) {
 
 $.ajax({
 type: "POST",
 url: "getsubcategory.php",
 data: "category_id="+category_id,
 cache: false,
 beforeSend: function () {
 $('#Subcategory').html('<option>Loading...</option>');
 },
 success: function(html) {
 $("#Subcategory").html( html );

 $("#Subcategory").attr("disabled",false);
 
 }
 });
 }else{
	  $('#Subcategory').html('<option value="">Please select...</option>');
 }

});
});