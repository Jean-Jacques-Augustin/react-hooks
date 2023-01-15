import React from "react";


const url = "https://jsonplaceholder.typicode.com/todos/1";

let localstorageFake = "Name: John Cena, Age: 30, City: New York";
export default function Index() {

    const [name, setName] = React.useState<string>(""); //

    const [data, setData] = React.useState(""); //

    const loading = true;

    /**
     *  Raha ohatra ka mbola tsy compomplet le à t =0, dia afaka miandry ny valeur
     */

    const changeLocaStorage = () => {
        localstorageFake = "Name: John Test, Age: 30, City: New York";
    }

    React.useEffect(() => {
        // get data from api
        fetch(url).then(r => r.json()).then(reponse => {
            setData(reponse);
        });

    }, [url]);



    React.useEffect(() => {
        changeLocaStorage()
        setName(localstorageFake);
    } , [name , localstorageFake ,changeLocaStorage]);


    return (
        <div>
            <h1>
                Hello, {name}
            </h1>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque debitis distinctio ducimus et id iusto laboriosam libero odio officiis omnis quasi qui quia ratione recusandae repellendus reprehenderit, veritatis, voluptates voluptatum. Aliquid in nesciunt nostrum officiis sed. Atque consequuntur iusto officiis placeat quos similique voluptate? A aliquam aliquid atque doloremque, enim exercitationem iste nam necessitatibus nesciunt officiis, omnis perspiciatis praesentium quam repudiandae, sunt tempore ullam unde voluptas. Aperiam beatae commodi consequuntur dicta, enim fugit ipsam iusto laborum laudantium maiores minus modi nesciunt numquam possimus praesentium quae quis quos repudiandae sint, soluta? Aperiam beatae deleniti doloribus iusto laudantium mollitia nam, porro quod!
            </div>
        </div>
    )
}