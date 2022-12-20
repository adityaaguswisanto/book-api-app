const repository = require('../repositories/books');

class Book{
    static async create(request, response){
        try {
            const { title, author, summary, publisher } = request.body;
            await repository.create(title, author, summary, publisher).then((data) => {
                response.status(200).json({
                    message: "Create Book Success",
                    data: data,
                });
            }).catch((error) => {
                response.status(500).json({
                    message: "Create Book Failure",
                });
            });
        } catch {
            response.status(500).json({
                message: "Internal Server Error",
            });
        }
    }

    static async update(request, response){
        try {
            const { id } = request.params;
            const { title, author, summary, publisher } = request.body;
            let data = await repository.update(id, title, author, summary, publisher).catch((error) => {
                response.status(500).json({
                    message: "Update Book Failure",
                });
            });
            if(!data[0]){
                response.status(500).json({
                    message: "Data Not Found",
                });
            }else{
                response.status(200).json({
                    message: "Update Book Success",
                });
            }
        } catch {
            response.status(500).json({
                message: "Internal Server Error",
            });
        }
    }

    static async get(request, response){
        try {
            let data = await repository.get().catch((error) => {
                response.status(500).json({
                    message: "Get Book Failure",
                });
            });
            if(data.length == 0){
                response.status(200).json({
                    message: "Get Book Success",
                    data: [],
                });
            }else{
                response.status(200).json({
                    message: "Get Book Success",
                    data: data,
                });
            }
        } catch {
            response.status(500).json({
                message: "Internal Server Error",
            });
        }
    }

    static async find(request, response){
        try {
            const { id } = request.params;
            let data = await repository.find(id).catch((error) => {
                response.status(500).json({
                    message: "Search Book Failure",
                });
            });
            if(!data){
                response.status(500).json({
                    message: "Data Not Found",
                    data: data,
                });
            }else{
                response.status(200).json({
                    message: "Find Book Success",
                    data: data,
                });
            }
        } catch {
            response.status(500).json({
                message: "Internal Server Error",
            });
        }
    }

    static async destroy(request, response){
        try {
            const { id } = request.params;
            let data = await repository.destroy(id).catch((error) => {
                response.status(500).json({
                    message: "Delete Book Failure",
                });
            });
            if(!data){
                response.status(500).json({
                    message: "Data Not Found",
                });
            }else{
                response.status(200).json({
                    message: "Delete Book Success",
                });
            }
        } catch {
            response.status(500).json({
                message: "Internal Server Error",
            });
        }
    }
}

module.exports = Book;