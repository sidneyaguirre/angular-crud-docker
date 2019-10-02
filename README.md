# Student crud

## Run application: 
`ng serve -o`


## Run the server in Docker: 
1. `cd api`
2. `docker-compose build`
3. `docker-compose up`

## Consume Student Endpoints in Postman
1. ### Crear	un	regisro
Create a document:
http://localhost:4000/student/add Method: POST
Body example: 
`{
	"student_name": "Arturito",
    "student_id_number": 1234,
	"courses": [
            {
                "matematicas": 4
            },
            {
                "ingles": 5
            }
        ]
}`

2. ### Entregar	una	colección:
Get the collection: http://localhost:4000/student/ Method: GET
Returns all documents from the Student collection.

3. ### Entregar	un	registro
Get a document: 
http://localhost:4000/student/get/:id Method: GET.
(The parameter id corresponds to the student_id_number field of a student in the database)

4. ### Modificar	un	registro 
Update/modify a Document: 
http://localhost:4000/student/update/:id Method: POST.
(The parameter id corresponds to the id of the student in the database)

5. ### Eliminar	un	registro
Delete a Document: http://localhost:4000/student/delete/:id Method: GET
(The parameter id corresponds to the id of the student in the database)

6. ### Modificar	todos	los	registros	que	cumplan	con	un	criterio
Update all documents that match a criteria: http://localhost:4000/student/update/?=q Method: POST
(The parameter q corresponds to the query to apply in the student collection)
returns all documents from the Student collection where each document match the query

7. ### Entregar	el	promedio	de	las	notas	de	todos	los	estudiantes	de	un	curso
Get the collection: http://localhost:4000/mean/:course Method: GET
(The mean will be get from all students in the course parameter)
Returns the mean of all students in a course from the Student collection.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
