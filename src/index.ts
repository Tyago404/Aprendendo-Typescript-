//Tipos estáticos --------------
    let greeting:string = "Hello, world!";
    /*Quando declaramos uma let como string, não podemos alterar o valor dela para outro tipo */
    //greeting = 32; //error
    //greeting = 'tiago' //Correct

    //temos vários tipos como: string, number, boolean e etc..
//Tipos estáticos  --------------

//Anotação de tipo  --------------
    //Se criarmos uma variável sem tipo, o typescript usa 'Inferência de tipo' que atribui automaticamente o tipo
        let price = 100
        // price = "100" //Error

    //O tipo 'Any' é um tipo de pode representar qualquer tipo, podendo até ser sobrescrevido 
        let anything:any = 'What im?'
        anything = 100 //Correct
        //isso deve ser usado com moderação pos remove os benefícios da segurança de tipos
//Anotação de tipo  --------------

//Tipos de União  --------------
    //Permite definir múltiplos tipos para uma variável
    let variable: number | string | boolean | null | undefined
    variable = 32
    variable = true
    variable = 'now im a string'
//Tipos de União  --------------

//Arrays  --------------
    //Para definir um array precisamos indicar que essa variável irá armazenar um array do tipo dela
    let numArray:number[] = [1,2,3,4,5]
    let strArray:string[] = ['a','b','c','d']

    //modificando um valor
    numArray[4] = 20;
    strArray.push('e')

    //array de dois tipos
    let stuff:(number|string)[] = [1,2,3,'a','c','d']
//Arrays  --------------

//Objetos  --------------
//Declaramos igual ao Js porém primeiro precisamos tipar os atributos do objeto
    let person: {
        name:string,
        last_name:string,
        age:number,
        scores: (number[] | string[]),
    }
    person = {
        name:'Nadson',
        last_name:'Ferinha',
        age: 30,
        scores: [1,2,3,4,5]
    }
    //Podemos interagir com os objetos
    const personName:string = person.name
    person.name = 'Tiago'
//Objetos  --------------

//Aliases de tipo  --------------
    //Ou apelidos de tipo são para dar nomes aos tipos que nós mesmos criamos. Utilizamos a palavra-chave 'type'
    type Human = {
        name:string;  //ponto e vírgula
        age:number;
    }
    //Utilizando nosso tipo criado
    const nadson:Human = {name:'Nadson',age:30}

    //Podemos criar um type para dar a um tipo existente um novo nome
    type Prices = number[];
    const precos:Prices = [2.50, 10.99, 11.99]

    type UserId = number | string;
    const id:UserId = "#222Ab3c" + 404
//Aliases de tipo  --------------

//Tipos de Interseção  --------------
    //Permitem que você combine vários tipos em um único tipo  
    type Person = {
        name:string
    }
    type Employee = {
        employeeId:number;
    }
    type PersonEmployee = Person & Employee; //usamos '&' para combinar os tipos

    //para usar o tipo de interseção a variável deve satisfazer todos os tipos
    const someone: PersonEmployee = {
        name:'Nadson',
        employeeId: 2469,
    }

    //Podemos fazer de uma forma mais simples
    type Dog = {
        name:string
    }
    type DogSituation = Dog & {
        castrated:boolean
    }
    const junin:DogSituation = {name:'junin', castrated:true}
//Tipos de Interseção  --------------

//Interfaces  --------------
    //Semelhante aos types, interfaces permite você definir tipos personalizados para objetos
    interface Animal { //sem '=' 
        name:string
    }
    //Funciona exatamente como o type
    const pessoa:Animal = {name:'Nadson'}

    //Utilizando a palavra-chave 'extends' podemos criar uma nova interface que herda uma existente
    interface Pet extends Animal {
        species:string;
    }
    const junio:Pet = {name:'junio', species:'stray'}
//Interfaces  --------------

//Propriedades Especiais  --------------
    
    //OPCIONAIS
        //Quando utilizamos '?' significa que essa propriedade é opcional 
        interface X {
            firstName:string,
            lastName:string,
            middleName?:string, //opcional quando for utilizada em um objeto
        }
        const x:X = {
            firstName:'Nadson',
            lastName:'Ferinha',
            //middleName é opcional e por isso não causa erro ao não ser declarado
        }

    //READONLY
        //Quando utilizamos 'readonly' impede a modificação após a inicialização
        type Character = {
            readonly id:number; //Esse valor não pode ser mudado após ser declarado
            name:string;
        }

        const joaozin:Character = {
            id:1, //O valor foi declarado aqui e não poderá ser mudado mais
            name:'Joaozin'
        };
            // joaozin.id = 3 //erro por conta do readonly
