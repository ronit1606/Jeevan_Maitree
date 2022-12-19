const mongoose =require('mongoose');
const express =require('express');
const app=express();``
const ejs = require('ejs');
const bodyParser = require('body-parser');
const port=process.env.PORT || 3000;
require("./src/db/conn");
const HospitalRegisteration= require("./src/models/hosRegSchema");
const BedAvailability= require("./src/models/bedAvailSchema");
const BloodAvailability= require("./src/models/bloodAvailSchema");
const BloodBankRegisteration= require("./src/models/bloodBankRegSchema");
const BloodCampRegisteration= require("./src/models/bloodCampRegSchema");
const BookAppointment= require("./src/models/bookAppSchema");
const DonorRegistration= require("./src/models/donorRegSchema");
const PatientRegistration= require("./src/models/patientRegSchema");


app.use(bodyParser.urlencoded({extended: true}));
const { Int32, Decimal128 } = require('mongodb');
app.set('view engine','ejs');
app.use( express.static( "public" ) );
let hospitaldash;
app.get("/",function(req,res){
    // res.sendFile(__dirname+'hosReg.html');
    res.render('index');
});

app.get("/hosReg",function(req,res){
    // res.sendFile(__dirname+'hosReg.html');
    res.render('hosReg');
});

app.get("/hosDash",function(req,res){
    // res.sendFile(__dirname+'hosReg.html');
    res.render('hosDash',{
        hospitaldashboard:hospitaldash
    });
});

app.get("/aboutUs",function(req,res){
    // res.sendFile(__dirname+'hosReg.html');
    res.render('aboutUs');
});

app.get('/bedAvail',async(req,res)=>{
    
    const hospitalbeds =await HospitalRegisteration.findOne({hemail:hospitaldash.hemail});
      res.render('bedAvail',{
        
         
         hospital: hospitalbeds
  
  
  
      })
       
    
  
     
  })

app.get("/joinOurTeam",function(req,res){
    // res.sendFile(__dirname+'hosReg.html');
    res.render('joinOurTeam');
});

app.get("/DonorHome",function(req,res){
    // res.sendFile(__dirname+'hosReg.html');
    res.render('DonorHome');
});

app.get("/DonorLog",function(req,res){
    // res.sendFile(__dirname+'hosReg.html');
    res.render('DonorLog');
});

app.get("/bookApp",function(req,res){
    // res.sendFile(__dirname+'hosReg.html');
    res.render('bookApp');
});

app.get("/bloodBankReg",function(req,res){
    // res.sendFile(__dirname+'hosReg.html');
    res.render('bloodBankReg');
});

app.get("/PatientReg",function(req,res){
    // res.sendFile(__dirname+'hosReg.html');
    res.render('PatientReg');
});

app.get("/bloodCampReg",function(req,res){
    // res.sendFile(__dirname+'hosReg.html');
    res.render('bloodCampReg');
});

app.get("/DonorReg",function(req,res){
    // res.sendFile(__dirname+'hosReg.html');
    res.render('DonorReg');
});

app.get("/patientDash",function(req,res){
    // res.sendFile(__dirname+'hosReg.html');
    res.render('patientDash');
});

app.get("/contactUs",function(req,res){
    // res.sendFile(__dirname+'hosReg.html');
    res.render('contactUs');
});

app.get('/hospitalblood',(req,res)=>{
    HospitalRegisteration.find({},function(err,hospital){
      
      res.render('hospitalbloods',{
         
         hospitalList: hospital,
         
  
  
  
      })
       
     })
  
  })



app.get('/hospitalbeds',(req,res)=>{
    HospitalRegisteration.find({},function(err,hospital){
      
      res.render('hospitalbeds',{
         
         hospitalList: hospital,
         
  
  
  
      })
       
     })
  
  })

app.get("/bloodAvail",async(req,res)=>{
    let hospitalblood =await HospitalRegisteration.findOne({hemail:hospitaldash.hemail});
      
        res.render('bloodAvail',{
          
           
            hospital: hospitalblood
    
    
    
        })
         
      
});

