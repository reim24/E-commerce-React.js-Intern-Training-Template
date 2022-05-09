import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ICategory from "../../main/interfaces/ICategory";
import Header from "../dashboard/Header"
import "./categories.css"


const Categories = () => {


    const [category, SetCategory] = useState([])

    async function getCategoriesFromServer() {
        let result = (await axios.get(`category/get-all?PageNumber=1&PageSize=20
        `)).data;
        (SetCategory(result.data))
    }

    const getOnlyFewCategories = (categories: ICategory[]) => {
        return (categories = categories.filter((category) => {
            return category.id >= 6 && category.id <= 9;
        }));
    };

    useEffect(() => {
        getCategoriesFromServer()
    }, [])


    console.log(category);


    return (
        <main className="main__">

            <Header />

            <section className="Categories_section">

                {getOnlyFewCategories(category).map(item =>
                    <Link to={`/categories/${item.id}`} key={item.id}>
                        <div className="container" key={item.id}>
                            <h1>{item.description}</h1>
                        </div>
                    </Link>
                )}

            </section>
        </main>
    )
}

export default Categories