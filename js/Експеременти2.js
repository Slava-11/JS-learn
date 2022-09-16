let cat={};
cat['legs']=3;
cat['name']='Garmonya';
cat['color']='Green';
console.log(cat)
let a={};
a.name=3;
a.color='White';
console.log(a)
let dinosaurs=[
    {name:'Triseraptor',age:30},
    {name:'Megaladon',age:50},
    {name:'reks',age:40}
];
console.log(dinosaurs[0]['name']);
console.log(dinosaurs[1].age);
let Oleg={age:30,luckyNumbers:[1,2,3,4,5]};
let Anton={age:50,luckyNumbers:[3,1,2,5]};
let Vadim={age:20,luckyNumbers:[1,4,5,2]};
let Chelu=[Oleg,Anton,Vadim];
console.log(Chelu[2].luckyNumbers);