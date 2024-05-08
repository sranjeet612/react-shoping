function DataBinding() {
    var Data = ["Apple", "Mango", "Orange", "PineApple", "Banana", "Graps"];
    var Products = {
        Name: "iPhone",
        Price: 45000,
        Descriptio: "Mobile",
    };

    var menu = [
        { Category: "Mobile", Product: ["iPhone", "Samsung", "Lava", "Redmi"] },
        { Category: "Tv", Product: ["Samsung", "Sony", "Tesla", "Onida"] },
        { Category: "Laptopn", Product: ["Dell", "Mac book", "HP", "Toshiba"] },
    ];

    return (
        <div className="container">
            <p>Data-Bindings</p>
            <ol>
                {Data.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ol>
            <hr></hr>
            <div>
                <p>Products-details</p>
                <ul>
                    <li>{Products.Name}</li>
                    <li>{Products.Price}</li>
                    <li>{Products.Descriptio}</li>
                </ul>
            </div>
            <hr></hr>

            <select>
                {menu.map((item) => (
                    <optgroup label={item.Category} key={item.Category}>
                        {
                        item.Product.map((product) => (
                            <option key={product}>{product}</option>
                        ))}
                    </optgroup>
                ))}
            </select>
        </div>
    );
}

export default DataBinding;
