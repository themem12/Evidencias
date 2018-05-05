function fibonacci(n){
	if(n>1){
		return fibonacci(n-1)+fibonacci(n-2);

	}
	else if(n==1){
		return 0;
	}
	else{
		return -1;
	}

}
function imprime(){
	for (var i = 0; i < 10; i++) {
		console.log(fibonacci(i)*-1);
	};
}