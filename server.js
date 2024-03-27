
const axios = require('axios');
const Product = require('./Model/DataSchema')
axios.get("https://s3.amazonaws.com/roxiler.com/product_transaction.json").then(function(res){
        
        const posts = res.data;
        
        for(let i=0; i<posts.length; i++){
            const Prods= new Product({
                id:posts[i]['id'],
                title:posts[i]['title'],
                price:posts[i]['price'],
                description:posts[i]['description'],
                category:posts[i]['category'],
                image:posts[i]['image'],
                sold:posts[i]['sold'],
                dateOfSale:posts[i]['dateOfSale'],
                
            })
            Prods.save();
        }
        
        
    })