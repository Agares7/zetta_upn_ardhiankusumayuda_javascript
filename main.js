const book = (
    {name:"Fate/strange Fake vol.4", 
    price:"175000", 
    author:"Ryōgo Narita"}
);

function bookpurchase (name, indc, intax) {

    const price = book.price
    const dc = price * (indc/100);
    const dcprice = price - dc;
    const tax = dcprice * (intax/100);
    const total = dcprice + tax;

    console.log('Original Price', price);
    console.log('Discount Amount', dc);
    console.log('Price after Discount', dcprice);
    console.log('Tax Amount', tax);
    console.log('Price after Tax', total);
}

bookpurchase(book, 10, 10);