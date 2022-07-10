
let mensData = [
    {
        img_url:"https://m.media-amazon.com/images/I/41EyV7hY5pL._AC_UL320_.jpg",
       
        name:"Nike",
        discription:"Dri-FIT Training T-Shirt",
        price:26.00,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
        id:1,
    },
    {
        img_url:"https://m.media-amazon.com/images/I/41bXKANedHL._AC_UL320_.jpg",
       
        name:"90 DEGREE BY REFLEX",
        discription:"Interval Woven Run Shorts",
        price:19.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
        id:2,
    },
    {
        img_url:"https://m.media-amazon.com/images/I/71d23cXMpKL._AC_UL320_.jpg",
       
        name:"Z by Zella",
        discription:"Seamless Crossback Bralette",
        price:7.48,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
        id:3,
    },
    {
        img_url:"https://m.media-amazon.com/images/I/71nAbKsOtHL._AC_UL320_.jpg",
        
        name:"Nike",
        discription:"Attack Sport Shorts",
        price:26.00,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
        id:4,
    },
    {
        img_url:"https://m.media-amazon.com/images/I/3198+4420OL._AC_UL320_.jpg",
       
        name:"Z by Zella",
        discription:"Interval Woven Run Shorts",
        price:17.23,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
        id:5,
    },

    {
        img_url:"https://m.media-amazon.com/images/I/61p21cELnEL._AC_UL320_.jpg",
       
        name:"Z by Zella",
        discription:"Motion Tank Dress",
        price:34.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
        id:6,
    },
    {
        img_url:"https://m.media-amazon.com/images/I/51lwWBU25ZL._AC_UL320_.jpg",
      
        name:"90 DEGREE BY REFLEX",
        discription:"Ribbed Racerback Tank Top",
        price:19.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
        id:7,
    },
    {
        img_url:"https://m.media-amazon.com/images/I/71zY9EOLVwL._AC_UL320_.jpg",
        name:"Z by Zella",
        discription:"Training Racerback Tank",
        price:14.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
        id:8,
    },
    {
        img_url:"https://m.media-amazon.com/images/I/71x5m7jV7sL._AC_UL320_.jpg",
       
        name:"90 DEGREE BY REFLEX",
        discription:"Oversized Boxy Crop T-Shirt",
        price:15.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
        id:9,
    },
    {
        img_url:"https://m.media-amazon.com/images/I/91Mfvn7xnEL._AC_UL320_.jpg",
       
        name:"Zella",
        discription:"Dri-FIT Training T-Shirt",
        price:28.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
        id:10,

    },
    {
        img_url:"https://m.media-amazon.com/images/I/81e-jp7jDxL._AC_UL320_.jpg",
       
        name:"Nike",
        discription:"Low Cut Sport Socks",
        price:9.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
        id:11,
    },
    {
        img_url:"https://m.media-amazon.com/images/I/516U9srEDyL._AC_UL320_.jpg",
        
        name:"Nike",
        discription:"Delia Woven Dress",
        price:24.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
        id:12,
    },

    {
        img_url:"https://m.media-amazon.com/images/I/71mlqlyV5xL._AC_UL320_.jpg",
       
        name:"Z by Zella",
        discription:"Hailey Ribbed Hoodie",
        price:19.99,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
        id:13,
    },
    {
        img_url:"https://m.media-amazon.com/images/I/71C4ne0aIuL._AC_UL320_.jpg",
        
        name:"90 DEGREE BY REFLEX",
        discription:"High-Low Full Jacket",
        price:34.99,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
        id:14,
    },
    {
        img_url:"https://m.media-amazon.com/images/I/51OMRGnQUlL._AC_UL320_.jpg",
       
        name:"Nike",
        discription:"Dri-FIT Training T-Shirt",
        price:19.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
        id:15,
    },
];

let main = document.getElementById("main");
let newArr = [];
function displayData(mensData){

    mensData.forEach(function(el){
        
        let innerDiv = document.createElement("div");
        innerDiv.setAttribute("class","mBox");

        let pic = document.createElement("img");
        pic.src = el.img_url;

        let nam = document.createElement("h2");
        nam.innerText = el.name;

        let des = document.createElement("p");
        des.innerText = el.discription;
        console.log(des);

        let cost = document.createElement("p");
        cost.innerText = "$"+el.price;

        let btns = document.createElement("button");
        btns.innerText = el.btn;

        let ship = document.createElement("p");
        ship.innerText = el.delivery;

        btns.addEventListener("click",function(){
            if(addToCart(el.id)===true){
                alert("Product Added Successfully😊😊")
                newArr.push(el);
            }else{
                alert("Product Already in cart")
            }
        });

        innerDiv.append(pic,nam, des,cost,btns,ship);
        main.append(innerDiv);


    });
};


displayData(mensData);

function addToCart(id){
    for(let i=0;i<newArr.length;i++){
        if(newArr[i].id===id){
            return false
        }
    }
    return true
}