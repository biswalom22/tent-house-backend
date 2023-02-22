export interface productRequest {
	productTitle:string;
	quantityTotal: number;
	price:number;
}

export interface ProductResponse extends productRequest {
	productId: number;
	quantityBooked: number;
	price: number;
}

export interface customerRequest {
	customerName:string;
}

export interface customerResponse extends customerRequest {
	customerId: number;
}

export interface transactionRequest {
	transactionType: string;
	quantity:number;
	product:string;
	customer:string;
}

export interface transactionResponse extends transactionRequest{
	transactionId: number;
	transactionDateTime: Date;
	productId:number;
	customerId:number;
	available:number;
}

export interface UserRequest {
	email: string;
	password: string;
}

