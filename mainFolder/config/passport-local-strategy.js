//Modules
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

//Model
const employeeCollection= require('../models/Employee')

passport.use(new LocalStrategy({
    usernameField: 'email',
    passReqToCallback: true,
},
async (req, email, password, done) => {

    try {

        const user = await employeeCollection.findOne({ email: email });

        if (!user || user.password !== password) {
            console.log("Invalid Username/Password");
            return done(null, false);
        }

        return done(null, user);

    } catch (err) {

        console.log("Error in Finding User --> Passport");
        return done(err);

    }

}));

//Serializing Model to Decide the field to store in cookie

passport.serializeUser((user,done)=>{
    done(null,user.id)
})

//Deserializing Data form cookie to a User Model

passport.deserializeUser((id,done)=>{
    employeeCollection.findById(id,(err,user)=>{
        if (err) {
            console.log("Error in Finding User --> Passport")
            return done(err)
        }

        if(!user) return done(null,false)

        return done(null,user)
    })
})


passport.checkAuthentication = (req,res,next)=>{
    //If User is Signed in
    if(req.isAuthenticated()){
        return next();
    }
    //If User is Not Signed in
    else {
        // req.flash('error','Your Are Not Logged-in')
        return res.redirect("/register")
    }


}


passport.setAuthenticatedUser = (req,res,next) =>{
    if(req.isAuthenticated()){
        // User which the req have is sent to the res
        res.locals.user = req.user
    }
    next()
}



module.exports = passport;