app.post("/logout",function(req,res){
    hospitaldash=0;
    res.redirect('/');
})

app.post('/hospitalbeds/:id', function(req, res) {
    
    let type_beds=["General Beds","Oxygen Beds","ICU Beds without Ventilator","ICU Beds with Ventilator"];

    let nameofbeds=[{
        gen_occ:req.body.occu,
        gen_tot:req.body.totalBeds},{oxy_occ:req.body.occu,
      oxy_tot:req.body.totalBeds},{
        
icu_without_occ:req.body.occu,
icu_without_tot:req.body.totalBeds},{
    icu_with_occ:req.body.occu,
          icu_with_tot:req.body.totalBeds}]

    for(let i=0;i<type_beds.length;i++){
        if(req.body.Beds==type_beds[i]){
            let nob=nameofbeds[i];
            
            HospitalRegisteration.findByIdAndUpdate(req.params.id,nob,
                function (err, docs) {
    if (err){
    console.log(err)
    
    }
    else{
    console.log("Updated User : ", docs);
     
   
    }
    
    });
    
        }
       
    }
    
    
    res.redirect('/bedAvail');
    
    
})


app.post('/hospitalblood/:id', function(req, res) {
    
    let type_beds=["A -","A +","AB -","AB +","B -","B +","O -","O +"];
  
    let nameofbeds=[{aneg:req.body.qty},{apos:req.body.qty}
      ,{abneg:req.body.qty}
        ,{abpos:req.body.qty},{bneg:req.body.qty},{bpos:req.body.qty},{oneg:req.body.qty},{opos:req.body.qty}
          ]
  
    for(let i=0;i<type_beds.length;i++){
        if(req.body.bloodCat==type_beds[i]){
            let nob=nameofbeds[i];
            
           HospitalRegisteration.findByIdAndUpdate(req.params.id,nob,
                function (err, docs) {
    if (err){
    console.log(err)
    
    }
    else{
    console.log("Updated User : ", docs);
     
   
    }
    
    });
    
        }
       
    }
    
    
    res.redirect('/bloodAvail');
    
    
  })
  



app.post("/hosReg",function(req,res){
    let NewHosRegisteration =new HospitalRegisteration({
        hname: req.body.hname,
        hemail: req.body.hemail,
        hadd: req.body.hadd,
        hstate: req.body.hstate,
        hcity: req.body.hcity,
        hphone: req.body.hphone,
        hpin: req.body.hpin,
        hpass: req.body.hpass,
        gen_tot:0,
    
        gen_occ :0,
    
        oxy_tot : 0,
    
        oxy_occ : 0,
    
        icu_without_tot : 0,
    
        icu_without_occ : 0,
    
        icu_with_tot : 0,
    
        icu_with_occ : 0,
        apos: 0,
    
        aneg : 0,
    
        bpos : 0,
    
        bneg :0,
    
        opos : 0,
    
       oneg :0,
    
        abpos : 0,
    
        abneg : 0

        
    });
    NewHosRegisteration.save();
    res.redirect('hosDash');
});

app.post("/newhosLogin",async(req,res)=>{
    try{
        const hemail=req.body.hemail;
        const hpass =req.body.hpass;
       const useremail =await HospitalRegisteration.findOne({hemail:hemail});
       if(useremail.hpass==hpass){
        hospitaldash=useremail;
        res.redirect('/hosDash');
         
       }
       else{
        res.send("Invalid Login Details");
       }
    }
    catch(error){
        res.status(400).send("invalid Email")
    }
})

app.post("/bloodBankReg",function(req,res){
    let NewBBRegisteration =new BloodBankRegisteration({

        bbname: req.body.bbname,
        bbemail: req.body.bbemail,
        bbadd: req.body.bbadd,
        bbstate: req.body.bbstate,
        bbcity: req.body.bbcity,
        bbphone: req.body.bbphone,
        bbpin: req.body.bbpin,
        bbpass: req.body.bbpass,
        apos: 0,
    
        aneg : 0,
    
        bpos : 0,
    
        bneg :0,
    
        opos : 0,
    
       oneg :0,
    
        abpos : 0,
    
        abneg : 0
        
    });
    NewBBRegisteration.save();
    res.redirect('DonorHome');
});

