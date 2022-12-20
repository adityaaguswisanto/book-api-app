const books = require('../models/books');

class Book{
    static async create(title, author, summary, publisher){
        return new Promise(async (resolve, reject) => {
            try{
                await books.create({
                    title,
                    author,
                    summary,
                    publisher,
                }).then((data) => {
                    resolve(data);
                });
            }catch(error){
                console.error(error);
                reject(error);
            }
        });
    }

    static async update(id, title, author, summary, publisher){
        return new Promise(async (resolve, reject) => {
            try{
                await books.update({
                    title,
                    author,
                    summary,
                    publisher,
                },{
                    where : {
                        id
                    }
                }).then((data) => {
                    resolve(data);
                });
            }catch(error){
                console.error(error);
                reject(error);
            }
        });
    }

    static async get(){
        return new Promise(async (resolve, reject) => {
            try{
                await books.findAll().then((data) => {
                    resolve(data);
                });
            }catch(error){
                console.error(error);
                reject(error);
            }
        });
    }

    static async find(id){
        return new Promise(async (resolve, reject) => {
            try{
                await books.findOne(
                    {
                        where : {
                            id : id
                        }
                    }
                ).then((data) => {
                    resolve(data);
                });
            }catch(error){
                console.error(error);
                reject(error);
            }
        });
    }

    static async destroy(id){
        return new Promise(async (resolve, reject) => {
            try{
                await books.destroy(
                    {
                        where : {
                            id : id
                        }
                    }
                ).then((data) => {
                    resolve(data);
                });
            }catch(error){
                console.error(error);
                reject(error);
            }
        });
    }
}

module.exports = Book;