let signInForm = document.querySelector('#signup-form');

        signInForm.addEventListener('submit',e=>{
            let email = signInForm.email.value;
            let password = signInForm.password.value;
            e.preventDefault();
            console.log(email, password);
            //sign in user
            auth.createUserWithEmailAndPassword(email, password)
            .then(credential=>{
                // console.log(credential);
                console.log(credential.user);
            }).catch(err=>{
                console.log(err);
            });
            signInForm.reset();
            let signIn = document.querySelector("#modal-signup");
            signIn.remove();
        });
       

        //logout user
        let logout = document.querySelector('#logout');
        logout.addEventListener('click',e=>{
            e.preventDefault();
            auth.signOut()
            .then(data=>{
                
                console.log('izlogovan je')
            })
                .catch(err=>{
                console.log(err);
            });
        });

        //login
        let loginForm = document.querySelector('#login-form');
        loginForm.addEventListener('submit',e=>{
            e.preventDefault();
            let email = loginForm['login-email'].value;
            let password = loginForm['login-password'].value;

            auth.signInWithEmailAndPassword(email,password)
            .then(credential=>{
                console.log(credential.user);
            });
            loginForm.reset();
            let loginModal = document.querySelector('#modal-login');
            loginModal.remove();
        });
   




