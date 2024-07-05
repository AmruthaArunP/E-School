$('#changepassword,#class').validate({
        submit: {
            settings: {
                inputContainer: '.field'
            },
            callback: {
                onBeforeSubmit: function (node) {
					
                    myBeforeSubmitFunction(':D', ':)', node);

                },
                onSubmit: function (node) {

                 //   console.log('#' + node.id + ' has a submit override.');

                    node[0].submit();
					return true;
                }
            }
        },
        debug: true
    });
	 function myBeforeSubmitFunction(a, b, node) {

        console.log(a, b);

        $(node).find('input:not([type="submit"]), select, textarea').attr('readonly', 'true');
        $(node).append('<div class="ui active loader"></div>');
		return true;
    }