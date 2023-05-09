// function sum(a: number, b: number)
// {
//     return a+b
// }
// console.log(sum(3, 5))

// let prova: boolean = true

//===========OBJECT
// let persona: 
// {
//     nome: string, 
//     cognome: string, 
//     eta: number
//     indirizzo:
//     {
//         via: string,
//         civico: number,
//         citta: string
//     }
// }

// persona = 
// {
//     nome: 'luca',
//     cognome: 'rossi',
//     eta: 8,
//     indirizzo:
//     {
//         via: '',
//         civico: 8,
//         citta: ''
//     }
// } 

// function GetData(data: {id: number, username: string, psw: string}){console.log(data.id)}

// console.log(GetData({id:1, username: 'user', psw:'psw'}))

//===========ARRAY
// const array: any[] = [1, 2, 3]

//===========TUPLE (array a dimensione fissa)
// const tupla: [x: number, y: number][]= [[32, 12], [13, 14]]
// let tuple: [x: number, y: number] = [21, 21]

//Union (si possono unire i tipi di una variabile)
// let prova: string | number | string[] = ['s', 'c']

//===========CUSTOM TYPE
// type Persona = 
// {
//     nome: string, 
//     cognome: string, 
// }

// let persona: Persona

// persona = {
//     nome: 'luca',
//     cognome: 'rossi'
// }

// type Prova = string | number

// function funzione(persona: Persona, prova: Prova){}

//===========ENUM
// enum Ruolo 
// {
//     ADMIN = 'admin', 
//     USER = 'user', 
//     GUEST = 'guest'
// }

// type Persona = 
// {
//     nome: string, 
//     cognome: string, 
//     ruolo: Ruolo
// }

// let persona: Persona = 
// {
//     nome: '',
//     cognome:'',
//     ruolo: Ruolo.ADMIN
// }

// let ruolo: string = Ruolo.ADMIN

//===========FUNCTION
// function somma(num1:number, num2:number = 1): number//parametri di default
// {
//     return num1 + num2
// }

// function sottrazione(num1:number, num2:number = 1): number//parametri di default
// {
//     return num1 - num2
// }

// function niente(stringa:string): void
// {
//     console.log(stringa)
// }

// // let prova:Function[] = [somma]
// // console.log(prova[0](5,5))

// let prova: ((x:number, y:number) => number) [] = [somma, sottrazione]//accetta solo funzioni con queste esatte caratteristiche

// function test (x:number, cb: (resulta:string)=>void){}
// test(5, 
//     ()=>
//     {
//         console.log()
//     })

//===========COMPILER SETTINGS
// function prova()
// {
//     console.log("SETTINGS")
// }

// prova()

//=============CLASS
// abstract class Persona
// {
//     // private nome: string
//     // private cognome: string

//     // constructor(nome: string, cognome: string)
//     // {
//     //     this.nome = nome
//     //     this.cognome = cognome
//     // }

//     //scorciatoia, definisce direttamente le variabili appena definisci il livello di protezione
//     //readonly per evitare ogni tipo di modifica, definita solo alla creazione del costruttore
//     //private puoi modificare solo dalla classe iniziale
//     //public dove ti pare
//     //protected puoi modificare anche dalle classi extended
//     //abstract permette di creare metodi senza implementazione

//     static staticVar = 'sas'

//     constructor(protected nome: string, protected cognome: string){} 

//     abstract presenta(): void
//     // {
//     //     console.log(`ciao sono ${this.nome} ${this.cognome}`)
//     // }

//     saluta(persona:Persona): void
//     {
//         console.log(`ciao ${persona.nome} ${persona.cognome} molto piacere`)
//     }

//     cambiaNome(nuovoNome: string): void
//     {
//         this.nome = nuovoNome
//     }
// }

// // let persona: Persona = new Persona('ses', 'sas')
// // let persona2: Persona = new Persona('sis', 'sos')

// // persona.cambiaNome("piri")
// // persona.presenta()
// // persona2.saluta(persona)

// class Studente extends Persona
// {
//     constructor(
//         nome: string, 
//         cognome: string, 
//         private materiaPreferita: string)
//     {
//         super(nome, cognome);
//     }

