const products = [
    {id:'1', img:'../images/cel-moto.jpg', nombre:'Motorola E7' , 
    precio:'$54999,00', cant_cuotas: '6 x 12000', cuotas: 'CUOTAS SIN INTERÉS'},
    {id:'2', img:'../images/lava-drean.jpg', nombre:'Lavarropas Drean' , 
    precio:'$43499,00', cant_cuotas: '12 x 4800', cuotas: 'CUOTAS SIN INTERÉS'},
    {id:'3', img:'../images/aire-hitachi.jpg', nombre:'Aire SPLIT Hitachi' , 
    precio:'$59999,00', cant_cuotas: '12 x 6800', cuotas: 'CUOTAS SIN INTERÉS'},
    {id:'4', img:'../images/note-daewoo.jpg' , nombre:'Notebook Daewo' , 
    precio:'$49999,00', cant_cuotas: '18 x 4000', cuotas: 'CUOTAS SIN INTERÉS'}
]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)
    })
}