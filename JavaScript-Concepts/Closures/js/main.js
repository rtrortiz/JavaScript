
   
	function Employee(firstName, lastName){

        //Public-created using 'this' keyword
        this.firstName = firstName;
        this.lastName = lastName;

        //Private-created using the 'var' keyword within an object-can be accessed using private functions and priviledged methods
        var privateFullName;//this will not be available to use outside this function

        //Private Function/Closure- a function within a function that can not be accessed outside this function
        var privateGetFullName = function(){
            privateFullName = firstName + "  "+ lastName;
            return privateFullName;
        }

        //Priviledged Function-allowed the priviledge to access a private member
        this.priviledgedGetFullName = function(){
            return privateGetFullName();
        }

        //Public function//Prototypal inheritance-created using the constructor's prototype and adding a method to it
        //can't call the private function 'privateGetFullName()' but the priviledged function 'priviledgedGetFullName()' can
        Employee.prototype.publicGetFullName(){

            return this.privilegedGetFullName();
        }

    }

    var employee = new Employee("James", "Hetfield");

    document.write(employee.publicGetFullName() + "<br/>");//works
    document.write(employee.privilegedGetFullName() + "<br/>");//works

    employee.privateGetFullName();//Result-undefined-can't access private members outside the Employee constructor
    employee.privateFullName;//Result-undefined-can't access private members outside the Employee constructor

    employee.privateFullName = "ABCDEFG";//this adds a new public member to the Employee constructor copy/instance stored in 'employee', creates another 'this', but doesn't change the original Employee constructor//this also does not override the private member of the same name 'privateFullName', they are different. One is public and the other is private
    document.write(employee.privateFullName);//contains "ABCDEFG"

    employee.publicGetFullName();//contains the string "ABCDEFG"//same name as the private member, both are different.
