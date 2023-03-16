const book = (
    {name:"Fate/strange Fake vol.4", 
    price:"175000", 
    author:"Ryōgo Narita"}
);

function bookpurchase (name, indc, intax, stock, purchased) {

    const price = book.price
    const dc = price * (indc/100);
    const dcprice = price - dc;
    const tax = dcprice * (intax/100);
    const taxprice = dcprice + tax;
    let totalPrice = 0;
    let stockLeft = stock;

    for(let i = 0; i < purchased; i++){
        if(stockLeft == 0){
            console.log("Sorry, book is out of stock");
            break;
        }
        totalPrice += taxprice;
        stockLeft--;
    }


    console.log('Original Price', price);
    console.log('Discount Amount', dc);
    console.log('Price after Discount', dcprice);
    console.log('Tax Amount', tax);
    console.log('Price after Tax', taxprice);
    console.log('Purchased', purchased);
    console.log('Total Price', totalPrice);

    if (stockLeft > 0) {
        console.log(`There are ${stockLeft} book left in stock`);
      } else {
        console.log(`Sorry, book is out of stock.`);
      }
}

bookpurchase(book, 10, 10, 10, 5);