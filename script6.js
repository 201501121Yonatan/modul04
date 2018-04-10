let years = [1965,2008,1992];

function printFullAge(years){
  let ages = [];
  let fullAges = [];
  
for( let i = 0; i < years.length; i ++){
  ages[i] = 2016- years[i];
  console.log(ages[i]);
}

for(i = 0; i < ages.length; i++){
  if(ages[i] >= 18){
    console.log('Person ' + (i+1) + ' is ' + ages[i] + ' years and is a full age. ');
    fullAges.push(true);
  } else{
        console.log('Person ' + (i+1) + ' is ' + ages[i] + ' years and is not a full age. ');
        fullAges.push(false)
  }
}

return fullAges;
}


printFullAge(years);





    
    
    
    