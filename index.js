const mysql = require('mysql2');
const inquirer = require('inquirer')

// database connection
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      // Enter your MySQL password
      password: '',
      database: 'employeeTracker_db'
    },
    console.log(`Connected to database.`)
  );


const viewEmployees = () => {
    db.promise().query('SELECT first_name FROM employees').then(employees => {
        console.table(employees);
        init()
    })
    // add schema for employees table
};
const viewDepartments = () => {
    db.promise().query('SELECT * FROM departments').then(departments => {
        console.table(departments);
        init()
    })
};
const viewRoles = () => {
    db.promise().query('SELECT title FROM roles').then(roles => {
        console.table(roles);
        init()
    })
};
const addEmployee = () => {
    prompt([
        {
            type: 'imput',
            name: 'first_name',
            message: `What is this employee's first name?`
        }, {
            type: 'imput',
            name: 'last_name',
            message: `What is this employee's last name?`
        },{

        }
    ])
    db.promise().query('INSERT INTO employee(id, first_name, last_name, role_id, manager_id').then(employees =>{
        console.table(employees)
        init()
    })
};
const addDepartment = () => {
    
};
const addRole = () => {
    
};
const updateRole = () => {
    
};
const exit = () => {
    
};

function init(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'choices',
            message: "What would you like to do?",
            choices: ['View Employees',
                'View Departments',
                'View Roles',
                'Add Employee',
                'Add Department',
                'Add Role',
                'Update Employee Role',
                'Exit'
            ]
        }
    ]).then((answer) =>{
        const choices = answer.choices;
        console.log(choices)
        if (choices === 'View Employees'){
            viewEmployees()
        }else if (choices === 'View Departments'){
            viewDepartments()
        }else if(choices ===  'View Roles'){
            viewRoles()
        } else if(choices ===  'Add Employee'){
            addEmployee()
        }else if (choices === 'Add Department'){
            addDepartment()
        }else if (choices === 'Add Role'){
            addRole()
        }else if (choices ===  'Update Employee Role'){
            updateRole()
        }else if (choices ===  'Exit'){
            exit()
        }
    })
}
init()