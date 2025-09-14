const arg = process.argv[2];
if ( arg && !isNaN(Number(arg))){
  console.log( "My number:" +parseInt(arg));
}else{
  console.log("Not a number");
}
