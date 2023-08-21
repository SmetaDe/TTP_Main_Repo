import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { useParams } from "react-router-dom";

function Recipe() {
    let params = useParams();
    const [details, setDetails] = useState();
    const [activeTab, setActiveTab] = useState("instructions");

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData);
        console.log(detailData);
    };

    useEffect(() => {
        fetchDetails();
    }, [params.name]);

    return (
        <DetailWrapper>
            <div>
                <h2>{details && details.title}</h2>
                <img src={details && details.image} alt="" />
            </div>
            <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab("instructions")}>
                Instructions</Button>
            <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>
                Ingredients</Button>
            {activeTab === 'instructions' && (
                <div>
                    <h3 dangerouslySetInnerHTML={{ __html: details && details.summary }}></h3>
                    <p dangerouslySetInnerHTML={{ __html: details && details.instructions }}></p>
                </div>
            )}
            {activeTab === 'ingredients' && (
                <ul>
                    {details && details.extendedIngredients.map((ingredient) => (
                        <li key={ingredient.id}>{ingredient.original}</li>
                    ))}
                </ul>
            )}
        </DetailWrapper>
    );
}

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }

    h2 {
        margin-bottom: 2rem;
    }

    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
    }

    ul {
        margin-top: 2rem;
    }
`;

const Button = styled.button`
    padding: 0.5rem 1rem; 
    font-size: 0.9rem; 
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 1rem;
    font-weight: 600;

    &.active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
`;

export default Recipe;