//Propriedades Especiais  --------------

//Funções  --------------
        //Em ts devemos definir o tipo de retorno de uma função
            function  greet():string{
                return 'Hello, World!'
            }
                //console.log(greet())

        //Quando não temos retorno utilizamos o tipo 'void'
            function greet1():void{
                console.log('Hello, World!')
            }
                //greet1()

        //Quando passamos argumentos, precisamos também definir seus tipos
        function greet2(name:string, last_name:string):void{
            console.log(`Hello ${name} ${last_name}`)
        }
                //greet2('Nadson' , 'Ferinha')
//Funções  --------------

//Tipos de Funções e assinatura de funções  --------------
    //Podemos declarar que uma variável pode conter uma função utilizando arrow (anotação de tipo, assinatura de função) 
        let myFunction:(x:number,y:number)=>number;

    //Agora podemos criar uma funçao a partir da nossa variável
        myFunction = function(x:number, y:number):number{
            return x + y
        }
    //armazenamos em uma variável o resultado  
        const result = myFunction(5,5)
        // console.log(result)

    //Utilizando callback
        type Callback = (data:string) => void; //tipo de função para callback

        function processString(input:string, callback:Callback):void{
            const processed = input.toUpperCase();
            callback(processed)
        }

        const logResult:Callback = (data:string)=>{
            console.log(data)
        }
        // processString("i'm hungry!",logResult) 

//Tipos de Funções e assinatura de funções    --------------

//Parâmetro Opcionais e Padrões  --------------
    //Podemos tornar um parametro de uma função opcional veja:
            function Hello(name:string, age?:number):void{
                if(age !== undefined){
                    console.log(`Hello ${name}, you are ${age} years old`)
                }else{
                    console.log(`Hello ${name}!`)
                }
            }
            //Podemos chamar a função sem fornecer age
                // Hello('Nadson') 
            
    //Podemos também adicionar um valor padrão ao parametro
            function TotalPrice(price:number, taxRate:number=0.05):number{
                return price + (price * taxRate)
            }
                //console.log(TotalPrice(60))
                    //também podemos alterar o valor padrão: console.log(TotalPrice(60,00.8))
//Parâmetro Opcionais e Padrões  --------------

//Classes  --------------
    //Utilizamos a palavra-chave 'Class' para criar uma classe
            //Em seguida criamos um constructor 
        
        class People{
        //precisamos tipar os parametros
            name:string
            constructor(name:string){ 
                this.name = name
            }
        }
        //Agora podemos instanciar a classe
            const jaozao = new People('Jaozao')
      
    //PUBLIC PRIVATE PROTECTED -  Modificadores de acesso
         //PUBLIC Torna a propriedade da classe publica e acessivel de fora, por padrão todas já são publicas
         //PRIVATE Torna a propriedade da classe acessivel apenas dentro da classe

         class PublicPrivate{
            public data:string 
            private id:number

            constructor(data:string, id:number){
                this.data = data
                this.id = id
            }
         }
         const test = new PublicPrivate('DataContent', 123)
            // console.log(test.id) //Erro pois a propriedade id só é acessada dentro da classe pois é privada
         
        
        //PROTECTED  Torna a propriedade da classe acessivel apenas dentro da classe e de suas subclasses 
        class Employeee {
            protected departament:string;
            constructor(departament:string){
                this.departament = departament
            }
        }

        class Manager extends Employeee{
            printDepartament(){
                console.log(this.departament)
            }
        }
        const manager = new Manager('Sales')
       // console.log(manager.printDepartament()) //é acessivel até aqui
//Classes  --------------

//Classes abstratas  --------------
    //São classes que não podem ser instanciadas diretamente
        abstract class X{
        }
        // const y = new X() //ERROR

    //Também temos metodos abstratos
        abstract class Pet1 {
          public abstract makeNoise():void //geralmente podemos combinar modificadores de acesso  
        }
    //Para utilizar essa classe precisamos extender elas

    class Cat extends Pet1 {
        makeNoise(): void {
            console.log('MEOW')
        }
    }
    const gatin = new Cat()
       // gatin.makeNoise()
//Classes abstratas  --------------

