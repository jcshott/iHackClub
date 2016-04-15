
jQuery(document).ready(function() {
     /*
        Detect device type, or what kind of mobile device
    */
    checkDevice();
    
    /*
        Login form validation
    */
    $('form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            loginUsername: {
                validators: {
                    notEmpty: {
                        message: 'The username (email) is required and cannot be empty'
                    }
                }
            },
            loginPassword: {
                validators: {
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    }
                }
            },
            firstname: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required and must be at least two characters long'
                    },
                    stringLength: {
                        min: 2,
                        max: 30,
                        message: 'First name must be between 2 and 30 characters long'
                    }
                }
            },
            lastname: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required and must be at least two characters long'
                    },
                    stringLength: {
                        min: 2,
                        max: 30,
                        message: 'Last name must be between 2 and 30 characters long'
                    }
                }
            },
            gender: {
                validators: {
                    notEmpty: {
                        message: 'The gender is required'
                    }
                }
            },
            birthday: {
                validators: {
                    notEmpty: {
                        message: 'The birthday date is required'
                    },
                    date: {
                        format: 'MM/DD/YYYY',
                        message: 'birthday need to be in mm/dd/yyyy format'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            signupPassword: {
                validators: {
                    notEmpty: {
                        message: 'The password is required and must be at least eight characters long'
                    },
                    stringLength: {
                        min: 8,
                        max: 30,
                        message: 'Password must be between 8 and 30 characters long'
                    }
                }
            },
            confirmPassword: {
                validators: {
                    notEmpty: {
                        message: 'The confirmed password is required and can\'t be empty'
                    },
                    identical: {
                        field: 'signupPassword',
                        message: 'The password and its confirm are not the same'
                    }
                }
            }    
            
            
            
            /* <-- removed comma */
        } /* added closing brace */
    });
    
});

function checkDevice() {
    var deviceType,
        device = {
        is_android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        is_blackberry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        is_iphone: function() {
            return navigator.userAgent.match(/iPhone/i);
        },
        is_ipad: function() {
            return navigator.userAgent.match(/iPhone/i);
        },
        is_ipod: function() {
            return navigator.userAgent.match(/iPod/i);
        },
        is_opera: function() {
            return navigator.userAgent.match('Opera Mini/i');
        },
        is_ios: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        is_windows_phone: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        is_mobile: function() {
            deviceType = "mobile";
            return (device.is_android() || device.is_blackberry() || device.is_ios() || device.is_windows_phone() );
        },
        is_mac: function() {
            return navigator.userAgent.match(/Mac/i);
        },
        is_win: function() {
            return navigator.userAgent.match(/Window/i);
        }

    };

    if ( device.is_android() ) {
        // The User Is Using An Android Device       
        deviceType = "Android";
    }
    else if( device.is_blackberry() )
    {
        // The User Is Using A Blackberry
        deviceType = "BlackBerry";
    }
    else if( device.is_iphone() )
    {
        // The User Is Using An iPhone
        deviceType = "iPhone";
    }
    else if( device.is_ipad() )
    {
        // The User Is Using An iPad
        deviceType = "iPad";
    }
    else if( device.is_ipod() )
    {
        // The User Is Using An iPod
        deviceType = "iPod";
    }
    else if( device.is_opera() ) {
        // The User is using Opera Mini
        deviceType = "Operat Mini";
    }
    else if( device.is_ios() )
    {
        // The User Is Using An ios
        deviceType = "iPhone|iPad|iPod";
    }
    else if( device.is_windows_phone() )
    {
        // The User Is Using An iPod
    //    document.write("You Are Using A Windows phone");
        deviceType = "IEMobile";
    } 
    else if( device.is_mac) {
        // The user is using a mac
        deviceType = "Macbook";
    }
    else if( device.is_win) {
        // The user is using a window
        deviceType = "Windows";
    }

    if( !device.is_mobile() )
    {
        // The User Is Using A Mobile Phone
        deviceType = "Not a mobile device."
    }
    console.log("Device type:", deviceType);
}

