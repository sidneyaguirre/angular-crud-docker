# Student crud 📃

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
	"student_id_number": 1265,
	"courses": {
		"ingles": 4,
		"matematicas": 4.5,
		"literatura": 5
	},
	"semester": 1,
	"active": true
}`

the Student Schema is defined as:
`{
    student_name: {
      type: String,
      required: true
    },
    student_id_number: {
      type: Number,
      required: true
    },
    courses: {
      type: JSON
    },
    semester: {
      type: Number
    },
    active: {
      type: Boolean,
      required: true
    }
  }`

2. ### Entregar	una	colección:
Get the collection: http://localhost:4000/student/ <br>
Method: GET<br/>
Returns all documents from the Student collection.

3. ### Entregar	un	registro
Get a document: 
http://localhost:4000/student/get/:id <br/>
Method: GET <br/>
(The parameter id corresponds to the student_id_number field of a student in the database)

4. ### Modificar	un	registro 
Update/modify a Document: 
http://localhost:4000/student/update/:id Method: POST.
(The parameter id corresponds to the id of the student in the database)

5. ### Eliminar	un	registro
Delete a Document: http://localhost:4000/student/delete/:id Method: GET
(The parameter id corresponds to the id of the student in the database)

6. ### Modificar	todos	los	registros	que	cumplan	con	un	criterio
Update all documents that match a criteria: http://localhost:4000/student/semester Method: POST
Updates all documents from the Student collection incrementing the semester where the student is active

7. ### Entregar	el	promedio	de	las	notas	de	todos	los	estudiantes	de	un	curso
Get the collection: http://localhost:4000/student/mean/:course Method: GET
(The mean will be get from all students in the course parameter)
Returns the mean of all students in a course from the Student collection.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

# Containers - Docker 🐳
Advantages of using containers:
- Containers are light (unlike virtual machines)
- Portable
- Easy to reuse
- Each container is independent
- Fast Release
- Provides an eficient usage of resources

Many things, like a Data Base, a OS, a program can be containerized. We connect to a host (kernel of the OS) instead of connecting to the OS itself.

It is important to use Containers because they have several advantages (like mentioned above) compared to other tools like virtual machines, so it can improve performance in building projects.

Maintenability and deployment, for example, can be enhanced by using containers, as they are also small, and easy to manage.
