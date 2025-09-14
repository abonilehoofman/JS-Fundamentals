const arg = process.argv[2];
if ( arg && !isNaN(Number(arg))){
  console.log( "My number:" +parseht(arg));
}else{
  console.log(" Not a number");
}
