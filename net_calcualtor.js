//function that takes two parameters(gross,benefit)

function calculateTax(gross, benefits){
    // net = gross - (kra + nssf + nhif)
    kra = calcKra(gross);
    console.log(kra);

    nssf = calcNSSF(gross);
    console.log(nssf);

    nhif = calcNHIF(gross);
    console.log(nhif);

    net_pay = gross - (kra + nssf + nhif);
    return net_pay;
}

// second function that calculates kra_tax.
function calcKra(gross){
    let kra_tax = 0;
    if (gross <= 24000){ //10%
        kra_tax = (10/100) * gross;

    } else if (gross >= 24001 && gross <= 32333 ){//25%
        kra_tax = (25/100) * gross;

    } else {//30%
        kra_tax = (30/100) * gross;
    }

    return kra_tax;
}

// function that calculates nssf_tax.
function calcNSSF(gross){
    let nssf = 0;
    if(gross <= 6000){ //6%
        nssf = (6/100) * gross;
    }
    else if(gross >= 6001 && gross <= 18000){
        nssf = (6/100) * gross;
    }
    else{
        nssf = gross -400;
    }
    return nssf;
}

// function that calculates nhif_tax.
function calcNHIF(gross){
    let nhif = 0;
    if(gross <= 5999){
        nhif = gross - 150
    }
    else if(gross >= 6000 && gross <= 7999){
        nhif = gross - 300;
    }
    else if(gross >= 8000 && gross <= 11999){
        nhif = gross - 400;
    }
    else if(gross >= 12000 && gross <= 14999){
        nhif = gross - 500;
    }
    else if(gross >= 15000 && gross <= 19999){
        nhif = gross - 600;
    }
    else if(gross >= 20000 && gross <= 24999){
        nhif = gross - 750;
    }
    else if(gross >= 25000 && gross <= 29999){
        nhif = gross - 850;
    }
    else if(gross >= 30000 && gross <= 34999){
        nhif = gross - 900;
    }
    else if(gross >= 35000 && gross <= 39999){
        nhif = gross - 950;
    }
    else if(gross >= 40000 && gross <= 44999){
        nhif = gross - 1000;
    }
    else if(gross >= 45000 && gross <= 49999){
        nhif = gross - 1100;
    }
    else if(gross >= 50000 && gross <= 59999){
        nhif = gross - 1200;
    }
    else if(gross >= 60000 && gross <= 69999){
        nhif = gross - 1300;
    }
    else if(gross >= 70000 && gross <= 79999){
        nhif = gross - 1400;
    }
    else if(gross >= 80000 && gross <= 89999){
        nhif = gross - 1500;
    }
    else if(gross >= 90000 && gross <= 99999){
        nhif = gross - 1600;
    }
    else{
        nhif = gross - 1700;
    }
    return nhif;
}

let final_net = calculateTax(100000, 70000);
console.log("Net Pay : "+final_net);