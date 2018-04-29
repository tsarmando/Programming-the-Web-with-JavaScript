var express = require('express');
var app = express();

var Animal = require('./Animal.js');
var Toy = require('./Toy.js');


/*app.use('/', (req, res) => {
	res.json({ msg : 'It works!' });
});*/


app.get('/findToy', (req,res) => {
	let query = {}
	query.id = req.query.id	
	Toy.findOne(query, (err,toy) => {
		if(err){
			res.type('html').status(500)       
			res.send('Error ' + err)
		}
		if(toy)
			res.json(toy)
	
		else 
			res.json({})
	})
});

app.get('/findAnimals', (req,res) => {
	let query = {}
	if(req.query.species){
		query.species = req.query.species
	}
	if(req.query.trait){
		query.traits = req.query.trait //careful, should be traits not trait
	}
	if(req.query.gender){
		query.gender = req.query.gender 
	}
 
    if(Object.keys(query) != 0){
        Animal.find(query,'-_id name species breed gender age', (err,animals) => {
		if(err){
			res.type('html').status(500)       
			res.send('Error ' + err)
		}
		if(animals)
			res.json(animals)
	
		else res.json({})
	})
    }
    else res.json({})
});

app.get('/animalsYoungerThan', (req,res) => {
	let query = {} 
	if(req.query.age){
		query.age = {$lt: Number(req.query.age)}
	}
	if(query.age && Number(req.query.age)){
		Animal.find(query, (err,animals) => {
			if(err){
				res.type('html').status(500)       
				res.send('Error ' + err)
			}
			let count = 0; names = []	
			if(animals){
				count = animals.length	
				names = animals.map(animal => animal.name)
				if(count) 
					res.json({"count": count, "names":names})
				else  
					res.json({"count": count })
			}	
			else res.json({"count": count })
		})}
	else 
		res.json({})
});
//this is atrocious 
app.get('/calculatePrice', (req,res) => {
	let query = {}
	if(req.query.id){
		query.id= req.query.id
	}
	if(req.query.qty){
		query.qty= req.query.qty.map(el => Number(el))
	}
    		
	if(Array.isArray(query.id) && Array.isArray(query.qty) && query.id.length == query.qty.length){
        let map1 = new Map()
		query.id.forEach( (el,idx,arr) =>{
			if(!isNaN(query.qty[idx]) && query.qty[idx]>0){
				if(map1.has(el)){
					let temp = map1.get(el)	
					temp += query.qty[idx]
					map1.set(el,temp)
				}
				else 
					map1.set(el,query.qty[idx])
			}
		})	
		Toy.find({"id": Array.from(map1.keys())}, (err,toys) => {
			if(err){
				res.type('html').status(500)       
				res.send('Error ' + err)
			}
            if(toys.length){
                let map2 = new Map()
                toys.forEach((toy) => map2.set(toy.id, toy.price));
                let items = [...toys].map(toy => 
                        {return { "item": toy.id, "qty": map1.get(toy.id), 
			"subtotal": map2.get(toy.id)*map1.get(toy.id)}} )
                let totalPrice = [...items].map(price => price.subtotal).reduce((a,b) => a+b,0)

                res.json({ "items": items, "totalPrice": totalPrice})}
            else 
                 res.json({"items":[],"totalPrice":0})
                 
		})
	}
	else 
		res.json({})
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
    });



// Please do not delete the following line; we need it for testing!
module.exports = app;

