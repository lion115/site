 var Person = {
            constuctor: function(name, age, gender){
                    this.name = name;
                    this.age = age;
                    this. gender = gender;
                    return this;
                },
                greet: function () {
                    document.write("Hello my name is" + " " + this.name);
                }
            };
            
            var person = new Person.constuctor("georg", 25, "meal");
            var person2 = new Person.constuctor("lupa", 22,"something");
            

document.write(person2);