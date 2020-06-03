$(document).ready(function(){
    $("#signform").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
                
            
            
            },
            sname:{
                required:true
            },
            ema:{
                required:true,
                email:true

            }

            

            

        }
        
    })
})