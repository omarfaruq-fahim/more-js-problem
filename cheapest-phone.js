const phones = [
    {name: 'samsung s5', price: 45000, camera: 48, storage: 32},
    {name: 'walton m32', price: 15000, camera: 16, storage: 8},
    {name: 'shaomi m3', price: 12000, camera: 32, storage: 8},
    {name: 'oppo a2', price: 17000, camera: 64, storage: 8},
    {name: 'nokia n95', price: 8000, camera: 3, storage: 8},
    {name: 'htc h81', price: 25000, camera: 64, storage: 8},
];

let cheapest = phones[0];
for(const phone of phones){
    if(phone.price < cheapest.price){
        cheapest =phone;
    }
}
console.log(cheapest);