app.post("/newbbLogin",async(req,res)=>{
    try{
        const bbemail=req.body.bbemail;
        const bbpass =req.body.bbpass;
       const useremail =await BloodBankRegisteration.findOne({bbemail:bbemail});
       if(useremail.bbpass==bbpass){
        res.status(201).render("index");
       }
       else{
        res.send("Invalid Login Details");
       }
    }
    catch(error){
        res.status(400).send("invalid Email")
    }

    res.redirect('DonorHome');
})


app.post("/bloodCampReg",function(req,res){
    let NewBloodCampRegisteration =new BloodCampRegisteration({

        mantype: req.body.mantype,
        manname: req.body.manname,
        manmn: req.body.manmn,
        manemail: req.body.manemail,
        campname: req.body.campname,
        campadd: req.body.campadd,
        state: req.body.state,
        distrcit: req.body.distrcit,
        bloodbank: req.body.bloodbank,
        campdt: req.body.campdt,
        strttym: req.body.strttym,
        endtym: req.body.endtym,
        lat: req.body.lat,
        long: req.body.long
        
    });
    NewBloodCampRegisteration.save();
    res.redirect('/');
});

app.post("/newbcLogin",async(req,res)=>{
    try{
        const manemail=req.body.manemail;
        const bcpass =req.body.bcpass;
       const useremail =await BloodCampRegisteration.findOne({manemail:manemail});
       if(useremail.bcpass==bcpass){
        res.status(201).render("index");
       }
       else{
        res.send("Invalid Login Details");
       }
    }
    catch(error){
        res.status(400).send("invalid Email")
    }
})

app.post("/bookApp",function(req,res){
    let NewBookAppointment =new BookAppointment({

        fname: req.body.fname,
        mname: req.body.mname,
        lname: req.body.lname,
        dob: req.body.dob,
        age: req.body.age,
        mob: req.body.mob,
        email: req.body.email,
        state: req.body.state,
        district: req.body.district,
        address: req.body.address,
        pincode: req.body.pincode,
        dtofapp: req.body.dtofapp,
        hosp: req.body.hosp,
        dr: req.body.dr,
        undertreatdr: req.body.undertreatdr,
        gen: req.body.gen
        
    });
    NewBookAppointment.save();
    res.redirect('/');
});

app.post("/PatientReg",function(req,res){
    let NewPatientRegisteration =new PatientRegistration({

        pname: req.body.pname,
        pemail: req.body.pemail,
        pmn: req.body.pmn,
        page: req.body.page,
        pheight: req.body.pheight,
        pweight: req.body.pweight,
        pbp: req.body.pbp,
        ppass: req.body.ppass
        
    });
    NewPatientRegisteration.save();
    res.redirect('patientDash');
});

app.post("/newPatientLogin",async(req,res)=>{
    try{
        const pemail=req.body.pemail;
        const ppass =req.body.ppass;
       const useremail =await PatientRegistration.findOne({pemail:pemail});
       if(useremail.ppass==ppass){
        res.status(201).render("index");
       }
       else{
        res.send("Invalid Login Details");
       }
    }
    catch(error){
        res.status(400).send("invalid Email")
    }
});

app.post("/DonorReg",function(req,res){
    let NewDonorRegisteration =new DonorRegistration({

       
    fname: req.body.fname,

    mname : req.body.mname,

    lname :  req.body.lname,

    dob :  req.body.dob,

    age :  req.body.age,

    mob :  req.body.mob,

    state : req.body.state,

    district : req.body.district,

    address : req.body.address,

    pincode :  req.body.pincode,

    bg: req.body.bg,

    gen :  req.body.gen,
    });
    NewDonorRegisteration.save();
    res.redirect('DonorHome');
});

app.listen(port,function(){
    console.log('server is running');

});