//Enums  --------------
    //São um conjunto de constantes nomeadas, iniciamos com a palavra-chave 'Enum'
        //Definimos um tipo e em seguida os valores separados por ,
            enum Directions{
                Up,
                Down,
                Left,
                Right
            }

    //Cada numero tem um index, iniciando com 0
        // console.log(Directions.Up) // === 0 
    
    //Podemos definir manualmente o valor dos membros do enum, fazemos com o primeiro e os demais seguirão a ordem
            enum Directions2{
                Up = 5,
                Down, //valor 6
                Left, //valor 7
                Right, //valor 8
            }
            //Para acessar acessar um membro do enum
                console.log(Directions2[5]) // === Up



//PT2
    //Podemos usar valores de string também
            enum MusicGenres{
                ThrashMetal = 'THRASHMETAL',
                Metal = 'METAL',
                BlackMetal = 'BLACKMETAL'
            }
//Enums  --------------

//Generics  --------------
//Imagine que temos uma função que retorna o maior numero em um array
    function findMaxNumber(array: number[]): number {
        return array.reduce((max, item) => (item > max ? item : max));
    }

//Se quisermos criar a mesma função agora com strings, devemos reescrever tudo novamente 
    function findMaxString(array: string[]): string {
        return array.reduce((max, item) => (item > max ? item : max));
    }

//Para evitar reescrever a mesma função, podemos reutilizá-la passando qualquer tipo
    //Utilizamos <T> para indicar que iremos utilizar um tipo Generico

    function findMaxGeneric<T>(array: T[]): T {
        return array.reduce((max, item) => (item > max ? item : max));
}

//Generics em classes
  //Utilzamos <T> para indicar que iremos utilizar uma classe generica
    class Container<T> {
        constructor(public value: T){}
    }

  //Agora podemos instanciar a mesma classe com qualquer tipo
    let container1 = new Container('s') //string
    let container2 = new Container(10) //number

  //Se definirmos uma instancia como string, não podemos assinar ela como outro tipo depois
    let containe3 = new Container('s')
    // container3 = 10; //Error

//////////PT2
//Podemos declarar um array de numberos de duas formas
  const numbers1: number[] = [1,2,3];
  const numbers2: Array<number> = [4,5,6];

//Vamos aprender a instanciar classes genericas 
  class BoxClass<T>{
    content: T
    constructor(content:T){
      this.content = content;
    }
  }

  //Damos o tipo com o nome da classe e declaramos o tipo entre '<>'
  const StringBoxClass:BoxClass<string> = new BoxClass('Hello');


//INTERFACES GENERICS
    interface BoxInterface<T> {
    content: T
    }

//Damos o tipo com o nome da interface e declaramos o tipo entre '<>'
    const StringBoxInterface:BoxInterface<string> = {
    content:'Hello!'
    }

//Porém o typescript é capaz de inferir o tipo sem precisar de tudo isso exemplo:
    const InfClass = new BoxClass(10)
//Generics  --------------


//UTILS
const letters:string[] = ['a','b','c'];

//Resgatando valores especificos
    const [, , x] = letters
    console.log(x)


//Resgatando e modificando valores ///////////////////////////////////////////
    // let [xx,zz,yy] = letters
    // xx = 'z'
    // console.log(xx)

//Destructuring em function ///////////////////////////////////////////
    function values(a:number,b:number){
        const som = a + b;
        const min = a - b;
        const div = a / b;
        const times = a * b;

    return [som,min,div,times]
    }

const [som, min, div, times] = values(10,20)
console.log(div);
 
//Outro exemplo ////////////////////////////////
interface Human {
    age:number;
    nome:string;
    color:string;
    last_Name:string;
}

const Human1:Human = {
    age:23,
    nome:'Nadson',
    color:'Preto',
    last_Name:'Ferinha'
}

function JaozinSentence({nome,color}:Human):void {
    console.log(`Hello! My name is${nome}, i'm ${color} `)
}

JaozinSentence(Human1);

//////Desestruturando mais a fundo em objetos 
interface Human2 {
    name:string;
    age:number;
    last_name:string;
    parents:{
        aunt:string;
        sister:string;
        grandpa:string;
    }
}

const Profile:Human2 = {
    name:"Nadson",
    age:30,
    last_name:"Ferinha",
    parents:{
        aunt:"AuntNadsa",
        sister:"SisNadsa",
        grandpa:"GrandNadso"
    }
}

function Destructuring({name,age,parents:{grandpa}}:Human2):void{
    console.log(`Hello ${name} you're ${age}. Your grandpa is ${grandpa}`)
}
Destructuring(Profile)

