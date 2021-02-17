let orderCoffee = {
	customerName: {
	firstName : 'Kaushal',
	lastName : 'Virani'
	},
	drinkType: ['Latte', 'Coffee', 'Espresso'],
	size: ['short', 'tall', 'grande', 'venti'],
	drizzle: 'no',
	whippedCream: 'no',
	sweetner: 'no',
	coldFoam: 'yes',
	dairy: ['cream', 'milk', 'almond milk'],

	coffeeOrder : function() {
	console.log("Name:: " + this.customerName.firstName);

	console.log("Drink Type:: " + this.drinkType[1]);	

	console.log("Size:: " + this.size[2]);

	window.alert("Customer Name:: " + this.customerName.firstName + "\nDrink Type:: " + this.drinkType[1] + "\nSize:: " + this.size[2]  + "\nDairy:: " + this.dairy[2]);

	if(this.drizzle === 'yes')
	{
		console.log("Drizzle:: " + this.drizzle);
		window.alert("Drizzle:: " + this.drizzle);
	}

	if(this.whippedCream === 'yes')
	{
		console.log("Whipped Cream:: " + this.whippedCream);
		window.alert("Whipped Cream:: " + this.whippedCream);
	}

	if(this.sweetner === 'yes')
	{
		console.log("Sweetner:: " + this.sweetner);
		window.alert("Sweetner:: " + this.sweetner);
	}

	if(this.coldFoam === 'yes')
	{
		console.log("Cold Foam:: " + this.coldFoam);
		window.alert("Cold Foam:: " + this.coldFoam);
	}

	console.log("Dairy:: " + this.dairy[2]);
		
	} 
};

orderCoffee.coffeeOrder();