//     cambia(nome: string)
//     {
//         this.nome = nome
//     }

//     presenta(): void {
//         console.log(`ciao sono ${this.nome} ${this.cognome}`)
//     }
// }

// let studente: Studente = new Studente('luca', 'rossi', 'storia')
// studente.cambia("GIOVANB")
// studente.presenta()

// ===============SINGLETON (rende unica l'istanza di una classe/ non permette duplicati)
// class Preside
// {
//     private static instance: Preside;

//     private constructor(private nome:string, private cognome:string){

//     }

//     static getInstance()
//     {
//         if(Preside.instance)
//         {
//             return this.instance
//         }

//         this.instance = new Preside("MArco", "Verdi")
//         return this.instance
//     }

//     presenta()
//     {
//         console.log(`buongiorno sono il preside ${this.cognome} ${this.nome}`)
//     }
// }

// Preside.getInstance().presenta()

//=============INTERFACE

// interface IInternet
// {
//     ip:string
//     connettiInternet():void
// }

// abstract class Dispositivo
// {
//     constructor(protected nome:string, protected anno:string){}

//     abstract accendi(): void
//     abstract spegni(): void

// }

// class Telefono extends Dispositivo
// {
//     accendi(): void {
//        console.log("Telefono ON")
//     }
    
//     spegni(): void {
//         console.log("Telefono OFF")
//     }
// }

// class Smartphone extends Dispositivo implements IInternet
// {
//     ip: string

//     constructor(nome:string, anno:string, ip:string)
//     {
//         super(nome, anno)
//         this.ip = ip
//     }

//     connettiInternet(): void 
//     {
//         console.log("Internet SP ON")
//     }

//     accendi(): void {
//        console.log("Smartphone ON")
//     }
    
//     spegni(): void {
//         console.log("Smartphone OFF")
//     }

// }

// class Computer extends Dispositivo implements IInternet
// {
//     ip: string

//     constructor(nome:string, anno:string, ip:string)
//     {
//         super(nome, anno)
//         this.ip = ip
//     }

//     connettiInternet(): void 
//     {
//         console.log("Internet PC ON")
//     }

//     accendi(): void {
//        console.log("Computer ON")
//     }
    
//     spegni(): void {
//         console.log("Computer OFF")
//     }
// }

//=========GENERICS

// const arr: Array<string> = ['fsfesef', 'efsefsefs']

// //così inferenza direttamente l'array in uscita con T
// //puoi aggiungere anche più lettere(tipi)
// function creaArray<T extends number | string>(items: T[]): T[] 
// {
//     return new Array().concat(items)
// }

// const arr1 = creaArray<number>([1,2,3,4])
// let arr2 = creaArray<string>(['a','b','c'])
// // let arr3 = creaArray<string>(['a','b','c'])
// // arr2.push('a')
// // arr2 = arr2.concat('sas')

// // console.log(arr2)

// class Prova<T>
// {
//     private lista: T[] = []

//     aggiungiItem(item:T)
//     {
//         this.lista.push(item)
//     }

//     rimuoviItem(item:T)
//     {
//         this.lista.splice(this.lista.indexOf(item,1))
//     }
// }

// const listaString = new Prova<String>()
// listaString.aggiungiItem('a')

// console.log(listaString)

//======== DECORATORS

// function Logger(messaggio: string)
// {
//     return function(constructor: any){
//         console.log(messaggio)
//         console.log(constructor)
//     }
// }

// function CreaElemento(elemento: string, id: string, nome:string)
// {
//     return function(constructor: any)
//     {
//         const container = document.getElementById('container')
//         const prova = new constructor(nome)
//         if(container)
//         {
//             container.innerHTML = elemento
//             container.querySelector('h1')!.textContent = prova.nome
//         }
//     }
// }

// @Logger("Ciao")
// @CreaElemento("<h1></h1>", 'container', 'LUCA')
// class Prova
// {
//     constructor(public nome:string)
//     {
//         console.log('Sto Creando un Oggetto Prova')
//     }
// }

// const prova = new Prova()

//===========IMPORT
import { Persona, moltiplicazione } from './function.js'
//anche con classi ovviamente

console.log(moltiplicazione(3,4))

let persona = new Persona()